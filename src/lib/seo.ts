/**
 * SEO Metadata Utilities
 * 
 * Generate dynamic metadata for pages and optimize for search engines
 */

import { siteConfig } from '@/config';
import type { BlogPost, Project } from '@/types/data';
import type { Metadata } from 'next';

// =============================================================================
// BASE METADATA
// =============================================================================

export function getBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [
      {
        name: siteConfig.author.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.author.name,
    applicationName: siteConfig.name,
    category: 'technology',

    // Open Graph
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      creator: '@yourusername', // Update with your Twitter handle
      images: [`${siteConfig.url}/og-image.jpg`],
    },

    // Verification
    verification: {
      google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },

    // Icons
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },

    // Manifest
    manifest: '/manifest.json',

    // Other
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// =============================================================================
// PROJECT PAGE METADATA
// =============================================================================

export function generateProjectMetadata(project: Project): Metadata {
  const title = `${project.title} - Project`;
  const description = project.longDescription || project.description;
  const imageUrl = project.image.startsWith('http')
    ? project.image
    : `${siteConfig.url}${project.image}`;

  return {
    title,
    description,
    keywords: [
      ...project.technologies,
      ...project.tags,
      project.category,
      'project',
      'portfolio',
    ],

    openGraph: {
      title,
      description,
      type: 'article',
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      publishedTime: project.createdAt,
      modifiedTime: project.updatedAt,
      authors: [siteConfig.author.name],
      tags: project.tags,
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

// =============================================================================
// BLOG POST METADATA
// =============================================================================

export function generateBlogMetadata(post: BlogPost): Metadata {
  const imageUrl = post.coverImage?.startsWith('http')
    ? post.coverImage
    : `${siteConfig.url}${post.coverImage}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : undefined,
      publishedTime: post.publishedAt,
      authors: [siteConfig.author.name],
      tags: post.tags,
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

// =============================================================================
// JSON-LD STRUCTURED DATA
// =============================================================================

/**
 * Generate JSON-LD structured data for better SEO
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    email: siteConfig.author.email,
    jobTitle: 'Full-Stack Developer',
    sameAs: [
      siteConfig.author.github,
      siteConfig.author.linkedin,
      siteConfig.author.twitter,
    ],
    knowsAbout: siteConfig.keywords,
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
  };
}

export function generateProjectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    image: project.image,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    keywords: [...project.technologies, ...project.tags].join(', '),
    dateCreated: project.createdAt,
    inLanguage: 'en-US',
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(path: string = ''): string {
  const url = siteConfig.url.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return cleanPath ? `${url}/${cleanPath}` : url;
}

/**
 * Truncate text for descriptions
 */
export function truncateText(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trimEnd() + '...';
}

/**
 * Generate page title
 */
export function generatePageTitle(title: string): string {
  return `${title} | ${siteConfig.name}`;
}
