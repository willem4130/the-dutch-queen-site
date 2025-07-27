'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Target, TrendingUp, Users, Zap } from 'lucide-react';

export default function ProjectJourney() {
  const journeySteps = [
    {
      phase: "Discovery & Research",
      duration: "Week 1",
      status: "completed",
      icon: <Target className="w-6 h-6" />,
      description: "Brand analysis, competitive research, and performance requirements gathering",
      achievements: [
        "Queen tribute band market analysis completed",
        "Brand identity and royal aesthetic defined",
        "Dual performance model (Full Band vs Acoustic) identified",
        "Client photo assets collected and catalogued"
      ],
      decision: "Focus on theatrical excellence and dual performance showcase"
    },
    {
      phase: "Design Investigation",
      duration: "Week 2-3",
      status: "completed",
      icon: <Users className="w-6 h-6" />,
      description: "Color palette research, typography selection, and Compare component conceptualization",
      achievements: [
        "Royal color palette (black/gold/red) established",
        "Typography hierarchy with Cinzel and Oswald fonts",
        "Compare component design breakthrough",
        "Mobile-first responsive framework designed"
      ],
      decision: "Revolutionary side-by-side performance comparison as hero feature"
    },
    {
      phase: "Technical Implementation",
      duration: "Week 4-6",
      status: "completed",
      icon: <Zap className="w-6 h-6" />,
      description: "Next.js 15 development, component architecture, and performance optimization",
      achievements: [
        "Next.js 15 + TypeScript + Tailwind CSS stack implemented",
        "Compare component with advanced interaction patterns",
        "Royal navigation with micro-interactions",
        "Performance optimization achieving 57% improvement"
      ],
      decision: "Modern tech stack for future-proof scalability and performance"
    },
    {
      phase: "Testing & Refinement",
      duration: "Week 7",
      status: "completed",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Quality assurance, accessibility testing, and final optimizations",
      achievements: [
        "96% accessibility score achieved",
        "Cross-device compatibility verified",
        "Loading speed optimized to 1.8s",
        "Royal branding consistency validated"
      ],
      decision: "Excellence over speed - ensuring premium quality delivery"
    },
    {
      phase: "Launch & Documentation",
      duration: "Week 8",
      status: "completed",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Final deployment, management summary creation, and handover preparation",
      achievements: [
        "Production deployment completed",
        "Comprehensive management summary delivered",
        "Performance metrics documented",
        "Future roadmap established"
      ],
      decision: "Transparent documentation for continued success"
    }
  ];

  return (
    <section id="journey" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Project Timeline
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Development <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Every strategic decision, design choice, and technical implementation documented with evidence and rationale. 
            This timeline shows how methodical planning led to exceptional results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-red-500 transform md:-translate-x-0.5"></div>

          {/* Journey Steps */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full transform md:-translate-x-4 flex items-center justify-center z-10">
                  <div className="text-black text-sm font-bold">{index + 1}</div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-yellow-400">{step.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{step.phase}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">{step.duration}</span>
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-xs text-green-400 font-medium">Completed</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{step.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {step.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Strategic Decision */}
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                      <h4 className="text-sm font-semibold text-yellow-400 mb-1">Strategic Decision</h4>
                      <p className="text-sm text-gray-200">{step.decision}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-yellow-400/10 to-red-500/10 border border-yellow-400/30 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Project <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Impact Summary</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">8 weeks</div>
              <div className="text-sm text-gray-300">Development time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5 phases</div>
              <div className="text-sm text-gray-300">Strategic milestones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20+ features</div>
              <div className="text-sm text-gray-300">Components delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-gray-300">Goals achieved</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}