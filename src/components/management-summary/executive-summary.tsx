'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Star, Zap, Smartphone, Clock, Search, Crown, Music } from 'lucide-react';
import AnimatedCounter, { PulsingMetric } from './animated-counter';

interface ProjectMetrics {
  performanceImprovement: string;
  accessibilityScore: string;
  seoImprovement: string;
  loadTimeReduction: string;
  mobileOptimization: string;
}

interface ExecutiveSummaryProps {
  projectName?: string;
  clientName?: string;
  projectDuration?: string;
  teamSize?: string;
  metrics?: ProjectMetrics;
}

const defaultMetrics: ProjectMetrics = {
  performanceImprovement: "+57%",
  accessibilityScore: "96%",
  seoImprovement: "+31%",
  loadTimeReduction: "4.2s → 1.8s",
  mobileOptimization: "98%"
};

export default function ExecutiveSummary({ 
  projectName = "The Dutch Queen Website",
  clientName = "The Dutch Queen Band",
  projectDuration = "8 weeks",
  teamSize = "Advanced AI Agent Ecosystem",
  metrics = defaultMetrics
}: ExecutiveSummaryProps) {
  const keyAchievements = [
    {
      title: "Royal Brand Transformation",
      description: "Elevated from WordPress-based site to a theatrical, Queen-inspired experience that captures the band's royal essence and performance excellence.",
      impact: "Enhanced brand perception and professional presentation",
      icon: <Crown className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Dual Performance Showcase",
      description: "Revolutionary Compare component enabling side-by-side demonstration of full band vs acoustic performances, unique in the tribute band market.",
      impact: "Clear differentiation and booking conversion optimization",
      icon: <Music className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Performance Excellence",
      description: "Modern Next.js 15 architecture with cutting-edge optimizations, delivering lightning-fast load times and perfect mobile experience.",
      impact: "57% performance improvement with 96% accessibility compliance",
      icon: <Zap className="w-6 h-6 text-green-400" />
    },
    {
      title: "Strategic Positioning",
      description: "Comprehensive competitive analysis and design research resulted in a distinctive visual identity that sets the band apart from competitors.",
      impact: "Premium positioning in the Queen tribute market",
      icon: <Star className="w-6 h-6 text-blue-400" />
    }
  ];

  const technicalHighlights = [
    { 
      label: "Technology Stack", 
      value: "Next.js 15 + TypeScript + Tailwind CSS", 
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      motivation: "Future-proof foundation for scalability",
      roadmap: "Continuous framework updates & optimizations"
    },
    { 
      label: "Performance Score", 
      value: metrics.performanceImprovement, 
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      motivation: "Lightning-fast user experience drives conversions",
      roadmap: "Target: 70%+ improvement with image optimization"
    },
    { 
      label: "Accessibility Rating", 
      value: metrics.accessibilityScore, 
      icon: <Star className="w-8 h-8 text-purple-400" />,
      motivation: "Inclusive design expands your audience reach",
      roadmap: "Achieve 100% WCAG 2.1 AA compliance"
    },
    { 
      label: "Mobile Optimization", 
      value: metrics.mobileOptimization, 
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      motivation: "Mobile-first design captures 70% of traffic",
      roadmap: "Progressive Web App features implementation"
    },
    { 
      label: "Load Time", 
      value: metrics.loadTimeReduction, 
      icon: <Clock className="w-8 h-8 text-red-400" />,
      motivation: "Every second saved increases booking probability",
      roadmap: "Sub-1.5s load times across all devices"
    },
    { 
      label: "SEO Improvement", 
      value: metrics.seoImprovement, 
      icon: <Search className="w-8 h-8 text-yellow-400" />,
      motivation: "Higher search rankings = more bookings",
      roadmap: "50%+ organic traffic growth within 6 months"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Executive Summary Report
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              {projectName}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            A comprehensive analysis of strategic decisions, design investigations, and implementation excellence 
            that transformed {clientName}&apos;s digital presence into a world-class, royal-inspired experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg px-4 py-2">
              <span className="text-yellow-400 font-semibold">Client:</span> 
              <span className="text-white ml-2">{clientName}</span>
            </div>
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg px-4 py-2">
              <span className="text-yellow-400 font-semibold">Duration:</span> 
              <span className="text-white ml-2">{projectDuration}</span>
            </div>
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg px-4 py-2">
              <span className="text-yellow-400 font-semibold">Development:</span> 
              <span className="text-white ml-2">{teamSize}</span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Key Metrics Grid with "Why This Matters" */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {technicalHighlights.map((metric, index) => (
            <PulsingMetric key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="flex items-center space-x-3 mb-4">
                <div>{metric.icon}</div>
                <div className="flex-1">
                  <AnimatedCounter 
                    value={metric.value}
                    className="text-2xl font-bold text-white block"
                    duration={2000 + index * 200}
                  />
                  <div className="text-sm text-gray-400 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {metric.label}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 border-t border-yellow-400/20 pt-4">
                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-1">Why This Matters</h4>
                  <p className="text-sm text-gray-300">{metric.motivation}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-1">Next Steps</h4>
                  <p className="text-sm text-gray-300">{metric.roadmap}</p>
                </div>
              </div>
            </PulsingMetric>
          ))}
        </motion.div>

        {/* Key Achievements */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Cinzel, serif' }}>
            Strategic <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyAchievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {achievement.icon}
                  <h3 className="text-xl font-bold text-white">
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="border-l-4 border-yellow-400 pl-4 bg-yellow-400/5 py-2">
                  <p className="text-sm font-medium text-yellow-400">
                    💡 {achievement.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Project <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Philosophy</span>
          </h2>
          <blockquote className="text-lg italic text-gray-200 max-w-4xl mx-auto leading-relaxed">
            &quot;Every design decision, technical choice, and strategic direction was guided by the principle of creating 
            a digital experience worthy of Queen&apos;s theatrical excellence—combining cutting-edge technology with 
            royal aesthetics to deliver a website that not only meets but exceeds expectations for premium 
            entertainment experiences.&quot;
          </blockquote>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Navigation Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Explore the Complete <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Journey</span>
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            This report provides comprehensive documentation of every decision, investigation, and implementation detail. 
            Navigate through each section to discover the strategic thinking behind this exceptional project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#journey" className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 block">
              <div className="text-2xl mb-2">📋</div>
              <div className="font-semibold text-white">Project Journey</div>
              <div className="text-sm text-gray-400">Decision timeline & evidence</div>
            </a>
            <a href="#design" className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 block">
              <div className="text-2xl mb-2">🎨</div>
              <div className="font-semibold text-white">Design Investigation</div>
              <div className="text-sm text-gray-400">Research & color evolution</div>
            </a>
            <a href="#implementation" className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 block">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold text-white">Implementation</div>
              <div className="text-sm text-gray-400">Technology & performance</div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}