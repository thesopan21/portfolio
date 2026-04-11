"use client";

import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <div
      className={cn("animate-fade-in", className)}
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}
