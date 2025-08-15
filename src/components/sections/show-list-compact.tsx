"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Calendar, MapPin, Clock, Ticket, ExternalLink, 
  ChevronDown, Filter, Search, SortAsc, Crown,
  Music, Users, Star, ArrowRight, Eye
} from "lucide-react";

// Compact show data with more entries
const compactShows = [
  {
    id: 1,
    date: "2024-09-15",
    time: "20:00",
    venue: "Royal Concert Hall",
    city: "Amsterdam",
    country: "Netherlands",
    status: "available",
    type: "full-band",
    price: { min: 45, max: 125 },
    capacity: 2500,
    sold: 1200,
    vip: true
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
    price: { min: 35, max: 85 },
    capacity: 800,
    sold: 720,
    vip: true
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
    price: { min: 65, max: 185 },
    capacity: 17000,
    sold: 17000,
    vip: false
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
    price: { min: 55, max: 145 },
    capacity: 2200,
    sold: 890,
    vip: true
  },
  {
    id: 5,
    date: "2024-10-18",
    time: "20:00",
    venue: "Concertgebouw",
    city: "Amsterdam", 
    country: "Netherlands",
    status: "available",
    type: "acoustic",
    price: { min: 75, max: 150 },
    capacity: 2000,
    sold: 340,
    vip: true
  },
  {
    id: 6,
    date: "2024-10-25",
    time: "19:00",
    venue: "Forest National",
    city: "Brussels",
    country: "Belgium", 
    status: "low",
    type: "full-band",
    price: { min: 50, max: 130 },
    capacity: 8000,
    sold: 7200,
    vip: false
  }
];

const ShowListCompact = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "venue" | "price">("date");
  const [filterStatus, setFilterStatus] = useState<"all" | "available" | "low" | "soldout">("all");
  const [expandedShow, setExpandedShow] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Filter and sort logic
  const filteredAndSortedShows = compactShows
    .filter(show => {
      const matchesSearch = show.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           show.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === "all" || show.status === filterStatus;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "venue":
          return a.venue.localeCompare(b.venue);
        case "price":
          return a.price.min - b.price.min;
        default:
          return 0;
      }
    });

  const getStatusInfo = (status: string) => {
    const statusConfig = {
      available: { 
        color: "text-green-400", 
        bg: "bg-green-500/20", 
        border: "border-green-500/30",
        dot: "bg-green-500"
      },
      low: { 
        color: "text-yellow-400", 
        bg: "bg-yellow-500/20", 
        border: "border-yellow-500/30",
        dot: "bg-yellow-500"
      },
      soldout: { 
        color: "text-red-400", 
        bg: "bg-red-500/20", 
        border: "border-red-500/30",
        dot: "bg-red-500"
      }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.available;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en', { month: 'short' }),
      full: date.toLocaleDateString('en', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
  };

  const getSoldPercentage = (sold: number, capacity: number) => {
    return Math.round((sold / capacity) * 100);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Show <span className="bg-gradient-to-r from-royal-bronze to-queen-burgundy bg-clip-text text-transparent">Schedule</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Complete overview of all upcoming Queen tribute performances
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search venues or cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-royal-bronze transition-colors"
                />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="appearance-none bg-gray-800/50 border border-gray-600 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-royal-bronze transition-colors min-w-[140px]"
                >
                  <option value="date">Sort by Date</option>
                  <option value="venue">Sort by Venue</option>
                  <option value="price">Sort by Price</option>
                </select>
                <SortAsc className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Filter */}
              <div className="relative">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
                  className="appearance-none bg-gray-800/50 border border-gray-600 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-royal-bronze transition-colors min-w-[140px]"
                >
                  <option value="all">All Shows</option>
                  <option value="available">Available</option>
                  <option value="low">Few Left</option>
                  <option value="soldout">Sold Out</option>
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Shows List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="space-y-3"
        >
          <AnimatePresence mode="wait">
            {filteredAndSortedShows.map((show) => {
              const dateInfo = formatDate(show.date);
              const statusInfo = getStatusInfo(show.status);
              const soldPercentage = getSoldPercentage(show.sold, show.capacity);
              const isExpanded = expandedShow === show.id;

              return (
                <motion.div
                  key={show.id}
                  variants={fadeInUp}
                  layout
                  className="group bg-gradient-to-r from-gray-900/80 to-gray-950/80 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-royal-bronze/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Main Row */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedShow(isExpanded ? null : show.id)}
                  >
                    <div className="flex items-center justify-between">
                      {/* Date Column */}
                      <div className="flex items-center gap-6">
                        <div className="text-center min-w-[60px]">
                          <div className="text-2xl font-bold text-white">{dateInfo.day}</div>
                          <div className="text-sm text-gray-400 uppercase tracking-wide">{dateInfo.month}</div>
                        </div>

                        {/* Venue Info */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-royal-bronze transition-colors truncate">
                              {show.venue}
                            </h3>
                            {show.vip && (
                              <Crown className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            )}
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${statusInfo.dot}`} />
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {show.city}, {show.country}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {show.time}
                            </div>
                            <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${
                              show.type === 'full-band' 
                                ? 'bg-red-500/20 text-red-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              <Music className="w-3 h-3" />
                              {show.type === 'full-band' ? 'Full Band' : 'Acoustic'}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="flex items-center gap-6">
                        {/* Price */}
                        <div className="text-right min-w-[80px]">
                          <div className="text-lg font-bold text-white">
                            €{show.price.min}
                          </div>
                          <div className="text-sm text-gray-400">
                            from
                          </div>
                        </div>

                        {/* Status */}
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold border min-w-[100px] text-center ${statusInfo.color} ${statusInfo.bg} ${statusInfo.border}`}>
                          {show.status === 'available' && 'Available'}
                          {show.status === 'low' && 'Few Left'}
                          {show.status === 'soldout' && 'Sold Out'}
                        </div>

                        {/* Expand Arrow */}
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>{show.sold.toLocaleString()} sold</span>
                        <span>{soldPercentage}% capacity</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${
                            soldPercentage >= 90 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                            soldPercentage >= 70 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                            'bg-gradient-to-r from-green-500 to-green-600'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${soldPercentage}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-700/50"
                      >
                        <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div>
                              <h4 className="font-semibold text-white mb-3">Event Details</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-400">Full Date:</span>
                                  <span className="text-white">{dateInfo.full}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">Capacity:</span>
                                  <span className="text-white">{show.capacity.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">Price Range:</span>
                                  <span className="text-white">€{show.price.min} - €{show.price.max}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">Show Type:</span>
                                  <span className="text-white capitalize">{show.type.replace('-', ' ')}</span>
                                </div>
                              </div>
                            </div>

                            {/* Right Column - Actions */}
                            <div>
                              <h4 className="font-semibold text-white mb-3">Actions</h4>
                              <div className="flex flex-col gap-3">
                                {show.status !== 'soldout' ? (
                                  <button className="bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-4 py-2 rounded-lg font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                                    <Ticket className="w-4 h-4" />
                                    Buy Tickets
                                  </button>
                                ) : (
                                  <button disabled className="bg-gray-700 text-gray-400 px-4 py-2 rounded-lg font-semibold cursor-not-allowed flex items-center justify-center gap-2">
                                    <Star className="w-4 h-4" />
                                    Sold Out
                                  </button>
                                )}
                                <button className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:border-royal-bronze hover:text-royal-bronze transition-all duration-200 flex items-center justify-center gap-2">
                                  <Eye className="w-4 h-4" />
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredAndSortedShows.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg mb-4">
              No shows found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterStatus("all");
              }}
              className="text-royal-bronze hover:text-queen-burgundy transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Total Shows", value: compactShows.length, color: "text-royal-bronze" },
            { label: "Available", value: compactShows.filter(s => s.status === 'available').length, color: "text-green-400" },
            { label: "Few Left", value: compactShows.filter(s => s.status === 'low').length, color: "text-yellow-400" },
            { label: "Sold Out", value: compactShows.filter(s => s.status === 'soldout').length, color: "text-red-400" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700/50">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { ShowListCompact };