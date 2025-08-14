"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function HeroSectionMinimal() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section className="h-screen flex flex-col relative overflow-hidden bg-black">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
      
      {/* Minimal hero content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        
        {/* Simple logo/title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          } : {}}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            The Dutch Queen
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Professional Queen Tribute Band
          </p>
        </motion.div>
        
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={mounted ? { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 1, delay: 0.2 }
          } : {}}
          className="mb-8 w-full max-w-4xl"
        >
          <img
            src="/full-band-performance.jpg"
            alt="The Dutch Queen live performance"
            className="w-full h-96 object-cover rounded-lg border border-gray-700"
          />
        </motion.div>
        
        {/* Clear CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: 0.4 }
          } : {}}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Check Availability
          </button>
          <button className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Watch Videos
          </button>
        </motion.div>
        
        {/* Key information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { 
            opacity: 1,
            transition: { duration: 0.8, delay: 0.6 }
          } : {}}
          className="mt-8 text-gray-400"
        >
          <p>Professional performances • Corporate events • Private parties</p>
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