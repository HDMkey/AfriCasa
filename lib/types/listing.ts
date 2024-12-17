export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  type: 'sale' | 'rent';
  location: {
    address: string;
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  userId: string;
  status: 'active' | 'pending' | 'sold' | 'rented';
  createdAt: Date;
  updatedAt: Date;
}