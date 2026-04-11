import { RefObject, useEffect, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

/**
 * Detect when an element is visible in viewport
 * @param ref - React ref to the element
 * @param options - IntersectionObserver options
 * @returns Whether element is intersecting
 */
export default function useIntersectionObserver(
  ref: RefObject<Element>,
  options: UseIntersectionObserverOptions = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}
