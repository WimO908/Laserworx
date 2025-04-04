
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { LaptopIcon, SettingsIcon, FactoryIcon, HomeIcon, InfoIcon, PhoneIcon } from "lucide-react";

export default function LaserworxWebsite() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-800">Laserworx</div>
        <div className="space-x-6">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Diensten</Button>
          <Button variant="ghost">Over ons</Button>
          <Button variant="ghost">Contact</Button>
          <Button className="bg-blue-600 text-white">Portaal</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 p-12 bg-white shadow-sm"
      >
        <h1 className="text-4xl font-bold text-gray-800">Welkom bij Laserworx</h1>
        <p className="text-lg text-gray-600">Slim produceren met ons geïntegreerde webportaal voor calculaties, bestellingen en orderstatussen.</p>
        <Button className="text-lg px-8 py-4">Ga naar het Portaal</Button>
      </motion.section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
        <Card className="shadow-xl">
          <CardContent className="space-y-4 p-6">
            <LaptopIcon className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold">Directe Online Calculatie</h2>
            <p>Bereken snel je prijzen en mogelijkheden met ons slimme systeem.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="space-y-4 p-6">
            <SettingsIcon className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold">Volledige Procescontrole</h2>
            <p>Volg je orders realtime, van snijden tot levering.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="space-y-4 p-6">
            <FactoryIcon className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold">Smart Factory Connect</h2>
            <p>Koppel je systemen direct met onze productie voor maximale efficiëntie.</p>
          </CardContent>
        </Card>
      </section>

      {/* Diensten Section */}
      <section className="bg-white p-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Onze Diensten</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Snijwerk</h3>
              <p>Precisie lasersnijden voor uiteenlopende materialen.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Zetwerk</h3>
              <p>Strakke en nauwkeurige zetwerkoplossingen.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Laswerk & Nabewerking</h3>
              <p>Hoogwaardige afwerking en verbindingen voor jouw project.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Over ons Section */}
      <section className="p-12 bg-gray-50 space-y-6">
        <h2 className="text-3xl font-bold text-center">Over Laserworx</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700">
          Laserworx is jouw partner in metaalbewerking. Met jarenlange ervaring, moderne technologieën en een klantgericht team helpen we je van idee tot realisatie. Van prototype tot serieproductie, wij staan voor je klaar.
        </p>
      </section>

      {/* Contact Section */}
      <section className="p-12 bg-white space-y-6">
        <h2 className="text-3xl font-bold text-center">Contacteer ons</h2>
        <div className="max-w-md mx-auto space-y-4">
          <Input placeholder="Naam" />
          <Input placeholder="E-mailadres" />
          <Input placeholder="Bericht" />
          <Button className="w-full">Verstuur bericht</Button>
        </div>
      </section>

      {/* Portal Login Mockup */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="bg-gray-100 p-12 space-y-6 text-center"
      >
        <h2 className="text-2xl font-bold">Login Portaal</h2>
        <div className="max-w-sm mx-auto space-y-4">
          <Input placeholder="Gebruikersnaam" />
          <Input type="password" placeholder="Wachtwoord" />
          <Button className="w-full">Inloggen</Button>
          <p className="text-sm text-gray-500">Nog geen account? <a href="#" className="text-blue-600">Registreer hier</a></p>
        </div>
      </motion.section>
    </div>
  );
}
