/**
 * ROYAL BRAND ELEMENTS SYSTEM
 * Crown motifs, scepter dividers, royal heraldic patterns, and gem-like effects
 * For The Dutch Queen - Premium Queen tribute band
 */

import React from 'react';
import { cn } from '@/lib/utils';

// =============================================================================
// CROWN COMPONENTS - SVG-based royal crown motifs
// =============================================================================

interface CrownProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'simple' | 'ornate' | 'silhouette';
  className?: string;
  animate?: boolean;
}

export const Crown: React.FC<CrownProps> = ({ 
  size = 'md', 
  variant = 'simple',
  className,
  animate = false
}) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const baseClasses = cn(
    'inline-block',
    sizes[size],
    animate && 'animate-crown-shimmer',
    className
  );

  if (variant === 'simple') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="crown-gradient-simple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.12 50)" />
            <stop offset="50%" stopColor="oklch(0.72 0.08 35)" />
            <stop offset="100%" stopColor="oklch(0.68 0.15 45)" />
          </linearGradient>
        </defs>
        
        {/* Crown base */}
        <path
          d="M4 24 L28 24 L26 20 L22 22 L16 18 L10 22 L6 20 Z"
          fill="url(#crown-gradient-simple)"
          stroke="oklch(0.68 0.15 45)"
          strokeWidth="1"
        />
        
        {/* Crown peaks */}
        <path
          d="M6 20 L8 12 L10 18 L12 10 L14 18 L16 8 L18 18 L20 10 L22 18 L24 12 L26 20"
          fill="url(#crown-gradient-simple)"
          stroke="oklch(0.68 0.15 45)"
          strokeWidth="1"
        />
        
        {/* Crown gems */}
        <circle cx="8" cy="15" r="1.5" fill="oklch(0.48 0.25 310)" />
        <circle cx="16" cy="11" r="2" fill="oklch(0.75 0.15 70)" />
        <circle cx="24" cy="15" r="1.5" fill="oklch(0.48 0.25 310)" />
      </svg>
    );
  }

  if (variant === 'ornate') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="crown-gradient-ornate" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.12 50)" />
            <stop offset="30%" stopColor="oklch(0.90 0.10 55)" />
            <stop offset="70%" stopColor="oklch(0.72 0.08 35)" />
            <stop offset="100%" stopColor="oklch(0.68 0.15 45)" />
          </linearGradient>
          <radialGradient id="gem-gradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="oklch(0.85 0.12 50)" />
            <stop offset="70%" stopColor="oklch(0.48 0.25 310)" />
            <stop offset="100%" stopColor="oklch(0.25 0.25 18)" />
          </radialGradient>
        </defs>
        
        {/* Ornate crown base with decorative elements */}
        <path
          d="M4 36 L44 36 L42 32 L38 34 L32 28 L24 32 L16 28 L10 34 L6 32 Z"
          fill="url(#crown-gradient-ornate)"
          stroke="oklch(0.68 0.15 45)"
          strokeWidth="1.5"
        />
        
        {/* Ornate peaks with curves */}
        <path
          d="M6 32 C8 24, 10 20, 12 28 C14 16, 16 12, 18 26 C20 10, 24 8, 28 26 C30 12, 32 16, 34 28 C36 20, 38 24, 42 32"
          fill="url(#crown-gradient-ornate)"
          stroke="oklch(0.68 0.15 45)"
          strokeWidth="1.5"
        />
        
        {/* Decorative flourishes */}
        <path
          d="M12 24 C14 22, 16 24, 12 26"
          fill="oklch(0.85 0.12 50)"
          stroke="oklch(0.68 0.15 45)"
          strokeWidth="0.5"
        />
        <path
          d="M36 24 C34 22, 32 24, 36 26"
          fill="oklch(0.85 0.12 50)"
          stroke="oklch(0.68 0.15 45)"
          strokeWidth="0.5"
        />
        
        {/* Premium gems with faceted effect */}
        <polygon
          points="12,20 10,18 14,18"
          fill="url(#gem-gradient)"
          stroke="oklch(0.48 0.25 310)"
          strokeWidth="0.5"
        />
        <polygon
          points="24,14 20,12 28,12"
          fill="url(#gem-gradient)"
          stroke="oklch(0.75 0.15 70)"
          strokeWidth="0.5"
        />
        <polygon
          points="36,20 34,18 38,18"
          fill="url(#gem-gradient)"
          stroke="oklch(0.48 0.25 310)"
          strokeWidth="0.5"
        />
      </svg>
    );
  }

  // Silhouette variant
  return (
    <svg
      className={baseClasses}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 24 L28 24 L26 20 L24 12 L22 18 L20 10 L18 18 L16 8 L14 18 L12 10 L10 18 L8 12 L6 20 Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
};

// =============================================================================
// SCEPTER DIVIDER - Royal section separators
// =============================================================================

interface ScepterDividerProps {
  width?: 'sm' | 'md' | 'lg' | 'full';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const ScepterDivider: React.FC<ScepterDividerProps> = ({
  width = 'md',
  orientation = 'horizontal',
  className
}) => {
  const widths = {
    sm: 'w-24',
    md: 'w-48',
    lg: 'w-64',
    full: 'w-full'
  };

  const isHorizontal = orientation === 'horizontal';
  
  const baseClasses = cn(
    'mx-auto',
    isHorizontal ? `${widths[width]} h-8` : 'w-8 h-32',
    className
  );

  return (
    <svg
      className={baseClasses}
      viewBox={isHorizontal ? "0 0 192 32" : "0 0 32 128"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient 
          id="scepter-gradient" 
          x1="0%" 
          y1="0%" 
          x2={isHorizontal ? "100%" : "0%"} 
          y2={isHorizontal ? "0%" : "100%"}
        >
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor="oklch(0.72 0.08 35)" />
          <stop offset="50%" stopColor="oklch(0.85 0.12 50)" />
          <stop offset="80%" stopColor="oklch(0.72 0.08 35)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      
      {isHorizontal ? (
        <>
          {/* Horizontal scepter shaft */}
          <rect x="20" y="15" width="152" height="2" fill="url(#scepter-gradient)" />
          
          {/* Left ornament */}
          <circle cx="16" cy="16" r="4" fill="oklch(0.85 0.12 50)" stroke="oklch(0.72 0.08 35)" strokeWidth="1" />
          <circle cx="16" cy="16" r="2" fill="oklch(0.48 0.25 310)" />
          
          {/* Center crown */}
          <Crown size="sm" variant="silhouette" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-crown-gold" />
          
          {/* Right ornament */}
          <circle cx="176" cy="16" r="4" fill="oklch(0.85 0.12 50)" stroke="oklch(0.72 0.08 35)" strokeWidth="1" />
          <circle cx="176" cy="16" r="2" fill="oklch(0.48 0.25 310)" />
        </>
      ) : (
        <>
          {/* Vertical scepter shaft */}
          <rect x="15" y="20" width="2" height="88" fill="url(#scepter-gradient)" />
          
          {/* Top ornament */}
          <circle cx="16" cy="16" r="4" fill="oklch(0.85 0.12 50)" stroke="oklch(0.72 0.08 35)" strokeWidth="1" />
          <circle cx="16" cy="16" r="2" fill="oklch(0.48 0.25 310)" />
          
          {/* Bottom ornament */}
          <circle cx="16" cy="112" r="4" fill="oklch(0.85 0.12 50)" stroke="oklch(0.72 0.08 35)" strokeWidth="1" />
          <circle cx="16" cy="112" r="2" fill="oklch(0.48 0.25 310)" />
        </>
      )}
    </svg>
  );
};

// =============================================================================
// ROYAL HERALDIC PATTERNS - Background decorative elements
// =============================================================================

interface RoyalPatternProps {
  pattern?: 'fleur' | 'damask' | 'chevron' | 'crown-repeat';
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
  className?: string;
}

export const RoyalPattern: React.FC<RoyalPatternProps> = ({
  pattern = 'fleur',
  size = 'md',
  opacity = 0.1,
  className
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const baseClasses = cn(
    'absolute pointer-events-none',
    sizes[size],
    className
  );

  const patternColor = `oklch(0.72 0.08 35 / ${opacity})`;

  if (pattern === 'fleur') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2 C10 6, 8 8, 12 12 C16 8, 14 6, 12 2 Z M12 12 C8 10, 6 8, 2 12 C6 16, 8 14, 12 12 Z M12 12 C14 16, 16 18, 22 12 C18 8, 16 10, 12 12 Z M12 12 C10 16, 8 18, 12 22 C16 18, 14 16, 12 12 Z"
          fill={patternColor}
        />
      </svg>
    );
  }

  if (pattern === 'damask') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 4 C12 8, 8 12, 16 16 C24 12, 20 8, 16 4 Z M16 16 C12 20, 8 24, 16 28 C24 24, 20 20, 16 16 Z M4 16 C8 12, 12 8, 16 16 C12 24, 8 20, 4 16 Z M28 16 C24 12, 20 8, 16 16 C20 24, 24 20, 28 16 Z"
          fill={patternColor}
        />
      </svg>
    );
  }

  if (pattern === 'chevron') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8 L12 2 L22 8 L20 10 L12 6 L4 10 Z M2 16 L12 10 L22 16 L20 18 L12 14 L4 18 Z"
          fill={patternColor}
        />
      </svg>
    );
  }

  // Crown repeat pattern
  return (
    <div className={baseClasses}>
      <Crown size="sm" variant="silhouette" className={`text-[${patternColor}]`} />
    </div>
  );
};

// =============================================================================
// GEM EFFECTS - Faceted button accents and decorative elements
// =============================================================================

interface GemButtonProps {
  children: React.ReactNode;
  variant?: 'ruby' | 'sapphire' | 'emerald' | 'diamond';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const GemButton: React.FC<GemButtonProps> = ({
  children,
  variant = 'ruby',
  size = 'md',
  className,
  onClick
}) => {
  const variants = {
    ruby: 'bg-gradient-to-br from-queen-burgundy via-velvet-wine to-velvet-shadow hover:from-velvet-wine hover:via-queen-burgundy hover:to-velvet-burgundy',
    sapphire: 'bg-gradient-to-br from-royal-purple via-royal-purple-deep to-stage-platinum hover:from-royal-purple-deep hover:via-royal-purple hover:to-royal-purple-deep',
    emerald: 'bg-gradient-to-br from-stage-amber via-stage-amber-deep to-royal-bronze hover:from-stage-amber-deep hover:via-stage-amber hover:to-crown-gold',
    diamond: 'bg-gradient-to-br from-stage-platinum via-pearl-white to-stage-platinum-shadow hover:from-pearl-shimmer hover:via-stage-platinum-bright hover:to-stage-platinum'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseClasses = cn(
    'relative overflow-hidden rounded-lg font-semibold text-white shadow-lg transition-all duration-300 group',
    'before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-white before:to-transparent before:opacity-0 before:rotate-45 before:-translate-x-full before:transition-transform before:duration-500',
    'hover:before:translate-x-full hover:before:opacity-20',
    'transform hover:scale-105 hover:shadow-2xl active:scale-95',
    variants[variant],
    sizes[size],
    className
  );

  return (
    <button className={baseClasses} onClick={onClick}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Faceted gem effect overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white/30" />
        <div className="absolute top-0 right-0 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white/30 rotate-90" />
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/30 rotate-180" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/30 rotate-270" />
      </div>
    </button>
  );
};

// =============================================================================
// ORNAMENTAL FRAME - Royal borders and containers
// =============================================================================

interface OrnamentalFrameProps {
  children: React.ReactNode;
  style?: 'simple' | 'ornate' | 'majestic';
  className?: string;
}

export const OrnamentalFrame: React.FC<OrnamentalFrameProps> = ({
  children,
  style = 'simple',
  className
}) => {
  const styles = {
    simple: 'border-2 border-royal-bronze rounded-lg p-6',
    ornate: 'border-4 border-double border-crown-gold rounded-xl p-8 bg-gradient-to-br from-deep-black via-rich-black to-charcoal-stage',
    majestic: 'border-8 border-gradient-to-r from-royal-bronze via-crown-gold to-royal-bronze rounded-2xl p-12 bg-gradient-radial from-charcoal-stage via-midnight-velvet to-deep-black shadow-2xl'
  };

  const baseClasses = cn(
    'relative',
    styles[style],
    className
  );

  return (
    <div className={baseClasses}>
      {style === 'majestic' && (
        <>
          {/* Corner crowns for majestic style */}
          <Crown 
            size="sm" 
            variant="silhouette" 
            className="absolute -top-2 -left-2 text-crown-gold" 
          />
          <Crown 
            size="sm" 
            variant="silhouette" 
            className="absolute -top-2 -right-2 text-crown-gold" 
          />
          <Crown 
            size="sm" 
            variant="silhouette" 
            className="absolute -bottom-2 -left-2 text-crown-gold" 
          />
          <Crown 
            size="sm" 
            variant="silhouette" 
            className="absolute -bottom-2 -right-2 text-crown-gold" 
          />
        </>
      )}
      
      {children}
    </div>
  );
};

// =============================================================================
// EXPORTS
// =============================================================================

export {
  Crown,
  ScepterDivider,
  RoyalPattern,
  GemButton,
  OrnamentalFrame
};

// CSS Animation classes for crown shimmer effect (to be added to globals.css)
export const crownAnimationStyles = `
  @keyframes crown-shimmer {
    0%, 100% { filter: brightness(1) drop-shadow(0 0 4px oklch(0.85 0.12 50 / 0.5)); }
    50% { filter: brightness(1.3) drop-shadow(0 0 8px oklch(0.85 0.12 50 / 0.8)); }
  }
  
  .animate-crown-shimmer {
    animation: crown-shimmer 3s ease-in-out infinite;
  }
`;