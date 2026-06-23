import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Janji Temu",
  description: `Booking janji temu di ${BUSINESS.name} via WhatsApp. Cepat, mudah, dan konfirmasi instan.`,
};

export default function BookingPage() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-3xl">
        <span className="pill">Booking</span>
        <h1 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">Booking janji temu</h1>
        <p className="mt-3 text-lg text-text-muted">
          Cara termudah: klik tombol WhatsApp di bawah, tim kami akan konfirmasi jadwal dalam beberapa menit.
        </p>

        <div className="mt-10 card">
          <h2 className="font-heading text-2xl font-semibold text-text">Langkah-langkah</h2>
          <ol className="mt-4 space-y-3 text-text">
            <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-primary text-xs font-bold text-white">1</span><span>Klik tombol <strong>Booking via WhatsApp</strong> di bawah</span></li>
            <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-primary text-xs font-bold text-white">2</span><span>Sebutkan layanan yang kamu mau + tanggal + jam preferensi</span></li>
            <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-primary text-xs font-bold text-white">3</span><span>Tim kami konfirmasi ketersediaan stylist + slot waktu</span></li>
            <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-primary text-xs font-bold text-white">4</span><span>Datang di salon, siap-siap untuk dimanjakan</span></li>
          </ol>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={waLink(`Halo ${BUSINESS.name}, saya mau booking layanan. Mohon info slot yang tersedia untuk tanggal...`)} target="_blank" rel="noreferrer" className="btn-whatsapp">
            💬 Booking via WhatsApp
          </a>
          <a href={`tel:${BUSINESS.phone}`} className="btn-secondary">
            📞 Telepon {BUSINESS.whatsappDisplay}
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="card">
            <h3 className="font-heading text-lg font-semibold">📍 Alamat</h3>
            <p className="mt-2 text-sm text-text-muted">{BUSINESS.address.street}</p>
            <p className="mt-1 text-sm text-text-muted">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.postalCode}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.name + " " + BUSINESS.address.street)}`} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-rose-primary hover:underline">
              Buka di Google Maps →
            </a>
          </div>
          <div className="card">
            <h3 className="font-heading text-lg font-semibold">🕐 Jam Operasional</h3>
            <ul className="mt-2 space-y-1 text-sm text-text">
              {BUSINESS.hours.map((h) => (
                <li key={h.day} className="flex justify-between"><span>{h.day}</span><span className="text-text-muted">{h.open}–{h.close}</span></li>
              ))}
            </ul>
            <p className="mt-3 text-xs italic text-text-muted">Puncak keramaian ~17:00 — booking pagi/akhir lebih santai.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
