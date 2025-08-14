/**
 * QUEEN-SPECIFIC VISUAL REFERENCES
 * Tasteful silhouettes, guitar pick elements, sound wave visualizations
 * Original design elements inspired by Queen aesthetic (legally compliant)
 * For The Dutch Queen - Premium Queen tribute band
 */

import React from 'react';
import { cn } from '@/lib/utils';

// =============================================================================
// PERFORMER SILHOUETTE - Tasteful tribute performer silhouettes
// =============================================================================

interface PerformerSilhouetteProps {
  pose?: 'microphone' | 'guitar' | 'piano' | 'drums' | 'commanding';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

const PerformerSilhouette: React.FC<PerformerSilhouetteProps> = ({
  pose = 'microphone',
  size = 'md',
  className,
  animate = false
}) => {
  const sizes = {
    sm: 'w-16 h-20',
    md: 'w-24 h-30',
    lg: 'w-32 h-40',
    xl: 'w-48 h-60'
  };

  const baseClasses = cn(
    'inline-block opacity-80',
    sizes[size],
    animate && 'transition-transform hover:scale-105',
    className
  );

  if (pose === 'microphone') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 120 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="silhouette-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.72 0.08 35 / 0.8)" />
            <stop offset="50%" stopColor="oklch(0.45 0.25 25 / 0.9)" />
            <stop offset="100%" stopColor="oklch(0.25 0.25 18 / 0.8)" />
          </linearGradient>
        </defs>
        
        {/* Performer body silhouette */}
        <path
          d="M60 20 C50 20, 45 30, 50 40 L50 80 C48 85, 45 90, 40 95 L40 110 C40 120, 30 130, 25 140 L35 150 L85 150 C80 140, 70 130, 70 120 L70 110 C75 90, 72 85, 70 80 L70 40 C75 30, 70 20, 60 20 Z"
          fill="url(#silhouette-gradient)"
        />
        
        {/* Microphone stand */}
        <rect x="58" y="50" width="4" height="60" fill="oklch(0.58 0.05 230)" />
        <circle cx="60" cy="45" r="6" fill="oklch(0.82 0.02 200)" />
        
        {/* Base stand */}
        <path d="M45 110 L75 110 L70 115 L50 115 Z" fill="oklch(0.58 0.05 230)" />
        
        {/* Dynamic pose elements */}
        <path
          d="M35 70 C25 75, 20 80, 25 90"
          stroke="url(#silhouette-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  if (pose === 'guitar') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 120 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="guitar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.72 0.08 35 / 0.8)" />
            <stop offset="50%" stopColor="oklch(0.45 0.25 25 / 0.9)" />
            <stop offset="100%" stopColor="oklch(0.25 0.25 18 / 0.8)" />
          </linearGradient>
        </defs>
        
        {/* Performer with guitar */}
        <path
          d="M60 15 C50 15, 45 25, 50 35 L50 75 C48 80, 50 85, 55 90 L60 140 L65 90 C70 85, 72 80, 70 75 L70 35 C75 25, 70 15, 60 15 Z"
          fill="url(#guitar-gradient)"
        />
        
        {/* Guitar body */}
        <ellipse cx="45" cy="85" rx="15" ry="20" fill="oklch(0.68 0.15 45)" stroke="oklch(0.58 0.12 40)" strokeWidth="2" />
        
        {/* Guitar neck */}
        <rect x="35" y="50" width="6" height="35" fill="oklch(0.45 0.08 35)" />
        
        {/* Guitar headstock */}
        <rect x="32" y="45" width="12" height="8" fill="oklch(0.45 0.08 35)" />
        
        {/* Strings */}
        {Array.from({ length: 6 }, (_, i) => (
          <line
            key={i}
            x1="38"
            y1="50"
            x2="45"
            y2="85"
            stroke="oklch(0.82 0.02 200)"
            strokeWidth="0.5"
            opacity="0.8"
          />
        ))}
      </svg>
    );
  }

  if (pose === 'commanding') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 120 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="commanding-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.12 50 / 0.9)" />
            <stop offset="50%" stopColor="oklch(0.72 0.08 35 / 1.0)" />
            <stop offset="100%" stopColor="oklch(0.45 0.25 25 / 0.9)" />
          </linearGradient>
        </defs>
        
        {/* Commanding pose silhouette */}
        <path
          d="M60 15 C50 15, 45 25, 50 35 L50 75 C45 80, 40 85, 35 90 L30 100 C25 110, 30 120, 40 125 L45 140 L75 140 L80 125 C90 120, 95 110, 90 100 L85 90 C80 85, 75 80, 70 75 L70 35 C75 25, 70 15, 60 15 Z"
          fill="url(#commanding-gradient)"
        />
        
        {/* Raised arm gesture */}
        <path
          d="M70 50 C85 45, 95 50, 90 65"
          stroke="url(#commanding-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Cape or flowing element */}
        <path
          d="M50 70 C40 75, 30 85, 35 100 C40 95, 50 90, 60 85"
          fill="oklch(0.45 0.25 25 / 0.6)"
        />
      </svg>
    );
  }

  // Default microphone pose
  return null;
};

// =============================================================================
// GUITAR PICK ELEMENTS - Musical accent shapes
// =============================================================================

interface GuitarPickProps {
  design?: 'classic' | 'royal' | 'flame' | 'crown';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'bronze' | 'gold' | 'pearl' | 'burgundy';
  className?: string;
  text?: string;
}

const GuitarPick: React.FC<GuitarPickProps> = ({
  design = 'classic',
  size = 'md',
  color = 'bronze',
  className,
  text
}) => {
  const sizes = {
    xs: 'w-4 h-5',
    sm: 'w-6 h-8',
    md: 'w-8 h-10',
    lg: 'w-12 h-15'
  };

  const colors = {
    bronze: {
      fill: 'url(#pick-bronze)',
      stroke: 'oklch(0.58 0.12 30)'
    },
    gold: {
      fill: 'url(#pick-gold)',
      stroke: 'oklch(0.68 0.15 45)'
    },
    pearl: {
      fill: 'url(#pick-pearl)',
      stroke: 'oklch(0.82 0.02 200)'
    },
    burgundy: {
      fill: 'url(#pick-burgundy)',
      stroke: 'oklch(0.35 0.28 20)'
    }
  };

  const baseClasses = cn('inline-block', sizes[size], className);

  return (
    <svg
      className={baseClasses}
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pick-bronze" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.82 0.06 40)" />
          <stop offset="50%" stopColor="oklch(0.72 0.08 35)" />
          <stop offset="100%" stopColor="oklch(0.58 0.12 30)" />
        </linearGradient>
        <linearGradient id="pick-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.90 0.10 55)" />
          <stop offset="50%" stopColor="oklch(0.85 0.12 50)" />
          <stop offset="100%" stopColor="oklch(0.68 0.15 45)" />
        </linearGradient>
        <linearGradient id="pick-pearl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.96 0.02 90)" />
          <stop offset="50%" stopColor="oklch(0.94 0.03 85)" />
          <stop offset="100%" stopColor="oklch(0.82 0.02 200)" />
        </linearGradient>
        <linearGradient id="pick-burgundy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.45 0.25 25)" />
          <stop offset="50%" stopColor="oklch(0.38 0.30 22)" />
          <stop offset="100%" stopColor="oklch(0.25 0.25 18)" />
        </linearGradient>
      </defs>
      
      {/* Guitar pick shape */}
      <path
        d="M16 5 C20 5, 25 8, 27 15 C27 22, 23 28, 16 35 C9 28, 5 22, 5 15 C7 8, 12 5, 16 5 Z"
        fill={colors[color].fill}
        stroke={colors[color].stroke}
        strokeWidth="1"
      />
      
      {/* Design patterns */}
      {design === 'royal' && (
        <>
          <circle cx="16" cy="15" r="3" fill="oklch(0.48 0.25 310)" opacity="0.8" />
          <path d="M16 10 L18 12 L16 14 L14 12 Z" fill="oklch(0.85 0.12 50)" />
        </>
      )}
      
      {design === 'flame' && (
        <path
          d="M16 8 C18 12, 20 16, 16 20 C14 16, 16 12, 16 8 Z M12 12 C14 15, 16 18, 12 22 C10 18, 12 15, 12 12 Z"
          fill="oklch(0.75 0.15 70)"
          opacity="0.7"
        />
      )}
      
      {design === 'crown' && (
        <path
          d="M12 12 L14 8 L16 10 L18 8 L20 12 L18 15 L16 13 L14 15 Z"
          fill="oklch(0.85 0.12 50)"
          opacity="0.8"
        />
      )}
      
      {/* Text if provided */}
      {text && (
        <text
          x="16"
          y="25"
          textAnchor="middle"
          className="text-xs font-bold fill-current"
          fill="oklch(0.15 0.02 30)"
        >
          {text}
        </text>
      )}
    </svg>
  );
};

// =============================================================================
// SOUND WAVE VISUALIZATIONS - Audio frequency displays
// =============================================================================

interface SoundWaveProps {
  pattern?: 'equalizer' | 'waveform' | 'circular' | 'spectrum';
  intensity?: 'low' | 'medium' | 'high' | 'dynamic';
  color?: 'bronze' | 'gold' | 'royal' | 'rainbow';
  bars?: number;
  animate?: boolean;
  className?: string;
}

const SoundWave: React.FC<SoundWaveProps> = ({
  pattern = 'equalizer',
  intensity = 'medium',
  color = 'gold',
  bars = 12,
  animate = true,
  className
}) => {
  const colors = {
    bronze: 'oklch(0.72 0.08 35)',
    gold: 'oklch(0.85 0.12 50)',
    royal: 'oklch(0.48 0.25 310)',
    rainbow: 'url(#rainbow-gradient)'
  };

  const intensityMultipliers = {
    low: 0.5,
    medium: 1,
    high: 1.5,
    dynamic: 1.2
  };

  const baseClasses = cn('inline-block', className);

  if (pattern === 'equalizer') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.75 0.15 70)" />
            <stop offset="25%" stopColor="oklch(0.85 0.12 50)" />
            <stop offset="50%" stopColor="oklch(0.48 0.25 310)" />
            <stop offset="75%" stopColor="oklch(0.72 0.08 35)" />
            <stop offset="100%" stopColor="oklch(0.75 0.15 70)" />
          </linearGradient>
        </defs>
        
        {Array.from({ length: bars }, (_, i) => {
          const height = Math.round((20 + Math.sin(i * 0.5) * 15) * intensityMultipliers[intensity] * 100) / 100;
          const x = (i * 10) + 5;
          
          return (
            <rect
              key={i}
              x={x}
              y={Math.round((60 - height) * 100) / 100}
              width="6"
              height={Math.round(height * 100) / 100}
              fill={colors[color]}
              rx="3"
              className={animate ? 'animate-pulse' : ''}
              style={{
                animationDelay: animate ? `${i * 0.1}s` : undefined,
                animationDuration: animate ? `${1 + (i % 3) * 0.3}s` : undefined
              }}
            />
          );
        })}
      </svg>
    );
  }

  if (pattern === 'waveform') {
    const wavePoints = Array.from({ length: 50 }, (_, i) => {
      const x = Math.round(i * 2.4 * 100) / 100;
      const y = Math.round((30 + Math.sin(i * 0.3) * 20 * intensityMultipliers[intensity]) * 100) / 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg
        className={baseClasses}
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points={wavePoints}
          fill="none"
          stroke={colors[color]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animate ? 'animate-pulse' : ''}
        />
        
        {/* Fill area under wave */}
        <polygon
          points={`0,60 ${wavePoints} 120,60`}
          fill={colors[color]}
          opacity="0.3"
          className={animate ? 'animate-pulse' : ''}
        />
      </svg>
    );
  }

  if (pattern === 'circular') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: bars }, (_, i) => {
          const angle = (i / bars) * 360;
          const radius = 30;
          const length = Math.round((15 + Math.sin(i * 0.8) * 10) * intensityMultipliers[intensity] * 100) / 100;
          const startX = Math.round((60 + Math.cos((angle - 90) * Math.PI / 180) * radius) * 100) / 100;
          const startY = Math.round((60 + Math.sin((angle - 90) * Math.PI / 180) * radius) * 100) / 100;
          const endX = Math.round((60 + Math.cos((angle - 90) * Math.PI / 180) * (radius + length)) * 100) / 100;
          const endY = Math.round((60 + Math.sin((angle - 90) * Math.PI / 180) * (radius + length)) * 100) / 100;
          
          return (
            <line
              key={i}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke={colors[color]}
              strokeWidth="3"
              strokeLinecap="round"
              className={animate ? 'animate-pulse' : ''}
              style={{
                animationDelay: animate ? `${i * 0.1}s` : undefined,
                transformOrigin: '60px 60px'
              }}
            />
          );
        })}
        
        {/* Center circle */}
        <circle
          cx="60"
          cy="60"
          r="25"
          fill="none"
          stroke={colors[color]}
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    );
  }

  // Default pattern
  return null;
};

// =============================================================================
// QUEEN LOGO INSPIRED ELEMENTS - Original designs inspired by Queen aesthetic
// =============================================================================

interface QueenInspiredElementProps {
  element?: 'crest' | 'wings' | 'lightning' | 'crown-emblem';
  size?: 'sm' | 'md' | 'lg';
  style?: 'outline' | 'filled' | 'gradient';
  className?: string;
}

const QueenInspiredElement: React.FC<QueenInspiredElementProps> = ({
  element = 'crest',
  size = 'md',
  style = 'gradient',
  className
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const baseClasses = cn('inline-block', sizes[size], className);

  if (element === 'crest') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="crest-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.12 50)" />
            <stop offset="50%" stopColor="oklch(0.72 0.08 35)" />
            <stop offset="100%" stopColor="oklch(0.45 0.25 25)" />
          </linearGradient>
        </defs>
        
        {/* Shield shape */}
        <path
          d="M24 4 C16 4, 8 8, 6 16 C6 28, 12 36, 24 44 C36 36, 42 28, 42 16 C40 8, 32 4, 24 4 Z"
          fill={style === 'gradient' ? 'url(#crest-gradient)' : 'oklch(0.72 0.08 35)'}
          stroke="oklch(0.45 0.25 25)"
          strokeWidth="1"
        />
        
        {/* Inner design */}
        <circle cx="24" cy="20" r="6" fill="oklch(0.48 0.25 310)" />
        <path d="M24 14 L26 16 L24 18 L22 16 Z" fill="oklch(0.85 0.12 50)" />
        
        {/* Bottom flourish */}
        <path
          d="M18 28 C20 32, 22 34, 24 36 C26 34, 28 32, 30 28"
          stroke="oklch(0.85 0.12 50)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }

  if (element === 'wings') {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 60 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left wing */}
        <path
          d="M5 12 C2 8, 4 4, 12 6 C18 8, 22 10, 25 12 C22 14, 18 16, 12 18 C4 20, 2 16, 5 12 Z"
          fill={style === 'gradient' ? 'url(#wing-gradient)' : 'oklch(0.72 0.08 35)'}
          stroke="oklch(0.45 0.25 25)"
          strokeWidth="1"
        />
        
        {/* Right wing */}
        <path
          d="M55 12 C58 8, 56 4, 48 6 C42 8, 38 10, 35 12 C38 14, 42 16, 48 18 C56 20, 58 16, 55 12 Z"
          fill={style === 'gradient' ? 'url(#wing-gradient)' : 'oklch(0.72 0.08 35)'}
          stroke="oklch(0.45 0.25 25)"
          strokeWidth="1"
        />
        
        {/* Center element */}
        <circle cx="30" cy="12" r="3" fill="oklch(0.85 0.12 50)" />
        
        <defs>
          <linearGradient id="wing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.12 50)" />
            <stop offset="100%" stopColor="oklch(0.45 0.25 25)" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Default crest
  return null;
};

// =============================================================================
// EXPORTS
// =============================================================================

export {
  PerformerSilhouette,
  GuitarPick,
  SoundWave,
  QueenInspiredElement
};