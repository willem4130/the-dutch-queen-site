"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

export function NavigationMinimal() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simplified to 5 core navigation items based on expert feedback
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Shows", href: "#performances" },
    { name: "Media", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-sm border-b border-gray-800"
          : "bg-black/60 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Simplified Logo */}
          <div className="text-xl font-bold text-yellow-600">
            The Dutch Queen
          </div>

          {/* Desktop Navigation - Clean and Simple */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSmoothScroll(item.href)}
                className="text-white hover:text-yellow-600 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Prominent Book Now Button */}
          <button
            onClick={() => handleSmoothScroll("#contact")}
            className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-6 rounded transition-colors duration-200"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
              size={24}
              color="#eab308"
              duration={0.3}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-black/95 border-t border-gray-800"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleSmoothScroll(item.href)}
                    className="block w-full text-left text-white hover:text-yellow-600 py-2 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => handleSmoothScroll("#contact")}
                  className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 px-4 rounded transition-colors"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}