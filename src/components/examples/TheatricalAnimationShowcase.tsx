/**
 * THE DUTCH QUEEN - THEATRICAL ANIMATION SHOWCASE
 * 
 * Complete example implementation showing all theatrical animation components
 * Use this as a reference for implementing animations throughout the website
 */

"use client";

import React, { useState } from 'react';
import { 
  TheatricalMotionConfig,
  TheatricalSection,
  RoyalEntranceHero,
  TheatricalNavigation,
  TheatricalButton,
  PerformanceCard,
  RoyalText,
  PearlCascade,
  StageReady
} from '@/components/animations/TheatricalComponents';

export function TheatricalAnimationShowcase() {
  const [activeDemo, setActiveDemo] = useState('curtain');

  const demoSections = [
    { id: 'curtain', name: 'Curtain Reveal', variant: 'curtainReveal' as const },
    { id: 'spotlight', name: 'Spotlight Focus', variant: 'spotlightReveal' as const },
    { id: 'elegant', name: 'Elegant Float', variant: 'elegantFloat' as const },
    { id: 'rock', name: 'Rock Energy', variant: 'rockEnergyBurst' as const }
  ];

  return (
    <TheatricalMotionConfig>
      <div className="min-h-screen bg-gradient-to-br from-deep-black via-charcoal-stage to-midnight-velvet">
        
        {/* Showcase Header */}
        <RoyalEntranceHero className="h-96 flex items-center justify-center">
          <div className="text-center">
            <RoyalText variant="title" gradient={true} shimmer={true}>
              Theatrical Animation System
            </RoyalText>
            <RoyalText variant="subtitle" className="text-pearl-white mt-4">
              Royal Elegance • Rock Energy • Drag Queen Theatricality
            </RoyalText>
          </div>
        </RoyalEntranceHero>

        {/* Navigation Demo */}
        <section className="py-16 border-b border-royal-bronze/20">
          <div className="max-w-7xl mx-auto px-6">
            <RoyalText variant="subtitle" className="text-center mb-8 text-stage-amber">
              Navigation Components
            </RoyalText>
            
            <div className="flex justify-center">
              <TheatricalNavigation
                items={[
                  { label: 'Home', href: '#home', active: true },
                  { label: 'About', href: '#about' },
                  { label: 'Shows', href: '#shows' },
                  { label: 'Contact', href: '#contact' }
                ]}
                className="bg-charcoal-stage/50 rounded-2xl p-4 border border-royal-bronze/30"
              />
            </div>
          </div>
        </section>

        {/* Button Variants Demo */}
        <section className="py-16 border-b border-royal-bronze/20">
          <div className="max-w-7xl mx-auto px-6">
            <RoyalText variant="subtitle" className="text-center mb-8 text-stage-amber">
              Button Variants
            </RoyalText>
            
            <div className="flex flex-wrap justify-center gap-6">
              <TheatricalButton variant="royal" size="sm">
                Royal Small
              </TheatricalButton>
              <TheatricalButton variant="royal" size="md">
                Royal Medium
              </TheatricalButton>
              <TheatricalButton variant="royal" size="lg">
                Royal Large
              </TheatricalButton>
              
              <TheatricalButton variant="rock" size="md">
                Rock Energy
              </TheatricalButton>
              <TheatricalButton variant="elegant" size="md">
                Elegant Style
              </TheatricalButton>
            </div>
          </div>
        </section>

        {/* Animation Variants Demo */}
        <section className="py-16 border-b border-royal-bronze/20">
          <div className="max-w-7xl mx-auto px-6">
            <RoyalText variant="subtitle" className="text-center mb-8 text-stage-amber">
              Animation Variants
            </RoyalText>
            
            {/* Demo Controls */}
            <div className="flex justify-center gap-4 mb-12">
              {demoSections.map((section) => (
                <TheatricalButton
                  key={section.id}
                  variant={activeDemo === section.id ? "royal" : "elegant"}
                  size="sm"
                  onClick={() => setActiveDemo(section.id)}
                >
                  {section.name}
                </TheatricalButton>
              ))}
            </div>

            {/* Demo Content */}
            {demoSections.map((section) => (
              activeDemo === section.id && (
                <TheatricalSection
                  key={section.id}
                  variant={section.variant}
                  className="min-h-96 flex items-center justify-center relative"
                  withSpotlight={section.id === 'spotlight'}
                  withStageFog={section.id === 'curtain'}
                  withStageLights={section.id === 'rock'}
                >
                  {section.id === 'elegant' && <PearlCascade count={6} active={true} />}
                  
                  <div className="text-center">
                    <RoyalText variant="title" className="text-crown-gold mb-4">
                      {section.name} Animation
                    </RoyalText>
                    <RoyalText variant="body" className="text-pearl-white max-w-2xl mx-auto">
                      This demonstrates the {section.name.toLowerCase()} animation variant with 
                      {section.id === 'curtain' && ' dramatic curtain reveal effects and stage fog.'}
                      {section.id === 'spotlight' && ' focused spotlight illumination and brightness control.'}
                      {section.id === 'elegant' && ' graceful floating motion and pearl cascade effects.'}
                      {section.id === 'rock' && ' high-energy transitions and stage lighting sequences.'}
                    </RoyalText>
                  </div>
                </TheatricalSection>
              )
            ))}
          </div>
        </section>

        {/* Performance Cards Demo */}
        <section className="py-16 border-b border-royal-bronze/20">
          <div className="max-w-7xl mx-auto px-6">
            <RoyalText variant="subtitle" className="text-center mb-12 text-stage-amber">
              Performance Cards
            </RoyalText>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Bohemian Rhapsody", description: "Epic 6-minute journey through Queen's masterpiece", delay: 0 },
                { title: "We Will Rock You", description: "Get the crowd stomping with this classic anthem", delay: 0.2 },
                { title: "Somebody to Love", description: "Gospel-inspired vocals in a rock arrangement", delay: 0.4 },
              ].map((performance, index) => (
                <PerformanceCard key={performance.title} delay={performance.delay}>
                  <div className="crown-shimmer mb-4">
                    <RoyalText variant="subtitle" className="text-crown-gold">
                      {performance.title}
                    </RoyalText>
                  </div>
                  <RoyalText variant="body" className="text-pearl-white">
                    {performance.description}
                  </RoyalText>
                  
                  <div className="mt-6 pt-4 border-t border-royal-bronze/20">
                    <TheatricalButton variant="royal" size="sm">
                      Learn More
                    </TheatricalButton>
                  </div>
                </PerformanceCard>
              ))}
            </div>
          </div>
        </section>

        {/* Text Effects Demo */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <RoyalText variant="subtitle" className="text-center mb-12 text-stage-amber">
              Royal Text Effects
            </RoyalText>
            
            <div className="space-y-8 text-center">
              <RoyalText variant="title" gradient={true} shimmer={true}>
                Gradient + Shimmer Title
              </RoyalText>
              
              <RoyalText variant="subtitle" gradient={true}>
                Gradient Subtitle Without Shimmer
              </RoyalText>
              
              <RoyalText variant="body" shimmer={true} className="text-pearl-white max-w-3xl mx-auto">
                Body text with shimmer effect: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris.
              </RoyalText>
              
              <div className="dramatic-shadow">
                <RoyalText variant="title" className="text-crown-gold">
                  Text with Dramatic Shadow
                </RoyalText>
              </div>
            </div>
          </div>
        </section>

        {/* Stage Effects Demo */}
        <StageReady className="py-16 bg-gradient-to-t from-deep-black to-charcoal-stage">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <RoyalText variant="subtitle" className="mb-8 text-stage-amber">
              Stage Effects Demonstration
            </RoyalText>
            
            <div className="relative h-64 rounded-2xl overflow-hidden border border-royal-bronze/30">
              {/* All stage effects combined */}
              <div className="stage-fog" />
              <div className="spotlight-overlay active" />
              
              <div className="stage-lights-container absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="stage-light" />
                ))}
              </div>
              
              <PearlCascade count={12} active={true} />
              
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="crown-shimmer p-8 rounded-xl bg-charcoal-stage/80 backdrop-blur-sm border border-crown-gold/30">
                  <RoyalText variant="title" className="text-crown-gold mb-4">
                    🎭 Full Stage Experience 🎭
                  </RoyalText>
                  <RoyalText variant="body" className="text-pearl-white">
                    Complete theatrical atmosphere with fog, spotlights, stage lights, and pearl effects
                  </RoyalText>
                </div>
              </div>
            </div>
          </div>
        </StageReady>

        {/* Usage Instructions */}
        <section className="py-16 bg-gradient-to-t from-midnight-velvet to-charcoal-stage">
          <div className="max-w-7xl mx-auto px-6">
            <RoyalText variant="subtitle" className="text-center mb-12 text-stage-amber">
              Implementation Guide
            </RoyalText>
            
            <PerformanceCard className="max-w-4xl mx-auto p-8">
              <RoyalText variant="subtitle" className="text-crown-gold mb-6">
                Quick Start
              </RoyalText>
              
              <div className="space-y-4 text-pearl-white">
                <div>
                  <strong className="text-royal-bronze">1. Wrap your app:</strong>
                  <code className="block mt-2 p-3 bg-deep-black rounded-lg text-sm">
                    &lt;TheatricalMotionConfig&gt;...&lt;/TheatricalMotionConfig&gt;
                  </code>
                </div>
                
                <div>
                  <strong className="text-royal-bronze">2. Use theatrical sections:</strong>
                  <code className="block mt-2 p-3 bg-deep-black rounded-lg text-sm">
                    &lt;TheatricalSection variant=&quot;curtainReveal&quot; withSpotlight&gt;...&lt;/TheatricalSection&gt;
                  </code>
                </div>
                
                <div>
                  <strong className="text-royal-bronze">3. Add royal text:</strong>
                  <code className="block mt-2 p-3 bg-deep-black rounded-lg text-sm">
                    &lt;RoyalText variant=&quot;title&quot; gradient shimmer&gt;Your Text&lt;/RoyalText&gt;
                  </code>
                </div>
                
                <div>
                  <strong className="text-royal-bronze">4. Include theatrical buttons:</strong>
                  <code className="block mt-2 p-3 bg-deep-black rounded-lg text-sm">
                    &lt;TheatricalButton variant=&quot;royal&quot; size=&quot;lg&quot;&gt;Action&lt;/TheatricalButton&gt;
                  </code>
                </div>
              </div>
            </PerformanceCard>
          </div>
        </section>

      </div>
    </TheatricalMotionConfig>
  );
}