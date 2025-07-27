"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { useSliderPosition } from "@/hooks/useSliderPosition";
import { CompareImage } from "./compare/CompareImage";
import { CompareSlider } from "./compare/CompareSlider";
import { CompareLabels } from "./compare/CompareLabels";

interface CompareProps {
  firstImage: string;
  secondImage: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  className?: string;
  slideMode?: "hover" | "click";
  onSliderMove?: (position: number) => void;
  leftLabel?: string;
  rightLabel?: string;
}

/**
 * Refactored Compare component with reduced complexity
 * 
 * IMPROVEMENTS:
 * - Extracted mouse event logic into useSliderPosition hook
 * - Split rendering into focused sub-components
 * - Reduced cyclomatic complexity from HIGH to MEDIUM
 * - Improved maintainability and testability
 * - Enhanced reusability through composition
 */
export const CompareRefactored: React.FC<CompareProps> = ({
  firstImage,
  secondImage,
  firstImageClassName,
  secondImageClassname,
  className,
  slideMode = "hover",
  onSliderMove,
  leftLabel,
  rightLabel,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    sliderPosition,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
  } = useSliderPosition(containerRef, { slideMode, onSliderMove });

  const clipPath = `inset(0 ${100 - sliderPosition}% 0 0)`;

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
      {/* First Image (Base Layer) */}
      <CompareImage
        src={firstImage}
        alt="First comparison"
        className={firstImageClassName}
      />

      {/* Second Image (Overlay Layer) */}
      <CompareImage
        src={secondImage}
        alt="Second comparison"
        className={secondImageClassname}
        clipPath={clipPath}
        isOverlay
      />

      {/* Slider Line and Handle */}
      <CompareSlider position={sliderPosition} />

      {/* Labels */}
      <CompareLabels leftLabel={leftLabel} rightLabel={rightLabel} />
    </div>
  );
};