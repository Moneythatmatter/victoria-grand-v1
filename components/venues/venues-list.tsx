"use client";

import Image from "next/image";
import { Users, Sparkles, Check, Maximize, Theater, UsersRound, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const venues = [
  {
    id: "banquet-hall",
    icon: Users,
    name: "Grand Celebration Hall",
    tagline: "Where Grand Celebrations Come to Life",
    category: "Conferences & Parties",
    description:
      "Our magnificent Grand Celebration Hall is the crown jewel of Victoria Grand, designed to host your most prestigious events with unmatched elegance. Whether you're planning a lavish wedding reception, an important corporate conference, or an intimate private gathering, this versatile space adapts to your vision while maintaining its regal charm.",
    longDescription:
      "Park yourself here for a leisurely private party, Birthday Function, Ring Ceremony and Conference. The hall features state-of-the-art audiovisual equipment, customizable lighting to match your event theme, and a dedicated entrance for VIP guests. Our experienced event coordinators work closely with you to ensure every detail is perfect.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
    secondaryImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
    capacity: "150 Guests",
    area: "1800 Sqft",
    configurations: [
      { icon: Theater, name: "Theatre Style", capacity: "150 Pax" },
      { icon: LayoutGrid, name: "U-Shape", capacity: "50 Pax" },
      { icon: UsersRound, name: "Cluster", capacity: "75 Pax" },
    ],
    features: [
      "State-of-the-art Sound System",
      "HD Projector & Screen",
      "Customizable LED Lighting",
      "Climate Control",
      "Private Entrance",
      "Dedicated Restrooms",
      "Bridal Suite Access",
      "In-house Catering",
    ],
    idealFor: [
      "Wedding Receptions",
      "Corporate Conferences",
      "Birthday Celebrations",
      "Ring Ceremonies",
      "Annual Functions",
      "Product Launches",
    ],
  },
  {
    id: "swimming-pool",
    icon: Sparkles,
    name: "Infinity pool",
    tagline: "Your Oasis of Relaxation",
    category: "Outdoor Leisure",
    description:
      "Escape to our pristine swimming pool area, a tranquil haven designed for relaxation and rejuvenation. Whether you prefer an invigorating morning swim, a leisurely afternoon by the water, or a romantic poolside evening, our beautifully maintained pool offers the perfect setting.",
    longDescription:
      "The pool area features comfortable loungers, shaded cabanas, and attentive poolside service. Our trained lifeguards ensure your safety while you enjoy the crystal-clear waters. The area can also be reserved for private pool parties and intimate gatherings, making it a versatile space for both relaxation and celebration.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2070",
    secondaryImage: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070",
    capacity: "40 Guests",
    area: "900 Sqft",
    configurations: [
      { icon: Users, name: "Poolside Party", capacity: "50 Pax" },
      { icon: UsersRound, name: "Private Event", capacity: "25 Pax" },
    ],
    features: [
      "Crystal Clear Waters",
      "Comfortable Loungers",
      "Poolside Service",
      "Pool Attendant",
      "Towel Service",
      "Baby Pool",
      "Poolside Bed",
      
    ],
    idealFor: [
      "Morning Swimming",
      "Leisure Relaxation",
      "Pool Parties",
      "Private Gatherings",
      "Family Time",
    ],
  },
];

export function VenuesList() {
  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Royal Corner Ornaments */}
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Events & Celebrations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-olive-dark mt-4 text-balance">
            Venues Fit for <span className="text-ochre">Royalty</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-olive/80 leading-relaxed">
          From corporate retreats to spiritual discourses and, our versatile venues provide the perfect backdrop for your most important occasions.
          </p>
        </div>

        {/* Venues */}
        <div className="space-y-32">
          {venues.map((venue, index) => (
            <div
              key={venue.id}
              id={venue.id}
              className="scroll-mt-24"
            >
              {/* Venue Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-ochre/10 flex items-center justify-center">
                  <venue.icon className="w-6 h-6 text-ochre" />
                </div>
                <div>
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-ochre">
                    {venue.category}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-olive-dark">
                    {venue.name}
                  </h3>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className={`grid lg:grid-cols-2 gap-12 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Images */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  {/* Main Image */}
                  <div className="relative aspect-4/3 group">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-olive-dark/20 group-hover:bg-olive-dark/10 transition-colors duration-500" />
                    
                    {/* Capacity Badge */}
                    <div className="absolute top-4 left-4 bg-ochre px-4 py-2">
                      <span className="font-sans text-sm tracking-wider uppercase text-white">
                        {venue.capacity}
                      </span>
                    </div>
                    
                    {/* Area Badge */}
                    <div className="absolute bottom-4 right-4 bg-olive-dark/80 backdrop-blur-sm px-4 py-2">
                      <div className="flex items-center gap-2">
                        <Maximize className="w-4 h-4 text-ochre" />
                        <span className="font-serif text-lg text-cream">
                          {venue.area}
                        </span>
                      </div>
                    </div>

                    {/* Decorative Frame */}
                    <div className="absolute inset-4 border border-ochre/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Secondary Image */}
                  <div className="relative aspect-video group">
                    <Image
                      src={venue.secondaryImage}
                      alt={`${venue.name} interior`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-olive-dark/20 group-hover:bg-olive-dark/10 transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  {/* Tagline */}
                  <p className="font-serif text-2xl text-ochre italic">
                    &ldquo;{venue.tagline}&rdquo;
                  </p>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="font-sans text-olive/80 leading-relaxed">
                      {venue.description}
                    </p>
                    <p className="font-sans text-olive/70 leading-relaxed">
                      {venue.longDescription}
                    </p>
                  </div>

                  {/* Configurations */}
                  <div>
                    <h4 className="font-serif text-xl text-olive-dark mb-4">
                      Seating Configurations
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {venue.configurations.map((config) => (
                        <div
                          key={config.name}
                          className="bg-cream-dark p-4 text-center border border-olive/10 hover:border-ochre/30 transition-colors duration-300"
                        >
                          <config.icon className="w-6 h-6 text-ochre mx-auto mb-2" />
                          <span className="font-sans text-xs tracking-wide uppercase text-olive/60 block">
                            {config.name}
                          </span>
                          <span className="font-serif text-lg text-olive-dark">
                            {config.capacity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-serif text-xl text-olive-dark mb-4">
                      Features & Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {venue.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2"
                        >
                          <Check className="w-4 h-4 text-ochre flex-shrink-0" />
                          <span className="font-sans text-sm text-olive/70">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <h4 className="font-serif text-xl text-olive-dark mb-4">
                      Ideal For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {venue.idealFor.map((item) => (
                        <span
                          key={item}
                          className="px-4 py-2 bg-ochre/10 text-ochre font-sans text-sm tracking-wide"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-8 py-6">
                      Enquire Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-olive/30 text-olive-dark hover:bg-olive-dark hover:text-cream font-sans tracking-widest uppercase px-8 py-6"
                    >
                      Schedule a Visit
                    </Button>
                  </div>
                </div>
              </div>

              {/* Divider between venues */}
              {index < venues.length - 1 && (
                <div className="mt-24">
                  <RoyalDivider color="#767545" className="opacity-30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
