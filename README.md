# Vellum Landing Page

Production-ready, accessible, Lighthouse-90+ marketing landing page for **Vellum**, a cloud-native agency management platform for UK estate and lettings agencies.

Built with **Astro 4** + **vanilla scoped CSS**, deployed to **Cloudflare Pages** with a single Worker route for lead capture. Honors the **Chancery** design system in `DESIGN.md` and the structure in `vellum-landing-page-prd.md`.

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static + worker output in dist/
npm run preview      # serve the production build
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a project pointing at this repo.
3. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - **Deploy command:** `npx wrangler pages deploy dist --project-name vellum-landing --commit-dirty=true`

   > Important: the deploy command must be `wrangler pages deploy` (not `wrangler deploy`). The latter is for Workers and will fail with `It looks like you've run a Workers-specific command in a Pages project`.
4. Set environment variables (optional):
   - `PLAUSIBLE_DOMAIN` — e.g. `vellum.example` (loads Plausible analytics)
   - `RESEND_API_KEY` — to send a welcome email from `/api/lead`
   - `SLACK_WEBHOOK_URL` — to post new leads to a Slack channel
5. In `wrangler.toml`, the `pages_build_output_dir` is already set to `./dist`.

The Worker endpoint at `src/pages/api/lead.ts` is wired through the `@astrojs/cloudflare` adapter and runs as a Pages Function.

### One-off deploy from your machine

```bash
npm run build
npm run deploy:pages   # = wrangler pages deploy dist --project-name vellum-landing
```

## Architecture

```
src/
├── styles/        # Design tokens, reset, global, fonts (per DESIGN.md)
├── components/    # 9 sections + Nav, Footer, Button, Eyebrow, WaxSeal, Seo, LeadForm
├── content/       # copy.ts — single source of truth for all page copy
├── lib/           # analytics.ts (Plausible loader)
└── pages/
    ├── index.astro
    └── api/lead.ts  # Cloudflare Worker endpoint for form submissions
```

### Performance

- Static HTML for all sections. Zero client JS by default.
- One small `<script>` (~1.5 KB) for scroll-reveal and the nav scroll state.
- One form script (~2 KB) for validation and submission.
- All SVG inlined, no external images.
- Google Fonts loaded with `display=swap` and `preconnect`.

### Accessibility

- Skip link, semantic landmarks, native `<details>` FAQ.
- `:focus-visible` ring on every interactive element.
- Form labels above inputs; errors announced via `aria-live`.
- Respects `prefers-reduced-motion` (transforms disabled, scroll-reveal becomes instant).
- All colors OKLCH and AA-verified.

### Banned patterns (per DESIGN.md)

No glassmorphism, no `backdrop-filter`, no gradient text, no em dashes in copy, no hero-metric template, no side-stripe borders, no identical card grids, no modals.