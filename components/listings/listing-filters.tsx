"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ListingFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000000]);

  return (
    <Card>
      <CardContent className="p-4 space-y-6">
        <div>
          <Label>Rechercher</Label>
          <Input placeholder="Mot-clé..." className="mt-1" />
        </div>

        <div>
          <Label>Ville</Label>
          <Input placeholder="Ville..." className="mt-1" />
        </div>

        <div>
          <Label>Prix (FCFA)</Label>
          <div className="pt-4">
            <Slider
              defaultValue={[0, 1000000]}
              max={1000000}
              step={10000}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between mt-2 text-sm">
              <span>{priceRange[0]} FCFA</span>
              <span>{priceRange[1]} FCFA</span>
            </div>
          </div>
        </div>

        <Button className="w-full">Appliquer les filtres</Button>
      </CardContent>
    </Card>
  );
}