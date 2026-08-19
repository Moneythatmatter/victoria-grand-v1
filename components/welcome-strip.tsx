"use client";

import { MapPin, Star, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
   {
      icon: MapPin,
      text: "Minutes from Jagannath Temple & Puri Beach",
   },
   {
      icon: Star,
      text: "36 Elegantly Appointed Rooms | Rooftop Restaurant | Grand Banquet Hall",
   },
   {
      icon: Bell,
      text: "Welcome Drink on Arrival | Complimentary Breakfast | Temple Darshan Assistance",
   },
];

export function WelcomeStrip() {
   return (
      <section className="relative bg-olive-dark py-12 border-y border-ochre/20 z-20">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 text-center max-w-6xl mx-auto">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className={cn(
                        "flex flex-col items-center justify-center p-8 bg-cream/5 border border-ochre/30 transition-all duration-300 hover:bg-cream/10",
                     )}
                  >
                     <feature.icon className="w-10 h-10 text-ochre mb-6" strokeWidth={1.5} />
                     <p className="font-sans text-sm md:text-base text-cream/90 leading-relaxed max-w-[280px]">
                        {feature.text}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
