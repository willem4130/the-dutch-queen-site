/**
 * THE DUTCH QUEEN - THEATRICAL ANIMATION SYSTEM
 * 
 * Comprehensive animation framework for royal elegance, rock energy, and drag queen theatricality
 * Built on enhanced Framer Motion with performance optimization and accessibility compliance
 */

import { Variants, useReducedMotion, useInView } from 'framer-motion';

// Type for cubic bezier easing curves
type CubicBezierEasing = [number, number, number, number];
import { useRef, useEffect, useState } from 'react';

// ========================================
// CORE THEATRICAL TIMING SYSTEM
// ========================================

export const theatricalTiming = {
  // Musical timing based on Queen's signature tempos
  beat: 0.5,        // 120 BPM base tempo
  measure: 2,       // 4 beats = 2 seconds
  phrase: 8,        // 4 measures = 8 seconds
  
  // Performance timing variables
  curtainReveal: 2.5,
  spotlightFocus: 1.2,
  crownShimmer: 1.8,
  rockTransition: 0.6,
  elegantFloat: 3,
  stageEffect: 0.4,
  
  // Queen-inspired song tempos
  queenSignature: {
    bohemianRhapsody: { tempo: 72, signature: '4/4' },
    weWillRockYou: { tempo: 81, signature: '4/4' },
    weAreTheChampions: { tempo: 62, signature: '6/8' },
    somebodyToLove: { tempo: 120, signature: '4/4' }
  }
};

// Royal easing curves for theatrical motion
export const royalEasing: Record<string, CubicBezierEasing> = {
  entrance: [0.25, 0.46, 0.45, 0.94],        // Dramatic entrance
  rockEnergy: [0.68, -0.55, 0.265, 1.55],    // High energy bounce
  elegance: [0.45, 0, 0.25, 1],              // Smooth sophistication
  spotlight: [0.5, 0, 0.5, 1],               // Focused beam
  curtain: [0.25, 0, 0.35, 1],               // Heavy fabric movement
  shimmer: [0.4, 0, 0.6, 1]                  // Metallic gleam
};

// ========================================
// THEATRICAL ANIMATION VARIANTS
// ========================================

export const theatricalVariants: Record<string, Variants> = {
  // Dramatic curtain reveal effect
  curtainReveal: {
    hidden: { 
      clipPath: 'inset(0 50% 0 50%)',
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      clipPath: 'inset(0 0% 0 0%)',
      opacity: 1,
      scale: 1,
      transition: {
        duration: theatricalTiming.curtainReveal,
        ease: royalEasing.curtain,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      clipPath: 'inset(0 50% 0 50%)',
      opacity: 0,
      scale: 0.95,
      transition: { duration: 1, ease: royalEasing.curtain }
    }
  },

  // Spotlight focus effect
  spotlightReveal: {
    hidden: { 
      opacity: 0,
      scale: 1.1,
      filter: 'brightness(0.5) blur(10px)'
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: 'brightness(1) blur(0px)',
      transition: {
        duration: theatricalTiming.spotlightFocus,
        ease: royalEasing.spotlight,
        staggerChildren: 0.15
      }
    }
  },

  // Crown entrance with royal majesty
  crownEntrance: {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0,
      filter: 'drop-shadow(0 0 0px rgba(212, 175, 55, 0))'
    },
    visible: { 
      scale: 1,
      rotate: 0,
      opacity: 1,
      filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))',
      transition: {
        duration: 1.5,
        ease: [0.175, 0.885, 0.32, 1.275], // Back ease out
        staggerChildren: 0.1
      }
    }
  },

  // Rock energy burst
  rockEnergyBurst: {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 30,
      filter: 'saturate(0.5)'
    },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      filter: 'saturate(1.2)',
      transition: {
        duration: theatricalTiming.rockTransition,
        ease: royalEasing.rockEnergy,
        staggerChildren: 0.05
      }
    }
  },

  // Elegant floating motion
  elegantFloat: {
    hidden: { 
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: theatricalTiming.elegantFloat,
        ease: royalEasing.elegance,
        staggerChildren: 0.1
      }
    }
  },

  // Shimmer and shine effect
  shimmerReveal: {
    hidden: { 
      opacity: 0,
      backgroundPosition: '-200% 0'
    },
    visible: { 
      opacity: 1,
      backgroundPosition: '200% 0',
      transition: {
        opacity: { duration: 0.3 },
        backgroundPosition: {
          duration: theatricalTiming.crownShimmer,
          ease: royalEasing.shimmer,
          repeat: Infinity,
          repeatType: 'loop'
        }
      }
    }
  },

  // Stage lighting sequence
  stageLighting: {
    hidden: { 
      opacity: 0.3,
      scale: 0.8
    },
    visible: { 
      opacity: [0.3, 1, 0.7, 1],
      scale: [0.8, 1.2, 1, 1.1, 1],
      transition: {
        duration: theatricalTiming.measure,
        ease: "easeInOut",
        times: [0, 0.3, 0.6, 1],
        repeat: Infinity,
        repeatType: 'loop'
      }
    }
  },

  // Performance card entrance
  performanceCard: {
    hidden: { 
      y: 60,
      opacity: 0,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: royalEasing.entrance
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateY: 5,
      boxShadow: '0 25px 50px rgba(212, 175, 55, 0.2)',
      transition: {
        duration: 0.3,
        ease: royalEasing.elegance
      }
    }
  }
};

// ========================================
// MOBILE OPTIMIZED VARIANTS
// ========================================

export const mobileVariants: Record<string, Variants> = {
  curtainReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  spotlightReveal: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  
  crownEntrance: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },
  
  rockEnergyBurst: {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },
  
  elegantFloat: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }
};

// ========================================
// HOOKS FOR THEATRICAL ANIMATIONS
// ========================================

export const useTheatricalAnimation = (variant: keyof typeof theatricalVariants) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.3 
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVariants = () => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };
    }
    
    return isMobile ? mobileVariants[variant] : theatricalVariants[variant];
  };

  return {
    ref,
    variants: getVariants(),
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    whileHover: !prefersReducedMotion && !isMobile ? "hover" : undefined,
    viewport: { once: true, amount: 0.3 }
  };
};

// Hook for stage lighting effects
export const useStageLighting = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const timer = setTimeout(() => setIsActive(true), 1000);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return {
    isActive: isActive && !prefersReducedMotion,
    variants: theatricalVariants.stageLighting
  };
};

// Hook for performance-based timing
export const usePerformanceTiming = (bpm: number = 120) => {
  const beatDuration = 60 / bpm;
  
  return {
    beat: beatDuration,
    measure: beatDuration * 4,
    phrase: beatDuration * 16,
    calculateDelay: (beats: number) => beats * beatDuration
  };
};

// ========================================
// ANIMATION ORCHESTRATION
// ========================================

interface AnimationSequence {
  isPlaying: boolean;
  animations: Array<{
    target: string;
    variant: keyof typeof theatricalVariants;
    delay?: number;
  }>;
}

export class TheatricalOrchestrator {
  private sequences: Map<string, AnimationSequence> = new Map();
  
  createSequence(name: string, animations: Array<{
    target: string;
    variant: keyof typeof theatricalVariants;
    delay?: number;
  }>) {
    this.sequences.set(name, {
      animations,
      isPlaying: false
    });
  }
  
  playSequence(name: string) {
    const sequence = this.sequences.get(name);
    if (!sequence || sequence.isPlaying) return;
    
    sequence.isPlaying = true;
    
    // Implementation would trigger animations in sequence
    // This is a framework for future expansion
    
    setTimeout(() => {
      sequence.isPlaying = false;
    }, 5000); // Estimated sequence duration
  }
  
  stopSequence(name: string) {
    const sequence = this.sequences.get(name);
    if (sequence) {
      sequence.isPlaying = false;
    }
  }
}

export const orchestrator = new TheatricalOrchestrator();