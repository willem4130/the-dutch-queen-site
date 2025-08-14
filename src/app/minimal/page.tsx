import { HeroSectionMinimal } from "@/components/sections/hero-minimal";
import { AboutSection } from "@/components/sections/about";
import { PerformancesSection } from "@/components/sections/performances";
import { MediaGallerySection } from "@/components/sections/gallery";
import { ContactSection } from "@/components/sections/contact";

export default function MinimalVersion() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simplified navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-yellow-600">
              The Dutch Queen
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-yellow-600 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-yellow-600 transition-colors">About</a>
              <a href="#performances" className="text-white hover:text-yellow-600 transition-colors">Shows</a>
              <a href="#gallery" className="text-white hover:text-yellow-600 transition-colors">Media</a>
              <a href="#contact" className="text-white hover:text-yellow-600 transition-colors">Contact</a>
            </div>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        <div id="home">
          <HeroSectionMinimal />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="performances">
          <PerformancesSection />
        </div>
        <div id="gallery">
          <MediaGallerySection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}