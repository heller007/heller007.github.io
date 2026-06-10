# heller007.github.io

Personal portfolio — single-page static site for [heller007.github.io](https://heller007.github.io).

## Run locally

No build step, no dependencies. Open `index.html` in a browser:

- Double-click `index.html`, or
- From the repo root: `python -m http.server 8000` then visit `http://localhost:8000`

## Edit content

All editable regions are marked with HTML comments in `index.html`:

| Comment marker | What to edit |
|----------------|--------------|
| `EDITABLE: HERO` | Name, tagline, intro, contact links |
| `EDITABLE: ABOUT` | Bio paragraphs |
| `EDITABLE: PROJECTS` | Project cards (copy a `PROJECT CARD` block to add one) |
| `EDITABLE: SKILLS` | Skill chips per group |
| `EDITABLE: FOOTER` | Copyright and footer links |

Placeholder values use `[SQUARE_BRACKETS]` — replace with real URLs and text.

Styles live in `styles.css` (theme colors at the top under `:root`). Theme toggle logic is in `script.js`.

## Deploy to GitHub Pages

1. Push this repo to `main` on GitHub (`heller007/heller007.github.io`).
2. In the repo: **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Save. The site is live at `https://heller007.github.io` within a minute or two.

The `.nojekyll` file at the repo root disables Jekyll so GitHub serves the plain static files as-is.

## Files

```
index.html    — page structure and content
styles.css    — layout, typography, dark/light themes
script.js     — theme toggle, smooth scroll, copyright year
.nojekyll     — skip Jekyll processing
```
