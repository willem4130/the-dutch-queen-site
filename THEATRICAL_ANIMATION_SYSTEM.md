# The Dutch Queen - Theatrical Animation System

A comprehensive animation framework designed for royal elegance, rock energy, and drag queen theatricality, built on enhanced Framer Motion with performance optimization and accessibility compliance.

## 🎭 System Overview

This theatrical animation system transforms The Dutch Queen website into a premium Queen tribute experience through:

- **Royal Entrance Animations**: Dramatic curtain reveals, crown motifs, spotlight effects
- **Rock Performance Animations**: Energy-driven transitions, music-inspired timing, stage effects
- **Drag Queen Elegance**: Smooth movements, shimmer effects, sophisticated transitions
- **Stage Lighting System**: Professional lighting effects, fog, and atmospheric elements
- **Performance Optimization**: Mobile-responsive, accessibility-compliant, GPU-accelerated

## 📁 File Structure

```
src/
├── lib/animations/
│   └── theatrical-system.ts           # Core animation engine and variants
├── styles/
│   └── theatrical-effects.css        # Stage lighting and CSS effects
├── components/animations/
│   └── TheatricalComponents.tsx       # Ready-to-use components
└── components/examples/
    └── TheatricalAnimationShowcase.tsx # Complete implementation examples
```

## 🎪 Core Components

### 1. TheatricalMotionConfig
Global animation configuration wrapper with reduced motion support.

```tsx
<TheatricalMotionConfig>
  <App />
</TheatricalMotionConfig>
```

### 2. TheatricalSection
Main section wrapper with animation variants and stage effects.

```tsx
<TheatricalSection 
  variant="curtainReveal"
  withSpotlight={true}
  withStageFog={true}
  withStageLights={true}
>
  {/* Content */}
</TheatricalSection>
```

**Available Variants:**
- `curtainReveal` - Dramatic curtain opening effect
- `spotlightReveal` - Focused spotlight illumination
- `elegantFloat` - Graceful floating animation
- `rockEnergyBurst` - High-energy rock transitions

### 3. RoyalEntranceHero
Specialized hero section with crown elements and theatrical entrance.

```tsx
<RoyalEntranceHero showCrown={true} className="h-screen">
  {/* Hero content */}
</RoyalEntranceHero>
```

### 4. TheatricalButton
Enhanced buttons with metallic shine and royal styling.

```tsx
<TheatricalButton variant="royal" size="lg">
  Book Performance
</TheatricalButton>
```

**Variants:** `royal`, `rock`, `elegant`
**Sizes:** `sm`, `md`, `lg`

### 5. RoyalText
Typography with gradient effects and shimmer animations.

```tsx
<RoyalText variant="title" gradient={true} shimmer={true}>
  The Dutch Queen
</RoyalText>
```

**Variants:** `title`, `subtitle`, `body`
**Effects:** `gradient`, `shimmer`

### 6. PerformanceCard
Animated cards with depth and theatrical hover effects.

```tsx
<PerformanceCard delay={0.2}>
  {/* Card content */}
</PerformanceCard>
```

## 🎨 Animation Variants

### Royal Timing System
Based on Queen's signature tempos and musical timing:

```typescript
export const theatricalTiming = {
  beat: 0.5,        // 120 BPM base
  measure: 2,       // 4 beats
  phrase: 8,        // 4 measures
  
  // Performance timing
  curtainReveal: 2.5,
  spotlightFocus: 1.2,
  crownShimmer: 1.8,
  rockTransition: 0.6,
  elegantFloat: 3,
  stageEffect: 0.4
};
```

### Easing Curves
Custom easing for theatrical motion:

```typescript
export const royalEasing = {
  entrance: [0.25, 0.46, 0.45, 0.94],    // Dramatic entrance
  rockEnergy: [0.68, -0.55, 0.265, 1.55], // High energy bounce
  elegance: [0.45, 0, 0.25, 1],          // Smooth sophistication
  spotlight: [0.5, 0, 0.5, 1],           // Focused beam
  curtain: [0.25, 0, 0.35, 1],           // Heavy fabric movement
  shimmer: [0.4, 0, 0.6, 1]              // Metallic gleam
};
```

## 💫 Stage Effects (CSS)

### Spotlight System
```css
.spotlight-overlay {
  background: radial-gradient(
    ellipse at var(--spotlight-x) var(--spotlight-y),
    transparent 0%,
    transparent var(--spotlight-size),
    rgba(0, 0, 0, var(--spotlight-intensity)) 70%
  );
}
```

### Crown Shimmer Effect
```css
.crown-shimmer::before {
  background: linear-gradient(
    105deg,
    transparent 35%,
    rgba(var(--crown-gold-shimmer-rgb), 0.8) 50%,
    transparent 65%
  );
  animation: shimmer-sweep 3s ease-in-out infinite;
}
```

### Stage Lighting Sequence
Automated stage light animations with musical timing:
- 5 different colored lights with staggered activation
- Synchronized to musical beat timing
- Customizable colors using royal color system

### Pearl Cascade
Elegant floating pearl effects for drag queen aesthetics:
```tsx
<PearlCascade count={8} active={true} />
```

## 🎯 Usage Examples

### Basic Section Implementation
```tsx
import { TheatricalSection, RoyalText } from '@/components/animations/TheatricalComponents';

export function AboutSection() {
  return (
    <TheatricalSection 
      variant="curtainReveal"
      withStageFog={true}
      className="py-24"
    >
      <RoyalText variant="title" gradient={true} shimmer={true}>
        About The Dutch Queen
      </RoyalText>
      {/* Content */}
    </TheatricalSection>
  );
}
```

### Navigation Enhancement
```tsx
import { TheatricalNavigation } from '@/components/animations/TheatricalComponents';

const navItems = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Shows', href: '#shows' }
];

<TheatricalNavigation items={navItems} />
```

### Hero Section with Full Effects
```tsx
import { RoyalEntranceHero, RoyalText, TheatricalButton } from '@/components/animations/TheatricalComponents';

export function HeroSection() {
  return (
    <RoyalEntranceHero showCrown={true} className="h-screen">
      <div className="stage-fog" />
      
      <div className="text-center">
        <RoyalText variant="title" gradient={true} shimmer={true}>
          The Dutch Queen
        </RoyalText>
        <RoyalText variant="subtitle" className="text-pearl-white mb-8">
          Premium Queen Tribute Experience
        </RoyalText>
        
        <TheatricalButton variant="royal" size="lg">
          Book Performance
        </TheatricalButton>
      </div>
    </RoyalEntranceHero>
  );
}
```

## 📱 Mobile Optimization

### Simplified Variants
Mobile devices automatically receive simplified animations:

```typescript
export const mobileVariants = {
  curtainReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }
  // Optimized for performance
};
```

### Performance Controls
```css
@media (max-width: 768px) {
  .stage-fog { filter: blur(20px); opacity: 0.3; }
  .stage-light { width: 12px; height: 12px; }
  .crown-shimmer::before { animation-duration: 2s; }
}
```

## ♿ Accessibility Features

### Reduced Motion Support
Respects user preferences automatically:

```typescript
const prefersReducedMotion = useReducedMotion();

// Automatically simplifies or disables animations
```

### CSS Media Queries
```css
@media (prefers-reduced-motion: reduce) {
  .stage-fog,
  .crown-shimmer::before,
  .elegant-float {
    animation: none !important;
  }
}
```

### Focus Management
- Keyboard navigation preserved during animations
- Screen reader compatibility maintained
- ARIA labels and accessibility attributes included

## 🚀 Performance Features

### GPU Acceleration
```css
.stage-fog,
.crown-shimmer,
.elegant-float {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
```

### Lazy Loading
- Animations triggered only when elements enter viewport
- `useInView` hook with 50px margin for smooth activation
- Staggered loading for performance optimization

### Memory Management
- Automatic cleanup on component unmount
- Timeline recycling for similar elements
- Optimized re-renders with React.memo patterns

## 🎨 Color Integration

### Royal Color System Integration
All animations use the enhanced royal color system:

```typescript
// Crown effects use crown-gold variants
'var(--crown-gold-shimmer)'

// Stage lighting uses theatrical colors
'var(--stage-amber)'
'var(--royal-purple)'
'var(--stage-platinum-bright)'

// Backgrounds use professional gradients
'from-deep-black via-charcoal-stage to-midnight-velvet'
```

### Gradient Animations
```css
.text-gradient-royal {
  background: linear-gradient(135deg, 
    var(--royal-bronze), 
    var(--crown-gold), 
    var(--queen-burgundy)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 🔧 Customization

### Animation Timing Override
```typescript
import { theatricalTiming } from '@/lib/animations/theatrical-system';

// Custom timing for specific use case
const customTiming = {
  ...theatricalTiming,
  curtainReveal: 4.0  // Slower for dramatic effect
};
```

### Custom Stage Effects
```typescript
// Add custom stage lighting colors
const customLights = [
  { color: 'var(--custom-color)', position: { top: '15%', left: '25%' } }
];
```

### Theme Variants
Create custom animation themes:
```typescript
const concertTheme = {
  ...theatricalVariants,
  customConcertEntrance: {
    // Custom variant definition
  }
};
```

## 📊 Implementation Checklist

### Core Setup
- [x] Install theatrical animation system files
- [x] Import CSS effects in globals.css
- [x] Wrap app in TheatricalMotionConfig
- [x] Update root layout with theme colors

### Component Integration
- [x] Replace basic animations with theatrical variants
- [x] Update hero section with RoyalEntranceHero
- [x] Enhance navigation with royal styling
- [x] Convert cards to PerformanceCard components
- [x] Apply RoyalText for typography

### Effects Integration
- [x] Add stage lighting to key sections
- [x] Implement curtain reveals for dramatic sections
- [x] Include pearl cascades for elegant sections
- [x] Add crown shimmer effects to important elements

### Performance Optimization
- [x] Mobile-responsive animation variants
- [x] Reduced motion accessibility support
- [x] GPU acceleration for smooth performance
- [x] Lazy loading with viewport detection

## 🎵 Queen-Specific Customizations

### Song-Based Animations
Timing synchronized to Queen's signature songs:
- **Bohemian Rhapsody**: 72 BPM, complex transitions
- **We Will Rock You**: 81 BPM, strong beat emphasis  
- **We Are The Champions**: 62 BPM, triumphant timing
- **Somebody to Love**: 120 BPM, gospel-inspired flow

### Theatrical Elements
- Crown motifs throughout the interface
- Royal bronze and burgundy color dominance
- Stage lighting effects matching concert atmosphere
- Pearl and shimmer effects for drag queen elegance

## 🛠️ Troubleshooting

### Common Issues

1. **Animations not appearing**: Check TheatricalMotionConfig wrapper
2. **Performance issues on mobile**: Verify mobile variants are loading
3. **CSS effects not working**: Ensure theatrical-effects.css is imported
4. **Reduced motion not respected**: Check useReducedMotion implementation

### Debug Mode
Enable console logging for animation debugging:
```typescript
const DEBUG_ANIMATIONS = process.env.NODE_ENV === 'development';
```

## 🚀 Future Enhancements

### Planned Features
- Music synchronization with Web Audio API
- Advanced particle systems for stage effects  
- 3D stage lighting with Three.js integration
- Voice-controlled animation triggers
- Custom animation timeline builder

### Performance Goals
- < 60ms animation frame time
- < 5% CPU usage on mobile
- Graceful degradation for older browsers
- WebGL fallbacks for complex effects

---

## 📝 Credits

**Animation System Design**: Based on Queen's theatrical performance style, royal Dutch aesthetics, and modern drag queen presentation techniques.

**Performance Optimization**: Inspired by modern web performance best practices and accessibility guidelines.

**Color Integration**: Built on The Dutch Queen enhanced royal color system with crown gold, queen burgundy, and stage lighting colors.

---

*This system transforms The Dutch Queen website into a premium theatrical experience that honors Queen's legacy while celebrating royal elegance and drag queen artistry.* 🎭👑✨