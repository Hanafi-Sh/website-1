# PRD: Daisy Beauty Salon By Debby — Website Build Spec

> **Internal build spec** — untuk build team, bukan deliverable ke client. Owner validation needed sebelum build.
> Generated: 2026-06-23 | Rank #1 (score 86.82) | Category: Beauty salon

## 0. Executive Summary

**Headline (recommended)**: _Rambut Sempurna, Hati Hangat di Jogja_

**Value proposition**: Daisy Beauty Salon by Debby — potongan rambut terbaik di Yogyakarta dengan keramahan yang bikin kamu betah berlama-lama. Rating 4.90★ dari 3.840 pelanggan.

**Primary CTA**: `Booking Sekarang` &nbsp;|&nbsp; **Secondary CTA**: `Lihat Layanan`

**Why now**: 3,840 customer reviews (4.9★) tapi Daisy Beauty Salon By Debby belum punya website. Ini = significant opportunity untuk:
- Capture organic search traffic ("salon {category.lower()} di Sleman")
- Build trust sebelum customer WhatsApp untuk booking
- Reduce repetitive WhatsApp questions via FAQ

## 0.5. Data Sources

| Source | Available | Notes |
|---|---|---|
| Initial CSV scrape | ✅ | 35 columns, scraped 22 Jun 2026 |
| Re-scrape (`-email -extra-reviews`) | ⏳ skipped for this PRD |
| Direct Google Maps visit | ❌ | No new info vs CSV (limited view) |
| Rules-based assumption gen | ✅ | 11 assumptions |
| AI-enhanced inference (Haiku) | ✅ | services + voice + price + themes |
| AI content drafts (Haiku) | ✅ | hero copy + about draft + SEO + design + meeting script + launch |

## 1. Business Identity

| Field | Value | Source |
|---|---|---|
| Nama | Daisy Beauty Salon By Debby | CSV |
| Kategori | Beauty salon | CSV |
| Alamat | Belakang Circle K, Ruko Gatic, Jl. Perumnas Seturan No.C3, Dabag, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281 | CSV |
| Kota | Sleman Regency | CSV |
| Provinsi | Special Region of Yogyakarta | CSV |
| Phone | 0896-1237-7910 | CSV |
| Email | _(owner input needed)_ | GAP |
| Coordinates | -7.772316, 110.404803 | CSV |
| Plus Code | 6CH3+3W Caturtunggal, Sleman Regency, Special Region of Yogyakarta | CSV |
| Place ID | `ChIJt6xrNJ1Zei4RzZBYb3WpX8E` | CSV |

**About signals (CSV `about` JSON):**
- **From the business**: Identifies as women-owned
- **Offerings**: Beverages
- **Amenities**: Toilet
- **Planning**: Appointment required
- **Planning**: Appointments recommended
- **Payments**: Cheques
- **Payments**: Credit cards
- **Payments**: Debit cards
- **Payments**: NFC mobile payments

**Signals dari nama bisnis:**
- Owner-led / personal branding: nama owner ada di nama bisnis

**Signals dari alamat:**
- Area Caturtunggal/Seturan — dekat kampus UII, UGM, UNY; dominan mahasiswa
- Sleman Regency — pasar luas, mix urban + suburban
- Lokasi di ruko — biasanya reception-only

## 2. Hours & Traffic

**Open hours** [CSV]:
  - **Monday**: 9.00 am–8.00 pm
  - **Tuesday**: 9.00 am–8.00 pm
  - **Wednesday**: 9.00 am–8.00 pm
  - **Thursday**: 9.00 am–8.00 pm
  - **Friday**: 9.00 am–8.00 pm
  - **Saturday**: 9.00 am–8.00 pm
  - **Sunday**: 9.00 am–8.00 pm

**Peak hour** [CSV, inferred from `popular_times`]: ~**17:00**

## 3. Social Proof

- **Total reviews**: 3,840 [CSV]
- **Rating**: 4.90 / 5 [CSV]
- **5-star share**: 96.4% (3,701 reviews) [CSV]
- **Positive share** (4-5★): 98.0% [CSV]
- **Negative** (1-2★): 57 [CSV]

**Sample review quotes** [CSV `user_reviews`] — ready to use as testimonials (subject to owner permission):

> ⭐⭐⭐⭐⭐ **5** — _nancy ayudiah_  
> sukaaa bgttt dikasih potongan yang suits my hair well🫶🏻🫶🏻 five stars for the service and hospitality. Definitely will come back one day inshaAllah!!

> ⭐⭐⭐⭐⭐ **5** — _A6_ Viona Nur Hardianti_  
> The service is good from the beginning, the product offer is also informed by the price so the customer is not surprised when paying. The result of the cut with the top stylist is also very good✨✨Next time if I go to Jogja again I want to do hair treatment here again. Sehat sehat...

> ⭐⭐⭐⭐⭐ **5** — _sekar widianingrum_  
> Best hair cut in jogja, ive been trying so many salon before this, but i found this gem for haircut, reccomend to make a reservation and ask to be cut by their owner Mba Debby. All service are real 5 star.

> ⭐⭐⭐⭐⭐ **5** — _Devica Kurniasari_  
> Omg, this haircut is amazing — adorable, cute, everything 😍
The final look is so gorgeous.
I really need to come back for another treatment.
Hair color next sounds like a great idea

> ⭐⭐⭐⭐⭐ **5** — _Sapti Aryati_  
> I had a hair cut and styling by the junior. It was good but I feel she worked in hurry, less discussion before styling my hair.

> ⭐⭐⭐⭐⭐ **5** — _yosephin jasmine safitri_  
> Bagus bangett. All the services in here are great. You can definitely get your dream hair in heree.

**Review themes (AI-extracted)** [AI-HAIKU · from review text]:

- **Kualitas potongan rambut yang luar biasa**: Beberapa review memuji hasil potongan rambut secara konsisten, menyebut 'best hair cut in jogja' dan 'butterfly haircut yang gorgeous', menunjukkan keahlian stylist—terutama owner Mba Debby—menjadi ke
- **Pengalaman salon yang nyaman dan menyenangkan**: Reviewer menyebut 'super comfy' dengan 'free drinks, snacks, and candy' plus musik Spotify, menunjukkan salon berinvestasi pada suasana santai, bukan sekadar layanan teknis.
- **Komunikasi harga yang transparan**: Satu reviewer secara eksplisit memuji bahwa 'product offer is also informed by the price so the customer is not surprised when paying', yang merupakan sinyal positif soal kejujuran pricing.
- **Stylist tertentu sangat direkomendasikan**: Nama spesifik seperti 'Mba Debby' (owner) dan 'Kak Agnes' muncul sebagai stylist yang dipuji, menandakan reputasi personal stylist lebih kuat daripada branding salon secara keseluruhan.
- **Potensi inkonsistensi antar stylist**: Satu review 5-bintang dari junior stylist menyebut 'worked in hurry, less discussion before styling', menunjukkan pengalaman bisa bervariasi tergantung siapa yang melayani.

## 4. Services & Pricing

**Likely services** [AI-HAIKU · inferred from review text + name + category]:

- Potong rambut wanita
- Hair coloring / pewarnaan rambut
- Hair treatment
- Styling rambut
- Konsultasi gaya rambut
- Cuci dan blow rambut
- Snack & beverages untuk pelanggan

**Price range (refined estimate)** [AI-HAIKU]: Rp 75.000 - 400.000 per layanan
> *Rationale*: Sebagai salon rambut di area Seturan/Sleman yang melayani middle market dengan layanan hair coloring, treatment, dan styling oleh top stylist owner, harga wajar di rentang menengah. Review menyebut ha
> *Confidence*: medium

⚠️ **Owner input needed**: confirm exact services, prices, durations, packages, promos

## 5. Target Audience & Conversion Goal

> **[RULES · MEDIUM]**: Wanita (dan pria pendukung), urban Sleman/Yogyakarta, peduli personal care. Women-owned = value authenticity & personal touch
> *Rationale*: Default kategori + signals: Owner-led / personal branding: nama owner ada di nama bisnis; Women-owned business — penting untuk branding & value proposition; Appointment required — high consideration p
> *Verify by*: Owner confirms primary target customer

> **[RULES · MEDIUM]**: Book appointment via WhatsApp
> *Verify by*: Owner confirms conversion goal (call, booking, walk-in, order)

## 6. Brand & Voice

**Brand voice** [AI-HAIKU · from review text]: **WARM**
> *Rationale*: Reviewer konsisten menyebut keramahan, hospitality, dan suasana nyaman—bukan klaim premium atau mewah—cocok dengan tone hangat yang ramah khas salon lokal wanita.
>
> **Key phrases untuk copywriting**:
> - _Rambut impian kamu ada di sini_
> - _Sewa waktu dengan stylist favorit kami_
> - _Bikin cantik bareng Mba Debby_

> **[RULES · MEDIUM-HIGH]**: Strong owner branding — website harus feature owner prominently (foto, bio, story)
> *Rationale*: Signal: Owner-led / personal branding: nama owner ada di nama bisnis. Bisnis 'By [name]' biasanya personal brand-driven

## 7. Page-by-Page Content

### 7.1 Home / Hero

**Headline (recommended)**: _Rambut Sempurna, Hati Hangat di Jogja_

**Sub-headline**: Daisy Beauty Salon by Debby — potongan rambut terbaik di Yogyakarta dengan keramahan yang bikin kamu betah berlama-lama. Rating 4.90★ dari 3.840 pelanggan.

**Primary CTA**: `Booking Sekarang`

**Secondary CTA**: `Lihat Layanan`

**Alternative headlines** (untuk A/B test):
  1. _Potong Rambut Impian, Bareng Mba Debby_
  2. _Sultan-nya Hair Treatment di Sleman, Yogyakarta_

### 7.2 About / Story

**Headline**: _Tentang Daisy Beauty Salon by Debby_

**Paragraph 1** (draft):
> Halo, kami Daisy Beauty Salon by Debby — salon rambut milik perempuan yang terletak di Belakang Circle K, Ruko Gatic, Seturan, Sleman. Berawal dari passion Mba Debby akan dunia styling rambut, kami hadir untuk memberikan pengalaman salon yang hangat, ramah, dan bikin kamu betah — bukan sekadar tempat potong rambut. Pelanggan kami sering bilang suasana di sini super comfy, lengkap dengan free drinks, snacks, dan musik Spotify yang bikin rileks. Kami percaya, rambut bagus itu bonus, tapi rasa dihargai itu yang utama. Itulah kenapa harga selalu kami sampaikan di awal, supaya kamu nggak kaget saat bayar.

**Paragraph 2** (draft):
> Dengan rating 4.90 dari 3.840 ulasan, kami bangga jadi salah satu salon paling direkomendasikan di Jogja. Mulai dari potongan klasik, butterfly haircut yang gorgeous, sampai hair coloring yang presisi — kami siap mewujudkan rambut impianmu. Mau ditemani Mba Debby langsung, atau Kak Agnes yang jago coloring? Booking dulu yuk, supaya kami bisa fokus penuh melayani kamu.

**Founder story prompt** (untuk owner): _Ceritakan kapan dan kenapa Mba Debby mulai membuka salon ini. Apa yang bikin Mba Debby jatuh cinta sama dunia beauty? Dan apa harapan Mba Debby untuk setiap pelanggan yang duduk di kursi salon?_

### 7.3 Services + Price List

Format: card grid per kategori, dengan foto, harga, durasi. Confirmation dari owner untuk final.

### 7.4 Stylist Team

Format: per-stylist card dengan foto, bio (2-3 kalimat), spesialisasi, contoh hasil.
- Mba Debby (owner) — top stylist, signature cuts
- Kak Agnes — coloring specialist
- Junior stylists — basic services
(Owner input: confirm names + photos + bio detail)

### 7.5 Before/After Gallery

Format: paired before/after images, filter by service type. Owner input: provide 5-10 set high-quality photos with permission.

### 7.6 Booking / Contact

**Primary**: WhatsApp click-to-chat (pre-filled message: 'Halo Mba Debby, saya mau booking [layanan] untuk tanggal...')
**Secondary**: phone call tap-to-call
**Tertiary**: Google Maps directions tap

### 7.7 Testimonials

Use review quotes (Section 3) with owner permission. Format: rotating carousel, 5-6 testimonials per page.

## 8. Design Direction

**Color palette** (saran — owner boleh override):

| Name | Hex | Use |
|---|---|---|
| primary | `#C44569` | main brand color, CTA buttons, headings |
| secondary | `#F8E1E7` | background tints, soft sections |
| accent | `#E8B86D` | highlights, badges, rating stars |
| neutral_dark | `#2A2A2A` | body text |
| neutral_light | `#FAFAFA` | page background |

**Typography**: `Playfair Display` (headings) + `Inter` (body)
> Playfair Display membawa keanggunan feminin yang hangat untuk heading, sementara Inter menjaga keterbacaan modern untuk body text — pas dengan brand voice salon wanita yang ramah tapi profesional.

**Imagery style**: Foto natural, warm, dan candid — pelanggan tersenyum di kursi salon, detail tangan stylist saat memotong, cangkir kopi di meja tunggu. Hindari stok foto yang terlalu polished; pelanggan ingin lihat suasana asli salon. Pencahayaan lembut dengan tone golden hour.

**UI tone**: Rounded corners pada button dan card (border-radius 12-16px) untuk kesan lembut. Soft shadows halus, generous whitespace antar section, dan micro-interactions yang subtle. Hindari layout yang terlalu rigid — biarkan mengalir seperti suasana salon yang rileks.

**Visual assets** [GAP — owner input]:
- [ ] Logo original (vector / high-res PNG)
- [ ] Brand color palette (confirm/override)
- [ ] Owner photo (jika owner-led)
- [ ] 10-20 service/portfolio photos high-res

## 9. SEO Strategy

**Meta title** (≤60 char): `Daisy Beauty Salon by Debby | Salon Jogja Seturan`

**Meta description** (≤160 char): _Salon rambut wanita terbaik di Seturan, Jogja. Potong rambut, coloring, & treatment dengan harga transparan. Rating 4.90★ dari 3.840 review. Booking sekarang!_

**Primary keywords** (target di homepage):
- `salon rambut Jogja`
- `salon kecantikan Sleman`
- `Daisy Beauty Salon Debby`

**Secondary keywords** (services + about pages):
- `potong rambut wanita Jogja`
- `hair coloring Yogyakarta`
- `salon Seturan`
- `hair treatment Jogja`
- `salon wanita Sleman`
- `butterfly haircut Jogja`

**Long-tail** (blog/FAQ):
- `salon rambut terbaik di Seturan Jogja`
- `potong rambut wanita murah Sleman`
- `hair coloring salon rekomendasi Jogja`

**Schema.org JSON-LD** (auto-generate, validate with [Rich Results Test](https://search.google.com/test/rich-results)):

```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Daisy Beauty Salon by Debby",
  "image": "[URL foto depan salon]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Belakang Circle K, Ruko Gatic, Jl. Perumnas Seturan No.C3",
    "addressLocality": "Sleman",
    "addressRegion": "Special Region of Yogyakarta",
    "addressCountry": "ID"
  },
  "telephone": "[nomor WA salon]",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.90",
    "reviewCount": "3840"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "paymentAccepted": "Cash, Credit Card, Debit Card, NFC Mobile Payments, Cheques",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Toilet",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Beverages",
      "value": true
    }
  ]
}
```

**Local SEO strategy**:
- Setup & verify [Google Business Profile](https://business.google.com)
- Consistent NAP (Name, Address, Phone) across web
- Encourage customer reviews on Google (5-10 per week)
- Local citations: Yelp, Foursquare, Yellow Pages ID

## 10. Features & Functionality

**Default (auto-include)**:
- Mobile-responsive (mobile-first, tested 320-1024px)
- WhatsApp click-to-chat button (with pre-filled message)
- Phone click-to-call
- Google Maps embed + directions tap
- Contact form (Resend email API)
- SEO on-page (meta, OG, Twitter cards)
- Schema.org LocalBusiness + AggregateRating + OpeningHours
- Open Graph / social sharing preview
- SSL (HTTPS)
- Performance: LCP < 2.5s, INP < 200ms, CLS < 0.1

**Opt-in features** (perlu confirm owner):
- [ ] Online booking system (Calendly? Booksy? Custom?)
- [ ] Loyalty / membership
- [ ] Blog/SEO content publishing
- [ ] Multi-language (English version)
- [ ] Live chat widget

## 11. Technical Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) | SEO-friendly SSR, fast dev |
| Styling | Tailwind CSS | Speed, design system |
| Hosting | Vercel (free tier) | Free for SMB traffic |
| CMS | Markdown files in repo | Simpler; team handles content |
| Forms | Native Next.js + Resend email API | Simple, no third-party |
| Analytics | Plausible (privacy-friendly) | GDPR-friendly |
| Maps | Google Maps embed (no API key) | Free, sufficient |
| WhatsApp | `wa.me` link with pre-filled text | Universal, no API |

**Accessibility**: WCAG 2.2 AA compliant, keyboard nav, color contrast ≥ 4.5:1, alt text on all images

## 12. Goals & Success Metrics

> **[RULES · MEDIUM]**: Primary: meningkatkan trust & kredibilitas untuk customer yang googling bisnis. Secondary: tangkap organic search traffic. Tertiary: reduce repetitive WhatsApp questions via FAQ

**Default KPIs** (perlu confirm angka):
- Traffic: target 200-500 unique visitors / bulan (3 bulan setelah launch)
- Conversion: target 3-5% WA click-through
- SEO: rank page 1 untuk 'salon [kategori] di [kota]' dalam 3 bulan
- Phone/WhatsApp calls from web: minimal 10-20 per bulan
- Google review velocity: +5-10 reviews per bulan

## 13. Competitive Landscape

**To-do**: research 3-5 kompetitor beauty salon di area Caturtunggal/Seturan:
- [ ] Name, Google rating, review count, services, pricing
- [ ] Branding & social presence (Instagram, TikTok)
- [ ] What they do well vs where they fall short
- [ ] Our differentiation angle (women-owned, transparent pricing, personal touch)

## 14. Timeline & Budget

**Timeline (default)**: 3-4 minggu

| Week | Phase | Activities |
|---|---|---|
| 1 | Discovery | Owner meeting, asset collection, design mockup |
| 2 | Design | 2-3 design concepts, iterate to final |
| 3 | Build | Next.js implementation, content integration |
| 4 | Launch | Testing, deploy, SEO submit, analytics setup |

**Budget** [GAP — owner input]:
- Basic (Rp 3-5jt): standard 5-page, no custom features
- Standard (Rp 5-10jt): + blog, + animations, + custom domain setup
- Premium (Rp 10-20jt+): + booking system, + maintenance 3 bulan
- Optional maintenance: Rp 500rb-1jt/bulan (hosting + content update)

## 15. Owner Meeting Script

**Agenda** (60-90 min):

  1. Perkenalan dan cerita singkat kenapa Mba Debby buka salon ini
  2. Konfirmasi daftar layanan, harga, dan durasi tiap treatment
  3. Diskusi profil stylist: Mba Debby, Kak Agnes, dan tim junior
  4. Review foto-foto terbaik salon dan pelanggan (untuk website)
  5. Alur booking: WhatsApp,电话, atau sistem online?
  6. Konfirmasi jam operasional dan hari libur
  7. Diskusi promo atau paket khusus untuk pelanggan baru
  8. Penentuan timeline launch website

**Key questions untuk owner**:

- Berapa harga potong rambut dengan Mba Debby vs junior stylist?
- Apakah harga coloring dan treatment sudah termasuk konsultasi gaya?
- Berapa rata-rata durasi untuk potong + blow, coloring, dan treatment?
- Apakah ada perbedaan harga weekday vs weekend?
- Bagaimana cara terbaik pelanggan melakukan appointment — lewat WA langsung?
- Apakah salon pernah menangani hair type tertentu (keriting, diwarnai, dll) yang bisa jadi unggulan?
- Bolehkah kami foto proses treatment untuk konten website (dengan izin pelanggan)?

**Assets to request**:

- Logo salon dalam format PNG/SVG dengan background transparan
- 10-15 foto high-res suasana salon: area cuci, kursi stylist, ruang tunggu, produk yang digunakan
- Foto before-after pelanggan (minimal 5 set) untuk portofolio
- Daftar harga lengkap semua layanan dalam format Excel/Google Sheet
- Foto tim stylist (Mba Debby, Kak Agnes, dan lainnya) untuk halaman About
- Nomor WhatsApp aktif dan username Instagram salon
- Testimoni tertulis dari pelanggan yang boleh dipublikasikan

**Decision points** (harus clear sebelum build):

- Pilih 3-5 layanan utama yang akan ditampilkan di homepage
- Tentukan CTA utama: booking via WhatsApp atau via form website
- Konfirmasi tone bahasa di website: formal-casual atau playful-friendly
- Pilih 3 foto terbaik untuk hero section
- Tetapkan promo launch untuk pelanggan baru (opsional)

## 16. Launch Checklist

**Pre-launch**:

- [ ] Finalisasi semua copy website (hero, about, services, FAQ)
- [ ] Upload dan optimasi foto-foto salon (compress untuk web)
- [ ] Setup Google Business Profile dengan foto, jam buka, dan kategori 'Beauty Salon'
- [ ] Setup Google Search Console dan submit sitemap
- [ ] Test website di mobile dan desktop, semua browser utama
- [ ] Pastikan schema.org LocalBusiness terpasang dan valid di Rich Results Test
- [ ] Siapkan auto-reply WhatsApp untuk pesan di luar jam kerja
- [ ] Backup website dan database sebelum launch

**Launch day**:

- [ ] Publish website ke domain resmi (daisybeautysalonbydebby.com atau setara)
- [ ] Post pengumuman launch di Instagram salon dengan link website
- [ ] Broadcast promo launch ke pelanggan setia via WhatsApp
- [ ] Update bio Instagram, Facebook, dan TikTok dengan link website
- [ ] Minta 3-5 pelanggan reviewed menulis testimoni pertama di website
- [ ] Monitor analytics (Google Analytics 4) dari jam pertama
- [ ] Cek semua CTA button berfungsi dan mengarah ke WhatsApp yang benar

**Post-launch**:

- [ ] Review data traffic minggu pertama: dari mana datang, halaman mana yang populer
- [ ] Minta feedback dari 10 pelanggan pertama yang booking via website
- [ ] Post konten mingguan yang link ke halaman layanan spesifik (SEO internal linking)
- [ ] Kumpulkan review Google baru untuk jaga rating 4.90★
- [ ] Update foto portofolio setiap bulan dengan hasil terbaru
- [ ] A/B test CTA button: 'Booking Sekarang' vs 'Reservasi via WhatsApp'
- [ ] Review dan balas semua ulasan Google dalam 24 jam
- [ ] Evaluasi konversi website-to-booking di akhir bulan pertama

## 17. Assumptions Ledger

All inferences for this PRD. Use as validation checklist with owner.

| Field | Source | Claim | Confidence |
|---|---|---|---|
| services | AI-HAIKU | Potong rambut wanita, Hair coloring / pewarnaan rambut, Hair treatment... (7 total) | inferred |
| price_range | AI-HAIKU | Rp 75.000 - 400.000 per layanan | medium |
| brand_voice | AI-HAIKU | warm | inferred |
| review_themes | AI-HAIKU | 5 themes | high |
| target_audience | RULES | Wanita (dan pria pendukung), urban Sleman/Yogyakarta, peduli personal  | medium |
| primary_cta | RULES | Book appointment via WhatsApp | medium |
| site_structure | RULES | Pages: Home, Services + price list, Stylist team, Before/after gallery | medium |
| business_goals | RULES | Primary: meningkatkan trust & kredibilitas untuk customer yang googlin | medium |
| conversion_mechanics | RULES | WhatsApp click-to-chat + phone call tracking. Google Maps embed untuk  | high |
| address_context | RULES | Area Caturtunggal/Seturan — dekat kampus UII, UGM, UNY; dominan mahasi | high |
| owner_branding | RULES | Strong owner branding — website harus feature owner prominently (foto, | medium-high |
| competitor_research | RULES | Top 3-5 kompetitor Beauty salon di area yang sama perlu di-research ma | high |

## 18. Next Steps

1. **Owner meeting** (60-90 min): pakai Section 15 script
2. **Collect assets** per Section 15 list
3. **Final PRD v1.0**: convert assumptions to confirmed requirements
4. **Design mockup**: 2-3 konsep design (visual direction)
5. **Build**: Next.js + Tailwind
6. **Content**: copy writing + photo curation
7. **Launch**: deploy + SEO + analytics (pakai Section 16 checklist)

---
_Generated by gmaps-scraper pipeline v4 — 2026-06-23_