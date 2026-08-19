# Patch — Hero CTAs + Left Offers Tab (replaceable files)

Replace these 3 files. No pasting. Keep `products.js`, `size-guide.html`, and `images/`.

| Replace | What changed |
|---------|--------------|
| `config.js` | `offers[]` feeds the left tab (added a clearance teaser) |
| `app.js` | Hero buttons open the catalog directly; New Arrivals mode + offers-tab logic |
| `index.html` | Removed "Shop by Collection"; 3 hero buttons + left 64x64 Offers tab |
| `styles.css` | Animations for buttons + expandable offers tab |

## Hero buttons (one click → catalog)
- New Arrivals — red, pulsing + sparkle (shows products tagged "New")
- Shop Men's — gold, animated mustache
- Shop Women's — white, animated nose-ring

## Left Offers/Clearance tab (64x64, expandable)
Pulsing red square; hover (desktop) / tap (mobile) expands to reveal auto-rotating offers.
Edit lines in config.js -> offers[]. Empty [] hides it.

## Note
New Arrivals uses each product's tag. Set tag: "New" in products.js on items to feature.
