'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, DollarSign, Lightbulb, BarChart3, CheckCircle } from 'lucide-react';

export default function ParetoEducation() {
  const paretoExamples = [
    {
      context: "Website Performance",
      principle: "80% of user satisfaction comes from 20% of features",
      application: "We focused on Core Web Vitals, mobile optimization, and loading speed",
      result: "57% performance improvement with targeted optimizations",
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      context: "Design Impact",
      principle: "80% of visual appeal comes from 20% of design elements",
      application: "Royal color palette, typography hierarchy, and Compare component",
      result: "Distinctive brand identity with minimal but powerful elements",
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      context: "Business Value",
      principle: "80% of bookings come from 20% of website features",
      application: "Prominent booking CTAs, clear pricing, and dual performance showcase",
      result: "Conversion-optimized user journey with strategic focus",
      icon: <DollarSign className="w-6 h-6 text-yellow-400" />
    },
    {
      context: "Development Efficiency",
      principle: "80% of functionality from 20% of code complexity",
      application: "Next.js component architecture with reusable design system",
      result: "Maintainable codebase with maximum feature delivery",
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />
    }
  ];

  const implementationSteps = [
    {
      step: "Identify the Vital Few",
      description: "Analyze your business to find the 20% that drives 80% of results",
      example: "For The Dutch Queen: Compare component, booking flow, performance showcase",
      priority: "Critical"
    },
    {
      step: "Eliminate the Trivial Many",
      description: "Remove or minimize the 80% that only contributes 20% of value",
      example: "Simplified navigation, focused content, reduced feature bloat",
      priority: "High"
    },
    {
      step: "Measure and Optimize",
      description: "Continuously monitor which elements drive the most impact",
      example: "Analytics on booking conversions, user engagement, performance metrics",
      priority: "Ongoing"
    },
    {
      step: "Scale the Winners",
      description: "Double down on the elements that prove most effective",
      example: "Enhanced Compare component, optimized booking CTAs, royal branding",
      priority: "Strategic"
    }
  ];

  const businessImpact = [
    {
      metric: "80% faster decision making",
      explanation: "Focus on key features eliminates analysis paralysis",
      businessValue: "Shorter development cycles, faster market entry"
    },
    {
      metric: "20% of effort, 80% of results",
      explanation: "Strategic focus maximizes return on investment",
      businessValue: "Higher ROI, more efficient resource allocation"
    },
    {
      metric: "80% user satisfaction improvement",
      explanation: "Optimizing critical user journeys has exponential impact",
      businessValue: "Better user experience, increased conversions"
    }
  ];

  return (
    <section id="pareto" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <Target className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Pareto Principle Education
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            The <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">80/20 Rule</span> in Action
          </h2>
          
          <p className="text-lg text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            How we applied the Pareto Principle to maximize impact while minimizing complexity. 
            This strategic approach delivered exceptional results by focusing on the vital few elements that drive the most value.
          </p>

          <div className="bg-gradient-to-r from-yellow-400/10 to-red-500/10 border border-yellow-400/30 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">The Pareto Principle</h3>
            <p className="text-gray-200">
              Named after economist Vilfredo Pareto, this principle states that roughly 80% of consequences 
              come from 20% of causes. In web development, this means 80% of your success comes from 
              optimizing 20% of your features.
            </p>
          </div>
        </motion.div>

        {/* Pareto Examples Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {paretoExamples.map((example, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                {example.icon}
                <h3 className="text-xl font-semibold text-white">{example.context}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-1">Principle Applied</h4>
                  <p className="text-sm text-gray-300">{example.principle}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-1">Our Implementation</h4>
                  <p className="text-sm text-gray-300">{example.application}</p>
                </div>
                
                <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-green-400 mb-1">Result</h4>
                  <p className="text-sm text-gray-200">{example.result}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Implementation Framework */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Cinzel, serif' }}>
            Implementation <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Framework</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {index + 1}
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white pt-2">{step.step}</h4>
                  
                  <p className="text-sm text-gray-300">{step.description}</p>
                  
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                    <h5 className="text-xs font-semibold text-yellow-400 mb-1">Example</h5>
                    <p className="text-xs text-gray-200">{step.example}</p>
                  </div>
                  
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    step.priority === 'Critical' ? 'bg-red-400/20 text-red-400' :
                    step.priority === 'High' ? 'bg-yellow-400/20 text-yellow-400' :
                    step.priority === 'Strategic' ? 'bg-purple-400/20 text-purple-400' :
                    'bg-blue-400/20 text-blue-400'
                  }`}>
                    {step.priority}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Business Impact */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Cinzel, serif' }}>
            Measurable <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Business Impact</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessImpact.map((impact, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{impact.metric}</div>
                <p className="text-gray-300 mb-4">{impact.explanation}</p>
                <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-3">
                  <p className="text-sm text-green-400 font-medium">{impact.businessValue}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Items for Clients */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-yellow-400/10 to-red-500/10 border border-yellow-400/30 rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Apply This to Your Business</h3>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Ready to implement the 80/20 rule in your own projects? Here&apos;s your action plan:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-yellow-400 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Immediate Actions
              </h4>
              <ul className="space-y-2 text-gray-200">
                <li>• Audit your current website features</li>
                <li>• Identify your top 3 business goals</li>
                <li>• Measure current conversion rates</li>
                <li>• List all user touchpoints</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-yellow-400 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Strategic Focus
              </h4>
              <ul className="space-y-2 text-gray-200">
                <li>• Focus on features that drive bookings</li>
                <li>• Optimize the critical user journey</li>
                <li>• Eliminate unnecessary complexity</li>
                <li>• Test and measure everything</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-red-600 text-black font-bold px-8 py-4 rounded-xl hover:from-yellow-300 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Your 80/20 Analysis</span>
              <Target className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}