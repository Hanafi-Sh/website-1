import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan",
  description: `Apa kata pelanggan ${BUSINESS.name}. ${BUSINESS.reviewCount.toLocaleString("id-ID")} review, rating ${BUSINESS.rating}★.`,
};

export default function TestimonialsPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="blob-2 w-96 h-96 top-40 -left-20 anim-blob" />
      <div className="container-px mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 anim-fade-up">
          <span className="inline-block glass-pink px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
            Testimoni
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold leading-[1.05]">
            Apa kata <span className="text-gradient-pink">mereka</span>.
          </h1>
          <p className="mt-5 text-lg text-text-muted">
            {BUSINESS.reviewCount.toLocaleString("id-ID")} review dari Google, rating rata-rata <strong className="text-pink-600">{BUSINESS.rating}★</strong>.
          </p>
          <p className="mt-2 text-xs italic text-text-muted">Nama dianonimkan (first name + last initial) untuk privasi.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {BUSINESS.testimonials.map((t, i) => (
            <figure key={i} className={`card-soft p-7 anim-fade-up anim-delay-${(i + 1) * 100}`}>
              <div className="text-gold mb-4 text-lg">{"★".repeat(t.rating)}</div>
              <blockquote className="text-sm text-ink leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-pink-200/40 text-xs font-medium text-text-muted">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 glass-pink rounded-xl p-10 text-center anim-fade-up">
          <div className="text-5xl mb-3">⭐</div>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
            {BUSINESS.rating}★ dari {BUSINESS.reviewCount.toLocaleString("id-ID")} review
          </p>
          <p className="mt-3 text-text-muted">96% adalah bintang 5. Kami konsisten menjaga kualitas.</p>
        </div>
      </div>
    </section>
  );
}