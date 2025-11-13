import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#d9e1ff",
          200: "#b3c4ff",
          300: "#8da6ff",
          400: "#6689ff",
          500: "#406cff",
          600: "#2950d4",
          700: "#1d3aa1",
          800: "#12246e",
          900: "#080f3b",
        },
        "brand-electric": "#5f6fff",
        "brand-neon": "#32f5c8",
        "surface-dark": "#080b17",
        "surface-light": "#f8faff",
      },
      boxShadow: {
        glow: "0 0 60px rgba(95, 111, 255, 0.35)",
        "inner-glow": "inset 0 0 40px rgba(50, 245, 200, 0.25)",
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at center, rgba(95, 111, 255, 0.35), rgba(8, 11, 23, 0.95))",
        "gloss-gradient":
          "linear-gradient(135deg, rgba(64, 108, 255, 0.95) 0%, rgba(50, 245, 200, 0.9) 100%)",
        "mesh-light":
          "radial-gradient(circle at 10% 20%, rgba(95, 111, 255, 0.35), transparent 45%), radial-gradient(circle at 90% 10%, rgba(50, 245, 200, 0.3), transparent 55%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.7), transparent 40%)",
      },
      animation: {
        "slow-pulse": "slow-pulse 10s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out both",
      },
      keyframes: {
        "slow-pulse": {
          "0%, 100%": { opacity: 0.35 },
          "50%": { opacity: 0.7 },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;

