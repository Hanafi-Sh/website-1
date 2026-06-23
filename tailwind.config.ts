import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial palette: warm off-white paper, deep ink, single rose accent, gold from photo
        ink: "#1F1B16",          // primary text, headlines
        paper: "#FAF6F0",        // page background (warm off-white)
        "paper-warm": "#F5EFE6", // section bands
        surface: "#FFFFFF",      // cards on paper
        "rose-primary": "#B83C5A", // accent only, not CTA default
        "rose-soft": "#F5DDE2",  // tints, hover backgrounds
        gold: "#C9923F",         // rating stars, highlight chips
        "gold-soft": "#E8B86D",  // softer gold for ambient
        wood: "#8B6B4A",         // warm wood accent
        "text-muted": "#6B5D52", // secondary text
        "rule": "#D4C5B5",       // hairline rules
      },
      fontFamily: {
        display: ['"Fraunces"', '"Newsreader"', "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        editorial: ['"Newsreader"', '"Fraunces"', "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        md: "4px",
        lg: "8px",
      },
      boxShadow: {
        warm: "0 1px 2px rgba(31, 27, 22, 0.04)",
        "warm-md": "0 4px 12px rgba(31, 27, 22, 0.06)",
        "warm-lg": "0 12px 32px rgba(31, 27, 22, 0.08)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
