"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RoyalCornerOrnament } from "@/components/royal-corner-ornament";

const culturalExperiences = [
   {
      title: "Jagannath Temple",
      subtitle: "Divine Blessings",
      description:
         "Begin your spiritual journey at the sacred 12th-century Jagannath Temple, one of the Char Dham pilgrimage sites. Our concierge can arrange guided darshan experiences and explain the rich mythology.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076",
      distance: "500m",
   },
   {
      title: "Mahaprasad",
      subtitle: "Sacred Cuisine",
      description:
         "Experience Abadha, the divine offering from Jagannath Temple's kitchen - the largest in the world. This sacred meal, prepared without onion and garlic, carries centuries of spiritual tradition.",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2021",
      distance: "Temple",
   },
   {
      title: "Puri Beach",
      subtitle: "Golden Sands",
      description:
         "Witness spectacular sunrises over the Bay of Bengal. The beach, with its unique golden sand and traditional fishing boats, offers morning yoga sessions and evening cultural performances.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
      distance: "1km",
   },
   {
      title: "Applique Art",
      subtitle: "Living Heritage",
      description:
         "Pipili, near Puri, is renowned for its vibrant applique work - colorful fabric art used in temple decorations. Visit artisan workshops to witness this 900-year-old craft tradition.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032",
      distance: "25km",
   },
   {
      title: "Chilika Lake",
      subtitle: "Natural Wonder",
      description:
         "Asia's largest brackish water lagoon is home to dolphins and migratory birds. Take a boat ride to Satapada for an unforgettable encounter with Irrawaddy dolphins.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      distance: "50km",
   },
   {
      title: "Konark Sun Temple",
      subtitle: "Architectural Marvel",
      description:
         "A UNESCO World Heritage Site, this 13th-century temple is designed as a colossal chariot of the Sun God. The intricate stone carvings are a testament to Kalinga architecture.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071",
      distance: "35km",
   },
];

export function CulturalSection() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const itemsToShow = 3;

   const nextSlide = () => {
      setCurrentIndex((prev) =>
         prev + 1 >= culturalExperiences.length - itemsToShow + 1
            ? 0
            : prev + 1,
      );
   };

   const prevSlide = () => {
      setCurrentIndex((prev) =>
         prev === 0 ? culturalExperiences.length - itemsToShow : prev - 1,
      );
   };

   return (
      <section
         id="heritage"
         className="relative py-24 md:py-32 bg-cream overflow-hidden heritage-pattern"
      >
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
         <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
            <div
               className="w-full h-full"
               style={{
                  backgroundImage: `repeating-linear-gradient(
            45deg,
            #767545 0px,
            #767545 1px,
            transparent 1px,
            transparent 20px
          )`,
               }}
            />
         </div>

         <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 reveal">
               <div className="max-w-2xl">
                  <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
                     Discover Puri
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mt-4">
                     Sacred Journeys &
                     <span className="text-ochre block mt-2">
                        Cultural Treasures
                     </span>
                  </h2>
                  <p className="font-sans text-lg text-olive/80 leading-relaxed mt-6">
                     Puri is more than a destination—it{"'"}s a spiritual
                     experience. Let us guide you through ancient temples,
                     traditional crafts, and natural wonders that have drawn
                     pilgrims for centuries.
                  </p>
               </div>

               {/* Navigation */}
               <div className="flex gap-4 mt-8 lg:mt-0">
                  <button
                     onClick={prevSlide}
                     className="w-12 h-12 border border-olive/20 hover:border-ochre hover:bg-ochre text-olive-dark hover:text-white transition-all duration-300 flex items-center justify-center group"
                  >
                     <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                     onClick={nextSlide}
                     className="w-12 h-12 border border-olive/20 hover:border-ochre hover:bg-ochre text-olive-dark hover:text-white transition-all duration-300 flex items-center justify-center group"
                  >
                     <ChevronRight className="w-5 h-5" />
                  </button>
               </div>
            </div>

            {/* Experiences Carousel */}
            <div className="overflow-hidden reveal">
               <div
                  className="flex gap-6 transition-transform duration-500 ease-out"
                  style={{
                     transform: `translateX(-${currentIndex * (100 / itemsToShow + 2)}%)`,
                  }}
               >
                  {culturalExperiences.map((experience, index) => (
                     <div
                        key={experience.title}
                        className="min-w-[calc(33.333%-16px)] md:min-w-[calc(33.333%-16px)] max-md:min-w-[calc(100%-32px)] group"
                     >
                        {/* Image */}
                        <div className="relative aspect-[3/4] overflow-hidden mb-6">
                           <Image
                              src={experience.image}
                              alt={experience.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-olive-dark/30 group-hover:bg-olive-dark/10 transition-colors duration-500" />

                           {/* Distance Badge */}
                           <div className="absolute bottom-4 left-4 bg-ochre px-4 py-2">
                              <span className="font-sans text-xs tracking-wider uppercase text-white">
                                 {experience.distance}
                              </span>
                           </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                           <span className="font-sans text-xs tracking-[0.2em] uppercase text-ochre-dark">
                              {experience.subtitle}
                           </span>
                           <h3 className="font-serif text-2xl text-olive-dark group-hover:text-ochre transition-colors duration-300">
                              {experience.title}
                           </h3>
                           <p className="font-sans text-sm text-olive/70 leading-relaxed">
                              {experience.description}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 mt-12 justify-center">
               {[...Array(culturalExperiences.length - itemsToShow + 1)].map(
                  (_, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                           "h-1 transition-all duration-300",
                           currentIndex === index
                              ? "w-12 bg-ochre"
                              : "w-4 bg-olive/20 hover:bg-olive/40",
                        )}
                     />
                  ),
               )}
            </div>
         </div>
      </section>
   );
}
