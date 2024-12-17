"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ImageUpload } from "@/components/listings/image-upload";

export default function VendrePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Publier une annonce</h1>
          
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="space-y-4">
                  <Input placeholder="Titre de l'annonce" />
                  <Textarea placeholder="Description" className="h-32" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="number" placeholder="Prix" />
                    <Input placeholder="Devise (FCFA)" />
                  </div>
                  <ImageUpload />
                  <Button type="submit" className="w-full">
                    Publier l'annonce
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}