"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getUpcomingShows, type Show } from "../../lib/payload-api";

export function ShowsSection() {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Fetch shows data from Payload CMS
  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true);
        setError(null);
        const showsData = await getUpcomingShows();
        setShows(showsData);
      } catch (err) {
        console.error("Error fetching shows:", err);
        setError("Failed to load shows. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleDateString("en", { month: "short" }).toUpperCase(),
      weekday: date
        .toLocaleDateString("en", { weekday: "short" })
        .toUpperCase(),
    };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sold-out":
        return "bg-red-600 text-white";
      case "cancelled":
        return "bg-gray-600 text-white";
      case "completed":
        return "bg-blue-600 text-white";
      default: // upcoming
        return "bg-green-600 text-white";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "sold-out":
        return "SOLD OUT";
      case "cancelled":
        return "CANCELLED";
      case "completed":
        return "COMPLETED";
      default: // upcoming
        return "TICKETS AVAILABLE";
    }
  };

  return (
    <section
      id="shows"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-royal-bronze to-queen-burgundy bg-clip-text text-transparent">
              Shows
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for unforgettable Queen experiences across the Netherlands.
            From intimate acoustic sessions to full stadium productions.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center py-12"
          >
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-royal-bronze"></div>
            <p className="text-gray-400 mt-4">Loading upcoming shows...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center py-12"
          >
            <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-6">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Try Again
              </button>
            </div>
          </motion.div>
        )}

        {/* Shows List */}
        {!loading && !error && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-4 mb-12"
          >
            {shows.length === 0 ? (
              <motion.div
                variants={fadeInUp}
                className="text-center py-12 bg-gray-900/50 border border-gray-700 rounded-2xl"
              >
                <p className="text-gray-400 text-lg">
                  No upcoming shows scheduled.
                </p>
                <p className="text-gray-500 mt-2">
                  Check back soon for new dates!
                </p>
              </motion.div>
            ) : (
              shows.map((show) => {
                const dateInfo = formatDate(show.date);
                const eventTypeDisplay =
                  show.eventType === "full-band" ? "Full Band" : "Acoustic";

                return (
                  <motion.div
                    key={show.id}
                    variants={fadeInUp}
                    className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      {/* Date */}
                      <div className="flex items-center space-x-4">
                        <div className="text-center min-w-[80px]">
                          <div className="text-3xl font-bold text-white">
                            {dateInfo.day}
                          </div>
                          <div className="text-sm text-royal-bronze font-semibold">
                            {dateInfo.month}
                          </div>
                          <div className="text-xs text-gray-400">
                            {dateInfo.weekday}
                          </div>
                        </div>

                        <div className="h-16 w-px bg-gray-600"></div>

                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {show.venue}
                          </h3>
                          <p className="text-gray-400">
                            {show.city}
                            {show.country &&
                              show.country !== "Netherlands" &&
                              `, ${show.country}`}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                show.eventType === "full-band"
                                  ? "bg-queen-burgundy/20 text-queen-burgundy border border-queen-burgundy/30"
                                  : "bg-royal-bronze/20 text-royal-bronze border border-royal-bronze/30"
                              }`}
                            >
                              {eventTypeDisplay}
                            </span>
                            {show.price && (
                              <>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-400 text-sm">
                                  {show.price}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Status and Actions */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div
                          className={`px-4 py-2 rounded-full text-xs font-bold ${getStatusColor(show.status)}`}
                        >
                          {getStatusText(show.status)}
                        </div>

                        {show.status === "upcoming" && show.ticketUrl && (
                          <a
                            href={show.ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-6 py-2 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105"
                          >
                            Get Tickets
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-queen-burgundy/20 to-royal-bronze/20 rounded-3xl p-8 md:p-12 text-center border border-accent-steel/10"
        >
          <h3 className="text-3xl font-bold mb-4 text-royal-bronze">
            Never Miss a Show
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Be the first to know about new tour dates, exclusive acoustic
            sessions, and special events. Join our mailing list for priority
            access to tickets.
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
            <h3 className="text-2xl font-bold mb-4">
              Looking for a Private Show?
            </h3>
            <p className="text-gray-300 mb-6">
              We also perform at private events, corporate functions, and
              special occasions. Both full band and acoustic setups available.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-200"
            >
              Inquire About Private Booking
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
