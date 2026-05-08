import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const fullName = 'Sopan Bhere';
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseTime = 1000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < fullName.length) {
          setDisplayText(fullName.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setDisplayText(fullName.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Start typing again
          setTimeout(() => setIsDeleting(false), pauseTime);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, fullName]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-t from-amber-200/30 via-transparent to-amber-100/20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl mb-6">
          Hi, I'm{' '}
          <span className="font-bold">
            <span className="bg-gradient-to-l from-amber-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              {displayText}
            </span>
            {displayText.length > 0 && (
              <span className="text-black animate-pulse">|</span>
            )}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          React Native Developer building high-performance, scalable cross-platform mobile applications with expertise in TypeScript and Redux Toolkit.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-3.5 bg-gradient-to-br from-amber-900/40 via-amber-800/30 to-amber-900/40  rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(251,191,36,0.3)] backdrop-blur-sm border border-amber-700/30 shadow-[inset_0_1px_0_0_rgba(251,191,36,0.1)]"
          >
            <span className="relative z-10 drop-shadow-sm text-white">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/50 via-amber-600/40 to-amber-700/50 opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)]"></div>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="relative px-8 py-3.5 bg-gradient-to-br from-slate-700/40 via-slate-600/30 to-slate-700/40 rounded-xl overflow-hidden backdrop-blur-xs border border-amber-700/20 hover:border-amber-600/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(251,191,36,0.2)] shadow-[inset_0_1px_0_0_rgba(251,191,36,0.08)]"
          >
            <span className="relative z-10 drop-shadow-sm text-black">Get In Touch</span>
            <div className="absolute inset-0 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]"></div>
          </button>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 animate-bounce p-3 rounded-full bg-gradient-to-br from-yellow-500 via-amber-600 to-yellow-500 text-white shadow-lg shadow-amber-500/40 hover:shadow-xl hover:shadow-amber-500/60 hover:scale-110 transition-all duration-300 ring-2 ring-amber-400/30"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} className="drop-shadow-md" />
      </button>
    </section>
  );
}
