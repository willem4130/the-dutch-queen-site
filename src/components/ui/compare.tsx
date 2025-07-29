"use client";

import React, { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface CompareProps {
  firstImage: string;
  secondImage: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  className?: string;
  slideMode?: "hover" | "click";
  onSliderMove?: (position: number) => void;
}

export const Compare: React.FC<CompareProps> = ({
  firstImage,
  secondImage,
  firstImageClassName,
  secondImageClassname,
  className,
  slideMode = "hover",
  onSliderMove,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate zoom scale based on slider position
  const getZoomScale = (imageType: 'first' | 'second') => {
    const baseScale = 1;
    const maxZoom = 1.05;
    const zoomRange = maxZoom - baseScale;
    
    if (imageType === 'first') {
      // First image (left) zooms when slider is more to the left
      const visibility = (100 - sliderPosition) / 100;
      return baseScale + (visibility * zoomRange);
    } else {
      // Second image (right) zooms when slider is more to the right
      const visibility = sliderPosition / 100;
      return baseScale + (visibility * zoomRange);
    }
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      
      if (slideMode === "click" && !isDragging) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      const clampedPercentage = Math.max(0, Math.min(100, percentage));
      
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setSliderPosition(clampedPercentage);
        onSliderMove?.(clampedPercentage);
      });
    },
    [slideMode, isDragging, onSliderMove]
  );

  const handleMouseDown = useCallback(() => {
    if (slideMode === "click") {
      setIsDragging(true);
    }
  }, [slideMode]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
    if (slideMode === "hover") {
      setSliderPosition(50);
    }
  }, [slideMode]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-lg cursor-col-resize",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* First Image */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={firstImage}
          alt="First comparison"
          className={cn("w-full h-full object-cover transition-transform duration-500 ease-out", firstImageClassName)}
          style={{ 
            transform: `scale(${getZoomScale('first')})`,
            transformOrigin: 'center center'
          }}
        />
      </div>

      {/* Second Image */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={secondImage}
          alt="Second comparison"
          className={cn("w-full h-full object-cover transition-transform duration-500 ease-out", secondImageClassname)}
          style={{ 
            transform: `scale(${getZoomScale('second')})`,
            transformOrigin: 'center center'
          }}
        />
      </div>


      {/* Enhanced Labels with 2025 Design Trends */}
      <div className="absolute bottom-6 left-6 group">
        <div className="relative bg-gradient-to-r from-yellow-400/20 to-red-600/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl text-lg font-bold tracking-wide transition-all duration-500 transform group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-yellow-400/30 group-hover:to-red-600/30 group-hover:shadow-lg group-hover:shadow-yellow-400/25">
          <span className="relative z-10 drop-shadow-lg">Full Band</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-red-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
        </div>
        <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-red-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-6 right-6 group">
        <div className="relative bg-gradient-to-l from-yellow-400/20 to-red-600/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl text-lg font-bold tracking-wide transition-all duration-500 transform group-hover:scale-110 group-hover:bg-gradient-to-l group-hover:from-yellow-400/30 group-hover:to-red-600/30 group-hover:shadow-lg group-hover:shadow-yellow-400/25">
          <span className="relative z-10 drop-shadow-lg">Acoustic</span>
          <div className="absolute inset-0 bg-gradient-to-l from-yellow-400/10 to-red-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right rounded-xl"></div>
        </div>
        <div className="absolute -bottom-1 right-0 w-0 h-1 bg-gradient-to-l from-yellow-400 to-red-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
      </div>
    </div>
  );
};