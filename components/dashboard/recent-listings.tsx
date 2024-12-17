"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useListings } from "@/hooks/use-listings";

export function RecentListings() {
  const { listings } = useListings();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Annonces récentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {listings?.map((listing) => (
            <div key={listing.id} className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
              <div>
                <h3 className="font-medium">{listing.title}</h3>
                <p className="text-sm text-gray-500">{listing.price} {listing.currency}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}