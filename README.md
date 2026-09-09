# Ritish Kolan — Portfolio

React/Vite portfolio for a Principal Engineer | AI-Enabled Software & Web Platform Architect.

## Development

```sh
npm install
npm run dev
npm run build
npm run preview
```

Production output is in `dist/`. No UI or animation libraries were added.

## Content and design

- `src/data.js`: existing projects, experience, workflow and grouped technologies. Keep metrics tied to their existing scope: 10+ years in engineering, ~45% build-time reduction and a 150M+ LMS ecosystem.
- `src/App.jsx`: page sections, abstract SVG project motifs, active navigation and native case-study dialog. The diagrams are illustrative, not detailed system architecture claims.
- `src/styles.css`: off-white/navy/blue styling, responsive layouts, visible focus states and reduced-motion support.
- `index.html`: title, description and social metadata.

AI is positioned as part of the engineering workflow, with engineering judgment, review and validation retained.

## Before publishing

1. Add the actual PDF at `public/Ritish-Kolan-Resume.pdf`. The visible Download Resume button already points to `/Ritish-Kolan-Resume.pdf`; it needs this file to work.
2. Replace the GitHub placeholder in `src/App.jsx` with a link to your profile.
3. Replace `https://example.com/` in both the canonical link and `og:url` in `index.html` with your production URL.
4. Confirm the LinkedIn URL recovered from the original source, email, location and current-role details are still correct.

## Interaction checks

Check widths 1440, 1024, 768, 390 and 360 pixels. Confirm no horizontal overflow; readable cards, workflow and experience; and usable navigation and contact links.

Open each case study using keyboard and pointer. Verify focus stays in the dialog, Escape/backdrop/close button dismiss it, focus returns to the project card, and background scrolling restores. Check with reduced motion enabled.
