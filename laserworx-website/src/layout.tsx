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
