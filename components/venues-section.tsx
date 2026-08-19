"use client";

import Image from "next/image";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

export function VenuesSection() {
   return (
      <section id="venues" className="relative py-24 md:py-32 bg-cream overflow-hidden heritage-pattern">
         {/* Royal Corner Ornaments */}
         <RoyalCornerOrnament
            position="top-left"
            color="#767545"
            size="lg"
            className="top-2 left-2 md:top-8 md:left-8 gold-glow"
         />
         <RoyalCornerOrnament
            position="bottom-right"
            color="#767545"
            size="lg"
            className="bottom-2 right-2 md:bottom-8 md:right-8 gold-glow"
         />

         <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto mb-20 reveal">
               <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
                  Grand Celebration Hall
               </span>
               <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mt-4 text-balance">
                  Every Celebration Deserves a 
                  <span className="text-ochre block mt-2">
                     Grand Stage
                  </span>
               </h2>
               <RoyalDivider color="#c1893e" className="my-8" />
               <p className="font-sans text-lg text-olive/80 leading-relaxed">
                  Our 1,800 sq. ft. Grand Celebration Hall on the 1st floor accommodates up to 150 guests and is fully equipped for weddings, ring ceremonies, birthday celebrations, corporate conferences and private parties. Multiple seating layouts available.
               </p>
               <div className="flex justify-center mt-10">
                  <Button className="bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-10 py-6 btn-shimmer group">
                     Plan Your Event
                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </div>
            </div>

            {/* Venue Image Showcase */}
            <div className="max-w-5xl mx-auto relative group reveal-scale">
               <div className="absolute -inset-4 border border-ochre/20" />
               <div className="relative aspect-21/9 overflow-hidden">
                  <Image
                     src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098"
                     alt="Grand Celebration Hall"
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-olive-dark/20 group-hover:bg-olive-dark/10 transition-colors duration-500" />
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-ochre px-4 py-2">
                     <Users className="w-5 h-5 text-white" />
                     <span className="font-sans text-xs tracking-wider uppercase text-white">
                        Up to 150 Guests
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
