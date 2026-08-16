import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#121212] flex">
      {/* Reusable Sidebar component handling active states and routing */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
