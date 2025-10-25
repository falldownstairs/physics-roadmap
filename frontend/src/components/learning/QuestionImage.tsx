'use client';

import { useState } from 'react';

interface QuestionImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function QuestionImage({ src, alt, className = '' }: QuestionImageProps) {
  const [loadError, setLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log('[QuestionImage] Rendering image:', { src, alt });

  const handleLoad = () => {
    console.log('[QuestionImage] Image loaded successfully:', src);
    setIsLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('[QuestionImage] Image failed to load:', {
      src,
      error: e,
      naturalWidth: (e.target as HTMLImageElement).naturalWidth,
      naturalHeight: (e.target as HTMLImageElement).naturalHeight
    });
    setLoadError(true);
    setIsLoading(false);
  };

  if (loadError) {
    return (
      <div className={`bg-red-50 border-2 border-red-200 rounded-lg p-4 ${className}`}>
        <p className="text-red-600 text-sm font-medium">Failed to load image</p>
        <p className="text-red-500 text-xs mt-1 font-mono break-all">{src}</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`rounded-lg transition-opacity duration-200 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}