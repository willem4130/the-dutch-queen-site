'use client';

import { motion } from 'framer-motion';
import { GitBranch, Shield, Clock, CheckCircle } from 'lucide-react';

export default function VersionControl() {
  const versionHistory = [
    { version: 'v1.0.0', date: '2025-01-27', description: 'Initial royal website launch', status: 'Production' },
    { version: 'v1.1.0', date: '2025-01-20', description: 'Enhanced navigation and micro-interactions', status: 'Released' },
    { version: 'v1.0.1', date: '2025-01-15', description: 'Performance optimization and bug fixes', status: 'Released' },
    { version: 'v0.9.0', date: '2025-01-10', description: 'Compare component implementation', status: 'Testing' }
  ];

  return (
    <section id="version-control" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <GitBranch className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Version Control Excellence
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Development <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Timeline</span>
          </h2>
          
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Systematic version control and deployment strategy ensuring reliable releases and the ability 
            to rollback to any stable state. Every change is documented and tested.
          </p>
        </motion.div>

        {/* Version History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 mb-16"
        >
          {versionHistory.map((version, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${
                  version.status === 'Production' ? 'bg-green-400' :
                  version.status === 'Released' ? 'bg-blue-400' :
                  'bg-yellow-400'
                }`}></div>
                <div>
                  <div className="flex items-center space-x-3">
                    <h4 className="text-lg font-semibold text-white">{version.version}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      version.status === 'Production' ? 'bg-green-400/20 text-green-400' :
                      version.status === 'Released' ? 'bg-blue-400/20 text-blue-400' :
                      'bg-yellow-400/20 text-yellow-400'
                    }`}>
                      {version.status}
                    </span>
                  </div>
                  <p className="text-gray-300">{version.description}</p>
                </div>
              </div>
              <div className="text-sm text-gray-400">{version.date}</div>
            </div>
          ))}
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-3">Secure Deployment</h3>
            <p className="text-gray-300 text-sm">All releases go through staging environment testing before production deployment.</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-3">Time Travel Capability</h3>
            <p className="text-gray-300 text-sm">Ability to rollback to any previous stable version within minutes if needed.</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center">
            <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-3">Quality Assurance</h3>
            <p className="text-gray-300 text-sm">Comprehensive testing and code review process ensures stability and performance.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}