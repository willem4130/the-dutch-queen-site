"use client";

import { Compare } from "@/components/ui/compare";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSiteSettings, getHeroSettings } from "@/hooks/useSiteSettings";
import { getOptimizedImageUrl } from "@/lib/payload-api";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { siteSettings, loading, error } = useSiteSettings();
  const heroSettings = getHeroSettings(siteSettings);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Loading state
  if (loading) {
    return (
      <section id="home" className="relative h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-yellow-900/20" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
            <p className="text-white text-lg">Loading experience...</p>
          </div>
        </div>
      </section>
    );
  }

  // Get image URLs with fallbacks
  const acousticImageUrl = heroSettings.acousticImage 
    ? getOptimizedImageUrl(heroSettings.acousticImage, 'hero')
    : "/acoustic-performance.jpg";
    
  const fullBandImageUrl = heroSettings.fullBandImage
    ? getOptimizedImageUrl(heroSettings.fullBandImage, 'hero') 
    : "/full-band-performance.jpg";
  
  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-yellow-900/20" />
      
      {/* Hero Title Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          {heroSettings.heroTitle}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          {heroSettings.heroSubtitle}
        </p>
      </motion.div>
      
      {/* Compare Component - Full Screen Feature */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full h-full flex flex-col pt-20 px-4"
      >
        <div className="flex-1">
          <Compare
            firstImage={acousticImageUrl}
            secondImage={fullBandImageUrl}
            firstImageClassName="object-cover object-center"
            secondImageClassname="object-cover object-center"
            className="w-full h-full rounded-none"
            slideMode="hover"
          />
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2">Discover Our Performances</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full mx-auto relative"
          >
            <div className="w-1 h-3 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}