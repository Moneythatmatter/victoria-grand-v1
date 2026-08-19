"use client";

import { Phone, Mail, MapPin, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";
import { JAGANNATH_TEMPLE_IMAGE } from "@/lib/heritage-images";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site-contact";

export function HeritageCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('${JAGANNATH_TEMPLE_IMAGE}')`,
        }}
      />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #c1893e 0px,
              #c1893e 1px,
              transparent 1px,
              transparent 30px
            )`,
          }}
        />
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-8 md:inset-16 border border-ochre/20 pointer-events-none" />

      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-right"
        color="#c1893e"
        size="lg"
        className="top-6 right-6 md:top-10 md:right-10 opacity-35 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-left"
        color="#c1893e"
        size="lg"
        className="bottom-6 left-6 md:bottom-10 md:left-10 opacity-35 hidden md:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-ochre/20 mb-8">
            <Compass className="w-10 h-10 text-ochre" />
          </div>

          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre block mb-4">
            Your Gateway to Puri{"'"}s Heritage
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6 text-balance">
            Begin Your Sacred Journey
          </h2>

          <RoyalDivider color="#c1893e" className="my-8" />

          <p className="font-sans text-lg text-cream/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Let Victoria Grand be your home as you explore the spiritual and cultural
            wonders of Puri. Our concierge team specializes in crafting personalized
            heritage experiences, from temple visits to artisan encounters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-ochre hover:bg-ochre-light text-white font-sans tracking-wider uppercase px-10 py-7"
            >
              Book Your Stay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10 font-sans tracking-wider uppercase px-10 py-7"
            >
              Plan Heritage Tour
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 pt-10 border-t border-cream/10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-ochre/20 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-ochre" />
              </div>
              <span className="font-sans text-xs tracking-wider uppercase text-cream/50 mb-2">
                Concierge Desk
              </span>
              <a
                href={SITE_PHONE_HREF}
                className="font-sans text-cream hover:text-ochre transition-colors"
              >
                {SITE_PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-ochre/20 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-ochre" />
              </div>
              <span className="font-sans text-xs tracking-wider uppercase text-cream/50 mb-2">
                Heritage Tours
              </span>
              <a
                href="mailto:info@hotelvictoriagrand.com"
                className="font-sans text-cream hover:text-ochre transition-colors"
              >
                info@hotelvictoriagrand.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-ochre/20 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-ochre" />
              </div>
              <span className="font-sans text-xs tracking-wider uppercase text-cream/50 mb-2">
                Location
              </span>
              <span className="font-sans text-cream text-center">
          1km from Jagannath Temple
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
