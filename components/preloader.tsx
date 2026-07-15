"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export function Preloader() {
   const [isVisible, setIsVisible] = useState(true);
   const [isFading, setIsFading] = useState(false);

   useEffect(() => {
      // Start fade out after 2 seconds
      const fadeTimer = setTimeout(() => {
         setIsFading(true);
      }, 2000);

      // Remove from DOM after fade animation completes
      const removeTimer = setTimeout(() => {
         setIsVisible(false);
      }, 2600);

      return () => {
         clearTimeout(fadeTimer);
         clearTimeout(removeTimer);
      };
   }, []);

   if (!isVisible) return null;

   return (
      <div
         className={cn(
            "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-olive-dark transition-opacity duration-600 ease-out",
            isFading ? "opacity-0" : "opacity-100",
         )}
      >
         {/* Decorative corner frames */}
         <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-ochre/40" />
         <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-ochre/40" />
         <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-ochre/40" />
         <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-ochre/40" />

         {/* Main content */}
         <div className="flex flex-col items-center gap-8 w-[90%]">
            {/* Logo/Crown Icon */}
            <div className="relative">
               {/* Outer ring with pulse animation */}
               <div
                  className="absolute inset-0 w-24 h-24 rounded-full border border-ochre/20 animate-ping"
                  style={{ animationDuration: "2s" }}
               />

               {/* Inner decorative ring */}
               <div className="relative w-24 h-24 rounded-full border-2 border-ochre/60 flex items-center justify-center">
                  {/* Rotating ornamental ring */}
                  <div
                     className="absolute inset-1 rounded-full border border-dashed border-ochre/30 animate-spin"
                     style={{ animationDuration: "8s" }}
                  />

                  {/* Crown SVG */}
                  <Logo compact={true} size="sm" />
               </div>
            </div>

            {/* Hotel name */}
            <div className="text-center">
               <h1 className="font-serif text-3xl md:text-4xl tracking-[0.3em] text-cream uppercase">
                  Victoria Grand
               </h1>
               <div className="flex items-center justify-center gap-3 mt-3">
                  <div className="w-8 h-px bg-ochre/60" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-ochre" />
                  <div className="w-8 h-px bg-ochre/60" />
               </div>
            </div>

            {/* Tagline */}
            <p className="font-sans text-sm md:text-base tracking-[0.2em] text-cream/70 uppercase">
               Reserved for the Exceptional
            </p>

            {/* Elegant loading indicator */}
            <div className="flex items-center gap-2 mt-4">
               <span
                  className="w-2 h-2 rounded-full bg-ochre animate-bounce"
                  style={{ animationDelay: "0ms", animationDuration: "1s" }}
               />
               <span
                  className="w-2 h-2 rounded-full bg-ochre animate-bounce"
                  style={{ animationDelay: "150ms", animationDuration: "1s" }}
               />
               <span
                  className="w-2 h-2 rounded-full bg-ochre animate-bounce"
                  style={{ animationDelay: "300ms", animationDuration: "1s" }}
               />
            </div>
         </div>
      </div>
   );
}
