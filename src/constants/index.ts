// Application Constants

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  CONTACT: "/contact",
} as const;

export const API_ENDPOINTS = {
  CONTACT: "/api/contact",
  NEWSLETTER: "/api/newsletter",
} as const;

export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;
