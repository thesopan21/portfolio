// Animation duration constants
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Animation easing curves
export const ANIMATION_EASING = {
  EASE_IN: "cubic-bezier(0.4, 0, 1, 1)",
  EASE_OUT: "cubic-bezier(0, 0, 0.2, 1)",
  EASE_IN_OUT: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// Framer Motion variants
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
