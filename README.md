# Daisy Beauty Salon By Debby — Website

Marketing website untuk **Daisy Beauty Salon By Debby**, beauty salon di Seturan, Sleman (dekat kampus UII/UGM/UNY). Dibangun dari lead scoring pipeline (gmaps-scraper) → PRD (AI-enhanced) → design spec → Next.js implementation.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v3 (design tokens inline)
- **Fonts**: Playfair Display (headings) + Inter (body) via `next/font/google`
- **Images**: `next/image` (hero, future photos)
- **SEO**: Schema.org LocalBusiness + BeautySalon JSON-LD, Open Graph, sitemap, robots
- **Analytics**: Plausible (privacy-friendly, defer to v1.1)
- **Hosting target**: Vercel

## Design System

| Token | Value |
|---|---|
| Primary | `#C44569` (rose) |
| Background | `#FAF7F2` (warm cream) |
| Surface | `#F5E8DC` |
| Soft | `#F8E1E7` |
| Accent | `#E8B86D` (gold) |
| Wood | `#8B6B4A` |
| Text | `#2A2A2A` |
| Muted | `#6B5D52` |
| Heading font | Playfair Display |
| Body font | Inter |
| Spacing | 4px scale |
| Radius | sm 8 / md 12 / lg 16 / xl 24 |
| Shadow | warm rgba(74, 55, 40, ...) |

## Pages

1. `/` — Home (hero, services preview, testimonials, CTA)
2. `/services` — Layanan + harga
3. `/team` — Tim stylist (Mba Debby + 3 stylists)
4. `/gallery` — Before/After gallery (placeholders, real photos in v1.1)
5. `/testimonials` — Review quotes
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
| Hero image | `assets/generated/concept-c1-warm-atelier.png` (image-gen via Hanavy proxy) |
| Business data | Google Maps scrape (gmaps-scraper pipeline) |
| Copy drafts | AI-enhanced (Claude Haiku via Hanavy proxy) |
| Design tokens | AI-synthesized from brand voice + review themes |

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
