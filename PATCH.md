# Patch — Satya Denim (cursor, seamless topbar, logo.png)

This patch adds a **golden scissors cursor**, makes the **top bar blend into the hero**
(transparent over the banner, solid once scrolled or on pages without a hero), and switches
the header logo to **logo.png**.

## What changed (files)
| File | Change |
|------|--------|
| `config.js` | `logo: "images/logo.png"` |
| `styles.css` | Golden scissors cursor variables + applied globally and on interactive elements; header made **fixed & transparent over hero** with a **`.scrolled` solid state**; hero starts at the very top under the header |
| `app.js` | New `initHeaderScroll()` — adds/removes `.scrolled` on the header based on hero visibility; pages without a hero are always solid |
| `index.html` | Header gets `id="siteHeader"` + class `over-hero`; hero sits directly beneath it |
| `size-guide.html` | Header uses `scrolled` (always solid — no full hero to blend with); logo.png |
| `images/scissors-cursor.svg` / `.png` | New golden scissors cursor (SVG + PNG fallback) |
| `images/logo.png` | Header logo (replace with your own anytime) |

## How the seamless topbar works
- On **index.html** the header has `over-hero`. While the hero is on screen the header is
  **transparent** with white text, blending into the banner.
- `initHeaderScroll()` watches scroll position. Once you scroll past the hero, it adds
  **`.scrolled`** → the header turns into the **solid white bar** with dark text + shadow.
- On **other pages / when there's no hero**, the header is solid from the start
  (size-guide.html ships with the `scrolled` class).

## Golden scissors cursor
- Defined in `:root` of `styles.css`:
  ```css
  --cursor: url("images/scissors-cursor.svg") 3 3, auto;
  --cursor-pointer: url("images/scissors-cursor.svg") 3 3, pointer;
  ```
- Applied to `body` and to links/buttons/inputs. The numbers `3 3` are the click hotspot
  (the scissor tip). Modern Chromium browsers (incl. Brave) & Firefox support SVG cursors;
  if a browser doesn't, it falls back to the normal arrow/pointer. A `scissors-cursor.png`
  is included as an easy swap if you prefer PNG.

## To use your own logo
Drop your file into `images/` and set it in `config.js`, e.g. `logo: "images/logo.png"`.
Recommended: transparent PNG, ~480×240px, landscape.
