'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Crown, Award, TrendingUp, Star, Target, CheckCircle } from 'lucide-react';

export default function TransformationSummary() {
  const achievements = [
    { metric: '57%', label: 'Performance Improvement', icon: <TrendingUp className="w-6 h-6" /> },
    { metric: '96%', label: 'Accessibility Score', icon: <Star className="w-6 h-6" /> },
    { metric: '100%', label: 'Royal Quality Standard', icon: <Crown className="w-6 h-6" /> },
    { metric: '8 weeks', label: 'Delivery Timeline', icon: <Target className="w-6 h-6" /> }
  ];

  const keyTransformations = [
    {
      before: 'Generic WordPress theme',
      after: 'Bespoke Queen-inspired royal experience',
      impact: 'Distinctive brand identity that stands out in the tribute band market'
    },
    {
      before: 'Static performance descriptions',
      after: 'Interactive Compare component showcasing dual offerings',
      impact: 'Revolutionary user experience unique to the industry'
    },
    {
      before: 'Basic mobile compatibility',
      after: 'Mobile-first responsive design with 98% optimization',
      impact: 'Exceptional user experience across all devices'
    },
    {
      before: 'Standard navigation patterns',
      after: 'Royal navigation with sophisticated micro-interactions',
      impact: 'Premium feel that matches the band\'s theatrical excellence'
    }
  ];

  return (
    <section id="transformation" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Final Results
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Complete <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Transformation</span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            From concept to completion, this project demonstrates the power of strategic thinking, 
            meticulous execution, and unwavering commitment to excellence. Every goal exceeded.
          </p>
        </motion.div>

        {/* Achievement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-yellow-400 mb-4 flex justify-center">{achievement.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{achievement.metric}</div>
              <div className="text-sm text-gray-300">{achievement.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Before vs After Transformations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            Key <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Transformations</span>
          </h3>
          
          <div className="space-y-8">
            {keyTransformations.map((transformation, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Before</h4>
                    <p className="text-gray-300">{transformation.before}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mx-auto flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">After</h4>
                    <p className="text-gray-300">{transformation.after}</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 text-center">
                  <p className="text-sm text-yellow-400 font-medium">{transformation.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-yellow-400/20 to-red-500/20 border border-yellow-400/50 rounded-xl p-12 text-center"
        >
          <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Your Business?</span>
          </h3>
          
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            This management summary showcases our comprehensive approach to digital excellence. 
            Every project receives this level of strategic thinking, meticulous execution, and transparent documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-red-600 text-black font-bold px-10 py-5 rounded-xl hover:from-yellow-300 hover:to-red-500 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <span>Start Your Transformation</span>
              <Crown className="w-6 h-6" />
            </a>
            
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 border-2 border-yellow-400 text-yellow-400 font-bold px-10 py-5 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg"
            >
              <span>Experience the Website</span>
              <Star className="w-6 h-6" />
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            Ready to discuss your project? Let&apos;s create something extraordinary together.
          </div>
        </motion.div>
      </div>
    </section>
  );
}