// Environment variables with type safety

export const env = {
  // Public variables (accessible in browser)
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  
  // Server-side only variables
  nodeEnv: process.env.NODE_ENV || "development",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const;
