/*
═══════════════════════════════════════════════════════════════
  AYDOS PASTANESİ — config.js (Golden Master v7.3)
  index.html + config.js + jpg'ler AYNI klasörde.

  v7.3 YENİLİKLERİ (bu demoda aktif):
  1) sectionOrder → bölüm sırası CONFIG'den. Boş [] = varsayılan sıra.
  2) Menü ürününe img: "dosya.jpg" eklersen "📷 Ürünü Gör" butonu
     çıkar. Fotoğraf SAYFA AÇILIRKEN İNDİRİLMEZ, ancak butona
     basılınca yüklenir (site hafif kalır). img yok = buton yok.

  16.07 GÜNCELLEME (Fatih ustanın 14 Tem WhatsApp mesajından):
  - flavorExtras: 7 ekstra malzeme fiyatlarıyla girildi (TL)
  - creams: Kakaolu / Vanilyalı (iç kreması seçimi)
  - priceNote: baz içerik (muz, damla çikolata, çakıl taşları)

  BEKLEYEN GİRDİLER (Fatih ustadan):
  - Menü fiyatları ("—" olanlar) + porsiyon baz fiyatları
  - İşletme adı/adres/telefon/WhatsApp — anlaşınca Aydos
    bilgileri Fatih'inkilerle değiştirilecek
═══════════════════════════════════════════════════════════════
*/
const CONFIG = {

/* ── BÖLÜM 1 — SIK GÜNCELLENEN ── */

  priceUpdated: "",
  announcement: "",
  vacationNote: "",
  vacationLock: false,

  siteDiscount: 0,
  paymentMethods: [],

  sectionOrder: ["menu", "siparis", "urunler"],  // v7.3: menü → sipariş formu → vitrin

  products: [
    { name: "Yıldönümü Pastası", desc: "İnci detaylı, zarif ve şık tasarım", img: "yildonumu.jpg" },
    { name: "Katlı Doğum Günü Pastası", desc: "Renkli kremalı, kişiye özel katlı tasarım", img: "dogumgunu.jpg" },
    { name: "Bekarlığa Veda Pastası", desc: "Eğlenceli ve yaratıcı özel gün pastası", img: "bekarligaveda.jpg" },
    { name: "Prenses Pasta", desc: "Taç detaylı, gösterişli ve şık", img: "prenses.jpg" },
    { name: "Unicorn Pasta", desc: "Rengarenk, çocukların hayallerinden ilham alan", img: "unicorn.jpg" }
  ],

  menuNote: "Fiyatlar site yayına alınınca eklenecektir",
  menu: [
    {
      category: "Yaş Pastalar",
      items: [
        { name: "Çikolatalı Pasta", price: "—", desc: "kakao, krema · süt ürünü ve gluten içerir" },
        { name: "Meyveli Pasta", price: "—", desc: "mevsim meyveleri, krema · süt ürünü içerir" },
        { name: "Karamel Soslu Pasta", price: "—", desc: "karamel, krema · süt ürünü içerir" },
        { name: "Kişiye Özel Tasarım Pasta", price: "—", img: "prenses.jpg" }
      ]
    },
    {
      category: "Tatlılar",
      items: [
        { name: "Fırın Sütlaç", price: "—", desc: "süt, pirinç · süt ürünü içerir" },
        { name: "Supangle", price: "—", desc: "çikolata, süt · süt ürünü içerir" },
        { name: "Ekler", price: "—", desc: "krema, çikolata · süt ürünü ve gluten içerir" },
        { name: "Profiterol", price: "—", desc: "çikolata sosu, krema · süt ürünü içerir" }
      ]
    },
    {
      category: "Börek & Baklava",
      items: [
        { name: "Peynirli Su Böreği (tepsi, 3.5 kg)", price: "900 TL", desc: "gel-al · Instagram duyurusundan" },
        { name: "Fıstıklı Baklava", price: "—", desc: "Antep fıstığı, şerbet · kuruyemiş ve gluten içerir" },
        { name: "Cevizli Baklava", price: "—", desc: "ceviz, şerbet · kuruyemiş ve gluten içerir" },
        { name: "Soğuk Baklava", price: "—" }
      ]
    },
    {
      category: "İçecekler",
      items: [
        { name: "Çay", price: "—" },
        { name: "Türk Kahvesi", price: "—" },
        { name: "Limonata", price: "—" }
      ]
    }
  ],

  orderForm: {
    portions: ["4", "6", "8", "10", "12", "15", "20"],
    weddingPortions: [],
    portionPrices: {},
    flavorExtras: {
      "Böğürtlen (100gr)": 100,
      "Yaban Mersini (100gr)": 100,
      "Antep Fıstıklı Draje (100gr)": 100,
      "Kestane Şekeri": 100,
      "Çilek": 50,
      "Vişne": 100,
      "Frambuaz & Orman Meyveleri": 100
    },
    priceNote: "Pastamızın içeriğinde muz, damla çikolata ve çakıl taşları bulunur. Ekstra malzemeler ücrete tabidir.",
    photoNote: "Aklınızdaki pastanın fotoğrafını sipariş sonrası WhatsApp üzerinden göndermeyi unutmayın!",
    rules: [
      "Tasarım pastalar en az 2 gün önceden sipariş verilmelidir.",
      "Pasta modelinin fotoğrafını WhatsApp üzerinden iletebilirsiniz."
    ],
    minDaysAhead: 0,
    deliveryMethods: [],
    deliveryTimeRange: "",
    candles: [],
    flavors: [
      "Böğürtlen (100gr)",
      "Yaban Mersini (100gr)",
      "Antep Fıstıklı Draje (100gr)",
      "Kestane Şekeri",
      "Çilek",
      "Vişne",
      "Frambuaz & Orman Meyveleri"
    ],
    creams: ["Kakaolu", "Vanilyalı"],
    notes: []
  },

/* ── BÖLÜM 2 — KURULUMDA BİR KEZ ── */

  name: "Aydos Pastanesi",
  tagline: "1959'dan beri Ankara'nın pastacısı",
  about: "1959 yılında Ankara Beşevler'de kurulan Aydos Pastanesi, bugün Mamak Boğaziçi'nde lezzet, kalite ve güven ilkesiyle hizmet vermeye devam ediyor. Yaş pastadan baklavaya, börekten özel tasarım pastalara kadar geniş ürün yelpazesiyle her özel gününüzde yanınızdayız. Ankara'nın en uygun fiyatlı pastacısı olarak müşterilerimize her gün taze ve el yapımı lezzetler sunuyoruz.",

  logo: "logo.jpg",

  colors: {
    primary:  "#5B3219",
    secondary:"#3A1F0F",
    accent:   "#C4963A",
    bg:       "#FAF3E8",
    text:     "#2A1809"
  },

  decor: { img: "", opacity: 0.2, side: "both" },

  intro: true,
  particles: "auto",
  cartEnabled: true,

  faq: [],

  branches: [
    {
      name: "Aydos Pastanesi — Boğaziçi (Tek Şube)",
      address: "Boğaziçi Mah. 1. Cad. No:64, Mamak/Ankara (Yunus Market karşısı)",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Aydos+Pastanesi+Bogazici+Mamak+Ankara",
      phone: "+903123681818",
      hours: "Her gün 08:30 – 21:30"
    }
  ],

/* ── BÖLÜM 3 — SABİT ── */

  phone: "+903123681818",
  whatsapp: "905453637468",
  instagram: "aydospastanesi",
  sheetsUrl: ""
};
/* ═══════════ CONFIG SONU ═══════════ */
