"use client";

import { DashboardStats } from "@/components/dashboard/stats";
import { RecentListings } from "@/components/dashboard/recent-listings";
import { Messages } from "@/components/dashboard/messages";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Tableau de bord</h1>
      <DashboardStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecentListings />
        <Messages />
      </div>
    </div>
  );
}