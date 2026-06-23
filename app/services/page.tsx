import Link from "next/link";
import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan & Harga",
  description: `Layanan salon rambut di Daisy Beauty Salon By Debby. Mulai dari ${BUSINESS.priceFrom}.`,
};

const services = [
  { n: "01", name: "Potong Rambut Wanita", desc: "Potongan klasik hingga trendi (butterfly cut, layer, bob, dll). Konsultasi gaya gratis sebelum potong.", duration: "45–90 menit" },
  { n: "02", name: "Hair Coloring / Pewarnaan", desc: "Full color, highlights, balayage, ombre. Konsultasi warna sebelum treatment untuk hasil optimal.", duration: "2–3 jam" },
  { n: "03", name: "Hair Treatment", desc: "Creambath, hair mask, smoothing, dan treatment khusus untuk rambut rusak / over-processed.", duration: "60–90 menit" },
  { n: "04", name: "Styling Rambut", desc: "Blow, curling, updo untuk acara spesial. Cocok untuk wisuda, pernikahan, photoshoot.", duration: "30–60 menit" },
  { n: "05", name: "Konsultasi Gaya", desc: "Konsultasi gratis untuk menentukan gaya yang cocok dengan bentuk wajah & gaya hidup kamu.", duration: "15 menit" },
  { n: "06", name: "Cuci & Blow", desc: "Cuci rambut dengan shampoo premium + blow styling. Selesai dengan rambut harum dan rapi.", duration: "30–45 menit" },
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <p className="eyebrow-rose">Layanan & Harga</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-light leading-tight text-ink sm:text-5xl lg:text-6xl">
          Enam hal yang kami lakukan dengan baik.
        </h1>
        <p className="mt-4 max-w-2xl font-editorial text-lg italic text-ink/70">
          Daftar singkat, bukan menu panjang. Semua dengan harga transparan — disampaikan di awal, tidak ada kejutan. Mulai dari {BUSINESS.priceFrom}.
        </p>

        <ol className="mt-16 border-t border-rule">
          {services.map((s) => (
            <li key={s.n} className="list-row">
              <span className="num">{s.n}</span>
              <div>
                <h2 className="font-display text-2xl text-ink sm:text-3xl">{s.name}</h2>
                <p className="mt-2 max-w-2xl text-ink/70">{s.desc}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs uppercase tracking-eyebrow text-ink/60">⏱ {s.duration}</p>
                <p className="mt-1 text-sm text-ink">{BUSINESS.priceFrom}<span className="text-ink/40">*</span></p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-2xl font-editorial text-sm italic text-ink/60">
          *Harga bervariasi tergantung kompleksitas. Hubungi kami untuk konsultasi & quotation spesifik.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={waLink(`Halo, saya mau tanya detail layanan di ${BUSINESS.name}.`)} target="_blank" rel="noreferrer" className="btn-whatsapp">
            💬 Tanya via WhatsApp
          </a>
          <Link href="/booking" className="btn-secondary">Detail booking →</Link>
        </div>
      </div>
    </section>
  );
}
