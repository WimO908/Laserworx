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
              { t:"Assemblage", d:"Subassemblies en eindmontage inclusief controle."}
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
