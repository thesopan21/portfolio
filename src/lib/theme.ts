/**
 * Theme Utilities
 * Helper functions for working with the design system theme
 */

/**
 * Theme mode type
 */
export type ThemeMode = "light" | "dark" | "system";

/**
 * Get current theme from HTML element
 */
export function getTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";

  const isDark = document.documentElement.classList.contains("dark");
  return isDark ? "dark" : "light";
}

/**
 * Set theme mode
 * @param mode - Theme mode to set
 */
export function setTheme(mode: ThemeMode) {
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  if (mode === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    root.classList.toggle("dark", systemTheme === "dark");
    localStorage.removeItem("theme");
  } else {
    root.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
  }
}

/**
 * Toggle between light and dark theme
 */
export function toggleTheme() {
  const current = getTheme();
  setTheme(current === "light" ? "dark" : "light");
}

/**
 * Initialize theme from localStorage or system preference
 */
export function initializeTheme() {
  if (typeof window === "undefined") return;

  const stored = localStorage.getItem("theme") as ThemeMode | null;

  if (stored && (stored === "light" || stored === "dark")) {
    setTheme(stored);
  } else {
    setTheme("system");
  }

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme("system");
      }
    });
}

/**
 * Get CSS variable value
 * @param variable - CSS variable name (with or without --)
 */
export function getCSSVariable(variable: string): string {
  if (typeof window === "undefined") return "";

  const varName = variable.startsWith("--") ? variable : `--${variable}`;
  return getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
}

/**
 * Set CSS variable value
 * @param variable - CSS variable name (with or without --)
 * @param value - Value to set
 */
export function setCSSVariable(variable: string, value: string) {
  if (typeof window === "undefined") return;

  const varName = variable.startsWith("--") ? variable : `--${variable}`;
  document.documentElement.style.setProperty(varName, value);
}

/**
 * Color utilities
 */
export const colors = {
  primary: {
    50: "var(--color-primary-50)",
    100: "var(--color-primary-100)",
    200: "var(--color-primary-200)",
    300: "var(--color-primary-300)",
    400: "var(--color-primary-400)",
    500: "var(--color-primary-500)",
    600: "var(--color-primary-600)",
    700: "var(--color-primary-700)",
    800: "var(--color-primary-800)",
    900: "var(--color-primary-900)",
    950: "var(--color-primary-950)",
  },
  neutral: {
    50: "var(--color-neutral-50)",
    100: "var(--color-neutral-100)",
    200: "var(--color-neutral-200)",
    300: "var(--color-neutral-300)",
    400: "var(--color-neutral-400)",
    500: "var(--color-neutral-500)",
    600: "var(--color-neutral-600)",
    700: "var(--color-neutral-700)",
    800: "var(--color-neutral-800)",
    900: "var(--color-neutral-900)",
    950: "var(--color-neutral-950)",
  },
  accent: {
    purple: "var(--color-accent-purple)",
    pink: "var(--color-accent-pink)",
    orange: "var(--color-accent-orange)",
    green: "var(--color-accent-green)",
    cyan: "var(--color-accent-cyan)",
  },
  semantic: {
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
    info: "var(--color-info)",
  },
} as const;

/**
 * Spacing scale
 */
export const spacing = {
  xs: "var(--spacing-xs)",
  sm: "var(--spacing-sm)",
  md: "var(--spacing-md)",
  lg: "var(--spacing-lg)",
  xl: "var(--spacing-xl)",
  "2xl": "var(--spacing-2xl)",
  "3xl": "var(--spacing-3xl)",
} as const;

/**
 * Border radius scale
 */
export const radius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  full: "var(--radius-full)",
} as const;

/**
 * Shadow scale
 */
export const shadows = {
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
  xl: "var(--shadow-xl)",
} as const;

/**
 * Transition durations
 */
export const transitions = {
  fast: "var(--transition-fast)",
  base: "var(--transition-base)",
  slow: "var(--transition-slow)",
} as const;

/**
 * Z-index scale
 */
export const zIndex = {
  dropdown: "var(--z-dropdown)",
  sticky: "var(--z-sticky)",
  fixed: "var(--z-fixed)",
  modalBackdrop: "var(--z-modal-backdrop)",
  modal: "var(--z-modal)",
  popover: "var(--z-popover)",
  tooltip: "var(--z-tooltip)",
} as const;

/**
 * Responsive breakpoints
 */
export const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Check if viewport matches breakpoint
 * @param breakpoint - Breakpoint key
 * @returns Whether viewport is at or above breakpoint
 */
export function isBreakpoint(
  breakpoint: keyof typeof breakpoints
): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= breakpoints[breakpoint];
}

/**
 * Typography scale
 */
export const typography = {
  fontSize: {
    xs: "var(--text-xs)",
    sm: "var(--text-sm)",
    base: "var(--text-base)",
    lg: "var(--text-lg)",
    xl: "var(--text-xl)",
    "2xl": "var(--text-2xl)",
    "3xl": "var(--text-3xl)",
    "4xl": "var(--text-4xl)",
    "5xl": "var(--text-5xl)",
    "6xl": "var(--text-6xl)",
    "7xl": "var(--text-7xl)",
  },
  fontWeight: {
    light: "var(--font-light)",
    normal: "var(--font-normal)",
    medium: "var(--font-medium)",
    semibold: "var(--font-semibold)",
    bold: "var(--font-bold)",
    extrabold: "var(--font-extrabold)",
  },
  lineHeight: {
    tight: "var(--leading-tight)",
    normal: "var(--leading-normal)",
    relaxed: "var(--leading-relaxed)",
  },
} as const;
