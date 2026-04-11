/**
 * Reusable Framer Motion Animation Variants and Utilities
 * 
 * This file provides a comprehensive animation system for consistent
 * animations throughout the application.
 */

import { Transition, Variants } from 'framer-motion';

// =============================================================================
// TYPES
// =============================================================================

export type Direction = 'up' | 'down' | 'left' | 'right';
export type AnimationDuration = 'fast' | 'normal' | 'slow';

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: [number, number, number, number] | number[];
}

// =============================================================================
// TRANSITION PRESETS
// =============================================================================

export const transitions: Record<string, Transition> = {
  // Smooth easing for most animations
  smooth: {
    type: 'tween',
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  },

  // Quick, snappy animations
  snappy: {
    type: 'tween',
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },

  // Slow, dramatic animations
  slow: {
    type: 'tween',
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1],
  },

  // Bouncy spring animation
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },

  // Gentle spring
  springGentle: {
    type: 'spring',
    stiffness: 80,
    damping: 20,
  },

  // Stiff spring for quick interactions
  springStiff: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  },
};

// =============================================================================
// FADE VARIANTS
// =============================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.smooth },
};

export const fadeOut: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0, transition: transitions.smooth },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

// =============================================================================
// SLIDE VARIANTS
// =============================================================================

export const slideInUp: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: transitions.smooth },
};

export const slideInDown: Variants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: transitions.smooth },
};

export const slideInLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: transitions.smooth },
};

export const slideInRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: transitions.smooth },
};

// =============================================================================
// SCALE VARIANTS
// =============================================================================

export const scaleIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: transitions.spring },
};

export const scaleOut: Variants = {
  visible: { scale: 1, opacity: 1 },
  hidden: { scale: 0, opacity: 0, transition: transitions.smooth },
};

export const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: transitions.smooth },
};

// =============================================================================
// STAGGER CONTAINER VARIANTS
// =============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// =============================================================================
// HOVER/TAP VARIANTS (for interactive elements)
// =============================================================================

export const hoverScale = {
  scale: 1.05,
  transition: transitions.snappy,
};

export const tapScale = {
  scale: 0.95,
  transition: transitions.snappy,
};

export const hoverLift = {
  y: -5,
  transition: transitions.snappy,
};

export const hoverGlow = {
  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
  transition: transitions.snappy,
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Creates a custom fade variant with configurable direction and timing
 */
export const createFadeVariant = (
  direction: Direction = 'up',
  config: AnimationConfig = {}
): Variants => {
  const { duration = 0.6, delay = 0, ease = [0.25, 0.1, 0.25, 1] } = config;

  const offset = 20;
  const initial = {
    opacity: 0,
    ...(direction === 'up' && { y: offset }),
    ...(direction === 'down' && { y: -offset }),
    ...(direction === 'left' && { x: -offset }),
    ...(direction === 'right' && { x: offset }),
  };

  return {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween' as const,
        duration,
        delay,
        ease: ease as any, // Framer Motion accepts cubic bezier arrays
      },
    },
  };
};

/**
 * Creates a custom slide variant with configurable direction and timing
 */
export const createSlideVariant = (
  direction: Direction = 'up',
  config: AnimationConfig = {}
): Variants => {
  const { duration = 0.6, delay = 0, ease = [0.25, 0.1, 0.25, 1] } = config;

  const initial = {
    opacity: 0,
    ...(direction === 'up' && { y: '100%' }),
    ...(direction === 'down' && { y: '-100%' }),
    ...(direction === 'left' && { x: '-100%' }),
    ...(direction === 'right' && { x: '100%' }),
  };

  return {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween' as const,
        duration,
        delay,
        ease: ease as any, // Framer Motion accepts cubic bezier arrays
      },
    },
  };
};

/**
 * Creates a stagger container with custom timing
 */
export const createStaggerContainer = (
  staggerDelay = 0.1,
  delayChildren = 0.2
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/**
 * Creates a floating animation (useful for decorative elements)
 */
export const createFloatingAnimation = (
  distance = 10,
  duration = 3
) => ({
  y: [-distance, distance, -distance],
  transition: {
    duration,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
});

/**
 * Creates a rotation animation
 */
export const createRotationAnimation = (
  degrees = 360,
  duration = 20,
  reverse = false
) => ({
  rotate: reverse ? -degrees : degrees,
  transition: {
    duration,
    repeat: Infinity,
    ease: 'linear' as const,
  },
});

/**
 * Creates a pulse animation (scaling up and down)
 */
export const createPulseAnimation = (
  scale = 1.05,
  duration = 2
) => ({
  scale: [1, scale, 1],
  transition: {
    duration,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
});

/**
 * Utility to add delay to any transition
 */
export const withDelay = (transition: Transition, delay: number): Transition => ({
  ...transition,
  delay,
});

/**
 * Utility to add duration to any transition
 */
export const withDuration = (transition: Transition, duration: number): Transition => ({
  ...transition,
  duration,
});

// =============================================================================
// SCROLL ANIMATIONS
// =============================================================================

/**
 * Variants for elements that appear on scroll
 */
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Viewport configuration for scroll animations
 */
export const scrollViewport = {
  once: true, // Only animate once
  amount: 0.3, // Trigger when 30% of element is visible
};

// =============================================================================
// PAGE TRANSITION VARIANTS
// =============================================================================

export const pageTransition: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.4 },
  },
};

// =============================================================================
// PRESET COMBINATIONS
// =============================================================================

/**
 * A collection of commonly used animation presets
 */
export const animationPresets = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  scaleUp,
  staggerContainer,
  scrollReveal,
  pageTransition,
};

/**
 * Export a default animation set for quick access
 */
export default animationPresets;
