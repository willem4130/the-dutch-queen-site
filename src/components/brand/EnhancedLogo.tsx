/**
 * ENHANCED LOGO TREATMENT WITH CROWN INTEGRATION
 * Crown-integrated branding and consistent iconography system
 * For The Dutch Queen - Premium Queen tribute band
 */

import React from 'react';
import { cn } from '@/lib/utils';
import { Crown, RoyalPattern } from './RoyalElements';
import { SoundWave } from './QueenElements';

// =============================================================================
// ENHANCED LOGO COMPONENT - Main brand treatment
// =============================================================================

interface EnhancedLogoProps {
  variant?: 'full' | 'compact' | 'icon' | 'wordmark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'royal' | 'stage' | 'minimal' | 'dramatic';
  animate?: boolean;
  className?: string;
  showTagline?: boolean;
}

const EnhancedLogo: React.FC<EnhancedLogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'royal',
  animate = true,
  className,
  showTagline = true
}) => {
  const sizes = {
    sm: {
      container: 'w-32 h-20',
      title: 'text-lg',
      subtitle: 'text-xs',
      crown: 'sm' as const
    },
    md: {
      container: 'w-48 h-28',
      title: 'text-2xl',
      subtitle: 'text-sm',
      crown: 'md' as const
    },
    lg: {
      container: 'w-64 h-36',
      title: 'text-3xl',
      subtitle: 'text-base',
      crown: 'lg' as const
    },
    xl: {
      container: 'w-80 h-48',
      title: 'text-4xl',
      subtitle: 'text-lg',
      crown: 'xl' as const
    }
  };

  const themes = {
    royal: {
      primary: 'text-gradient-royal',
      secondary: 'text-crown-gold',
      accent: 'text-royal-bronze',
      background: 'bg-gradient-to-br from-deep-black via-midnight-velvet to-charcoal-stage'
    },
    stage: {
      primary: 'text-gradient-metallic',
      secondary: 'text-stage-platinum-bright',
      accent: 'text-stage-amber',
      background: 'bg-gradient-to-br from-backstage-dark via-charcoal-stage to-rich-black'
    },
    minimal: {
      primary: 'text-royal-bronze',
      secondary: 'text-crown-gold',
      accent: 'text-stage-platinum',
      background: 'bg-transparent'
    },
    dramatic: {
      primary: 'text-gradient-dramatic',
      secondary: 'text-pearl-white',
      accent: 'text-stage-amber',
      background: 'bg-gradient-radial from-velvet-shadow via-queen-burgundy-dark to-deep-black'
    }
  };

  const currentSize = sizes[size];
  const currentTheme = themes[theme];

  const baseClasses = cn(
    'relative flex flex-col items-center justify-center',
    currentSize.container,
    currentTheme.background,
    'rounded-lg overflow-hidden',
    animate && 'group',
    className
  );

  if (variant === 'icon') {
    return (
      <div className={cn('relative', currentSize.container, className)}>
        <Crown 
          size={currentSize.crown} 
          variant="ornate" 
          animate={animate}
          className={cn(currentTheme.primary, 'mx-auto')}
        />
        {animate && (
          <div className="absolute inset-0 bg-gradient-radial from-crown-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </div>
    );
  }

  if (variant === 'wordmark') {
    return (
      <div className={baseClasses}>
        <div className="text-center space-y-1">
          <h1 className={cn(
            'font-cinzel font-bold leading-none tracking-tight',
            currentSize.title,
            currentTheme.primary,
            animate && 'group-hover:scale-105 transition-transform duration-300'
          )}>
            THE DUTCH QUEEN
          </h1>
          {showTagline && (
            <p className={cn(
              'font-oswald font-medium uppercase tracking-widest',
              currentSize.subtitle,
              currentTheme.secondary,
              'opacity-90'
            )}>
              Queen Tribute Experience
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={baseClasses}>
        <div className="flex items-center space-x-3">
          <Crown 
            size={currentSize.crown} 
            variant="simple" 
            animate={animate}
            className={currentTheme.accent}
          />
          <div className="text-left">
            <h1 className={cn(
              'font-cinzel font-bold leading-none',
              currentSize.title,
              currentTheme.primary
            )}>
              DUTCH QUEEN
            </h1>
            {showTagline && (
              <p className={cn(
                'font-oswald font-medium uppercase tracking-wider',
                currentSize.subtitle,
                currentTheme.secondary,
                'opacity-80'
              )}>
                Tribute Band
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Full variant - most elaborate
  return (
    <div className={baseClasses}>
      {/* Background royal patterns */}
      <RoyalPattern 
        pattern="crown-repeat" 
        size="lg" 
        opacity={0.05} 
        className="top-2 left-2" 
      />
      <RoyalPattern 
        pattern="fleur" 
        size="md" 
        opacity={0.05} 
        className="bottom-2 right-2" 
      />

      {/* Main logo content */}
      <div className="relative z-10 text-center space-y-2">
        {/* Crown above text */}
        <div className="flex justify-center items-center space-x-2 mb-2">
          <Crown 
            size={currentSize.crown} 
            variant="ornate" 
            animate={animate}
            className={currentTheme.primary}
          />
        </div>

        {/* Main brand text */}
        <h1 className={cn(
          'font-cinzel font-bold leading-none tracking-tight relative',
          currentSize.title,
          currentTheme.primary,
          animate && 'group-hover:scale-105 transition-transform duration-300'
        )}>
          THE DUTCH QUEEN
          
          {/* Decorative underline */}
          <div className={cn(
            'absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-crown-gold to-transparent',
            'w-full opacity-60',
            animate && 'group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-crown-gold/50 transition-all duration-300'
          )} />
        </h1>

        {/* Tagline */}
        {showTagline && (
          <div className="space-y-1">
            <p className={cn(
              'font-oswald font-medium uppercase tracking-widest',
              currentSize.subtitle,
              currentTheme.secondary
            )}>
              Premium Queen Tribute Experience
            </p>
            
            {/* Sound wave decoration */}
            <div className="flex justify-center mt-2">
              <SoundWave 
                pattern="equalizer" 
                bars={8} 
                intensity="medium" 
                color="gold" 
                animate={animate}
                className="w-16 h-4 opacity-70"
              />
            </div>
          </div>
        )}
      </div>

      {/* Animated spotlight effect */}
      {animate && (
        <div className="absolute inset-0 bg-gradient-radial from-spotlight-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      )}
    </div>
  );
};

// =============================================================================
// CONSISTENT ICONOGRAPHY SYSTEM - Brand-aligned icons
// =============================================================================

interface BrandIconProps {
  icon: 'music' | 'performance' | 'crown' | 'stage' | 'sound' | 'royal' | 'queen' | 'tribute';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'gradient';
  className?: string;
}

const BrandIcon: React.FC<BrandIconProps> = ({
  icon,
  size = 'md',
  variant = 'filled',
  className
}) => {
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const baseClasses = cn('inline-block', sizes[size], className);

  const fillColor = variant === 'gradient' ? 'url(#icon-gradient)' : 
                   variant === 'filled' ? 'currentColor' : 'none';
  const strokeColor = variant === 'outline' ? 'currentColor' : 'none';

  if (icon === 'music') {
    return (
      <svg className={baseClasses} viewBox="0 0 24 24" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.12 50)" />
            <stop offset="100%" stopColor="oklch(0.72 0.08 35)" />
          </linearGradient>
        </defs>
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" stroke={strokeColor} strokeWidth="2" />
      </svg>
    );
  }

  if (icon === 'performance') {
    return (
      <svg className={baseClasses} viewBox="0 0 24 24" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" stroke={strokeColor} strokeWidth="2" />
      </svg>
    );
  }

  if (icon === 'crown') {
    return (
      <Crown 
        size={size === 'xs' ? 'sm' : size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'} 
        variant="simple" 
        className={className}
      />
    );
  }

  if (icon === 'stage') {
    return (
      <svg className={baseClasses} viewBox="0 0 24 24" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2zM4 8h16v8H4V8z" stroke={strokeColor} strokeWidth="2" />
        <circle cx="8" cy="12" r="2" fill="oklch(0.75 0.15 70)" />
        <circle cx="16" cy="12" r="2" fill="oklch(0.48 0.25 310)" />
      </svg>
    );
  }

  if (icon === 'sound') {
    return (
      <SoundWave 
        pattern="equalizer" 
        bars={6} 
        intensity="medium" 
        color="gold"
        className={cn(sizes[size], className)}
      />
    );
  }

  // Default music icon
  return (
    <svg className={baseClasses} viewBox="0 0 24 24" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" stroke={strokeColor} strokeWidth="2" />
    </svg>
  );
};

// =============================================================================
// BRAND BADGE SYSTEM - Compact brand elements
// =============================================================================

interface BrandBadgeProps {
  type?: 'quality' | 'authentic' | 'premium' | 'tribute' | 'royal';
  size?: 'sm' | 'md' | 'lg';
  style?: 'minimal' | 'ornate' | 'modern';
  className?: string;
}

const BrandBadge: React.FC<BrandBadgeProps> = ({
  type = 'premium',
  size = 'md',
  style = 'ornate',
  className
}) => {
  const sizes = {
    sm: 'w-16 h-16 text-xs',
    md: 'w-20 h-20 text-sm',
    lg: 'w-24 h-24 text-base'
  };

  const badges = {
    quality: {
      text: 'QUALITY\nASSURED',
      color: 'bg-gradient-to-br from-crown-gold via-royal-bronze to-crown-gold-deep',
      icon: 'crown' as const
    },
    authentic: {
      text: 'AUTHENTIC\nTRIBUTE',
      color: 'bg-gradient-to-br from-velvet-burgundy via-queen-burgundy to-velvet-shadow',
      icon: 'music' as const
    },
    premium: {
      text: 'PREMIUM\nEXPERIENCE',
      color: 'bg-gradient-to-br from-stage-platinum via-pearl-shimmer to-stage-platinum-shadow',
      icon: 'performance' as const
    },
    tribute: {
      text: 'QUEEN\nTRIBUTE',
      color: 'bg-gradient-to-br from-royal-purple via-royal-purple-deep to-velvet-shadow',
      icon: 'crown' as const
    },
    royal: {
      text: 'ROYAL\nTREATMENT',
      color: 'bg-gradient-to-br from-crown-gold via-stage-amber to-royal-bronze',
      icon: 'crown' as const
    }
  };

  const currentBadge = badges[type];

  return (
    <div className={cn(
      'relative rounded-full border-2 border-crown-gold shadow-lg flex flex-col items-center justify-center text-center font-bold text-white leading-tight',
      sizes[size],
      currentBadge.color,
      style === 'ornate' && 'border-double border-4',
      className
    )}>
      {/* Background pattern for ornate style */}
      {style === 'ornate' && (
        <RoyalPattern 
          pattern="crown-repeat" 
          size="sm" 
          opacity={0.1} 
          className="absolute top-1 left-1" 
        />
      )}
      
      {/* Icon */}
      <BrandIcon 
        icon={currentBadge.icon}
        size="sm"
        variant="filled"
        className="text-white mb-1"
      />
      
      {/* Text */}
      <div className="relative z-10 px-1">
        {currentBadge.text.split('\n').map((line, i) => (
          <div key={i} className="block">
            {line}
          </div>
        ))}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full opacity-50" />
    </div>
  );
};

// =============================================================================
// EXPORTS
// =============================================================================

export {
  EnhancedLogo,
  BrandIcon,
  BrandBadge
};