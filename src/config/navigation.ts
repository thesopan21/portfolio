// Navigation Configuration

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/yourusername", icon: "github" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" },
  ],
} as const;

export type Navigation = typeof navigation;
