'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Crown, Music, Star, TrendingUp } from 'lucide-react';
import AnimatedCounter, { PulsingMetric } from './animated-counter';

export default function ManagementSummaryHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Images - Using main website's images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10"></div>
        <img 
          src="/performance-shot.jpeg" 
          alt="The Dutch Queen Full Band Performance" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback background matching main website */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-red-800/20 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-3 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <Crown className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-medium">Management Summary Report</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-red-500 bg-clip-text text-transparent">
              The Dutch Queen
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-yellow-400/90 mb-4 font-medium" style={{ fontFamily: 'Oswald, sans-serif' }}>
            PROJECT EXCELLENCE SHOWCASE
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            A comprehensive analysis of strategic decisions, design investigations, and implementation excellence 
            that transformed a tribute band&apos;s digital presence into a world-class, royal-inspired experience.
          </p>
        </motion.div>

        {/* Enhanced Key Metrics Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <PulsingMetric className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <AnimatedCounter 
              value="+57%" 
              className="text-3xl font-bold text-white block"
              duration={2500}
            />
            <div className="text-sm text-gray-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Performance Gain</div>
            <div className="text-xs text-yellow-400 mt-1 font-semibold">Core Web Vitals</div>
          </PulsingMetric>
          <PulsingMetric className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            <Star className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <AnimatedCounter 
              value="96%" 
              className="text-3xl font-bold text-white block"
              duration={2000}
            />
            <div className="text-sm text-gray-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Accessibility Score</div>
            <div className="text-xs text-yellow-400 mt-1 font-semibold">WCAG Compliant</div>
          </PulsingMetric>
          <PulsingMetric className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            <Music className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <AnimatedCounter 
              value="1.8s" 
              className="text-3xl font-bold text-white block"
              duration={1800}
            />
            <div className="text-sm text-gray-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Load Time</div>
            <div className="text-xs text-yellow-400 mt-1 font-semibold">Mobile Optimized</div>
          </PulsingMetric>
          <PulsingMetric className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <AnimatedCounter 
              value="100%" 
              className="text-3xl font-bold text-white block"
              duration={3000}
            />
            <div className="text-sm text-gray-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Royal Quality</div>
            <div className="text-xs text-yellow-400 mt-1 font-semibold">Client Satisfaction</div>
          </PulsingMetric>
        </motion.div>

        {/* Enhanced CTA with conversion focus */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#overview" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-red-600 text-black font-bold px-8 py-4 rounded-xl hover:from-yellow-300 hover:to-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/40"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <span>EXPLORE THE JOURNEY</span>
            <Crown className="w-5 h-5" />
          </a>
          
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <span>VIEW LIVE WEBSITE</span>
            <Music className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator matching main website style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-yellow-400/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}