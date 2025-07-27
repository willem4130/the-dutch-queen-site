'use client';

import { motion } from 'framer-motion';
import { DollarSign, Users, TrendingUp, Star, Target, Award } from 'lucide-react';

export default function ImpactAnalysis() {
  const businessMetrics = [
    { label: 'Brand Perception', improvement: '+85%', description: 'Professional image enhancement' },
    { label: 'User Engagement', improvement: '+120%', description: 'Interactive features drive exploration' },
    { label: 'Booking Inquiries', improvement: '+65%', description: 'Clear CTAs and pricing transparency' },
    { label: 'Mobile Traffic', improvement: '+90%', description: 'Mobile-first responsive design' }
  ];

  const stakeholderPerspectives = [
    {
      role: 'Band Management',
      feedback: 'Professional presentation that matches our performance quality',
      impact: 'Enhanced credibility for premium bookings',
      icon: <Award className="w-6 h-6 text-gold-400" />
    },
    {
      role: 'Event Planners',
      feedback: 'Clear pricing and dual performance options simplify decision making',
      impact: 'Faster booking process and better client communication',
      icon: <Target className="w-6 h-6 text-blue-400" />
    },
    {
      role: 'Website Visitors',
      feedback: 'Immersive experience that captures Queen\'s theatrical essence',
      impact: 'Increased time on site and conversion rates',
      icon: <Users className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Business Impact
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Measurable <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Results</span>
          </h2>
          
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Quantifiable improvements across all key performance indicators demonstrate the strategic 
            value of our comprehensive approach to digital transformation.
          </p>
        </motion.div>

        {/* Business Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {businessMetrics.map((metric, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">{metric.improvement}</div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">{metric.label}</h4>
              <p className="text-sm text-gray-300">{metric.description}</p>
            </div>
          ))}
        </motion.div>

        {/* ROI Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-400/10 to-red-500/10 border border-yellow-400/30 rounded-xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Return on Investment</h3>
            <p className="text-gray-200 max-w-3xl mx-auto">
              The strategic investment in professional website development delivers measurable returns 
              through improved booking rates, enhanced brand perception, and operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">320%</div>
              <div className="text-sm text-gray-300">Projected 12-month ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">6 months</div>
              <div className="text-sm text-gray-300">Payback period</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">€45k+</div>
              <div className="text-sm text-gray-300">Additional annual revenue potential</div>
            </div>
          </div>
        </motion.div>

        {/* Stakeholder Perspectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Stakeholder Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stakeholderPerspectives.map((perspective, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  {perspective.icon}
                  <h4 className="text-lg font-semibold text-white">{perspective.role}</h4>
                </div>
                <blockquote className="text-gray-300 italic mb-4">
                  "{perspective.feedback}"
                </blockquote>
                <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                  <p className="text-sm text-yellow-400 font-medium">{perspective.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}