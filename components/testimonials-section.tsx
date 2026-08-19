"use client";

import { useState, useEffect, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
   RoyalCornerOrnament,
   RoyalDivider,
} from "@/components/royal-corner-ornament";

const testimonials = [
   {
      name: "Rajat & Priya Sharma",
      title: "Wedding Anniversary Celebration",
      quote: "Victoria Grand transformed our golden anniversary into an unforgettable royal experience. The Grand Premium Room overlooking the Bay of Bengal, the impeccable service, and the personalized Mahaprasad dinner made us feel like true royalty.",
      rating: 5,
      location: "New Delhi",
   },
   {
      name: "Sir James Whitmore",
      title: "Heritage Tour Guest",
      quote: "Having stayed at The Savoy and Claridge's, I can say Victoria Grand holds its own among the finest. The blend of British colonial architecture with Indian grandeur is extraordinary — truly a gem in Puri.",
      rating: 5,
      location: "London, UK",
   },
   {
      name: "Ananya Devi Patnaik",
      title: "Business Conference Host",
      quote: "We hosted our annual board meeting and the evening gala in the Grand Celebration Hall. The seamless coordination, world-class amenities, and attention to detail exceeded every expectation.",
      rating: 5,
      location: "Bhubaneswar",
   },
   {
      name: "The Mehta Family",
      title: "Spiritual Retreat",
      quote: "Our family's Jagannath Temple pilgrimage was elevated beyond imagination. The concierge arranged private darshan, the rooftop dinner at Sunshine Restaurant was divine, and the children adored the cultural programs.",
      rating: 5,
      location: "Mumbai",
   },
];

const accolades = [
   { label: "TripAdvisor", value: "Traveller's Choice 2025" },
   { label: "Condé Nast", value: "Best Heritage Hotel" },
   { label: "Rating", value: "9.4 / 10 Rating" },
];

export function TestimonialsSection() {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false);
   const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

   const goTo = (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
   };

   const next = () => goTo((activeIndex + 1) % testimonials.length);
   const prev = () =>
      goTo(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);

   useEffect(() => {
      autoPlayRef.current = setInterval(next, 7000);
      return () => {
         if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      };
   }, [activeIndex]);

   const current = testimonials[activeIndex];

   return (
      <section className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
         {/* Royal Corner Ornaments */}
         <RoyalCornerOrnament
            position="top-left"
            color="#c1893e"
            size="lg"
            className="top-2 left-2 md:top-8 md:left-8 gold-glow"
         />
         <RoyalCornerOrnament
            position="bottom-right"
            color="#c1893e"
            size="lg"
            className="bottom-2 right-2 md:bottom-8 md:right-8 gold-glow"
         />

         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-[0.03]">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #c1893e 0.5px, transparent 0)`,
                  backgroundSize: "32px 32px",
               }}
            />
         </div>

         <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto mb-16 reveal">
               <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
                  Guest Experiences
               </span>
               <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mt-4 text-balance">
                  What Our Guests
                  <span className="text-ochre block mt-2 gold-shimmer">
                     Are Saying
                  </span>
               </h2>
               <RoyalDivider color="#c1893e" className="my-8" />
            </div>

            {/* Testimonial Card */}
            <div className="max-w-4xl mx-auto reveal">
               <div className="relative bg-cream/5 backdrop-blur-sm border border-cream/10 p-8 md:p-16">
                  {/* Corner Ornaments */}
                  <RoyalCornerOrnament
                     position="top-left"
                     color="#c1893e"
                     size="sm"
                     className="top-0 left-0"
                  />
                  <RoyalCornerOrnament
                     position="bottom-right"
                     color="#c1893e"
                     size="sm"
                     className="bottom-0 right-0"
                  />

                  {/* Quote Icon */}
                  <div className="flex justify-center mb-8">
                     <div className="w-16 h-16 border border-ochre/30 flex items-center justify-center">
                        <Quote className="w-8 h-8 text-ochre" />
                     </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-8">
                     {[...Array(current.rating)].map((_, i) => (
                        <Star
                           key={i}
                           className="w-4 h-4 text-ochre fill-ochre"
                        />
                     ))}
                  </div>

                  {/* Quote Text */}
                  <div className="relative min-h-[120px]">
                     {testimonials.map((testimonial, index) => (
                        <p
                           key={index}
                           className={cn(
                              "absolute inset-0 font-serif text-xl md:text-2xl text-cream/90 text-center leading-relaxed italic transition-all duration-500",
                              activeIndex === index
                                 ? "opacity-100 translate-y-0"
                                 : "opacity-0 translate-y-4",
                           )}
                        >
                           &ldquo;{testimonial.quote}&rdquo;
                        </p>
                     ))}
                  </div>

                  {/* Author */}
                  <div className="text-center mt-10 pt-8 border-t border-cream/10">
                     <p className="font-serif text-lg text-ochre">
                        {current.name}
                     </p>
                     <p className="font-sans text-sm text-cream/60 tracking-wider uppercase mt-1">
                        {current.title}
                     </p>
                     <p className="font-sans text-xs text-cream/40 mt-1">
                        {current.location}
                     </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-center items-center gap-6 mt-10">
                     <button
                        onClick={prev}
                        className="w-10 h-10 border border-cream/20 hover:border-ochre hover:bg-ochre text-cream hover:text-white transition-all duration-300 flex items-center justify-center"
                     >
                        <ChevronLeft className="w-4 h-4" />
                     </button>
                     <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                           <button
                              key={index}
                              onClick={() => goTo(index)}
                              className={cn(
                                 "h-1 transition-all duration-300",
                                 activeIndex === index
                                    ? "w-8 bg-ochre"
                                    : "w-3 bg-cream/20 hover:bg-cream/40",
                              )}
                           />
                        ))}
                     </div>
                     <button
                        onClick={next}
                        className="w-10 h-10 border border-cream/20 hover:border-ochre hover:bg-ochre text-cream hover:text-white transition-all duration-300 flex items-center justify-center"
                     >
                        <ChevronRight className="w-4 h-4" />
                     </button>
                  </div>
               </div>
            </div>

            {/* Accolades Bar */}
            <div className="mt-16 grid md:grid-cols-3 gap-8 pt-12 border-t border-cream/10 reveal">
               {accolades.map((accolade) => (
                  <div key={accolade.label} className="text-center">
                     <span className="font-sans text-xs tracking-[0.2em] uppercase text-ochre/70">
                        {accolade.label}
                     </span>
                     <p className="font-serif text-lg text-cream mt-1">
                        {accolade.value}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
