"use client";

import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { 
  Calendar, MapPin, Clock, Ticket, Heart, Share2, 
  Crown, Music, Star, ArrowRight, Phone, Mail,
  ChevronLeft, ChevronRight, Zap
} from "lucide-react";

// Mobile-optimized show data
const mobileShows = [
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
    image: "/mobile-show-1.jpg",
    gradient: "from-red-500/20 to-red-600/20",
    accent: "red",
    description: "Epic full-band experience with theatrical staging",
    tags: ["Premium Sound", "Light Show", "VIP Available"],
    popularity: 92
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
    image: "/mobile-show-2.jpg",
    gradient: "from-yellow-500/20 to-yellow-600/20",
    accent: "yellow",
    description: "Intimate acoustic session in historic venue",
    tags: ["Acoustic", "Intimate", "Historic"],
    popularity: 78
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
    image: "/mobile-show-3.jpg",
    gradient: "from-purple-500/20 to-purple-600/20",
    accent: "purple",
    description: "Massive stadium production with pyrotechnics",
    tags: ["Stadium", "Pyrotechnics", "Epic"],
    popularity: 100
  }
];

const ShowCardsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedShows, setLikedShows] = useState<Set<number>>(new Set());
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    
    if (info.offset.x > threshold) {
      // Swiped right - like
      handleLike(mobileShows[currentIndex].id);
      nextCard();
    } else if (info.offset.x < -threshold) {
      // Swiped left - skip
      nextCard();
    }
    
    setDragDirection(null);
  };

  const handleLike = (showId: number) => {
    setLikedShows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(showId)) {
        newSet.delete(showId);
      } else {
        newSet.add(showId);
      }
      return newSet;
    });
  };

  const nextCard = () => {
    setCurrentIndex(prev => (prev + 1) % mobileShows.length);
    x.set(0);
  };

  const prevCard = () => {
    setCurrentIndex(prev => (prev - 1 + mobileShows.length) % mobileShows.length);
    x.set(0);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en', { month: 'short' }),
      weekday: date.toLocaleDateString('en', { weekday: 'short' })
    };
  };

  const getStatusConfig = (status: string) => {
    const configs = {
      available: { 
        text: 'Available', 
        color: 'from-green-500 to-green-600',
        textColor: 'text-green-400',
        icon: Ticket
      },
      low: { 
        text: 'Few Left', 
        color: 'from-yellow-500 to-orange-500',
        textColor: 'text-yellow-400',
        icon: Zap
      },
      soldout: { 
        text: 'Sold Out', 
        color: 'from-red-500 to-red-600',
        textColor: 'text-red-400',
        icon: Star
      }
    };
    return configs[status as keyof typeof configs] || configs.available;
  };

  const currentShow = mobileShows[currentIndex];
  const dateInfo = formatDate(currentShow.date);
  const statusConfig = getStatusConfig(currentShow.status);
  const isLiked = likedShows.has(currentShow.id);

  return (
    <section className="py-12 bg-gradient-to-b from-black via-gray-950 to-black min-h-screen flex flex-col">
      <div className="max-w-md mx-auto px-4 flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-royal-bronze to-queen-burgundy bg-clip-text text-transparent">
              Discover Shows
            </span>
          </h2>
          <p className="text-gray-400 text-sm">
            Swipe right to like, left to skip
          </p>
        </motion.div>

        {/* Card Stack Container */}
        <div className="relative flex-1 flex items-center justify-center mb-8">
          <div className="relative w-full max-w-sm h-[600px]">
            {/* Background Cards */}
            {mobileShows.map((show, index) => {
              if (index === currentIndex) return null;
              
              const offset = index - currentIndex;
              const absOffset = Math.abs(offset);
              const isNext = index === (currentIndex + 1) % mobileShows.length;
              
              return (
                <motion.div
                  key={show.id}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                  initial={false}
                  animate={{
                    scale: 0.95 - (absOffset * 0.05),
                    y: absOffset * 10,
                    opacity: isNext ? 0.7 : 0.3,
                    zIndex: -absOffset
                  }}
                  transition={{ duration: 0.3 }}
                />
              );
            })}

            {/* Active Card */}
            <motion.div
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              style={{ x, rotate, opacity }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              onDrag={(event, info) => {
                if (info.offset.x > 50) {
                  setDragDirection('right');
                } else if (info.offset.x < -50) {
                  setDragDirection('left');
                } else {
                  setDragDirection(null);
                }
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ zIndex: 10 }}
            >
              <div className={`w-full h-full rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-600 overflow-hidden relative ${
                dragDirection === 'right' ? 'ring-2 ring-green-500' : 
                dragDirection === 'left' ? 'ring-2 ring-red-500' : ''
              }`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div className={`w-full h-full bg-gradient-to-br ${currentShow.gradient}`} />
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col p-6">
                  {/* Top Row */}
                  <div className="flex justify-between items-start mb-4">
                    {/* Date */}
                    <div className="bg-black/50 rounded-2xl p-3 backdrop-blur-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{dateInfo.day}</div>
                        <div className="text-xs text-gray-300 uppercase tracking-wide">{dateInfo.month}</div>
                        <div className="text-xs text-gray-400">{dateInfo.weekday}</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleLike(currentShow.id)}
                        className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                          isLiked 
                            ? 'bg-red-500/80 text-white' 
                            : 'bg-black/50 text-gray-300 hover:bg-red-500/50'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-3 bg-black/50 rounded-full text-gray-300 hover:bg-white/20 transition-all backdrop-blur-sm">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Popularity Bar */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs text-gray-300">Popularity</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${currentShow.popularity}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Venue Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {currentShow.venue}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-300 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {currentShow.city}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {currentShow.time}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">
                      {currentShow.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {currentShow.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-auto">
                    {/* Price and Status */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">
                          €{currentShow.price.min}
                        </div>
                        <div className="text-sm text-gray-400">
                          starting from
                        </div>
                      </div>
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${statusConfig.color} text-white text-sm font-semibold flex items-center gap-2`}>
                        <statusConfig.icon className="w-4 h-4" />
                        {statusConfig.text}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all ${
                        currentShow.status === 'soldout'
                          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white hover:shadow-lg hover:shadow-royal-bronze/25'
                      }`}
                      whileTap={{ scale: 0.95 }}
                      disabled={currentShow.status === 'soldout'}
                    >
                      {currentShow.status === 'soldout' ? (
                        <>
                          <Star className="w-5 h-5" />
                          Sold Out
                        </>
                      ) : (
                        <>
                          <Ticket className="w-5 h-5" />
                          Get Tickets
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Drag Indicators */}
                {dragDirection && (
                  <motion.div
                    className={`absolute inset-0 flex items-center justify-center ${
                      dragDirection === 'right' ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className={`p-4 rounded-full ${
                      dragDirection === 'right' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {dragDirection === 'right' ? (
                        <Heart className="w-8 h-8 text-white fill-current" />
                      ) : (
                        <Star className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prevCard}
            className="p-4 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {mobileShows.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-royal-bronze w-6' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextCard}
            className="p-4 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 p-4 bg-gray-800 rounded-2xl text-gray-300 hover:bg-gray-700 transition-all">
            <Phone className="w-5 h-5" />
            Call to Book
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-gray-800 rounded-2xl text-gray-300 hover:bg-gray-700 transition-all">
            <Mail className="w-5 h-5" />
            Email Info
          </button>
        </div>
      </div>
    </section>
  );
};

export { ShowCardsMobile };