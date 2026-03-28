# ONYX UI Sandbox

A premium sandbox rebuild for the ONYX trading app UI.

## What is included

- Next.js app router scaffold
- Tailwind design tokens and dark theme
- Animated KPI cards with Framer Motion
- Premium app shell with desktop sidebar and mobile bottom nav
- Dashboard, analytics, models, signals, trades, and settings views
- Recharts-based performance and equity panels
- Reusable UI primitives for cards, pills, buttons, headings, and tables
- Mock trading data so the UI is immediately demoable

## Brand direction

- Brand name: **ONYX**
- Tone: premium, dark, sharp, data-rich
- Visual references: Linear, Vercel, Stripe Dashboard, Raycast
- Accent: emerald green with cyan and amber support

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Suggested next steps

1. Connect pages to your real trading data and API routes.
2. Replace mock charts and tables with live strategy metrics.
3. Add authentication and workspace switching.
4. Create a proper command palette.
5. Add a full responsive QA pass and chart legend controls.
6. Split mock data into typed service adapters.
7. Add story-driven component previews or Storybook.

## File structure

- `app/` route pages
- `components/layout/` shell, sidebar, topbar, mobile nav
- `components/ui/` design primitives
- `components/charts/` chart panels
- `components/dashboard/` dashboard-specific cards
- `components/table/` table views
- `data/mock.ts` demo content
- `lib/utils.ts` helpers

