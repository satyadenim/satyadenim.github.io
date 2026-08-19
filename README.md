# Satya Denim — WhatsApp Catalog (animated hero + Men/Women + options + cart + size guide)

Free, mobile-first denim & jeans catalog for **Men & Women**. Customers choose a collection,
pick **wash / size / waist+length / custom fit / quantity**, add several styles to a cart,
then tap **Send Order on WhatsApp** — a neat grouped order lands on your number.

## 🆕 This update (patch)
1. **Website renamed** to **Satya Denim** (brand, titles, messages).
2. **Larger animated denim hero** — moving denim weave + scrolling stitched seams + scroll cue (respects "reduce motion").
3. **Men / Women selector** just below the hero — pick a collection and the catalog shows only that gender. Choice is remembered.
4. **Bigger logo** in the header "S" slot — set `logo` in `config.js` (defaults to `images/logo.svg`; replace with your PNG).
5. **Floating cart** (bottom-right) **+ floating WhatsApp icon** (above it).

## Files
`index.html` · `size-guide.html` · `config.js` (edit) · `products.js` (edit) · `styles.css` · `app.js` · `images/`

## Quick setup
- **`config.js`** → set `whatsappNumber` (e.g. `256700123456`), `brandName`, `logo`.
- **`products.js`** → add styles with `gender` ("Men"/"Women") and options (`washes`, `waists`+`lengths` for jeans, `sizes` for shirts/jackets, `allowCustom`). Edit `SIZE_GUIDE` tables at the bottom.
- **Logo:** drop your file in `images/` and point `logo:` to it (e.g. `images/logo.png`).

## Run locally
Double-click `index.html`, or VS Code **Live Server**, or `python -m http.server 8080` → `http://localhost:8080`.

## Publish (GitHub Pages)
Upload all files (incl. `images/`) → **Settings → Pages** → Deploy from branch `main`, `/root` → live at `https://USER.github.io/REPO/`.

🧵👖🛒
