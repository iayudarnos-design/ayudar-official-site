const products = require('../products.js');

const MAX_QUANTITY_PER_ITEM = 10;
const MAX_ITEMS = 20;

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function getOrigin(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'ayudar-ec.vercel.app';
  return `${proto}://${host}`;
}

function findProduct(productId) {
  return products.find((product) => product.id === productId);
}

function findVariant(product, variantId) {
  return product?.variants.find((variant) => variant.id === variantId);
}

function encodeForm(params, prefix, value) {
  if (value === undefined || value === null) return;
  const key = prefix;
  if (Array.isArray(value)) {
    value.forEach((item, index) => encodeForm(params, `${key}[${index}]`, item));
    return;
  }
  if (typeof value === 'object') {
    Object.entries(value).forEach(([childKey, childValue]) => {
      encodeForm(params, `${key}[${childKey}]`, childValue);
    });
    return;
  }
  params.append(key, String(value));
}

function toFormBody(data) {
  const params = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => encodeForm(params, key, value));
  return params;
}

async function stripeRequest(path, { method = 'GET', body } = {}) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    const error = new Error('Stripeの秘密キーがVercelに設定されていません。');
    error.statusCode = 500;
    throw error;
  }

  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...(body ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}),
    },
    body: body ? toFormBody(body) : undefined,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data?.error?.message || 'Stripeでエラーが発生しました。');
    error.statusCode = response.status;
    error.stripe = data?.error;
    throw error;
  }
  return data;
}

function validateItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    const error = new Error('カートが空です。');
    error.statusCode = 400;
    throw error;
  }
  if (items.length > MAX_ITEMS) {
    const error = new Error('カートの商品数が多すぎます。');
    error.statusCode = 400;
    throw error;
  }

  const merged = new Map();
  for (const item of items) {
    const product = findProduct(item?.productId);
    const variant = product && findVariant(product, item?.variantId);
    const size = item?.size;
    const quantity = item?.quantity;

    if (!product || !variant || !variant.sizes.includes(size) || (variant.soldOutSizes || []).includes(size)) {
      const error = new Error('カート内に確認できない商品があります。カートを空にして選び直してください。');
      error.statusCode = 400;
      throw error;
    }
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY_PER_ITEM) {
      const error = new Error('数量は1〜10の範囲で指定してください。');
      error.statusCode = 400;
      throw error;
    }

    const key = `${product.id}:${variant.id}:${size}`;
    const existing = merged.get(key);
    if (existing) {
      existing.quantity += quantity;
      if (existing.quantity > MAX_QUANTITY_PER_ITEM) {
        const error = new Error('同じ商品は10点までです。');
        error.statusCode = 400;
        throw error;
      }
    } else {
      merged.set(key, { product, variant, size, quantity });
    }
  }
  return [...merged.values()];
}

async function handleGet(req, res) {
  const sessionId = req.query?.session_id;
  if (!sessionId || typeof sessionId !== 'string' || !sessionId.startsWith('cs_')) {
    return sendJson(res, 400, { error: '決済セッションIDが正しくありません。' });
  }

  const session = await stripeRequest(`checkout/sessions/${encodeURIComponent(sessionId)}`);
  return sendJson(res, 200, {
    status: session.status,
    payment_status: session.payment_status,
    amount_total: session.amount_total,
    currency: session.currency,
    customer_email: session.customer_details?.email || null,
    customer_name: session.customer_details?.name || null,
  });
}

async function handlePost(req, res) {
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  const items = validateItems(body?.items);
  const origin = getOrigin(req);
  const orderSummary = items
    .map(({ product, variant, size, quantity }) => `${product.name}/${variant.label}/${size} x${quantity} (BASE:${variant.id})`)
    .join(' | ')
    .slice(0, 480);

  const lineItems = items.map(({ product, variant, size, quantity }) => ({
    quantity,
    price_data: {
      currency: 'jpy',
      unit_amount: variant.price,
      tax_behavior: 'inclusive',
      product_data: {
        name: `${product.name} / ${variant.label} / サイズ ${size}`,
        description: `受注生産 / 送料無料 / 元BASE商品ID: ${variant.id}`,
        images: [variant.image],
        metadata: {
          product_id: product.id,
          source_item_id: variant.id,
          variant_label: variant.label,
          size,
        },
      },
    },
  }));

  const session = await stripeRequest('checkout/sessions', {
    method: 'POST',
    body: {
      mode: 'payment',
      locale: 'ja',
      success_url: `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop.html?checkout=cancelled`,
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ['JP'],
      },
      phone_number_collection: { enabled: true },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            display_name: '送料無料（受注生産）',
            fixed_amount: { amount: 0, currency: 'jpy' },
          },
        },
      ],
      payment_intent_data: {
        description: `AYUDAR order: ${orderSummary}`,
        metadata: { order_summary: orderSummary },
      },
      metadata: { order_summary: orderSummary },
    },
  });

  if (!session.url) throw new Error('Stripe決済画面のURLを取得できませんでした。');
  return sendJson(res, 200, { url: session.url, session_id: session.id });
}

module.exports = async function handler(req, res) {
  try {
    if (req.method === 'GET') return await handleGet(req, res);
    if (req.method === 'POST') return await handlePost(req, res);
    res.setHeader('Allow', 'GET, POST');
    return sendJson(res, 405, { error: '対応していないリクエストです。' });
  } catch (error) {
    console.error('AYUDAR checkout error:', error);
    return sendJson(res, error.statusCode || 500, {
      error: error.message || '決済処理でエラーが発生しました。',
    });
  }
};
