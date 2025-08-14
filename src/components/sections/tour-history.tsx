"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Crown, MapPin, Calendar, Users, Star, Music, Award, ExternalLink, ChevronDown, ChevronUp, Clock, Mic2 } from "lucide-react";

interface TourEvent {
  id: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  year: number;
  eventType: "festival" | "wedding" | "corporate" | "venue" | "private" | "charity";
  attendance: string;
  description: string;
  highlights: string[];
  photos: string[];
  setList?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  isHeadliner?: boolean;
  recordingAvailable?: boolean;
  pressLink?: string;
}

export function TourHistorySection() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

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

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const tourHistory: TourEvent[] = [
    {
      id: "1",
      title: "Royal Concertgebouw Headline Show",
      venue: "Royal Concertgebouw",
      location: "Amsterdam",
      date: "September 15, 2024",
      year: 2024,
      eventType: "venue",
      attendance: "2,000 sold out",
      description: "A career-defining performance in one of the world's most prestigious concert halls. The Dutch Queen delivered an unforgettable tribute to Queen's greatest hits with full orchestral backing for selected songs.",
      highlights: [
        "5-minute standing ovation for 'Bohemian Rhapsody'",
        "Acoustic version of 'Love of My Life' with string quartet",
        "Special guest appearance by Dutch National Opera singers",
        "Professional recording for live album"
      ],
      photos: ["/tour/concertgebouw-2024-1.jpg", "/tour/concertgebouw-2024-2.jpg", "/tour/concertgebouw-2024-3.jpg"],
      setList: [
        "We Will Rock You",
        "Somebody to Love",
        "Killer Queen",
        "Don't Stop Me Now",
        "Love of My Life (acoustic)",
        "Bohemian Rhapsody",
        "We Are The Champions"
      ],
      testimonial: {
        quote: "The Dutch Queen's performance at the Concertgebouw was nothing short of spectacular. Their respect for Queen's legacy combined with their own artistic flair created an evening that will be remembered for years.",
        author: "Robert van der Berg",
        role: "Concertgebouw Event Director"
      },
      isHeadliner: true,
      recordingAvailable: true,
      pressLink: "https://example.com/press-coverage"
    },
    {
      id: "2",
      title: "Pinkpop Festival Main Stage",
      venue: "Pinkpop Festival",
      location: "Landgraaf",
      date: "August 20, 2024",
      year: 2024,
      eventType: "festival",
      attendance: "15,000 festival-goers",
      description: "Closing the second stage at one of Europe's longest-running music festivals, The Dutch Queen proved they belong among the continent's top tribute acts with an electrifying 90-minute set.",
      highlights: [
        "Festival's highest-rated tribute band performance",
        "Crowd singing lasted 10 minutes after final song",
        "Social media viral moment with 'We Will Rock You'",
        "Invited back for 2025 main stage slot"
      ],
      photos: ["/tour/pinkpop-2024-1.jpg", "/tour/pinkpop-2024-2.jpg"],
      setList: [
        "We Will Rock You",
        "Fat Bottomed Girls",
        "Crazy Little Thing Called Love",
        "Under Pressure",
        "Radio Ga Ga",
        "I Want to Break Free",
        "We Are The Champions"
      ],
      testimonial: {
        quote: "The Dutch Queen absolutely stole the show. 15,000 people singing 'We Are The Champions' together was pure magic. They've earned their place on our main stage for 2025.",
        author: "Marco Visser",
        role: "Pinkpop Festival Organizer"
      },
      isHeadliner: false,
      recordingAvailable: true
    },
    {
      id: "3",
      title: "Royal Wedding at Kasteel De Haar",
      venue: "Kasteel De Haar",
      location: "Utrecht",
      date: "October 12, 2024",
      year: 2024,
      eventType: "wedding",
      attendance: "150 guests",
      description: "An intimate yet grand celebration at one of the Netherlands' most beautiful castles, featuring both acoustic ceremony music and full reception performance.",
      highlights: [
        "Acoustic 'Love of My Life' during ceremony",
        "First dance to 'Somebody to Love'",
        "Surprise acoustic set in castle gardens",
        "Professional wedding video features performance"
      ],
      photos: ["/tour/kasteel-2024-1.jpg", "/tour/kasteel-2024-2.jpg"],
      testimonial: {
        quote: "The Dutch Queen made our wedding absolutely perfect. Their acoustic session had everyone in tears, and the reception had everyone dancing. We couldn't have asked for anything better.",
        author: "Sarah & Mark Johnson",
        role: "Wedding Couple"
      },
      isHeadliner: true
    },
    {
      id: "4",
      title: "Amsterdam RAI Corporate Gala",
      venue: "Amsterdam RAI",
      location: "Amsterdam",
      date: "November 8, 2024",
      year: 2024,
      eventType: "corporate",
      attendance: "500 executives",
      description: "High-profile corporate event showcasing The Dutch Queen's versatility in adapting their performance for professional audiences while maintaining their signature energy.",
      highlights: [
        "Standing ovation from corporate executives",
        "Customized setlist for international audience",
        "Professional lighting and staging production",
        "Booked for 2025 company events"
      ],
      photos: ["/tour/rai-2024-1.jpg"],
      testimonial: {
        quote: "Our annual gala needed something special, and The Dutch Queen delivered beyond expectations. Their professionalism and ability to read the room was impressive.",
        author: "Jennifer Martinez",
        role: "Corporate Events Manager"
      },
      isHeadliner: true
    },
    {
      id: "5",
      title: "Charity Concert for Music Education",
      venue: "Muziekgebouw aan 't IJ",
      location: "Amsterdam",
      date: "July 15, 2024",
      year: 2024,
      eventType: "charity",
      attendance: "800 attendees",
      description: "A special benefit concert supporting music education programs in Dutch schools, featuring collaborations with young musicians and music students.",
      highlights: [
        "€50,000 raised for music education",
        "Student orchestra collaboration",
        "Special acoustic arrangements",
        "Media coverage across Netherlands"
      ],
      photos: ["/tour/charity-2024-1.jpg", "/tour/charity-2024-2.jpg"],
      isHeadliner: true,
      pressLink: "https://example.com/charity-coverage"
    },
    {
      id: "6",
      title: "Private 60th Birthday Celebration",
      venue: "Villa Eikenhorst",
      location: "Wassenaar",
      date: "July 28, 2024",
      year: 2024,
      eventType: "private",
      attendance: "40 close friends",
      description: "An intimate acoustic performance in a beautiful private villa garden, creating a personal connection with Queen's music in an exclusive setting.",
      highlights: [
        "Emotional acoustic 'The Show Must Go On'",
        "Personalized song introductions",
        "Garden setting with natural acoustics",
        "Extended meet-and-greet with guests"
      ],
      photos: ["/tour/villa-2024-1.jpg"],
      testimonial: {
        quote: "For my husband's 60th birthday surprise, The Dutch Queen's acoustic performance was intimate, emotional, and absolutely perfect. An evening we'll never forget.",
        author: "Elisabeth Thompson",
        role: "Event Host"
      },
      isHeadliner: true
    }
  ];

  const years = [...new Set(tourHistory.map(event => event.year))].sort((a, b) => b - a);
  const filteredEvents = selectedYear 
    ? tourHistory.filter(event => event.year === selectedYear)
    : tourHistory;

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "festival": return Music;
      case "wedding": return Crown;
      case "corporate": return Award;
      case "venue": return Mic2;
      case "private": return Users;
      case "charity": return Star;
      default: return Music;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "festival": return "from-queen-burgundy to-velvet-burgundy";
      case "wedding": return "from-pearl-white to-pearl-cream";
      case "corporate": return "from-stage-platinum to-rock-steel";
      case "venue": return "from-crown-gold to-stage-amber";
      case "private": return "from-royal-bronze to-queen-burgundy";
      case "charity": return "from-stage-amber to-crown-gold";
      default: return "from-royal-bronze to-queen-burgundy";
    }
  };

  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case "festival": return { text: "Festival", emoji: "🎪" };
      case "wedding": return { text: "Wedding", emoji: "💍" };
      case "corporate": return { text: "Corporate", emoji: "🏢" };
      case "venue": return { text: "Concert Hall", emoji: "🎭" };
      case "private": return { text: "Private Event", emoji: "🏠" };
      case "charity": return { text: "Charity", emoji: "❤️" };
      default: return { text: "Performance", emoji: "🎵" };
    }
  };

  const stats = {
    totalShows: tourHistory.length,
    totalAttendance: tourHistory.reduce((sum, event) => {
      const num = parseInt(event.attendance.replace(/[^\d]/g, ''));
      return sum + (isNaN(num) ? 0 : num);
    }, 0),
    venues: new Set(tourHistory.map(event => event.venue)).size,
    years: years.length
  };

  return (
    <section id="tour-history" className="py-24 bg-gradient-to-b from-midnight-velvet to-charcoal-stage relative overflow-hidden">
      {/* Royal Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-16 w-32 h-32 border border-crown-gold rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-royal-bronze transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-stage-platinum rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-queen-burgundy transform rotate-12"></div>
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
            <Clock className="w-8 h-8 text-crown-gold mx-4" />
            <div className="h-px bg-gradient-to-r from-crown-gold via-crown-gold to-transparent flex-1 max-w-32"></div>
          </div>

          <h2 className="text-display-lg font-display-primary text-gradient-royal mb-6">
            Tour History & Portfolio
          </h2>
          <p className="text-content-primary text-text-muted-light max-w-3xl mx-auto">
            From intimate private gatherings to major festival stages, explore The Dutch Queen&apos;s 
            journey across the Netherlands&apos; most prestigious venues and memorable celebrations.
          </p>
        </motion.div>

        {/* Performance Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Total Shows", value: stats.totalShows, icon: Music },
            { label: "Total Attendance", value: `${(stats.totalAttendance / 1000).toFixed(1)}K+`, icon: Users },
            { label: "Unique Venues", value: stats.venues, icon: MapPin },
            { label: "Years Active", value: stats.years, icon: Calendar }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="bg-gradient-to-br from-charcoal-stage to-midnight-velvet rounded-2xl p-6 border border-crown-gold/20 text-center backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-crown-gold mx-auto mb-3" />
              <div className="text-section-title text-pearl-white mb-1">{stat.value}</div>
              <div className="text-content-secondary text-text-muted-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Year Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedYear === null
                  ? "bg-crown-gold text-deep-black border-crown-gold"
                  : "bg-charcoal-stage/50 text-crown-gold border-crown-gold/30 hover:border-crown-gold/60"
              }`}
            >
              All Years
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-crown-gold text-deep-black border-crown-gold"
                    : "bg-charcoal-stage/50 text-crown-gold border-crown-gold/30 hover:border-crown-gold/60"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tour Events Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="space-y-8"
        >
          {filteredEvents.map((event, index) => {
            const EventIcon = getEventTypeIcon(event.eventType);
            const badge = getEventTypeBadge(event.eventType);
            const isExpanded = expandedEvent === event.id;
            
            return (
              <motion.div
                key={event.id}
                variants={slideIn}
                className="group"
              >
                <div className="relative">
                  {/* Timeline line */}
                  {index < filteredEvents.length - 1 && (
                    <div className="absolute left-8 top-20 w-px h-16 bg-gradient-to-b from-crown-gold to-transparent"></div>
                  )}

                  <div className="bg-gradient-to-br from-midnight-velvet to-charcoal-stage rounded-3xl border border-crown-gold/20 backdrop-blur-sm overflow-hidden hover:border-crown-gold/40 transition-all duration-500">
                    {/* Event Header */}
                    <div className="p-8">
                      <div className="flex items-start space-x-6">
                        {/* Timeline dot and icon */}
                        <div className="relative flex-shrink-0">
                          <div className={`w-16 h-16 bg-gradient-to-r ${getEventTypeColor(event.eventType)} rounded-full flex items-center justify-center`}>
                            <EventIcon className="w-8 h-8 text-white" />
                          </div>
                          {event.isHeadliner && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-crown-gold rounded-full flex items-center justify-center">
                              <Crown className="w-3 h-3 text-deep-black" />
                            </div>
                          )}
                        </div>

                        {/* Event Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className={`px-3 py-1 bg-gradient-to-r ${getEventTypeColor(event.eventType)} text-white rounded-full text-sm font-semibold`}>
                              {badge.emoji} {badge.text}
                            </span>
                            {event.isHeadliner && (
                              <span className="px-3 py-1 bg-crown-gold text-deep-black rounded-full text-sm font-semibold">
                                ⭐ Headliner
                              </span>
                            )}
                            {event.recordingAvailable && (
                              <span className="px-3 py-1 bg-royal-bronze/20 border border-royal-bronze/30 text-royal-bronze rounded-full text-sm font-semibold">
                                🎵 Recording Available
                              </span>
                            )}
                          </div>

                          <h3 className="text-section-title text-pearl-white mb-2 group-hover:text-crown-gold transition-colors duration-300">
                            {event.title}
                          </h3>

                          <div className="flex flex-wrap gap-6 text-text-muted-light mb-4">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-stage-amber" />
                              <span className="text-content-secondary">{event.venue}, {event.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-stage-amber" />
                              <span className="text-content-secondary">{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4 text-stage-amber" />
                              <span className="text-content-secondary">{event.attendance}</span>
                            </div>
                          </div>

                          <p className="text-content-primary text-text-muted-light leading-relaxed mb-4">
                            {event.description}
                          </p>

                          {/* Highlights Preview */}
                          <div className="mb-4">
                            <h4 className="text-nav-primary text-crown-gold mb-2">Key Highlights</h4>
                            <ul className="space-y-1">
                              {event.highlights.slice(0, 2).map((highlight, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-content-secondary text-text-muted-light">
                                  <Star className="w-3 h-3 text-stage-amber mt-1 flex-shrink-0" />
                                  <span className="text-sm">{highlight}</span>
                                </li>
                              ))}
                              {event.highlights.length > 2 && !isExpanded && (
                                <li className="text-sm text-stage-amber">
                                  +{event.highlights.length - 2} more highlights...
                                </li>
                              )}
                            </ul>
                          </div>

                          {/* Expand/Collapse Button */}
                          <button
                            onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                            className="inline-flex items-center space-x-2 text-crown-gold hover:text-stage-amber transition-colors duration-300"
                          >
                            <span className="text-sm font-semibold">
                              {isExpanded ? "Show Less" : "Show More Details"}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isExpanded ? 1 : 0, 
                        height: isExpanded ? "auto" : 0 
                      }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden"
                    >
                      {isExpanded && (
                        <div className="px-8 pb-8">
                          <div className="border-t border-crown-gold/20 pt-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              {/* Left Column */}
                              <div className="space-y-6">
                                {/* All Highlights */}
                                {event.highlights.length > 2 && (
                                  <div>
                                    <h4 className="text-nav-primary text-crown-gold mb-3">All Highlights</h4>
                                    <ul className="space-y-2">
                                      {event.highlights.slice(2).map((highlight, idx) => (
                                        <li key={idx + 2} className="flex items-start space-x-2 text-content-secondary text-text-muted-light">
                                          <Star className="w-3 h-3 text-stage-amber mt-1 flex-shrink-0" />
                                          <span className="text-sm">{highlight}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Set List */}
                                {event.setList && (
                                  <div>
                                    <h4 className="text-nav-primary text-crown-gold mb-3">Set List</h4>
                                    <div className="grid grid-cols-1 gap-2">
                                      {event.setList.map((song, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 text-content-secondary text-text-muted-light">
                                          <span className="text-stage-amber font-semibold text-sm w-6">{idx + 1}.</span>
                                          <span className="text-sm">{song}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Right Column */}
                              <div className="space-y-6">
                                {/* Testimonial */}
                                {event.testimonial && (
                                  <div className="bg-royal-bronze/10 border border-royal-bronze/30 rounded-2xl p-6">
                                    <div className="flex items-center space-x-2 mb-4">
                                      <div className="w-8 h-8 bg-crown-gold rounded-full flex items-center justify-center">
                                        <Crown className="w-4 h-4 text-deep-black" />
                                      </div>
                                      <span className="text-nav-primary text-crown-gold">Client Testimonial</span>
                                    </div>
                                    <blockquote className="text-content-secondary text-text-muted-light italic mb-4 leading-relaxed">
                                      &ldquo;{event.testimonial.quote}&rdquo;
                                    </blockquote>
                                    <div className="text-right">
                                      <div className="text-crown-gold font-semibold">{event.testimonial.author}</div>
                                      <div className="text-stage-amber text-sm">{event.testimonial.role}</div>
                                    </div>
                                  </div>
                                )}

                                {/* Additional Links */}
                                {(event.recordingAvailable || event.pressLink) && (
                                  <div className="space-y-3">
                                    {event.recordingAvailable && (
                                      <a
                                        href="#contact"
                                        className="inline-flex items-center space-x-2 text-crown-gold hover:text-stage-amber transition-colors duration-300"
                                      >
                                        <Music className="w-4 h-4" />
                                        <span className="text-sm font-semibold">Listen to Live Recording</span>
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    )}
                                    {event.pressLink && (
                                      <a
                                        href={event.pressLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 text-crown-gold hover:text-stage-amber transition-colors duration-300"
                                      >
                                        <Award className="w-4 h-4" />
                                        <span className="text-sm font-semibold">Read Press Coverage</span>
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
              Ready to Add Your Event to Our History?
            </h3>
            <p className="text-content-primary text-text-muted-light mb-8 max-w-2xl mx-auto">
              Join our prestigious list of satisfied clients and create an unforgettable experience 
              with The Dutch Queen&apos;s authentic Queen tribute performance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-4 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 shadow-lg shadow-royal-bronze/30"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Date</span>
              </a>
              
              <a
                href="#testimonials"
                className="inline-flex items-center space-x-2 bg-charcoal-stage border-2 border-stage-platinum text-stage-platinum px-8 py-4 rounded-full font-semibold hover:bg-stage-platinum hover:text-deep-black transition-all duration-200 transform hover:scale-105"
              >
                <Star className="w-5 h-5" />
                <span>Read More Reviews</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}