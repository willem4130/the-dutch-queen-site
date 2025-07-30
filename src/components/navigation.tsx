"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import Lenis from "lenis";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Performances", href: "#performances", id: "performances" },
    { name: "Shows", href: "#shows", id: "shows" },
    { name: "Contact", href: "#contact", id: "contact" },
    { name: "Project Summary", href: "/management-summary", id: "summary" },
  ];

  // Smooth scroll handler
  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href) as HTMLElement;
      if (element && lenisRef.current) {
        lenisRef.current.scrollTo(element, { offset: -100 });
      }
    } else {
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  };

  // Keyboard navigation handler
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSmoothScroll(href);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-royal-bronze/20 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Cinzel, serif' }}>
              <span className="bg-gradient-to-r from-royal-bronze via-royal-bronze-light to-queen-burgundy bg-clip-text text-transparent">
                THE DUTCH QUEEN
              </span>
            </h1>
          </div>

          {/* Enhanced Desktop Navigation with Active State & Accessibility */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSmoothScroll(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className={cn(
                  "relative font-medium text-lg px-6 py-3 rounded-xl group overflow-hidden transform hover:scale-105 hover:shadow-lg hover:shadow-royal-bronze/20 uppercase tracking-wider transition-all duration-500",
                  activeSection === item.id
                    ? "text-royal-bronze bg-royal-bronze/10"
                    : "text-white hover:text-royal-bronze"
                )}
                style={{ fontFamily: 'Oswald, sans-serif' }}
                aria-label={`Navigate to ${item.name} section`}
                tabIndex={0}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-royal-bronze to-queen-burgundy rounded-full"></div>
                )}
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-royal-bronze/20 to-queen-burgundy/20 backdrop-blur-sm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-xl"></div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-royal-bronze to-queen-burgundy group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full"></div>
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-royal-bronze/0 to-queen-burgundy/0 group-hover:from-royal-bronze/20 group-hover:to-queen-burgundy/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl -z-10"></div>
              </button>
            ))}
          </div>

          {/* Enhanced Book Now Button with 2025 Design */}
          <div className="hidden md:block">
            <button
              onClick={() => handleSmoothScroll("#contact")}
              onKeyDown={(e) => handleKeyDown(e, "#contact")}
              className="relative bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-royal-bronze/40 group overflow-hidden border border-accent-steel/20 uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
              aria-label="Book now - Navigate to contact section"
            >
              <span className="relative z-10 drop-shadow-sm">Book Now</span>
              {/* Animated shimmer effect - bronze tone */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-royal-bronze/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
              {/* Pulsing glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-royal-bronze/50 to-queen-burgundy/50 blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 rounded-2xl animate-pulse -z-10"></div>
              {/* Enhanced highlight overlay - subtle bronze */}
              <div className="absolute inset-0 bg-gradient-to-r from-royal-bronze/10 to-royal-bronze/5 transform scale-95 group-hover:scale-100 transition-transform duration-500 origin-center rounded-2xl"></div>
            </button>
          </div>

          {/* Mobile Menu Button with Hamburger Animation */}
          <div className="md:hidden relative z-50">
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
              size={28}
              color="#d4af37"
              easing="ease-in-out"
              duration={0.5}
              rounded
              aria-label="Toggle mobile menu"
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-royal-bronze/20"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleSmoothScroll(item.href)}
                    onKeyDown={(e) => handleKeyDown(e, item.href)}
                    className={cn(
                      "w-full text-left py-3 px-4 rounded-lg transition-all duration-300 uppercase tracking-wider font-medium",
                      activeSection === item.id
                        ? "text-royal-bronze bg-royal-bronze/10 border-l-4 border-royal-bronze"
                        : "text-white hover:text-royal-bronze hover:bg-royal-bronze/5"
                    )}
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Book Now Button */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={() => handleSmoothScroll("#contact")}
                  className="w-full mt-4 bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white py-4 px-6 rounded-xl font-bold text-lg tracking-wide uppercase transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  aria-label="Book now - Navigate to contact section"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}