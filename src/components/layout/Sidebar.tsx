"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/config/navigation"; // Import Single Source of Truth

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 hidden md:block h-screen sticky top-0">
      <h1 className="text-xl font-bold text-white mb-8">MPCircle</h1>
      <nav className="text-gray-400">
        <ul className="space-y-4">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block transition-colors ${
                    isActive ? "text-blue-500 font-medium" : "hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
