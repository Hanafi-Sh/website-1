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
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="font-display text-lg font-medium tracking-tight text-ink">
          {BUSINESS.name.split(" By ")[0]} <span className="text-ink/40">by</span> <span className="text-rose-primary">Debby</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-body text-sm text-ink/70 transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp text-sm">
            💬 Booking
          </a>
        </div>
      </div>
      <details className="md:hidden">
        <summary className="container-px mx-auto flex cursor-pointer items-center justify-between py-2 font-mono text-[10px] uppercase tracking-eyebrow text-ink/60">
          Menu
        </summary>
        <nav className="container-px mx-auto flex flex-col gap-1 pb-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-2 text-sm text-ink/80 hover:text-rose-primary">
              {l.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
