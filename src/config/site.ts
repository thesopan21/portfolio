// Site Configuration
// Central place for site metadata and configuration

export const siteConfig = {
  name: "Your Portfolio Name",
  title: "Portfolio | Your Name",
  description: "Personal portfolio showcasing my work and experience",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  author: {
    name: "Your Name",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  keywords: [
    "web developer",
    "full-stack developer",
    "react",
    "next.js",
    "typescript",
    "portfolio",
    "front-end developer",
    "UI/UX",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
