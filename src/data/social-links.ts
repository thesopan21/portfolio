import type { SocialLink } from "@/types/data";

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourhandle",
    icon: "twitter",
  },
  {
    platform: "Email",
    url: "mailto:your.email@example.com",
    icon: "email",
  },
];

export type SocialLinks = typeof socialLinks;
