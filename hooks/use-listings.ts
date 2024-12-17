"use client";

import { useState, useEffect } from "react";
import type { Listing } from "@/lib/types/listing";

export function useListings() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    const mockListings: Listing[] = [
      {
        id: "1",
        title: "Appartement moderne",
        description: "Bel appartement au centre-ville",
        price: 250000,
        currency: "FCFA",
        category: "Immobilier",
        type: "sale",
        location: {
          address: "Cocody",
          city: "Abidjan",
          country: "Côte d'Ivoire"
        },
        images: [],
        userId: "1",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    setListings(mockListings);
    setLoading(false);
  }, []);

  return { listings, loading };
}