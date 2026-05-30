import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00B0A8",
          teal: "#00A3B0",
          navy: "#002050",
          slate: "#334155",
          mist: "#E2E8F0"
        }
      },
      fontFamily: {
        tajawal: ["var(--font-tajawal)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 176, 168, 0.18)",
        soft: "0 18px 60px rgba(0, 32, 80, 0.12)"
      },
      backgroundImage: {
        "brand-radial": "radial-gradient(circle at top, rgba(0, 176, 168, 0.20), transparent 34%), linear-gradient(135deg, #002050 0%, #334155 55%, #002050 100%)"
      }
    }
  },
  plugins: []
};

export default config;
