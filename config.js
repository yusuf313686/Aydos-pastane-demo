/*
═══════════════════════════════════════════════════════════════
  FATİH KARAHAN (BÖĞÜRTLENCİ) — config.js (Golden Master v7.3)
  index.html + config.js + jpg'ler AYNI klasörde.

  KAYNAK: Fatih ustanın 14 Tem WhatsApp mesajı —
  iç kreması (kakaolu/vanilyalı) + ekstra malzeme fiyat listesi
  birebir işlendi. flavorExtras fiyatları TL cinsinden sayı.

  BEKLEYEN GİRDİLER (Fatih ustadan):
  - İşletme adı → name/tagline/about PLACEHOLDER (guard yakalar)
  - Telefon / WhatsApp numarası (sipariş formu şu an PLACEHOLDER
    numaraya gider — YAYINA ALMADAN ÖNCE MUTLAKA DEĞİŞTİR)
  - Adres + çalışma saatleri (branches)
  - Instagram kullanıcı adı
  - Baz pasta fiyatları (portionPrices boş — porsiyon seçilir
    ama baz fiyat 0 görünür, sadece ekstralar toplanır)
  - Logo + ürün fotoğrafları
  - Renkler şimdilik böğürtlen teması (mor/koyu) — onaya sunulacak
═══════════════════════════════════════════════════════════════
*/
const CONFIG = {

/* ── BÖLÜM 1 — SIK GÜNCELLENEN ── */

  priceUpdated: "16.07.2026",
  announcement: "",
  vacationNote: "",
  vacationLock: false,

  siteDiscount: 0,
  paymentMethods: [],

  sectionOrder: ["siparis", "menu", "urunler"],  // Fatih'te güçlü yan sipariş formu → en üste

  products: [
    { name: "Böğürtlenli Pasta", desc: "Taze böğürtlen, ustamızın imza lezzeti", img: "PLACEHOLDER.jpg" },
    { name: "Orman Meyveli Pasta", desc: "Frambuaz ve orman meyveleri ile", img: "PLACEHOLDER.jpg" },
    { name: "Kişiye Özel Tasarım Pasta", desc: "Model fotoğrafınızı WhatsApp'tan iletin", img: "PLACEHOLDER.jpg" }
  ],

  menuNote: "Fiyatlar site yayına alınınca eklenecektir",
  menu: [
    {
      category: "Yaş Pastalar",
      items: [
        { name: "Klasik Pasta", price: "—", desc: "muz, damla çikolata ve çakıl taşları içerir · süt ürünü ve gluten içerir" },
        { name: "Böğürtlenli Pasta", price: "—", desc: "taze böğürtlen, krema · süt ürünü içerir" },
        { name: "Kişiye Özel Tasarım Pasta", price: "—" }
      ]
    }
  ],

  orderForm: {
    portions: ["4", "6", "8", "10", "12", "15", "20"],
    weddingPortions: [],
    portionPrices: {},   // BEKLİYOR — baz fiyatlar gelince doldurulacak
    flavorExtras: {      // Fatih ustanın 14 Tem mesajından birebir (TL)
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
    creams: ["Kakaolu", "Vanilyalı"],   // iç kreması — Fatih ustanın ilk sorusu
    notes: []
  },

/* ── BÖLÜM 2 — KURULUMDA BİR KEZ ── */

  name: "PLACEHOLDER Pastanesi",
  tagline: "PLACEHOLDER",
  about: "PLACEHOLDER",

  logo: "PLACEHOLDER.jpg",

  colors: {
    primary:  "#4A2C5A",   // böğürtlen moru
    secondary:"#2E1B38",
    accent:   "#B85C8A",
    bg:       "#F7F0F5",
    text:     "#241528"
  },

  decor: { img: "", opacity: 0.2, side: "both" },

  intro: true,
  particles: "auto",
  cartEnabled: true,

  faq: [],

  branches: [
    {
      name: "PLACEHOLDER",
      address: "PLACEHOLDER",
      mapsUrl: "",
      phone: "PLACEHOLDER",
      hours: "PLACEHOLDER"
    }
  ],

/* ── BÖLÜM 3 — SABİT ── */

  phone: "PLACEHOLDER",
  whatsapp: "PLACEHOLDER",   // ⚠️ YAYINA ALMADAN ÖNCE FATİH'İN NUMARASI GİRİLECEK
  instagram: "PLACEHOLDER",
  sheetsUrl: ""
};
/* ═══════════ CONFIG SONU ═══════════ */
