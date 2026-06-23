import Image from "next/image";
import Link from "next/link";
import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan & Harga",
  description: `Layanan salon rambut di Daisy Beauty Salon By Debby. Mulai dari ${BUSINESS.priceFrom}.`,
};

const services = [
  { n: "01", name: "Potong Rambut", image: "service-potong.png", desc: "Potongan klasik hingga trendi (butterfly cut, layer, bob, dll). Konsultasi gaya gratis sebelum potong.", duration: "45–90 min" },
  { n: "02", name: "Hair Coloring", image: "service-coloring.png", desc: "Full color, highlights, balayage, ombre. Konsultasi warna sebelum treatment untuk hasil optimal.", duration: "2–3 jam" },
  { n: "03", name: "Hair Treatment", image: "service-treatment.png", desc: "Creambath, hair mask, smoothing, dan treatment khusus untuk rambut rusak / over-processed.", duration: "60–90 min" },
  { n: "04", name: "Styling Rambut", image: "service-styling.png", desc: "Blow, curling, updo untuk acara spesial. Cocok untuk wisuda, pernikahan, photoshoot.", duration: "30–60 min" },
  { n: "05", name: "Konsultasi Gaya", image: "service-konsultasi.png", desc: "Konsultasi gratis untuk menentukan gaya yang cocok dengan bentuk wajah & gaya hidup kamu.", duration: "15 min" },
  { n: "06", name: "Cuci & Blow", image: "service-cuci.png", desc: "Cuci rambut dengan shampoo premium + blow styling. Selesai dengan rambut harum dan rapi.", duration: "30–45 min" },
];

export default function ServicesPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="blob-1 w-96 h-96 -top-20 -left-20 anim-blob" />
      <div className="container-px mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 anim-fade-up">
          <span className="inline-block glass-pink px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
            Layanan & Harga
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold leading-[1.05]">
            Enam hal yang kami lakukan dengan <span className="text-gradient-pink">baik</span>.
          </h1>
          <p className="mt-5 text-lg text-text-muted">
            Daftar singkat, bukan menu panjang. Semua dengan harga transparan — disampaikan di awal, tidak ada kejutan. Mulai dari <strong className="text-pink-600">{BUSINESS.priceFrom}</strong>.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.n} className={`card-soft p-7 anim-fade-up anim-delay-${(i + 1) * 100}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="h-16 w-16 rounded-lg overflow-hidden glass-soft anim-bounce-soft relative" style={{ animationDelay: `${i * 0.3}s` }}>
                  <Image src={`/assets/${s.image}`} alt={s.name} fill className="object-cover" />
                </div>
                <span className="text-xs font-bold text-pink-400 tracking-wider">{s.n}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-ink">{s.name}</h2>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-pink-200/40">
                <span className="text-xs text-text-muted">⏱ {s.duration}</span>
                <span className="text-sm font-bold text-pink-600">{BUSINESS.priceFrom}<span className="text-pink-400">*</span></span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm italic text-text-muted text-center anim-fade-up">
          *Harga bervariasi tergantung kompleksitas. Hubungi kami untuk konsultasi & quotation spesifik.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 anim-fade-up">
          <a href={waLink(`Halo, saya mau tanya detail layanan di ${BUSINESS.name}.`)} target="_blank" rel="noreferrer" className="btn-primary">
            Tanya via WhatsApp
          </a>
          <Link href="/booking" className="btn-secondary">Detail booking →</Link>
        </div>
      </div>
    </section>
  );
}