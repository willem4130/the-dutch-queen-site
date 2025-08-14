"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TheatricalSection, RoyalText, PerformanceCard, PearlCascade } from "@/components/animations/TheatricalComponents";
import { useTheatricalAnimation } from "@/lib/animations/theatrical-system";
import { cn } from "@/lib/utils";
import { 
  Crown, 
  ScepterDivider,
  VintageAmplifier,
  StageLightingRig,
  VinylRecord,
  PerformerSilhouette,
  GuitarPick,
  SoundWave,
  RoyalPattern,
  OrnamentalFrame,
  BrandBadge,
  QueenInspiredElement
} from "@/components/brand";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <TheatricalSection 
      variant="spotlightReveal" 
      className="py-24 bg-gradient-to-b from-deep-black via-charcoal-stage to-midnight-velvet relative overflow-hidden"
      withSpotlight={false}
      withStageFog={true}
      withStageLights={true}
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Enhanced background elements */}
        <RoyalPattern 
          pattern="crown-repeat" 
          size="lg" 
          opacity={0.04} 
          className="absolute top-32 left-8" 
        />
        <RoyalPattern 
          pattern="fleur" 
          size="md" 
          opacity={0.03} 
          className="absolute bottom-48 right-12" 
        />
        <RoyalPattern 
          pattern="damask" 
          size="sm" 
          opacity={0.05} 
          className="absolute top-2/3 left-24" 
        />
        
        {/* Stage equipment decorations */}
        <VintageAmplifier 
          size="combo" 
          brand="custom"
          className="absolute top-16 right-8 opacity-20 hover:opacity-40 transition-opacity duration-500" 
        />
        <VinylRecord 
          size="md" 
          spinning={true}
          label="THE DUTCH QUEEN"
          className="absolute bottom-32 left-12 opacity-25 hover:opacity-45 transition-opacity duration-300" 
        />
        
        {/* Performer silhouettes */}
        <PerformerSilhouette 
          pose="microphone" 
          size="lg" 
          animate={true}
          className="absolute top-1/4 left-4 text-queen-burgundy/15 hover:text-royal-bronze/30 transition-colors duration-700" 
        />
        <PerformerSilhouette 
          pose="guitar" 
          size="md" 
          animate={true}
          className="absolute bottom-1/4 right-16 text-royal-purple/12 hover:text-crown-gold/25 transition-colors duration-700" 
        />
        
        {/* Guitar pick decorations */}
        <GuitarPick 
          design="royal" 
          size="lg" 
          color="gold"
          className="absolute top-48 left-1/4 opacity-20 hover:opacity-40 transition-opacity duration-300" 
        />
        <GuitarPick 
          design="crown" 
          size="md" 
          color="burgundy"
          className="absolute bottom-64 right-1/3 opacity-25 hover:opacity-45 transition-opacity duration-300" 
        />
        
        {/* Pearl cascade effect */}
        <PearlCascade count={12} active={mounted} />
        
        {/* Stage lighting rig */}
        <StageLightingRig 
          lights={6} 
          pattern="mixed" 
          intensity="medium"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-30" 
        />
        
        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
              }
            },
            hidden: { opacity: 0 }
          }}
          className="text-center mb-16 relative z-10"
        >
          {/* Crown above title */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={mounted ? { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { duration: 1.2, delay: 0.3, ease: "easeOut" }
            } : {}}
            className="mb-8"
          >
            <Crown 
              size="lg" 
              variant="ornate" 
              animate={true}
              className="mx-auto text-crown-gold animate-crown-shimmer" 
            />
          </motion.div>
          
          <RoyalText 
            variant="title" 
            gradient={true} 
            shimmer={true}
            className="mb-6"
          >
            About <span className="text-gradient-royal">The Dutch Queen</span>
          </RoyalText>
          
          {/* Sound wave decoration under title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mounted ? { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 1, delay: 0.8 }
            } : {}}
            className="mb-6"
          >
            <SoundWave 
              pattern="waveform" 
              intensity="medium" 
              color="gold" 
              bars={16}
              animate={true}
              className="mx-auto w-48 h-6 opacity-60"
            />
          </motion.div>
          
          <RoyalText 
            variant="subtitle"
            className="text-pearl-white max-w-3xl mx-auto"
          >
            From the heart of the Netherlands comes a tribute to the greatest rock band of all time. 
            We don&apos;t just play Queen&apos;s music - we live it, breathe it, and share it with the world.
          </RoyalText>
          
          {/* Decorative scepter divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={mounted ? { 
              opacity: 1, 
              scaleX: 1,
              transition: { duration: 1.5, delay: 1, ease: "easeOut" }
            } : {}}
            className="mt-8"
          >
            <ScepterDivider width="md" orientation="horizontal" className="mx-auto" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <PerformanceCard delay={0.4} className="p-8">
            <RoyalText variant="subtitle" className="text-stage-amber mb-6">
              Our Story
            </RoyalText>
            <div className="space-y-4">
              <RoyalText variant="body" className="text-pearl-white">
                Born from a shared passion for Queen&apos;s timeless music, The Dutch Queen has been 
                captivating audiences across the Netherlands and beyond since our formation. We understand 
                that Queen&apos;s music deserves nothing less than perfection.
              </RoyalText>
              <RoyalText variant="body" className="text-pearl-white">
                What sets us apart is our unique dual approach: we offer both the full stadium experience 
                with complete band setup and production, as well as intimate acoustic sessions that 
                showcase the raw emotional power of these legendary songs.
              </RoyalText>
              <RoyalText variant="body" className="text-royal-bronze font-medium">
                Every performance is a celebration of Freddie Mercury&apos;s legacy, Brian May&apos;s genius, 
                Roger Taylor&apos;s rhythm, and John Deacon&apos;s foundation - delivered with the passion and 
                precision that Queen&apos;s music demands.
              </RoyalText>
            </div>
          </PerformanceCard>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={mounted ? { 
              opacity: 1, 
              scale: 1, 
              rotateY: 0,
              transition: { duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
            } : {}}
            className="relative stage-ready"
          >
            <div className="relative overflow-hidden rounded-2xl border border-royal-bronze/30">
              <img
                src="/performance-stage-lighting.jpg"
                alt="The Dutch Queen performing with professional stage lighting and production"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-royal-bronze/10" />
              
              {/* Stage lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-stage-amber/20 via-transparent to-royal-purple/20 opacity-80" />
              
              {/* Crown corner decoration */}
              <div className="absolute top-4 right-4 text-crown-gold text-2xl opacity-80">♦</div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Band Stats with royal brand elements */}
        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8
              }
            },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 relative z-10"
        >
          {[
            { 
              number: "500+", 
              label: "Performances", 
              icon: <Crown size="sm" variant="silhouette" className="text-crown-gold animate-crown-shimmer" />,
              color: "royal"
            },
            { 
              number: "25+", 
              label: "Classic Songs", 
              icon: <SoundWave pattern="equalizer" bars={4} intensity="medium" color="gold" className="w-6 h-4" />,
              color: "metallic"
            },
            { 
              number: "10+", 
              label: "Years Experience", 
              icon: <QueenInspiredElement element="crest" size="sm" style="gradient" className="text-royal-bronze" />,
              color: "dramatic"
            },
            { 
              number: "100%", 
              label: "Queen Passion", 
              icon: <GuitarPick design="flame" size="sm" color="burgundy" />,
              color: "royal"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <OrnamentalFrame style="ornate" className="text-center h-full flex flex-col justify-center">
                {/* Brand icon */}
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                
                {/* Number with enhanced gradient */}
                <div className={cn(
                  "text-display-sm font-display-primary mb-3 animate-crown-shimmer",
                  stat.color === "royal" && "text-gradient-royal",
                  stat.color === "metallic" && "text-gradient-metallic", 
                  stat.color === "dramatic" && "text-gradient-dramatic"
                )}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-performance-detail text-pearl-cream uppercase tracking-widest">
                  {stat.label}
                </div>
                
                {/* Hover effect spotlight */}
                <div className="absolute inset-0 bg-gradient-radial from-crown-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
              </OrnamentalFrame>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Mission section with royal branding */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={mounted ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1.2, delay: 1.2, ease: "easeOut" }
          } : {}}
          className="relative z-10"
        >
          <OrnamentalFrame style="majestic" className="text-center">
            {/* Crown above mission */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={mounted ? { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { duration: 1, delay: 1.4 }
              } : {}}
              className="mb-8"
            >
              <Crown 
                size="md" 
                variant="ornate" 
                animate={true}
                className="mx-auto text-crown-gold animate-crown-shimmer mb-4" 
              />
            </motion.div>
            
            <div className="mb-8">
              <RoyalText variant="subtitle" gradient={true} className="mb-6">
                Our Royal Mission
              </RoyalText>
              
              {/* Queen-inspired wings */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={mounted ? { 
                  opacity: 1, 
                  scaleX: 1,
                  transition: { duration: 1.5, delay: 1.6, ease: "easeOut" }
                } : {}}
                className="mb-6"
              >
                <QueenInspiredElement 
                  element="wings" 
                  size="lg" 
                  style="gradient" 
                  className="mx-auto" 
                />
              </motion.div>
            </div>
            
            <RoyalText variant="body" className="text-pearl-white max-w-4xl mx-auto leading-relaxed mb-8">
              To honor Queen&apos;s incredible legacy by delivering performances that capture not just the sound, 
              but the spirit, energy, and emotion that made them legends. Whether it&apos;s the thunderous power 
              of <span className="text-stage-amber font-medium">&quot;We Will Rock You&quot;</span> or the tender beauty of <span className="text-royal-bronze font-medium">&quot;Love of My Life,&quot;</span> we bring Queen&apos;s magic to life 
              for new generations to experience and cherish.
            </RoyalText>
            
            {/* Enhanced decorative elements with sound waves */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mounted ? { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 1, delay: 2 }
              } : {}}
              className="space-y-4"
            >
              <SoundWave 
                pattern="circular" 
                bars={12} 
                intensity="medium" 
                color="gold"
                animate={true}
                className="mx-auto w-24 h-24 opacity-60"
              />
              
              {/* Royal diamond separators */}
              <div className="flex justify-center items-center gap-6 text-crown-gold">
                <GuitarPick design="royal" size="xs" color="gold" />
                <Crown size="sm" variant="silhouette" className="animate-crown-shimmer" />
                <GuitarPick design="royal" size="xs" color="gold" />
              </div>
              
              {/* Brand badges */}
              <div className="flex justify-center gap-6 pt-6">
                <BrandBadge type="quality" size="sm" style="ornate" />
                <BrandBadge type="tribute" size="sm" style="ornate" />
              </div>
            </motion.div>
          </OrnamentalFrame>
        </motion.div>
      </div>
    </TheatricalSection>
  );
}