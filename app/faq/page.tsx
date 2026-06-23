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
  { q: "Apakah ada WiFi?", a: "Silakan tanya di salon saat datang. Suasana salon kami memang dirancang untuk kamu bisa santai." },
  { q: "Apakah ada promo?", a: "Untuk promo terbaru, follow Instagram kami atau tanyakan langsung via WhatsApp saat booking." },
];

export default function FaqPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="blob-2 w-96 h-96 top-40 right-1/3 anim-blob" />
      <div className="container-px mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-12 anim-fade-up">
          <span className="inline-block glass-pink px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
            FAQ
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold leading-[1.05]">
            Pertanyaan <span className="text-gradient-pink">umum</span>.
          </h1>
          <p className="mt-5 text-lg text-text-muted">
            Belum ketemu jawabannya? Hubungi kami via WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className={`card-soft p-5 group anim-fade-up anim-delay-${(i + 1) * 50}`}
            >
              <summary className="flex cursor-pointer items-center justify-between font-display font-semibold text-ink">
                <span>{f.q}</span>
                <span className="text-2xl text-pink-500 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm text-text-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center anim-fade-up">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">
            💬 Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}