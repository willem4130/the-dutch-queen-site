"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Crown, Sparkles, Music, Camera, Video, Play } from "lucide-react";

interface MediaItem {
  id: string;
  type: "photo" | "video";
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  category: "performance" | "behind-scenes" | "venue" | "acoustic";
  date: string;
}

export function MediaGallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const galleryData: MediaItem[] = [
    {
      id: "1",
      type: "photo",
      src: "/gallery/full-band-ziggo-dome.jpg",
      thumbnail: "/gallery/thumb-full-band-ziggo-dome.jpg",
      title: "Ziggo Dome Performance",
      description: "Full band Queen experience with stadium production",
      category: "performance",
      date: "2024-11-15"
    },
    {
      id: "2",
      type: "video",
      src: "/gallery/bohemian-rhapsody-live.mp4",
      thumbnail: "/gallery/thumb-bohemian-rhapsody.jpg",
      title: "Bohemian Rhapsody Live",
      description: "Complete 6-minute theatrical performance",
      category: "performance",
      date: "2024-10-22"
    },
    {
      id: "3",
      type: "photo",
      src: "/gallery/acoustic-concertgebouw.jpg",
      thumbnail: "/gallery/thumb-acoustic-concertgebouw.jpg",
      title: "Acoustic at Concertgebouw",
      description: "Intimate Love of My Life performance",
      category: "acoustic",
      date: "2024-09-18"
    },
    {
      id: "4",
      type: "photo",
      src: "/gallery/backstage-preparation.jpg",
      thumbnail: "/gallery/thumb-backstage-prep.jpg",
      title: "Pre-Show Preparation",
      description: "Behind the scenes costume and makeup",
      category: "behind-scenes",
      date: "2024-11-10"
    },
    {
      id: "5",
      type: "video",
      src: "/gallery/we-will-rock-you-crowd.mp4",
      thumbnail: "/gallery/thumb-we-will-rock-you.jpg",
      title: "We Will Rock You - Crowd",
      description: "Audience participation at TivoliVredenburg",
      category: "performance",
      date: "2024-08-25"
    },
    {
      id: "6",
      type: "photo",
      src: "/gallery/venue-heineken-music-hall.jpg",
      thumbnail: "/gallery/thumb-venue-heineken.jpg",
      title: "Heineken Music Hall",
      description: "Full stage setup and production",
      category: "venue",
      date: "2024-07-30"
    }
  ];

  const categories = [
    { id: "all", label: "All Media", icon: Camera },
    { id: "performance", label: "Live Shows", icon: Music },
    { id: "acoustic", label: "Acoustic", icon: Sparkles },
    { id: "behind-scenes", label: "Behind Scenes", icon: Video },
    { id: "venue", label: "Venues", icon: Crown }
  ];

  const filteredMedia = activeCategory === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-deep-black to-charcoal-stage relative overflow-hidden">
      {/* Royal Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-crown-gold rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-royal-bronze transform rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-stage-platinum rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          {/* Crown Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-crown-gold to-transparent flex-1 max-w-32"></div>
            <Crown className="w-8 h-8 text-crown-gold mx-4" />
            <div className="h-px bg-gradient-to-r from-crown-gold via-crown-gold to-transparent flex-1 max-w-32"></div>
          </div>

          <h2 className="text-display-lg font-display-primary text-gradient-royal mb-6">
            Media Gallery
          </h2>
          <p className="text-content-primary text-text-muted-light max-w-3xl mx-auto">
            Experience The Dutch Queen through our performance gallery. From intimate acoustic sessions 
            to full stadium productions, witness the magic that makes us the Netherlands&apos; premier Queen tribute.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                variants={fadeInUp}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white border-crown-gold shadow-lg shadow-royal-bronze/30"
                    : "bg-charcoal-stage/50 text-text-muted-light border-stage-platinum/30 hover:border-royal-bronze hover:text-royal-bronze backdrop-blur-sm"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-nav-primary">{category.label}</span>
                
                {/* Active indicator */}
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-crown-gold/20 to-stage-platinum/20 rounded-full blur-lg"></div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Media Grid */}
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMedia.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-charcoal-stage to-midnight-velvet rounded-2xl overflow-hidden border border-stage-platinum/20 hover:border-crown-gold/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-royal-bronze/20"
              onClick={() => setSelectedMedia(item)}
            >
              {/* Media Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent"></div>
                
                {/* Media Type Icon */}
                <div className="absolute top-4 right-4">
                  {item.type === "video" ? (
                    <div className="bg-royal-bronze/90 backdrop-blur-sm rounded-full p-2">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="bg-stage-platinum/90 backdrop-blur-sm rounded-full p-2">
                      <Camera className="w-5 h-5 text-deep-black" />
                    </div>
                  )}
                </div>

                {/* Hover Play Button for Videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-crown-gold rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-deep-black ml-1" />
                    </div>
                  </div>
                )}

                {/* Royal Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-crown-gold/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-section-subtitle text-pearl-white group-hover:text-crown-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    item.category === "performance" ? "bg-queen-burgundy/20 text-queen-burgundy border border-queen-burgundy/30" :
                    item.category === "acoustic" ? "bg-crown-gold/20 text-crown-gold border border-crown-gold/30" :
                    item.category === "behind-scenes" ? "bg-stage-platinum/20 text-stage-platinum border border-stage-platinum/30" :
                    "bg-royal-bronze/20 text-royal-bronze border border-royal-bronze/30"
                  }`}>
                    {item.category.replace("-", " ")}
                  </span>
                </div>
                
                <p className="text-content-secondary text-text-muted-light mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-performance-detail text-stage-amber">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  
                  <Sparkles className="w-4 h-4 text-crown-gold opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-queen-burgundy/20 to-royal-bronze/20 rounded-3xl p-8 md:p-12 border border-crown-gold/20 backdrop-blur-sm">
            <Crown className="w-12 h-12 text-crown-gold mx-auto mb-6" />
            <h3 className="text-section-title text-crown-gold mb-4">
              Want to See More?
            </h3>
            <p className="text-content-primary text-text-muted-light mb-8 max-w-2xl mx-auto">
              Follow us on social media for the latest performance videos, behind-the-scenes content, 
              and exclusive acoustic sessions. Every show is a new adventure!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-6 py-3 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 shadow-lg shadow-royal-bronze/30"
              >
                <Video className="w-5 h-5" />
                <span>YouTube Channel</span>
              </a>
              
              <a
                href="#"
                className="inline-flex items-center space-x-2 bg-charcoal-stage border-2 border-stage-platinum text-stage-platinum px-6 py-3 rounded-full font-semibold hover:bg-stage-platinum hover:text-deep-black transition-all duration-200 transform hover:scale-105"
              >
                <Camera className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Media Modal would go here - simplified for now */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-deep-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="max-w-4xl w-full bg-charcoal-stage rounded-2xl border border-crown-gold/30 overflow-hidden">
            <div className="aspect-video">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  className="w-full h-full object-cover"
                  autoPlay
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-section-subtitle text-crown-gold mb-2">{selectedMedia.title}</h3>
              <p className="text-content-primary text-text-muted-light">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}