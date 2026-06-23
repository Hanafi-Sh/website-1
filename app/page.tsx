import Image from "next/image";
import Link from "next/link";
import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${BUSINESS.tagline} | ${BUSINESS.name}`,
  description: BUSINESS.description,
};

const services = [
  { n: "01", name: "Potong Rambut Wanita", duration: "45–90 menit", note: "Klasik hingga butterfly, layer, bob." },
  { n: "02", name: "Hair Coloring / Pewarnaan", duration: "2–3 jam", note: "Full color, highlights, balayage, ombre." },
  { n: "03", name: "Hair Treatment", duration: "60–90 menit", note: "Creambath, mask, smoothing, anti-damage." },
  { n: "04", name: "Styling Rambut", duration: "30–60 menit", note: "Blow, curling, updo untuk acara." },
  { n: "05", name: "Konsultasi Gaya", duration: "15 menit", note: "Gratis, sebelum treatment apapun." },
  { n: "06", name: "Cuci & Blow", duration: "30–45 menit", note: "Shampoo premium, hasil rapi & harum." },
];

export default function HomePage() {
  return (
    <>
      {/* DATELINE + HERO — split, magazine layout */}
      <section className="border-b border-rule">
        <div className="container-px mx-auto max-w-7xl py-6">
          <div className="flex items-center justify-between gap-4">
            <p className="dateline">Yogyakarta — Edisi 01 / 2026</p>
            <p className="dateline hidden sm:block">Buka Senin–Minggu · 09.00–20.00</p>
          </div>
        </div>

        <div className="container-px mx-auto max-w-7xl pb-20 pt-10 sm:pb-28 sm:pt-14 lg:pb-32">
          <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
            {/* Text column */}
            <div className="flex flex-col justify-center">
              <p className="eyebrow-rose">Salon Kecantikan · Sejak 2018</p>
              <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {BUSINESS.copy.heroHeadline}.
              </h1>
              <p className="mt-6 max-w-md font-editorial text-lg italic leading-relaxed text-ink/80">
                {BUSINESS.copy.heroSubheadline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp">
                  💬 Booking via WhatsApp
                </a>
                <Link href="/services" className="btn-secondary">
                  Lihat semua layanan →
                </Link>
              </div>
              <div className="mt-10 flex items-baseline gap-2 text-sm text-ink/70">
                <span className="stars" aria-hidden>★★★★★</span>
                <span><strong className="text-ink">{BUSINESS.rating}</strong> dari {BUSINESS.reviewCount.toLocaleString("id-ID")} review di Google</span>
              </div>
            </div>

            {/* Image column */}
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-warm sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image src="/hero.jpg" alt="Suasana hangat di Daisy Beauty Salon — stylist tersenyum bersama client" fill priority className="object-cover" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-paper">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-paper/80">
                  Foto — Mba Debby, owner, dengan salah satu client setia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — numbered editorial list, not a card grid */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <p className="eyebrow-rose">Layanan</p>
              <h2 className="mt-3 font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
                Enam hal yang kami lakukan dengan baik.
              </h2>
              <p className="mt-4 max-w-sm font-editorial italic text-ink/70">
                Bukan daftar panjang yang terdengar sama — ini yang benar-benar kami tawarkan, dengan harga transparan mulai dari {BUSINESS.priceFrom}.
              </p>
              <Link href="/services" className="mt-6 inline-block btn-secondary">
                Detail lengkap →
              </Link>
            </div>
            <ol className="border-t border-rule">
              {services.map((s) => (
                <li key={s.n} className="list-row">
                  <span className="num">{s.n}</span>
                  <div>
                    <h3 className="font-display text-xl text-ink sm:text-2xl">{s.name}</h3>
                    <p className="mt-1 text-sm text-ink/70">{s.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs uppercase tracking-eyebrow text-ink/60">⏱ {s.duration}</p>
                    <p className="mt-1 text-sm text-ink">{BUSINESS.priceFrom}<span className="text-ink/40">*</span></p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* QUOTE BREAK — editorial pull quote */}
      <section className="border-y border-rule bg-paper-warm">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-28">
          <p className="eyebrow">Suasana</p>
          <p className="mt-6 pull-quote">
            &ldquo;Free drinks, snacks, dan musik Spotify. Rambut bagus itu bonus — rasa dihargai itu yang utama.&rdquo;
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-eyebrow text-ink/60">
            — dari review pelanggan, dirangkum
          </p>
        </div>
      </section>

      {/* TESTIMONIALS — pull quote style */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow-rose">Testimoni</p>
              <h2 className="mt-3 font-display text-3xl font-light leading-tight text-ink sm:text-4xl">Apa kata mereka.</h2>
            </div>
            <Link href="/testimonials" className="hidden btn-secondary sm:inline-block">Lihat semua →</Link>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS.testimonials.slice(0, 3).map((t, i) => (
              <figure key={i}>
                <div className="stars" aria-label={`${t.rating} dari 5 bintang`}>{"★".repeat(t.rating)}</div>
                <blockquote className="mt-4 font-editorial text-lg italic leading-snug text-ink">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-eyebrow text-ink/60">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ink text-paper">
        <div className="container-px mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-eyebrow text-paper/60">Booking</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
            Siap mewujudkan rambut impianmu?
          </h2>
          <p className="mt-4 font-editorial text-lg italic text-paper/80">
            Mba Debby dan tim siap melayani. Booking via WhatsApp untuk konfirmasi instan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp">💬 Booking via WhatsApp</a>
            <Link href="/booking" className="border-b border-paper/40 text-sm text-paper transition-colors hover:border-paper">
              Atau lihat detail booking →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
