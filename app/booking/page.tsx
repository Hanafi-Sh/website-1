import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Janji Temu",
  description: `Booking janji temu di ${BUSINESS.name} via WhatsApp. Cepat, mudah, dan konfirmasi instan.`,
};

const steps = [
  { n: 1, title: "Klik tombol Booking via WhatsApp", desc: "Di bawah atau floating di kanan bawah." },
  { n: 2, title: "Sebutkan layanan + tanggal + jam", desc: "Mis. 'potong rambut, Sabtu 28 Juni jam 14:00'." },
  { n: 3, title: "Tim konfirmasi stylist + slot", desc: "Kami balas dalam beberapa menit." },
  { n: 4, title: "Datang di salon, siap dimanjakan", desc: "Suasana hangat, free drinks, Spotify." },
];

export default function BookingPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="blob-1 w-96 h-96 -top-20 -right-20 anim-blob" />
      <div className="container-px mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 anim-fade-up">
          <span className="inline-block glass-pink px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
            Booking
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold leading-[1.05]">
            Janji <span className="text-gradient-pink">temu</span>.
          </h1>
          <p className="mt-5 text-lg text-text-muted">
            Cara termudah: klik tombol WhatsApp di bawah, tim kami akan konfirmasi jadwal dalam beberapa menit.
          </p>
        </div>

        <div className="card-soft p-8 sm:p-10 anim-fade-up">
          <h2 className="font-display text-2xl font-bold text-ink mb-6">Langkah-langkah</h2>
          <ol className="space-y-5">
            {steps.map((s, i) => (
              <li key={s.n} className={`flex items-start gap-4 anim-fade-up anim-delay-${(i + 1) * 100}`}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-500 text-white font-bold shadow-soft anim-bounce-soft" style={{ animationDelay: `${i * 0.2}s` }}>
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="text-sm text-text-muted mt-0.5">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 anim-fade-up">
          <a href={waLink(`Halo ${BUSINESS.name}, saya mau booking layanan. Mohon info slot yang tersedia untuk tanggal...`)} target="_blank" rel="noreferrer" className="btn-primary">
            💬 Booking via WhatsApp
          </a>
          <a href={`tel:${BUSINESS.phone}`} className="btn-secondary">
            📞 Telepon {BUSINESS.whatsappDisplay}
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <div className="card-soft p-7 anim-fade-up">
            <h3 className="font-display text-lg font-bold text-pink-600 flex items-center gap-2">
              <span className="text-2xl">📍</span> Alamat
            </h3>
            <p className="mt-3 text-sm text-ink">{BUSINESS.address.street}</p>
            <p className="mt-1 text-sm text-text-muted">{BUSINESS.address.city}, {BUSINESS.address.state}</p>
            <p className="mt-3 text-xs text-text-muted">Area: Caturtunggal/Seturan, dekat kampus UII, UGM, UNY.</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.name + " " + BUSINESS.address.street)}`}
              target="_blank" rel="noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors"
            >
              Buka di Google Maps →
            </a>
          </div>
          <div className="card-soft p-7 anim-fade-up anim-delay-100">
            <h3 className="font-display text-lg font-bold text-pink-600 flex items-center gap-2">
              <span className="text-2xl">🕐</span> Jam Operasional
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {BUSINESS.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-text-muted">
                  <span>{h.day}</span>
                  <span>{h.open}–{h.close}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs italic text-pink-400">💡 Puncak keramaian ~17:00 — pagi/akhir lebih santai.</p>
          </div>
        </div>
      </div>
    </section>
  );
}