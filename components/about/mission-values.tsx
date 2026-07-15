"use client";

import { BedDouble, Landmark, ShieldCheck } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: BedDouble,
    title: "Comfort",
    description: "Modern, well-appointed rooms with premium amenities designed for complete relaxation.",
  },
  {
    icon: Landmark,
    title: "Culture",
    description: "Immersed in the sacred geography of Puri, we help you experience the city's spiritual and cultural richness with ease.",
  },
  {
    icon: ShieldCheck,
    title: "Convenience",
    description: "From travel desk to doctor on call, every service is in place so your stay is seamless.",
  },
];

export function MissionValues() {
  return (
    <section className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
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
        {/* Philosophy Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Our Philosophy
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mt-4 mb-6 text-balance">
            Comfort, Elegance and
            <span className="text-ochre block mt-2">Genuine Care</span>
          </h2>
          
          <RoyalDivider color="#c1893e" className="my-8" />
          
          <p className="font-sans text-lg text-cream/80 leading-relaxed text-balance">
            We believe that great hospitality is never accidental. It is the result of careful attention to every detail, from the quality of your mattress to the warmth of your welcome drink, from the food on your plate to the ease of your temple visit. At Hotel Victoria Grand, we take pride in anticipating your needs before you even express them.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={cn(
                "group relative p-8 bg-cream/5 border border-cream/10 transition-all duration-500 premium-card",
                "hover:bg-cream/10 hover:border-ochre/30"
              )}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-ochre/20 group-hover:border-ochre/50 transition-colors duration-500" />

              <value.icon
                className="w-10 h-10 text-ochre mb-5 group-hover:scale-110 transition-transform duration-500"
                strokeWidth={1.5}
              />

              <h4 className="font-serif text-xl text-cream mb-3">
                {value.title}
              </h4>

              <p className="font-sans text-sm text-cream/60 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
