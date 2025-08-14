"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function AboutSectionMinimal() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About The Dutch Queen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional Queen tribute band delivering the full Queen experience with authentic sound, stunning visuals, and the theatrical energy that made Queen legendary.
          </p>
          
          {/* Action buttons moved from hero */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Check Availability
            </button>
            <button className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Watch Videos
            </button>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={mounted ? { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.6, delay: 0.2 }
            } : {}}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">
              Authentic Queen Experience
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              For over a decade, The Dutch Queen has been recreating the magic of Queen's legendary performances. Our band captures not just the sound, but the spirit and energy that made Queen one of the greatest rock bands of all time.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              From intimate acoustic sets to full-scale theatrical productions, we deliver performances that honor Queen's legacy while creating unforgettable experiences for audiences of all ages.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-black/50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">500+</div>
                <div className="text-gray-400">Performances</div>
              </div>
              <div className="text-center p-4 bg-black/50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">10+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={mounted ? { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.6, delay: 0.4 }
            } : {}}
            className="relative"
          >
            <img
              src="/full-band-performance.jpg"
              alt="The Dutch Queen performing live"
              className="w-full h-96 object-cover rounded-lg border border-gray-700"
            />
            
            {/* Simple overlay for emphasis */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            
            {/* Call-out text */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-lg">
                "The show must go on" - and it does, with The Dutch Queen
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, delay: 0.6 }
          } : {}}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Professional Quality</h4>
            <p className="text-gray-300">Stadium-quality sound and lighting for any venue size</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Authentic Costumes</h4>
            <p className="text-gray-300">Period-accurate outfits and theatrical presentation</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">All Events</h4>
            <p className="text-gray-300">Corporate events, festivals, private parties, and more</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}