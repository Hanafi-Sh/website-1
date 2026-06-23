import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim Stylist",
  description: `Bertemu dengan stylist berpengalaman di ${BUSINESS.name}: Mba Debby (owner), Kak Agnes (coloring specialist), dan tim.`,
};

export default function TeamPage() {
  return (
    <>
      <section className="section pt-12">
        <div className="container-px mx-auto max-w-5xl">
          <span className="pill">Tim Stylist</span>
          <h1 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">Bertemu dengan tim kami</h1>
          <p className="mt-3 max-w-2xl text-lg text-text-muted">
            Stylist berpengalaman, passionate tentang rambut, dan siap mewujudkan gaya yang kamu mau. Booking dengan stylist favorit kamu.
          </p>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS.stylists.map((s) => (
              <article key={s.name} className="card text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose-soft text-3xl text-rose-primary">
                  {s.name.startsWith("Mba") ? "👩" : s.name.startsWith("Kak") ? "💁‍♀️" : "💇‍♀️"}
                </div>
                <h2 className="mt-4 font-heading text-xl font-semibold text-text">{s.name}</h2>
                <p className="mt-1 text-sm font-medium text-rose-primary">{s.role}</p>
                <ul className="mt-3 space-y-1 text-xs text-text-muted">
                  {s.specialties.map((sp) => (
                    <li key={sp}>• {sp}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={waLink(`Halo, saya mau booking dengan stylist tertentu di ${BUSINESS.name}.`)} target="_blank" rel="noreferrer" className="btn-primary">
              💬 Booking Stylist Favorit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
