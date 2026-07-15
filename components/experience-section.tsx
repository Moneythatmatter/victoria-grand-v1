"use client";

import { useRef } from "react";
import { Bed, Utensils, Users, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import {
   RoyalCornerOrnament,
   RoyalDivider,
} from "@/components/royal-corner-ornament";
import { useCountUp } from "@/hooks/use-animations";

const experiences = [
   {
      icon: Bed,
      title: "Grand Deluxe & Premium",
      description: "Categories for maximum comfort and pure relaxation",
      stat: 36,
      statLabel: "Rooms",
      statSuffix: "",
   },
   {
      icon: Utensils,
      title: "Sunshine Restaurant",
      description: "Multi-Cuisine restaurant with an ambiance to match",
      stat: 5,
      statLabel: "Floor Rooftop",
      statSuffix: "th",
   },
   {
      icon: Users,
      title: "Opulent Banquet Hall",
      description:
         "Fully equipped for weddings and conferences for up to 150 guests",
      stat: 1800,
      statLabel: "Sq. Ft.",
      statSuffix: "",
   },
   {
      icon: Droplets,
      title: "Outdoor Swimming Pool",
      description: "Take a refreshing dip or relax by the sparkling water",
      stat: 900,
      statLabel: "Sq. Ft.",
      statSuffix: "",
      isDecimal: false,
   },
];

function AnimatedStat({
   end,
   suffix,
   isDecimal,
}: {
   end: number;
   suffix: string;
   isDecimal?: boolean;
}) {
   const { count, ref } = useCountUp(isDecimal ? end * 10 : end, 2000);
   const display = isDecimal ? (count / 10).toFixed(1) : count.toString();
   return (
      <span
         ref={ref as React.RefObject<HTMLSpanElement>}
         className="font-serif text-3xl text-ochre"
      >
         {display}
         {suffix}
      </span>
   );
}

export function ExperienceSection() {
   return (
      <section className="relative py-24 md:py-32 bg-cream overflow-hidden heritage-pattern">
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

         {/* Decorative Pattern */}
         <div className="absolute top-0 left-0 w-full h-32 opacity-5">
            <div
               className="w-full h-full"
               style={{
                  backgroundImage: `repeating-linear-gradient(
            90deg,
            #767545 0px,
            #767545 1px,
            transparent 1px,
            transparent 60px
          )`,
               }}
            />
         </div>

         <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto mb-20 reveal">
               <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
                  About Us
               </span>
               <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mt-4 text-balance">
                  Welcome to
                  <span className="text-ochre block mt-2">
                     Hotel Victoria Grand
                  </span>
               </h2>
               <RoyalDivider color="#c1893e" className="my-8" />
               <div className="space-y-6">
                  <p className="font-sans text-lg text-olive/80 leading-relaxed text-balance">
                     Hotel Victoria Grand is Puri{"'"}s premier luxury boutique
                     hotel, nestled in the spiritual soul of Odisha. Located on
                     Chandan Hazuri Road, in front of the revered Ramakrishna
                     Ashram and just minutes from the iconic Jagannath Temple,
                     our hotel is where divine serenity and contemporary
                     elegance coexist seamlessly.
                  </p>
                  <p className="font-sans text-lg text-olive/80 leading-relaxed text-balance">
                     Whether you arrive as a devotee seeking blessings, a
                     traveller drawn to the golden sands of the Bay of Bengal,
                     or a business guest in need of polished facilities, Hotel
                     Victoria Grand promises a stay that lingers in memory long
                     after you leave.
                  </p>
               </div>

               <div className="mt-12 p-8 border border-ochre/20 bg-ochre/5 italic rounded-sm relative">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-ochre/40 -translate-x-2 -translate-y-2 opacity-50" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-ochre/40 translate-x-2 translate-y-2 opacity-50" />
                  <p className="font-serif text-2xl md:text-3xl text-olive-dark text-balance">
                     &quot;At Victoria Grand, every stay is a story worth
                     telling.&quot;
                  </p>
               </div>
            </div>

            {/* Experience Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 stagger-children">
               {experiences.map((experience, index) => (
                  <div
                     key={experience.title}
                     className={cn(
                        "group relative p-8 bg-white border border-olive/10 transition-all duration-500 reveal premium-card",
                        "hover:shadow-lg hover:-translate-y-1",
                     )}
                  >
                     {/* Decorative Corner */}
                     <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-ochre/20 group-hover:border-ochre/60 transition-colors duration-500" />

                     <experience.icon
                        className="w-10 h-10 text-ochre mb-6 group-hover:scale-110 transition-transform duration-500"
                        strokeWidth={1.5}
                     />

                     <h3 className="font-serif text-xl text-olive-dark mb-3">
                        {experience.title}
                     </h3>

                     <p className="font-sans text-sm text-olive/70 leading-relaxed mb-6">
                        {experience.description}
                     </p>

                     <div className="pt-6 border-t border-olive/10">
                        <AnimatedStat
                           end={experience.stat}
                           suffix={experience.statSuffix}
                           isDecimal={experience.isDecimal}
                        />
                        <span className="block font-sans text-xs tracking-wider uppercase text-olive/60 mt-1">
                           {experience.statLabel}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Bottom Decorative Pattern */}
         <div className="absolute bottom-0 right-0 w-full h-32 opacity-5 rotate-180">
            <div
               className="w-full h-full"
               style={{
                  backgroundImage: `repeating-linear-gradient(
            90deg,
            #767545 0px,
            #767545 1px,
            transparent 1px,
            transparent 60px
          )`,
               }}
            />
         </div>
      </section>
   );
}
