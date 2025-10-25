'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PLACEHOLDER_IMAGE } from '../utils/images';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width = 1200,
  height = 800,
  priority = false,
  className = '',
  fill = false,
}: OptimizedImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">Image unavailable</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        quality={85}
        placeholder="blur"
        blurDataURL={PLACEHOLDER_IMAGE}
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={85}
      placeholder="blur"
      blurDataURL={PLACEHOLDER_IMAGE}
      onError={() => setError(true)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
