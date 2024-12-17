"use client";

import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ShoppingBag,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export function DashboardSidebar() {
  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <div className="space-y-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold">AfriMarket</h2>
        </div>
        <nav className="space-y-2">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Tableau de bord
            </Button>
          </Link>
          <Link href="/dashboard/listings">
            <Button variant="ghost" className="w-full justify-start">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Mes annonces
            </Button>
          </Link>
          <Link href="/dashboard/messages">
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </Button>
          </Link>
        </nav>
        <div className="pt-4 mt-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </div>
    </div>
  );
}