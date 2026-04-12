// Site Configuration
// Central place for site metadata and configuration

export const siteConfig = {
  name: "SAM.DEV",
  title: "Sam - React Native Developer Portfolio",
  description: "Building scalable, high-performance mobile apps with intentional restraint and architectural precision.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  author: {
    name: "Sam",
    email: "sam@sam.dev",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  keywords: [
    "react native developer",
    "mobile app developer",
    "react developer",
    "typescript",
    "portfolio",
    "iOS developer",
    "Android developer",
    "mobile development",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
