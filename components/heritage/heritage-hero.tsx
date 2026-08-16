"use client";

import { useState, useEffect } from "react";
import { DecorativeFrame } from "@/components/decorative-frame";
import { JAGANNATH_TEMPLE_IMAGE, KONARK_SUN_TEMPLE_IMAGE, CHILIKA_LAKE_IMAGE, PURI_BEACH_IMAGE, RATH_YATRA_IMAGE, CHANDAN_YATRA_IMAGE, APPLIQUE_ART_PIPILI_IMAGE, PATTACHITRA_IMAGE } from "@/lib/heritage-images";
import { cn } from "@/lib/utils";

const heritageHeroSlides = [
   {
      image:
         JAGANNATH_TEMPLE_IMAGE,
      alt: "Full view of Jagannath Temple, Puri",
   },
   {
      image:
         KONARK_SUN_TEMPLE_IMAGE,
      alt: "Full view of Konark Sun Temple",
   },
   {
      image:
         PURI_BEACH_IMAGE,
      alt: "Coastal view of Puri Beach from the lighthouse, Odisha",
   },
   {
      image:
         APPLIQUE_ART_PIPILI_IMAGE,
      alt: "Pipili chandua applique work, Odisha",
   },
   {
      image:
         CHILIKA_LAKE_IMAGE,
      alt: "Morning view of Chilika Lake, Odisha",
   },
   {
      image:
         RATH_YATRA_IMAGE,
      alt: "Three chariots at Puri Rath Yatra",
   },
   {
      image:
         PATTACHITRA_IMAGE,
      alt: "Pattachitra scroll painting from Raghurajpur, Odisha",
   },
   {
      image:
         CHANDAN_YATRA_IMAGE,
      alt: "Chapa boat ceremony during Chandan Yatra at Narendra Tank, Puri",
   },
];

const zoomOutClasses = ["hero-zoom-out-1", "hero-zoom-out-2", "hero-zoom-out-3"];

export function HeritageHero() {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % heritageHeroSlides.length);
      }, 6000);

      return () => clearInterval(timer);
   }, []);

   return (
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
         {/* Background Slides with Zoom Out */}
         {heritageHeroSlides.map((slide, index) => (
            <div
               key={slide.image}
               className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  currentSlide === index ? "opacity-100" : "opacity-0",
               )}
               aria-hidden={currentSlide !== index}
            >
               <div
                  className={cn(
                     "absolute inset-0 bg-cover bg-center bg-no-repeat",
                     currentSlide === index &&
                        zoomOutClasses[index % zoomOutClasses.length],
                  )}
                  style={{
                     backgroundImage: `url('${slide.image}')`,
                     animationPlayState:
                        currentSlide === index ? "running" : "paused",
                  }}
                  key={`heritage-bg-${index}-${currentSlide === index ? "active" : "inactive"}`}
                  role="img"
                  aria-label={slide.alt}
               />
               <div className="absolute inset-0 bg-olive-dark/60" />
            </div>
         ))}

         <DecorativeFrame clearHeader />

         {/* Content */}
         <div className="relative z-10 text-center px-6 py-32">
            {/* Breadcrumb */}
            <nav className="mb-8">
               <ol className="flex items-center justify-center gap-2 text-cream/60 font-sans text-sm tracking-wide">
                  <li>
                     <a href="/" className="hover:text-ochre transition-colors">
                        Home
                     </a>
                  </li>
                  <li className="text-ochre">/</li>
                  <li className="text-cream">Heritage</li>
               </ol>
            </nav>

            {/* Temple Icon */}
            <div className="flex justify-center mb-6">
               <svg viewBox="0 0 64 64" className="w-14 h-14 text-ochre">
                  <g fill="currentColor">
                     <rect x="8" y="52" width="48" height="6" opacity="0.9" />
                     <rect x="12" y="46" width="40" height="6" opacity="0.8" />
                     <rect x="16" y="28" width="32" height="18" opacity="0.7" />
                     <rect x="20" y="32" width="4" height="14" />
                     <rect x="30" y="32" width="4" height="14" />
                     <rect x="40" y="32" width="4" height="14" />
                     <path d="M32 8 L48 28 L16 28 Z" />
                     <circle cx="32" cy="6" r="3" />
                  </g>
               </svg>
            </div>

            <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-light block mb-4">
               Discover Puri
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6 text-balance">
               Sacred Journeys &
               <span className="block text-ochre mt-2">Cultural Treasures</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
               Puri is more than a destination—it{"'"}s a spiritual experience
               spanning millennia. Explore ancient temples, traditional crafts, and
               natural wonders that have drawn pilgrims and travelers for centuries.
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4 mt-10">
               <div className="w-16 h-px bg-ochre/40" />
               <div className="w-2 h-2 rotate-45 border border-ochre" />
               <div className="w-16 h-px bg-ochre/40" />
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-10">
               {heritageHeroSlides.map((slide, index) => (
                  <button
                     key={slide.image}
                     type="button"
                     onClick={() => setCurrentSlide(index)}
                     aria-label={`Show slide ${index + 1}: ${slide.alt}`}
                     className={cn(
                        "h-1 transition-all duration-500",
                        currentSlide === index
                           ? "w-10 bg-ochre"
                           : "w-6 bg-white/30 hover:bg-white/50",
                     )}
                  />
               ))}
            </div>

            {/* Scroll Indicator */}
            <div className="mt-8 animate-bounce">
               <svg
                  className="w-6 h-6 mx-auto text-ochre/60"
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
         </div>
      </section>
   );
}
