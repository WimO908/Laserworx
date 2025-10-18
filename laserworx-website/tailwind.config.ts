import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lw: {
          green: "#16a34a",
          greenDark: "#15803d",
          blue: "#2563eb",
          ink: "#0f172a",
          steel: "#111827",
          light: "#f8fafc"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -5px rgba(0,0,0,.05), 0 8px 10px -6px rgba(0,0,0,.05)"
      },
      borderRadius: { xl2: "1.25rem" }
    }
  },
  plugins: []
};
export default config;

# ===== laserworx-website/public/favicon.svg =====
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <rect rx="10" width="48" height="48" fill="#111827"/>
  <path d="M10 24h28" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>
</svg>
