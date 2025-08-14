"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, Crown, Sparkles, MapPin, Calendar, Users } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  venue: string;
  location: string;
  date: string;
  rating: number;
  review: string;
  eventType: "wedding" | "corporate" | "festival" | "private" | "venue";
  guestCount: string;
  highlight: string;
  avatar?: string;
}

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah & Mark Johnson",
      role: "Wedding Couple",
      venue: "Kasteel De Haar",
      location: "Utrecht",
      date: "October 2024",
      rating: 5,
      review: "The Dutch Queen absolutely made our wedding unforgettable! Their acoustic session during the ceremony with 'Love of My Life' had everyone in tears, and the full band performance at the reception had our guests singing along to every Queen classic. The professionalism, authenticity, and pure passion they bring is unmatched.",
      eventType: "wedding",
      guestCount: "150 guests",
      highlight: "Perfect mix of acoustic intimacy and rock energy",
      avatar: "/testimonials/sarah-mark.jpg"
    },
    {
      id: "2",
      name: "Robert van der Berg",
      role: "Event Director",
      venue: "Royal Concertgebouw",
      location: "Amsterdam",
      date: "September 2024",
      rating: 5,
      review: "As someone who has worked with tribute bands for over 20 years, The Dutch Queen stands apart. Their attention to detail, from Freddie's stage presence to Brian's guitar solos, is remarkable. The acoustic arrangement of 'Bohemian Rhapsody' received a 5-minute standing ovation. Simply world-class.",
      eventType: "venue",
      guestCount: "2,000 capacity",
      highlight: "World-class musicianship and authentic Queen experience",
      avatar: "/testimonials/robert.jpg"
    },
    {
      id: "3",
      name: "Jennifer Martinez",
      role: "Corporate Events Manager",
      venue: "Amsterdam RAI",
      location: "Amsterdam",
      date: "November 2024",
      rating: 5,
      review: "Our annual company gala needed something special, and The Dutch Queen delivered beyond expectations. Their full production with 'We Will Rock You' had 500 executives on their feet! The band's ability to read the room and adjust their energy accordingly is impressive. Definitely booking them again.",
      eventType: "corporate",
      guestCount: "500 executives",
      highlight: "Professional adaptability and crowd engagement",
      avatar: "/testimonials/jennifer.jpg"
    },
    {
      id: "4",
      name: "Marco Visser",
      role: "Music Festival Organizer",
      venue: "Pinkpop Festival",
      location: "Landgraaf",
      date: "August 2024",
      rating: 5,
      review: "The Dutch Queen closed our second stage and absolutely stole the show. 15,000 people singing 'We Are The Champions' together was pure magic. Their stage presence, musicianship, and connection with the audience rivals any headliner we've had. A true tribute to Queen's legacy.",
      eventType: "festival",
      guestCount: "15,000 festival-goers",
      highlight: "Headliner-quality performance and audience connection",
      avatar: "/testimonials/marco.jpg"
    },
    {
      id: "5",
      name: "Elisabeth Thompson",
      role: "Private Party Host",
      venue: "Villa Eikenhorst",
      location: "Wassenaar",
      date: "July 2024",
      rating: 5,
      review: "For my husband's 60th birthday, I wanted to surprise him with his favorite Queen songs. The Dutch Queen's acoustic performance in our garden was intimate, emotional, and absolutely perfect. Their version of 'The Show Must Go On' brought tears to his eyes. An evening we'll never forget.",
      eventType: "private",
      guestCount: "40 close friends",
      highlight: "Intimate acoustic magic and emotional connection",
      avatar: "/testimonials/elisabeth.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case "wedding": return "💍";
      case "corporate": return "🏢";
      case "festival": return "🎪";
      case "private": return "🏠";
      case "venue": return "🎭";
      default: return "🎵";
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "wedding": return "text-pearl-white border-pearl-white/30 bg-pearl-white/10";
      case "corporate": return "text-stage-platinum border-stage-platinum/30 bg-stage-platinum/10";
      case "festival": return "text-queen-burgundy border-queen-burgundy/30 bg-queen-burgundy/10";
      case "private": return "text-crown-gold border-crown-gold/30 bg-crown-gold/10";
      case "venue": return "text-royal-bronze border-royal-bronze/30 bg-royal-bronze/10";
      default: return "text-stage-amber border-stage-amber/30 bg-stage-amber/10";
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-charcoal-stage to-deep-black relative overflow-hidden">
      {/* Royal Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-crown-gold rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 border-2 border-royal-bronze transform rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-stage-platinum rounded-full"></div>
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
            <Quote className="w-8 h-8 text-crown-gold mx-4" />
            <div className="h-px bg-gradient-to-r from-crown-gold via-crown-gold to-transparent flex-1 max-w-32"></div>
          </div>

          <h2 className="text-display-lg font-display-primary text-gradient-royal mb-6">
            Client Testimonials
          </h2>
          <p className="text-content-primary text-text-muted-light max-w-3xl mx-auto">
            From intimate weddings to festival stages, discover why venues and clients across the Netherlands 
            choose The Dutch Queen for their most important celebrations.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: index === activeTestimonial ? 1 : 0,
                  scale: index === activeTestimonial ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
                className={`${index === activeTestimonial ? "relative z-10" : "absolute inset-0 z-0"}`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="bg-gradient-to-br from-midnight-velvet to-charcoal-stage rounded-3xl p-8 md:p-12 border border-crown-gold/20 backdrop-blur-sm shadow-2xl">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-gradient-to-r from-crown-gold to-royal-bronze rounded-full p-4">
                      <Quote className="w-8 h-8 text-deep-black" />
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-crown-gold fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-content-primary text-pearl-white text-xl leading-relaxed mb-8 text-center italic max-w-4xl mx-auto">
                    &ldquo;{testimonial.review}&rdquo;
                  </blockquote>

                  {/* Highlight */}
                  <div className="text-center mb-8">
                    <span className="bg-gradient-to-r from-royal-bronze/20 to-queen-burgundy/20 border border-crown-gold/30 rounded-full px-6 py-2 text-crown-gold text-sm font-semibold uppercase tracking-wider">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Avatar/Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-royal-bronze to-queen-burgundy rounded-full flex items-center justify-center text-2xl">
                        {getEventIcon(testimonial.eventType)}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="text-center md:text-left">
                      <h4 className="text-section-subtitle text-pearl-white mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-content-secondary text-stage-amber mb-2">
                        {testimonial.role}
                      </p>
                      
                      <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-text-muted-light">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{testimonial.venue}, {testimonial.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{testimonial.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{testimonial.guestCount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-crown-gold scale-125 shadow-lg shadow-crown-gold/50"
                    : "bg-stage-platinum/50 hover:bg-stage-platinum"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Event Type Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-section-title text-center text-crown-gold mb-8"
          >
            Perfect for Every Occasion
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { type: "wedding", label: "Weddings", icon: "💍", description: "Romantic ceremonies & receptions" },
              { type: "corporate", label: "Corporate", icon: "🏢", description: "Professional events & galas" },
              { type: "festival", label: "Festivals", icon: "🎪", description: "Music festivals & outdoor events" },
              { type: "private", label: "Private", icon: "🏠", description: "Birthday parties & celebrations" },
              { type: "venue", label: "Venues", icon: "🎭", description: "Concert halls & theaters" }
            ].map((event, index) => (
              <motion.div
                key={event.type}
                variants={fadeInUp}
                className={`p-4 rounded-2xl text-center border transition-all duration-300 hover:scale-105 ${getEventColor(event.type)}`}
              >
                <div className="text-3xl mb-2">{event.icon}</div>
                <h4 className="text-nav-primary font-semibold mb-1">{event.label}</h4>
                <p className="text-xs text-text-muted-light">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-queen-burgundy/20 to-royal-bronze/20 rounded-3xl p-8 md:p-12 border border-crown-gold/20 backdrop-blur-sm">
            <Crown className="w-12 h-12 text-crown-gold mx-auto mb-6" />
            <h3 className="text-section-title text-crown-gold mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-content-primary text-text-muted-light mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have experienced the magic of The Dutch Queen. 
              Let us make your event unforgettable with the timeless music of Queen.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-4 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 shadow-lg shadow-royal-bronze/30"
              >
                <Sparkles className="w-5 h-5" />
                <span>Get Your Quote</span>
              </a>
              
              <a
                href="#gallery"
                className="inline-flex items-center space-x-2 bg-charcoal-stage border-2 border-stage-platinum text-stage-platinum px-8 py-4 rounded-full font-semibold hover:bg-stage-platinum hover:text-deep-black transition-all duration-200 transform hover:scale-105"
              >
                <Quote className="w-5 h-5" />
                <span>See More Reviews</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}