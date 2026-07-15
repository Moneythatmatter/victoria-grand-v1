"use client";

import { CheckCircle2, Coffee, Waves, Utensils, Heart, Stethoscope, Shirt, Wifi, Map } from "lucide-react";

const features = [
   { icon: Coffee, text: "Complimentary Buffet Breakfast" },
   { icon: CheckCircle2, text: "Welcome Drink on Arrival" },
   { icon: Waves, text: "Swimming Pool Access" },
   { icon: Utensils, text: "In-Room Dining" },
   { icon: Heart, text: "Lord Jagannath Temple Darshan by Our Priest" },
   { icon: Stethoscope, text: "Doctor on Call" },
   { icon: Shirt, text: "Laundry Service" },
   { icon: Wifi, text: "High-Speed Wi-Fi" },
   { icon: Map, text: "Travel Desk Assistance" },
];

export function UspStrip() {
   return (
      <section className="bg-white py-16 border-t border-ochre/20 relative z-20">
         <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
               {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center group w-32 md:w-40">
                     <div className="w-12 h-12 rounded-full border border-ochre/30 flex items-center justify-center mb-4 group-hover:bg-ochre group-hover:border-ochre transition-all duration-300">
                        <feature.icon className="w-5 h-5 text-ochre group-hover:text-white transition-colors duration-300" />
                     </div>
                     <p className="font-sans text-[10px] md:text-xs text-olive-dark/80 uppercase tracking-widest max-w-[150px] leading-relaxed group-hover:text-olive-dark transition-colors duration-300">
                        {feature.text}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
