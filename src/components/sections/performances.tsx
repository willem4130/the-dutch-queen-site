"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function PerformancesSection() {
  const [activeTab, setActiveTab] = useState<"full-band" | "acoustic">("full-band");

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fullBandSongs = [
    "Bohemian Rhapsody", "We Will Rock You", "We Are The Champions", 
    "Don't Stop Me Now", "Another One Bites The Dust", "Radio Ga Ga",
    "I Want To Break Free", "Killer Queen", "Fat Bottomed Girls", "Crazy Little Thing Called Love"
  ];

  const acousticSongs = [
    "Love Of My Life", "The Show Must Go On", "Somebody To Love", 
    "Bohemian Rhapsody (Unplugged)", "Who Wants To Live Forever", "Too Much Love Will Kill You",
    "I Want It All (Acoustic)", "These Are The Days Of Our Lives", "Is This The Real Life", "The Miracle"
  ];

  return (
    <section id="performances" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">Performances</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect Queen experience for your event - from electrifying stadium energy to intimate acoustic magic
          </p>
        </motion.div>

        {/* Performance Type Selector */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-900 rounded-full p-2 border border-gray-700">
            <button
              onClick={() => setActiveTab("full-band")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "full-band"
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Full Band Experience
            </button>
            <button
              onClick={() => setActiveTab("acoustic")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "acoustic"
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Acoustic Sessions
            </button>
          </div>
        </motion.div>

        {/* Performance Content */}
        <div className="relative">
          {activeTab === "full-band" && (
            <motion.div
              key="full-band"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h3 className="text-4xl font-bold mb-6 text-red-400">Full Band Experience</h3>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The complete Queen experience with full instrumentation, theatrical staging, and 
                    stadium-level energy. Perfect for festivals, large venues, and events that demand maximum impact.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-red-900/20 p-4 rounded-lg border border-red-800/30">
                      <h4 className="font-semibold text-red-400 mb-2">Ideal For:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Festivals & Large Venues</li>
                        <li>• Corporate Events</li>
                        <li>• Concert Halls</li>
                        <li>• Stadium Shows</li>
                      </ul>
                    </div>
                    <div className="bg-red-900/20 p-4 rounded-lg border border-red-800/30">
                      <h4 className="font-semibold text-red-400 mb-2">Features:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Full Band Setup</li>
                        <li>• Theatrical Production</li>
                        <li>• Complete Light Show</li>
                        <li>• Costume Changes</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-400 mb-3">Featured Songs:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {fullBandSongs.map((song, index) => (
                        <div key={index} className="bg-black/50 px-3 py-2 rounded text-sm text-gray-300 border border-red-800/20">
                          {song}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/full-band-performance.jpg"
                      alt="Full band performance with dynamic energy"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-2xl font-bold text-white mb-2">Stadium Energy</h4>
                      <p className="text-gray-200">Complete Queen experience with full production</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/performance-stage-lighting.jpg"
                        alt="Performance with professional stage lighting"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/performance-vocals.jpg"
                        alt="Powerful vocal performance"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "acoustic" && (
            <motion.div
              key="acoustic"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="lg:order-2">
                <h3 className="text-4xl font-bold mb-6 text-yellow-400">Acoustic Sessions</h3>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Intimate, stripped-down versions of Queen&apos;s greatest hits with close audience interaction 
                    and emotional connection. Perfect for private events and acoustic venues.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-800/30">
                      <h4 className="font-semibold text-yellow-400 mb-2">Ideal For:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Private Events</li>
                        <li>• Acoustic Venues</li>
                        <li>• Intimate Gatherings</li>
                        <li>• Special Occasions</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-800/30">
                      <h4 className="font-semibold text-yellow-400 mb-2">Features:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Acoustic Instruments</li>
                        <li>• Close Interaction</li>
                        <li>• Storytelling</li>
                        <li>• Emotional Connection</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3">Featured Songs:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {acousticSongs.map((song, index) => (
                        <div key={index} className="bg-black/50 px-3 py-2 rounded text-sm text-gray-300 border border-yellow-800/20">
                          {song}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:order-1">
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/acoustic-performance.jpg"
                      alt="Intimate acoustic performance"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-2xl font-bold text-white mb-2">Intimate Connection</h4>
                      <p className="text-gray-200">Stripped-down Queen classics with emotional depth</p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/performance-guitar.jpg"
                      alt="Acoustic guitar performance with dramatic lighting"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Ready to Rock?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you want the full stadium experience or an intimate acoustic session, 
              we&apos;ll make your event unforgettable with the timeless music of Queen.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-red-600 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-red-500 transition-all duration-200 transform hover:scale-105"
            >
              Book Your Performance
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