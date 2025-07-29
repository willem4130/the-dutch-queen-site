"use client";

import { motion } from "framer-motion";

export function ShowsSection() {
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

  // Mock upcoming shows data
  const upcomingShows = [
    {
      date: "2025-08-15",
      venue: "Ziggo Dome",
      city: "Amsterdam",
      type: "Full Band",
      status: "tickets-available",
      price: "€45 - €85"
    },
    {
      date: "2025-08-22",
      venue: "De Doelen",
      city: "Rotterdam",
      type: "Acoustic",
      status: "nearly-sold-out",
      price: "€35 - €55"
    },
    {
      date: "2025-09-03",
      venue: "TivoliVredenburg",
      city: "Utrecht",
      type: "Full Band",
      status: "tickets-available",
      price: "€40 - €75"
    },
    {
      date: "2025-09-12",
      venue: "Concertgebouw",
      city: "Amsterdam",
      type: "Acoustic",
      status: "sold-out",
      price: "€50 - €90"
    },
    {
      date: "2025-09-25",
      venue: "Heineken Music Hall",
      city: "Amsterdam",
      type: "Full Band",
      status: "tickets-available",
      price: "€42 - €80"
    },
    {
      date: "2025-10-08",
      venue: "013",
      city: "Tilburg",
      type: "Full Band",
      status: "nearly-sold-out",
      price: "€38 - €68"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en', { month: 'short' }).toUpperCase(),
      weekday: date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase()
    };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sold-out": return "bg-red-600 text-white";
      case "nearly-sold-out": return "bg-yellow-600 text-black";
      default: return "bg-green-600 text-white";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "sold-out": return "SOLD OUT";
      case "nearly-sold-out": return "ALMOST SOLD OUT";
      default: return "TICKETS AVAILABLE";
    }
  };

  return (
    <section id="shows" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Upcoming <span className="bg-gradient-to-r from-royal-bronze to-queen-burgundy bg-clip-text text-transparent">Shows</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for unforgettable Queen experiences across the Netherlands. From intimate acoustic sessions to full stadium productions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="space-y-4 mb-12"
        >
          {upcomingShows.map((show, index) => {
            const dateInfo = formatDate(show.date);
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Date */}
                  <div className="flex items-center space-x-4">
                    <div className="text-center min-w-[80px]">
                      <div className="text-3xl font-bold text-white">{dateInfo.day}</div>
                      <div className="text-sm text-royal-bronze font-semibold">{dateInfo.month}</div>
                      <div className="text-xs text-gray-400">{dateInfo.weekday}</div>
                    </div>
                    
                    <div className="h-16 w-px bg-gray-600"></div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{show.venue}</h3>
                      <p className="text-gray-400">{show.city}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          show.type === "Full Band" 
                            ? "bg-queen-burgundy/20 text-queen-burgundy border border-queen-burgundy/30" 
                            : "bg-royal-bronze/20 text-royal-bronze border border-royal-bronze/30"
                        }`}>
                          {show.type}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 text-sm">{show.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className={`px-4 py-2 rounded-full text-xs font-bold ${getStatusColor(show.status)}`}>
                      {getStatusText(show.status)}
                    </div>
                    
                    {show.status !== "sold-out" && (
                      <button className="bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-6 py-2 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105">
                        Get Tickets
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-queen-burgundy/20 to-royal-bronze/20 rounded-3xl p-8 md:p-12 text-center border border-accent-steel/10"
        >
          <h3 className="text-3xl font-bold mb-4 text-royal-bronze">Never Miss a Show</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Be the first to know about new tour dates, exclusive acoustic sessions, and special events. 
            Join our mailing list for priority access to tickets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-royal-bronze transition-colors"
            />
            <button className="bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-3 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Private Booking CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <div className="bg-black/50 p-8 rounded-3xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Looking for a Private Show?</h3>
            <p className="text-gray-300 mb-6">
              We also perform at private events, corporate functions, and special occasions. 
              Both full band and acoustic setups available.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-200"
            >
              Inquire About Private Booking
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}