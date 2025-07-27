import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import ManagementSummaryHero from '@/components/management-summary/hero-section';
import ExecutiveSummary from '@/components/management-summary/executive-summary';
import PerformanceGallery from '@/components/management-summary/performance-gallery';
import ProjectJourney from '@/components/management-summary/project-journey';
import DesignInvestigation from '@/components/management-summary/design-investigation';
import ImplementationAnalysis from '@/components/management-summary/implementation-analysis';
import ImpactAnalysis from '@/components/management-summary/impact-analysis';
import NextSteps from '@/components/management-summary/next-steps';
import VersionControl from '@/components/management-summary/version-control';
import TransformationSummary from '@/components/management-summary/transformation-summary';
import ParetoEducation from '@/components/management-summary/pareto-education';

export const metadata: Metadata = {
  title: 'Management Summary - The Dutch Queen Project',
  description: 'Comprehensive project management summary showcasing strategic decisions, technical excellence, and business impact for The Dutch Queen website development.',
  keywords: 'project management, web development, Queen tribute band, performance optimization, strategic analysis',
};

export default function ManagementSummaryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main>
        <ManagementSummaryHero />
        
        <div className="relative">
          {/* Executive Summary with enhanced KPIs */}
          <section id="overview" className="py-20">
            <ExecutiveSummary />
          </section>

          {/* Performance Gallery - Visual showcase */}
          <section id="gallery" className="py-20 bg-gradient-to-b from-black to-zinc-900">
            <PerformanceGallery />
          </section>

          {/* Project Journey with decision tracking */}
          <section id="journey" className="py-20">
            <ProjectJourney />
          </section>

          {/* Design Investigation with resources */}
          <section id="design" className="py-20 bg-gradient-to-b from-black to-zinc-900">
            <DesignInvestigation />
          </section>

          {/* Implementation Analysis */}
          <section id="implementation" className="py-20">
            <ImplementationAnalysis />
          </section>

          {/* Impact Analysis with ROI */}
          <section id="impact" className="py-20 bg-gradient-to-b from-black to-zinc-900">
            <ImpactAnalysis />
          </section>

          {/* Pareto Principle Education - NEW SECTION */}
          <section id="pareto" className="py-20">
            <ParetoEducation />
          </section>

          {/* Next Steps with strategic recommendations */}
          <section id="next-steps" className="py-20 bg-gradient-to-b from-black to-zinc-900">
            <NextSteps />
          </section>

          {/* Version Control documentation */}
          <section id="version-control" className="py-20">
            <VersionControl />
          </section>

          {/* Transformation Summary - Final impact */}
          <section id="transformation" className="py-20 bg-gradient-to-b from-black to-zinc-900">
            <TransformationSummary />
          </section>
        </div>
      </main>

      {/* Floating Navigation for Management Summary */}
      <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
        <div className="bg-black/90 backdrop-blur-xl border border-yellow-400/20 rounded-xl p-4 space-y-2 max-w-56 shadow-2xl">
          <h4 className="text-sm font-semibold mb-3 text-yellow-400 flex items-center">
            <span className="mr-2">📊</span>
            Navigation
          </h4>
          {[
            { id: 'overview', label: 'Executive Summary' },
            { id: 'gallery', label: 'Performance Gallery' },
            { id: 'journey', label: 'Project Journey' },
            { id: 'design', label: 'Design Investigation' },
            { id: 'implementation', label: 'Implementation' },
            { id: 'impact', label: 'Impact Analysis' },
            { id: 'pareto', label: 'Pareto Education' },
            { id: 'next-steps', label: 'Next Steps' },
            { id: 'version-control', label: 'Version Control' },
            { id: 'transformation', label: 'Final Summary' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center space-x-2 text-xs hover:text-yellow-400 transition-colors duration-300 py-1"
            >
              <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Client CTA Footer */}
      <footer className="bg-gradient-to-r from-yellow-400 to-red-600 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            This management summary demonstrates our strategic approach to creating exceptional digital experiences. 
            Let's discuss how we can apply this level of excellence to your next project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black/90 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
            <Link
              href="/"
              className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              View Live Website
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}