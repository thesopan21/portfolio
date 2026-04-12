"use client";

import { navigation, siteConfig } from "@/config";
import { socialLinks } from "@/data";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-2xl font-bold mb-4 hover:text-purple-400 transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
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
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all backdrop-blur-sm">
                    <span className="text-gray-400 group-hover:text-purple-400 transition-colors">
                      {getSocialIcon(link.platform)}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-500">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-500">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
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
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; {currentYear} {siteConfig.author.name}. Built with intentional restraint.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>GitHub</span>
              <span className="mx-2">•</span>
              <span>LinkedIn</span>
              <span className="mx-2">•</span>
              <span>Twitter</span>
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
