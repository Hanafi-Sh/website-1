# Brief Classification — Daisy Beauty Salon By Debby

## Category

**B: Productivity** (closest reference: Cal.com — booking-focused business site)

Rationale: This is a marketing/business website for a beauty salon. The primary conversion goal is to drive bookings via WhatsApp. Functionality includes:
- Service catalog with pricing
- Stylist team profiles
- Booking flow (WhatsApp deep-link)
- Contact / location info
- Trust signals (reviews, ratings)

This matches the Productivity pattern: a service-based business site that converts visitors to leads.

## visual_app

**true**

The site is heavily visual: hero image (candid photo of stylist + client), portfolio gallery (before/after), stylist headshots, atmospheric photo backgrounds. Visual design is a primary differentiator, not just chrome.

## Reference apps (B category)

- **Cal.com** — closest match (booking flow, service pages, location-based business)
- **Linear** — for design quality bar (clean, premium feel)
- **Plausible** — for analytics approach (privacy-friendly, simple)

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Hosting**: Vercel
- **CMS**: Markdown files in repo (no headless CMS for v1)
- **Forms**: Native Next.js route handler + Resend email API
- **Analytics**: Plausible (privacy-friendly)
- **Maps**: Google Maps embed (no API key)
- **WhatsApp**: `wa.me` deep links

## Build scope

- 8 pages: Home, Services, Stylist Team, Before/After Gallery, Booking, Testimonials, About, FAQ
- Schema.org JSON-LD (LocalBusiness + BeautySalon)
- SEO meta + Open Graph
- WCAG 2.2 AA compliance
- Performance: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Mobile-first responsive
- 1 hero image (C1 Warm Atelier)
- 5-color design tokens + Playfair Display + Inter typography
