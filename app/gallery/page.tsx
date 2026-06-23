import Image from "next/image";
import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Before/After",
  description: `Lihat hasil kerja ${BUSINESS.name} — before/after potongan, coloring, dan treatment rambut.`,
};

const items = [
  { id: 1, service: "Potong Rambut", caption: "Butterfly cut yang gorgeous" },
  { id: 2, service: "Hair Coloring", caption: "Balayage coklat hangat" },
  { id: 3, service: "Potong Rambut", caption: "Layer cut dengan poni" },
  { id: 4, service: "Styling", caption: "Blow styling untuk acara" },
  { id: 5, service: "Hair Treatment", caption: "Creambath smoothing" },
  { id: 6, service: "Potong Rambut", caption: "Bob cut klasik" },
  { id: 7, service: "Hair Coloring", caption: "Full color highlight" },
  { id: 8, service: "Styling", caption: "Curly updo wisuda" },
];

export default function GalleryPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="blob-1 w-96 h-96 -top-20 right-1/3 anim-blob" />
      <div className="container-px mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 anim-fade-up">
          <span className="inline-block glass-pink px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
            Galeri
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold leading-[1.05]">
            Before/<span className="text-gradient-pink">After</span>.
          </h1>
          <p className="mt-5 text-lg text-text-muted">
            Lihat hasil kerja kami. Setiap potong, coloring, dan styling dibuat dengan teliti dan passion.
          </p>
          <p className="mt-3 text-xs italic text-pink-400">Preview hasil kerja kami. Foto real dengan model akan diperbarui di v1.1.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <article key={item.id} className={`card-soft group p-0 overflow-hidden anim-fade-up anim-delay-${(i + 1) * 80}`}>
              <div className="relative aspect-square overflow-hidden bg-pink-100">
                <Image src={`/assets/gallery-${item.id}.png`} alt={item.caption} fill className="object-cover hover-zoom-image" />
                <div className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-pink-700">
                  {item.service}
                </div>
                <div className="hover-zoom-caption">{item.caption}</div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-ink">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center anim-fade-up">
          <a href={waLink(`Halo, saya tertarik dengan hasil kerja di ${BUSINESS.name}.`)} target="_blank" rel="noreferrer" className="btn-primary">
            Booking Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}