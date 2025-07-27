'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Users, TrendingUp } from 'lucide-react';

export default function NextSteps() {
  const roadmapItems = [
    {
      phase: 'Immediate (0-3 months)',
      priority: 'High',
      items: [
        'Analytics implementation and baseline measurement',
        'A/B testing for booking conversion optimization',
        'SEO enhancement for local Queen tribute searches',
        'Social media integration and sharing features'
      ],
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      phase: 'Short-term (3-6 months)',
      priority: 'Medium',
      items: [
        'Customer testimonials and review system',
        'Advanced booking calendar integration',
        'Performance video gallery expansion',
        'Email marketing automation setup'
      ],
      icon: <Target className="w-6 h-6 text-blue-400" />
    },
    {
      phase: 'Long-term (6-12 months)',
      priority: 'Strategic',
      items: [
        'Customer portal for event planning',
        'Advanced analytics and reporting dashboard',
        'Multi-language support for international bookings',
        'Progressive Web App features'
      ],
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section id="next-steps" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <ArrowRight className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Strategic Roadmap
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Future <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Opportunities</span>
          </h2>
          
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Strategic recommendations for continued growth and optimization, prioritized by impact and feasibility. 
            Each phase builds upon previous successes to maximize long-term value.
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className="space-y-8">
          {roadmapItems.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  {phase.icon}
                  <div>
                    <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      phase.priority === 'High' ? 'bg-red-400/20 text-red-400' :
                      phase.priority === 'Medium' ? 'bg-yellow-400/20 text-yellow-400' :
                      'bg-purple-400/20 text-purple-400'
                    }`}>
                      {phase.priority} Priority
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3 p-4 bg-yellow-400/5 rounded-lg">
                    <ArrowRight className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-yellow-400/10 to-red-500/10 border border-yellow-400/30 rounded-xl p-8 text-center"
        >
          <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Continue the Journey?</h3>
          <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
            These strategic recommendations are designed to build upon the solid foundation we&apos;ve created. 
            Let&apos;s discuss which initiatives align best with your current business priorities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-red-600 text-black font-bold px-8 py-4 rounded-xl hover:from-yellow-300 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
            >
              <span>Schedule Strategy Session</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <span>Explore Live Website</span>
              <Target className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}