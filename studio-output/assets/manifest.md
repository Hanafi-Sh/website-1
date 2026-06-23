# Asset Manifest — Daisy Beauty Salon By Debby

> Note: Phase 2.5 (Asset Production) was skipped for this build. The marketing site uses only the C1 hero concept image. Stylist headshots, before/after gallery, and team photos use Unsplash placeholders (deferred to v1.1 with real photos from Mba Debby).

## Concept images (Phase 2 — generated, validated)

| ID | Path | Size | Status | Used in |
|---|---|---|---|---|
| c1-warm-atelier-hero | `assets/generated/concept-c1-warm-atelier.png` | 264 KB | ✅ Validated | Home hero, About page hero |
| c2-modern-bloom-hero | `assets/generated/concept-c2-modern-bloom.png` | 284 KB | ✅ Validated | (NOT used — concept not chosen) |
| c3-dreamy-sundown-hero | `assets/generated/concept-c3-dreamy-sundown.png` | 243 KB | ✅ Validated | (NOT used — concept not chosen) |

## Deferred assets (v1.1 — owner will provide)

- Stylist headshots (4 stylists × 1 photo each = 4)
- Before/after gallery (5-10 sets)
- Interior photos (salon space, equipment, waiting area)
- Owner portrait (Mba Debby)
- Logo (vector / high-res PNG)
- Favicon

For v1, use Unsplash placeholders with appropriate search terms. Code should reference these via `src/assets/` with comments marking them as "v1 placeholder, replace with real photos in v1.1".

## Loading strategy

- Hero image: `next/image` with `priority` flag, AVIF/WebP via Next.js
- Stylist photos: `next/image` lazy-loaded, Unsplash CDN with width param
- Gallery: lightbox with progressive loading
