"use client";

import { MapPin } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const distances = [
   { label: "Lord Jagannath Temple", distance: "1 km" },
   { label: "Sea Beach", distance: "0.5 km" },
   { label: "Railway Station", distance: "1.5 km" },
   { label: "Bus Stand", distance: "2.5 km" },
   { label: "Airport", distance: "60 km" },
   { label: "Konark Sun Temple", distance: "37 km" },
];

import React from "react";

interface LocationSectionProps {
   badge?: string;
   headline?: string;
   body?: React.ReactNode;
   customDistances?: { label: string; distance: string }[];
}

export function LocationSection({ 
   badge = "Positioned for Peace",
   headline = "Perfectly Placed, Between the Divine and the Sea",
   body,
   customDistances = distances
}: LocationSectionProps) {
   return (
      <section id="location" className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #c1893e 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
               }}
            />
         </div>
         <RoyalCornerOrnament position="top-left" color="#c1893e" size="lg" className="top-2 left-2 md:top-8 md:left-8 gold-glow" />
         <RoyalCornerOrnament position="bottom-right" color="#c1893e" size="lg" className="bottom-2 right-2 md:bottom-8 md:right-8 gold-glow" />

         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
               <div className="space-y-8 reveal-left">
                  <div>
                     <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">{badge}</span>
                     <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 text-balance leading-tight">
                        {headline}
                     </h2>
                     <RoyalDivider color="#c1893e" className="my-8" />
                     {body || (
                        <p className="font-sans text-lg text-cream/80 leading-relaxed">
                           Situated on Chandan Hazuri Road near Sanskrit University, Hotel Victoria Grand places you at the crossroads of faith and leisure. The Jagannath Temple is just 1km away. The sea beach is a mere 0.5 km. The railway station is 1.5 km. Everything that makes Puri extraordinary is right at your door.
                        </p>
                     )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                     {customDistances.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-cream/5 border border-cream/10 hover:border-ochre/40 transition-colors">
                           <MapPin className="w-5 h-5 text-ochre shrink-0 mt-0.5" />
                           <div>
                              <p className="font-sans text-sm font-medium text-cream">{item.label}</p>
                              <p className="font-sans text-xs text-cream/70 mt-1">{item.distance}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative aspect-square md:aspect-4/3 lg:aspect-4/5 bg-cream/5 border border-ochre/20 p-2 reveal-right">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119934.34151770659!2d85.73605809712521!3d19.822709217688566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c4180256e495%3A0x496a9d8b30ded8ce!2sPuri%2C%20Odisha!5e0!3m2!1sen!2sin!4v1716382946282!5m2!1sen!2sin"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen={false}
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     className="hover:shadow-xl transition-all duration-700"
                  ></iframe>
               </div>
            </div>
         </div>
      </section>
   );
}
