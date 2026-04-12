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
import { HiArrowNarrowRight } from 'react-icons/hi';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl"
          animate={createFloatingAnimation(30, 15)}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl"
          animate={createFloatingAnimation(30, 12)}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="container relative z-10 px-4 md:px-6 py-20 md:py-32"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Available Badge */}
            <motion.div variants={createFadeVariant('up')}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs font-medium text-purple-300 tracking-wider uppercase">
                  Available for Projects
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={createFadeVariant('up')} className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">I'm {siteConfig.author.name.split(' ')[0]}.</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  React Native Developer
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                Building scalable, high-performance mobile apps with intentional restraint and architectural precision.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={createFadeVariant('up')}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/#projects">
                <motion.button
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className={cn(
                    'px-8 py-3 rounded-lg font-medium',
                    'bg-gradient-to-r from-purple-500 to-pink-500',
                    'text-white',
                    'shadow-lg shadow-purple-500/25',
                    'hover:shadow-xl hover:shadow-purple-500/40',
                    'transition-all duration-300',
                    'flex items-center gap-2'
                  )}
                >
                  View Projects
                  <HiArrowNarrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className={cn(
                    'px-8 py-3 rounded-lg font-medium',
                    'bg-white/5 border border-white/10',
                    'text-white backdrop-blur-sm',
                    'hover:bg-white/10 hover:border-white/20',
                    'transition-all duration-300',
                    'flex items-center gap-2'
                  )}
                >
                  Download Resume
                  <HiArrowNarrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Expertise Icons */}
            <motion.div variants={createFadeVariant('up')} className="pt-8">
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mr-4">
                  Expertise
                </span>
                <div className="flex items-center gap-3">
                  {/* React Icon */}
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="2" />
                      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
                      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
                    </svg>
                  </div>
                  {/* Mobile Icon */}
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12" y2="18" />
                    </svg>
                  </div>
                  {/* Lightning Icon */}
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                    </svg>
                  </div>
                  {/* Code Icon */}
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - 3D Mockup */}
          <motion.div
            variants={createFadeVariant('right')}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Glassmorphic Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl overflow-hidden p-8 shadow-2xl">
                {/* Card Header Dots */}
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>

                {/* Phone Mockup Frame */}
                <div className="mt-8 relative w-64 mx-auto">
                  <div className="relative rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl border border-gray-700">
                    {/* Screen */}
                    <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[9/19]">
                      {/* Placeholder for character illustration */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <svg className="w-24 h-24 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Badge */}
                  <div className="absolute -bottom-6 -right-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl px-4 py-2 shadow-lg">
                      <div className="text-xs text-purple-100 font-medium mb-1">PERFORMANCE METRICS</div>
                      <div className="text-2xl font-bold text-white">99.5% <span className="text-sm font-normal">uptime</span></div>
                    </div>
                  </div>
                </div>

                {/* Floating Icon */}
                <motion.div
                  className="absolute top-16 right-12 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Crafted Experiences */}
        <motion.div
          variants={createFadeVariant('up')}
          className="mt-20 md:mt-32"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-md">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                Crafted Experiences
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Selected mobile applications focusing on seamless interaction and robust engineering.
              </p>
            </div>
            <Link href="/#projects">
              <motion.button
                whileHover={hoverScale}
                className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors group"
              >
                <span className="font-medium">Explore Portfolio</span>
                <HiArrowNarrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={createFadeVariant('up')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={createFloatingAnimation(10, 2)}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors cursor-pointer"
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
    </section>
  );
}
