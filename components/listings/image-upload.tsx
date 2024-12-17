"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";

export function ImageUpload() {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Simuler le téléchargement d'images
      const newImages = Array.from(files).map((file) => 
        URL.createObjectURL(file)
      );
      setImages([...images, ...newImages]);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Images (max 5)
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index}>
            <CardContent className="p-2">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-32 object-cover rounded"
              />
            </CardContent>
          </Card>
        ))}
        {images.length < 5 && (
          <Card className="cursor-pointer">
            <CardContent className="p-2">
              <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors">
                <Upload className="h-6 w-6 text-gray-400" />
                <span className="mt-2 text-sm text-gray-500">
                  Ajouter une image
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  multiple
                />
              </label>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}