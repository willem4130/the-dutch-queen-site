'use client';

import { motion } from 'framer-motion';
import { Music, Mic, Guitar, Star, Camera, Eye } from 'lucide-react';

interface PerformanceImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const performanceImages: PerformanceImage[] = [
  {
    src: '/performance-shot.jpeg',
    alt: 'The Dutch Queen Full Band Performance',
    title: 'Full Band Experience',
    description: 'Complete Queen tribute with all instruments and theatrical staging that captures the energy of the original band',
    icon: <Music className="w-6 h-6" />,
    category: 'Full Band'
  },
  {
    src: '/acoustic-shot.jpg',
    alt: 'The Dutch Queen Acoustic Performance',
    title: 'Acoustic Intimacy',
    description: 'Stripped-down versions highlighting vocal mastery and musicianship in intimate settings',
    icon: <Guitar className="w-6 h-6" />,
    category: 'Acoustic'
  },
  {
    src: '/performance-shot1.jpg',
    alt: 'The Dutch Queen Stage Performance',
    title: 'Stage Excellence',
    description: 'Professional stage presence and lighting that brings Queen&apos;s theatrical legacy to life',
    icon: <Star className="w-6 h-6" />,
    category: 'Stage Production'
  },
  {
    src: '/performance-shot2.jpeg',
    alt: 'The Dutch Queen Vocal Performance',
    title: 'Vocal Mastery',
    description: 'Capturing the power and range that made Queen legendary with authentic vocal delivery',
    icon: <Mic className="w-6 h-6" />,
    category: 'Vocals'
  }
];

export default function PerformanceGallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
            <Camera className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Visual Excellence Gallery
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Performance <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Showcase</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            The Dutch Queen&apos;s professional performance imagery showcases the quality and theatrical excellence 
            that this website transformation aimed to capture and amplify. These visuals directly inspired our design direction.
          </p>
        </motion.div>

        {/* Performance Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {performanceImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement!;
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-yellow-600/20 to-red-600/20 flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-6xl mb-4">🎭</div>
                          <div class="text-white font-bold">${image.title}</div>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full font-medium">
                    {image.category}
                  </span>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-yellow-400">
                    {image.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    {image.title}
                  </h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Impact Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center">
            <Eye className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Visual Inspiration</h3>
            <p className="text-gray-300 text-sm">
              These performance photos directly influenced our color palette, typography choices, and overall aesthetic direction.
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Brand Authenticity</h3>
            <p className="text-gray-300 text-sm">
              Real performance imagery ensures the website accurately represents the band&apos;s professional quality and stage presence.
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-6 text-center">
            <Camera className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Marketing Impact</h3>
            <p className="text-gray-300 text-sm">
              High-quality performance photos create emotional connection with potential clients and showcase professionalism.
            </p>
          </div>
        </motion.div>

        {/* Design Integration Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-400/10 to-red-500/10 border border-yellow-400/30 rounded-xl p-8 text-center"
        >
          <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            From Performance to <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Digital Excellence</span>
          </h3>
          <p className="text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed">
            These authentic performance images formed the foundation of our design strategy. Every color choice, 
            typography decision, and visual element was carefully crafted to complement and enhance the powerful 
            stage presence captured in these photographs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg px-4 py-2">
              <span className="text-yellow-400 font-semibold">Royal Color Palette</span>
              <span className="text-white ml-2">Inspired by stage lighting</span>
            </div>
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg px-4 py-2">
              <span className="text-yellow-400 font-semibold">Theatrical Typography</span>
              <span className="text-white ml-2">Matches performance energy</span>
            </div>
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-lg px-4 py-2">
              <span className="text-yellow-400 font-semibold">Compare Component</span>
              <span className="text-white ml-2">Showcases both styles</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}