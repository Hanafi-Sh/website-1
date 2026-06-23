import Link from "next/link";
import { BUSINESS, waLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob-1 w-96 h-96 -top-20 -left-20 anim-blob" />
      <div className="blob-2 w-72 h-72 bottom-0 right-0 anim-blob" />

      <div className="relative glass-soft py-16">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-gradient-pink mb-4">
                Daisy by Debby
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {BUSINESS.tagline}. Salon rambut wanita di Seturan, Sleman.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div className="flex text-gold text-lg">★★★★★</div>
                <span className="text-sm text-ink/80">
                  <strong>{BUSINESS.rating}</strong> · {BUSINESS.reviewCount.toLocaleString("id-ID")} review
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-pink-600 mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-ink/80">
                <li>
                  <a href={`tel:${BUSINESS.phone}`} className="hover:text-pink-600 transition-colors">
                    📞 {BUSINESS.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors">
                    💬 WhatsApp
                  </a>
                </li>
                <li className="text-text-muted">📍 {BUSINESS.address.street.split(",")[0]}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-pink-600 mb-4">Navigasi</h4>
              <ul className="space-y-2 text-sm text-ink/80">
                {[
                  ["Layanan", "/services"],
                  ["Tim Stylist", "/team"],
                  ["Galeri", "/gallery"],
                  ["Testimoni", "/testimonials"],
                  ["Tentang", "/about"],
                  ["FAQ", "/faq"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-pink-600 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-pink-600 mb-4">Jam</h4>
              <ul className="space-y-1.5 text-sm text-ink/80">
                {BUSINESS.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span>{h.day}</span>
                    <span className="text-text-muted">{h.open}–{h.close}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-pink-200/50 flex items-center justify-between gap-4 text-xs text-text-muted">
            <p>© {new Date().getFullYear()} {BUSINESS.name}. Hak cipta dilindungi.</p>
            <p className="font-display">Made with 💕 in Yogyakarta</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
