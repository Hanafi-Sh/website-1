import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Before/After",
  description: `Lihat hasil kerja ${BUSINESS.name} — before/after potongan, coloring, dan treatment rambut.`,
};

// Placeholder gallery items (real photos will replace these in v1.1)
const galleryItems = [
  { id: 1, service: "Potong Rambut", caption: "Buttery butterfly cut" },
  { id: 2, service: "Hair Coloring", caption: "Balayage dengan tone coklat hangat" },
  { id: 3, service: "Potong Rambut", caption: "Layer cut dengan poni samping" },
  { id: 4, service: "Styling", caption: "Blow styling untuk acara" },
  { id: 5, service: "Hair Treatment", caption: "Creambath smoothing" },
  { id: 6, service: "Potong Rambut", caption: "Bob cut klasik" },
  { id: 7, service: "Hair Coloring", caption: "Full color dengan highlight" },
  { id: 8, service: "Styling", caption: "Curly updo untuk wisuda" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="section pt-12">
        <div className="container-px mx-auto max-w-5xl">
          <span className="pill">Galeri</span>
          <h1 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">Before/After</h1>
          <p className="mt-3 max-w-2xl text-lg text-text-muted">
            Lihat hasil kerja kami. Setiap potong, coloring, dan styling dibuat dengan teliti dan passion.
          </p>
          <p className="mt-3 text-sm italic text-text-muted">📷 Foto real akan ditampilkan di v1.1 (saat ini placeholder).</p>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article key={item.id} className="card overflow-hidden p-0">
                <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-rose-soft to-surface text-5xl text-rose-primary">
                  {item.service.includes("Potong") ? "✂️" : item.service.includes("Coloring") ? "🎨" : item.service.includes("Treatment") ? "💆" : "💁‍♀️"}
                </div>
                <div className="p-4">
                  <span className="pill text-[10px]">{item.service}</span>
                  <p className="mt-2 text-sm font-medium text-text">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={waLink(`Halo, saya tertarik dengan hasil kerja di ${BUSINESS.name}.`)} target="_blank" rel="noreferrer" className="btn-primary">
              💬 Booking Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
