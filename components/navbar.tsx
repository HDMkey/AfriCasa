"use client";

import { Button } from "@/components/ui/button";
import { UserCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            AfriMarket
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/acheter" className="text-gray-600 hover:text-gray-900">
              Acheter
            </Link>
            <Link href="/vendre" className="text-gray-600 hover:text-gray-900">
              Vendre
            </Link>
            <Link href="/louer" className="text-gray-600 hover:text-gray-900">
              Louer
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Button variant="outline">
              <UserCircle className="mr-2 h-4 w-4" />
              Connexion
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/acheter" className="text-gray-600 hover:text-gray-900">
                Acheter
              </Link>
              <Link href="/vendre" className="text-gray-600 hover:text-gray-900">
                Vendre
              </Link>
              <Link href="/louer" className="text-gray-600 hover:text-gray-900">
                Louer
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Button variant="outline" className="w-full">
                <UserCircle className="mr-2 h-4 w-4" />
                Connexion
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}