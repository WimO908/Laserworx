# ===== laserworx-website/package.json =====
{
  "name": "laserworx-website",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "eslint": "^9.12.0",
    "eslint-config-next": "^14.2.5",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.3"
  }
}

# ===== laserworx-website/next.config.js =====
/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

# ===== laserworx-website/tsconfig.json =====
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "es2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules"]
}

# ===== laserworx-website/postcss.config.js =====
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };

# ===== laserworx-website/tailwind.config.ts =====
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

# ===== laserworx-website/src/styles/globals.css =====
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body { height: 100%; }
body { @apply bg-white text-lw-ink antialiased; }
.container-xl { @apply max-w-6xl mx-auto px-4; }
.btn { @apply inline-flex items-center justify-center rounded-xl2 px-5 py-3 font-medium shadow-soft bg-lw-green text-white hover:bg-lw-greenDark transition; }
.btn-outline { @apply inline-flex items-center justify-center rounded-xl2 px-5 py-3 font-medium border border-lw-green text-lw-green hover:bg-lw-green hover:text-white transition; }
.section { @apply py-16 sm:py-20; }
.h1 { @apply text-4xl sm:text-5xl font-bold tracking-tight; }
.h2 { @apply text-3xl sm:text-4xl font-semibold tracking-tight; }
.lead { @apply text-lg text-slate-600; }

# ===== laserworx-website/src/app/layout.tsx =====
import "@/styles/globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { default: "Laserworx – Lasersnijden & Metaalbewerking", template: "%s | Laserworx" },
  description: "Precisie lasersnijden, ontbramen, borstelen en assemblage met snelle doorlooptijden.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <header className="bg-lw-steel text-white sticky top-0 z-40">
          <div className="container-xl h-16 flex items-center justify-between">
            <Link href="/" className="font-bold tracking-tight text-lg flex items-center gap-2">
              <img src="/favicon.svg" alt="Laserworx" className="h-6 w-6" />
              <span>Laserworx</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="hover:underline">Home</Link>
              <a href="/#diensten" className="hover:underline">Diensten</a>
              <Link href="/contact" className="btn">Offerte</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-lw-steel text-white">
          <div className="container-xl py-10 grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">Laserworx B.V.</p>
              <p className="text-sm opacity-80 mt-2">Industriepark 5N, 9351 PA Leek<br/>Tel: 0594 820 970</p>
            </div>
            <div className="text-sm opacity-80 self-end sm:text-right">
              © {new Date().getFullYear()} Laserworx
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

# ===== laserworx-website/src/app/page.tsx =====
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="section bg-lw-light">
        <div className="container-xl grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h1 className="h1">Precisie <span className="text-lw-blue">lasersnijden</span> & afwerking</h1>
            <p className="lead mt-4">
              Van enkelstuks tot serieproductie in staal, RVS en corten. Opties: ontbramen, borstelen,
              tappen/boren/soevereinen en assemblage.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="btn">Offerte aanvragen</Link>
              <a href="#diensten" className="btn-outline">Onze diensten</a>
            </div>
          </div>
          <div className="rounded-xl2 overflow-hidden shadow-soft border">
            <img src="/hero-laser.jpg" alt="Laserworx productie" />
          </div>
        </div>
      </section>

      <section id="diensten" className="section">
        <div className="container-xl">
          <h2 className="h2 mb-6">Diensten</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t:"Lasersnijden", d:"Plaatformaten 3000×1500 en 2500×1250. Toleranties volgens tekening."},
              { t:"Ontbramen & borstelen", d:"Timesavers/Lissmac afwerking voor constante randen."},
              { t:"Tappen/boren/soevereinen", d:"Klaar voor montage en assemblage."},
              { t:"Kanten & zetten", d:"Met vaste partners; kwaliteitscontrole door ons."},
              { t:"Assemblage", d:"Subassemblies en eindmontage inclusief controle."},
              { t:"Logistiek", d:"Verpakken, labelen en just-in-time levering."}
            ].map((i)=>(
              <div key={i.t} className="p-6 border rounded-xl2 shadow-soft bg-white">
                <h3 className="font-semibold text-xl">{i.t}</h3>
                <p className="mt-2 text-slate-600">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

# ===== laserworx-website/src/app/contact/page.tsx =====
"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section">
      <div className="container-xl max-w-2xl">
        <h1 className="h1">Contact</h1>
        <p className="lead mt-3">Stuur je vraag of offerteaanvraag. Voeg indien mogelijk een link naar je DXF/STEP toe.</p>

        {!sent ? (
          <form className="mt-8 grid gap-4" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
            <input required name="name" placeholder="Naam" className="border rounded-xl2 px-4 py-3" />
            <input required type="email" name="email" placeholder="E-mail" className="border rounded-xl2 px-4 py-3" />
            <input name="company" placeholder="Bedrijf" className="border rounded-xl2 px-4 py-3" />
            <textarea required name="message" placeholder="Bericht" rows={6} className="border rounded-xl2 px-4 py-3" />
            <button className="btn w-full">Verzenden</button>
            <p className="text-sm text-slate-500">Tip: zet grote bestanden op Drive/WeTransfer en plak de link.</p>
          </form>
        ) : (
          <div className="p-6 border rounded-xl2 bg-lw-light">
            <p className="font-medium">Bedankt! We hebben je bericht ontvangen.</p>
            <p className="text-slate-600 mt-1">We reageren zo snel mogelijk.</p>
          </div>
        )}
      </div>
    </section>
  );
}

# ===== laserworx-website/public/favicon.svg =====
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <rect rx="10" width="48" height="48" fill="#111827"/>
  <path d="M10 24h28" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>
</svg>

# ===== laserworx-website/public/hero-laser.jpg =====
# (optioneel) Plaats hier zelf een foto; laat dit bestand bestaan. Als je geen afbeelding hebt, kun je deze regel negeren.
