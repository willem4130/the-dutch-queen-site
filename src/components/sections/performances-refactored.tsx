"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PerformanceCard } from "./performances/PerformanceCard";
import { usePerformanceTypes, transformPerformanceTypeForComponent } from "@/hooks/usePerformanceTypes";

/**
 * CMS-Driven Performances Section Component
 * 
 * FEATURES:
 * - Dynamic performance types from Payload CMS
 * - Fully manageable content through admin interface
 * - Loading states and error handling
 * - Fallback system for missing data
 * - Maintains all original animations and styling
 */
export function PerformancesSectionRefactored() {
  const [activeTab, setActiveTab] = useState<string>("full-band");
  const { performanceTypes, loading, error } = usePerformanceTypes();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Update active tab when performance types load
  useEffect(() => {
    if (performanceTypes.length > 0 && !performanceTypes.find(p => p.slug === activeTab)) {
      setActiveTab(performanceTypes[0].slug);
    }
  }, [performanceTypes, activeTab]);

  // Loading state
  if (loading) {
    return (
      <section id="performances" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400 mb-4"></div>
            <p className="text-gray-400">Loading performance types...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || performanceTypes.length === 0) {
    return (
      <section id="performances" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-red-400 mb-4">{error || 'No performance types available'}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  const currentPerformance = performanceTypes.find(p => p.slug === activeTab) || performanceTypes[0];
  const transformedPerformance = transformPerformanceTypeForComponent(currentPerformance);

  return (
    <section id="performances" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">Performances</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect Queen experience for your event - from electrifying stadium energy to intimate acoustic magic
          </p>
        </motion.div>

        {/* Performance Type Selector */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-900 rounded-full p-2 border border-gray-700">
            {performanceTypes.map((performanceType) => {
              const isActive = activeTab === performanceType.slug;
              const colorClasses = performanceType.colorTheme === 'red' 
                ? {
                    active: 'bg-red-600 text-white shadow-lg shadow-red-600/25',
                    inactive: 'text-gray-300 hover:text-red-400 hover:bg-red-900/20'
                  }
                : {
                    active: 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25', 
                    inactive: 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-900/20'
                  };
              
              return (
                <button
                  key={performanceType.slug}
                  onClick={() => setActiveTab(performanceType.slug)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isActive ? colorClasses.active : colorClasses.inactive
                  }`}
                >
                  {performanceType.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Performance Content */}
        <div className="relative">
          <PerformanceCard
            title={transformedPerformance.title}
            description={transformedPerformance.description}
            idealFor={transformedPerformance.idealFor}
            features={transformedPerformance.features}
            songs={transformedPerformance.songs}
            imageUrl={transformedPerformance.imageUrl}
            imageMedia={transformedPerformance.imageMedia}
            imageAlt={transformedPerformance.imageAlt}
            imageTitle={transformedPerformance.imageTitle}
            imageDescription={transformedPerformance.imageDescription}
            colorTheme={transformedPerformance.colorTheme}
            layoutReverse={transformedPerformance.layoutReverse}
            isLoadingMedia={false}
          />
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Ready to Rock?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you want the full stadium experience or an intimate acoustic session, 
              we&apos;ll make your event unforgettable with the timeless music of Queen.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-red-600 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-red-500 transition-all duration-200 transform hover:scale-105"
            >
              Book Your Performance
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}