'use client';

import { motion } from 'framer-motion';
import { Crown, Target, Zap, TrendingUp, CheckCircle } from 'lucide-react';

export default function TimelineOverview() {
  const timelineSteps = [
    {
      id: 'discovery',
      title: 'Discovery',
      subtitle: 'Research & Planning',
      icon: <Target className="w-5 h-5" />,
      href: '#overview',
      completed: true
    },
    {
      id: 'design',
      title: 'Design',
      subtitle: 'Royal Branding',
      icon: <Crown className="w-5 h-5" />,
      href: '#design',
      completed: true
    },
    {
      id: 'development',
      title: 'Development',
      subtitle: 'Next.js Implementation',
      icon: <Zap className="w-5 h-5" />,
      href: '#implementation',
      completed: true
    },
    {
      id: 'optimization',
      title: 'Optimization',
      subtitle: 'Performance & SEO',
      icon: <TrendingUp className="w-5 h-5" />,
      href: '#performance',
      completed: true
    },
    {
      id: 'delivery',
      title: 'Delivery',
      subtitle: 'Launch & Results',
      icon: <CheckCircle className="w-5 h-5" />,
      href: '#impact',
      completed: true
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-black via-zinc-900 to-black border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
            PROJECT TIMELINE OVERVIEW
          </h3>
          <p className="text-sm text-gray-400">Click any step to jump to detailed analysis</p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 z-0"></div>
          
          {/* Timeline Steps */}
          <div className="relative z-10 flex justify-between items-start">
            {timelineSteps.map((step, index) => (
              <motion.a
                key={step.id}
                href={step.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                style={{ width: '18%' }}
              >
                {/* Step Circle */}
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-3 transition-all duration-300 ${
                  step.completed 
                    ? 'bg-gradient-to-r from-yellow-400 to-red-500 border-yellow-400 text-black' 
                    : 'bg-black border-gray-600 text-gray-400'
                } group-hover:shadow-lg group-hover:shadow-yellow-400/40`}>
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h4 className={`text-sm font-bold mb-1 transition-colors duration-300 ${
                    step.completed ? 'text-white' : 'text-gray-400'
                  } group-hover:text-yellow-400`} style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    {step.subtitle}
                  </p>
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">{index + 1}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-green-400">+57%</div>
            <div className="text-xs text-gray-400">Performance</div>
          </div>
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-blue-400">96%</div>
            <div className="text-xs text-gray-400">Accessibility</div>
          </div>
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-purple-400">1.8s</div>
            <div className="text-xs text-gray-400">Load Time</div>
          </div>
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-yellow-400">100%</div>
            <div className="text-xs text-gray-400">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}