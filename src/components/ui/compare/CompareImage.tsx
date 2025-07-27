import React from "react";
import { cn } from "@/lib/utils";

interface CompareImageProps {
  src: string;
  alt: string;
  className?: string;
  clipPath?: string;
  isOverlay?: boolean;
}

/**
 * Individual image component for the compare slider
 * Handles image rendering with optional clipping for overlay effect
 */
export const CompareImage: React.FC<CompareImageProps> = ({
  src,
  alt,
  className,
  clipPath,
  isOverlay = false,
}) => {
  const containerClasses = cn(
    "w-full h-full",
    isOverlay && "absolute top-0 left-0 overflow-hidden"
  );

  const imageClasses = cn("w-full h-full object-cover", className);

  const containerStyle = clipPath ? { clipPath } : undefined;

  return (
    <div className={containerClasses} style={containerStyle}>
      <img
        src={src}
        alt={alt}
        className={imageClasses}
      />
    </div>
  );
};