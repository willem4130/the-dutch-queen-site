"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Compare } from "@/components/ui/compare";

export function HeroSectionMinimal() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section className="h-screen flex flex-col relative overflow-hidden bg-black">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
      
      {/* Minimal hero content - restructured for full-width slider */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top section with title and labels */}
        <div className="flex-shrink-0 pt-20 pb-8 px-4 text-center">
        
          {/* Simple logo/title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            } : {}}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-3" 
                style={{ 
                  fontFamily: 'Trajan Pro, Optima, system-ui, sans-serif',
                  background: 'linear-gradient(135deg, #CD7F32 0%, #DAA520 30%, #B8860B 70%, #8B4513 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 40px rgba(205, 127, 50, 0.4), 0 6px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase' as const,
                  fontWeight: '900'
                }}>
              The Dutch Queen
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light">
              Professional Queen Tribute Band
            </p>
          </motion.div>
          
          {/* Comparison labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { 
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 }
            } : {}}
            className="flex justify-between mb-4 text-sm text-gray-400 max-w-4xl mx-auto"
          >
            <span>← Acoustic Performance</span>
            <span className="text-gray-500">Hover to compare</span>
            <span>Full Band Performance →</span>
          </motion.div>
        </div>
        
        {/* Full-width comparison slider - takes up most of screen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={mounted ? { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 1, delay: 0.3 }
          } : {}}
          className="flex-1 w-full px-4 pb-4"
        >
          <Compare
            firstImage="/acoustic-performance.jpg"
            secondImage="/full-band-performance.jpg"
            firstImageClassName="object-cover object-center"
            secondImageClassname="object-cover object-center"
            className="w-full h-full rounded-lg border border-gray-700"
            slideMode="hover"
          />
        </motion.div>
      </div>

      {/* Simple scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { 
          opacity: 1,
          transition: { duration: 0.8, delay: 0.8 }
        } : {}}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, -8, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-gray-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}