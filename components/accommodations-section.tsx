"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Wifi, Wind, Coffee, Tv, Bath, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
   RoyalCornerOrnament,
   RoyalDivider,
} from "@/components/royal-corner-ornament";

const rooms = [
   {
      name: "Grand Deluxe Room",
      description:
         "Facility– All room caters your comfort to the fullest, some of the special features include elegant floors, Double Bed, Wall mounted LED screen TV, bathroom with high quality fittings. Large wooden wardrobe. A sleek work desk with a chair and Task Lamp and WiFi connectivity amongst others.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974",
      price: "4,000",
      size: "292 sq ft",
      features: ["Double Bed", "Work Desk", "Task Lamp", "LED TV"],
   },
   {
      name: "Grand Premium Room",
      description:
         "Facility– All room caters your comfort to the fullest, some of the special features include elegant floors, Double Bed, Wall mounted LED screen TV, bathroom with high quality fittings. Large wooden wardrobe. A sleek work desk with a chair and Task Lamp and WiFi connectivity amongst others.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      price: "5,000",
      size: "310 sq ft",
      features: ["Double Bed", "Premium Fittings", "Work Desk"],
   },
];

const amenities = [
   { icon: Tv, label: "TV Channels" },
   { icon: Coffee, label: "Tea & Coffee Maker" },
   { icon: Wind, label: "Mini Fridge" },
   { icon: Wifi, label: "WiFi Internet" },
   { icon: Bath, label: "Laundry Service" },
   { icon: Eye, label: "Room Dining" },
];

export function AccommodationsSection() {
   const [activeRoom, setActiveRoom] = useState(0);
   return (
      <section
         id="accommodations"
         className="relative py-24 md:py-32 bg-olive-dark overflow-hidden"
      >
         {/* Royal Corner Ornaments */}
         <RoyalCornerOrnament
            position="top-right"
            color="#c1893e"
            size="lg"
            className="top-2 right-2 md:top-8 md:right-8 gold-glow"
         />
         <RoyalCornerOrnament
            position="bottom-left"
            color="#c1893e"
            size="lg"
            className="bottom-2 left-2 md:bottom-8 md:left-8 gold-glow"
         />

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

         <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto mb-16 reveal">
               <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
                  Our Accommodations
               </span>
               <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mt-4 text-balance">
                  Rooms Designed for Rest, 
                  <span className="text-ochre gold-shimmer block mt-2">
                     Renewed Every Stay
                  </span>
               </h2>
               <RoyalDivider color="#c1893e" className="my-8" />
               <p className="font-sans text-lg text-cream/80 leading-relaxed text-balance">
                  Choose from our Grand Deluxe (292 sq. ft.) or Grand Premium (310 sq. ft.) rooms, each furnished with king-size beds, wall-mounted LED TVs, tea and coffee makers, mini fridges and high-speed Wi-Fi. Complimentary breakfast is included.
               </p>
            </div>

            {/* Room Showcase */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
               {/* Room Image */}
               <div className="relative aspect-4/3 lg:aspect-square reveal-left">
                  <div className="absolute -inset-4 border border-ochre/20" />
                  <div className="relative h-full overflow-hidden image-reveal revealed">
                     {rooms.map((room, index) => (
                        <div
                           key={room.name}
                           className={cn(
                              "absolute inset-0 transition-opacity duration-700",
                              activeRoom === index
                                 ? "opacity-100"
                                 : "opacity-0",
                           )}
                        >
                           <Image
                              src={room.image}
                              alt={room.name}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-olive-dark/20" />
                        </div>
                     ))}
                  </div>
                  {/* Price Tag */}
                  <div className="absolute -bottom-6 -right-6 bg-ochre px-8 py-4">
                     <span className="font-sans text-xs tracking-wider uppercase text-white/80">
                        From
                     </span>
                     <p className="font-serif text-2xl text-white">
                        {rooms[activeRoom].price}
                     </p>
                     <span className="font-sans text-xs text-white/80 mt-1 block">
                        +1000/Extra Person
                     </span>
                  </div>
               </div>

               {/* Room Details */}
               <div className="lg:pl-8 reveal-right">
                  {/* Room Tabs */}
                  <div className="flex flex-wrap gap-4 mb-8">
                     {rooms.map((room, index) => (
                        <button
                           key={room.name}
                           onClick={() => setActiveRoom(index)}
                           className={cn(
                              "px-4 py-2 font-sans text-sm tracking-wider uppercase transition-all duration-300",
                              activeRoom === index
                                 ? "bg-ochre text-white"
                                 : "bg-transparent text-cream/70 border border-cream/20 hover:border-ochre/60 hover:text-ochre",
                           )}
                        >
                           {room.name.split(" ").slice(0, 2).join(" ")}
                        </button>
                     ))}
                  </div>

                  {/* Active Room Info */}
                  <div className="space-y-6">
                     <h3 className="font-serif text-3xl md:text-4xl text-cream">
                        {rooms[activeRoom].name}
                     </h3>
                     <p className="font-sans text-cream/80 leading-relaxed">
                        {rooms[activeRoom].description}
                     </p>

                     {/* Room Size */}
                     <div className="flex items-center gap-2 text-ochre">
                        <span className="font-serif text-xl">
                           {rooms[activeRoom].size}
                        </span>
                     </div>

                     {/* Features */}
                     <div className="flex flex-wrap gap-3">
                        {rooms[activeRoom].features.map((feature) => (
                           <span
                              key={feature}
                              className="px-4 py-2 bg-cream/10 border border-cream/20 text-cream font-sans text-sm hover:border-ochre/40 transition-colors duration-300"
                           >
                              {feature}
                           </span>
                        ))}
                     </div>

                     {/* CTA */}
                     <Button className="mt-4 bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-8 py-6 btn-shimmer">
                        View All Rooms and Tariff
                        <ArrowRight className="ml-2 w-4 h-4" />
                     </Button>
                  </div>
               </div>
            </div>

            {/* Amenities Bar */}
            <div className="mt-20 pt-12 border-t border-cream/10 reveal">
               <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                  {amenities.map((amenity) => (
                     <div key={amenity.label} className="text-center group">
                        <amenity.icon
                           className="w-8 h-8 text-ochre mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                           strokeWidth={1.5}
                        />
                        <span className="font-sans text-xs tracking-wider uppercase text-cream/70">
                           {amenity.label}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
