import React from "react";

interface CompareSliderProps {
  position: number;
}

/**
 * Slider component that shows the dividing line and handle
 * Purely presentational component with no logic
 * Enhanced with Royal Rock luxury aesthetic
 */
export const CompareSlider: React.FC<CompareSliderProps> = ({ position }) => {
  return (
    <div
      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-75"
      style={{ left: `${position}%`, transform: "translateX(-50%)" }}
    >
      {/* Luxury Slider Handle - Minimalist Royal Design */}
      <div className="absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group">
        {/* Outer glow ring */}
        <div 
          className="absolute inset-0 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300"
          style={{
            background: `conic-gradient(from 45deg, transparent, oklch(0.78 0.15 75 / 0.3), transparent)`,
            animation: 'spin 6s linear infinite'
          }}
        />
        
        {/* Main handle body */}
        <div 
          className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 group-hover:scale-105 group-active:scale-95"
          style={{
            background: `linear-gradient(135deg, 
              oklch(0.85 0.12 80) 0%,
              oklch(0.78 0.15 75) 50%,
              oklch(0.65 0.18 70) 100%
            )`,
            boxShadow: `
              0 0 20px oklch(0.78 0.15 75 / 0.4),
              0 8px 16px oklch(0 0 0 / 0.3),
              inset 0 2px 4px oklch(1 0 0 / 0.2),
              inset 0 -2px 4px oklch(0 0 0 / 0.1)
            `,
            border: `1px solid oklch(0.85 0.12 80)`
          }}
        />
        
        {/* Inner detail ring */}
        <div 
          className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: `radial-gradient(circle at 40% 40%, 
              oklch(0.75 0.02 180 / 0.8), 
              transparent 60%
            )`,
            border: `1px solid oklch(0.68 0.12 45 / 0.6)`
          }}
        />
        
        {/* Directional indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-1">
            <div 
              className="w-1 h-1 rounded-full opacity-80" 
              style={{ backgroundColor: 'oklch(0.45 0.25 25)' }}
            />
            <div 
              className="w-1 h-1 rounded-full opacity-60" 
              style={{ backgroundColor: 'oklch(0.45 0.25 25)' }}
            />
            <div 
              className="w-1 h-1 rounded-full opacity-80" 
              style={{ backgroundColor: 'oklch(0.45 0.25 25)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};