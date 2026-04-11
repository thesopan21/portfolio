import { useEffect, useState } from "react";

/**
 * Track scroll progress (0-100)
 * @returns Scroll progress percentage
 */
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
}
