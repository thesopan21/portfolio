"use client";

import { ThemeToggle } from "@/components/ui";
import { navigation, siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-sticky transition-all duration-300",
          isScrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10"
            : "bg-[#0a0a0f]/80 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg md:text-xl font-bold text-white hover:text-purple-400 transition-colors tracking-tight"
            >
              {siteConfig.name}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              {navigation.main.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium transition-colors relative group tracking-wider",
                    "text-gray-400 hover:text-white uppercase"
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "md:hidden p-2 rounded-lg transition-colors",
                  "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                  "focus:outline-none focus:ring-2 focus:ring-primary-500"
                )}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {/* Hamburger Icon */}
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={cn(
                      "block w-5 h-0.5 bg-foreground transition-all duration-300",
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-1.5"
                        : "rotate-0 translate-y-0"
                    )}
                  />
                  <span
                    className={cn(
                      "block w-5 h-0.5 bg-foreground transition-all duration-300 my-1",
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    )}
                  />
                  <span
                    className={cn(
                      "block w-5 h-0.5 bg-foreground transition-all duration-300",
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-1.5"
                        : "rotate-0 translate-y-0"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-modal-backdrop bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-16 right-0 bottom-0 z-modal w-72 md:hidden",
          "bg-background border-l border-border shadow-xl",
          "transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 space-y-1">
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                "text-neutral-700 hover:text-foreground hover:bg-neutral-100",
                "dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
              )}
            >
              {item.name}
            </a>
          ))}

          {/* Social Links in Mobile Menu */}
          <div className="pt-6 mt-6 border-t border-border">
            <p className="px-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              Connect
            </p>
            <div className="flex flex-col space-y-1">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm transition-colors",
                    "text-neutral-600 hover:text-foreground hover:bg-neutral-100",
                    "dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
