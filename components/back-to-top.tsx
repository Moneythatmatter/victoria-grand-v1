"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsVisible(window.scrollY > 600);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <button
         onClick={scrollToTop}
         aria-label="Back to top"
         style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 50,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            pointerEvents: isVisible ? "auto" : "none",
         }}
         className="group"
      >
         <div className="relative w-12 h-12 border-2 border-ochre/60 hover:border-ochre bg-olive-dark/80 backdrop-blur-sm hover:bg-ochre flex items-center justify-center transition-all duration-300">
            {/* Decorative corners */}
            <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-ochre" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r border-ochre" />
            <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b border-l border-ochre" />
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b border-r border-ochre" />
            <ChevronUp className="w-5 h-5 text-ochre group-hover:text-white transition-colors duration-300" />
         </div>
      </button>
   );
}
