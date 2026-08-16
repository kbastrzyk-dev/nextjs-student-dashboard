import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav"; // Import the new mobile navigation

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    // Stack items vertically on mobile (flex-col), and horizontally on desktop (md:flex-row)
    <div className="min-h-screen bg-[#121212] flex flex-col md:flex-row">
      {/* Mobile navigation bar visible only on small screens (< md) */}
      <MobileNav />

      {/* Reusable Sidebar component handling active states and routing */}
      {/* Hidden natively via Tailwind classes inside the component itself on mobile */}
      <Sidebar />

      {/* Main content area with responsive padding */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
