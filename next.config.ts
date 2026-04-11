import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // =========================================================================
  // PERFORMANCE OPTIMIZATIONS
  // =========================================================================

  // Enable React Compiler for automatic memoization (Next.js 15+)
  // Requires: pnpm add babel-plugin-react-compiler
  // reactCompiler: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Remote patterns for external images (if needed)
    remotePatterns: [
      // Add domains for external images
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },

  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },

  // Experimental features for better performance
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: [
      "framer-motion",
      "react-icons",
      "@radix-ui/react-icons",
    ],

    // Use SWC minifier (faster than Terser)
    // swcMinify: true, // Default in Next.js 13+
  },

  // Bundle analyzer (disabled by default)
  // Uncomment to analyze bundle size
  // To use: ANALYZE=true pnpm build
  ...(process.env.ANALYZE === "true" && {
    webpack: (config: any, { isServer }: any) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "./analyze.html",
            openAnalyzer: true,
          })
        );
      }
      return config;
    },
  }),

  // =========================================================================
  // SEO & HEADERS
  // =========================================================================

  // Security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Cache static assets
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // =========================================================================
  // PRODUCTION OPTIMIZATIONS
  // =========================================================================

  // Enable production source maps (for debugging, but increases build time)
  productionBrowserSourceMaps: false,

  // Disable powered by header
  poweredByHeader: false,

  // Compress output
  compress: true,

  // Generate ETags for better caching
  generateEtags: true,

  // =========================================================================
  // TYPE CHECKING
  // =========================================================================

  // TypeScript during build
  typescript: {
    // Set to true to skip type checking during build (not recommended)
    ignoreBuildErrors: false,
  },

  // Note: ESLint configuration is no longer supported in next.config.ts
  // Run ESLint separately: pnpm lint
};

export default nextConfig;
