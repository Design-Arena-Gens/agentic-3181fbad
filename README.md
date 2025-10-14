# VoltSense Marketing Site

VoltSense is a three-page marketing experience for a fictional smart home energy monitor. It ships with a mini design system, high-fidelity mockups, and a functional contact API to support rapid iteration and deployment to Vercel.

## Stack & Decisions
- **Framework:** Next.js 14 (App Router) for server components, filesystem routing, and API routes.
- **Styling:** Tailwind CSS with custom tokens defined in `tailwind.config.ts` and surfaced through `src/lib/design-system.ts`.
- **Forms:** Client-side validation with HTML constraints feeding into a Zod-backed `/api/contact` endpoint that logs sanitized payloads.
- **Assets:** All logos, icons, mockups, and the OG/ favicon assets live under `public/` for easy reuse.

## Project Structure
```
voltsense/
├── public/                # Logos, icons, mockups, OG art, favicon
├── src/app/               # App Router routes (marketing pages + API)
│   ├── api/contact/       # POST endpoint backed by Zod validation
│   ├── accessibility/     # A11y commitments page
│   ├── contact/           # Contact form and implementation playbook
│   ├── design-system/     # Interactive design system tokens
│   ├── features/          # Feature grid, comparison table, MQTT snippet
│   └── page.tsx           # Home page
├── src/components/        # Global layout components
├── src/lib/design-system.ts
├── tailwind.config.ts     # Design token source of truth
└── ACCESSIBILITY.md / LIGHTHOUSE.md
```

## Getting Started
```bash
cd voltsense
npm install
npm run dev
```
Visit `http://localhost:3000` and explore `/`, `/features`, and `/contact`.

## Build & Test
- `npm run lint` – ESLint (Next.js defaults) keeps JSX and hooks healthy.
- `npm run build` – Production build + type checks.
- A successful build ensures the `/api/contact` handler and static assets are ready for deployment.

## Design System Mapping
- **Colors:** `tailwind.config.ts` exposes `background`, `volt`, `lime`, `slate`, etc. These are consumed directly in components (e.g., `bg-background-subtle` in `src/app/page.tsx`).
- **Type Scale:** `src/lib/design-system.ts` enumerates every token. The `/design-system` route renders them with live previews.
- **Spacing & Radii:** Custom spacing steps (`3xs` → `4xl`) and `rounded-2xl` radii unify card/CTA treatments.
- **Components:** Button, card, and field recipes live in the same file, reused across the hero CTA, feature cards, and contact form.

## Mockups & Assets
High-fidelity desktop + mobile mockups live in `public/design/mockups/` (SVG). Logos and icons live in `public/logos` and `public/icons`. The OG card is generated at `public/og/voltsense-og.png`; the custom favicon updates `src/app/favicon.ico`.

## Deployment
```
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-3181fbad
```
After deployment, verify once DNS propagates:
```
curl https://agentic-3181fbad.vercel.app
```

## Docs
- `ACCESSIBILITY.md` – Detailed checklist of implemented a11y work.
- `LIGHTHOUSE.md` – Recorded Lighthouse scores and follow-up notes.

Happy monitoring!
