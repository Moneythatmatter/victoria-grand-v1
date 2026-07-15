"use client";

import {
  Wifi,
  Wind,
  Coffee,
  Tv,
  Bath,
  UtensilsCrossed,
  Phone,
  ShieldCheck,
  Car,
  Sparkles,
  Clock,
  Shirt,
} from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const amenityCategories = [
  {
    title: "In-Room Essentials",
    amenities: [
      { icon: Tv, label: "LCD TV", description: "With cable channels" },
      { icon: Wifi, label: "High-Speed WiFi", description: "Complimentary" },
      { icon: Wind, label: "Air Conditioning", description: "Climate control" },
      { icon: Coffee, label: "Tea & Coffee", description: "Electric kettle & sachets" },
    ],
  },
  {
    title: "Bathroom & Comfort",
    amenities: [
      { icon: Bath, label: "Premium Toiletries", description: "Quality bath products" },
      { icon: Sparkles, label: "Daily Housekeeping", description: "Complimentary" },
      { icon: Shirt, label: "Iron & Board", description: "On request" },
      { icon: Wind, label: "Hair Dryer", description: "In all rooms" },
    ],
  },
  {
    title: "Services",
    amenities: [
      { icon: UtensilsCrossed, label: "Room Dining", description: "Extended hours" },
      { icon: Phone, label: "24/7 Reception", description: "Always available" },
      { icon: Clock, label: "Wake-Up Service", description: "On request" },
      { icon: Shirt, label: "Laundry Service", description: "Same-day available" },
    ],
  },
  {
    title: "Hotel Facilities",
    amenities: [
      { icon: Car, label: "Parking", description: "Free on-site" },
      { icon: ShieldCheck, label: "Security", description: "24/7 surveillance" },
      { icon: UtensilsCrossed, label: "Restaurant", description: "Multi-cuisine" },
      { icon: Sparkles, label: "Event Spaces", description: "Banquet & conference" },
    ],
  },
];

export function RoomAmenities() {
  return (
    <section className="relative py-20 md:py-28 bg-olive-dark overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-right"
        color="#c1893e"
        size="lg"
        className="top-4 right-4 md:top-8 md:right-8 opacity-30 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-left"
        color="#c1893e"
        size="lg"
        className="bottom-4 left-4 md:bottom-8 md:left-8 opacity-30 hidden md:block"
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Facilities & Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 text-balance">
            Premium <span className="text-ochre gold-shimmer">Amenities</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-6" />
          <p className="font-sans text-cream/70 leading-relaxed">
            Every room at Victoria Grand comes equipped with thoughtfully curated
            amenities to ensure your comfort and convenience throughout your stay.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {amenityCategories.map((category) => (
            <div
              key={category.title}
              className="bg-cream/5 border border-cream/10 p-6 md:p-8 premium-card"
            >
              <h3 className="font-serif text-xl text-ochre mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.amenities.map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 bg-ochre/20 group-hover:bg-ochre/30 transition-colors duration-300">
                      <amenity.icon className="w-5 h-5 text-ochre" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-cream font-medium">
                        {amenity.label}
                      </p>
                      <p className="font-sans text-xs text-cream/60">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-cream/60">
            Additional services available upon request. Please contact our reception for special requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
