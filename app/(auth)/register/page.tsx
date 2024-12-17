"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold">Créer un compte</h1>
          <p className="text-gray-600">Rejoignez AfriMarket</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Prénom" />
              <Input placeholder="Nom" />
            </div>
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Téléphone" />
            <Input type="password" placeholder="Mot de passe" />
            <Input type="password" placeholder="Confirmer le mot de passe" />
            <Button className="w-full" type="submit">
              S'inscrire
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p>
            Déjà un compte?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Se connecter
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}