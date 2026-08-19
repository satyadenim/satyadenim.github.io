/* =====================================================================
   SATYA DENIM — App logic
   Hero text: golden glow + bounce highlight words (crisp, no smudge) +
   cascading slideshow (WebP→JPG, no overlay) + auto Offers +
   default New Arrivals + 3 hero buttons + social icons + cart.
   (Edit config.js & products.js only.)
   ===================================================================== */

const WA_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M.06 24l1.68-6.13A11.87 11.87 0 0 1 .16 11.9C.16 5.34 5.5 0 12.06 0a11.82 11.82 0 0 1 8.42 3.49 11.79 11.79 0 0 1 3.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45L.06 24zM6.6 20.13c1.68 1 3.28 1.6 5.4 1.6 5.46 0 9.9-4.44 9.9-9.9 0-5.46-4.44-9.9-9.9-9.9S2.1 6.47 2.1 11.93c0 2.24.66 3.92 1.76 5.63l-.99 3.62 3.73-.98zM17.4 14.6c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42z"/></svg>`;

const SOCIAL_ICONS = {
  whatsapp: WA_ICON,
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38 3.7 3.7 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.9.07s-3.63 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52.01-4.76.07-.9.04-1.38.19-1.7.32-.43.16-.73.36-1.05.68-.32.32-.52.62-.68 1.05-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.6-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.38.32 1.7.16.43.36.73.68 1.05.32.32.62.52 1.05.68.32.13.8.28 1.7.32 1.24.06 1.6.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.38-.19 1.7-.32.43-.16.73-.36 1.05-.68.32-.32.52-.62.68-1.05.13-.32.28-.8.32-1.7.06-1.24.07-1.6.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.38-.32-1.7a2.8 2.8 0 0 0-.68-1.05 2.8 2.8 0 0 0-1.05-.68c-.32-.13-.8-.28-1.7-.32C15.52 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zM17.64 6.4a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.1v12.4a2.53 2.53 0 1 1-2.53-2.53c.26 0 .5.04.74.11V9.8a5.7 5.7 0 0 0-.74-.05 5.66 5.66 0 1 0 5.66 5.66V9.01a7.35 7.35 0 0 0 4.3 1.38V7.28a4.28 4.28 0 0 1-3.28-1.46z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24"><path d="M23.5 6.5a3 3 0 0 0-2.12-2.12C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.38.48A3 3 0 0 0 .5 6.5C0 8.38 0 12 0 12s0 3.62.5 5.5a3 3 0 0 0 2.12 2.12C4.5 20.1 12 20.1 12 20.1s7.5 0 9.38-.48a3 3 0 0 0 2.12-2.12C24 15.62 24 12 24 12s0-3.62-.5-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24"><path d="M18.9 2.5h3.3l-7.2 8.24L23.5 21.5h-6.6l-5.18-6.77-5.92 6.77H2.5l7.7-8.8L2 2.5h6.77l4.68 6.19L18.9 2.5zm-1.16 17h1.83L7.34 4.4H5.38l12.36 15.1z"/></svg>`,
};

const cfg = SITE_CONFIG;
const cleanNumber = cfg.whatsappNumber.replace(/\D/g, "");

const catCounters = {};
PRODUCTS.forEach((p, idx) => { catCounters[p.category] = (catCounters[p.category] || 0) + 1; p.id = idx; p.num = catCounters[p.category]; });

let activeGender = "";
let newArrivalsMode = true;
let CART = loadCart();
function loadCart() { try { return JSON.parse(localStorage.getItem("satyaCart")) || []; } catch { return []; } }
function saveCart() { localStorage.setItem("satyaCart", JSON.stringify(CART)); }

function formatPrice(n) { return cfg.currency + " " + n.toLocaleString("en-US"); }
function waLink(text) { return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`; }
function findProduct(id) { return PRODUCTS.find(p => p.id === id); }
function lineSummary(line) {
  const parts = [];
  if (line.wash) parts.push("Wash: " + line.wash);
  if (line.waist) parts.push("Waist: " + line.waist);
  if (line.length) parts.push("Length: " + line.length);
  if (line.size) parts.push("Size: " + line.size);
  if (line.custom && line.custom.trim()) parts.push("Custom: " + line.custom.trim());
  parts.push("Qty: " + (line.qty || 1));
  return parts.join(" | ");
}

// Convert hero markers to HTML:
//   ~word~ -> gold + bounce   (span.hi-bounce)
//   *word* -> gold static     (span)
function heroMarkup(t) {
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc(t)
    .replace(/~([^~]+)~/g, '<span class="hi-bounce">$1</span>')
    .replace(/\*([^*]+)\*/g, '<span class="hi-gold">$1</span>');
}

function renderSocials(el) {
  if (!el || !cfg.socials) return;
  const order = ["whatsapp", "instagram", "facebook", "tiktok", "youtube", "twitter"];
  const labels = { whatsapp: "WhatsApp", instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", youtube: "YouTube", twitter: "X" };
  let html = "";
  order.forEach(key => {
    const url = cfg.socials[key] || "";
    if (!url) return;
    html += `<a class="social-icon social-${key}" href="${url}" target="_blank" rel="noopener" aria-label="${labels[key]}" title="${labels[key]}">${SOCIAL_ICONS[key]}</a>`;
  });
  el.innerHTML = html;
}

function heroSizeSuffix() {
  const w = window.innerWidth;
  if (w <= 640) return "-mob";
  if (w >= 1600 || window.devicePixelRatio > 1.5) return "@2x";
  return "";
}
function setSlideBg(el, name) {
  const path = cfg.heroImagePath || "images/hero/";
  const suffix = heroSizeSuffix();
  const formats = (cfg.heroFormats && cfg.heroFormats.length) ? cfg.heroFormats : ["webp", "jpg"];
  let fi = 0;
  function tryNext() {
    if (fi >= formats.length) return;
    const url = path + name + suffix + "." + formats[fi];
    const probe = new Image();
    probe.onload = () => { el.style.backgroundImage = `url('${url}')`; };
    probe.onerror = () => { fi++; tryNext(); };
    probe.src = url;
  }
  tryNext();
}
function initHeroSlideshow() {
  const wrap = document.getElementById("heroSlides");
  if (!wrap) return;
  const names = (cfg.heroSlides && cfg.heroSlides.length) ? cfg.heroSlides : ["hero1"];
  wrap.innerHTML = names.map((n, i) => `<div class="hero-slide${i === 0 ? " active" : ""}" data-name="${n}"></div>`).join("");
  const slides = Array.from(wrap.children);
  slides.forEach(s => setSlideBg(s, s.dataset.name));
  let idx = 0;
  if (slides.length > 1) {
    setInterval(() => { slides[idx].classList.remove("active"); idx = (idx + 1) % slides.length; slides[idx].classList.add("active"); }, cfg.heroSlideInterval || 5000);
  }
  let rt;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => slides.forEach(s => setSlideBg(s, s.dataset.name)), 250); });
}

function initOffers() {
  const widget = document.getElementById("offerWidget");
  if (!widget) return;
  const offers = (cfg.offers || []).filter(Boolean);
  if (!offers.length) { widget.style.display = "none"; return; }
  const title = document.getElementById("offerTitle");
  if (title) title.textContent = cfg.offersTitle || "Exclusive Offers";
  const ticker = document.getElementById("offerTicker");
  let i = 0;
  ticker.textContent = offers[0];
  if (offers.length > 1) {
    setInterval(() => { ticker.classList.add("fade"); setTimeout(() => { i = (i + 1) % offers.length; ticker.textContent = offers[i]; ticker.classList.remove("fade"); }, 260); }, cfg.offersInterval || 3000);
  }
}

function buildCartMessage() {
  const groups = {};
  CART.forEach(line => { const p = findProduct(line.id); if (!p) return; (groups[p.category] = groups[p.category] || []).push({ p, line }); });
  let out = [cfg.cartMessageHeader, ""]; let total = 0;
  Object.keys(groups).forEach(cat => {
    const items = groups[cat].sort((a, b) => a.p.num - b.p.num);
    out.push(`*${cat}:* ${items.map(i => "#" + i.p.num).join(", ")}`);
    items.forEach(({ p, line }) => { const qty = line.qty || 1; total += p.price * qty; out.push(`   • ${cat} #${p.num} — ${p.name}`); out.push(`      ${lineSummary(line)}  (${formatPrice(p.price)} each)`); });
    out.push("");
  });
  out.push(`*Estimated total:* ${formatPrice(total)}  _(+ tailoring)_`);
  out.push("Please confirm availability & final price. Thank you!");
  return out.join("\n");
}
function cartWaLink() { return waLink(buildCartMessage()); }

function addLine(line) { CART.push(line); saveCart(); renderCart(); bumpCartBadge(); }
function removeLine(i) { CART.splice(i, 1); saveCart(); renderCart(); }
function clearCart() { CART = []; saveCart(); renderCart(); }
function changeQty(i, d) { CART[i].qty = Math.max(1, (CART[i].qty || 1) + d); saveCart(); renderCart(); }

function applyCursor() {
  const root = document.documentElement;
  if (cfg.cursor) {
    const hs = cfg.cursorHotspot || "0 0";
    root.style.setProperty("--cursor", `url("${cfg.cursor}") ${hs}, auto`);
    root.style.setProperty("--cursor-pointer", `url("${cfg.cursor}") ${hs}, pointer`);
  } else {
    root.style.setProperty("--cursor", "auto");
    root.style.setProperty("--cursor-pointer", "pointer");
  }
}

function applyConfig() {
  document.title = cfg.brandName + " — Denim Catalog";
  setText("brandName", cfg.brandName);
  setText("brandTag", cfg.tagline);
  const slot = document.getElementById("brandLogo");
  if (slot) { if (cfg.logo) slot.innerHTML = `<img src="${cfg.logo}" alt="${cfg.brandName}" onerror="this.parentNode.textContent='S'">`; else slot.textContent = cfg.brandName.charAt(0); }
  // Hero title + subtext use markers (gold glow + bounce)
  const ht = document.getElementById("heroTitle");
  if (ht) ht.innerHTML = heroMarkup(cfg.heroTagline || "Style that fits *you*");
  const hs = document.getElementById("heroText");
  if (hs) hs.innerHTML = heroMarkup(cfg.heroSubtext || "");
  const generalMsg = waLink(`Hello ${cfg.brandName} 👋, I'd like to know more about your denim styles.`);
  document.querySelectorAll(".js-wa-general").forEach(el => (el.href = generalMsg));
  setText("footPhone", cfg.phoneDisplay);
  const fp = document.getElementById("footPhone"); if (fp) fp.href = "tel:" + cfg.phoneDisplay.replace(/\s/g, "");
  setText("footLocation", cfg.location); setText("footHours", cfg.hours);
  setText("footBrand", cfg.brandName); setText("footYear", new Date().getFullYear());
  renderSocials(document.getElementById("socialTop"));
  renderSocials(document.getElementById("footSocials"));
  document.querySelectorAll(".js-wa-icon").forEach(el => (el.innerHTML = WA_ICON));
}
function setText(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }

function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  const hero = document.querySelector(".hero");
  if (!header) return;
  if (!hero) { header.classList.add("scrolled"); return; }
  const threshold = () => Math.max(0, hero.offsetHeight - header.offsetHeight);
  function onScroll() { if (window.scrollY > threshold()) header.classList.add("scrolled"); else header.classList.remove("scrolled"); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function showCatalog(doScroll) {
  const cat = document.getElementById("catalog");
  if (cat) { cat.style.display = ""; if (doScroll) cat.scrollIntoView({ behavior: "smooth" }); }
}
function setActiveHeroBtn(id) {
  ["btnNew", "btnMen", "btnWomen"].forEach(b => { const el = document.getElementById(b); if (el) el.classList.toggle("is-active", b === id); });
}
function shopGender(g, doScroll) {
  newArrivalsMode = false; activeGender = g;
  document.getElementById("shopLabel").textContent = g + "'s Collection";
  setActiveHeroBtn(g === "Men" ? "btnMen" : "btnWomen");
  activeFilter = "All"; buildFilters(); renderProducts(); showCatalog(doScroll);
}
function shopNewArrivals(doScroll) {
  newArrivalsMode = true; activeGender = "";
  document.getElementById("shopLabel").textContent = "✨ New Arrivals";
  setActiveHeroBtn("btnNew");
  activeFilter = "All"; buildFilters(); renderProducts(); showCatalog(doScroll);
}

let activeFilter = "All";
function buildFilters() {
  const wrap = document.getElementById("filters");
  const cats = ["All", ...CATEGORIES];
  wrap.innerHTML = cats.map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
  wrap.querySelectorAll(".filter-btn").forEach(btn => btn.addEventListener("click", () => {
    wrap.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active"); activeFilter = btn.dataset.cat; renderProducts();
  }));
}

function isNewArrival(p) { return (p.tag || "").toLowerCase().indexOf("new") !== -1; }

function renderProducts() {
  const grid = document.getElementById("grid");
  let items = PRODUCTS.filter(p =>
    (newArrivalsMode ? isNewArrival(p) : (!activeGender || p.gender === activeGender)) &&
    (activeFilter === "All" || p.category === activeFilter));
  if (newArrivalsMode && !items.length) items = PRODUCTS.filter(p => activeFilter === "All" || p.category === activeFilter);
  if (!items.length) { grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--muted)">No styles here yet.</p>`; return; }
  grid.innerHTML = items.map(p => `
    <article class="card">
      <div class="card-media" data-id="${p.id}">
        <span class="card-num">${p.category} #${p.num}</span>
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ""}
        <span class="card-gender">${p.gender || ""}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='images/sample-1.svg'">
      </div>
      <div class="card-body">
        <span class="card-cat">${p.category}${p.gender ? " · " + p.gender : ""}</span>
        <h3 class="card-name">${p.name}</h3>
        <div class="card-price">${formatPrice(p.price)} <small>+ tailoring</small></div>
        <button class="btn-cart" data-id="${p.id}">Select Options</button>
      </div>
    </article>`).join("");
  grid.querySelectorAll(".btn-cart").forEach(b => b.addEventListener("click", () => openProduct(Number(b.dataset.id))));
  grid.querySelectorAll(".card-media").forEach(m => m.addEventListener("click", () => openProduct(Number(m.dataset.id))));
}

let sel = {};
function openProduct(id) {
  const p = findProduct(id); if (!p) return;
  sel = { id, wash: p.washes ? p.washes[0] : "", waist: "", length: "", size: "", custom: "", qty: 1, showCustom: false };
  document.getElementById("pdImg").src = p.image;
  document.getElementById("pdImg").onerror = function () { this.src = "images/sample-1.svg"; };
  document.getElementById("pdName").textContent = p.name;
  document.getElementById("pdMeta").textContent = `${p.category} #${p.num}${p.gender ? " · " + p.gender : ""}`;
  document.getElementById("pdPrice").textContent = formatPrice(p.price);
  let html = "";
  if (p.washes && p.washes.length) html += optBlock("Wash / Colour", `<span id="pdWashVal">${sel.wash}</span>`, p.washes.map(w => `<button class="opt-pill ${w === sel.wash ? "active" : ""}" data-type="wash" data-val="${w}">${w}</button>`).join(""));
  if (p.waists && p.waists.length) html += optBlock("Waist", "", p.waists.map(w => `<button class="opt-box" data-type="waist" data-val="${w}">${w}</button>`).join(""));
  if (p.lengths && p.lengths.length) html += optBlock("Length", "", p.lengths.map(l => `<button class="opt-box" data-type="length" data-val="${l}">${l}</button>`).join(""));
  if (p.sizes && p.sizes.length) html += optBlock("Size", "", p.sizes.map(s => `<button class="opt-box" data-type="size" data-val="${s}">${s}</button>`).join(""));
  if (p.waists || p.sizes || p.lengths) html += `<div class="pd-guide"><a href="size-guide.html" target="_blank" rel="noopener">📏 Size Guide</a><span class="pd-hint">Not sure? Use custom fit below.</span></div>`;
  if (p.allowCustom) html += `<div class="pd-block"><button class="pd-custom-toggle" id="pdCustomToggle">📐 Custom measurements (perfect tailored fit)</button><div class="pd-custom" id="pdCustomWrap" style="display:none"><textarea id="pdCustomInput" rows="3" placeholder="e.g. Waist 33in, Length 30in, Hip 40in, slim taper, cuff hem..."></textarea><small>Tell us your measurements or preferences — we'll tailor it exactly.</small></div></div>`;
  html += `<div class="pd-block pd-qty-block"><span class="opt-label">Quantity</span><div class="qty"><button class="qty-btn" id="pdQtyMinus">−</button><span id="pdQtyVal">1</span><button class="qty-btn" id="pdQtyPlus">+</button></div></div>`;
  document.getElementById("pdOptions").innerHTML = html;
  document.querySelectorAll("#pdOptions [data-type]").forEach(btn => btn.addEventListener("click", () => {
    const t = btn.dataset.type, v = btn.dataset.val; sel[t] = (sel[t] === v) ? "" : v;
    document.querySelectorAll(`#pdOptions [data-type="${t}"]`).forEach(b => b.classList.toggle("active", b.dataset.val === sel[t]));
    if (t === "wash") { const wv = document.getElementById("pdWashVal"); if (wv) wv.textContent = sel.wash; }
  }));
  const ct = document.getElementById("pdCustomToggle");
  if (ct) ct.addEventListener("click", () => { sel.showCustom = !sel.showCustom; document.getElementById("pdCustomWrap").style.display = sel.showCustom ? "block" : "none"; ct.classList.toggle("active", sel.showCustom); });
  document.getElementById("pdQtyMinus").addEventListener("click", () => { sel.qty = Math.max(1, sel.qty - 1); document.getElementById("pdQtyVal").textContent = sel.qty; });
  document.getElementById("pdQtyPlus").addEventListener("click", () => { sel.qty += 1; document.getElementById("pdQtyVal").textContent = sel.qty; });
  document.getElementById("pdModal").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}
function optBlock(label, valHtml, inner) { return `<div class="pd-block"><span class="opt-label">${label} ${valHtml ? `<span class="opt-val">${valHtml}</span>` : ""}</span><div class="opt-row">${inner}</div></div>`; }
function closeProduct() { document.getElementById("pdModal").classList.remove("open"); if (!document.getElementById("cartDrawer").classList.contains("open")) document.getElementById("overlay").classList.remove("show"); }
function addSelectionToCart() {
  const custom = sel.showCustom ? (document.getElementById("pdCustomInput").value || "") : "";
  addLine({ id: sel.id, wash: sel.wash || "", waist: sel.waist || "", length: sel.length || "", size: sel.size || "", custom, qty: sel.qty || 1 });
  closeProduct(); openCart();
}

function renderCart() {
  const count = CART.reduce((s, l) => s + (l.qty || 1), 0);
  setText("cartCount", count); setText("fabCartCount", count);
  const fc = document.getElementById("fabCartCount"); if (fc) fc.style.display = count ? "grid" : "none";
  const body = document.getElementById("cartBody"), footer = document.getElementById("cartFooter");
  if (!CART.length) { body.innerHTML = `<p class="cart-empty">Your cart is empty.<br>Tap <b>Select Options</b> on a style to begin.</p>`; footer.style.display = "none"; return; }
  const groups = {};
  CART.forEach((line, i) => { const p = findProduct(line.id); if (!p) return; (groups[p.category] = groups[p.category] || []).push({ p, line, i }); });
  let total = 0, html = "";
  Object.keys(groups).forEach(cat => {
    const items = groups[cat].sort((a, b) => a.p.num - b.p.num);
    html += `<div class="cart-group"><div class="cart-group-head">${cat} <span>${items.map(i => "#" + i.p.num).join(", ")}</span></div>`;
    items.forEach(({ p, line, i }) => {
      const qty = line.qty || 1; total += p.price * qty;
      html += `<div class="cart-item"><img src="${p.image}" alt="" onerror="this.src='images/sample-1.svg'"><div class="cart-item-info"><span class="cart-item-name">${cat} #${p.num} — ${p.name}</span><span class="cart-item-opts">${lineSummary(line)}</span><div class="cart-item-bottom"><span class="cart-item-price">${formatPrice(p.price * qty)}</span><span class="cart-qty"><button data-act="minus" data-i="${i}">−</button>${qty}<button data-act="plus" data-i="${i}">+</button></span></div></div><button class="cart-remove" data-i="${i}" aria-label="Remove">✕</button></div>`;
    });
    html += `</div>`;
  });
  body.innerHTML = html;
  setText("cartTotal", formatPrice(total));
  document.getElementById("cartSendBtn").href = cartWaLink();
  footer.style.display = "block";
  body.querySelectorAll(".cart-remove").forEach(b => b.addEventListener("click", () => removeLine(Number(b.dataset.i))));
  body.querySelectorAll(".cart-qty button").forEach(b => b.addEventListener("click", () => changeQty(Number(b.dataset.i), b.dataset.act === "plus" ? 1 : -1)));
}
function openCart() { document.getElementById("cartDrawer").classList.add("open"); document.getElementById("overlay").classList.add("show"); }
function closeCart() { document.getElementById("cartDrawer").classList.remove("open"); if (!document.getElementById("pdModal").classList.contains("open")) document.getElementById("overlay").classList.remove("show"); }
function bumpCartBadge() { const fab = document.getElementById("fabCart"); fab.classList.remove("bump"); void fab.offsetWidth; fab.classList.add("bump"); }

document.addEventListener("DOMContentLoaded", () => {
  applyCursor();
  applyConfig();
  initHeroSlideshow();
  initOffers();
  initHeaderScroll();

  const bNew = document.getElementById("btnNew");
  const bMen = document.getElementById("btnMen");
  const bWomen = document.getElementById("btnWomen");
  if (bNew) bNew.addEventListener("click", () => shopNewArrivals(true));
  if (bMen) bMen.addEventListener("click", () => shopGender("Men", true));
  if (bWomen) bWomen.addEventListener("click", () => shopGender("Women", true));

  buildFilters(); renderCart();
  shopNewArrivals(false);

  document.getElementById("fabCart").addEventListener("click", openCart);
  document.getElementById("headerCart").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartClearBtn").addEventListener("click", clearCart);
  document.getElementById("pdClose").addEventListener("click", closeProduct);
  document.getElementById("pdAddBtn").addEventListener("click", addSelectionToCart);
  document.getElementById("overlay").addEventListener("click", () => { closeProduct(); closeCart(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeProduct(); closeCart(); } });
});
