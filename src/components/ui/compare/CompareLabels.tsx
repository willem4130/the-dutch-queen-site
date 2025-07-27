import React from "react";

interface CompareLabelsProps {
  leftLabel?: string;
  rightLabel?: string;
}

/**
 * Labels component for the compare slider
 * Displays identifying text for each side of the comparison
 */
export const CompareLabels: React.FC<CompareLabelsProps> = ({
  leftLabel = "Full Band",
  rightLabel = "Acoustic",
}) => {
  return (
    <>
      <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm font-medium">
        {leftLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm font-medium">
        {rightLabel}
      </div>
    </>
  );
};