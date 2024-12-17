import type { Listing } from "@/lib/types/listing";

export async function getListings(): Promise<Listing[]> {
  // Implémenter la logique de récupération des annonces
  return [];
}

export async function createListing(listing: Partial<Listing>): Promise<Listing> {
  // Implémenter la logique de création d'annonce
  throw new Error("Not implemented");
}

export async function updateListing(id: string, listing: Partial<Listing>): Promise<Listing> {
  // Implémenter la logique de mise à jour d'annonce
  throw new Error("Not implemented");
}

export async function deleteListing(id: string): Promise<void> {
  // Implémenter la logique de suppression d'annonce
  throw new Error("Not implemented");
}