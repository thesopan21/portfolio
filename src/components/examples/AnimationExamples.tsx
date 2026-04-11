/**
 * Animation System Usage Examples
 * 
 * This file demonstrates how to use the reusable animation utilities
 * across different components and scenarios.
 */

'use client';

import { motion } from 'framer-motion';
import {
  // Pre-built variants
  fadeInUp,
  fadeInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  scrollReveal,
  scrollViewport,
  
  // Utility functions
  createFadeVariant,
  createSlideVariant,
  createStaggerContainer,
  createFloatingAnimation,
  createPulseAnimation,
  
  // Interaction animations
  hoverScale,
  tapScale,
  hoverLift,
  
  // Transitions
  transitions,
} from '@/lib/animations';

// =============================================================================
// EXAMPLE 1: Basic Fade In Animation
// =============================================================================

export function ExampleBasicFade() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="p-4 bg-surface rounded-lg"
    >
      <h2>This element fades in from below</h2>
    </motion.div>
  );
}

// =============================================================================
// EXAMPLE 2: Staggered List Animation
// =============================================================================

export function ExampleStaggeredList() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={fadeInUp}
          className="p-4 bg-surface rounded-lg"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

// =============================================================================
// EXAMPLE 3: Custom Stagger Container with Faster Timing
// =============================================================================

export function ExampleCustomStagger() {
  const cards = ['Card 1', 'Card 2', 'Card 3'];

  return (
    <motion.div
      variants={createStaggerContainer(0.05, 0.1)} // Fast stagger
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 gap-4"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={scaleIn}
          className="p-6 bg-surface rounded-lg"
        >
          {card}
        </motion.div>
      ))}
    </motion.div>
  );
}

// =============================================================================
// EXAMPLE 4: Interactive Button with Hover/Tap
// =============================================================================

export function ExampleInteractiveButton() {
  return (
    <motion.button
      whileHover={hoverScale}
      whileTap={tapScale}
      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg"
    >
      Click Me
    </motion.button>
  );
}

// =============================================================================
// EXAMPLE 5: Card with Hover Lift Effect
// =============================================================================

export function ExampleHoverCard() {
  return (
    <motion.div
      whileHover={hoverLift}
      className="p-6 bg-surface rounded-lg shadow-md cursor-pointer"
    >
      <h3>Hover over me</h3>
      <p>I lift up on hover!</p>
    </motion.div>
  );
}

// =============================================================================
// EXAMPLE 6: Scroll-Triggered Animation
// =============================================================================

export function ExampleScrollReveal() {
  return (
    <motion.section
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="py-20"
    >
      <h2>This section animates when scrolled into view</h2>
      <p>It only animates once!</p>
    </motion.section>
  );
}

// =============================================================================
// EXAMPLE 7: Custom Fade Direction with Config
// =============================================================================

export function ExampleCustomFade() {
  return (
    <div className="space-y-4">
      {/* Fade from left with custom timing */}
      <motion.div
        variants={createFadeVariant('left', { duration: 0.8, delay: 0.2 })}
        initial="hidden"
        animate="visible"
        className="p-4 bg-surface rounded-lg"
      >
        Slides in from left with custom timing
      </motion.div>

      {/* Fade from right */}
      <motion.div
        variants={createFadeVariant('right')}
        initial="hidden"
        animate="visible"
        className="p-4 bg-surface rounded-lg"
      >
        Slides in from right
      </motion.div>
    </div>
  );
}

// =============================================================================
// EXAMPLE 8: Floating Decorative Element
// =============================================================================

export function ExampleFloatingElement() {
  return (
    <div className="relative h-64">
      <motion.div
        animate={createFloatingAnimation(20, 4)}
        className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
      />
      <motion.div
        animate={createFloatingAnimation(15, 3)}
        className="absolute bottom-10 right-10 w-16 h-16 bg-accent/20 rounded-full blur-xl"
      />
    </div>
  );
}

// =============================================================================
// EXAMPLE 9: Pulsing Icon/Badge
// =============================================================================

export function ExamplePulsingBadge() {
  return (
    <motion.div
      animate={createPulseAnimation(1.1, 2)}
      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
    >
      <span className="text-primary-foreground font-bold">!</span>
    </motion.div>
  );
}

// =============================================================================
// EXAMPLE 10: Complex Card with Multiple Animations
// =============================================================================

export function ExampleComplexCard() {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      whileHover={hoverLift}
      className="p-6 bg-surface rounded-lg shadow-md cursor-pointer"
    >
      <motion.h3
        variants={fadeInUp}
        className="text-xl font-bold mb-2"
      >
        Card Title
      </motion.h3>
      
      <motion.p
        variants={fadeInUp}
        className="text-muted-foreground mb-4"
      >
        This card combines scroll reveal, hover lift, and staggered content animations.
      </motion.p>
      
      <motion.button
        whileHover={hoverScale}
        whileTap={tapScale}
        className="px-4 py-2 bg-primary text-primary-foreground rounded"
      >
        Learn More
      </motion.button>
    </motion.article>
  );
}

// =============================================================================
// EXAMPLE 11: Slide-in Navigation Menu
// =============================================================================

export function ExampleSlideMenu({ isOpen }: { isOpen: boolean }) {
  const menuItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <motion.nav
      variants={createSlideVariant('left')}
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      className="fixed top-0 left-0 h-full w-64 bg-surface shadow-xl"
    >
      <motion.ul
        variants={createStaggerContainer(0.05, 0.2)}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="p-8 space-y-4"
      >
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            variants={fadeInLeft}
            className="p-2 hover:bg-surface-hover rounded cursor-pointer"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

// =============================================================================
// EXAMPLE 12: Full Section with Staggered Content
// =============================================================================

export function ExampleFullSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="py-20 space-y-8"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-4xl font-bold text-center"
      >
        Section Title
      </motion.h2>
      
      <motion.p
        variants={fadeInUp}
        className="text-center text-muted-foreground max-w-2xl mx-auto"
      >
        This entire section uses a stagger container to animate children sequentially.
      </motion.p>
      
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-3 gap-6 mt-8"
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            whileHover={hoverScale}
            className="p-6 bg-surface rounded-lg shadow-md"
          >
            Feature {i}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

// =============================================================================
// USAGE PATTERNS SUMMARY
// =============================================================================

/**
 * PATTERN 1: Simple fade-in on mount
 * variants={fadeInUp}
 * initial="hidden"
 * animate="visible"
 * 
 * PATTERN 2: Scroll-triggered animation
 * variants={scrollReveal}
 * initial="hidden"
 * whileInView="visible"
 * viewport={scrollViewport}
 * 
 * PATTERN 3: Staggered children
 * Parent: variants={staggerContainer} initial="hidden" animate="visible"
 * Children: variants={fadeInUp}
 * 
 * PATTERN 4: Interactive element
 * whileHover={hoverScale}
 * whileTap={tapScale}
 * 
 * PATTERN 5: Continuous animation (floating, pulsing)
 * animate={createFloatingAnimation(distance, duration)}
 * OR
 * animate={createPulseAnimation(scale, duration)}
 * 
 * PATTERN 6: Custom animations
 * variants={createFadeVariant('direction', { duration, delay })}
 * variants={createSlideVariant('direction', { duration, delay })}
 */
