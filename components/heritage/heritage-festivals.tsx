"use client";

import Image from "next/image";
import { Calendar, Users, MapPin } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";
import { RATH_YATRA_IMAGE, KONARK_DANCE_FESTIVAL_IMAGE, PURI_BEACH_FESTIVAL_IMAGE, CHANDAN_YATRA_IMAGE } from "@/lib/heritage-images";

const festivals = [
  {
    name: "Rath Yatra",
    subtitle: "The Grand Chariot Festival",
    description:
      "The world-famous Rath Yatra, or Chariot Festival, sees millions of devotees pulling massive wooden chariots carrying the deities from Jagannath Temple to Gundicha Temple. This ancient festival, dating back centuries, is a spectacular display of devotion and cultural heritage.",
    timing: "June/July (Ashadha Shukla Dwitiya)",
    duration: "9 days",
    image: RATH_YATRA_IMAGE,
    highlight: "Millions of Devotees",
  },
  {
    name: "Konark Dance Festival",
    subtitle: "Classical Dance Extravaganza",
    description:
      "Set against the stunning backdrop of the Konark Sun Temple, this five-day festival showcases India's finest classical dance forms including Odissi, Bharatanatyam, Kathak, and Manipuri. Artists from across the country perform under the starlit sky.",
    timing: "December 1-5",
    duration: "5 days",
    image: KONARK_DANCE_FESTIVAL_IMAGE,
    highlight: "At Sun Temple",
  },
  {
    name: "Puri Beach Festival",
    subtitle: "Cultural Carnival",
    description:
      "A vibrant celebration of Odisha's art, culture, and traditions held annually on the golden sands of Puri Beach. The festival features sand art competitions, folk performances, handicraft exhibitions, and local culinary delights.",
    timing: "November",
    duration: "5 days",
    image: PURI_BEACH_FESTIVAL_IMAGE,
    highlight: "Sand Art Competition",
  },
  {
    name: "Chandan Yatra",
    subtitle: "Sandalwood Festival",
    description:
      "During the scorching summer, the deities are adorned with cooling sandalwood paste and taken on ceremonial boat rides in the Narendra Tank. This 42-day festival provides relief to the deities from summer heat.",
    timing: "May/June (Akshaya Tritiya)",
    duration: "42 days",
    image: CHANDAN_YATRA_IMAGE,
    highlight: "Ceremonial Boat Ride",
  },
];

export function HeritageFestivals() {
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
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
            Celebrations & Traditions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mt-4">
            Festivals of
            <span className="text-ochre block mt-2">Faith & Joy</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-olive/70 leading-relaxed">
            Experience the vibrant festivals that bring Puri alive throughout the year,
            each celebrating centuries of spiritual tradition and cultural heritage.
          </p>
        </div>

        {/* Festivals Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {festivals.map((festival, index) => (
            <div
              key={festival.name}
              className="group bg-white border border-olive/10 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={festival.image}
                  alt={festival.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-olive-dark/40 group-hover:bg-olive-dark/20 transition-colors duration-500" />

                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 bg-ochre px-4 py-2">
                  <span className="font-sans text-xs tracking-wider uppercase text-white">
                    {festival.highlight}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-ochre-dark">
                  {festival.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-olive-dark mt-2 mb-4 group-hover:text-ochre transition-colors">
                  {festival.name}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-olive/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-ochre" />
                    <span className="font-sans text-sm">{festival.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-ochre" />
                    <span className="font-sans text-sm">{festival.duration}</span>
                  </div>
                </div>

                <p className="font-sans text-olive/70 leading-relaxed">
                  {festival.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-ochre/10 border border-ochre/20 px-6 py-4">
            <Calendar className="w-5 h-5 text-ochre" />
            <p className="font-sans text-sm text-olive/80">
              Planning to visit during a festival? Contact our concierge for special
              arrangements and the best viewing spots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
