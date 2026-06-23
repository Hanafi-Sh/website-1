// Marquee trust ticker — horizontal loop of brand trust signals.
// Duplicated list for seamless -50% translateX loop.

const items = [
  { label: "4.9 dari 5 Google", sub: "3.840 review" },
  { label: "Sejak 2018", sub: "Owner Mba Debby" },
  { label: "Free Drinks & Snacks", sub: "Quality time" },
  { label: "Women-Owned", sub: "Mba Debby & tim" },
  { label: "Spotify On", sub: "Suasana rileks" },
  { label: "Seturan, Sleman", sub: "Dekat UII, UGM, UNY" },
];

export default function MarqueeTicker() {
  // Duplicate the list so the -50% translateX loops seamlessly
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Trust signals"
      className="relative py-6 overflow-hidden border-y border-pink-200/40 bg-white/40 backdrop-blur-sm"
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />

      <div className="marquee-track">
        {loop.map((it, i) => (
          <div key={i} className="flex items-baseline gap-2 shrink-0">
            <span className="font-display text-sm font-bold text-pink-700 whitespace-nowrap">
              {it.label}
            </span>
            <span className="text-pink-400 text-xs whitespace-nowrap">{it.sub}</span>
            <span className="text-pink-300 text-xl mx-6 select-none" aria-hidden>
              •
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
