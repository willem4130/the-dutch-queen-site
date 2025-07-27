"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About <span className="bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">The Dutch Queen</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From the heart of the Netherlands comes a tribute to the greatest rock band of all time. 
            We don&apos;t just play Queen&apos;s music - we live it, breathe it, and share it with the world.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">Our Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Born from a shared passion for Queen&apos;s timeless music, The Dutch Queen has been 
                captivating audiences across the Netherlands and beyond since our formation. We understand 
                that Queen&apos;s music deserves nothing less than perfection.
              </p>
              <p>
                What sets us apart is our unique dual approach: we offer both the full stadium experience 
                with complete band setup and production, as well as intimate acoustic sessions that 
                showcase the raw emotional power of these legendary songs.
              </p>
              <p>
                Every performance is a celebration of Freddie Mercury&apos;s legacy, Brian May&apos;s genius, 
                Roger Taylor&apos;s rhythm, and John Deacon&apos;s foundation - delivered with the passion and 
                precision that Queen&apos;s music demands.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/performance-stage-lighting.jpg"
                alt="The Dutch Queen performing with professional stage lighting and production"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Band Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: "500+", label: "Performances" },
            { number: "25+", label: "Classic Songs" },
            { number: "10+", label: "Years Experience" },
            { number: "100%", label: "Queen Passion" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 rounded-3xl p-8 md:p-12 text-center border border-white/10"
        >
          <h3 className="text-3xl font-bold mb-6 text-yellow-400">Our Mission</h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            To honor Queen&apos;s incredible legacy by delivering performances that capture not just the sound, 
            but the spirit, energy, and emotion that made them legends. Whether it&apos;s the thunderous power 
            of &quot;We Will Rock You&quot; or the tender beauty of &quot;Love of My Life,&quot; we bring Queen&apos;s magic to life 
            for new generations to experience and cherish.
          </p>
        </motion.div>
      </div>
    </section>
  );
}