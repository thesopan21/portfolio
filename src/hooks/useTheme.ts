"use client";

import type { ThemeMode } from "@/lib/theme";
import { getTheme, initializeTheme, setTheme } from "@/lib/theme";
import { useEffect, useState } from "react";

/**
 * Custom hook for theme management
 * @returns Current theme and setter function
 */
export function useTheme() {
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initialize theme on mount
    initializeTheme();
    setThemeState(getTheme());
  }, []);

  const updateTheme = (mode: ThemeMode) => {
    setTheme(mode);
    setThemeState(getTheme());
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    updateTheme(newTheme);
  };

  return {
    theme,
    setTheme: updateTheme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
}
