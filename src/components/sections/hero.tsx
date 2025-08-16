"use client";

import { Compare } from "@/components/ui/compare";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RoyalEntranceHero } from "@/components/animations/TheatricalComponents";
import { 
  EnhancedLogo, 
  Crown, 
  ScepterDivider, 
  Spotlight, 
  StageFog, 
  VinylRecord,
  PerformerSilhouette,
  SoundWave,
  RoyalPattern,
  GemButton,
  BrandBadge
} from "@/components/brand";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <RoyalEntranceHero 
      className="h-screen flex flex-col relative overflow-hidden"
      showCrown={true}
    >
      {/* Enhanced theatrical background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-queen-burgundy/10 to-royal-bronze/5" />
      
      {/* Stage lighting effects */}
      <Spotlight 
        intensity="dramatic" 
        color="amber" 
        size="xl" 
        className="absolute top-20 left-1/4 -translate-x-1/2" 
      />
      <Spotlight 
        intensity="high" 
        color="white" 
        size="lg" 
        className="absolute top-32 right-1/3 translate-x-1/2" 
      />
      <Spotlight 
        intensity="medium" 
        color="royal" 
        size="md" 
        className="absolute bottom-40 left-1/2 -translate-x-1/2" 
      />
      
      {/* Stage fog effect */}
      <StageFog 
        density="medium" 
        color="amber" 
        direction="rising" 
        className="absolute bottom-0 left-0 right-0 h-1/2" 
      />
      
      {/* Royal background patterns */}
      <RoyalPattern 
        pattern="crown-repeat" 
        size="lg" 
        opacity={0.03} 
        className="absolute top-20 left-20" 
      />
      <RoyalPattern 
        pattern="fleur" 
        size="md" 
        opacity={0.04} 
        className="absolute bottom-32 right-24" 
      />
      <RoyalPattern 
        pattern="damask" 
        size="sm" 
        opacity={0.02} 
        className="absolute top-1/2 left-12" 
      />
      
      {/* Performer silhouettes */}
      <PerformerSilhouette 
        pose="commanding" 
        size="lg" 
        animate={true}
        className="absolute top-1/3 right-12 text-royal-bronze/20 hover:text-crown-gold/40 transition-colors duration-500" 
      />
      <PerformerSilhouette 
        pose="guitar" 
        size="md" 
        animate={true}
        className="absolute bottom-1/3 left-16 text-queen-burgundy/15 hover:text-royal-purple/30 transition-colors duration-500" 
      />
      
      {/* Vintage elements */}
      <VinylRecord 
        size="sm" 
        spinning={true}
        className="absolute top-24 right-1/4 opacity-30 hover:opacity-50 transition-opacity duration-300" 
      />
      
      {/* Compare Component with theatrical entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'brightness(0.7)' }}
        animate={mounted ? { 
          opacity: 1, 
          scale: 1, 
          filter: 'brightness(1)',
          transition: { duration: 2.5, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }
        } : {}}
        className="relative z-10 w-full h-full flex flex-col pt-20 px-4"
      >
        {/* Enhanced Hero title overlay with brand elements */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20 text-center">
          {/* Crown above logo */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={mounted ? { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { duration: 1.5, delay: 0.5, ease: "easeOut" }
            } : {}}
            className="mb-6"
          >
            <Crown 
              size="xl" 
              variant="ornate" 
              animate={true}
              className="mx-auto mb-4 text-crown-gold animate-crown-shimmer" 
            />
          </motion.div>
          
          {/* Enhanced logo treatment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { 
              opacity: 1, 
              y: 0,
              transition: { duration: 1.8, delay: 1, ease: "easeOut" }
            } : {}}
          >
            <EnhancedLogo 
              variant="full" 
              size="lg" 
              theme="royal" 
              animate={true}
              showTagline={true}
              className="mb-8"
            />
          </motion.div>
          
          {/* Sound wave decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mounted ? { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 1.2, delay: 1.5 }
            } : {}}
            className="mb-8"
          >
            <SoundWave 
              pattern="equalizer" 
              intensity="dynamic" 
              color="gold" 
              bars={12}
              animate={true}
              className="mx-auto w-32 h-8 opacity-70"
            />
          </motion.div>
          
          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { 
              opacity: 1, 
              y: 0,
              transition: { duration: 1.5, delay: 2, ease: "easeOut" }
            } : {}}
            className="flex gap-6 justify-center"
          >
            <GemButton variant="ruby" size="lg" className="group">
              <Crown size="sm" variant="silhouette" className="mr-2 group-hover:animate-crown-shimmer" />
              Book Performance
            </GemButton>
            <GemButton variant="diamond" size="lg" className="group">
              <SoundWave 
                pattern="waveform" 
                bars={6} 
                intensity="low" 
                color="bronze"
                className="mr-2 w-6 h-3" 
              />
              Watch Videos
            </GemButton>
          </motion.div>
          
          {/* Brand badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mounted ? { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 1, delay: 2.5 }
            } : {}}
            className="flex gap-4 justify-center mt-8"
          >
            <BrandBadge type="premium" size="sm" style="ornate" />
            <BrandBadge type="authentic" size="sm" style="ornate" />
            <BrandBadge type="royal" size="sm" style="ornate" />
          </motion.div>
        </div>

        <div className="flex-1 mt-32">
          <Compare
            firstImage="/acoustic-performance.jpg"
            secondImage="/full-band-performance.jpg"
            firstImageClassName="object-cover object-center"
            secondImageClassname="object-cover object-center"
            className="w-full h-full rounded-2xl border border-royal-bronze/30"
            slideMode="hover"
          />
        </div>
      </motion.div>

      {/* Enhanced royal scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={mounted ? { 
          opacity: 1, 
          y: 0,
          transition: { duration: 1, delay: 3 }
        } : {}}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        {/* Decorative scepter divider */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={mounted ? { 
            opacity: 1, 
            scaleY: 1,
            transition: { duration: 1.5, delay: 3.2, ease: "easeOut" }
          } : {}}
          className="mb-4"
        >
          <ScepterDivider width="sm" orientation="vertical" className="mx-auto h-16" />
        </motion.div>
        
        {/* Enhanced scroll indicator */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-center"
        >
          {/* Crown above arrow */}
          <Crown 
            size="sm" 
            variant="silhouette" 
            animate={true}
            className="mx-auto mb-2 text-crown-gold opacity-80" 
          />
          
          {/* Royal arrow with gradient */}
          <div className="relative">
            <svg
              className="w-8 h-8 mx-auto text-crown-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="oklch(0.85 0.12 50)" />
                  <stop offset="100%" stopColor="oklch(0.72 0.08 35)" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                stroke="url(#arrow-gradient)"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            
            {/* Glow effect */}
            <div className="absolute inset-0 w-8 h-8 mx-auto bg-crown-gold rounded-full opacity-20 blur-md animate-pulse" />
          </div>
          
          {/* Enhanced text with royal styling */}
          <div className="text-center mt-3 space-y-1">
            <div className="text-sm font-nav-primary text-gradient-royal font-medium tracking-wider">
              DISCOVER THE
            </div>
            <div className="text-base font-display-primary text-pearl-white font-bold tracking-wide">
              Royal Experience
            </div>
            
            {/* Decorative sound wave */}
            <SoundWave 
              pattern="waveform" 
              bars={8} 
              intensity="low" 
              color="gold"
              animate={true}
              className="mx-auto w-16 h-3 mt-2 opacity-50"
            />
          </div>
        </motion.div>
      </motion.div>
    </RoyalEntranceHero>
  );
}