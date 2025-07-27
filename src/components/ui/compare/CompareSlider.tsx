import React from "react";

interface CompareSliderProps {
  position: number;
}

/**
 * Slider component that shows the dividing line and handle
 * Purely presentational component with no logic
 */
export const CompareSlider: React.FC<CompareSliderProps> = ({ position }) => {
  return (
    <div
      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-75"
      style={{ left: `${position}%`, transform: "translateX(-50%)" }}
    >
      {/* Slider Handle */}
      <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-400 rounded-full" />
      </div>
    </div>
  );
};