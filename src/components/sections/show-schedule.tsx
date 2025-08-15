"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Clock, Users, Ticket, ExternalLink, Star, Crown } from "lucide-react";

// Mock data for shows - replace with real data
const upcomingShows = [
  {
    id: 1,
    date: "2024-09-15",
    time: "20:00",
    venue: "Royal Concert Hall",
    city: "Amsterdam",
    country: "Netherlands",
    ticketStatus: "available",
    capacity: 2500,
    soldOut: false,
    vip: true,
    type: "full-band",
    price: { min: 45, max: 125 },
    description: "A full Queen experience in Amsterdam's most prestigious venue",
    image: "/venue-royal-concert-hall.jpg"
  },
  {
    id: 2,
    date: "2024-09-22",
    time: "19:30",
    venue: "Theatre de la Reine",
    city: "Brussels",
    country: "Belgium",
    ticketStatus: "low",
    capacity: 800,
    soldOut: false,
    vip: true,
    type: "acoustic",
    price: { min: 35, max: 85 },
    description: "Intimate acoustic session in Brussels' historic theatre",
    image: "/venue-theatre-reine.jpg"
  },
  {
    id: 3,
    date: "2024-10-01",
    time: "21:00",
    venue: "Ziggo Dome",
    city: "Amsterdam",
    country: "Netherlands",
    ticketStatus: "soldout",
    capacity: 17000,
    soldOut: true,
    vip: false,
    type: "full-band",
    price: { min: 65, max: 185 },
    description: "Epic stadium experience at Amsterdam's premier venue",
    image: "/venue-ziggo-dome.jpg"
  },
  {
    id: 4,
    date: "2024-10-12",
    time: "20:30",
    venue: "Palais des Beaux-Arts",
    city: "Brussels",
    country: "Belgium",
    ticketStatus: "available",
    capacity: 2200,
    soldOut: false,
    vip: true,
    type: "full-band",
    price: { min: 55, max: 145 },
    description: "Queen's greatest hits in Brussels' architectural masterpiece",
    image: "/venue-palais-beaux-arts.jpg"
  },
];

const ShowScheduleSection = () => {
  const [selectedShow, setSelectedShow] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'available' | 'full-band' | 'acoustic'>('all');

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Filter shows based on selected filter
  const filteredShows = upcomingShows.filter(show => {
    if (filter === 'all') return true;
    if (filter === 'available') return show.ticketStatus !== 'soldout';
    return show.type === filter;
  });

  const getStatusBadge = (status: string) => {
    const badges = {
      available: { 
        text: 'Tickets Available', 
        className: 'bg-green-500/20 text-green-400 border-green-500/30',
        icon: <Ticket className="w-3 h-3" />
      },
      low: { 
        text: 'Few Seats Left', 
        className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
        icon: <Users className="w-3 h-3" />
      },
      soldout: { 
        text: 'Sold Out', 
        className: 'bg-red-500/20 text-red-400 border-red-500/30',
        icon: <Star className="w-3 h-3" />
      }
    };
    return badges[status as keyof typeof badges] || badges.available;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en', { month: 'short' }),
      weekday: date.toLocaleDateString('en', { weekday: 'long' })
    };
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Crown className="w-8 h-8 text-royal-bronze" />
            <h2 className="text-4xl md:text-6xl font-bold">
              Royal <span className="bg-gradient-to-r from-royal-bronze to-queen-burgundy bg-clip-text text-transparent">Tour Dates</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the magic of Queen live. Book your tickets now for an unforgettable royal performance.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <div className="bg-gray-900/50 rounded-full p-2 border border-gray-700/50 backdrop-blur-sm">
            {[
              { key: 'all', label: 'All Shows', icon: Calendar },
              { key: 'available', label: 'Available', icon: Ticket },
              { key: 'full-band', label: 'Full Band', icon: Users },
              { key: 'acoustic', label: 'Acoustic', icon: Star },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setFilter(key as typeof filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === key
                    ? "bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white shadow-lg transform scale-105"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Shows Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredShows.map((show) => {
              const dateInfo = formatDate(show.date);
              const statusBadge = getStatusBadge(show.ticketStatus);
              
              return (
                <motion.div
                  key={show.id}
                  variants={cardVariants}
                  layout
                  className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:border-royal-bronze/50 hover:shadow-2xl hover:shadow-royal-bronze/10 ${
                    show.vip ? 'ring-1 ring-yellow-500/20' : ''
                  }`}
                >
                  {/* VIP Badge */}
                  {show.vip && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Crown className="w-3 h-3" />
                        VIP Available
                      </div>
                    </div>
                  )}

                  {/* Date Column */}
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-b from-royal-bronze to-queen-burgundy flex flex-col items-center justify-center text-white">
                    <div className="text-2xl font-bold">{dateInfo.day}</div>
                    <div className="text-sm uppercase tracking-wide">{dateInfo.month}</div>
                    <div className="text-xs opacity-75 mt-1 -rotate-90 whitespace-nowrap">{dateInfo.weekday}</div>
                  </div>

                  {/* Main Content */}
                  <div className="pl-28 p-6">
                    <div className="flex justify-between items-start mb-4">
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
                      
                      {/* Status Badge */}
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${statusBadge.className}`}>
                        {statusBadge.icon}
                        {statusBadge.text}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {show.description}
                    </p>

                    {/* Show Details */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center gap-4">
                        <div className="text-gray-400">
                          <span className="text-white font-semibold">{show.capacity.toLocaleString()}</span> capacity
                        </div>
                        <div className={`px-2 py-1 rounded text-xs ${
                          show.type === 'full-band' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {show.type === 'full-band' ? 'Full Experience' : 'Acoustic Set'}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">
                          €{show.price.min} - €{show.price.max}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {!show.soldOut ? (
                        <button className="flex-1 bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-4 py-2 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                          <Ticket className="w-4 h-4" />
                          Book Tickets
                        </button>
                      ) : (
                        <button disabled className="flex-1 bg-gray-700 text-gray-400 px-4 py-2 rounded-full font-semibold cursor-not-allowed flex items-center justify-center gap-2">
                          <Star className="w-4 h-4" />
                          Sold Out
                        </button>
                      )}
                      <button className="px-4 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-royal-bronze hover:text-royal-bronze transition-all duration-200 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-royal-bronze/5 to-queen-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No shows message */}
        {filteredShows.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">
              No shows found matching your criteria.
            </div>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <Crown className="w-12 h-12 text-royal-bronze mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be the first to know about new tour dates, exclusive pre-sales, and special Queen tribute performances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your royal email address..."
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-royal-bronze transition-colors"
              />
              <button className="bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-6 py-3 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105">
                Join the Court
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ShowScheduleSection };