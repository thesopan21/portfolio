/**
 * Web Vitals Monitoring
 * 
 * Track Core Web Vitals and send to analytics
 */

'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { useEffect } from 'react';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals]', metric);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }

      // Example: Send to custom analytics
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          id: metric.id,
          rating: metric.rating,
        }),
      }).catch((error) => {
        console.error('Failed to send web vitals:', error);
      });
    }
  });

  // Track custom performance metrics
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      // Time to First Byte (TTFB)
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        console.log(`TTFB: ${Math.round(ttfb)}ms`);
      }

      // First Paint (FP)
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach((entry) => {
        console.log(`${entry.name}: ${Math.round(entry.startTime)}ms`);
      });
    }
  }, []);

  return null;
}

// TypeScript declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Performance Budget Checker
 * Warns if metrics exceed thresholds
 */
export function checkPerformanceBudget(metric: any) {
  const budgets = {
    LCP: 2500, // Largest Contentful Paint < 2.5s
    FID: 100,  // First Input Delay < 100ms
    CLS: 0.1,  // Cumulative Layout Shift < 0.1
    FCP: 1800, // First Contentful Paint < 1.8s
    TTFB: 600, // Time to First Byte < 600ms
  };

  const threshold = budgets[metric.name as keyof typeof budgets];
  if (threshold && metric.value > threshold) {
    console.warn(
      `⚠️ Performance budget exceeded for ${metric.name}:`,
      `${metric.value} > ${threshold}`
    );
  }
}
