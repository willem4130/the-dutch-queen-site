/**
 * THE DUTCH QUEEN BRAND SYSTEM - COMPREHENSIVE EXPORT INDEX
 * Complete brand design system with royal elements, stage visuals, and Queen-inspired components
 * For The Dutch Queen - Premium Queen tribute band
 */

// =============================================================================
// ROYAL ELEMENTS - Crown motifs and royal design components
// =============================================================================
export {
  Crown,
  ScepterDivider,
  RoyalPattern,
  GemButton,
  OrnamentalFrame,
  crownAnimationStyles
} from './RoyalElements';

// =============================================================================
// STAGE ELEMENTS - Performance and theatrical visuals
// =============================================================================
export {
  Spotlight,
  StageCurtain,
  VintageAmplifier,
  StageLightingRig,
  VinylRecord,
  StageFog
} from './StageElements';

// =============================================================================
// QUEEN ELEMENTS - Queen-inspired visual references
// =============================================================================
export {
  PerformerSilhouette,
  GuitarPick,
  SoundWave,
  QueenInspiredElement
} from './QueenElements';

// =============================================================================
// ENHANCED LOGO SYSTEM - Brand identity and iconography
// =============================================================================
export {
  EnhancedLogo,
  BrandIcon,
  BrandBadge
} from './EnhancedLogo';

// =============================================================================
// BRAND SYSTEM TYPES - TypeScript definitions for brand components
// =============================================================================
export type CrownSize = 'sm' | 'md' | 'lg' | 'xl';
export type CrownVariant = 'simple' | 'ornate' | 'silhouette';
export type RoyalPatternType = 'fleur' | 'damask' | 'chevron' | 'crown-repeat';
export type GemVariant = 'ruby' | 'sapphire' | 'emerald' | 'diamond';
export type OrnamentalStyle = 'simple' | 'ornate' | 'majestic';

export type SpotlightIntensity = 'low' | 'medium' | 'high' | 'dramatic';
export type SpotlightColor = 'white' | 'amber' | 'royal' | 'rainbow';
export type CurtainState = 'closed' | 'opening' | 'open' | 'closing';
export type CurtainStyle = 'velvet' | 'satin' | 'royal';
export type AmplifierSize = 'stack' | 'combo' | 'head';
export type AmplifierBrand = 'marshall' | 'vox' | 'fender' | 'custom';

export type PerformerPose = 'microphone' | 'guitar' | 'piano' | 'drums' | 'commanding';
export type GuitarPickDesign = 'classic' | 'royal' | 'flame' | 'crown';
export type SoundWavePattern = 'equalizer' | 'waveform' | 'circular' | 'spectrum';
export type SoundWaveIntensity = 'low' | 'medium' | 'high' | 'dynamic';

export type LogoVariant = 'full' | 'compact' | 'icon' | 'wordmark';
export type LogoTheme = 'royal' | 'stage' | 'minimal' | 'dramatic';
export type BrandIconType = 'music' | 'performance' | 'crown' | 'stage' | 'sound' | 'royal' | 'queen' | 'tribute';
export type BrandBadgeType = 'quality' | 'authentic' | 'premium' | 'tribute' | 'royal';

// =============================================================================
// BRAND SYSTEM UTILITIES - Helper functions and constants
// =============================================================================

/**
 * Brand Color Constants - Easy access to brand colors
 */
export const BRAND_COLORS = {
  // Primary Brand Colors
  ROYAL_BRONZE: 'oklch(0.72 0.08 35)',
  QUEEN_BURGUNDY: 'oklch(0.45 0.25 25)',
  CROWN_GOLD: 'oklch(0.85 0.12 50)',
  
  // Metallic Accents
  STAGE_PLATINUM: 'oklch(0.82 0.02 200)',
  ROCK_STEEL: 'oklch(0.58 0.05 230)',
  
  // Theatrical Colors
  SPOTLIGHT_WHITE: 'oklch(0.98 0.01 60)',
  STAGE_AMBER: 'oklch(0.75 0.15 70)',
  ROYAL_PURPLE: 'oklch(0.48 0.25 310)',
  
  // Pearl Highlights
  PEARL_WHITE: 'oklch(0.96 0.02 90)',
  PEARL_SHIMMER: 'oklch(0.94 0.03 85)',
  
  // Background System
  DEEP_BLACK: 'oklch(0.05 0 0)',
  RICH_BLACK: 'oklch(0.08 0.02 20)',
  CHARCOAL_STAGE: 'oklch(0.18 0.01 15)',
  MIDNIGHT_VELVET: 'oklch(0.12 0.03 30)'
} as const;

/**
 * Brand Typography Constants - Font family references
 */
export const BRAND_FONTS = {
  DISPLAY_PRIMARY: 'var(--font-cinzel)',
  DISPLAY_SECONDARY: 'var(--font-playfair)',
  NAVIGATION: 'var(--font-oswald)',
  BODY_PRIMARY: 'var(--font-source)',
  INTERFACE: 'var(--font-inter)'
} as const;

/**
 * Brand Animation Constants - Animation timing and effects
 */
export const BRAND_ANIMATIONS = {
  CROWN_SHIMMER: 'crown-shimmer 3s ease-in-out infinite',
  STAGE_SPOTLIGHT: 'stage-spotlight 4s ease-in-out infinite',
  METALLIC_SHINE: 'metallic-shine 3s ease-in-out infinite',
  GRADIENT_SHIFT: 'gradient-shift 4s ease-in-out infinite'
} as const;

/**
 * Responsive Size Utilities - Consistent sizing across components
 */
export const RESPONSIVE_SIZES = {
  XS: { width: 'w-4', height: 'h-4', text: 'text-xs' },
  SM: { width: 'w-6', height: 'h-6', text: 'text-sm' },
  MD: { width: 'w-8', height: 'h-8', text: 'text-base' },
  LG: { width: 'w-12', height: 'h-12', text: 'text-lg' },
  XL: { width: 'w-16', height: 'h-16', text: 'text-xl' }
} as const;

/**
 * Brand Gradient Utilities - Pre-defined gradient combinations
 */
export const BRAND_GRADIENTS = {
  ROYAL: 'bg-gradient-to-br from-royal-bronze via-crown-gold to-queen-burgundy',
  METALLIC: 'bg-gradient-to-br from-stage-platinum via-pearl-shimmer to-rock-steel',
  STAGE: 'bg-gradient-to-br from-stage-amber via-spotlight-white to-royal-purple',
  VELVET: 'bg-gradient-to-br from-velvet-burgundy via-queen-burgundy to-velvet-shadow',
  DRAMATIC: 'bg-gradient-radial from-crown-gold via-royal-bronze to-deep-black'
} as const;

/**
 * Accessibility Utilities - WCAG compliant color combinations
 */
export const ACCESSIBLE_COMBINATIONS = {
  LIGHT_ON_DARK: {
    text: 'text-pearl-white',
    background: 'bg-deep-black'
  },
  DARK_ON_LIGHT: {
    text: 'text-rich-black',
    background: 'bg-pearl-white'
  },
  GOLD_ON_DARK: {
    text: 'text-crown-gold',
    background: 'bg-midnight-velvet'
  },
  BRONZE_ON_LIGHT: {
    text: 'text-royal-bronze-dark',
    background: 'bg-pearl-cream'
  }
} as const;

/**
 * Component Defaults - Default props for brand components
 */
export const COMPONENT_DEFAULTS = {
  CROWN: {
    size: 'md' as CrownSize,
    variant: 'simple' as CrownVariant,
    animate: true
  },
  SPOTLIGHT: {
    intensity: 'medium' as SpotlightIntensity,
    color: 'white' as SpotlightColor,
    size: 'md' as CrownSize
  },
  LOGO: {
    variant: 'full' as LogoVariant,
    size: 'md' as CrownSize,
    theme: 'royal' as LogoTheme,
    animate: true
  },
  SOUND_WAVE: {
    pattern: 'equalizer' as SoundWavePattern,
    intensity: 'medium' as SoundWaveIntensity,
    bars: 12,
    animate: true
  }
} as const;

/**
 * Utility function to create consistent brand spacing
 */
export const getBrandSpacing = (size: 'sm' | 'md' | 'lg' | 'xl') => {
  const spacings = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
    xl: 'space-y-8'
  };
  return spacings[size];
};

/**
 * Utility function to create consistent brand shadows
 */
export const getBrandShadow = (intensity: 'subtle' | 'medium' | 'dramatic' | 'royal') => {
  const shadows = {
    subtle: 'shadow-md',
    medium: 'shadow-lg shadow-royal-bronze/20',
    dramatic: 'shadow-2xl shadow-crown-gold/30',
    royal: 'shadow-2xl shadow-royal-bronze/40 drop-shadow-lg'
  };
  return shadows[intensity];
};

/**
 * Utility function to create consistent brand borders
 */
export const getBrandBorder = (style: 'simple' | 'ornate' | 'royal') => {
  const borders = {
    simple: 'border border-royal-bronze rounded-lg',
    ornate: 'border-2 border-double border-crown-gold rounded-xl',
    royal: 'border-4 border-gradient-to-r from-royal-bronze via-crown-gold to-royal-bronze rounded-2xl'
  };
  return borders[style];
};