import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pink muda palette - main brand
        "pink-50": "#FFF0F5",
        "pink-100": "#FFE4EC",
        "pink-200": "#FFCDD9",
        "pink-300": "#FFB3C6",
        "pink-400": "#FF8FB1",
        "pink-500": "#FF6B9D",  // primary CTA
        "pink-600": "#E94A85",  // hover
        "pink-700": "#C93570",
        "cream": "#FFFAFB",     // lightest bg
        white: "#FFFFFF",
        ink: "#2A1F2A",         // body text (warm dark)
        "text-muted": "#7A6B73", // secondary text (warm gray)
        gold: "#D4AF6F",         // rating stars (warm gold)
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "28px",
        "2xl": "36px",
      },
      boxShadow: {
        // Pink-tinted shadows (no gray)
        soft: "0 4px 20px rgba(255, 107, 157, 0.08)",
        medium: "0 8px 32px rgba(255, 107, 157, 0.12)",
        large: "0 16px 48px rgba(255, 107, 157, 0.16)",
        glass: "0 8px 32px rgba(255, 107, 157, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
        "glass-lg": "0 16px 48px rgba(255, 107, 157, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "blob": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-6px) scale(1.02)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-scale": "fade-scale 0.8s ease-out forwards",
        "slide-right": "slide-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        blob: "blob 12s ease-in-out infinite",
        "bounce-soft": "bounce-soft 3s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
        "3xl": "64px",
        "4xl": "72px",
      },
    },
  },
  plugins: [],
};

export default config;
