/* =====================================================================
   SATYA DENIM — SITE CONFIG
   ---------------------------------------------------------------------
   👉 EDIT THIS FILE to update your shop details. No coding needed.
   ===================================================================== */

const SITE_CONFIG = {
  // ---- Business info ----
  brandName: "Satya Denim",
  tagline: "Custom Denim & Jeans • Men & Women • Perfect Fit",

  // =====================================================================
  //  HERO TEXT — highlight markers
  //   *word*   -> GOLD word (mild golden glow)
  //   ~word~   -> GOLD word + BOUNCE animation (extra highlight)
  //  Everything else is normal white text with a soft glow so it stays
  //  crisp over the photo and never smudges into the banner.
  // =====================================================================
  heroTagline: "Style that ~fits you~",
  heroSubtext: "Custom denim & jeans for men & women. Pick your *wash* & *size*, add to cart, order on *WhatsApp*.",

  // ---- Hero background slideshow (WebP first, JPG fallback) ----
  heroImagePath: "images/hero/",
  heroFormats: ["webp", "jpg"],
  heroSlides: ["hero1", "hero2", "hero3", "hero4", "hero5", "hero6", "hero7", "hero8", "hero9", "hero10"],
  heroSlideInterval: 5000,

  // ---- Exclusive Offers (auto-rotating, no click) ----
  offers: [
    "🎉 10% OFF your first custom-fit order!",
    "🚚 Free delivery in Kampala over UGX 200,000",
    "✂️ Free tailoring on made-to-measure jeans this month",
    "👖 Buy 2 jeans, get a denim shirt at 50% OFF",
  ],
  offersInterval: 3000,
  offersTitle: "Exclusive Offers",

  // ---- Header logo (the "S" slot) ----
  logo: "images/logo.png",

  // ---- Custom cursor (golden scissors). "" = normal pointer ----
  cursor: "images/scissors-cursor.png",
  cursorHotspot: "4 4",

  // ---- WhatsApp number (VERY IMPORTANT) ----
  whatsappNumber: "256700000000",

  // ---- Extra contact / location (shown in footer) ----
  phoneDisplay: "+256 700 000 000",
  location: "Kampala, Uganda",
  hours: "Mon–Sat: 8:00 AM – 7:00 PM",

  // ---- Social media (top bar + footer). "" hides a platform. ----
  socials: {
    whatsapp:  "",
    instagram: "https://instagram.com/satyadenim",
    facebook:  "https://facebook.com/satyadenim",
    tiktok:    "",
    youtube:   "",
    twitter:   "",
  },

  // ---- Currency shown before prices ----
  currency: "UGX",

  // ---- Messages ----
  orderMessage: "Hello Satya Denim 👋, I'm interested in *{name}* ({price}). Is it available?",
  cartMessageHeader: "Hello Satya Denim 👋, I'd like to order the following:",
};
