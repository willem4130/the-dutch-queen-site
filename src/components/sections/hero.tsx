"use client";

import { Compare } from "@/components/ui/compare";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-yellow-900/20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">
              The Dutch Queen
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Experience the magic of Queen like never before - from thunderous stadium anthems 
            to intimate acoustic moments
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#performances"
              className="bg-gradient-to-r from-yellow-400 to-red-600 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-red-500 transition-all duration-200 transform hover:scale-105"
            >
              Explore Performances
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-200"
            >
              Book Your Event
            </a>
          </motion.div>
        </div>

        {/* Compare Component - The Star Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Two Experiences, One <span className="text-yellow-400">Queen</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Hover to discover the difference between our Full Band and Acoustic performances
            </p>
          </div>
          
          <div className="p-4 border rounded-3xl bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
            <Compare
              firstImage="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              secondImage="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              firstImageClassName="object-cover object-center"
              secondImageClassname="object-cover object-center"
              className="w-full max-w-4xl aspect-[16/10] mx-auto"
              slideMode="hover"
            />
          </div>

          {/* Performance Type Descriptions */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Full Band Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete Queen experience with all instruments, theatrical staging, and stadium-level energy. 
                Perfect for festivals, large venues, and corporate events seeking maximum impact.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">Stadium Energy</span>
                <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">Full Production</span>
                <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">Classic Anthems</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center md:text-right"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Acoustic Sessions</h3>
              <p className="text-gray-300 leading-relaxed">
                Intimate, stripped-down versions of Queen's greatest hits. Close audience interaction 
                and emotional connection. Ideal for private events, acoustic venues, and special occasions.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-end">
                <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Intimate</span>
                <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Unplugged</span>
                <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Personal</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}