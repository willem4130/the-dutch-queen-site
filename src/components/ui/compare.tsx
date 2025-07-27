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

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      
      if (slideMode === "click" && !isDragging) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      const clampedPercentage = Math.max(0, Math.min(100, percentage));
      
      setSliderPosition(clampedPercentage);
      onSliderMove?.(clampedPercentage);
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
      <div className="relative w-full h-full">
        <img
          src={firstImage}
          alt="First comparison"
          className={cn("w-full h-full object-cover", firstImageClassName)}
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
          className={cn("w-full h-full object-cover", secondImageClassname)}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-75"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm font-medium">
        Full Band
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm font-medium">
        Acoustic
      </div>
    </div>
  );
};