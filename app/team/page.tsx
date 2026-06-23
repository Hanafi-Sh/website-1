import Image from "next/image";
import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim Stylist",
  description: `Bertemu dengan stylist berpengalaman di ${BUSINESS.name}: Mba Debby (owner), Kak Agnes (coloring specialist), dan tim.`,
};

const stylists = [
  { name: "Mba Debby", role: "Owner & Top Stylist", image: "stylist-debby.png", specialties: ["Signature cuts", "Butterfly", "Hair coloring"], accent: true },
  { name: "Kak Agnes", role: "Senior Stylist", image: "stylist-agnes.png", specialties: ["Hair coloring", "Highlights", "Ombre"], accent: false },
  { name: "Mba Sari", role: "Stylist", image: "stylist-sari.png", specialties: ["Potong", "Styling", "Blow"], accent: false },
  { name: "Mba Lina", role: "Junior Stylist", image: "stylist-lina.png", specialties: ["Basic styling", "Cuci & blow", "Treatment"], accent: false },
];

export default function TeamPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="blob-2 w-96 h-96 top-40 -right-20 anim-blob" />
      <div className="container-px mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 anim-fade-up">
          <span className="inline-block glass-pink px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
            Tim Stylist
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold leading-[1.05]">
            Bertemu dengan <span className="text-gradient-pink">tim</span> kami.
          </h1>
          <p className="mt-5 text-lg text-text-muted">
            Stylist berpengalaman, passionate tentang rambut, dan siap mewujudkan gaya yang kamu mau.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stylists.map((s, i) => (
            <article
              key={s.name}
              className={`p-7 text-center anim-fade-up anim-delay-${(i + 1) * 100} ${s.accent ? "glass-pink rounded-lg shadow-medium" : "card-soft"}`}
            >
              <div className="mx-auto h-24 w-24 rounded-full overflow-hidden glass-soft anim-bounce-soft relative" style={{ animationDelay: `${i * 0.3}s` }}>
                <Image src={`/assets/${s.image}`} alt={s.name} fill className="object-cover" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-ink">{s.name}</h2>
              <p className={`mt-1 text-sm font-semibold ${s.accent ? "text-pink-600" : "text-text-muted"}`}>{s.role}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {s.specialties.map((sp) => (
                  <span key={sp} className="text-xs px-2 py-1 rounded-full bg-white/60 text-text-muted">
                    {sp}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center anim-fade-up">
          <a href={waLink(`Halo, saya mau booking dengan stylist tertentu di ${BUSINESS.name}.`)} target="_blank" rel="noreferrer" className="btn-primary">
            Booking Stylist Favorit
          </a>
        </div>
      </div>
    </section>
  );
}