import { useState, useCallback, RefObject } from "react";

interface UseSliderPositionProps {
  slideMode: "hover" | "click";
  onSliderMove?: (position: number) => void;
}

interface UseSliderPositionReturn {
  sliderPosition: number;
  isDragging: boolean;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseDown: () => void;
  handleMouseUp: () => void;
  handleMouseLeave: () => void;
}

/**
 * Custom hook to manage slider position logic
 * Extracts complex mouse event handling and state management
 */
export function useSliderPosition(
  containerRef: RefObject<HTMLDivElement>,
  { slideMode, onSliderMove }: UseSliderPositionProps
): UseSliderPositionReturn {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const calculatePosition = useCallback(
    (clientX: number): number => {
      if (!containerRef.current) return sliderPosition;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      return Math.max(0, Math.min(100, percentage));
    },
    [containerRef, sliderPosition]
  );

  const updatePosition = useCallback(
    (newPosition: number) => {
      setSliderPosition(newPosition);
      onSliderMove?.(newPosition);
    },
    [onSliderMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      
      // Only respond to mouse move in hover mode or when dragging in click mode
      if (slideMode === "click" && !isDragging) return;

      const newPosition = calculatePosition(e.clientX);
      updatePosition(newPosition);
    },
    [slideMode, isDragging, calculatePosition, updatePosition, containerRef]
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
      updatePosition(50); // Reset to center in hover mode
    }
  }, [slideMode, updatePosition]);

  return {
    sliderPosition,
    isDragging,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
  };
}