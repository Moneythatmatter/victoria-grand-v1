"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroSlides = [
   {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
      title: "Stay Here with Joy and Memories",
      description:
         "A luxury boutique hotel in the heart of Puri, where timeless devotion meets modern comfort, steps from the sacred Jagannath Temple and the Bay of Bengal.",
   },
   {
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025",
      title: "Where Every Stay Becomes Sacred",
      description:
         "A refined boutique retreat in Puri, nestled between the divine grace of Jagannath Temple and the serene shores of the Bay of Bengal.",
   },
   {
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070",
      title: "Come for the Temple. Stay for the Soul.",
      description:
         "Puri's most intimate luxury hotel , a sanctuary of calm and elegance, just moments from the Bay of Bengal and the eternal spirit of Jagannath.",
   },
];

const kenBurnsClasses = ["ken-burns-1", "ken-burns-2", "ken-burns-3"];

export function HeroSection() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isLoaded, setIsLoaded] = useState(false);
   const sectionRef = useRef<HTMLElement>(null);

   useEffect(() => {
      setIsLoaded(true);
      const timer = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
      return () => clearInterval(timer);
   }, []);

   // Parallax effect on scroll
   useEffect(() => {
      let ticking = false;
      const handleScroll = () => {
         if (!ticking) {
            requestAnimationFrame(() => {
               const section = sectionRef.current;
               if (section) {
                  const scrolled = window.scrollY;
                  const parallaxEls = section.querySelectorAll(".parallax-bg");
                  parallaxEls.forEach((el) => {
                     (el as HTMLElement).style.transform =
                        `translateY(${scrolled * 0.3}px)`;
                  });
               }
               ticking = false;
            });
            ticking = true;
         }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <section ref={sectionRef} className="relative h-screen overflow-hidden">
         {/* Background Images with Ken Burns */}
         {heroSlides.map((slide, index) => (
            <div
               key={index}
               className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  currentSlide === index ? "opacity-100" : "opacity-0",
               )}
            >
               <div
                  className={cn(
                     "absolute inset-0 bg-cover bg-center parallax-bg",
                     currentSlide === index &&
                        kenBurnsClasses[index % kenBurnsClasses.length],
                  )}
                  style={{
                     backgroundImage: `url(${slide.image})`,
                     // Reset animation on slide change
                     animationPlayState:
                        currentSlide === index ? "running" : "paused",
                  }}
                  key={`bg-${index}-${currentSlide === index ? "active" : "inactive"}`}
               />
               <div className="absolute inset-0 bg-olive-dark/80" />
            </div>
         ))}

         {/* Decorative Frame */}
         <div className="absolute inset-8 md:inset-16 border border-ochre/20 pointer-events-none" />

         {/* Simple Corner Accents */}
         <div className="absolute top-8 left-8 md:top-16 md:left-16 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-ochre/50" />
         <div className="absolute top-8 right-8 md:top-16 md:right-16 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-ochre/50" />
         <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-ochre/50" />
         <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-ochre/50" />

         {/* Content */}
         <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            {/* Star Rating */}
            <div
               className={cn(
                  "flex gap-1 mb-6 transition-all duration-1000 delay-300",
                  isLoaded
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-4",
               )}
            >
               {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-ochre fill-ochre" />
               ))}
            </div>

            {/* Main Title */}
            <h1
               className={cn(
                  "font-serif text-2xl md:text-4xl lg:text-6xl text-white tracking-wide transition-all duration-1000 delay-500",
                  isLoaded
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-8",
               )}
            >
               <span className="block gold-shimmer text-balance">
                  {heroSlides[currentSlide].title}
               </span>
            </h1>

            {/* Decorative Line with Shimmer */}
            <div
               className={cn(
                  "flex items-center gap-4 my-8 transition-all duration-1000 delay-700",
                  isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
               )}
            >
               <div className="w-16 md:w-24 h-px gold-shimmer-bg" />
               <div className="w-2 h-2 rotate-45 bg-ochre" />
               <div className="w-16 md:w-24 h-px gold-shimmer-bg" />
            </div>

            {/* Description */}
            <p
               className={cn(
                  "font-sans text-lg md:text-xl text-white/90 max-w-2xl text-center mx-auto tracking-wide transition-all duration-1000 delay-900",
                  isLoaded
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-4",
               )}
            >
               {heroSlides[currentSlide].description}
            </p>

            {/* CTA Buttons with Shimmer */}
            <div
               className={cn(
                  "flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-1000 delay-1000 justify-center",
                  isLoaded
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-8",
               )}
            >
               <Button
                  size="lg"
                  className="bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-10 py-6 text-sm btn-shimmer"
               >
                  Book Your Stay
               </Button>
               <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-transparent hover:bg-white hover:text-olive-dark font-sans tracking-widest uppercase px-10 py-6 text-sm"
               >
                  Explore Rooms
               </Button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3">
               {heroSlides.map((_, index) => (
                  <button
                     key={index}
                     onClick={() => setCurrentSlide(index)}
                     className={cn(
                        "w-12 h-1 transition-all duration-500",
                        currentSlide === index
                           ? "bg-ochre"
                           : "bg-white/30 hover:bg-white/50",
                     )}
                  />
               ))}
            </div>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-ochre" />
         </div>
      </section>
   );
}
