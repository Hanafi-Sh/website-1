import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Pertanyaan Umum",
  description: `Pertanyaan yang sering ditanyakan tentang ${BUSINESS.name}: harga, booking, jam buka, pembayaran, dll.`,
};

const faqs = [
  { q: "Berapa harga layanan?", a: `Mulai dari ${BUSINESS.priceFrom} per layanan. Harga bervariasi tergantung kompleksitas — potong rambut lebih murah, hair coloring dan treatment lebih tinggi. Semua harga akan disampaikan di awal, tidak ada kejutan.` },
  { q: "Bagaimana cara booking?", a: "Cara termudah: klik tombol 'Booking via WhatsApp' di website, sebutkan layanan + tanggal + jam preferensi. Tim kami akan konfirmasi dalam beberapa menit." },
  { q: "Apakah harus appointment?", a: `Tergantung tingkat keramaian. Untuk pastian, kami sarankan appointment — terutama untuk layanan hair coloring dan treatment yang butuh waktu lama. Walk-in tetap dilayani jika ada slot kosong.` },
  { q: "Kapan jam paling sepi?", a: "Berdasarkan data popular_times Google, puncak keramaian sekitar jam 17:00. Untuk pengalaman lebih santai, datang pagi (10-12) atau setelah jam makan siang (14-15)." },
  { q: "Pembayaran apa saja yang diterima?", a: "Cash, Credit Card, Debit Card, NFC Mobile Payments, Cheques. Semua metode modern tersedia." },
  { q: "Apakah menerima walk-in?", a: "Ya, tapi appointment lebih disarankan agar stylist yang kamu mau tersedia dan tidak perlu menunggu lama." },
  { q: "Berapa lama potong rambut biasanya?", a: "Antara 45-90 menit tergantung model dan kompleksitas. Konsultasi gaya selalu gratis di awal." },
  { q: "Bisa minta stylist tertentu?", a: "Tentu! Sebutkan nama stylist yang kamu mau saat booking (mis. 'Mba Debby' atau 'Kak Agnes')." },
  { q: "Ada WiFi?", a: "Silakan tanya di salon saat datang. Suasana salon kami memang dirancang untuk kamu bisa santai." },
  { q: "Apakah ada promo?", a: "Untuk promo terbaru, follow Instagram kami atau tanyakan langsung via WhatsApp saat booking." },
];

export default function FaqPage() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-3xl">
        <span className="pill">FAQ</span>
        <h1 className="mt-3 font-heading text-4xl font-bold text-text sm:text-5xl">Pertanyaan yang sering ditanyakan</h1>
        <p className="mt-3 text-lg text-text-muted">Belum ketemu jawabannya? Hubungi kami via WhatsApp.</p>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-md border border-rose-soft/60 bg-white p-5 shadow-warm">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-text">
                <span>{f.q}</span>
                <span className="text-xl text-rose-primary transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp">💬 Tanya via WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
