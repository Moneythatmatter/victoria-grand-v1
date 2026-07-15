"use client";

import { MapPin, Navigation, Car, Train, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
   RoyalCornerOrnament,
   RoyalDivider,
} from "@/components/royal-corner-ornament";

const transitInfo = [
   {
      icon: Plane,
      title: "By Air",
      distance: "60 Kms",
      details: "Biju Patnaik International Airport, Bhubaneswar",
   },
   {
      icon: Train,
      title: "By Train",
      distance: "1.5 Kms",
      details: "Puri Railway Station",
   },
   {
      icon: Car,
      title: "By Road",
      distance: "2.5 Kms",
      details: "Puri Bus Stand",
   },
];

const nearbyAttractions = [
   { name: "Jagannath Temple", distance: "1.2 Kms" },
   { name: "Puri Beach", distance: "500 Meters" },
   { name: "Gundicha Temple", distance: "2 Kms" },
   { name: "Sudarshan Crafts Museum", distance: "800 Meters" },
];

export function ContactMap() {
   return (
      <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
         {/* Royal Corner Ornaments - Diagonal */}
         <RoyalCornerOrnament
            position="top-left"
            color="#767545"
            size="lg"
            className="top-6 left-6 md:top-8 md:left-8 opacity-15 hidden md:block"
         />
         <RoyalCornerOrnament
            position="bottom-right"
            color="#767545"
            size="lg"
            className="bottom-6 right-6 md:bottom-8 md:right-8 opacity-15 hidden md:block"
         />

         <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre block mb-4">
                  Find Us
               </span>
               <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-olive-dark mb-6 text-balance">
                  Our Location
               </h2>
               <RoyalDivider color="#c1893e" className="my-8" />
               <p className="font-sans text-olive-dark/70 leading-relaxed">
                  Situated in the heart of the sacred city of Puri, Victoria
                  Grand offers easy access to the famous Jagannath Temple and
                  the pristine beaches of the Bay of Bengal.
               </p>
            </div>

            {/* Map and Info Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
               {/* Map Embed */}
               <div className="lg:col-span-2 relative">
                  <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[400px] border border-olive/10 overflow-hidden">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.0776559772366!2d85.8263!3d19.8053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ4JzE5LjEiTiA4NcKwNDknMzQuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0, position: "absolute", inset: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Victoria Grand Location"
                     />

                     {/* Map Overlay Info */}
                     <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white p-4 md:p-6 shadow-lg max-w-sm">
                        <div className="flex items-start gap-3">
                           <MapPin className="w-5 h-5 text-ochre shrink-0 mt-1" />
                           <div>
                              <h4 className="font-serif text-lg text-olive-dark mb-1">
                                 Victoria Grand
                              </h4>
                              <p className="font-sans text-sm text-olive-dark/70 mb-3">
                                 Hotel Victoria Grand, Chandan Hazuri Road, Near
                                 Sanskrit University, In front of Ramakrishnan
                                 Mission Ashram, Puri - 752001, Odisha
                              </p>
                              <a
                                 href="https://maps.google.com/?q=Victoria+Grand+Puri"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center gap-2 font-sans text-sm text-ochre hover:text-ochre-dark transition-colors"
                              >
                                 <Navigation className="w-4 h-4" />
                                 Get Directions
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Transit & Nearby Info */}
               <div className="space-y-8">
                  {/* Transit Information */}
                  <div className="bg-white border border-olive/10 p-6">
                     <h3 className="font-serif text-xl text-olive-dark mb-6">
                        How to Reach
                     </h3>
                     <div className="space-y-4">
                        {transitInfo.map((item) => (
                           <div
                              key={item.title}
                              className="flex items-start gap-4"
                           >
                              <div className="w-10 h-10 border border-ochre/30 flex items-center justify-center shrink-0">
                                 <item.icon className="w-5 h-5 text-ochre" />
                              </div>
                              <div>
                                 <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-serif text-base text-olive-dark">
                                       {item.title}
                                    </h4>
                                    <span className="font-sans text-xs bg-ochre/10 text-ochre px-2 py-0.5">
                                       {item.distance}
                                    </span>
                                 </div>
                                 <p className="font-sans text-sm text-olive-dark/70">
                                    {item.details}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Nearby Attractions */}
                  <div className="bg-white border border-olive/10 p-6">
                     <h3 className="font-serif text-xl text-olive-dark mb-6">
                        Nearby Attractions
                     </h3>
                     <ul className="space-y-3">
                        {nearbyAttractions.map((attraction) => (
                           <li
                              key={attraction.name}
                              className="flex items-center justify-between"
                           >
                              <span className="font-sans text-sm text-olive-dark/80">
                                 {attraction.name}
                              </span>
                              <span className="font-sans text-xs text-ochre">
                                 {attraction.distance}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* CTA */}
                  <div className="bg-olive-dark p-6 text-center">
                     <h4 className="font-serif text-lg text-cream mb-3">
                        Need Transportation?
                     </h4>
                     <p className="font-sans text-sm text-cream/70 mb-4">
                        We offer complimentary airport pickup for suite
                        bookings.
                     </p>
                     <Button className="w-full bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase text-xs py-5">
                        Request Pickup
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
