# BetterWix — Working Checklist

Living roadmap for the BetterWix personal site. Check items off as we go.

---

## 0. Setup & Run (local)
- [x] `npm install` (dependencies installed)
- [ ] `npm start` → dev server at http://localhost:3000
- [ ] `npm run build` → production build (verify before each deploy)
- **Node:** v21.2.0 / **npm:** 10.2.3 (confirmed working)

## 1. Rebrand → BetterWix (DONE)
- [x] Header logo text, page `<title>`, meta description
- [x] `manifest.json` app name/short_name
- [x] `package.json` name + description
- [x] Portfolio "WixLoop" project card → "BetterWix" (title + description, 4 languages)
- [x] i18n keys cleaned up in en / it / fa / ru
- [x] Fixed pre-existing typo in fa description key (`Protofilios` → `Portfolios`) so Persian now resolves
- [x] README normalized to "BetterWix"

### Rebrand decisions still open (need your call)
- [ ] **Contact email** — still `Wixloop.contact@gmail.com` everywhere (kept as-is; it's a live inbox). Change to a `betterwix` address only if you create one.
- [ ] **Domain** — site still deploys to `betterwix.netlify.app`. Rename the Netlify site (e.g. `betterwix.netlify.app`) or attach a custom domain, then update the two README links + the project card link in `Projects .js`.
- [ ] **Asset file** `src/Assets/Portfolio/projects/Wixloop.webp` — kept (only the code variable was renamed). Rename later if you want it tidy.

## 2. Map update (Travel page)
- [ ] Review `src/Pages/Travel/travelData.js` — update visited / wishlist locations
- [ ] Verify Leaflet markers + tile layer render correctly
- [ ] (Decide) marker styling / popups / clustering

## 3. Page optimization
- [ ] Add missing PWA assets: `public/logo192.png`, `public/logo512.png` (referenced by manifest + index.html but absent → 404s)
- [ ] Remove/replace dead `<script src="script.js">` references in `public/index.html` (file doesn't exist)
- [ ] Image audit — large `.mp4` headers + many `.webp`; consider lazy-loading & dimensions to cut load time
- [ ] Lighthouse pass (performance / a11y / SEO) and triage findings
- [ ] Code-split heavy routes (Portfolio, Travel) with `React.lazy`

## 4. Projects & writings refresh
- [ ] Update project entries in `src/Pages/Portfolio/Projects/Projects .js` (content + links + years)
- [ ] Update writings in `src/Pages/Portfolio/Writings/Writing.js`
- [ ] Add new portfolio images to `src/Assets/Portfolio/...` as needed
- [ ] Keep all 4 translation files in sync when text changes

## 5. Diary archive (NEW section)
- [ ] Decide placement: new route (e.g. `/diary`) + nav link, or sub-section of Portfolio
- [ ] Decide content source/format (Markdown entries? JSON? the existing Diary Project archive?)
- [ ] Decide privacy (public vs gated) and languages (RTL Persian support?)
- [ ] Build listing + entry view; wire into i18n + Header nav
- *(Details pending — you'll brief me on this.)*

## 6. Code hygiene (low priority, noticed during rebrand)
- [ ] Files with spaces in names: `Projects .js`, `RandomIcon .js`, `LanguageSwitcher .js` — rename for cleanliness
- [ ] Folder casing: both `src/pages` and `src/Pages` resolve on Windows but will break a Linux/Netlify build if inconsistent — standardize
- [ ] Consider migrating off Create React App (deprecated) to Vite at some point

---

*Last updated during the rebrand pass. Tell me which section to tackle next.*
