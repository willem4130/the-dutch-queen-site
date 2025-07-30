import { useState, useEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      { id: "home", element: document.querySelector("main > section:first-child") || document.querySelector("#home") },
      { id: "about", element: document.querySelector("#about") },
      { id: "performances", element: document.querySelector("#performances") },
      { id: "shows", element: document.querySelector("#shows") },
      { id: "contact", element: document.querySelector("#contact") },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px", // Trigger when section is 20% visible from top
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find which section this element belongs to
          const section = sections.find(s => s.element === entry.target);
          if (section) {
            setActiveSection(section.id);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
}