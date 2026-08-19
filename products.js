/* =====================================================================
   SATYA DENIM — PRODUCTS / STYLES
   ===================================================================== */

const CATEGORIES = ["Jeans", "Shirts", "Jackets", "Custom Fit"];

const PRODUCTS = [
  // JEANS
  { name: "Classic Straight Jeans", price: 65000, category: "Jeans", gender: "Men",
    image: "images/sample-1.svg", tag: "Bestseller",
    washes: ["Dark Wash", "Medium Wash", "Black"], waists: [28,30,32,34,36,38,40], lengths: [30,32,34], allowCustom: true },
  { name: "Slim Fit Dark Wash", price: 70000, category: "Jeans", gender: "Men",
    image: "images/sample-2.svg", tag: "New",
    washes: ["Dark Wash", "Raw Blue", "Black"], waists: [28,30,32,34,36], lengths: [30,32,34], allowCustom: true },
  { name: "High-Waist Skinny", price: 68000, category: "Jeans", gender: "Women",
    image: "images/sample-3.svg", tag: "",
    washes: ["Light Blue", "Medium Wash", "Black"], waists: [24,26,28,30,32], lengths: [30,32], allowCustom: true },
  { name: "Mom Fit Vintage Blue", price: 72000, category: "Jeans", gender: "Women",
    image: "images/sample-4.svg", tag: "",
    washes: ["Vintage Blue", "Light Blue"], waists: [24,26,28,30,32,34], lengths: [30,32], allowCustom: true },

  // SHIRTS
  { name: "Denim Button-Up Shirt", price: 55000, category: "Shirts", gender: "Men",
    image: "images/sample-5.svg", tag: "New",
    washes: ["Medium Wash", "Dark Wash", "Black"], sizes: ["S","M","L","XL","XXL"], allowCustom: true },
  { name: "Washed Casual Shirt", price: 50000, category: "Shirts", gender: "Men",
    image: "images/sample-6.svg", tag: "",
    washes: ["Light Blue", "Grey Wash"], sizes: ["S","M","L","XL","XXL"], allowCustom: true },
  { name: "Fitted Denim Shirt", price: 52000, category: "Shirts", gender: "Women",
    image: "images/sample-7.svg", tag: "",
    washes: ["Light Blue", "Medium Wash", "White"], sizes: ["XS","S","M","L","XL"], allowCustom: true },

  // JACKETS
  { name: "Denim Trucker Jacket", price: 95000, category: "Jackets", gender: "Men",
    image: "images/sample-8.svg", tag: "",
    washes: ["Medium Wash", "Dark Wash", "Black"], sizes: ["S","M","L","XL","XXL"], allowCustom: true },
  { name: "Oversized Denim Jacket", price: 110000, category: "Jackets", gender: "Women",
    image: "images/sample-9.svg", tag: "Bestseller",
    washes: ["Light Blue", "Vintage Blue"], sizes: ["S","M","L","XL"], allowCustom: true },

  // CUSTOM FIT
  { name: "Tailored-to-Measure Jeans", price: 85000, category: "Custom Fit", gender: "Men",
    image: "images/sample-10.svg", tag: "Made to Order",
    washes: ["Dark Wash", "Medium Wash", "Raw Blue", "Black"], allowCustom: true },
  { name: "Custom Fitted Shirt", price: 60000, category: "Custom Fit", gender: "Women",
    image: "images/sample-11.svg", tag: "Made to Order",
    washes: ["Any wash — ask us"], allowCustom: true },
];

/* ---- SIZE GUIDE (used by size-guide.html), inches ---- */
const SIZE_GUIDE = {
  Men: {
    jeans: { cols: ["Waist Size","Waist (in)","Hip (in)","Inseam / Length (in)"],
      rows: [["28","28–29","35","30 / 32 / 34"],["30","30–31","37","30 / 32 / 34"],["32","32–33","39","30 / 32 / 34"],["34","34–35","41","30 / 32 / 34"],["36","36–37","43","30 / 32 / 34"],["38","38–39","45","32 / 34"],["40","40–41","47","32 / 34"]] },
    tops: { cols: ["Size","Chest (in)","Waist (in)","Shoulder (in)"],
      rows: [["S","36–38","30–32","17"],["M","38–40","32–34","18"],["L","40–42","34–36","19"],["XL","42–44","36–38","20"],["XXL","44–46","38–40","21"]] },
  },
  Women: {
    jeans: { cols: ["Waist Size","Waist (in)","Hip (in)","Inseam / Length (in)"],
      rows: [["24","24–25","34","30 / 32"],["26","26–27","36","30 / 32"],["28","28–29","38","30 / 32"],["30","30–31","40","30 / 32"],["32","32–33","42","30 / 32"],["34","34–35","44","30 / 32"]] },
    tops: { cols: ["Size","Bust (in)","Waist (in)","Hip (in)"],
      rows: [["XS","31–32","24–25","34–35"],["S","33–34","26–27","36–37"],["M","35–36","28–29","38–39"],["L","37–39","30–32","40–42"],["XL","40–42","33–35","43–45"]] },
  },
};
