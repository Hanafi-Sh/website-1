import Image from "next/image";
import Link from "next/link";
import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${BUSINESS.copy.heroHeadline} | ${BUSINESS.name}`,
  description: BUSINESS.description,
};

const services = [
  { n: "01", name: "Potong Rambut", desc: "Klasik hingga butterfly, layer, bob", emoji: "✂️", duration: "45–90 min" },
  { n: "02", name: "Hair Coloring", desc: "Full color, highlights, balayage, ombre", emoji: "🎨", duration: "2–3 jam" },
  { n: "03", name: "Hair Treatment", desc: "Creambath, hair mask, smoothing", emoji: "💆", duration: "60–90 min" },
  { n: "04", name: "Styling Rambut", desc: "Blow, curling, updo untuk acara", emoji: "💁", duration: "30–60 min" },
  { n: "05", name: "Konsultasi Gaya", desc: "Gratis, sebelum treatment apapun", emoji: "💬", duration: "15 min" },
  { n: "06", name: "Cuci & Blow", desc: "Shampoo premium, hasil rapi", emoji: "🧴", duration: "30–45 min" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Decorative blobs */}
        <div className="blob-1 w-[500px] h-[500px] -top-32 -right-20 anim-blob anim-fade-in" />
        <div className="blob-2 w-[400px] h-[400px] top-1/3 -left-32 anim-blob anim-delay-200" />
        <div className="blob-1 w-[300px] h-[300px] bottom-0 right-1/4 anim-blob anim-delay-400" />

        <div className="container-px mx-auto max-w-7xl relative z-10 pt-12">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            {/* Text column */}
            <div>
              <div className="anim-fade-up">
                <span className="inline-flex items-center gap-2 glass-pink px-4 py-2 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-pink-500 anim-pulse-slow" />
                  Women-owned · Seturan, Sleman
                </span>
              </div>

              <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight anim-fade-up anim-delay-100">
                <span className="text-ink">Rambut Sempurna,</span>
                <br />
                <span className="text-gradient-pink">Hati Hangat</span>
                <br />
                <span className="text-ink">di Jogja.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg text-text-muted leading-relaxed anim-fade-up anim-delay-200">
                Potongan rambut terbaik di Yogyakarta dengan keramahan yang bikin kamu betah berlama-lama. Rating <strong className="text-pink-600">4.90★</strong> dari <strong className="text-pink-600">3.840</strong> pelanggan.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 anim-fade-up anim-delay-300">
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">
                  💬 Booking Sekarang
                </a>
                <Link href="/services" className="btn-secondary">
                  Lihat semua layanan →
                </Link>
              </div>

              {/* Floating trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6 anim-fade-up anim-delay-500">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold text-xl">★★★★★</div>
                  <div>
                    <div className="font-bold text-ink">{BUSINESS.rating}</div>
                    <div className="text-xs text-text-muted">{BUSINESS.reviewCount.toLocaleString("id-ID")} review</div>
                  </div>
                </div>
                <div className="h-10 w-px bg-pink-300/50" />
                <div className="flex items-center gap-2">
                  <div className="text-2xl">💇‍♀️</div>
                  <div>
                    <div className="font-bold text-ink">Sejak 2018</div>
                    <div className="text-xs text-text-muted">Owner: Mba Debby</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image + floating glass cards */}
            <div className="relative anim-fade-scale anim-delay-200">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-large">
                <Image src="/hero.jpg" alt="Suasana hangat Daisy Beauty Salon" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating glass card: rating */}
              <div className="absolute -bottom-6 -left-6 glass rounded-lg p-4 shadow-large anim-float">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="font-bold text-ink text-lg">{BUSINESS.rating}</div>
                    <div className="text-xs text-text-muted">3.840 review</div>
                  </div>
                </div>
              </div>

              {/* Floating glass card: women-owned */}
              <div className="absolute -top-6 -right-6 glass-pink rounded-lg p-4 shadow-large anim-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">💕</div>
                  <div>
                    <div className="font-bold text-pink-700 text-sm">Women-owned</div>
                    <div className="text-xs text-text-muted">Mba Debby</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 anim-fade-up">
            <span className="inline-block glass-pink px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
              Layanan
            </span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
              Enam hal yang kami lakukan dengan <span className="text-gradient-pink">baik</span>.
            </h2>
            <p className="mt-4 text-text-muted">
              Semua dengan harga transparan. Mulai dari <strong className="text-pink-600">{BUSINESS.priceFrom}</strong>.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.n}
                className={`card-soft p-7 anim-fade-up anim-delay-${(i + 1) * 100}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl anim-bounce-soft" style={{ animationDelay: `${i * 0.3}s` }}>
                    {s.emoji}
                  </div>
                  <span className="text-xs font-bold text-pink-400 tracking-wider">{s.n}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">{s.name}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-pink-200/40">
                  <span className="text-xs text-text-muted">⏱ {s.duration}</span>
                  <span className="text-sm font-bold text-pink-600">{BUSINESS.priceFrom}<span className="text-pink-400">*</span></span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center anim-fade-up anim-delay-700">
            <Link href="/services" className="btn-secondary">
              Detail lengkap →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY DAISY (3 cards) ─────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="blob-2 w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 anim-blob" />
        <div className="container-px mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12 anim-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
              Kenapa pelanggan <span className="text-gradient-pink">betah</span> kembali.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { emoji: "☕", title: "Suasana hangat", desc: "Free drinks, snacks, dan musik Spotify — bukan sekadar potong rambut, tapi quality time." },
              { emoji: "💰", title: "Harga transparan", desc: "Semua harga disampaikan di awal. Tidak ada kejutan saat bayar." },
              { emoji: "⭐", title: "96% bintang 5", desc: "3.701 dari 3.840 review bintang 5. Kami konsisten menjaga kualitas." },
            ].map((c, i) => (
              <div key={i} className={`card-soft text-center p-7 anim-fade-up anim-delay-${(i + 1) * 150}`}>
                <div className="text-5xl mb-4 anim-bounce-soft" style={{ animationDelay: `${i * 0.4}s` }}>
                  {c.emoji}
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS PREVIEW ────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl relative z-10">
          <div className="flex items-end justify-between gap-4 mb-12 anim-fade-up">
            <div>
              <span className="inline-block glass-pink px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
                Testimoni
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold text-ink">
                Apa kata <span className="text-gradient-pink">mereka</span>.
              </h2>
            </div>
            <Link href="/testimonials" className="hidden sm:inline-block btn-secondary text-xs px-4 py-2">
              Lihat semua →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS.testimonials.slice(0, 3).map((t, i) => (
              <figure key={i} className={`card-soft anim-fade-up anim-delay-${(i + 1) * 150}`}>
                <div className="text-gold mb-3">{"★".repeat(t.rating)}</div>
                <blockquote className="text-sm text-ink leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 pt-4 border-t border-pink-200/40 text-xs font-medium text-text-muted">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BIG CTA ─────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="container-px mx-auto max-w-5xl">
          <div className="relative glass-pink rounded-xl p-12 sm:p-16 text-center anim-fade-up overflow-hidden">
            <div className="blob-1 w-64 h-64 -top-20 -right-20 anim-blob" />
            <div className="blob-2 w-56 h-56 -bottom-20 -left-20 anim-blob" />
            <div className="relative z-10">
              <div className="text-5xl mb-6 anim-bounce-soft">💇‍♀️</div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink leading-tight">
                Siap mewujudkan <br />
                <span className="text-gradient-pink">rambut impianmu</span>?
              </h2>
              <p className="mt-5 text-text-muted max-w-xl mx-auto">
                Mba Debby dan tim siap melayani. Booking via WhatsApp untuk konfirmasi instan.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">
                  💬 Booking via WhatsApp
                </a>
                <Link href="/booking" className="btn-secondary">
                  Detail booking →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}