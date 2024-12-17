import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import type { Listing } from "@/lib/types/listing";
import Image from "next/image";

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={listing.images[0] || "https://via.placeholder.com/400x300"}
          alt={listing.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
        <p className="text-2xl font-bold text-primary mb-2">
          {listing.price} {listing.currency}
        </p>
        <div className="flex items-center text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {listing.location.city}, {listing.location.country}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="secondary" className="w-full">
          Voir les détails
        </Button>
      </CardFooter>
    </Card>
  );
}