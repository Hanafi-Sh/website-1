import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan",
  description: `Apa kata pelanggan ${BUSINESS.name}. ${BUSINESS.reviewCount.toLocaleString("id-ID")} review, rating ${BUSINESS.rating}★.`,
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="section pt-12">
        <div className="container-px mx-auto max-w-5xl">
          <span className="pill">Testimoni</span>
          <h1 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">Apa kata mereka</h1>
          <p className="mt-3 max-w-2xl text-lg text-text-muted">
            {BUSINESS.reviewCount.toLocaleString("id-ID")} review dari Google, rating rata-rata <strong className="text-rose-primary">{BUSINESS.rating}★</strong>. Berikut beberapa yang paling representatif.
          </p>
          <p className="mt-2 text-xs italic text-text-muted">Nama dianonimkan (first name + last initial) untuk privasi pelanggan.</p>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {BUSINESS.testimonials.map((t, i) => (
              <article key={i} className="card">
                <div className="text-gold-accent" aria-label={`${t.rating} dari 5 bintang`}>{"★".repeat(t.rating)}</div>
                <p className="mt-3 text-sm italic leading-relaxed text-text">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-3 text-xs font-medium text-text-muted">— {t.name}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-lg bg-surface p-6 text-center">
            <p className="font-heading text-2xl font-bold text-text">{BUSINESS.rating}★ dari {BUSINESS.reviewCount.toLocaleString("id-ID")} review</p>
            <p className="mt-2 text-sm text-text-muted">96% adalah bintang 5. Kami konsisten menjaga kualitas.</p>
          </div>
        </div>
      </section>
    </>
  );
}
