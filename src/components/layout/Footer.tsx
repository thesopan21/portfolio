"use client";

import { navigation, siteConfig } from "@/config";
import { socialLinks } from "@/data";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-2xl font-bold mb-4 hover:text-primary-400 transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-neutral-400 mb-4 max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={link.platform}
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors">
                    <span className="text-neutral-400 group-hover:text-white transition-colors">
                      {getSocialIcon(link.platform)}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.author.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center sm:text-left">
              &copy; {currentYear} {siteConfig.author.name}. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Get social media icon (simple text fallback)
 * You can replace this with actual icon components later
 */
function getSocialIcon(platform: string): string {
  const icons: Record<string, string> = {
    GitHub: "GH",
    LinkedIn: "IN",
    Twitter: "TW",
    Email: "✉",
  };
  return icons[platform] || platform.substring(0, 2).toUpperCase();
}
