'use client';

import {
  fadeInUp,
  scrollViewport,
  staggerContainer,
} from '@/lib/animations';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FaChartLine, FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa';

interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
  current?: boolean;
}

const journeyData: JourneyMilestone[] = [
  {
    year: '2018',
    title: 'Started Coding',
    description: 'First lines of Python, discovering the logic of the web. Understanding how syntax translates to systemic solutions.',
    icon: <FaCode className="w-4 h-4" />,
  },
  {
    year: '2019',
    title: 'Built First App',
    description: 'A weather dashboard using JavaScript and public APIs. The moment asynchronous programming clicked and interfaces became dynamic.',
    icon: <FaRocket className="w-4 h-4" />,
  },
  {
    year: '2020',
    title: 'Learned React Native',
    description: 'Transitioned to mobile development, fascinated by cross-platform power. Exploring the intersection of DX and high-performance native bridges.',
    icon: <FaMobileAlt className="w-4 h-4" />,
  },
  {
    year: '2022 - PRESENT',
    title: 'Built Advanced Projects',
    description: 'Scaling complex Fintech and Social applications. Focused on architectural integrity, micro-frontends, and high-concurrency cloud environments.',
    icon: <FaChartLine className="w-4 h-4" />,
    tags: ['FINTECH', 'SOCIAL', 'ARCHITECTURE'],
    current: true,
  },
];

export function Journey() {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 max-w-5xl">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 mb-6">
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none"
            >
              <span className="text-white">My</span>
              <br className="md:hidden" />
              <span className="md:ml-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Journey
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-gray-400 mt-4 md:mt-0 md:max-w-md"
            >
              An editorial log of technical evolution, scaling from script to system architecture.
            </motion.p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="relative"
        >
          {/* Timeline vertical line - on the left side */}
          <div className="absolute left-[13px] md:left-[25px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0" />

          {/* Milestones */}
          <div className="space-y-8 md:space-y-12">
            {journeyData.map((milestone, index) => {
              // Alternate between left and right on desktop
              const isOnLeft = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  className="relative flex items-start gap-6 md:gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative flex-shrink-0 mt-2">
                    <div className={cn(
                      "w-7 h-7 md:w-12 md:h-12 rounded-full border-2 bg-[#0a0a0f] flex items-center justify-center z-10",
                      milestone.current
                        ? "border-purple-500 shadow-lg shadow-purple-500/30"
                        : "border-purple-500/30"
                    )}>
                      {milestone.current && (
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500 animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Card - positioned based on index */}
                  <div className={cn(
                    "flex-1",
                    isOnLeft ? "md:mr-auto md:max-w-md" : "md:ml-auto md:max-w-md"
                  )}>
                    <MilestoneCard milestone={milestone} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Milestone Card Component
interface MilestoneCardProps {
  milestone: JourneyMilestone;
}

function MilestoneCard({ milestone }: MilestoneCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        'group relative w-full',
        'bg-gradient-to-br from-white/10 to-white/5 rounded-2xl',
        'border border-white/20 backdrop-blur-xl',
        'hover:border-purple-500/30',
        'transition-all duration-300',
        'p-6'
      )}
    >
      {/* Header - Year and Icon */}
      <div className="flex items-center justify-between mb-4">
        {/* Year Badge */}
        <div className={cn(
          "px-3 py-1.5 rounded-lg text-xs font-mono font-medium uppercase tracking-wider",
          "bg-white/5 text-gray-400 border border-white/10"
        )}>
          {milestone.year}
        </div>

        {/* Icon */}
        <div className={cn(
          "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
          milestone.current
            ? "bg-purple-500/20 text-purple-400"
            : "bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-gray-400"
        )}>
          {milestone.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
        {milestone.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed">
        {milestone.description}
      </p>

      {/* Tags */}
      {milestone.tags && milestone.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {milestone.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400 font-medium uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}
