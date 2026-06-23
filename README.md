# Daisy Beauty Salon By Debby — Website

Marketing website untuk **Daisy Beauty Salon By Debby**, beauty salon di Seturan, Sleman (dekat kampus UII/UGM/UNY). Dibangun dari lead scoring pipeline (gmaps-scraper) → PRD (AI-enhanced) → design spec → Next.js implementation.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v3 (design tokens inline)
- **Fonts**: Plus Jakarta Sans (headings) + Inter (body) via `next/font/google`
- **Images**: `next/image` (hero, team, gallery, services — all AI-generated)
- **SEO**: Schema.org BeautySalon JSON-LD, Open Graph, sitemap, robots
- **Analytics**: Plausible (privacy-friendly, defer to v1.1)
- **Hosting target**: Vercel

## Design System

**Direction**: Pink-muda (light pink) + glassmorphism + ambient animations. Warm, modern, bubbly — distinct from generic Indonesian salon sites (no pink gradient template, no stock photography).

### Color Palette

| Token | Value | Role |
|---|---|---|
| `pink-50` | `#FFF0F5` | Lightest background, gradient base |
| `pink-100` | `#FFE4EC` | Surface highlights, glass tints |
| `pink-200` | `#FFCDD9` | Soft borders, dividers |
| `pink-300` | `#FFB3C6` | Blob backgrounds, soft accents |
| `pink-400` | `#FF8FB1` | Secondary buttons, hover states |
| `pink-500` | `#FF6B9D` | **Primary CTA** |
| `pink-600` | `#E94A85` | CTA hover, emphasis text |
| `pink-700` | `#C93570` | Strong text on glass surfaces |
| `ink` | `#2A1F2A` | Body text (warm dark, not pure black) |
| `text-muted` | `#7A6B73` | Secondary text (warm gray) |
| `gold` | `#D4AF6F` | Rating stars (warm gold, used sparingly) |
| `cream` | `#FFFAFB` | Alternate light surface |

### Typography

- **Display / Headings**: Plus Jakarta Sans (400, 500, 600, 700, 800)
- **Body**: Inter (variable)
- All headings use `font-display` + `font-extrabold` + `leading-[1.05]` + `tracking-tight`

### Glassmorphism Utilities

Defined in `app/globals.css` `@layer components`:

- `.glass` — white @ 55% opacity + 24px blur + 180% saturate + soft pink-tinted shadow
- `.glass-soft` — lighter variant for nested surfaces
- `.glass-pink` — pink-tinted glass, used for primary CTA cards
- `.glass-dark` — dark glass for image overlays

### Gradient & Decorative

- `.bg-pink-gradient` — 135° linear pink flow
- `.bg-pink-gradient-soft` — 180° top-down soft pink
- `.bg-pink-gradient-radial` — radial from top-right
- `.blob-1` / `.blob-2` — large blurred pink circles for ambient background depth

### Animations (Tailwind keyframes)

| Class | Purpose | Duration |
|---|---|---|
| `anim-fade-up` | Entrance: opacity 0→1 + translateY(20px→0) | 0.8s ease-out-expo |
| `anim-fade-in` | Entrance: opacity 0→1 | 0.8s |
| `anim-fade-scale` | Entrance: opacity 0→1 + scale(0.95→1) | 0.8s |
| `anim-slide-right` | Entrance: opacity 0→1 + translateX(-30px→0) | 0.8s |
| `anim-float` | Ambient: 12px Y oscillation | 6s infinite |
| `anim-bounce-soft` | Ambient: 6px Y + 2% scale | 3s infinite |
| `anim-blob` | Ambient: morphing border-radius | 12s infinite |

Stagger delays: `.anim-delay-100` through `.anim-delay-800` (100ms increments).
Respects `prefers-reduced-motion` — all animations collapse to 0.01ms when set.

## Pages

1. `/` — Home (hero, services preview, why-daisy, testimonials, big CTA)
2. `/services` — 6 layanan + harga (dengan thumbnail image per service)
3. `/team` — 4 stylist (avatar portrait + nama + role + specialty)
4. `/gallery` — 8 thumbnail before/after (AI-generated previews)
5. `/testimonials` — Review quotes dari Google
6. `/about` — Cerita salon
7. `/booking` — Booking via WhatsApp
8. `/faq` — FAQ

## Local Development

```bash
cd /home/han/Desktop/Rumah/Computer\ Science/Playground/gmaps-scraper/daisy-beauty-salon
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Verification

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
```

## Deployment

This project auto-deploys to Vercel on every push to `main`. Production URL is set per Vercel project.

If you see 401 Unauthorized on the Vercel URL, go to:
**Project → Settings → Deployment Protection** → set to "Disabled" or "Only for Preview Deployments".

## Source Attribution

| Asset | Source |
|---|---|
| Hero image | `public/assets/hero.jpg` (image-gen via Hanavy proxy, pink-muda concept) |
| Stylist portraits | `public/assets/stylist-{debby,agnes,sari,lina}.png` (image-gen) |
| Gallery previews | `public/assets/gallery-{1..8}.png` (image-gen) |
| Service thumbnails | `public/assets/service-{potong,coloring,treatment,styling,konsultasi,cuci}.png` (image-gen) |
| Business data | Google Maps scrape (gmaps-scraper pipeline) |
| Copy drafts | AI-enhanced (Claude Haiku via Hanavy proxy) |
| Design tokens | AI-synthesized from brand voice + review themes, pivoted to pink-muda |

## Open Decisions (v1.1)

1. Real photo session with Mba Debby (replace placeholders)
2. WA number final confirm
3. Email setup
4. Instagram handle final
5. Domain
6. Plausible analytics setup
7. Booking system (if needed beyond WA link)

## Project Origin

This project was bootstrapped end-to-end by the **studio pipeline** (orchestrator: `studio` skill), running phases 2 (design) → 3 (build) → 4 (verify) → 6 (deliver). Input was a lead from the gmaps-scraper pipeline's `top_50_opportunity_leads.csv` (Daisy Beauty Salon By Debby, score 86.82, rank #1).

See `studio-output/prd.md` and `studio-output/design-spec.md` for full context.
