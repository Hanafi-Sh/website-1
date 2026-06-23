import Image from "next/image";
import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Cerita di balik ${BUSINESS.name} — passion Mba Debby akan dunia beauty, suasana salon yang hangat, dan komitmen pada harga transparan.`,
};

export default function AboutPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="blob-1 w-96 h-96 -top-20 -left-20 anim-blob" />
      <div className="blob-2 w-80 h-80 top-1/2 -right-20 anim-blob" />
      <div className="container-px mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-12 anim-fade-up">
          <span className="inline-block glass-pink px-4 py-1.5 rounded-full text-xs font-semibold text-pink-700 uppercase tracking-wider">
            Tentang
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05]">
            {BUSINESS.copy.aboutHeadline.split(" by ")[0]} <span className="text-gradient-pink">by</span> Debby.
          </h1>
        </div>

        <div className="card-soft p-8 sm:p-12 anim-fade-up anim-delay-100">
          <div className="relative h-20 w-20 rounded-full overflow-hidden mb-5 ring-2 ring-pink-200/60">
            <Image src="/assets/stylist-debby.png" alt="Mba Debby, founder" fill className="object-cover" />
          </div>
          <p className="text-lg text-ink leading-relaxed">
            Halo, kami {BUSINESS.name} — salon rambut milik perempuan yang terletak di {BUSINESS.address.street.split(",")[0]}, Sleman. Berawal dari passion Mba Debby akan dunia styling rambut, kami hadir untuk memberikan pengalaman salon yang hangat, ramah, dan bikin kamu betah.
          </p>
          <p className="mt-4 text-lg text-ink leading-relaxed">
            Pelanggan kami sering bilang suasana di sini <em>super comfy</em>, lengkap dengan free drinks, snacks, dan musik Spotify yang bikin rileks. Kami percaya, rambut bagus itu bonus — rasa dihargai itu yang utama. Itulah kenapa harga selalu kami sampaikan di awal, supaya kamu nggak kaget saat bayar.
          </p>
          <p className="mt-4 text-lg text-ink leading-relaxed">
            Dengan rating <strong className="text-pink-600">{BUSINESS.rating}</strong> dari {BUSINESS.reviewCount.toLocaleString("id-ID")} ulasan, kami bangga jadi salah satu salon paling direkomendasikan di Jogja. Mau ditemani Mba Debby langsung, atau Kak Agnes yang jago coloring? Booking dulu yuk.
          </p>
        </div>

        <div className="mt-8 glass-pink rounded-xl p-8 anim-fade-up anim-delay-200">
          <p className="text-xs font-bold uppercase tracking-wider text-pink-600 mb-2">Founder Story Prompt</p>
          <p className="italic text-text-muted">
            &ldquo;{BUSINESS.copy.founderPrompt}&rdquo;
          </p>
          <p className="mt-3 text-xs text-text-muted">— untuk Mba Debby, founder</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="card-soft p-6 anim-fade-up">
            <h3 className="font-display text-lg font-bold text-ink">Lokasi</h3>
            <p className="mt-2 text-sm text-ink">{BUSINESS.address.street}</p>
            <p className="mt-1 text-sm text-text-muted">{BUSINESS.address.city}, {BUSINESS.address.state}</p>
            <p className="mt-3 text-xs text-text-muted">Caturtunggal/Seturan, dekat kampus UII, UGM, UNY.</p>
          </div>
          <div className="card-soft p-6 anim-fade-up anim-delay-100">
            <h3 className="font-display text-lg font-bold text-ink">Identitas</h3>
            <p className="mt-2 text-sm"><strong className="text-pink-600">Women-owned</strong> — diidentifikasi resmi di Google</p>
            <p className="mt-1 text-xs text-text-muted">Credit Card · Debit · NFC · QRIS · Cheques</p>
            <p className="mt-1 text-xs text-text-muted">Beverages & toilet tersedia</p>
          </div>
        </div>

        <div className="mt-10 text-center anim-fade-up">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">Booking via WhatsApp</a>
        </div>
      </div>
    </section>
  );
}