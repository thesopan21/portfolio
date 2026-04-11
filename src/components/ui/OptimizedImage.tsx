/**
 * Optimized Image Component
 * 
 * A wrapper around next/image with performance best practices:
 * - Automatic blur placeholder
 * - Responsive sizes
 * - Priority loading for above-the-fold images
 * - Lazy loading for below-the-fold images
 */

'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  blurDataURL?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  containerClassName,
  objectFit = 'cover',
  quality = 90,
  sizes,
  onLoad,
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Default responsive sizes if not provided
  const defaultSizes = fill
    ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    : undefined;

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes || defaultSizes}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg grayscale' : 'scale-100 blur-0 grayscale-0',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          className
        )}
        onLoad={() => {
          setIsLoading(false);
          onLoad?.();
        }}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
      />

      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  );
}

/**
 * Image with automatic aspect ratio container
 */
interface AspectImageProps extends Omit<OptimizedImageProps, 'fill'> {
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | number;
}

export function AspectImage({
  aspectRatio = 'video',
  containerClassName,
  ...props
}: AspectImageProps) {
  const aspectRatioClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  }[aspectRatio as string];

  const customAspectStyle =
    typeof aspectRatio === 'number'
      ? { aspectRatio: aspectRatio.toString() }
      : undefined;

  return (
    <div
      className={cn(aspectRatioClass, 'relative', containerClassName)}
      style={customAspectStyle}
    >
      <OptimizedImage {...props} fill />
    </div>
  );
}

/**
 * Avatar/Profile Image Component
 */
interface AvatarImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
}

export function AvatarImage({
  src,
  alt,
  size = 'md',
  className,
  priority = false,
}: AvatarImageProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  const sizePx = {
    sm: 40,
    md: 64,
    lg: 96,
    xl: 128,
  };

  return (
    <div className={cn('relative rounded-full overflow-hidden', sizeClasses[size], className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        width={sizePx[size]}
        height={sizePx[size]}
        priority={priority}
        objectFit="cover"
      />
    </div>
  );
}

/**
 * Generate blur placeholder using shimmer technique
 */
export function getBlurDataURL(width: number = 10, height: number = 10): string {
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
}
