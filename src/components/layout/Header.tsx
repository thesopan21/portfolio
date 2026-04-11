"use client";

import { navigation } from "@/config";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            Portfolio
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
