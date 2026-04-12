'use client';

import {
  fadeInUp,
  scrollViewport,
  staggerContainer,
} from '@/lib/animations';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaLaptopCode,
  FaMobile,
  FaServer,
  FaTools
} from 'react-icons/fa';
import { SiFigma, SiGit, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from 'react-icons/si';

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3"
          >
            Skills
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-6" />

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-400 leading-relaxed"
          >
            A curated selection of my technical repertoire, focusing on clean architecture,
            performance, and exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Skills Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="space-y-8"
        >
          {/* Frontend & Backend + Tools Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Frontend & Backend */}
            <div className="lg:col-span-2 space-y-8">
              {/* Frontend Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaLaptopCode className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Frontend</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* React & Next.js Card */}
                  <SkillCard
                    icon={<SiReact className="w-5 h-5 text-cyan-400" />}
                    title="React & Next.js"
                    proficiency="EXPERT"
                    isExpert
                    hasArrow
                  />

                  {/* Tailwind CSS Card */}
                  <SkillCard
                    icon={<SiTailwindcss className="w-5 h-5 text-cyan-400" />}
                    title="Tailwind CSS"
                    proficiency="EXPERT"
                    isExpert
                    hasArrow
                  />
                </div>
              </div>

              {/* Backend Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaServer className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Backend</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Node.js / Go Card */}
                  <SkillCard
                    icon={<SiNodedotjs className="w-5 h-5 text-green-500" />}
                    title="Node.js / Go"
                    proficiency="ADVANCED"
                  />

                  {/* PostgreSQL / Redis Card */}
                  <SkillCard
                    icon={<SiPostgresql className="w-5 h-5 text-blue-400" />}
                    title="PostgreSQL / Redis"
                    proficiency="ADVANCED"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Tools */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <FaTools className="w-5 h-5 text-white" />
                <h3 className="text-lg font-semibold text-white">Tools</h3>
              </div>

              <div className="space-y-4">
                {/* Git & CI/CD Card */}
                <SkillCard
                  icon={<SiGit className="w-5 h-5 text-orange-500" />}
                  title="Git & CI/CD"
                  description="Workflow automation & versioning"
                  proficiency="ADVANCED"
                />

                {/* Figma Card */}
                <SkillCard
                  icon={<SiFigma className="w-5 h-5 text-purple-400" />}
                  title="Figma"
                  description="UI/UX prototyping"
                  proficiency="EXPERT"
                  isExpert
                />
              </div>
            </div>
          </div>

          {/* Mobile Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaMobile className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Mobile</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* React Native Card - Takes 1 column */}
              <div className="lg:col-span-1">
                <motion.div
                  whileHover={{ y: -4 }}
                  className={cn(
                    'group relative h-full min-h-[300px]',
                    'bg-gradient-to-br from-white/10 to-white/5 rounded-2xl',
                    'border border-white/20 backdrop-blur-xl',
                    'hover:border-purple-500/30',
                    'transition-all duration-300',
                    'p-6 flex flex-col'
                  )}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <SiReact className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-xl font-bold text-white mb-2">
                      React Native
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Cross-platform performance optimization
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold uppercase tracking-wider">
                      EXPERT
                    </span>
                  </div>

                  {/* Phone mockup at bottom */}
                  <div className="absolute bottom-0 right-4 w-20 h-32 opacity-20">
                    <div className="w-full h-full rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-600" />
                  </div>
                </motion.div>
              </div>

              {/* Native Performance Card - Takes 2 columns */}
              <div className="lg:col-span-2">
                <motion.div
                  whileHover={{ y: -4 }}
                  className={cn(
                    'group relative h-full min-h-[300px]',
                    'bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden',
                    'border border-white/20 backdrop-blur-xl',
                    'hover:border-purple-500/30',
                    'transition-all duration-300'
                  )}
                >
                  {/* Speed Lines Background */}
                  <div className="absolute inset-0 opacity-40">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          90deg,
                          transparent,
                          transparent 2px,
                          rgba(139, 92, 246, 0.1) 2px,
                          rgba(139, 92, 246, 0.1) 4px
                        ), repeating-linear-gradient(
                          0deg,
                          transparent,
                          transparent 40px,
                          rgba(139, 92, 246, 0.05) 40px,
                          rgba(139, 92, 246, 0.05) 42px
                        )`
                      }}
                    />
                    {/* Perspective speed lines */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent"
                          style={{
                            top: `${20 + i * 4}%`,
                            left: `${i * 2}%`,
                            right: `${100 - i * 3}%`,
                            transform: `perspective(500px) rotateX(45deg)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Native Performance
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg">
                      Expertise in bridging native modules and optimizing bridge traffic for seamless high-refresh animations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white font-medium uppercase tracking-wider">
                        SWIFT
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white font-medium uppercase tracking-wider">
                        KOTLIN
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skill Card Component
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  proficiency: 'EXPERT' | 'ADVANCED';
  isExpert?: boolean;
  hasArrow?: boolean;
}

function SkillCard({ icon, title, description, proficiency, isExpert, hasArrow }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        'group relative',
        'bg-gradient-to-br from-white/10 to-white/5 rounded-xl',
        'border border-white/20 backdrop-blur-xl',
        'hover:border-purple-500/30',
        'transition-all duration-300',
        'p-6'
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          {icon}
        </div>

        {hasArrow && (
          <FaArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
        )}
      </div>

      <h4 className="text-base font-semibold text-white mb-1">
        {title}
      </h4>

      {description && (
        <p className="text-sm text-gray-400 mb-3">
          {description}
        </p>
      )}

      <span
        className={cn(
          'inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
          isExpert
            ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30'
            : 'bg-white/5 text-gray-400 border border-white/10'
        )}
      >
        {proficiency}
      </span>
    </motion.div>
  );
}
