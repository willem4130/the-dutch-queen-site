"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Performances", href: "#performances" },
    { name: "Shows", href: "#shows" },
    { name: "Contact", href: "#contact" },
    { name: "Project Summary", href: "/management-summary" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-yellow-400/20 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/new-logo-small.png" 
              alt="The Dutch Queen" 
              className="h-12 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Enhanced Desktop Navigation with 2025 Micro-interactions */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-yellow-400 transition-all duration-500 font-medium text-lg px-6 py-3 rounded-xl group overflow-hidden transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 uppercase tracking-wider"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-600/20 backdrop-blur-sm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-xl"></div>
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-yellow-400/50 group-hover:to-red-600/50 rounded-xl transition-all duration-500"></div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 to-red-600 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full"></div>
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/0 to-red-600/0 group-hover:from-yellow-400/20 group-hover:to-red-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl -z-10"></div>
              </a>
            ))}
          </div>

          {/* Enhanced Book Now Button with 2025 Design */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative bg-gradient-to-r from-yellow-400 to-red-600 text-black px-8 py-4 rounded-2xl font-bold text-lg tracking-wide hover:from-yellow-300 hover:to-red-500 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/40 group overflow-hidden border border-white/20 uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="relative z-10 drop-shadow-sm">Book Now</span>
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
              {/* Pulsing glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/50 to-red-600/50 blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 rounded-2xl animate-pulse -z-10"></div>
              {/* Enhanced highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform scale-95 group-hover:scale-100 transition-transform duration-500 origin-center rounded-2xl"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}