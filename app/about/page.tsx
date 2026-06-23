import { BUSINESS, waLink } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Cerita di balik ${BUSINESS.name} — passion Mba Debby akan dunia beauty, suasana salon yang hangat, dan komitmen pada harga transparan.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container-px mx-auto max-w-3xl">
          <p className="eyebrow-rose">Tentang</p>
          <h1 className="mt-3 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
            {BUSINESS.copy.aboutHeadline}.
          </h1>

          <div className="prose prose-lg mt-12 max-w-none text-ink">
            <p className="drop-cap font-editorial text-lg leading-relaxed text-ink/85">
              {BUSINESS.copy.aboutP1}
            </p>
            <p className="mt-6 font-editorial text-lg leading-relaxed text-ink/85">
              {BUSINESS.copy.aboutP2}
            </p>
          </div>

          <div className="mt-12 border-t border-rule pt-8">
            <p className="eyebrow">Founder Story Prompt</p>
            <p className="mt-3 max-w-2xl font-editorial italic text-ink/70">
              {BUSINESS.copy.founderPrompt}
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-eyebrow text-ink/50">— untuk Mba Debby, founder</p>
          </div>
        </div>
      </section>

      <section className="section bg-paper-warm">
        <div className="container-px mx-auto max-w-3xl">
          <div className="grid gap-px bg-rule sm:grid-cols-2">
            <div className="bg-paper-warm p-8">
              <p className="eyebrow">Lokasi</p>
              <p className="mt-3 text-sm text-ink">{BUSINESS.address.street}</p>
              <p className="mt-1 text-sm text-ink/70">{BUSINESS.address.city}, {BUSINESS.address.state}</p>
              <p className="mt-3 text-sm text-ink/80">Area: Caturtunggal/Seturan, dekat kampus UII, UGM, UNY. Dominan mahasiswa & komunitas urban.</p>
            </div>
            <div className="bg-paper-warm p-8">
              <p className="eyebrow">Identitas</p>
              <p className="mt-3 text-sm text-ink"><strong>Women-owned</strong> — diidentifikasi resmi di Google</p>
              <p className="mt-2 text-sm text-ink/70">Menerima Credit Card, Debit Card, NFC, QRIS, Cheques. Appointment recommended.</p>
              <p className="mt-2 text-sm text-ink/70">Beverages & toilet tersedia untuk kenyamanan pelanggan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-3xl text-center">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp">💬 Booking via WhatsApp</a>
        </div>
      </section>
    </>
  );
}
