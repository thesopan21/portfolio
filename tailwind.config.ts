import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * 
 * This configuration extends the default Tailwind theme with custom design tokens.
 * Most theme configuration is done via CSS variables in globals.css for better
 * dark mode support and runtime theming capabilities.
 * 
 * @see https://tailwindcss.com/docs/configuration
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], // Enable dark mode with class strategy
  theme: {
    extend: {
      // Custom color palette
      colors: {
        // Using CSS variables for dynamic theming
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        border: "var(--border)",

        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          950: "var(--color-primary-950)",
          DEFAULT: "var(--color-primary-600)",
        },

        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
          950: "var(--color-neutral-950)",
        },

        accent: {
          purple: "var(--color-accent-purple)",
          pink: "var(--color-accent-pink)",
          orange: "var(--color-accent-orange)",
          green: "var(--color-accent-green)",
          cyan: "var(--color-accent-cyan)",
        },

        // Semantic colors
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },

      // Custom font family
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },

      // Custom font sizes
      fontSize: {
        xs: ["var(--text-xs)", { lineHeight: "1.5" }],
        sm: ["var(--text-sm)", { lineHeight: "1.5" }],
        base: ["var(--text-base)", { lineHeight: "1.5" }],
        lg: ["var(--text-lg)", { lineHeight: "1.5" }],
        xl: ["var(--text-xl)", { lineHeight: "1.4" }],
        "2xl": ["var(--text-2xl)", { lineHeight: "1.3" }],
        "3xl": ["var(--text-3xl)", { lineHeight: "1.2" }],
        "4xl": ["var(--text-4xl)", { lineHeight: "1.1" }],
        "5xl": ["var(--text-5xl)", { lineHeight: "1" }],
        "6xl": ["var(--text-6xl)", { lineHeight: "1" }],
        "7xl": ["var(--text-7xl)", { lineHeight: "1" }],
      },

      // Custom spacing scale
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
      },

      // Custom border radius
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },

      // Custom box shadows
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-md)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },

      // Custom transitions
      transitionDuration: {
        fast: "150ms",
        base: "300ms",
        slow: "500ms",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // Custom z-index scale
      zIndex: {
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        "modal-backdrop": "1040",
        modal: "1050",
        popover: "1060",
        tooltip: "1070",
      },

      // Animation keyframes
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "slide-in-up": "slide-in-up 0.3s ease-out",
        "slide-in-down": "slide-in-down 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      // Custom container settings
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },

      // Custom breakpoints (if needed beyond defaults)
      screens: {
        xs: "475px",
        // ...default breakpoints (sm, md, lg, xl, 2xl)
      },

      // Typography plugin configuration
      typography: {
        DEFAULT: {
          css: {
            color: "var(--text-primary)",
            a: {
              color: "var(--link)",
              "&:hover": {
                color: "var(--link-hover)",
              },
            },
            strong: {
              color: "var(--text-primary)",
            },
            h1: {
              color: "var(--text-primary)",
            },
            h2: {
              color: "var(--text-primary)",
            },
            h3: {
              color: "var(--text-primary)",
            },
            h4: {
              color: "var(--text-primary)",
            },
            code: {
              color: "var(--text-primary)",
            },
            blockquote: {
              color: "var(--text-secondary)",
              borderLeftColor: "var(--border)",
            },
          },
        },
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here as needed
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
