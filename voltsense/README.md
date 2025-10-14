# VoltSense Marketing Site

This Next.js app renders the VoltSense marketing experience and its mini design system.

## Commands
- `npm run dev` – Start the dev server at `http://localhost:3000`.
- `npm run lint` – ESLint with the Next.js config.
- `npm run build` – Production build used for Vercel deploys.
- `npm run start` – Serve the production build locally.

## Structure Highlights
- `src/app/page.tsx` – Home page with hero, how-it-works, and feature highlight.
- `src/app/features/page.tsx` – Feature grid, comparison table, and MQTT payload example.
- `src/app/contact/page.tsx` – Contact form wired to `/api/contact` with Zod validation.
- `src/app/design-system/page.tsx` – Interactive reference of color/type/spacing tokens.
- `src/app/api/contact/route.ts` – Logs validated contact submissions on the server.
- `public/` – Logos, icons, mockups, OG image, and favicon assets.

Additional documentation lives in the workspace root:
- `../README.md` – Setup, deployment, and design overview.
- `../ACCESSIBILITY.md` – Accessibility checklist.
- `../LIGHTHOUSE.md` – Desktop Lighthouse scores.
