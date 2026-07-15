"use client";

import { BedDouble, Maximize, Utensils, Users, Waves, Clock, LogOut } from "lucide-react";
import { RoyalDivider } from "@/components/royal-corner-ornament";

const facts = [
  { icon: BedDouble, label: "Total Rooms", value: "36 (30 Grand Deluxe and 6 Grand Premium)" },
  { icon: Maximize, label: "Room Sizes", value: "Grand Deluxe 292 sq. ft.  |  Grand Premium 310 sq. ft." },
  { icon: Utensils, label: "Restaurant", value: "Sunshine Multi-Cuisine Restaurant, 5th Floor, 50 covers, 600 sq. ft." },
  { icon: Users, label: "Banquet Hall", value: "Opulent Hall, 1st Floor, 150 guests, 1,800 sq. ft." },
  { icon: Waves, label: "Swimming Pool", value: "900 sq. ft." },
  { icon: Clock, label: "Check-In Time", value: "10:00 AM" },
  { icon: LogOut, label: "Check-Out Time", value: "8:00 AM" },
];

export function HotelAtAGlance() {
  return (
    <section className="py-24 md:py-32 bg-olive-dark border-y border-ochre/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">Property Facts</span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4">
            Hotel at a Glance
          </h2>
          <RoyalDivider color="#c1893e" className="my-6 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {facts.map((fact, index) => (
             <div key={index} className="flex flex-col bg-cream/5 border border-cream/10 p-6 md:p-8 hover:bg-cream/10 hover:border-ochre/30 transition-all duration-300">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full border border-ochre/30 flex items-center justify-center bg-olive-dark">
                   <fact.icon className="w-5 h-5 text-ochre shrink-0" />
                 </div>
                 <span className="font-sans text-sm font-medium text-cream uppercase tracking-wider">{fact.label}</span>
               </div>
               <p className="font-sans text-sm md:text-base text-cream/70 leading-relaxed max-w-[280px]">
                 {fact.value}
               </p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
