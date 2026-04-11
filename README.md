# Portfolio - Next.js App

A production-ready Next.js application with TypeScript, Tailwind CSS, and ESLint.

## Tech Stack

- **Framework:** Next.js 16.2.3 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint 9 + eslint-config-next
- **Formatting:** Prettier 3
- **Package Manager:** pnpm

## Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles with Tailwind
│   ├── components/       # Reusable React components
│   │   └── Button.tsx    # Example component
│   ├── lib/              # Utility functions and helpers
│   │   ├── utils.ts      # Class name utilities (cn)
│   │   ├── api.ts        # API helper functions
│   │   └── env.ts        # Environment variable config
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts      # Global types
│   └── styles/           # Additional stylesheets
├── public/               # Static assets
├── .env.local.example    # Environment variables template
├── .env.local            # Local environment variables (gitignored)
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
├── postcss.config.mjs    # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Copy environment variables:

```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your configuration

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm type-check   # Run TypeScript type checking
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
```

## Key Features

### Absolute Imports

Use `@/` prefix for imports:

```typescript
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { env } from "@/lib/env";
```

### Environment Variables

- Public variables: prefix with `NEXT_PUBLIC_`
- Server-only variables: no prefix
- See `.env.local.example` for available options

### Styling with Tailwind CSS

This project uses Tailwind CSS v4 with CSS-based configuration. The `cn()` utility function combines `clsx` and `tailwind-merge` for optimal class handling:

```typescript
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

### TypeScript Configuration

- Strict mode enabled
- Path aliases configured (`@/*` → `src/*`)
- Incremental builds for faster compilation

## Production Build

Build the application:

```bash
pnpm build
```

Start production server:

```bash
pnpm start
```

## Deployment

### Vercel (Recommended)

The easiest deployment option:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Other Platforms

This app can be deployed to any platform that supports Next.js:
- AWS Amplify
- Netlify
- Railway
- Render
- Self-hosted with Node.js

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

MIT

