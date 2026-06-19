# DESIGN.md for VellumDesk

> Design system for VellumDesk. Pairs with `PRODUCT.md`. System name: **Chancery**. Concept: a modern chartered-surveyor's office. Cool stone paper, deep British green as the committed brand colour, a brass whisper for premium detail, forest-black ink. Land, deeds and ledgers, rebuilt clean. Deliberately escapes the Claude.ai warm-cream-and-clay palette, proptech blue, and finance navy-and-gold.

## Color strategy

**Committed.** Deep green is load-bearing: it carries headers, the dark spotlight sections, buttons, and key marks (roughly 30 to 50% of the surface weight). Stone neutrals are cool, never warm cream. Brass is a micro-accent only (seals, a few hero/stat figures, under 5%). A brighter confirmation green is reserved for positive/ledger states. All values OKLCH, neutrals tinted toward green (never `#000`/`#fff`).

```css
:root {
  /* Surfaces — cool bone / stone (NOT warm cream) */
  --paper:        oklch(0.965 0.006 120);   /* page background  ~#F3F4EE */
  --paper-2:      oklch(0.940 0.008 124);   /* raised panels, alt sections ~#E9EBE2 */
  --paper-3:      oklch(0.908 0.010 126);   /* hairline fills, zebra ~#DCDFD3 */

  /* Ink — forest-black (text + dark spotlights) */
  --ink:          oklch(0.235 0.028 158);   /* primary text; dark-section bg ~#16241C */
  --ink-2:        oklch(0.300 0.030 158);   /* raised surface inside dark ~#22332A */
  --ink-3:        oklch(0.375 0.030 158);   /* borders inside dark */
  --muted:        oklch(0.450 0.022 158);   /* secondary text on paper */
  --muted-2:      oklch(0.560 0.016 150);   /* tertiary text / captions */

  /* Chancery green — the brand colour */
  --green:        oklch(0.430 0.072 158);   /* marks, links, emphasis ~#2F5544 */
  --green-deep:   oklch(0.360 0.062 158);   /* button bg (AA with paper text) ~#244233 */
  --green-soft:   oklch(0.430 0.072 158 / 0.10); /* tint wash */

  /* Confirmation green — positive / protected / reconciled / money-in */
  --ok:           oklch(0.560 0.095 150);   /* brighter leaf green, distinct from brand */
  --ok-soft:      oklch(0.560 0.095 150 / 0.16);

  /* Brass — premium micro-accent ONLY (seal mark, a few key figures) */
  --brass:        oklch(0.720 0.100 80);    /* ~#BE8E3A */
  --brass-soft:   oklch(0.720 0.100 80 / 0.14);

  /* Lines */
  --line:         oklch(0.235 0.028 158 / 0.12);
  --line-strong:  oklch(0.235 0.028 158 / 0.20);
  --line-on-ink:  oklch(0.965 0.01 120 / 0.14);

  /* On-ink text */
  --paper-on-ink: oklch(0.955 0.012 110);
  --muted-on-ink: oklch(0.790 0.014 120);
}
```

> Migration note from the previous build: the old `--seal` (terracotta) maps to `--green`; the old `--sage` maps to `--ok`. Brass (`--brass`) is new and intentionally rare.

Contrast: paper text on `--green-deep`, and ink text on paper, both clear WCAG AA. Brass never carries small body text; it is decorative/figure emphasis only. On dark, accents brighten (use `--ok`, `--paper-on-ink`, and a brightened green for CTAs).

## Typography

Voice words: inked, exact, calm-authoritative, with an English-establishment cut. Reflex fonts (Inter, Fraunces, Playfair, Cormorant, IBM Plex, DM, Space, Outfit) are rejected.

**Aspirational (license to buy):**
- Display: **GT Sectra** (Grilli Type) — high-contrast English-modern serif.
- Body / UI: **Söhne** (Klim Type Foundry) — the design-led grotesk standard (Stripe, Mercury).
- Figures / data: **ABC Diatype Mono** (Dinamo).

**Shipping now (free, Google Fonts equivalents):**
- Display: **Libre Caslon Display** — classical English Caslon, establishment authority. Italic moments via **Libre Caslon Text** italic.
- Body / UI: **Schibsted Grotesk** — editorial grotesque, warm but exact.
- Figures / data: **Spline Sans Mono** — tabular ledger numerals.

```css
--font-display: "Libre Caslon Display", Georgia, "Times New Roman", serif;
--font-italic:  "Libre Caslon Text", Georgia, serif;   /* used italic, for emphasis */
--font-sans:    "Schibsted Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif;
--font-mono:    "Spline Sans Mono", ui-monospace, "Cascadia Code", monospace;
```

### Scale (fluid, ratio ≥ 1.25)

```css
--fs-display: clamp(2.7rem, 1.6rem + 5.0vw, 5.1rem);   /* hero H1, Caslon Display, lh 1.02, ls -0.015em */
--fs-h2:      clamp(1.95rem, 1.3rem + 2.6vw, 3.05rem); /* section H2 */
--fs-h3:      clamp(1.3rem, 1.05rem + 0.9vw, 1.6rem);
--fs-lead:    clamp(1.12rem, 1.0rem + 0.5vw, 1.32rem);
--fs-body:    1.0625rem;   /* lh 1.62, measure 66ch */
--fs-sm:      0.9375rem;
--fs-xs:      0.8125rem;   /* eyebrows/labels: 600, ls 0.08em, uppercase */
```

Emphasis in headlines uses **italic Caslon + green colour**, not weight tricks. Caslon Display is a single weight; build hierarchy from size and the body grotesque's weights (400/500/600/700/800).

## Spacing, layout, elevation

8px base; fluid section rhythm via `clamp()`. Left-aligned, asymmetric compositions (hero text + product mock), not centered icon-stacks. Card grids use `repeat(auto-fit, minmax(280px, 1fr))`.

```css
--space-section: clamp(4.5rem, 3rem + 7vw, 8.5rem);
--container: 78rem;  --container-narrow: 46rem;
--radius: 14px; --radius-sm: 9px; --radius-pill: 999px;
/* warm-cool, green-tinted shadows; no glassmorphism */
--shadow-sm: 0 1px 2px oklch(0.235 0.028 158 / 0.06), 0 2px 6px oklch(0.235 0.028 158 / 0.05);
--shadow-md: 0 6px 16px oklch(0.235 0.028 158 / 0.08), 0 2px 6px oklch(0.235 0.028 158 / 0.05);
--shadow-lg: 0 24px 50px oklch(0.235 0.028 158 / 0.18), 0 8px 18px oklch(0.235 0.028 158 / 0.09);
```

## Components

- **Buttons.** Primary: `--green-deep` bg, `--paper-on-ink` text, weight 600; hover lifts. Secondary: 1px `--line-strong`, ink text. On dark: primary is a brightened green; secondary is 1px `--line-on-ink`.
- **Eyebrow/labels.** Uppercase, `--fs-xs`, ls 0.08em, green; small green dot.
- **Wax-seal mark.** Inline SVG roundel in **brass** with a forest-black "V": the brass plaque / deed seal. This is the primary place brass appears. Also the favicon.
- **Product mocks.** Forest-ink window chrome wrapping cool-paper content; ledger/figures in `--font-mono`; positive states in `--ok`.
- **Comparison.** VellumDesk column gets a `--green-soft` wash + 2px green top edge.
- **Bans upheld:** no side-stripe borders, no gradient text, no glassmorphism, no hero-metric template, no identical card grids, no modals, no em dashes in copy.

## Motion

Staggered hero load; scroll-reveal (opacity + translateY 12px) via IntersectionObserver; ease-out-quint 480–640ms; transforms/opacity only; expand/collapse via `grid-template-rows`. `prefers-reduced-motion: reduce` disables transforms and shows content immediately.

## Accessibility

WCAG 2.1 AA. `:focus-visible` ring (2px `--green`, 2px offset), semantic landmarks, native `<details>` FAQ, skip link, verified contrast, reduced-motion honored.
