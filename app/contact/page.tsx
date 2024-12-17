"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Contactez-nous</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <p>+225 07 07 07 07 07</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <p>contact@afrimarket.com</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <p>Abidjan, Côte d'Ivoire</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulaire de contact */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Envoyez-nous un message</h2>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Prénom" />
                    <Input placeholder="Nom" />
                  </div>
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Téléphone" />
                  <Textarea placeholder="Votre message" className="h-32" />
                  <Button type="submit" className="w-full">
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}