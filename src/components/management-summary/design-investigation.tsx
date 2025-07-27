'use client';

import { motion } from 'framer-motion';
import { Palette, Search, Lightbulb, Eye } from 'lucide-react';

export default function DesignInvestigation() {
  const colorEvolution = [
    { name: 'Royal Gold', hex: '#FFD700', usage: 'Primary accents, CTAs, highlights' },
    { name: 'Queen Red', hex: '#DC2626', usage: 'Gradients, emphasis, energy' },
    { name: 'Deep Black', hex: '#000000', usage: 'Background, luxury feel' },
    { name: 'Warm White', hex: '#FAFAFA', usage: 'Text, contrast, readability' }
  ];

  const researchSources = [
    { name: 'Queen Official Website', insight: 'Theatrical branding inspiration' },
    { name: 'Tribute Band Analysis', insight: 'Market differentiation opportunities' },
    { name: 'Concert Photography', insight: 'Authentic color palette extraction' },
    { name: 'Typography Research', insight: 'Royal elegance with readability' }
  ];

  return (
    <section id="design" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <Palette className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Design Research
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Design <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Investigation</span>
          </h2>
          
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Every design decision was backed by thorough research and strategic analysis. 
            From color psychology to typography selection, each element serves a purpose.
          </p>
        </motion.div>

        {/* Color Palette */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Royal Color Evolution</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {colorEvolution.map((color, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6">
                <div 
                  className="w-full h-20 rounded-lg mb-4"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <h4 className="text-lg font-semibold text-white mb-2">{color.name}</h4>
                <p className="text-sm text-gray-400 mb-2">{color.hex}</p>
                <p className="text-sm text-gray-300">{color.usage}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research Sources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Research Sources & Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchSources.map((source, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Search className="w-5 h-5 text-yellow-400" />
                  <h4 className="text-lg font-semibold text-white">{source.name}</h4>
                </div>
                <p className="text-gray-300">{source.insight}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}