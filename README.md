# ONYX UI Sandbox

Premium ONYX trading dashboard sandbox built with Next.js, Tailwind, Framer Motion, and Recharts.

## Included in this pass

- upgraded Next.js to 15.3.8
- removed typedRoutes for simpler sandbox deploys
- stronger trade-state visuals with icons and coloured P&L chips
- market icons for BTC, ETH, SOL, NAS100, and XAU/USD
- greener positive glows and red negative glows on trade and metric surfaces
- tighter mobile overflow handling so wide content stays inside cards
- local horizontal scroll for the trade table only

## Run locally

```bash
npm install
npm run dev
```

## Notes

This remains a front-end sandbox with mock data. Swap `data/mock.ts` for live feeds, broker state, and real analytics once the design direction is approved.
