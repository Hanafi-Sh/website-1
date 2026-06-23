import Link from "next/link";
import { BUSINESS, waLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg text-ink">{BUSINESS.name.split(" By ")[0]} <span className="text-ink/40">by</span> <span className="text-rose-primary">Debby</span></p>
            <p className="mt-3 font-editorial text-sm italic text-ink/70">{BUSINESS.tagline}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-ink/80">
              <span className="stars" aria-hidden>★★★★★</span>
              <span><strong>{BUSINESS.rating}</strong> · {BUSINESS.reviewCount.toLocaleString("id-ID")} review</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">Kontak</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li><a href={`tel:${BUSINESS.phone}`} className="hover:text-rose-primary">{BUSINESS.whatsappDisplay}</a></li>
              <li><a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-rose-primary">WhatsApp</a></li>
              <li className="text-ink/70">{BUSINESS.address.street.split(",")[0]}</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Navigasi</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li><Link href="/services" className="hover:text-rose-primary">Layanan</Link></li>
              <li><Link href="/team" className="hover:text-rose-primary">Tim Stylist</Link></li>
              <li><Link href="/gallery" className="hover:text-rose-primary">Galeri</Link></li>
              <li><Link href="/testimonials" className="hover:text-rose-primary">Testimoni</Link></li>
              <li><Link href="/about" className="hover:text-rose-primary">Tentang</Link></li>
              <li><Link href="/faq" className="hover:text-rose-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Jam</p>
            <ul className="mt-4 space-y-1 text-sm text-ink/80">
              {BUSINESS.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span>{h.day}</span>
                  <span className="font-mono text-ink/60">{h.open}–{h.close}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-rule pt-6 flex items-center justify-between gap-4 text-xs text-ink/50">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. Hak cipta dilindungi.</p>
          <p className="font-mono uppercase tracking-eyebrow">Yogyakarta — Edisi 01 / 2026</p>
        </div>
      </div>
    </footer>
  );
}
