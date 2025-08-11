"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSiteSettings, getAboutSettings, getGeneralSettings } from "@/hooks/useSiteSettings";
import { getOptimizedImageUrl } from "@/lib/payload-api";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const { siteSettings, loading, error } = useSiteSettings();
  const aboutSettings = getAboutSettings(siteSettings);
  const generalSettings = getGeneralSettings(siteSettings);
  
  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Loading state
  if (loading) {
    return (
      <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400 mb-4"></div>
            <p className="text-gray-400">Loading about section...</p>
          </div>
        </div>
      </section>
    );
  }

  // Get story image URL with fallback
  const storyImageUrl = aboutSettings.storyImage
    ? getOptimizedImageUrl(aboutSettings.storyImage, 'hero')
    : "/performance-stage-lighting.jpg";

  // Render rich text content
  const renderRichText = (richText: any) => {
    if (!richText || !Array.isArray(richText)) {
      return (
        <p>
          Born from a shared passion for Queen&apos;s timeless music, The Dutch Queen has been 
          captivating audiences across the Netherlands and beyond since our formation. We understand 
          that Queen&apos;s music deserves nothing less than perfection.
        </p>
      );
    }

    return richText.map((node: any, index: number) => {
      if (node.children) {
        return (
          <p key={index} className="mb-4">
            {node.children.map((child: any, childIndex: number) => (
              <span key={childIndex}>{child.text || ''}</span>
            ))}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={false}
          animate={mounted ? "visible" : "hidden"}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {aboutSettings.mainHeading.replace('The Dutch Queen', '')}
            <span className="bg-gradient-to-r from-royal-bronze to-queen-burgundy bg-clip-text text-transparent">
              {generalSettings.siteName}
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {aboutSettings.introText}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={false}
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">
              {aboutSettings.storyHeading}
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {renderRichText(aboutSettings.storyContent)}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={storyImageUrl}
                alt={aboutSettings.storyImage?.alt || "The Dutch Queen performing with professional stage lighting and production"}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Band Stats */}
        <motion.div
          initial={false}
          animate={mounted ? "visible" : "hidden"}
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {aboutSettings.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {stat.icon && <span className="block text-3xl mb-2">{stat.icon}</span>}
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={false}
          animate={mounted ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-r from-queen-burgundy/20 to-royal-bronze/20 rounded-3xl p-8 md:p-12 text-center border border-accent-steel/10"
        >
          <h3 className="text-3xl font-bold mb-6 text-royal-bronze">Our Mission</h3>
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