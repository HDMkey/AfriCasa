"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag, Home, Building2, Phone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2940')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Bienvenue sur AfriMarket</h1>
          <p className="text-xl mb-8">Votre marketplace africaine de confiance</p>
          <div className="space-x-4">
            <Button size="lg" variant="default">
              Acheter
            </Button>
            <Button size="lg" variant="outline">
              Vendre
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Achat et Vente</h3>
              <p className="text-gray-600">Achetez et vendez en toute sécurité</p>
            </div>
            <div className="p-6 text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Trouvez votre location idéale</p>
            </div>
            <div className="p-6 text-center">
              <Home className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Immobilier</h3>
              <p className="text-gray-600">Investissez dans l'immobilier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Phone className="w-6 h-6 mr-2 text-primary" />
              <span>+225 07 07 07 07 07</span>
            </div>
            <div className="text-center">
              <p className="mb-4">Abidjan, Côte d'Ivoire</p>
              <p>contact@afrimarket.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}