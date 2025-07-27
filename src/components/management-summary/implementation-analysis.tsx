'use client';

import { motion } from 'framer-motion';
import { Zap, Code, Smartphone, Shield, TrendingUp } from 'lucide-react';
import AnimatedCounter, { PulsingMetric } from './animated-counter';

export default function ImplementationAnalysis() {
  const techStack = [
    { name: 'Next.js 15', purpose: 'React framework for production', benefit: 'Server-side rendering, automatic optimization' },
    { name: 'TypeScript', purpose: 'Type-safe development', benefit: 'Reduced bugs, better developer experience' },
    { name: 'Tailwind CSS', purpose: 'Utility-first styling', benefit: 'Consistent design system, fast development' },
    { name: 'Framer Motion', purpose: 'Animation library', benefit: 'Smooth, performant animations' }
  ];

  const performanceMetrics = [
    { metric: 'Load Time', before: '4.2s', after: '1.8s', improvement: '57%' },
    { metric: 'Accessibility', before: '72%', after: '96%', improvement: '24pts' },
    { metric: 'Mobile Score', before: '78%', after: '98%', improvement: '20pts' },
    { metric: 'SEO Score', before: '69%', after: '100%', improvement: '31pts' }
  ];

  return (
    <section id="implementation" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <Code className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Technical Excellence
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Implementation <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Analysis</span>
          </h2>
          
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Modern technology stack and performance optimizations that deliver exceptional user experience 
            while maintaining development efficiency and future scalability.
          </p>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Stack</h3>
          
          {/* Tech Stack Visual */}
          <div className="flex justify-center mb-8">
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-4 max-w-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-lg p-3 text-center">
                  <Code className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs text-blue-300 font-semibold">Next.js 15</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg p-3 text-center">
                  <Shield className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                  <div className="text-xs text-purple-300 font-semibold">TypeScript</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 rounded-lg p-3 text-center">
                  <Smartphone className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
                  <div className="text-xs text-cyan-300 font-semibold">Tailwind</div>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/20 rounded-lg p-3 text-center">
                  <TrendingUp className="w-6 h-6 text-pink-400 mx-auto mb-1" />
                  <div className="text-xs text-pink-300 font-semibold">Motion</div>
                </div>
              </div>
              <p className="text-xs text-yellow-400 text-center mt-3 font-medium">
                Modern tech stack for optimal performance
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <h4 className="text-lg font-semibold text-white">{tech.name}</h4>
                </div>
                <p className="text-gray-400 text-sm mb-2">{tech.purpose}</p>
                <p className="text-gray-300">{tech.benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Performance Improvements</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <PulsingMetric key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>{metric.metric}</h4>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">Before: {metric.before}</div>
                  <div className="text-sm text-white font-medium">After: {metric.after}</div>
                  <AnimatedCounter 
                    value={`+${metric.improvement}`}
                    className="text-lg font-bold text-green-400 block"
                    duration={1500 + index * 300}
                  />
                </div>
              </PulsingMetric>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Signature Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6">
              <Smartphone className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-3">Compare Component</h4>
              <p className="text-gray-300">Revolutionary side-by-side performance comparison unique in the tribute band market.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6">
              <Shield className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-3">Royal Navigation</h4>
              <p className="text-gray-300">Sophisticated micro-interactions and glassmorphism effects for premium user experience.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-3">Performance Optimization</h4>
              <p className="text-gray-300">Advanced caching, image optimization, and Core Web Vitals improvements.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}