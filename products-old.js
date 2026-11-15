// AYUDAR product catalog. Prices are also validated again in api/create-checkout-session.js.
const AYUDAR_PRODUCTS = [
  {
    "id": "t-shirt",
    "name": "AYUDAR Tシャツ",
    "shortName": "Tシャツ",
    "variants": [
      {
        "id": "154679809",
        "label": "ホワイト（白狼）",
        "price": 4500,
        "sizes": [
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/f4baaaf11bdf1865f745297ceabe25db.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【Ayudar Wolf T-Shirt】 Ayudarを象徴する「狼」をデザインしたオリジナルTシャツ。 素材：【コットン】 サイズ：【M / L / XL 】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 （例）身長１５５cm サイズM（少しゆったり） 【ブラック / ホワイト】 サイズ 身丈 身巾 肩巾 袖丈 S 65 50 45 20 M 68 53 48 21 L 71 56 51 22 XL 74 59 54 23 ※単位",
        "sourceUrl": "https://ayudar01gram.base.shop/items/154679809"
      },
      {
        "id": "154680755",
        "label": "ブラック（白狼）",
        "price": 4500,
        "sizes": [
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/55dbcf5f1838d3747bd7121cb2f69624.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【Ayudar Wolf T-Shirt】 素材：【コットン】 サイズ：【M / L / XL 】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ブラック / ホワイト】 サイズ 身丈 身巾 肩巾 袖丈 S 65 50 45 20 M 68 53 48 21 L 71 56 51 22 XL 74 59 54 23 ※単位",
        "sourceUrl": "https://ayudar01gram.base.shop/items/154680755"
      },
      {
        "id": "154685189",
        "label": "ブラック（黒狼）",
        "price": 4500,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/43399561a14c5130fa716d48ad8ccdc8.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR Tシャツ】 素材：【コットン】（着心地に配慮した柔らかな仕上がり） サイズ：【S /M / L / XL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 ・ブラック サイズ 身丈 身巾 肩巾 袖丈 S 65 50 45 20 M 68 53 48 21 L 71 56 51 22 XL 74 59 54 23 ※単位",
        "sourceUrl": "https://ayudar01gram.base.shop/items/154685189"
      }
    ]
  },
  {
    "id": "zip-parka",
    "name": "AYUDAR ジップパーカー",
    "shortName": "ジップパーカー",
    "variants": [
      {
        "id": "155947076",
        "label": "ブラック",
        "price": 9000,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/42d2b69e023f8e6526cd9f09eaf63652.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR ジップパーカー】 素材：【ポリエステル / コットン】（柔らかく、快適な着用感を実現します） サイズ：【S / M / L / XL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ブラック】 サイズ 身丈 身幅 肩幅 袖丈 S 66 52 47 60 M 69 55 50 61 L 72 58 53 62 XL 75 61 56 63 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155947076"
      },
      {
        "id": "155948935",
        "label": "ライトベージュ",
        "price": 7700,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/00b3bfb6b26a283e87067c40d8dd6d39.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR ジップパーカー】 素材：【ポリエステル / コットン】（柔らかく、快適な着用感を実現） サイズ：【S / M / L / XL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ライトベージュ】 サイズ 身丈 身幅 肩幅 袖丈 S 66 52 45 59 M 69 55 48 60 L 72 58 51 61 XL 75 61 54 62 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155948935"
      },
      {
        "id": "155948339",
        "label": "ホワイト",
        "price": 7700,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/fe8d76ed023d414eb5498d4896a84495.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR ジップパーカー】 素材：【ポリエステル / コットン】（柔らかく、快適な着用感を実現） サイズ：【S / M / L / XL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ホワイト】 サイズ 身丈 身巾 肩巾 袖丈 S 64 52 45 59 M 67 55 48 60 L 70 58 51 61 XL 73 62 54 62 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155948339"
      }
    ]
  },
  {
    "id": "jacket",
    "name": "AYUDAR ジャケット",
    "shortName": "ジャケット",
    "variants": [
      {
        "id": "161494447",
        "label": "ブラック＆ホワイト",
        "price": 7500,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/65033be43f286908af7d6e26e4c7c3ee.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR ジャケット】 素材：【ポリエステル】（軽量で耐久性があり、お手入れも簡単） サイズ：【S / M / L / XL】 【ブラック&ホワイト】 サイズ 身丈 身幅 裄丈 S 60 52 80 M 64 57 84 L 68 62 87 XL 71 68 90",
        "sourceUrl": "https://ayudar01gram.base.shop/items/161494447"
      }
    ]
  },
  {
    "id": "sweat-pants",
    "name": "AYUDAR スウェットパンツ",
    "shortName": "スウェットパンツ",
    "variants": [
      {
        "id": "155949578",
        "label": "ホワイト",
        "price": 5500,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/f940b1cfefe414780f1e9c7ffac8f938.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR スウェットパンツ】 素材：【ポリエステル / コットン】（柔らかく、快適な着心地を実現） サイズ：【S / M / L / XL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ホワイト】 サイズ 総丈 股下 ウエスト（ヌード寸法） S 96 73 72〜80 M 100 75 76〜84 L 104 76 79〜87 XL 108 78 82〜90 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155949578"
      },
      {
        "id": "155949832",
        "label": "ブラック",
        "price": 5500,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/0a544ec6cdaea29fdddce1914e09f797.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR スウェットパンツ】 素材：【ポリエステル / コットン】（柔らかく、快適な着心地を実現） サイズ：【S / M / L / XL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ブラック】 サイズ 総丈 股下 ウエスト（ヌード寸法） S 96 73 72〜80 M 100 75 76〜84 L 104 76 79〜87 XL 108 78 82〜90 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155949832"
      },
      {
        "id": "155950953",
        "label": "チャコールグレー",
        "price": 5500,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/c0b145f7449a2ac46043772d681933ad.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR スウェットパンツ】 素材：【ポリエステル / コットン】（柔らかく、快適な着心地を実現） サイズ：【S / M / L / XL】 【チャコールグレー】 サイズ 総丈 股下 ウエスト（ヌード寸法） S 96 73 72〜80 M 100 75 76〜84 L 104 76 79〜87 XL 108 78 82〜90 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155950953"
      }
    ]
  },
  {
    "id": "spray-wolf-tee",
    "name": "AYUDAR スプレー缶狼",
    "shortName": "スプレー缶狼Tシャツ",
    "variants": [
      {
        "id": "154968613",
        "label": "ホワイト",
        "price": 4000,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/345523309b1ca99d67a4676bd7ddff08.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR スプレー缶狼】 AYUDARのスプレー缶と狼をモチーフにしたデザインTシャツ。サイズ：【S / M / L / XL】",
        "sourceUrl": "https://ayudar01gram.base.shop/items/154968613"
      }
    ]
  },
  {
    "id": "slat-pants",
    "name": "AYUDAR スラットパンツ",
    "shortName": "スラットパンツ",
    "variants": [
      {
        "id": "161494667",
        "label": "ブラック",
        "price": 6500,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/24fcad4b2165d7bc65187ab9ca2e418f.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR スラットパンツ】 素材：【ポリエステル & スパンデックス】（柔軟性があり、お手入れも簡単） サイズ：【S / M / L / XL】 【ブラック / ホワイト】 サイズ ウエスト寸法 総丈 股下 股ワタリ S 70〜78 92 66 34 M 74〜83 96 69 35 L 79〜89 100 72 36 XL 85〜95 104 75 37",
        "sourceUrl": "https://ayudar01gram.base.shop/items/161494667"
      }
    ]
  },
  {
    "id": "hoodie",
    "name": "AYUDAR フーディー",
    "shortName": "フーディー",
    "variants": [
      {
        "id": "155950336",
        "label": "ホワイト",
        "price": 7200,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/ce79adcb390bb6bd97548eaf06eb9485.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR フーディー】 素材：【ポリエステル / コットン】（柔らかく、快適な着心地を実現） サイズ：【S / M / L / XL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ホワイト】 サイズ 身丈 身幅 肩幅 袖丈 S 64 47 41 61 M 67 50 44 62 L 70 53 47 63 XL 73 56 50 63 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155950336"
      },
      {
        "id": "155950565",
        "label": "ブラック",
        "price": 7200,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/2e0f105e7f024c9884d6749602a63563.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR フーディー】 素材：【ポリエステル / コットン】（柔らかく、快適な着心地を実現） サイズ：【S / M / L / XL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ブラック】 サイズ 身丈 身幅 肩幅 袖丈 S 64 47 41 61 M 67 50 44 62 L 70 53 47 63 XL 73 56 50 63 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155950565"
      },
      {
        "id": "155950799",
        "label": "グレー",
        "price": 7200,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/8e76f56947cb34c71fa36c7690cde757.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR フーディー】 素材：【ポリエステル / コットン】（柔らかく、快適な着心地を実現） サイズ：【S / M / L / XL】 【グレー】 サイズ 身丈 身幅 肩幅 袖丈 S 64 47 41 61 M 67 50 44 62 L 70 53 47 63 XL 73 56 50 63 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155950799"
      }
    ]
  },
  {
    "id": "pull-parka",
    "name": "AYUDAR プルパーカー",
    "shortName": "プルパーカー",
    "variants": [
      {
        "id": "165442422",
        "label": "ライトベージュ",
        "price": 9800,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/7e5ae15e9f5f29403c9917c115774ead.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR プルパーカー】 素材：【綿 & ポリエステル】 （柔らかな肌触りで、裏起毛で温かさと快適さを兼ね備えています） サイズ：【S / M / L / XL】 【ライトベージュ】 サイズ 着丈 身幅 肩幅 袖丈 S 64 50 45 58 M 68 53 48 59 L 72 56 51 60 XL 76 61 54 61 暖かな着心地で、カジュアルにもフォーマルにも活躍するAYUDAR プルパーカー。",
        "sourceUrl": "https://ayudar01gram.base.shop/items/165442422"
      },
      {
        "id": "165446779",
        "label": "ホワイト",
        "price": 9800,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/ea39200a4719bff9ec47c77ed8da848b.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR プルパーカー】 素材：【綿 & ポリエステル】 （柔らかな肌触りで、裏起毛が心地よい温かさを提供します） サイズ：【S / M / L / XL】 【ホワイト】 サイズ 身丈 身巾 肩巾 袖丈 S 64 52 45 59 M 67 55 48 60 L 70 58 51 61 XL 73 62 54 62 AYUDAR プルパーカーは、肌触りの良さと温かさを兼ね備えた、寒い季節にぴったりなアイテムです。カジュアルな日常使いはもちろん、友人とのお出かけにも非常に使いやすい一着です！シンプルでありながらスタイリッシュなデザインが、さまざまなコーディネートにマッチし、あなたの魅力を引",
        "sourceUrl": "https://ayudar01gram.base.shop/items/165446779"
      },
      {
        "id": "165443212",
        "label": "ブラック",
        "price": 9800,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/45ae157d395ff46e75b8d466bdff551a.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR プルパーカー】 素材：【綿 & ポリエステル】 （柔らかな肌触りで、裏起毛仕様が心地よい温かさを提供します） サイズ：【S / M / L / XL】 【ブラック】 サイズ 身丈 身巾 肩巾 袖丈 S 64 52 45 59 M 67 55 48 60 L 70 58 51 61 XL 73 62 54 62 AYUDAR プルパーカーは、寒い季節にもぴったりなアイテムで、暖かな着心地が特長です。カジュアルなシーンはもちろん、スマートなコーディネートにも対応可能。デイリーユースに最適です！トレンドに合わせたスタイルで、あなたの個性を引き立てます。楽しいコーディネートにぜひ加えて",
        "sourceUrl": "https://ayudar01gram.base.shop/items/165443212"
      },
      {
        "id": "165444778",
        "label": "グレー",
        "price": 9800,
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/ab30b80d0a6e5ee6d5f1c25270bf5b72.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR プルパーカー】 素材：【綿 & ポリエステル】 （柔らかな肌触りで、裏起毛が温かさと快適さを提供します） サイズ：【S / M / L / XL】 【グレー】 サイズ 着丈 身幅 肩幅 袖丈 S 64 52 45 59 M 67 55 48 60 L 70 58 51 61 XL 73 62 54 62 AYUDAR プルパーカーは、心地よい暖かさで寒い季節にぴったりなアイテムです。カジュアルはもちろん、ちょっとしたお出かけにも活躍します！シンプルなデザインがどんなコーディネートにもマッチし、あなたのスタイルを引き立てる一着です。ぜひお気軽にご利用ください！",
        "sourceUrl": "https://ayudar01gram.base.shop/items/165444778"
      }
    ]
  },
  {
    "id": "mini-bag",
    "name": "AYUDAR ミニバッグ",
    "shortName": "ミニバッグ",
    "variants": [
      {
        "id": "155982462",
        "label": "ブラック",
        "price": 4200,
        "sizes": [
          "フリー"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/9f75ac4e38a90b75f04d73e8070f1be4.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR ミニバッグ】 素材：【合成皮革】 【ブラック】 サイズ 横幅 縦幅 マチ 持ち手 S 30 20 10 29",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155982462"
      }
    ]
  },
  {
    "id": "logo-tee",
    "name": "AYUDAR ロゴT",
    "shortName": "ロゴT",
    "variants": [
      {
        "id": "154682908",
        "label": "ホワイト",
        "price": 5500,
        "sizes": [
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/acb3dbb2d4ddf0f49fb047f31045fee9.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR ロゴT】 素材：【コットン】（柔らかな着心地を実現） サイズ：【 M / L / XL/ XXL 】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ホワイト】 サイズ 身丈 身幅 肩幅 袖丈 M 69 52 44 60 L 73 55 48 61 XL 77 58 52 62 XXL 81 63 56 63 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/154682908"
      },
      {
        "id": "154700773",
        "label": "ブラック",
        "price": 5500,
        "sizes": [
          "M",
          "L",
          "XL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/69a112d8f6c0359dae2bd098db62750c.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR 】 素材：【コットン】（肌触りが良く、快適な着用感を実現） サイズ：【 M / L / XL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ブラック】 サイズ 身丈 身幅 肩幅 袖丈 M 69 52 44 60 L 73 55 48 61 XL 77 58 52 62 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/154700773"
      }
    ]
  },
  {
    "id": "long-tee",
    "name": "AYUDAR ロンT",
    "shortName": "ロンT",
    "variants": [
      {
        "id": "155945663",
        "label": "ブラック",
        "price": 6500,
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/f9a30db53976fa11ebde262f0029a9eb.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR ロンT】 素材：【コットン】（柔らかく、通気性の良い快適な着用感を実現） サイズ：【S / M / L / XL / XXL】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 【ブラック】 サイズ 着丈 身幅 肩幅 袖丈 S 65 49 42 60 M 69 52 45 62 L 73 55 48 63 XL 77 58 52 64 XXL 81 61 56 65 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155945663"
      },
      {
        "id": "155945448",
        "label": "ホワイト",
        "price": 6500,
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "image": "https://baseec-img-mng.akamaized.net/images/item/origin/38361d64de0988c921aae0513b14257e.png?imformat=generic&q=90&im=Resize,width=640,type=normal",
        "description": "【AYUDAR ロンT】 素材：【コットン】（柔らかく、通気性の良い快適な着用感を実現） サイズ：【S / M / L / XL / XXL 】 ※詳しいサイズはサイズ表をご確認ください。 ※商品によって多少の個体差がございます。 ホワイト サイズ 着丈 身幅 肩幅 袖丈 S 65 49 42 60 M 69 52 45 62 L 73 55 48 63 XL 77 58 52 64 XXL 81 61 56 65 ※単位：cm",
        "sourceUrl": "https://ayudar01gram.base.shop/items/155945448"
      }
    ]
  }
];

globalThis.AYUDAR_PRODUCTS = AYUDAR_PRODUCTS;

if (typeof module !== "undefined" && module.exports) {
  module.exports = AYUDAR_PRODUCTS;
}
