"use client";

import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament } from "@/components/royal-corner-ornament";

export function DiningSection() {
   return (
      <section id="dining" className="relative py-32 bg-olive-dark overflow-hidden">
         {/* Background Image */}
         <div 
            className="absolute inset-0 bg-cover bg-center parallax-bg"
            style={{
               backgroundImage: `url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070)`,
            }}
         />
         <div className="absolute inset-0 bg-olive-dark/40" />

         <div className="container mx-auto px-6 relative z-10 flex min-h-[60vh] items-center justify-center">
            <div className="bg-cream/95 backdrop-blur-md p-10 md:p-16 max-w-3xl text-center border border-ochre/20 reveal-scale relative">
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
               <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark block mb-4">
                  Sunshine Restaurant
               </span>
               <h2 className="font-serif text-4xl md:text-5xl text-olive-dark text-balance leading-tight">
                  Rooftop Dining with a View and a Soul
               </h2>
               <p className="font-sans text-lg text-olive/80 leading-relaxed mt-6">
                  Perched on the 5th floor, Sunshine Multi-Cuisine Restaurant serves leisurely breakfasts, flavourful lunches and candlelit dinners daily from 7:30 AM to 11:00 PM. Savour Odia classics, pan-Indian favourites and international fare, all with an open-sky ambiance.
               </p>
               
               <div className="flex flex-wrap justify-center gap-6 mt-8 mb-10 text-olive/70">
                  <div className="flex items-center gap-2">
                     <Clock className="w-5 h-5 text-ochre" />
                     <span className="font-sans text-sm">7:30 AM to 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <MapPin className="w-5 h-5 text-ochre" />
                     <span className="font-sans text-sm">5th Floor Rooftop</span>
                  </div>
               </div>

               <Button className="bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-8 py-6 btn-shimmer group">
                  Explore the Dining Experience
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Button>
            </div>
         </div>
      </section>
   );
}
