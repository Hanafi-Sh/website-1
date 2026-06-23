import Link from "next/link";
import { BUSINESS, waLink } from "@/lib/constants";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/team", label: "Tim" },
  { href: "/gallery", label: "Galeri" },
  { href: "/testimonials", label: "Testimoni" },
  { href: "/about", label: "Tentang" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation() {
  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1280px)] anim-fade-up">
        <nav className="glass rounded-full px-4 py-2.5 flex items-center justify-between gap-4 shadow-soft">
          <Link href="/" className="font-display text-lg font-bold text-gradient-pink shrink-0">
            Daisy by Debby
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm font-medium text-ink/80 rounded-full transition-all duration-200 hover:text-pink-600 hover:bg-pink-100/50"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp text-xs px-4 py-2 shrink-0">
            Booking
          </a>
        </nav>
      </header>
      <div className="h-24" /> {/* spacer for fixed nav */}
    </>
  );
}
