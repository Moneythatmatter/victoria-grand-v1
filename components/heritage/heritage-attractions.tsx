"use client";

import Image from "next/image";
import { MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const attractions = [
  {
    id: "jagannath",
    title: "Jagannath Temple",
    subtitle: "Divine Blessings",
    description:
      "Begin your spiritual journey at the sacred 12th-century Jagannath Temple, one of the Char Dham pilgrimage sites. This magnificent temple, standing at 214 feet, houses the holy deities Lord Jagannath, Balabhadra, and Subhadra. The temple kitchen, known as the largest in the world, serves thousands of devotees daily with the sacred Mahaprasad.",
    highlights: [
      "One of the four Char Dham pilgrimage sites",
      "World's largest temple kitchen",
      "Home to the famous Rath Yatra festival",
      "Architectural marvel of Kalinga style",
    ],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076",
    distance: "500m from Victoria Grand",
    timing: "5:00 AM - 11:00 PM",
    mustSee: true,
  },
  {
    id: "konark",
    title: "Konark Sun Temple",
    subtitle: "Architectural Marvel",
    description:
      "A UNESCO World Heritage Site, this 13th-century temple is designed as a colossal chariot of the Sun God Surya, with 24 intricately carved wheels and seven horses. The temple is a masterpiece of Kalinga architecture, adorned with sculptures depicting every aspect of life, from divine beings to everyday activities.",
    highlights: [
      "UNESCO World Heritage Site since 1984",
      "Designed as a giant stone chariot",
      "24 elaborately carved wheels",
      "Famous for the Konark Dance Festival",
    ],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071",
    distance: "35km from Victoria Grand",
    timing: "6:00 AM - 8:00 PM",
    mustSee: true,
  },
  {
    id: "chilika",
    title: "Chilika Lake",
    subtitle: "Natural Wonder",
    description:
      "Asia's largest brackish water lagoon, Chilika Lake is a biodiversity hotspot spread over 1,100 square kilometers. Home to the endangered Irrawaddy dolphins and a haven for migratory birds, the lake offers boat rides to witness flamingos, white-bellied sea eagles, and over 160 species of birds during winter months.",
    highlights: [
      "Asia's largest brackish water lagoon",
      "Home to Irrawaddy dolphins",
      "160+ migratory bird species in winter",
      "Kalijai Temple on an island",
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    distance: "50km from Victoria Grand",
    timing: "6:00 AM - 5:00 PM (boat rides)",
    mustSee: false,
  },
  {
    id: "beach",
    title: "Puri Beach",
    subtitle: "Golden Sands",
    description:
      "The golden beach of Puri stretches along the Bay of Bengal, offering spectacular sunrises and a unique cultural experience. Traditional fishing boats dot the shoreline, while the beach comes alive with sand artists, local vendors, and evening cultural performances. The annual Puri Beach Festival showcases Odisha's art and culture.",
    highlights: [
      "Spectacular sunrise views",
      "Famous sand art displays",
      "Traditional fishing culture",
      "Annual Beach Festival venue",
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
    distance: "1km from Victoria Grand",
    timing: "Open 24 hours",
    mustSee: false,
  },
];

export function HeritageAttractions() {
  return (
    <section className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-right"
        color="#c1893e"
        size="lg"
        className="top-6 right-6 md:top-8 md:right-8 opacity-30 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-left"
        color="#c1893e"
        size="lg"
        className="bottom-6 left-6 md:bottom-8 md:left-8 opacity-30 hidden md:block"
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Must-Visit Destinations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mt-4">
            Sacred Sites &
            <span className="text-ochre block mt-2">Natural Wonders</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-cream/70 leading-relaxed">
            From ancient temples to pristine natural landscapes, discover the
            treasures that make Puri a destination unlike any other.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="space-y-20">
          {attractions.map((attraction, index) => (
            <div
              key={attraction.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-4/3 overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={attraction.image}
                  alt={attraction.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-olive-dark/20" />

                {/* Must See Badge */}
                {attraction.mustSee && (
                  <div className="absolute top-6 left-6 bg-ochre px-4 py-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="font-sans text-xs tracking-wider uppercase text-white">
                      Must Visit
                    </span>
                  </div>
                )}

                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-ochre/30 pointer-events-none" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-ochre">
                  {attraction.subtitle}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-cream mt-3 mb-4">
                  {attraction.title}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2 text-cream/60">
                    <MapPin className="w-4 h-4 text-ochre" />
                    <span className="font-sans text-sm">{attraction.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream/60">
                    <Clock className="w-4 h-4 text-ochre" />
                    <span className="font-sans text-sm">{attraction.timing}</span>
                  </div>
                </div>

                <p className="font-sans text-cream/70 leading-relaxed mb-6">
                  {attraction.description}
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {attraction.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-ochre rotate-45 mt-2 flex-shrink-0" />
                      <span className="font-sans text-sm text-cream/60">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="bg-ochre hover:bg-ochre-light text-white font-sans tracking-wider uppercase px-8 py-6">
                  Plan Your Visit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
