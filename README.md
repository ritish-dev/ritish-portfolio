# Ritish Kolan — Portfolio

React/TypeScript/Vite portfolio for a Principal Engineer | AI-Enabled Software & Web Platform Architect.
Production domain: https://ritishkolan.com/

## Development and build

```sh
npm install --registry=https://registry.npmjs.org/
npm run dev
npm run build
npm run preview
```

Build output is `dist/`. The registry argument applies to this install only; no global npm configuration is changed. Keep dependencies, build output, environment files and npm configuration out of version control using `.gitignore`.

## Content and configuration

- `src/config.ts`: email, LinkedIn, GitHub and resume path. Empty social URLs render as non-link placeholders.
- `src/data.ts`: the original projects, experience, workflow and grouped technologies. Preserve the scope of 10+ years in engineering, ~45% build-time reduction and the 150M+ LMS ecosystem.
- `src/App.tsx`: sections, navigation and case-study triggers.
- `src/components/`: accessible native dialog and illustrative SVG project motifs. Motifs do not represent confidential implementation details.
- `src/styles.css`: existing off-white/navy/blue visual identity, responsive styling and reduced-motion support.
- `index.html`: production canonical URL, social metadata, font loading and favicon link.

AI supports the engineering workflow; architecture, review and validation remain grounded in engineering judgment. No achievement data was changed in this pass.

## Deployment assets and profiles

The resume PDF, portrait Open Graph PNG and RK favicon are included in `public/`. GitHub and LinkedIn URLs are configured in `src/config.ts`.

The Open Graph image is a 1024 × 1536 portrait. Wide social previews may crop it. Its dimensions and descriptive alt text are included in the metadata.

The RK SVG favicon is included at `public/favicon.svg`.

## QA and validation

The final production-build browser regression passed at 1440, 1280, 1024, 768, 430, 390 and 360 pixels in headless Chrome. Checks covered page overflow, internal links, all three case-study dialogs, Tab/Shift+Tab containment, Escape/backdrop/close dismissal, focus restoration and restored page scroll. The production console reported no errors or warnings. The PDF, PNG and SVG endpoints returned HTTP 200 with the correct MIME types.

A modal Tab-focus escape was fixed with explicit boundary handling. The public assets were verified byte-for-byte against the build output. Source imports have matching filename case, and the lockfile contains Linux build packages. Source and manifest scans found no credential indicators, placeholder links or private registry references; all resolved registry hosts are public npm.

The separate React development-mode browser check was declined, so development-only warnings were not verified. External profile availability could not be verified by the web tool. Physical-device and Safari testing were not performed.

Vercel settings: Vite preset, build command `npm run build`, output directory `dist`. No runtime environment variables or server routes are required. Deployment and production-domain validation remain separate steps.

## TypeScript

`npm run build` runs strict TypeScript checks before creating the Vite build. Shared data types live in `src/types.ts`; browser asset types come from `vite/client` via `tsconfig.json`. JSX uses the existing React transform.
