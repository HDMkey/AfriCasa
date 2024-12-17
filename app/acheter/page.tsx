"use client";

import { ListingCard } from "@/components/listings/listing-card";
import { ListingFilters } from "@/components/listings/listing-filters";
import { useListings } from "@/hooks/use-listings";

export default function AcheterPage() {
  const { listings } = useListings();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Acheter</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <ListingFilters />
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}