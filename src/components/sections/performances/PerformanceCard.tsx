import React from "react";
import { motion } from "framer-motion";

interface PerformanceCardProps {
  title: string;
  description: string;
  idealFor: string[];
  features: string[];
  songs: string[];
  imageUrl: string;
  imageAlt: string;
  imageTitle: string;
  imageDescription: string;
  colorTheme: "red" | "yellow";
  layoutReverse?: boolean;
}

/**
 * Reusable performance card component
 * Eliminates code duplication between Full Band and Acoustic sections
 */
export const PerformanceCard: React.FC<PerformanceCardProps> = ({
  title,
  description,
  idealFor,
  features,
  songs,
  imageUrl,
  imageAlt,
  imageTitle,
  imageDescription,
  colorTheme,
  layoutReverse = false,
}) => {
  const themeColors = {
    red: {
      title: "text-red-400",
      border: "border-red-800/30",
      background: "bg-red-900/20",
      gradient: "from-red-900/50",
      cardBorder: "border-red-800/20",
    },
    yellow: {
      title: "text-yellow-400",
      border: "border-yellow-800/30",
      background: "bg-yellow-900/20",
      gradient: "from-yellow-900/50",
      cardBorder: "border-yellow-800/20",
    },
  };

  const colors = themeColors[colorTheme];
  const orderClass = layoutReverse ? "lg:order-2" : "lg:order-1";
  const imageOrderClass = layoutReverse ? "lg:order-1" : "lg:order-2";

  return (
    <motion.div
      key={colorTheme}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="grid lg:grid-cols-2 gap-16 items-center"
    >
      {/* Content Section */}
      <div className={orderClass}>
        <h3 className={`text-4xl font-bold mb-6 ${colors.title}`}>{title}</h3>
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`${colors.background} p-4 rounded-lg border ${colors.border}`}>
              <h4 className={`font-semibold ${colors.title} mb-2`}>Ideal For:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {idealFor.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className={`${colors.background} p-4 rounded-lg border ${colors.border}`}>
              <h4 className={`font-semibold ${colors.title} mb-2`}>Features:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {features.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold ${colors.title} mb-3`}>Featured Songs:</h4>
            <div className="grid grid-cols-2 gap-2">
              {songs.map((song, index) => (
                <div key={index} className={`bg-black/50 px-3 py-2 rounded text-sm text-gray-300 border ${colors.cardBorder}`}>
                  {song}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className={`relative ${imageOrderClass}`}>
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-96 object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} to-transparent`} />
          <div className="absolute bottom-6 left-6 right-6">
            <h4 className="text-2xl font-bold text-white mb-2">{imageTitle}</h4>
            <p className="text-gray-200">{imageDescription}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};