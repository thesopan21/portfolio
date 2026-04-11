'use client';

import { siteConfig } from '@/config';
import {
  createFadeVariant,
  createFloatingAnimation,
  hoverScale,
  staggerContainer,
  tapScale,
} from '@/lib/animations';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"
          animate={createFloatingAnimation(30, 15)}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl"
          animate={createFloatingAnimation(30, 12)}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="container relative z-10 px-4 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Name with fade in */}
          <motion.div variants={createFadeVariant('up')}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {siteConfig.author.name}
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={createFadeVariant('up')}>
            <p className="text-2xl md:text-4xl font-semibold text-foreground/90">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={createFadeVariant('up')}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting elegant solutions to complex problems. Building scalable
              applications with modern technologies and best practices.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={createFadeVariant('up')}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link href="/#projects">
              <motion.button
                whileHover={hoverScale}
                whileTap={tapScale}
                className={cn(
                  'px-8 py-3 rounded-lg font-medium',
                  'bg-primary text-primary-foreground',
                  'shadow-lg shadow-primary/25',
                  'hover:shadow-xl hover:shadow-primary/30',
                  'transition-shadow duration-300'
                )}
              >
                View Projects
              </motion.button>
            </Link>

            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={hoverScale}
                whileTap={tapScale}
                className={cn(
                  'px-8 py-3 rounded-lg font-medium',
                  'bg-surface border-2 border-border',
                  'text-foreground',
                  'hover:border-primary/50 hover:bg-surface-hover',
                  'transition-colors duration-300'
                )}
              >
                Download Resume
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={createFadeVariant('up')} className="pt-12">
            <motion.div
              animate={createFloatingAnimation(10, 2)}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
