"use client";

import { Compare } from "@/components/ui/compare";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Test animation state
  console.log("HeroSection rendering, mounted:", mounted);
  
  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden">
      {/* Test Animation - Simple visible element */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 left-4 z-50 bg-red-500 text-white p-4 rounded"
        >
          Animation Test - Should be visible
        </motion.div>
      )}
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-yellow-900/20" />
      
      {/* Compare Component - Full Screen Feature */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full h-full flex flex-col pt-20 px-4"
      >
        <div className="flex-1">
          <Compare
            firstImage="/acoustic-performance.jpg"
            secondImage="/full-band-performance.jpg"
            firstImageClassName="object-cover object-center"
            secondImageClassname="object-cover object-center"
            className="w-full h-full rounded-none"
            slideMode="hover"
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
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
        </div>
      </motion.div>
    </section>
  );
}