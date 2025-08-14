"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function TypographySystem() {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-queen-burgundy/10 to-royal-bronze/10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* System Header */}
        <div className="text-center mb-16">
          <h1 className="text-display-xl font-display-primary text-gradient-royal mb-6">
            The Dutch Queen Typography System
          </h1>
          <p className="text-content-primary text-pearl-white max-w-3xl mx-auto">
            A royal theatrical typography system designed for premium Queen tribute band branding. 
            From dramatic stage headlines to intimate performance details.
          </p>
          
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="mt-8 text-button-primary bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-4 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
          >
            {showGuide ? "Hide" : "Show"} Usage Guide
          </button>
        </div>

        {/* Usage Guide */}
        {showGuide && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="bg-backstage-dark/80 backdrop-blur-xl border border-royal-bronze/20 rounded-2xl p-8 mb-16"
          >
            <h2 className="text-section-title text-crown-gold mb-6">Implementation Guide</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-performance-title text-royal-bronze mb-4">CSS Classes</h3>
                <div className="space-y-2 text-content-secondary text-text-muted-light font-mono text-sm">
                  <div>• .text-display-xl - Hero headlines</div>
                  <div>• .text-section-title - Section headers</div>
                  <div>• .text-nav-primary - Navigation items</div>
                  <div>• .text-content-primary - Body text</div>
                  <div>• .text-button-primary - Interface buttons</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-performance-title text-royal-bronze mb-4">Tailwind Utilities</h3>
                <div className="space-y-2 text-content-secondary text-text-muted-light font-mono text-sm">
                  <div>• font-display-primary text-display-xl</div>
                  <div>• font-body-primary text-body-lg</div>
                  <div>• font-nav-primary text-nav-size</div>
                  <div>• text-gradient-royal</div>
                  <div>• text-shadow-dramatic</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Display Typography - Hero & Dramatic Headlines */}
        <section className="mb-20">
          <h2 className="text-section-subtitle text-stage-platinum mb-8">Display Typography</h2>
          
          <div className="space-y-8">
            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Display XL - Hero Headlines</span>
              </div>
              <h1 className="text-display-xl font-display-primary text-gradient-royal">
                LIVE AT WEMBLEY
              </h1>
              <code className="text-xs text-text-muted-light mt-2 block">
                .text-display-xl .font-display-primary .text-gradient-royal
              </code>
            </div>

            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Display Large - Section Heroes</span>
              </div>
              <h2 className="text-display-lg font-display-primary text-gradient-metallic">
                The Show Must Go On
              </h2>
              <code className="text-xs text-text-muted-light mt-2 block">
                .text-display-lg .font-display-primary .text-gradient-metallic
              </code>
            </div>

            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Display Medium - Dramatic Headers</span>
              </div>
              <h3 className="text-display-md font-display-secondary text-royal-bronze">
                Bohemian Rhapsody Experience
              </h3>
              <code className="text-xs text-text-muted-light mt-2 block">
                .text-display-md .font-display-secondary .text-royal-bronze
              </code>
            </div>
          </div>
        </section>

        {/* Section Headers - Navigation & Structure */}
        <section className="mb-20">
          <h2 className="text-section-subtitle text-stage-platinum mb-8">Section Headers</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Section Title</span>
              </div>
              <h2 className="text-section-title text-pearl-white">
                About The Dutch Queen
              </h2>
              <code className="text-xs text-text-muted-light mt-2 block">
                .text-section-title .text-pearl-white
              </code>
            </div>

            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Section Subtitle</span>
              </div>
              <h3 className="text-section-subtitle text-stage-amber">
                UPCOMING PERFORMANCES
              </h3>
              <code className="text-xs text-text-muted-light mt-2 block">
                .text-section-subtitle .text-stage-amber
              </code>
            </div>
          </div>
        </section>

        {/* Navigation Typography */}
        <section className="mb-20">
          <h2 className="text-section-subtitle text-stage-platinum mb-8">Navigation Elements</h2>
          
          <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
            <div className="mb-6">
              <span className="text-label text-crown-gold">Brand Logo</span>
            </div>
            <h1 className="text-nav-brand text-gradient-royal mb-8">THE DUTCH QUEEN</h1>
            
            <div className="mb-6">
              <span className="text-label text-crown-gold">Navigation Menu</span>
            </div>
            <nav className="flex flex-wrap gap-8">
              {["HOME", "ABOUT", "PERFORMANCES", "SHOWS", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-nav-primary text-pearl-white hover:text-royal-bronze transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
            <code className="text-xs text-text-muted-light mt-4 block">
              .text-nav-primary .text-pearl-white .hover:text-royal-bronze
            </code>
          </div>
        </section>

        {/* Performance Content */}
        <section className="mb-20">
          <h2 className="text-section-subtitle text-stage-platinum mb-8">Performance Content</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Performance Title</span>
              </div>
              <h3 className="text-performance-title text-pearl-white mb-4">
                Queen Greatest Hits Live
              </h3>
              <div className="space-y-2">
                <div className="text-performance-detail text-stage-amber">
                  SATURDAY, DECEMBER 16TH
                </div>
                <div className="text-performance-detail text-royal-bronze">
                  CONCERTGEBOUW AMSTERDAM
                </div>
                <div className="text-performance-detail text-text-muted-light">
                  DOORS 7:30PM • SHOW 8:30PM
                </div>
              </div>
              <code className="text-xs text-text-muted-light mt-4 block">
                .text-performance-title / .text-performance-detail
              </code>
            </div>

            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Content Hierarchy</span>
              </div>
              <h4 className="text-content-emphasis text-royal-bronze mb-3">
                Intimate Acoustic Session
              </h4>
              <p className="text-content-primary text-pearl-white mb-4">
                Experience Queen's timeless classics in an intimate acoustic setting. 
                From the tender beauty of "Love of My Life" to the raw emotion of 
                "The Show Must Go On."
              </p>
              <p className="text-content-secondary text-text-muted-light">
                Limited seating available. Book early to secure your place for 
                this special acoustic experience.
              </p>
              <code className="text-xs text-text-muted-light mt-4 block">
                .text-content-emphasis / .text-content-primary / .text-content-secondary
              </code>
            </div>
          </div>
        </section>

        {/* Interface Elements */}
        <section className="mb-20">
          <h2 className="text-section-subtitle text-stage-platinum mb-8">Interface Elements</h2>
          
          <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
            <div className="mb-6">
              <span className="text-label text-crown-gold">Button Styles</span>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="text-button-primary bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-4 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                Book Now
              </button>
              
              <button className="text-button-secondary border-2 border-royal-bronze text-royal-bronze px-6 py-3 rounded-xl hover:bg-royal-bronze hover:text-white transition-all duration-300">
                Learn More
              </button>
              
              <button className="text-label text-text-muted-light hover:text-pearl-white transition-colors duration-300">
                View Details →
              </button>
            </div>
            
            <code className="text-xs text-text-muted-light block">
              .text-button-primary / .text-button-secondary / .text-label
            </code>
          </div>
        </section>

        {/* Theatrical Effects */}
        <section className="mb-20">
          <h2 className="text-section-subtitle text-stage-platinum mb-8">Theatrical Text Effects</h2>
          
          <div className="space-y-8">
            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Royal Gradient</span>
              </div>
              <h2 className="text-display-lg font-display-primary text-gradient-royal">
                We Are The Champions
              </h2>
              <code className="text-xs text-text-muted-light mt-2 block">
                .text-gradient-royal - Animated royal bronze to burgundy
              </code>
            </div>

            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Metallic Shimmer</span>
              </div>
              <h2 className="text-display-lg font-display-primary text-gradient-metallic">
                Another One Bites The Dust
              </h2>
              <code className="text-xs text-text-muted-light mt-2 block">
                .text-gradient-metallic - Animated platinum and gold
              </code>
            </div>

            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-label text-crown-gold">Dramatic Spectrum</span>
              </div>
              <h2 className="text-display-lg font-display-primary text-gradient-dramatic">
                Bohemian Rhapsody
              </h2>
              <code className="text-xs text-text-muted-light mt-2 block">
                .text-gradient-dramatic - Full spectrum theatrical gradient
              </code>
            </div>
          </div>
        </section>

        {/* Responsive Demonstration */}
        <section className="mb-20">
          <h2 className="text-section-subtitle text-stage-platinum mb-8">Responsive Scaling</h2>
          
          <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-8">
            <div className="mb-6">
              <span className="text-label text-crown-gold">Fluid Typography with clamp()</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-display-primary text-display-xl text-royal-bronze">
                Scales 48px → 128px
              </h1>
              <h2 className="font-display-primary text-display-lg text-stage-amber">
                Scales 40px → 96px  
              </h2>
              <p className="font-body-primary text-body-xl text-pearl-white">
                Body text scales 18px → 22px for optimal readability across all devices
              </p>
            </div>
            
            <div className="mt-6 text-xs text-text-muted-light">
              <p>All typography uses CSS clamp() for fluid responsive scaling.</p>
              <p>Resize your browser window to see the responsive behavior in action.</p>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section>
          <h2 className="text-section-subtitle text-stage-platinum mb-8">System Performance</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-6 text-center">
              <div className="text-display-sm font-display-primary text-crown-gold mb-2">5</div>
              <div className="text-label text-text-muted-light">Font Families</div>
            </div>
            
            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-6 text-center">
              <div className="text-display-sm font-display-primary text-stage-amber mb-2">~180KB</div>
              <div className="text-label text-text-muted-light">Total Font Size</div>
            </div>
            
            <div className="bg-charcoal-stage/50 backdrop-blur-sm border border-royal-bronze/20 rounded-xl p-6 text-center">
              <div className="text-display-sm font-display-primary text-royal-bronze mb-2">WCAG AA</div>
              <div className="text-label text-text-muted-light">Accessibility</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}