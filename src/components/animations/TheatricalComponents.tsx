/**
 * THE DUTCH QUEEN - THEATRICAL ANIMATION COMPONENTS
 * 
 * Ready-to-use theatrical components with royal, rock, and drag queen animations
 * Built on enhanced Framer Motion with accessibility and performance optimization
 */

"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import { 
  useTheatricalAnimation, 
  useStageLighting, 
  theatricalVariants,
  royalEasing
} from '@/lib/animations/theatrical-system';

// ========================================
// CORE THEATRICAL WRAPPER
// ========================================

interface TheatricalMotionConfigProps {
  children: ReactNode;
}

export const TheatricalMotionConfig: React.FC<TheatricalMotionConfigProps> = ({ 
  children 
}) => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ 
        duration: 0.6, 
        ease: royalEasing.entrance 
      }}
    >
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </MotionConfig>
  );
};

// ========================================
// THEATRICAL SECTIONS
// ========================================

interface TheatricalSectionProps {
  children: ReactNode;
  variant?: 'curtainReveal' | 'spotlightReveal' | 'elegantFloat' | 'rockEnergyBurst';
  className?: string;
  withSpotlight?: boolean;
  withStageFog?: boolean;
  withStageLights?: boolean;
}

export const TheatricalSection: React.FC<TheatricalSectionProps> = ({
  children,
  variant = 'curtainReveal',
  className = '',
  withSpotlight = false,
  withStageFog = false,
  withStageLights = false
}) => {
  const animation = useTheatricalAnimation(variant);
  const stageLighting = useStageLighting();

  return (
    <motion.section
      ref={animation.ref}
      variants={animation.variants}
      initial={animation.initial}
      animate={animation.animate}
      whileHover={animation.whileHover}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Stage lighting overlay */}
      {withSpotlight && (
        <div className="spotlight-overlay active" />
      )}
      
      {/* Stage fog effect */}
      {withStageFog && (
        <div className="stage-fog" />
      )}
      
      {/* Stage lights */}
      {withStageLights && stageLighting.isActive && (
        <div className="stage-lights-container absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="stage-light"
              variants={stageLighting.variants}
              initial="hidden"
              animate="visible"
            />
          ))}
        </div>
      )}
      
      {children}
    </motion.section>
  );
};

// ========================================
// ROYAL ENTRANCE HERO
// ========================================

interface RoyalEntranceHeroProps {
  children: ReactNode;
  className?: string;
  showCrown?: boolean;
}

export const RoyalEntranceHero: React.FC<RoyalEntranceHeroProps> = ({
  children,
  className = '',
  showCrown = true
}) => {
  const animation = useTheatricalAnimation('curtainReveal');

  return (
    <motion.section
      ref={animation.ref}
      variants={animation.variants}
      initial={animation.initial}
      animate={animation.animate}
      className={`theatrical-curtain relative ${className}`}
    >
      {/* Crown decoration */}
      {showCrown && (
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
          variants={theatricalVariants.crownEntrance}
          initial="hidden"
          animate={animation.animate}
        >
          <div className="crown-shimmer text-6xl">👑</div>
        </motion.div>
      )}
      
      {/* Spotlight effect */}
      <div className="spotlight-overlay active" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

// ========================================
// NAVIGATION COMPONENTS
// ========================================

interface TheatricalNavigationProps {
  items: Array<{ label: string; href: string; active?: boolean }>;
  className?: string;
}

export const TheatricalNavigation: React.FC<TheatricalNavigationProps> = ({
  items,
  className = ''
}) => {
  const animation = useTheatricalAnimation('elegantFloat');

  return (
    <motion.nav
      ref={animation.ref}
      variants={animation.variants}
      initial={animation.initial}
      animate={animation.animate}
      className={`${className}`}
    >
      <div className="flex items-center space-x-8">
        {items.map((item, index) => (
          <RoyalNavigationItem
            key={item.href}
            href={item.href}
            active={item.active}
            delay={index * 0.1}
          >
            {item.label}
          </RoyalNavigationItem>
        ))}
      </div>
    </motion.nav>
  );
};

interface RoyalNavigationItemProps {
  children: ReactNode;
  href: string;
  active?: boolean;
  delay?: number;
}

const RoyalNavigationItem: React.FC<RoyalNavigationItemProps> = ({
  children,
  href,
  active = false,
  delay = 0
}) => {
  return (
    <motion.a
      href={href}
      className={`
        relative font-nav-primary text-nav-size
        ${active ? 'text-crown-gold' : 'text-pearl-white'}
        transition-colors duration-300
      `}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: royalEasing.elegance }}
      whileHover={{ 
        scale: 1.05,
        color: 'var(--crown-gold)',
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      
      {/* Crown accent for active item */}
      {active && (
        <motion.span
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-crown-gold text-xs"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
        >
          ♦
        </motion.span>
      )}
      
      {/* Hover underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-crown-gold-shimmer"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

// ========================================
// BUTTON COMPONENTS
// ========================================

interface TheatricalButtonProps {
  children: ReactNode;
  variant?: 'royal' | 'rock' | 'elegant';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const TheatricalButton: React.FC<TheatricalButtonProps> = ({
  children,
  variant = 'royal',
  size = 'md',
  className = '',
  onClick,
  disabled = false
}) => {
  const baseClasses = 'relative overflow-hidden font-body-accent font-semibold transition-all duration-300';
  
  const variantClasses = {
    royal: 'metallic-shine bg-gradient-to-r from-royal-bronze to-crown-gold text-deep-black',
    rock: 'bg-gradient-to-r from-rock-steel to-stage-platinum-bright text-deep-black',
    elegant: 'bg-gradient-to-r from-velvet-burgundy to-royal-purple text-pearl-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: disabled ? 1 : 1.02,
        boxShadow: disabled ? 'none' : '0 10px 30px rgba(212, 175, 55, 0.3)'
      }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2, ease: royalEasing.elegance }}
    >
      {children}
      
      {/* Shine effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: royalEasing.shimmer }}
      />
    </motion.button>
  );
};

// ========================================
// CARD COMPONENTS
// ========================================

interface PerformanceCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const PerformanceCard: React.FC<PerformanceCardProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  const animation = useTheatricalAnimation('performanceCard');

  return (
    <motion.div
      ref={animation.ref}
      variants={animation.variants}
      initial={animation.initial}
      animate={animation.animate}
      whileHover={animation.whileHover}
      transition={{ delay }}
      className={`
        relative bg-gradient-to-br from-charcoal-stage to-midnight-velvet
        border border-royal-bronze/20 rounded-2xl p-6
        backdrop-blur-sm stage-ready
        ${className}
      `}
    >
      {/* Elegant border accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-crown-gold/10 to-transparent pointer-events-none" />
      
      {/* Crown corner decoration */}
      <div className="absolute top-2 right-2 text-crown-gold/30 text-sm">♦</div>
      
      {children}
    </motion.div>
  );
};

// ========================================
// TEXT EFFECTS
// ========================================

interface RoyalTextProps {
  children: ReactNode;
  variant?: 'title' | 'subtitle' | 'body';
  gradient?: boolean;
  shimmer?: boolean;
  className?: string;
}

export const RoyalText: React.FC<RoyalTextProps> = ({
  children,
  variant = 'body',
  gradient = false,
  shimmer = false,
  className = ''
}) => {
  const baseClasses = {
    title: 'text-display-lg font-display-primary',
    subtitle: 'text-section-title font-display-secondary', 
    body: 'text-content-primary font-body-primary'
  };
  
  const gradientClass = gradient ? 'text-gradient-royal' : '';
  const shimmerClass = shimmer ? 'crown-shimmer' : '';

  return (
    <motion.div
      className={`${baseClasses[variant]} ${gradientClass} ${shimmerClass} ${className}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: royalEasing.elegance }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

// ========================================
// STAGE EFFECTS COMPONENTS
// ========================================

interface PearlCascadeProps {
  count?: number;
  className?: string;
  active?: boolean;
}

export const PearlCascade: React.FC<PearlCascadeProps> = ({
  count = 10,
  className = '',
  active = false
}) => {
  const [pearls, setPearls] = useState<Array<{ id: number; delay: number; left: number }>>([]);

  useEffect(() => {
    if (!active) return;

    const newPearls = Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      left: Math.random() * 100
    }));

    setPearls(newPearls);
  }, [active, count]);

  if (!active) return null;

  return (
    <div className={`pearl-cascade absolute inset-0 pointer-events-none ${className}`}>
      {pearls.map((pearl) => (
        <motion.div
          key={pearl.id}
          className="pearl"
          style={{ left: `${pearl.left}%` }}
          initial={{ y: -20, opacity: 0, scale: 0 }}
          animate={{ y: 300, opacity: 1, scale: 1 }}
          transition={{
            duration: 4,
            delay: pearl.delay,
            ease: royalEasing.elegance,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 3
          }}
        />
      ))}
    </div>
  );
};

interface StageReadyProps {
  children: ReactNode;
  className?: string;
}

export const StageReady: React.FC<StageReadyProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`stage-ready ${className}`}>
      {children}
    </div>
  );
};