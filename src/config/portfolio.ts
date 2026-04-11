import type { PortfolioConfig } from "@/types/data";

/**
 * Portfolio Configuration
 * 
 * Central configuration for your portfolio site.
 * Update this with your personal information and preferences.
 */

export const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    name: "Your Name",
    title: "Full-Stack Developer",
    bio: "Passionate developer with 6+ years of experience building scalable web applications. Specialized in React, Next.js, and modern web technologies. Always learning and sharing knowledge with the community.",
    location: "San Francisco, CA",
    availability: "available", // "available" | "busy" | "unavailable"
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567", // Optional
    resume: "/resume.pdf", // Path to downloadable resume
  },

  seo: {
    title: "Your Name - Full-Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in React, Next.js, and TypeScript. Building modern web applications with excellent user experience and performance.",
    keywords: [
      "full-stack developer",
      "react developer",
      "nextjs developer",
      "typescript",
      "web development",
      "software engineer",
      "frontend developer",
      "backend developer",
    ],
    ogImage: "/og-image.jpg", // Open Graph image for social sharing
  },

  features: {
    blog: false, // Enable/disable blog section
    testimonials: true, // Enable/disable testimonials section
    analytics: true, // Enable Google Analytics or similar
    contactForm: true, // Enable contact form
  },
};

// Helper functions for easy access
export const getPersonalInfo = () => portfolioConfig.personalInfo;
export const getSEOConfig = () => portfolioConfig.seo;
export const getFeatures = () => portfolioConfig.features;

/**
 * Navigation Configuration
 * Define your site's navigation structure
 */
export const navigationConfig = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],

  footer: {
    sections: [
      {
        title: "Navigation",
        links: [
          { label: "Home", href: "/" },
          { label: "Projects", href: "/#projects" },
          { label: "About", href: "/#about" },
          { label: "Contact", href: "/#contact" },
        ],
      },
      {
        title: "Projects",
        links: [
          { label: "All Projects", href: "/#projects" },
          { label: "Web Apps", href: "/#projects?category=web" },
          { label: "Mobile Apps", href: "/#projects?category=mobile" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Resume", href: "/resume.pdf" },
          { label: "GitHub", href: "https://github.com/yourusername" },
          { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
        ],
      },
    ],
  },
};

/**
 * Theme Configuration
 * Configure theme colors and preferences
 */
export const themeConfig = {
  defaultTheme: "dark" as "light" | "dark" | "system",
  enableThemeSwitcher: true,
};

/**
 * Analytics Configuration
 */
export const analyticsConfig = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  enableAnalytics: process.env.NODE_ENV === "production",
};

/**
 * Contact Form Configuration
 */
export const contactConfig = {
  enableContactForm: true,
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "", // Or use your preferred form service
  emailTo: portfolioConfig.personalInfo.email,
  subjects: [
    "General Inquiry",
    "Project Proposal",
    "Job Opportunity",
    "Collaboration",
    "Other",
  ],
};

/**
 * Social Media Configuration
 * Social links for sharing and profiles
 */
export const socialConfig = {
  shareButtons: ["twitter", "linkedin", "facebook", "email"],
  enableSocialSharing: true,
};

// Export all configs
export default {
  portfolio: portfolioConfig,
  navigation: navigationConfig,
  theme: themeConfig,
  analytics: analyticsConfig,
  contact: contactConfig,
  social: socialConfig,
};
