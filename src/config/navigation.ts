// Navigation Configuration

export const navigation = {
  main: [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/yourusername", icon: "github" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" },
  ],
} as const;

export type Navigation = typeof navigation;
