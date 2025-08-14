/**
 * STAGE & PERFORMANCE VISUAL ELEMENTS
 * Spotlight gradients, curtain transitions, vintage amplifier textures, stage lighting effects
 * For The Dutch Queen - Premium Queen tribute band
 */

import React from 'react';
import { cn } from '@/lib/utils';
import { Crown } from './RoyalElements';

// =============================================================================
// STAGE SPOTLIGHT COMPONENTS - Dynamic lighting effects
// =============================================================================

interface SpotlightProps {
  intensity?: 'low' | 'medium' | 'high' | 'dramatic';
  color?: 'white' | 'amber' | 'royal' | 'rainbow';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  className?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({
  intensity = 'medium',
  color = 'white',
  size = 'md',
  animate = true,
  className
}) => {
  const intensities = {
    low: 'opacity-20',
    medium: 'opacity-30',
    high: 'opacity-40',
    dramatic: 'opacity-60'
  };

  const colors = {
    white: 'from-spotlight-white via-spotlight-white/50 to-transparent',
    amber: 'from-stage-amber via-stage-amber-deep/50 to-transparent',
    royal: 'from-royal-purple via-royal-purple-deep/50 to-transparent',
    rainbow: 'from-stage-amber via-royal-purple to-spotlight-white'
  };

  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96'
  };

  const baseClasses = cn(
    'absolute pointer-events-none rounded-full bg-gradient-radial',
    'blur-xl transform-gpu',
    intensities[intensity],
    colors[color],
    sizes[size],
    animate && 'animate-stage-spotlight',
    className
  );

  return <div className={baseClasses} />;
};

// =============================================================================
// STAGE CURTAIN - Theatrical transitions and backdrops
// =============================================================================

interface StageCurtainProps {
  state?: 'closed' | 'opening' | 'open' | 'closing';
  style?: 'velvet' | 'satin' | 'royal';
  className?: string;
  children?: React.ReactNode;
}

const StageCurtain: React.FC<StageCurtainProps> = ({
  state = 'open',
  style = 'velvet',
  className,
  children
}) => {
  const styles = {
    velvet: 'bg-gradient-to-b from-velvet-burgundy via-velvet-wine to-velvet-shadow',
    satin: 'bg-gradient-to-b from-stage-platinum via-pearl-shimmer to-stage-platinum-shadow',
    royal: 'bg-gradient-to-b from-royal-purple via-royal-purple-deep to-velvet-shadow'
  };

  const states = {
    closed: 'translate-x-0',
    opening: 'translate-x-1/4 transition-transform duration-2000 ease-in-out',
    open: 'translate-x-full transition-transform duration-1000 ease-in-out',
    closing: 'translate-x-1/4 transition-transform duration-2000 ease-in-out'
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Left curtain panel */}
      <div className={cn(
        'absolute top-0 left-0 w-1/2 h-full z-10',
        styles[style],
        states[state],
        'shadow-2xl border-r-2 border-royal-bronze'
      )}>
        {/* Curtain texture pattern */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="h-full w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent"
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>
        
        {/* Curtain rings */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-royal-bronze via-crown-gold to-royal-bronze">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="absolute top-1 w-2 h-2 bg-crown-gold rounded-full shadow-md"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>

      {/* Right curtain panel */}
      <div className={cn(
        'absolute top-0 right-0 w-1/2 h-full z-10 transform scale-x-[-1]',
        styles[style],
        states[state],
        'shadow-2xl border-l-2 border-royal-bronze'
      )}>
        {/* Same texture pattern as left */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="h-full w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent"
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>
        
        {/* Curtain rings */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-royal-bronze via-crown-gold to-royal-bronze">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="absolute top-1 w-2 h-2 bg-crown-gold rounded-full shadow-md"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>

      {/* Stage content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
};

// =============================================================================
// VINTAGE AMPLIFIER - Rock equipment aesthetics
// =============================================================================

interface VintageAmplifierProps {
  size?: 'stack' | 'combo' | 'head';
  brand?: 'marshall' | 'vox' | 'fender' | 'custom';
  className?: string;
}

const VintageAmplifier: React.FC<VintageAmplifierProps> = ({
  size = 'combo',
  brand = 'custom',
  className
}) => {
  const sizes = {
    stack: 'w-32 h-48',
    combo: 'w-24 h-32',
    head: 'w-32 h-16'
  };

  const brands = {
    marshall: {
      body: 'bg-gradient-to-b from-rich-black via-charcoal-stage to-deep-black',
      front: 'bg-gradient-to-b from-charcoal-stage via-rich-black to-deep-black',
      text: 'text-pearl-white'
    },
    vox: {
      body: 'bg-gradient-to-b from-stage-amber-deep via-royal-bronze to-royal-bronze-dark',
      front: 'bg-gradient-to-b from-royal-bronze via-stage-amber-deep to-royal-bronze-dark',
      text: 'text-deep-black'
    },
    fender: {
      body: 'bg-gradient-to-b from-pearl-white via-pearl-cream to-stage-platinum',
      front: 'bg-gradient-to-b from-stage-platinum via-pearl-shimmer to-pearl-cream',
      text: 'text-rich-black'
    },
    custom: {
      body: 'bg-gradient-to-b from-velvet-burgundy via-queen-burgundy-dark to-deep-black',
      front: 'bg-gradient-to-b from-queen-burgundy via-velvet-wine to-velvet-shadow',
      text: 'text-crown-gold'
    }
  };

  const brandStyle = brands[brand];

  return (
    <div className={cn('relative', sizes[size], className)}>
      {/* Amplifier body */}
      <div className={cn('w-full h-full rounded-lg shadow-2xl border border-royal-bronze', brandStyle.body)}>
        
        {/* Speaker grille */}
        <div className={cn('absolute inset-4 rounded border-2 border-royal-bronze', brandStyle.front)}>
          {/* Speaker holes pattern */}
          <div className="absolute inset-2 grid grid-cols-8 gap-1">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-deep-black rounded-full opacity-60"
              />
            ))}
          </div>
          
          {/* Center speaker cone */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-radial from-charcoal-stage via-rich-black to-deep-black border border-royal-bronze" />
        </div>

        {/* Control panel */}
        <div className="absolute top-2 left-2 right-2 h-8 bg-gradient-to-r from-royal-bronze via-crown-gold to-royal-bronze rounded border border-royal-bronze-dark flex items-center justify-around">
          {/* Knobs */}
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-gradient-radial from-crown-gold via-royal-bronze to-royal-bronze-dark rounded-full shadow-inner border border-royal-bronze-dark"
            />
          ))}
        </div>

        {/* Brand logo area */}
        <div className={cn('absolute top-12 left-1/2 transform -translate-x-1/2', brandStyle.text)}>
          <Crown size="sm" variant="silhouette" className="mx-auto mb-1" />
          <div className="text-xs font-bold text-center">DUTCH QUEEN</div>
        </div>

        {/* Input jack */}
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-gradient-radial from-royal-bronze to-royal-bronze-dark rounded-full border border-crown-gold" />
        
        {/* Power indicator LED */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-radial from-stage-amber via-crown-gold to-stage-amber-deep rounded-full shadow-lg animate-pulse" />
      </div>
    </div>
  );
};

// =============================================================================
// STAGE LIGHTING RIG - Professional lighting setup
// =============================================================================

interface StageLightingRigProps {
  lights?: number;
  pattern?: 'wash' | 'spot' | 'beam' | 'mixed';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const StageLightingRig: React.FC<StageLightingRigProps> = ({
  lights = 6,
  pattern = 'mixed',
  intensity = 'medium',
  className
}) => {
  const patterns = {
    wash: ['amber', 'white', 'amber', 'white', 'amber', 'white'],
    spot: ['white', 'white', 'white', 'white', 'white', 'white'],
    beam: ['royal', 'amber', 'royal', 'amber', 'royal', 'amber'],
    mixed: ['white', 'amber', 'royal', 'white', 'amber', 'royal']
  };

  const lightColors = patterns[pattern];

  return (
    <div className={cn('relative w-full h-16', className)}>
      {/* Lighting truss */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-rock-steel via-stage-platinum to-rock-steel border border-rock-steel-bright rounded-sm shadow-lg">
        {/* Truss structure details */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stage-platinum-bright to-transparent opacity-50" />
        <div className="absolute top-1 left-0 right-0 h-0.5 bg-rock-steel-bright" />
        <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-rock-steel-dark" />
      </div>

      {/* Individual lights */}
      <div className="absolute top-4 left-0 right-0 flex justify-evenly">
        {Array.from({ length: lights }, (_, i) => {
          const color = lightColors[i % lightColors.length] as 'white' | 'amber' | 'royal';
          return (
            <div key={i} className="relative">
              {/* Light fixture */}
              <div className="w-8 h-10 bg-gradient-to-b from-rock-steel-bright via-stage-platinum to-rock-steel-dark rounded-sm border border-rock-steel shadow-lg">
                {/* Light lens */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-radial from-stage-platinum-bright via-pearl-shimmer to-stage-platinum rounded-full border border-rock-steel-bright">
                  <div className="absolute inset-1 bg-gradient-radial from-spotlight-white/80 to-transparent rounded-full" />
                </div>
              </div>
              
              {/* Light beam */}
              <Spotlight
                color={color}
                size="sm"
                intensity={intensity}
                className="top-10 left-1/2 transform -translate-x-1/2"
              />
              
              {/* Mounting bracket */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-rock-steel-dark rounded-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// =============================================================================
// VINYL RECORD - Vintage music aesthetics
// =============================================================================

interface VinylRecordProps {
  size?: 'sm' | 'md' | 'lg';
  spinning?: boolean;
  label?: string;
  className?: string;
}

const VinylRecord: React.FC<VinylRecordProps> = ({
  size = 'md',
  spinning = false,
  label = 'THE DUTCH QUEEN',
  className
}) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className={cn('relative', sizes[size], className)}>
      <div className={cn(
        'w-full h-full rounded-full bg-gradient-radial from-rich-black via-deep-black to-rich-black shadow-2xl border border-charcoal-stage relative overflow-hidden',
        spinning && 'animate-spin'
      )}>
        {/* Vinyl grooves */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute border border-charcoal-stage/30 rounded-full"
            style={{
              top: `${10 + i * 10}%`,
              left: `${10 + i * 10}%`,
              right: `${10 + i * 10}%`,
              bottom: `${10 + i * 10}%`,
            }}
          />
        ))}
        
        {/* Center label */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-gradient-radial from-queen-burgundy via-velvet-wine to-queen-burgundy-dark border border-crown-gold flex items-center justify-center">
          <div className="text-center">
            <Crown size="sm" variant="silhouette" className="mx-auto mb-1 text-crown-gold" />
            <div className="text-xs text-crown-gold font-bold leading-tight">
              {label.split(' ').map((word, i) => (
                <div key={i}>{word}</div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Center hole */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-deep-black rounded-full border border-charcoal-stage" />
      </div>
    </div>
  );
};

// =============================================================================
// STAGE FOG EFFECT - Atmospheric stage presence
// =============================================================================

interface StageFogProps {
  density?: 'light' | 'medium' | 'heavy';
  color?: 'white' | 'blue' | 'purple' | 'amber';
  direction?: 'rising' | 'drifting' | 'swirling';
  className?: string;
}

const StageFog: React.FC<StageFogProps> = ({
  density = 'medium',
  color = 'white',
  direction = 'rising',
  className
}) => {
  const densities = {
    light: 'opacity-10',
    medium: 'opacity-20',
    heavy: 'opacity-30'
  };

  const colors = {
    white: 'from-spotlight-white/20 via-pearl-shimmer/10 to-transparent',
    blue: 'from-stage-platinum/20 via-pearl-white/10 to-transparent',
    purple: 'from-royal-purple/20 via-royal-purple-deep/10 to-transparent',
    amber: 'from-stage-amber/20 via-stage-amber-deep/10 to-transparent'
  };

  const directions = {
    rising: 'bg-gradient-to-t',
    drifting: 'bg-gradient-to-r',
    swirling: 'bg-gradient-radial'
  };

  return (
    <div className={cn(
      'absolute inset-0 pointer-events-none',
      densities[density],
      directions[direction],
      colors[color],
      'animate-pulse',
      className
    )}>
      {/* Additional fog layers for depth */}
      <div className={cn('absolute inset-0', directions[direction], colors[color], 'opacity-50 animate-pulse delay-1000')} />
      <div className={cn('absolute inset-0', directions[direction], colors[color], 'opacity-30 animate-pulse delay-2000')} />
    </div>
  );
};

// =============================================================================
// EXPORTS
// =============================================================================

export {
  Spotlight,
  StageCurtain,
  VintageAmplifier,
  StageLightingRig,
  VinylRecord,
  StageFog
};