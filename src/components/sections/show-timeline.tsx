"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Calendar, MapPin, Clock, Ticket, Crown, Music, Sparkles, ArrowRight } from "lucide-react";

// Timeline-specific show data
const timelineShows = [
  {
    id: 1,
    date: "2024-09-15",
    time: "20:00",
    venue: "Royal Concert Hall",
    city: "Amsterdam",
    country: "Netherlands",
    status: "available",
    type: "full-band",
    featured: true,
    description: "Grand opening of our European tour with full orchestra backing",
    highlights: ["Full Orchestra", "Special Guests", "Laser Show"],
    image: "/timeline-show-1.jpg"
  },
  {
    id: 2,
    date: "2024-09-22",
    time: "19:30",
    venue: "Theatre de la Reine",
    city: "Brussels",
    country: "Belgium",
    status: "low",
    type: "acoustic",
    featured: false,
    description: "Intimate evening with acoustic arrangements of Queen classics",
    highlights: ["Acoustic Versions", "Intimate Setting", "Q&A Session"],
    image: "/timeline-show-2.jpg"
  },
  {
    id: 3,
    date: "2024-10-01",
    time: "21:00",
    venue: "Ziggo Dome",
    city: "Amsterdam",
    country: "Netherlands",
    status: "soldout",
    type: "full-band",
    featured: true,
    description: "Epic stadium show with full production and pyrotechnics",
    highlights: ["Pyrotechnics", "Stadium Production", "Extended Setlist"],
    image: "/timeline-show-3.jpg"
  },
  {
    id: 4,
    date: "2024-10-12",
    time: "20:30",
    venue: "Palais des Beaux-Arts",
    city: "Brussels",
    country: "Belgium",
    status: "available",
    type: "full-band",
    featured: false,
    description: "Classic Queen hits in Brussels' most elegant venue",
    highlights: ["Historic Venue", "Classic Setlist", "VIP Packages"],
    image: "/timeline-show-4.jpg"
  },
];

const ShowTimelineSection = () => {
  const [hoveredShow, setHoveredShow] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      available: "from-green-500 to-green-600",
      low: "from-yellow-500 to-orange-500", 
      soldout: "from-red-500 to-red-600"
    };
    return colors[status as keyof typeof colors] || colors.available;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en', { month: 'long' }),
      year: date.getFullYear(),
      weekday: date.toLocaleDateString('en', { weekday: 'long' })
    };
  };

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-bronze/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-queen-burgundy/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="w-8 h-8 text-royal-bronze" />
            <h2 className="text-4xl md:text-6xl font-bold">
              Tour <span className="bg-gradient-to-r from-royal-bronze to-queen-burgundy bg-clip-text text-transparent">Timeline</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our royal journey across Europe. Each performance tells a unique story of Queen's legacy.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 transform md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-royal-bronze to-queen-burgundy origin-top"
              style={{ scaleY: timelineProgress.get() / 100 }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineShows.map((show, index) => {
              const dateInfo = formatDate(show.date);
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={show.id}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setHoveredShow(show.id)}
                  onMouseLeave={() => setHoveredShow(null)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 border-gray-900 ${
                        show.featured 
                          ? 'bg-gradient-to-r from-royal-bronze to-queen-burgundy' 
                          : 'bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {show.featured && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-royal-bronze to-queen-burgundy"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${!isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <motion.div
                      className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm transition-all duration-500 ${
                        hoveredShow === show.id ? 'border-royal-bronze/50 shadow-2xl shadow-royal-bronze/10 transform scale-105' : ''
                      }`}
                      whileHover={{ y: -5 }}
                    >
                      {/* Featured Badge */}
                      {show.featured && (
                        <div className="absolute top-4 right-4 z-10">
                          <div className="bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Featured Show
                          </div>
                        </div>
                      )}

                      {/* Date Header */}
                      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b border-gray-700/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-white">
                              {dateInfo.day} {dateInfo.month}
                            </div>
                            <div className="text-sm text-gray-400">
                              {dateInfo.weekday}, {dateInfo.year}
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(show.status)}`}>
                            {show.status === 'available' && 'Available'}
                            {show.status === 'low' && 'Few Left'}
                            {show.status === 'soldout' && 'Sold Out'}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-royal-bronze transition-colors">
                              {show.venue}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-400 text-sm">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {show.city}, {show.country}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {show.time}
                              </div>
                            </div>
                          </div>
                          <div className={`p-2 rounded-full ${
                            show.type === 'full-band' 
                              ? 'bg-red-500/20 text-red-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            <Music className="w-4 h-4" />
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm mb-4">
                          {show.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Show Highlights:</h4>
                          <div className="flex flex-wrap gap-2">
                            {show.highlights.map((highlight, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700/50"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex gap-3">
                          {show.status !== 'soldout' ? (
                            <button className="flex-1 bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-4 py-3 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                              <Ticket className="w-4 h-4" />
                              Get Tickets
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          ) : (
                            <div className="flex-1 bg-gray-700 text-gray-400 px-4 py-3 rounded-full font-semibold cursor-not-allowed flex items-center justify-center gap-2">
                              <Crown className="w-4 h-4" />
                              Sold Out
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-royal-bronze/5 to-queen-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <Crown className="w-12 h-12 text-royal-bronze mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Join the Royal Experience</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't miss your chance to be part of Queen's legacy. Every show is a unique celebration of the greatest hits in rock history.
            </p>
            <button className="bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-3 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto">
              View All Dates
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ShowTimelineSection };