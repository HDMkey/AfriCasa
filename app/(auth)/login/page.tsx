"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";

export default function LoginPage() {
  const { login } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold">Connexion</h1>
          <p className="text-gray-600">Connectez-vous à votre compte AfriMarket</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Input type="password" placeholder="Mot de passe" />
            </div>
            <Button className="w-full" type="submit">
              Se connecter
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p>
            Pas encore de compte?{" "}
            <Link href="/register" className="text-primary hover:underline">
              S'inscrire
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}