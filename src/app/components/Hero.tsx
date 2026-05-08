import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl mb-6">
          Hi, I'm <span className="text-muted-foreground">Sopan Bhere</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          React Native Developer building high-performance, scalable cross-platform mobile applications with expertise in TypeScript and Redux Toolkit.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
