"use client";

import { PhoneCall, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament } from "@/components/royal-corner-ornament";

export function BookingSection() {
   return (
      <section className="relative bg-cream py-24 border-t border-ochre/20 overflow-hidden">
         <div
            className="absolute inset-0"
            style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(193,137,62,0.1) 1px, transparent 0)`,
               backgroundSize: "32px 32px",
            }}
         />
         <RoyalCornerOrnament
            position="top-left"
            color="#c1893e"
            size="md"
            className="top-4 left-4"
         />
         <RoyalCornerOrnament
            position="bottom-right"
            color="#c1893e"
            size="md"
            className="bottom-4 right-4"
         />

         <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mb-6 text-balance">
               Your Perfect Puri Stay Starts Here
            </h2>

            <div className="space-y-3 mb-12">
               <p className="font-sans text-lg md:text-xl text-olive-dark/90 font-medium tracking-wide">
                  Grand Deluxe from Rs. 4,000 per night &nbsp;|&nbsp; Grand
                  Premium from Rs. 5,000 per night
               </p>
               <p className="font-sans text-base text-olive-dark/70">
                  Complimentary breakfast included with every room.
               </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
               <Button
                  size="lg"
                  className="bg-ochre text-white hover:bg-ochre-light transition-all font-sans tracking-widest uppercase px-10 py-7 text-sm shadow-lg hover:shadow-xl btn-shimmer group w-full sm:w-auto"
               >
                  Book Directly and Save
                  <CalendarCheck className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
               </Button>
               <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-olive-dark text-olive-dark bg-transparent hover:bg-olive-dark hover:text-white transition-all font-sans tracking-widest uppercase px-10 py-7 text-sm shadow-lg w-full sm:w-auto group"
               >
                  <PhoneCall className="mr-3 w-5 h-5 group-hover:-rotate-12 transition-transform" />
                  Call Us to Reserve
               </Button>
            </div>
         </div>
      </section>
   );
}
