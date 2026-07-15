"use client";

import Image from "next/image";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

export function OurStory() {
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

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=640"
                alt="Victoria Grand Heritage"
                fill
                className="object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/30 to-transparent" />
            </div>
            
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-ochre text-white p-6 md:p-8 max-w-[200px]">
              <span className="font-serif text-4xl md:text-5xl block">2015</span>
              <span className="font-sans text-sm tracking-wider uppercase mt-2 block opacity-90">
                Year Established
              </span>
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-olive/20 -z-10" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
              Our Story
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-olive-dark mt-4 mb-6 text-balance">
              A Hotel Rooted in the
              <span className="text-ochre block">Soul of Puri</span>
            </h2>
            
            <RoyalDivider color="#c1893e" className="justify-start my-6" />
            
            <div className="space-y-6 font-sans text-lg text-olive/80 leading-relaxed text-balance">
              <p>
                Hotel Victoria Grand stands proudly on Chandan Hazuri Road, in front of the Ramakrishna Ashram, near Sanskrit University, in one of Puri's most spiritually charged neighbourhoods. Our founders envisioned a place that would offer not merely a bed for the night, but a genuine experience of Puri: its warmth, its devotion, its culture and its beauty.
              </p>
              
              <p>
                With 36 thoughtfully designed rooms, a rooftop restaurant, a full-scale banquet hall and a host of personalised services, we have created a space where every guest feels honoured. Whether you arrive seeking the blessings of Lord Jagannath or the peace of the sea, we welcome you with open arms and a spirit of heartfelt hospitality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
