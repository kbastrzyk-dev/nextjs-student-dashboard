import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#121212] flex">
      {/* 
        Remember to extract this aside into a separate component later!!!!!!! 
      */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 hidden md:block">
        <h1 className="text-xl font-bold text-white mb-8">MPCircle</h1>
        <nav className="text-gray-400">
          <ul className="space-y-4">
            <li className="text-blue-500 font-medium">Dashboard</li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Courses
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Assignments
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
