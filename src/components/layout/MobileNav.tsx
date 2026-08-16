"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/config/navigation"; // Import Single Source of Truth

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    // Hiding the mobile navigation on medium and larger screens
    <div className="md:hidden">
      {/* Mobile Navigation Bar */}
      <div className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center text-white sticky top-0 z-20">
        <h1 className="text-xl font-bold">MPCircle</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -mr-2 focus:outline-none hover:text-blue-500 transition-colors"
          aria-label="Toggle Mobile Menu"
          aria-expanded={isOpen}
        >
          {/* Icon while menu is open or closed */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Expanded Menu Overlay */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-[69px] bg-gray-900 z-10 p-6 border-b border-gray-800 shadow-xl">
          <nav className="text-gray-400">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)} // UX: Close the menu when a link is clicked
                      className={`block text-lg transition-colors ${
                        isActive
                          ? "text-blue-500 font-medium"
                          : "hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
