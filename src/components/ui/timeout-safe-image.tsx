"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TimeoutConfig } from "@/lib/timeout-config";

interface TimeoutSafeImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  timeout?: number;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoadError?: () => void;
}

export function TimeoutSafeImage({
  src,
  alt,
  fallbackSrc = "/placeholder-image.jpg",
  timeout = TimeoutConfig.IMAGE_LOAD_TIMEOUT,
  className = "",
  width,
  height,
  priority = false,
  onLoadError,
}: TimeoutSafeImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setImageSrc(src);

    // Set timeout for image loading
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.warn(`Image loading timeout for: ${src}`);
        setImageSrc(fallbackSrc);
        setHasError(true);
        setIsLoading(false);
        onLoadError?.();
      }
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [src, fallbackSrc, timeout, isLoading, onLoadError]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    if (!hasError) {
      console.warn(
        `Failed to load image: ${imageSrc}, falling back to: ${fallbackSrc}`,
      );
      setImageSrc(fallbackSrc);
      setHasError(true);
      onLoadError?.();
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {width && height ? (
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          unoptimized={hasError} // Don't optimize fallback images
        />
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
}
