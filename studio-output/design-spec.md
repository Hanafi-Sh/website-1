# Design Spec: Daisy Beauty Salon by Debby

> **Studio phase**: design-spec
> **Concept**: C1 — Warm Atelier
> **Generated**: 2026-06-23
> **Audience**: build engineers implementing the Next.js + Tailwind site
> **Reference**: PRD Section 7 (page list), Section 8 (design direction), C1 notes (concept image direction)

This is the implementation contract. Every color references a token, every entity has explicit animation states, every screen has empty/loading/error states. If an engineer reads this and can't build it, the spec is wrong.

---

## 1. Concept Summary

**Warm Atelier** is a candid, behind-the-scenes editorial direction that treats Daisy as a friend's salon, not a brand. The hero image — a senior stylist mid-action, golden hour light through sheer curtains, rattan and pampas and a ceramic tea cup in frame — communicates warmth and hospitality in a single frame. The UI is a quiet, contemporary frame around that warmth: dusty rose CTAs, Playfair Display headlines, cream and blush surfaces, soft 16px corners, and warm-toned shadows. Typography is elegant but not luxurious; photography is candid but not amateur; spacing is generous but not precious. Three reasons this won:

1. **Matches the brand voice the reviews prove.** Keramahan, hospitality, "super comfy with free drinks, snacks, candy, Spotify" — the C1 image IS that vibe, not a stock approximation of it.
2. **Hits the PRD's visual brief note for note.** "Natural, warm, candid photo style with golden hour lighting" — done.
3. **Breaks the pattern.** Indonesian salon sites are a sea of polished stock + pink gradient. Warm Atelier reads as a neighbor's living room with scissors — the gap in the market is authenticity, and C1 owns that gap.

---

## 2. Design Tokens

All values are CSS custom properties. Use the token name in code, never the raw hex.

### 2.1 Colors (light mode primary)

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#FAF7F2` | Page background. Warm cream, not cool white. |
| `--color-surface` | `#F5E8DC` | Section backgrounds, card surfaces, soft bands. |
| `--color-surface-raised` | `#FFFFFF` | Card surfaces on cream backgrounds (when contrast is needed). |
| `--color-rose-primary` | `#C44569` | Primary brand. CTA buttons, heading accents, links. |
| `--color-rose-primary-hover` | `#A8354F` | Hover state for primary rose (10% darker). |
| `--color-rose-soft` | `#F8E1E7` | Hover tints, badge backgrounds, soft tints. |
| `--color-gold-accent` | `#E8B86D` | Star ratings, highlight pills, decorative dividers. |
| `--color-gold-accent-hover` | `#D49D52` | Hover for gold. |
| `--color-wood` | `#8B6B4A` | Warm wood accent — section dividers, secondary icons, before/after frame. |
| `--color-text` | `#2A2A2A` | Body text. |
| `--color-text-muted` | `#6B5D52` | Captions, helper text, timestamps. |
| `--color-text-inverse` | `#FAF7F2` | Text on rose/gold/dark surfaces. |
| `--color-border` | `#E8DDD0` | Default border. Warm, not gray. |
| `--color-border-strong` | `#C9B9A6` | Stronger border for inputs/dividers. |
| `--color-success` | `#5C8A5C` | Success toasts, "open" status. |
| `--color-warning` | `#D4923C` | Warnings, "closing soon" status. |
| `--color-error` | `#B54243` | Error states, validation. Warm red, not clinical. |

### 2.2 Colors (dark mode)

Dark mode is for evening browsing. The brand identity (rose, gold, wood) stays the same; only the surface inverts.

| Token | Dark hex | Maps from |
|---|---|---|
| `--color-bg` | `#1F1A15` | `#FAF7F2` |
| `--color-surface` | `#2A241D` | `#F5E8DC` |
| `--color-surface-raised` | `#332B22` | `#FFFFFF` |
| `--color-text` | `#F5E8DC` | `#2A2A2A` |
| `--color-text-muted` | `#A99C8E` | `#6B5D52` |
| `--color-border` | `#3D3328` | `#E8DDD0` |
| `--color-border-strong` | `#544638` | `#C9B9A6` |
| `--color-rose-primary` | `#E07A99` (lifted) | `#C44569` |
| `--color-rose-soft` | `#4A2730` (surface) | `#F8E1E7` |
| `--color-gold-accent` | `#F0C383` (lifted) | `#E8B86D` |
| `--color-wood` | `#B89272` (lifted) | `#8B6B4A` |

`--color-rose-primary` and `--color-gold-accent` are slightly lifted in dark mode for contrast on dark surfaces. Rose, gold, and wood stay as brand identity.

Switching: `prefers-color-scheme` is the default trigger. Provide a manual toggle in the footer ("Gelap / Terang") that persists in `localStorage` under `daisy.theme`.

### 2.3 Typography

| Role | Family | Weights | Notes |
|---|---|---|---|
| Headings | `Playfair Display` | 400, 600, 700 | Serif, elegant, feminine. Variable font, single file load. |
| Body | `Inter` | 400, 500, 600 | Sans, clean, modern. Variable font. |
| Numerals (price, stats) | `Inter` tabular-nums | 600 | Tabular figures so prices align in grids. |

**Type scale** (mobile → desktop, all `clamp()`):

| Token | Mobile | Desktop | Use |
|---|---|---|---|
| `--text-hero` | 2.5rem | 4.5rem | H1 hero headlines |
| `--text-h1` | 2rem | 3rem | Page-level H1 (non-hero) |
| `--text-h2` | 1.625rem | 2.25rem | Section H2 |
| `--text-h3` | 1.25rem | 1.5rem | Card H3 |
| `--text-h4` | 1.125rem | 1.25rem | Sub-heading |
| `--text-body` | 1rem | 1.0625rem | Body |
| `--text-body-lg` | 1.125rem | 1.25rem | Lead paragraph |
| `--text-small` | 0.875rem | 0.875rem | Captions, helper text |
| `--text-overline` | 0.75rem | 0.75rem | All-caps labels, letter-spacing 0.08em |

`clamp()` formula: `clamp(min, fluid, max)` where fluid uses `vw` to interpolate.

**Line heights**: headings `1.15`, body `1.6`, lead `1.5`.

**Letter spacing**: headings `-0.01em` (tighter for serif), body `0`, overline `0.08em`.

### 2.4 Spacing scale (4px base)

`--space-1` (4px) · `--space-2` (8px) · `--space-3` (12px) · `--space-4` (16px) · `--space-6` (24px) · `--space-8` (32px) · `--space-12` (48px) · `--space-16` (64px) · `--space-24` (96px) · `--space-32` (128px)

Use these tokens. Never write `padding: 17px`.

### 2.5 Radius scale

| Token | Value | Use |
|---|---|---|
| `--radius-none` | 0 | Rarely used. Form inputs default to this for "honest" feel, but we override to sm. |
| `--radius-sm` | 8px | Small chips, input fields, tags |
| `--radius-md` | 12px | Buttons, smaller cards |
| `--radius-lg` | 16px | **Default card radius.** Service cards, testimonial cards |
| `--radius-xl` | 24px | Hero photo corners, large feature cards |
| `--radius-full` | 9999px | Pills, FAB, round avatars |

Default to `--radius-lg` (16px) for cards. This is the brand-soft signal. Do not default to `--radius-md` or smaller for card surfaces.

### 2.6 Shadow scale (WARM shadows, not gray)

| Token | Value | Use |
|---|---|---|
| `--shadow-subtle` | `0 1px 3px rgba(74, 55, 40, 0.08)` | Card resting, raised text |
| `--shadow-medium` | `0 4px 12px rgba(74, 55, 40, 0.12)` | Card hover, dropdown |
| `--shadow-prominent` | `0 16px 40px rgba(74, 55, 40, 0.18)` | Modal, FAB, hero CTA on hover |
| `--shadow-inset-warm` | `inset 0 1px 2px rgba(74, 55, 40, 0.06)` | Inset borders on inputs |

`rgba(74, 55, 40, ...)` is a warm brown. **Never use `rgba(0, 0, 0, ...)` for shadows on this site** — it will read as cold and break the warm direction.

### 2.7 Motion

| Token | Value | Use |
|---|---|---|
| `--duration-fast` | `150ms` | Hover, focus ring, small state changes |
| `--duration-normal` | `300ms` | Card hover, button press, accordion |
| `--duration-slow` | `500ms` | Page transition, hero photo fade-in, modal |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default. Entrances, hover, micro-interactions |
| `--ease-in-out-quint` | `cubic-bezier(0.7, 0, 0.3, 1)` | Modal open/close, page transition |
| `--ease-spring-soft` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | FAB pulse, toast slide-in, success states |

`prefers-reduced-motion: reduce` collapses all `--duration-*` to `0ms` and disables `--ease-spring-soft` (replaced with `--ease-out-expo`).

---

## 3. Entity Visual Specs

This is a marketing site, not a game. There are no sprite entities. The "entities" here are **photographic and decorative elements** that compose the page. Document their composition, sizing, animation states, and color references.

### 3.1 Hero photograph

- **Source**: `/studio-output/concepts/c1-warm-atelier/hero.png` (C1 generated image). For production, re-shoot with owner. C1 PNG is the placeholder.
- **Composition**: Senior female hairstylist (mid-40s) smiling softly, holding scissors near a seated client. Apron, rattan, pampas grass in vase, ceramic tea cup, Spotify speaker, golden hour light.
- **Aspect ratio**: 16:9 desktop, 4:5 mobile (use a tighter crop on mobile focused on the stylist's face and hands).
- **Size**: Desktop full-bleed (100vw × ~80vh, max-height 720px). Mobile full-bleed (100vw × 100vh, max-height 640px).
- **Treatment**: `object-fit: cover`, `object-position: 60% 30%` (favor the stylist's face on the right). Subtle warm overlay `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(31,26,21,0.55) 100%)` to ensure headline text contrast at the bottom.
- **Color anchor**: dominantly warm cream + terracotta + dark brown. The PRD rose `#C44569` is **not** in the image — brand color comes from UI chrome (CTAs, headings, links), not the photo.
- **Animation states**:
  - **load**: opacity 0 → 1 over 800ms (`--ease-out-expo`), slight scale 1.04 → 1.0 (Ken Burns subtle).
  - **idle**: static.
  - **scroll-out**: parallax 0.85x (image moves slower than scroll), `prefers-reduced-motion` disables.

### 3.2 Owner portrait (Mba Debby)

- **Source**: `team-mba-debby.jpg` (owner shot, candid, apron, mid-action, golden hour).
- **Composition**: Medium close-up, slight 3/4 angle, soft smile, hands in hair of seated client or holding scissors. Background blurred rattan + pampas.
- **Aspect ratio**: 4:5 portrait.
- **Size**: 480px × 600px desktop, full-width mobile (capped at 480px in column).
- **Treatment**: 16px radius. Thin gold-1px border optional. Never stylized with filters — natural photo edit only.
- **Color anchor**: warm cream background, terracotta apron accent.
- **Animation states**:
  - **load**: fade-up 16px, 500ms.
  - **hover**: subtle scale 1.02 over 400ms, paired with caption fade-in (e.g., "20+ tahun pengalaman" line appears).
  - **idle**: static.

### 3.3 Stylist portraits (Kak Agnes, juniors)

- **Source**: `team-kak-agnes.jpg`, `team-junior-1.jpg`, `team-junior-2.jpg`.
- **Composition**: 1:1 square, head-and-shoulders, candid, not posed. Stylist in apron, smiling, scissors in hand or hair in hand.
- **Size**: 240px × 240px cards.
- **Treatment**: 16px radius. No filters.
- **Color anchor**: warm cream/terracotta palette.
- **Animation states**:
  - **load**: fade-in stagger 60ms per card.
  - **hover**: scale 1.03 + show second image (sample of their work) on hover. Implemented as image crossfade. 300ms.
  - **idle**: static.

### 3.4 Service category photos

- **Source**: `service-potong.jpg`, `service-coloring.jpg`, `service-treatment.jpg`, `service-styling.jpg`, `service-konsultasi.jpg`.
- **Composition**: 4:3 landscape, focus on the action (scissors, color brush, treatment bowl, blow dryer, consultation chat). Always hands-in-action, never still-life.
- **Size**: 320px × 240px card image. Full-width in mobile card.
- **Treatment**: 12px radius, slight bottom fade for caption legibility.
- **Color anchor**: warm palette dominant.
- **Animation states**:
  - **load**: fade-in.
  - **hover**: image scale 1.05, parent card lifts (translate-y -4px + shadow-medium). 300ms.
  - **idle**: static.

### 3.5 Before/After pairs

- **Source**: `before-after-01.jpg` through `before-after-10.jpg` (paired, 5-10 sets).
- **Composition**: Side-by-side identical framing of same subject. Same lighting, same crop. The "before" image must be visually less polished (no styling, no color) and "after" the salon result.
- **Aspect ratio**: 3:4 portrait (head + shoulders).
- **Size**: 480px × 640px slider area. Paired inside a 16px-radius frame.
- **Treatment**: The slider reveals "after" over "before" via `clip-path: inset(0 X% 0 0)` controlled by drag handle.
- **Color anchor**: warm. Avoid heavy contrast manipulation.
- **Animation states**:
  - **load**: fade-in 500ms, slider handle appears at 50% with subtle bounce.
  - **drag**: handle follows pointer, `--ease-out-expo`. Live label update ("Sebelum" / "Sesudah" crossfade at the 50% mark).
  - **idle**: handle static at 50%.
  - **filter-change**: cross-fade 300ms between filtered sets.

### 3.6 Interior detail photos (decorative)

- **Source**: `pampas-grass-detail.jpg`, `ceramic-cup-detail.jpg`, `golden-hour-light.jpg`.
- **Use**: Section dividers, background atmosphere, "empty state" for the gallery during loading, decorative bookends between sections.
- **Composition**: Macro / close-up of one prop. Pampas feathered, ceramic cup with steam, curtain with light. No people.
- **Size**: Full-bleed band height 320px desktop / 200px mobile. Sometimes as small floating accents (120px circle, blurred, positioned absolute behind a heading).
- **Treatment**: `filter: blur(2px)` for the floating accents (atmosphere), sharp for the divider bands.
- **Color anchor**: warm cream + terracotta + gold.
- **Animation states**:
  - **load**: fade-in 800ms.
  - **scroll-in**: subtle parallax 0.9x.
  - **idle**: static.

### 3.7 Daisy flower mark (logo / favicon)

- **Source**: Hand-drawn SVG. 5-petal daisy, simple line + soft fill.
- **Composition**: Center circle (gold `#E8B86D`), 5 surrounding petals (rose `#C44569`), thin stem optional.
- **Size**: Favicon 32px. Logo lockup 40px icon + wordmark "Daisy Beauty Salon by Debby" inline. Decorative accent 16px.
- **Animation states**:
  - **hover (logo only)**: petals rotate +8° and -8° alternating, 600ms, `--ease-spring-soft`. Subtle, not bouncy.
  - **idle**: static.
- **Favicon file**: `favicon.svg` (vector), `favicon-32.png` (raster fallback), `apple-touch-icon.png` (180×180).

### 3.8 WhatsApp FAB (floating action button)

- **Composition**: 56px circle, rose-primary fill, white WhatsApp glyph (SVG), subtle rose-soft ring outside.
- **Position**: `fixed; bottom: 24px; right: 24px;` (mobile and desktop). On mobile, ensure safe-area-inset bottom padding.
- **Color anchor**: `--color-rose-primary`, glyph `--color-text-inverse`.
- **Animation states**:
  - **idle**: gentle pulse 2.4s loop — outer ring scales 1.0 → 1.2 with opacity 0.4 → 0. Use `--ease-in-out-quint`. Respects `prefers-reduced-motion`.
  - **hover**: scale 1.08, shadow-prominent. 200ms.
  - **active/press**: scale 0.96. 100ms.
  - **focus-visible**: 3px gold-accent ring at 4px offset.
  - **on-scroll-hide**: hides (translateY 100px) when user scrolls past 80% of page, returns on scroll-up. 300ms.
  - **on-modal-open**: hides entirely.

### 3.9 Sound (N/A)

No sound on this site. This is a marketing/informational site, not a game. The PRD does not call for audio. Skip.

---

## 4. Layout Specs

### 4.1 Breakpoints

| Name | Min width | Use |
|---|---|---|
| `xs` | 320px | Floor. All layouts must render at 320px. |
| `sm` | 640px | Phone landscape, large phone portrait. |
| `md` | 768px | Tablet portrait. Two-column layouts start. |
| `lg` | 1024px | Tablet landscape, small desktop. |
| `xl` | 1280px | Desktop. Max content width 1200px. |
| `2xl` | 1536px | Large desktop. Content remains 1200px max. |

Container max-width: **1200px**, centered, with `padding-inline: clamp(--space-4, 4vw, --space-8)`.

### 4.2 Grid

- **12-column grid** at `lg` and above. `gap: 24px`.
- **6-column grid** at `md`. `gap: 20px`.
- **Single column** below `md`. Stack everything.
- Use `grid-template-columns: repeat(12, 1fr)` not Bootstrap-style classes.

### 4.3 Vertical rhythm

- Section vertical padding: `clamp(--space-16, 8vw, --space-32)` top and bottom. Never less than `--space-16` (64px) on desktop, never less than `--space-12` (48px) on mobile.
- Within a section, element spacing: `--space-6` (24px) between heading block and content, `--space-4` (16px) between content items.

### 4.4 Header (Nav)

```
Position: sticky; top: 0; z-index: 50;
Height: 72px (desktop), 64px (mobile);
Background:
  - At top of page: transparent (over hero)
  - On scroll past 80px: --color-bg with --shadow-subtle
  - Always opaque in dark mode
Transition: background 300ms, box-shadow 300ms;
```

Layout (desktop, left to right):
- Logo lockup (40px daisy + wordmark), left-aligned, links to home.
- Nav links: Layanan · Tim Stylist · Galeri · Testimoni · FAQ · Kontak. Right-aligned, 16px Inter 500, `--color-text`.
- Active link: rose-primary underline (2px, offset 8px).
- CTA: `ButtonPrimary` "Booking Sekarang" at far right.
- Hover state on links: rose-primary color, 200ms.
- Focus state: 3px rose-soft ring at 2px offset.

Layout (mobile):
- Logo left, hamburger right (animated to X on open).
- Tap hamburger → full-screen overlay menu, 100vw × 100vh, `--color-bg` background, large nav links (24px Playfair Display 600), staggered fade-in 60ms each.
- CTA at the bottom of the mobile menu.

### 4.5 Footer

```
4 columns on desktop, stacked single-column on mobile.
Background: --color-surface (warm blush beige).
Padding: --space-16 top, --space-12 bottom.
Border-top: 1px --color-border.
```

Columns:
1. **Brand**: Logo + tagline ("Rambut sempurna, hati hangat di Jogja.") + Instagram link icon.
2. **Halaman**: Home · Layanan · Tim Stylist · Galeri · Testimoni · FAQ · Kontak.
3. **Kontak**: Phone (tap-to-call), WhatsApp, Email, Alamat.
4. **Jam Operasional**: Hours table (7 rows). Highlight today's row with `--color-rose-soft` background.

Bottom strip: copyright "© 2026 Daisy Beauty Salon by Debby" + theme toggle (Gelap / Terang) + "Made with care in Jogja" line in `--text-small`, `--color-text-muted`.

### 4.6 Section pattern

Every page section follows:

```
<section class="daisy-section">
  <div class="daisy-container">
    <header class="daisy-section__header">
      <p class="overline">-- text-overline --</p>
      <h2>-- text-h2 --</h2>
      <p class="lead">-- text-body-lg, max-width 640px, centered --</p>
    </header>
    <div class="daisy-section__content">
      -- content --
    </div>
  </div>
</section>
```

Section header is centered, content can be left-aligned or centered depending on context. Overline uses `--color-rose-primary`, uppercase, letter-spacing 0.08em.

---

## 5. UI Specs (Components)

This section documents every component. Each entry: purpose, anatomy, states, edge cases.

### 5.1 `Nav`

- **Purpose**: Site-wide sticky navigation, brand anchor, primary CTA entry.
- **Anatomy**: Logo lockup (left) + nav links (center) + CTA button (right) on desktop. Logo + hamburger on mobile.
- **States**: `transparent` (at top of page, over hero), `solid` (after 80px scroll), `mobile-open` (hamburger active).
- **Edge cases**: When on a page that has no hero (FAQ, Testimonials), nav starts in `solid` state. On `/booking` page, the CTA shows "WhatsApp Kami" instead of "Booking" and links to `wa.me/6289612377910` directly.

### 5.2 `Hero`

- **Purpose**: Above-the-fold brand impression, primary CTA, scroll indicator.
- **Anatomy**: Full-bleed photo + dark gradient overlay + headline (Playfair Display 700, white) + sub-headline (Inter 400, white 90%) + dual CTA row + scroll indicator (animated chevron).
- **States**: `loading` (photo blurs up, opacity 0 → 1), `loaded` (idle, parallax), `reduced-motion` (no parallax, instant fade).
- **Edge cases**:
  - If hero photo fails to load: fallback to a warm cream background with the rose-primary text-only headline and a small "Foto akan segera hadir" caption.
  - If user is on slow connection: show a solid `--color-surface` placeholder with the headline rendered immediately, photo loads in via `<img loading="eager" fetchpriority="high">`.

### 5.3 `ButtonPrimary`

- **Purpose**: Primary action — booking, contact, submit.
- **Anatomy**: Pill (radius-full), 48px height, padding-inline 24px, Inter 600 16px, white text on rose-primary fill.
- **States**:
  - `default`: `--color-rose-primary` fill, `--color-text-inverse` text, `--shadow-subtle`.
  - `hover`: `--color-rose-primary-hover` fill, `--shadow-medium`, translate-y -1px. 200ms.
  - `active/press`: translate-y 0, `--shadow-subtle`. 100ms.
  - `focus-visible`: 3px `--color-rose-soft` ring at 3px offset.
  - `disabled`: 50% opacity, cursor not-allowed, no hover.
  - `loading`: text replaced by a 16px white spinner, button width preserved.
- **Edge cases**:
  - On dark surfaces (e.g., gold or dark section), use `--color-rose-primary` (lifted in dark mode) with same shadow.
  - Never use a primary button inside another primary button.

### 5.4 `ButtonSecondary`

- **Purpose**: Secondary action — "Lihat Layanan", "Lihat Semua".
- **Anatomy**: Pill, 48px height, transparent fill, 2px rose-primary border, rose-primary text.
- **States**:
  - `default`: transparent, 2px `--color-rose-primary` border, `--color-rose-primary` text.
  - `hover`: `--color-rose-soft` background fill, `--color-rose-primary-hover` text. 200ms.
  - `active/press`: `--color-rose-soft` background, no transform.
  - `focus-visible`: 3px `--color-rose-soft` ring.
  - `disabled`: 50% opacity.
- **Edge cases**:
  - On hero (dark overlay), use white border + white text, hover with white-10 background.

### 5.5 `ServiceCard`

- **Purpose**: Display one service — image, name, description, duration, price, book button.
- **Anatomy**: Vertical card. Top: 4:3 image. Middle: name (text-h3), description (text-body, 1-line clamp), duration chip. Bottom: large price (text-h2 rose-primary) + "Book this" button.
- **Container**: `--color-surface-raised` (white on light mode), `--radius-lg`, `--shadow-subtle`.
- **States**:
  - `default`: resting card.
  - `hover`: image scale 1.05, card translate-y -4px, `--shadow-medium`. 300ms.
  - `active/press`: translate-y 0.
  - `focus-within`: ring on the card.
  - `loading`: skeleton (image: gray pulse, text: 60% width lines).
  - `error`: if price fails to load, show "Hubungi kami" instead.
- **Edge cases**:
  - If image missing: warm-cream placeholder with a small scissors SVG icon.
  - If duration missing: hide the chip, don't show empty state.

### 5.6 `StylistCard`

- **Purpose**: One stylist — photo, name, role, specialty chips, bio.
- **Anatomy**: 1:1 photo (top) + name (text-h3) + role (text-small, rose-primary) + 2-3 specialty chips + bio (text-body, 3-line clamp).
- **Container**: `--color-surface-raised`, `--radius-lg`, `--shadow-subtle`.
- **States**:
  - `default`: resting.
  - `hover`: scale 1.02, second image (sample work) crossfades over first image, 300ms.
  - `loading`: skeleton.
- **Edge cases**:
  - If only one image available: skip the hover swap.
  - Bio truncation: 3 lines with ellipsis, full bio in `Modal` on click.

### 5.7 `TestimonialCard`

- **Purpose**: One review quote — quote, 5-star row, name, date, optional service.
- **Anatomy**: Large quote (Playfair Display 400 italic, 1.5rem) + 5 gold stars + attribution (name, date, service) + decorative quote mark in background (gold, low opacity).
- **Container**: `--color-surface-raised`, `--radius-lg`, `--shadow-subtle`, 24px padding.
- **States**:
  - `default`: static.
  - `in-carousel`: slides horizontally, `--duration-slow`, `--ease-in-out-quint`.
  - `loading`: skeleton.
- **Edge cases**:
  - Long quotes: clamp to 6 lines, "Baca selengkapnya" expands inline.
  - 4-star reviews: 4 gold stars + 1 outlined star (gold border, transparent fill).

### 5.8 `BeforeAfterSlider`

- **Purpose**: Interactive before/after image comparison.
- **Anatomy**: 3:4 frame, "before" image as base, "after" image clipped by `clip-path: inset(0 X% 0 0)`, draggable vertical handle (40px wide, gold-accent, white center line) with circular grab indicator. Labels "Sebelum" (left) and "Sesudah" (right) overlaid in top corners, white text on translucent dark.
- **Container**: `--radius-lg`, `--shadow-medium`.
- **States**:
  - `default`: handle at 50%.
  - `dragging`: handle follows pointer, no transition (real-time).
  - `released`: handle stays at last position.
  - `keyboard`: arrow keys move handle ±5%, home/end jump to 0/100%.
  - `loading`: skeleton.
  - `reduced-motion`: handle is static at 50% with a "Drag untuk membandingkan" hint; clicking swaps.
- **Edge cases**:
  - Touch: handle must be 40px+ for finger grab. `touch-action: pan-y` to allow vertical scroll on mobile.
  - If only "after" image present: hide slider, show full image with a "Belum ada foto sebelum" placeholder.

### 5.9 `GalleryGrid`

- **Purpose**: Static masonry of before/after pairs.
- **Anatomy**: CSS columns or `grid-template-rows: masonry` (when supported, fallback to JS-driven layout). Mixed 1:1 and 3:4 tiles. Each tile = one pair thumbnail + service category chip.
- **Container**: no outer radius (bleeds to section edge); 16px gap between tiles.
- **States**:
  - `default`: static grid.
  - `hover`: scale 1.03, shadow-medium. 300ms.
  - `loading`: skeleton tiles, 3-column grid, 60% opacity pulse.
  - `filter-change`: tiles crossfade out/in, 300ms.
  - `empty`: "Belum ada foto untuk filter ini. Coba kategori lain." with a decorative daisy SVG.
- **Edge cases**:
  - If only 1-2 photos total: switch to 2-column centered grid, not 3-column with empty space.

### 5.10 `WhatsAppFAB`

See Section 3.8. Repeating the key points: pulsing idle, hides on scroll-down-past-80%, hides on modal-open, deep-links to `wa.me/6289612377910?text=<encoded message>`.

### 5.11 `ContactCard`

- **Purpose**: Show phone, WhatsApp, address, map embed.
- **Anatomy**: Two-column on desktop (info left, map right). Info column: 4 rows (Phone, WhatsApp, Email, Alamat) each with icon + label + value, tap-actionable. Map column: Google Maps embed iframe 16:9, lazy-loaded.
- **Container**: `--color-surface-raised`, `--radius-lg`, `--shadow-subtle`.
- **States**:
  - `default`: static.
  - `loading-map`: skeleton rectangle with spinner.
  - `map-failed`: "Buka di Google Maps" link button as fallback.
- **Edge cases**:
  - On mobile: stack info above map, full-width.
  - Address line is long — wrap naturally, don't truncate.

### 5.12 `FAQAccordion`

- **Purpose**: Collapsible Q&A list.
- **Anatomy**: Row per question. Question on left, chevron icon on right. Click expands answer (smooth height via `grid-template-rows: 0fr → 1fr`).
- **Container**: full-width row, 1px `--color-border` bottom border, no outer container.
- **States**:
  - `closed`: chevron points down.
  - `open`: chevron rotates 180°, answer reveals. `--duration-normal`, `--ease-out-expo`.
  - `hover` (question): `--color-rose-soft` background, 200ms.
  - `focus-visible`: 2px rose-primary outline.
  - `max-3-open`: enforced by JS — opening a 4th closes the oldest.
- **Edge cases**:
  - If 0 questions: hide the entire section.
  - If 1 question: no accordion behavior, just static Q&A.

### 5.13 `HoursTable`

- **Purpose**: Display open hours, highlight current day.
- **Anatomy**: 7 rows (Mon–Sun). Each row: day name (Inter 500), time (Inter 400). Today's row: `--color-rose-soft` background, day name in `--color-rose-primary`.
- **Container**: no outer container; full-width rows separated by 1px border.
- **States**:
  - `default`: static.
  - `currently-open`: extra pill "Buka" in gold-accent, beside the time.
  - `closing-soon` (within 1 hour of close): warning amber dot.
  - `closed-now`: muted text, "Tutup" pill in `--color-text-muted`.
- **Edge cases**:
  - Detect user's local timezone. Salon is in WIB (UTC+7). Show salon-local time, not user time, with a small note "Jam operasional salon (WIB)" once at the top.
  - Server-side render the "today" row, hydrate with the correct day on the client (avoid SSR/client hydration mismatch).

### 5.14 `Footer`

See Section 4.5. No additional states beyond what the components inside it have.

### 5.15 `FormField`

- **Purpose**: One input in a form (booking sidebar, contact form).
- **Anatomy**: Label (text-body, 500) + input + helper text (text-small, muted) + error text (text-small, error color).
- **Container**: full-width on mobile, 50% on desktop for paired fields.
- **States**:
  - `default`: 1px `--color-border-strong` border, `--color-surface-raised` fill, `--radius-sm` (8px), 48px height.
  - `hover`: border `--color-rose-primary` at 50% opacity.
  - `focus`: border `--color-rose-primary` solid, 2px `--color-rose-soft` ring at 2px offset.
  - `filled`: text color `--color-text`.
  - `error`: border `--color-error`, helper text replaced with error text, subtle warm-red background tint.
  - `disabled`: 60% opacity, cursor not-allowed.
  - `success` (after validation pass): trailing checkmark in `--color-success`, no border change.
- **Edge cases**:
  - For `select` (service, stylist): custom-styled native select with chevron. Do not use a custom dropdown library.
  - For `date`/`time`: native `input type="date"` and `type="time"`, styled to match.
  - For `textarea`: 96px min-height, auto-grow optional but not required.

### 5.16 `ModalBooking`

- **Purpose**: Confirmation step before opening WhatsApp with pre-filled message.
- **Anatomy**: Centered modal, 480px max-width, `--color-surface-raised` background, `--radius-lg`, `--shadow-prominent`. Title "Konfirmasi Booking" + summary of form values + "Edit" link + primary CTA "Kirim via WhatsApp" + secondary "Batal".
- **Container**: backdrop `--color-bg` at 60% opacity, blurred `backdrop-filter: blur(4px)`.
- **States**:
  - `closed`: hidden.
  - `opening`: scale 0.95 → 1, opacity 0 → 1, 300ms `--ease-in-out-quint`. Backdrop fade-in 200ms.
  - `open`: static, focus trapped inside.
  - `closing`: reverse 200ms.
  - `sending`: button shows spinner, text "Membuka WhatsApp...".
  - `error`: if WA link fails to open (desktop browsers with no WA app), show fallback "Salin nomor" button.
- **Edge cases**:
  - On mobile: full-screen sheet (bottom-up animation), not centered modal.
  - Esc key closes. Click outside backdrop closes (with confirmation if form dirty).
  - When WhatsApp opens, log a "booking_intent" analytics event.

### 5.17 `Badge`

- **Purpose**: Small label — "Baru", "Promo", "Diskon 20%", "Best Seller".
- **Anatomy**: Inline pill, padding 4px 12px, Inter 500 12px, uppercase, letter-spacing 0.04em.
- **Variants**:
  - `rose` (default): `--color-rose-soft` background, `--color-rose-primary` text.
  - `gold`: `--color-gold-accent` at 20% opacity background, `--color-gold-accent-hover` text.
  - `wood`: `--color-wood` at 15% opacity background, `--color-wood` text.
  - `success`: `--color-success` at 15% opacity, `--color-success` text.
- **States**: static, no hover.
- **Edge cases**: max 1 badge per card. Never on a button.

### 5.18 `ToastNotification`

- **Purpose**: Transient feedback — "Booking terkirim!", "Form tidak valid", "Foto dimuat".
- **Anatomy**: Fixed bottom-left (opposite the FAB), 360px max-width, `--color-surface-raised` background, `--radius-md`, `--shadow-prominent`. Icon (success/error/info) + message + optional close button.
- **States**:
  - `entering`: translate-x -100% → 0, 300ms `--ease-spring-soft`.
  - `visible`: static, auto-dismiss after 4s.
  - `exiting`: translate-x -100%, 200ms.
- **Edge cases**:
  - Stack up to 3 toasts vertically, oldest at bottom.
  - Respect `prefers-reduced-motion`: instant appear, no slide.

### 5.19 `DaisyLogo` (referenced in Nav and Footer)

- **Purpose**: Brand mark, used in nav, footer, and as favicon.
- **Anatomy**: 5-petal daisy SVG. Center: 6px circle, `--color-gold-accent`. Petals: 5 ellipses, `--color-rose-primary`, rotated 72° each. Optional wordmark to the right in Playfair Display 600.
- **States**:
  - `default`: static.
  - `hover` (footer only): petals rotate ±8° alternating, 600ms.
  - `in-nav`: 40px icon, wordmark only on desktop, icon-only on mobile.
- **Edge cases**:
  - If SVG fails to load: render text "Daisy" in Playfair Display as fallback.

---

## 6. Page-by-Page Visual Specs

For each page: layout sketch, key components, motion, edge cases (empty/loading/error).

### 6.1 Home (`/`)

**Goal**: Convert visitors to book or browse services. Establish warm, candid brand impression in 3 seconds.

**Layout sketch (desktop, top to bottom):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: transparent over hero]                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [HERO — full-bleed C1 photo, gradient overlay,             │
│   H1 "Rambut Sempurna, Hati Hangat di Jogja"                │
│   sub-headline + 2 CTAs + scroll chevron]                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  [3-TILE SERVICES PREVIEW]                                  │
│  Potong    |    Coloring    |    Treatment                  │
│  Card      |    Card        |    Card                       │
│  [Lihat semua layanan →]                                    │
├─────────────────────────────────────────────────────────────┤
│  [STATS STRIP — 4.9★ 3,840 review | 9am-8pm daily | Since]  │
│  Background: --color-surface (warm blush)                   │
├─────────────────────────────────────────────────────────────┤
│  [STYLIST TEAM PREVIEW — carousel of 3 cards]               │
│  Mba Debby (featured)  |  Kak Agnes  |  Junior 1            │
├─────────────────────────────────────────────────────────────┤
│  [TESTIMONIALS CAROUSEL — 5-6 visible, scroll snap]         │
│  [quote] [quote] [quote] [quote] [quote]                    │
├─────────────────────────────────────────────────────────────┤
│  [MAP + HOURS — side by side]                               │
│  Map embed    |    Hours table                              │
├─────────────────────────────────────────────────────────────┤
│  [CTA BANNER]                                               │
│  "Siap booking rambut impianmu?" + [Booking Sekarang]       │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key components**: `Nav` (transparent → solid), `Hero`, `ServiceCard` (×3), `HoursTable` (mini), `Stat` strip (custom), `StylistCard` (×3), `TestimonialCard` (×5-6), `ContactCard` (map portion), CTA banner (custom), `Footer`.

**Motion**:
- Hero photo: Ken Burns scale 1.04 → 1.0, 12s, `--ease-out-expo`.
- Headline: fade-up 16px, 600ms, 200ms delay.
- Sub + CTAs: fade-up 16px, 600ms, 350ms delay.
- Scroll chevron: bounce 1.5s loop.
- Service tiles: stagger fade-up 80ms each when scrolled into view.
- Stats strip: count-up animation on number, 1500ms, on viewport entry (only once).
- Testimonial carousel: drag/swipe + arrow buttons. Slide 500ms `--ease-in-out-quint`. Auto-advance every 6s, pause on hover/focus.

**Edge cases**:
- **Empty**: If services list is empty, hide the 3-tile section, redirect CTA to WhatsApp.
- **Loading**: Hero photo shows blurred-up warm-cream placeholder; below-the-fold sections show skeleton tiles until they hydrate.
- **Error**: If a section's data fails to fetch, hide the section silently and show a small toast "Beberapa konten tidak dapat dimuat" with a retry button. Never block the page.

### 6.2 Services + Price List (`/layanan`)

**Goal**: Browse and compare services, drive to booking.

**Layout sketch (desktop):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: solid]                                               │
├─────────────────────────────────────────────────────────────┤
│  [PAGE HERO — small, no photo, just text]                   │
│   Overline: "LAYANAN KAMI"                                  │
│   H1: "Setiap layanan, dimulai dengan ngobrol dulu"         │
│   Lead: "Harga jelas di awal, tanpa kejutan."               │
├─────────────────────────────────────────────────────────────┤
│  [FILTER TABS]                                              │
│  [ Semua ] [ Potong ] [ Coloring ] [ Treatment ] [ Styling ]│
│  Active tab: rose-primary underline, bold                   │
├─────────────────────────────────────────────────────────────┤
│  [SERVICE GRID — 3 columns desktop, 2 tablet, 1 mobile]     │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │  Card   │  │  Card   │  │  Card   │                     │
│  │  image  │  │  image  │  │  image  │                     │
│  │  name   │  │  name   │  │  name   │                     │
│  │  desc   │  │  desc   │  │  desc   │                     │
│  │  60 min │  │ 90 min  │  │ 45 min  │                     │
│  │ Rp 150k │  │ Rp 350k │  │ Rp 100k │                     │
│  │ [Book]  │  │ [Book]  │  │ [Book]  │                     │
│  └─────────┘  └─────────┘  └─────────┘                     │
│  ... more cards                                             │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key components**: `Nav`, page hero (custom), filter tabs (custom), `ServiceCard`, `ModalBooking`, `Footer`.

**Motion**:
- Filter tab switch: cards crossfade 300ms, layout reflows with FLIP animation.
- Card hover: lift + image zoom.
- "Book this" click: opens `ModalBooking` pre-filled with this service.

**Edge cases**:
- **Empty filter result**: "Belum ada layanan di kategori ini." + a "Lihat semua layanan" link.
- **Loading**: skeleton cards (image + 3 text lines), 6 cards in grid.
- **Error**: card-level error placeholder with "Coba lagi" link; never a full-page error.
- **Price missing**: show "Hubungi untuk harga" instead of a number, primary button still active.

### 6.3 Stylist Team (`/tim`)

**Goal**: Build personal connection with the team, drive bookings with specific stylists.

**Layout sketch (desktop):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: solid]                                               │
├─────────────────────────────────────────────────────────────┤
│  [PAGE HERO — full-width photo strip of team]               │
│   Overline: "TIM STYLIST"                                   │
│   H1: "Kenalan dulu, baru duduk di kursi"                   │
├─────────────────────────────────────────────────────────────┤
│  [FEATURED OWNER CARD — Mba Debby]                          │
│  ┌──────────────────┐  ┌────────────────────────────────┐   │
│  │                  │  │  Mba Debby                     │   │
│  │   Owner photo    │  │  Owner & Top Stylist           │   │
│  │   (4:5)          │  │  [signature cuts] [consulting] │   │
│  │                  │  │  Bio paragraph...              │   │
│  │                  │  │  [Booking dengan Mba Debby →]  │   │
│  └──────────────────┘  └────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  [TEAM GRID — 3 columns, 1 mobile]                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │  Card   │  │  Card   │  │  Card   │                     │
│  │  photo  │  │  photo  │  │  photo  │                     │
│  │  name   │  │  name   │  │  name   │                     │
│  │  role   │  │  role   │  │  role   │                     │
│  │  chips  │  │  chips  │  │  chips  │                     │
│  │  bio    │  │  bio    │  │  bio    │                     │
│  └─────────┘  └─────────┘  └─────────┘                     │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key components**: `Nav`, page hero, featured owner card (custom), `StylistCard`, `ButtonPrimary`, `Footer`.

**Motion**:
- Owner card: fade-up 16px on scroll-in.
- Team grid: stagger 60ms per card.
- Stylist card hover: second image crossfade (sample work).

**Edge cases**:
- **Single stylist**: hide the team grid, show only the owner card centered.
- **Empty bio**: hide bio row, show only photo + name + role + chips.
- **Loading**: skeleton cards.
- **Error**: hide the section, don't block the page.

### 6.4 Before/After Gallery (`/galeri`)

**Goal**: Demonstrate skill visually, drive trust.

**Layout sketch (desktop):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: solid]                                               │
├─────────────────────────────────────────────────────────────┤
│  [PAGE HERO]                                                │
│   Overline: "BUKTI KERJA"                                   │
│   H1: "Drag untuk lihat transformasi"                       │
├─────────────────────────────────────────────────────────────┤
│  [FILTER TABS — same as services]                           │
│  [ Semua ] [ Potong ] [ Coloring ] [ Treatment ]            │
├─────────────────────────────────────────────────────────────┤
│  [FEATURED SLIDER — one large BeforeAfterSlider]            │
│   "Contoh pilihan minggu ini"                               │
│   Full-width, max 720px centered                            │
├─────────────────────────────────────────────────────────────┤
│  [MASONRY GRID — 3 cols desktop, 2 tablet, 1 mobile]        │
│   Mixed 1:1 and 3:4 tiles                                   │
│   Each tile: pair thumbnail + service chip                 │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key components**: `Nav`, page hero, filter tabs, `BeforeAfterSlider`, `GalleryGrid`, `Footer`.

**Motion**:
- Filter switch: tiles crossfade, 300ms.
- Slider drag: real-time, no transition.
- Tile hover: scale 1.03.
- Tile click: opens a `ModalBooking`-style lightbox with the full slider + service info.

**Edge cases**:
- **No photos yet**: Show a warm placeholder section with a daisy illustration + "Foto before/after segera hadir — untuk saat ini, follow Instagram kami @daisybeautybydebby." with a link.
- **Loading**: skeleton tiles (3-column grid, 60% opacity pulse).
- **Filter empty**: "Belum ada foto untuk kategori ini." + a "Lihat semua" link.
- **Slider touch failure**: fallback to a side-by-side static layout, no drag.

### 6.5 Booking / Contact (`/booking`)

**Goal**: Make booking effortless — pre-fill WhatsApp message, no friction.

**Layout sketch (desktop):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: solid]                                               │
├─────────────────────────────────────────────────────────────┤
│  [PAGE HERO — small, no photo]                              │
│   Overline: "BOOKING"                                       │
│   H1: "Satu formulir, langsung ke WhatsApp Mba Debby"       │
├─────────────────────────────────────────────────────────────┤
│  [TWO-COLUMN LAYOUT]                                        │
│  ┌──────────────────┐  ┌──────────────────────────────┐    │
│  │  SIDEBAR FORM    │  │  CONTACT INFO PANEL          │    │
│  │  Nama*           │  │  📞 0896-1237-7910           │    │
│  │  [input]         │  │  [Tap to call]               │    │
│  │                  │  │                              │    │
│  │  Layanan*        │  │  💬 WhatsApp                 │    │
│  │  [select]        │  │  [Tap to chat]               │    │
│  │                  │  │                              │    │
│  │  Tanggal*        │  │  📍 Alamat                   │    │
│  │  [date]          │  │  Belakang Circle K, Ruko...  │    │
│  │                  │  │                              │    │
│  │  Waktu*          │  │  🕐 Jam Operasional         │    │
│  │  [time]          │  │  [mini HoursTable]           │    │
│  │                  │  │                              │    │
│  │  Stylist         │  │  [MAP EMBED]                 │    │
│  │  [select]        │  │  Lazy-loaded iframe          │    │
│  │                  │  │                              │    │
│  │  Catatan         │  │                              │    │
│  │  [textarea]      │  │                              │    │
│  │                  │  │                              │    │
│  │  [Submit]        │  │                              │    │
│  └──────────────────┘  └──────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key components**: `Nav`, page hero, `FormField` (×5), `ModalBooking`, `ContactCard`, mini `HoursTable`, `Footer`.

**Motion**:
- Form field focus: 2px rose-soft ring fade-in 200ms.
- Submit: button shows spinner, opens `ModalBooking` with pre-filled summary.
- Modal "Kirim via WhatsApp" click: `window.open('https://wa.me/6289612377910?text=...', '_blank')`, log analytics.

**Edge cases**:
- **Empty form submission**: inline validation, no modal opens.
- **Service field empty**: shows "Pilih layanan" toast.
- **Date in the past**: form rejects, error text "Pilih tanggal yang akan datang".
- **WA link fails to open** (rare desktop case): modal shows "Salin nomor" button (copies `6289612377910` to clipboard, shows success toast).
- **Loading**: form is interactive immediately, no full-page loading state.

### 6.6 Testimonials (`/testimoni`)

**Goal**: Build trust through social proof, link to Google for more.

**Layout sketch (desktop):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: solid]                                               │
├─────────────────────────────────────────────────────────────┤
│  [PAGE HERO]                                                │
│   Overline: "KATA MEREKA"                                   │
│   H1: "4.9 dari 3,840 ulasan. Bukan kebetulan."             │
│   Lead: "Beberapa cerita dari pelanggan kami."              │
├─────────────────────────────────────────────────────────────┤
│  [FILTER CHIPS — by service type]                           │
│  [ Semua ] [ Potong ] [ Coloring ] [ Treatment ] ...        │
├─────────────────────────────────────────────────────────────┤
│  [CAROUSEL — 5-6 cards visible on desktop, 1.2 on mobile]   │
│  [TestimonialCard] [TestimonialCard] [TestimonialCard] ...  │
│  [← prev]                                          [next →] │
├─────────────────────────────────────────────────────────────┤
│  [READ ALL ON GOOGLE] banner with link to Maps             │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key components**: `Nav`, page hero, filter chips, `TestimonialCard`, "Read on Google" banner (custom), `Footer`.

**Motion**:
- Carousel slide: 500ms `--ease-in-out-quint`, drag/swipe enabled.
- Auto-advance: every 7s, pause on hover/focus.

**Edge cases**:
- **No testimonials for filter**: "Belum ada testimoni untuk kategori ini." + "Lihat semua" link.
- **Loading**: skeleton cards.
- **Few testimonials (< 3)**: hide carousel arrows, show static grid.

### 6.7 About / Story (`/tentang`)

**Goal**: Personal connection, brand story, why Daisy is different.

**Layout sketch (desktop):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: solid]                                               │
├─────────────────────────────────────────────────────────────┤
│  [HERO — full-bleed Mba Debby portrait, gradient overlay]   │
│   Overline: "TENTANG KAMI"                                  │
│   H1: "Salonnya Mba Debby, bukan brand besar"               │
├─────────────────────────────────────────────────────────────┤
│  [STORY — 2 paragraphs, max-width 720px, centered]          │
│   Para 1: founder story, hospitality focus                  │
│   Para 2: scale, what's coming                              │
├─────────────────────────────────────────────────────────────┤
│  [VALUES GRID — 3 columns, icons + heading + paragraph]     │
│  💛 Transparansi  |  🤝 Kehangatan  |  ✨ Sentuhan Pribadi  │
│  Clear pricing   |  Free drinks    |  Owner-led             │
│  upfront         |  snacks, candy  |  service              │
├─────────────────────────────────────────────────────────────┤
│  [MEET THE TEAM — mini strip]                               │
│  [photo] [photo] [photo]                                    │
│  "Kenalan sama tim kami →"                                  │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key components**: `Nav`, hero (photo variant), story section (custom), values grid (custom), mini stylist strip (custom), `Footer`.

**Motion**:
- Hero: same as home hero.
- Story paragraphs: fade-up on scroll-in, 500ms.
- Values grid: stagger 80ms per value, scale 0.95 → 1 on entry.
- Mini stylist strip: horizontal scroll-snap on mobile.

**Edge cases**:
- **Missing owner photo**: use the C1 hero PNG as fallback, with a note "Foto Mba Debby segera hadir".
- **Loading**: skeleton paragraphs + skeleton value tiles.
- **No team data**: hide the meet-the-team strip.

### 6.8 FAQ (`/faq`)

**Goal**: Reduce repetitive WhatsApp questions, build trust.

**Layout sketch (desktop):**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: solid]                                               │
├─────────────────────────────────────────────────────────────┤
│  [PAGE HERO — small]                                        │
│   Overline: "PERTANYAAN UMUM"                               │
│   H1: "Hal yang sering ditanyain"                           │
│   Lead: "Kalau belum ada di sini, langsung chat kami."      │
├─────────────────────────────────────────────────────────────┤
│  [CATEGORY TABS]                                            │
│  [ Umum ] [ Layanan ] [ Booking ] [ Pembayaran ]            │
├─────────────────────────────────────────────────────────────┤
│  [ACCORDION — 10-12 questions, max 3 open]                  │
│  ▸ Berapa harga potong rambut dengan Mba Debby?             │
│  ▸ Apakah perlu appointment dulu?                          │
│  ▾ Bagaimana cara booking via website?                      │
│    Jawaban: klik tombol "Booking Sekarang" di halaman...    │
│  ▸ Apakah harga coloring sudah termasuk konsultasi?        │
│  ▸ ...                                                       │
├─────────────────────────────────────────────────────────────┤
│  [BOTTOM CTA]                                               │
│  "Masih ada pertanyaan?" + [Chat via WhatsApp]             │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key components**: `Nav`, page hero, category tabs, `FAQAccordion`, bottom CTA (custom), `Footer`.

**Motion**:
- Accordion open: smooth height (`grid-template-rows`), 300ms `--ease-out-expo`.
- Category switch: accordion crossfade, 300ms.
- Sticky category tabs on scroll within the FAQ section.

**Edge cases**:
- **No FAQ yet**: hide the section, show only the bottom CTA.
- **Loading**: skeleton rows.
- **Direct link to question** (e.g., `/faq#cara-booking`): on load, scroll to and auto-open that question.

---

## 7. Sound Direction

**N/A.** This is a marketing/informational site, not a game or interactive app. The PRD does not call for audio. No `Audio` elements, no `prefers-reduced-motion`-bypassing sound, no background music. Skip entirely.

---

## 8. Asset Inventory

Every asset the build needs. Mark priority and source. Items with `[OWNER]` need real photography from Mba Debby.

### 8.1 Critical (must-have for launch)

| Asset | Source | Priority | Format | Dimensions |
|---|---|---|---|---|
| `hero-home.jpg` | C1 PNG (placeholder) → re-shoot [OWNER] | P0 | JPG, AVIF fallback | 1920×1080, optimized < 250KB |
| `og-image.jpg` | Composite: C1 + Daisy logo | P0 | JPG | 1200×630 |
| `favicon.svg` | Hand-drawn 5-petal daisy | P0 | SVG | 32×32 viewBox |
| `apple-touch-icon.png` | Daisy logo | P0 | PNG | 180×180 |
| `manifest-icon-192.png`, `manifest-icon-512.png` | Daisy logo | P0 | PNG | 192×192, 512×512 |
| `team-mba-debby.jpg` | [OWNER] | P0 | JPG | 800×1000 (4:5) |
| `team-kak-agnes.jpg` | [OWNER] | P0 | JPG | 600×600 (1:1) |
| `service-potong.jpg` | [OWNER] / Unsplash fallback | P0 | JPG | 800×600 (4:3) |
| `service-coloring.jpg` | [OWNER] / Unsplash fallback | P0 | JPG | 800×600 |
| `service-treatment.jpg` | [OWNER] / Unsplash fallback | P0 | JPG | 800×600 |
| `service-styling.jpg` | [OWNER] / Unsplash fallback | P0 | JPG | 800×600 |

### 8.2 Important (launch with placeholders, replace soon)

| Asset | Source | Priority | Format | Dimensions |
|---|---|---|---|---|
| `team-junior-1.jpg`, `team-junior-2.jpg` | [OWNER] | P1 | JPG | 600×600 |
| `before-after-01.jpg` through `before-after-10.jpg` | [OWNER] | P1 | JPG | 800×1067 (3:4) — 10 paired sets |
| `service-konsultasi.jpg` | [OWNER] | P1 | JPG | 800×600 |
| `interior-reception.jpg` | [OWNER] | P1 | JPG | 1200×800 (3:2) |
| `interior-chair.jpg` | [OWNER] | P1 | JPG | 1200×800 |
| `interior-wash.jpg` | [OWNER] | P1 | JPG | 1200×800 |
| `about-debby-candid.jpg` | [OWNER] | P1 | JPG | 1200×1500 (4:5) |
| `pampas-grass-detail.jpg` | C1 detail (placeholder) → re-shoot [OWNER] | P2 | JPG | 1200×800 |
| `ceramic-cup-detail.jpg` | C1 detail (placeholder) → re-shoot [OWNER] | P2 | JPG | 1200×800 |
| `golden-hour-light.jpg` | C1 detail (placeholder) → re-shoot [OWNER] | P2 | JPG | 1200×800 |

### 8.3 Decorative SVG (inline, not files)

These are rendered inline in code, not served as files.

- `DaisyLogo` — 5-petal daisy mark.
- `IconScissors` — for service icons.
- `IconBrush` — for coloring service.
- `IconBottle` — for treatment service.
- `IconBlower` — for styling service.
- `IconChat` — for consultation service.
- `IconStar` — for ratings.
- `IconChevron` — for accordion, scroll indicator.
- `IconWhatsApp` — for FAB.
- `IconPhone`, `IconMapPin`, `IconClock` — for contact card.
- `IconInstagram` — for footer.

All icons: 24px viewBox, 1.5px stroke, currentColor. Inline SVG, not icon font.

### 8.4 Photography recipe (for owner shoot)

When Mba Debby is ready for the photo session, give her this brief so the result matches the C1 direction:

**Setting**: Salon interior, natural light only. Schedule for late afternoon (golden hour ~4-5pm WIB). Sheer curtains on the window if possible.

**Props on set**: Dried pampas grass in a ceramic vase, a ceramic jasmine-tea cup, a rattan element (chair, tray, basket), the salon speaker with Spotify visible (no text).

**Outfit**: Cream or terracotta apron over a neutral top. No logos visible. Hair natural, not over-styled.

**Style**: Candid, mid-action. Hands in hair, scissors in hand, soft smile. Not posed, not looking at camera directly. Editorial feel — like a magazine behind-the-scenes, not a corporate headshot.

**Avoid**: Stiff poses, direct flash, overlit studio lighting, stock-photo smiles, model-agency styling.

### 8.5 Fallback for missing assets

If Mba Debby cannot provide photos in time:

1. **Hero**: Use the C1 generated PNG (already have it). Mark as placeholder with subtle "Sample" text in the corner only in dev mode.
2. **Team photos**: Use stock-style warm candid photos from Unsplash, search terms: "salon stylist candid warm", "beauty salon team warm". Credit Unsplash in the page footer. Replace with real photos as they arrive.
3. **Service photos**: Same Unsplash strategy. Search: "hair cutting closeup", "hair coloring hands", "hair treatment bowl".
4. **Before/after**: If no real pairs, hide the gallery section entirely (don't fake it).
5. **Owner portrait**: Use the C1 hero PNG cropped to 4:5 as fallback.

The site must launch and look complete even if half the photos are placeholders. The C1 direction carries the brand.

---

## 9. Open Decisions Flagged for User

These are choices the spec author cannot make without the user. Each one shifts the implementation, so they need an explicit answer.

1. **Photo session timing.** Is Mba Debby available for a photo shoot before launch, or will we launch with the C1 PNG + Unsplash fallbacks and replace later? The PRD says assets are a gap — we need a date. *Affects*: launch date, asset pipeline, which sections are placeholders at v1.

2. **WhatsApp number confirmation.** The PRD lists `0896-1237-7910` (10-digit Indonesian mobile). WhatsApp deep links need international format `6289612377910` (drop the leading 0). Is this still the active WA number for the salon? Is it Mba Debby's personal WA or a salon-broadcaster number? *Affects*: every `wa.me` link on the site, the FAB, the booking form.

3. **Service prices.** The PRD says "Rp 75.000 - 400.000" is a refined estimate, "medium confidence". The spec assumes placeholder prices until owner confirms. If owner cannot provide exact prices before launch, do we (a) show "Mulai dari Rp 75.000" ranges, (b) show "Hubungi untuk harga" everywhere, or (c) launch without prices and add them later? *Affects*: the services page, the booking form, the price stat on home.

4. **Stylist team size.** Spec assumes 4 stylists (Mba Debby, Kak Agnes, 2 juniors). If the team is smaller (just Mba Debby + 1 junior), the Stylist Team page layout shifts. If larger, the grid needs adjustment. Confirm the actual team roster before the team page is built.

5. **Dark mode priority.** Spec includes dark mode tokens as a default (`prefers-color-scheme` + manual toggle). But dark mode is roughly 20% extra work and the PRD doesn't mention it. Should we ship dark mode in v1, or punt to v1.1? *Recommendation*: ship it, it's a few hours of work and matches the "warm hospitality" angle (browsing late at night).

6. **Booking flow: form-vs-direct-WA.** The spec assumes a sidebar form that pre-fills WA. An alternative is a single giant "Chat di WhatsApp" button that opens WA with a generic pre-filled message. The form is more guided but adds a step. Which does Mba Debby prefer? *Affects*: the booking page entirely.

7. **Testimonial sourcing.** Spec uses CSV review quotes (Section 3 of PRD) as testimonials. These are public Google reviews, so legally usable, but reviewer names are real. Do we (a) show full names, (b) first-name + last-initial, (c) ask each reviewer for permission? *Recommendation*: first-name + last-initial for privacy, with a note "Reviews from Google" linking to Maps.

8. **Email address.** The PRD marks email as a GAP. Do we set up `hello@daisybeautysalonbydebby.com` or use Mba Debby's personal email? *Affects*: contact card, footer, Resend API configuration for the contact form (if we add one).

9. **Instagram handle.** Spec references `@daisybeautybydebby` as a placeholder. What's the real handle? *Affects*: footer link, OG meta, the "Follow us" prompt on the empty gallery state.

10. **Domain name.** Spec assumes a custom domain. The PRD suggests `daisybeautysalonbydebby.com` as one option. Confirm the actual domain. *Affects*: OG URL, canonical URLs, sitemap, Resend from-address.

---

## 10. Implementation Notes for Engineers

A few decisions baked into this spec that engineers should not have to re-derive:

- **CSS approach**: Tailwind is fine, but the design tokens in Section 2 MUST live in `tokens.css` as CSS custom properties. Tailwind config reads from them. Do not hardcode hex codes in `tailwind.config.js` or in component classes — use `bg-surface` not `bg-[#F5E8DC]`.

- **Image component**: Use `next/image` for all photos. Set `sizes` attribute explicitly. Hero photo: `fetchpriority="high"`, `loading="eager"`. Everything below the fold: `loading="lazy"`.

- **Font loading**: Preload Playfair Display (regular 400) and Inter (regular 400) as `font-display: swap`. The rest of the weights are variable and lazy-loaded.

- **No `bg-clip-text`**: The design-quality rules explicitly forbid gradient text. Headlines are solid rose-primary, not rose-to-gold gradients.

- **No glassmorphism decorative use**: A subtle 4px backdrop blur is acceptable on the modal backdrop ONLY. Do not use frosted glass on cards or nav.

- **WhatsApp deep link format**: `https://wa.me/6289612377910?text=<urlencoded message>`. Pre-fill text always in Indonesian, with the user's form values interpolated. Example for booking:

  ```
  Halo Mba Debby, saya mau booking:
  - Layanan: Potong Rambut Wanita
  - Tanggal: 2026-07-15
  - Waktu: 14:00
  - Stylist: Mba Debby (kalau available)
  - Nama: [user's name]

  Mohon konfirmasinya ya, terima kasih!
  ```

- **Analytics**: Plausible, self-hosted or cloud. Track: `booking_intent` (on WA link click), `service_view` (per service card), `gallery_filter` (per filter change), `faq_open` (per question). No PII. No cookies.

- **Accessibility**: All interactive elements must have visible focus rings (use `:focus-visible`, not `:focus`). All images need `alt` text — empty `alt=""` for decorative, descriptive for content. Accordion uses `aria-expanded` + `aria-controls`. Modal uses focus trap + `aria-modal="true"`. Forms have `<label>` properly associated. Color contrast: rose-primary on cream is 4.6:1 (passes AA for large text, but use bold weight to ensure body-size pass).

- **Performance budget**: Per ECC web/performance.md, this is a microsite, so JS < 80KB gzipped, CSS < 15KB. The `next/image` + `next/font` pipeline handles most of this. Avoid heavy animation libraries — use CSS transitions and one small JS helper for the slider.

- **Dark mode switch**: Implement as a `data-theme="light|dark"` attribute on `<html>`, with CSS custom properties switching by `[data-theme="dark"]`. Default to `prefers-color-scheme`. Persist in `localStorage` key `daisy.theme`. SSR-render with `prefers-color-scheme` to avoid flash.

- **Map embed**: Use the no-API-key Google Maps embed URL: `https://maps.google.com/maps?q=-7.772316,110.404803&z=15&output=embed`. Lazy-load the iframe (`loading="lazy"`). Provide a fallback link "Buka di Google Maps" if the iframe fails.

- **Schema.org JSON-LD**: Per PRD Section 9. Inject as a `<script type="application/ld+json">` in `<head>`. Validate with Google Rich Results before launch.

- **Sitemap + robots.txt**: Auto-generate from Next.js routes. Submit to Google Search Console after launch.

---

**End of spec.** Total sections: 10. Sections 1-5 cover concept/tokens/components. Section 6 covers all 8 pages. Sections 7-8 cover sound (N/A) and assets. Section 9 lists 10 open decisions for the user. Section 10 gives engineers the implementation rules.

Build with care. This is someone's neighborhood salon.
