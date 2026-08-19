"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament } from "@/components/royal-corner-ornament";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site-contact";

export function VenuesCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098"
          alt="Victoria Grand Venues"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-olive-dark/85" />
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-8 md:inset-16 border border-ochre/20 pointer-events-none" />

      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-left"
        color="#c1893e"
        size="lg"
        className="top-4 left-4 md:top-10 md:left-10 opacity-40 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#c1893e"
        size="lg"
        className="bottom-4 right-4 md:bottom-10 md:right-10 opacity-40 hidden md:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Crown Icon */}
          <div className="flex justify-center mb-6">
            <svg viewBox="0 0 64 64" className="w-12 h-12 text-ochre">
              <g fill="currentColor">
                <path d="M12 44h40v6H12z" opacity="0.9" />
                <path d="M8 24l8 16h32l8-16-10 8-6-12-8 10-8-10-6 12-10-8z" />
                <circle cx="32" cy="20" r="3" />
                <circle cx="20" cy="28" r="2" />
                <circle cx="44" cy="28" r="2" />
              </g>
            </svg>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
            Ready to Plan Your{" "}
            <span className="text-ochre">Special Event?</span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-16 h-px bg-ochre/40" />
            <div className="w-2 h-2 rotate-45 border border-ochre" />
            <div className="w-16 h-px bg-ochre/40" />
          </div>

          {/* Description */}
          <p className="font-sans text-lg text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our dedicated events team is ready to help you create an
            unforgettable experience. From intimate gatherings to grand
            celebrations, we bring your vision to life with impeccable attention
            to detail.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-8 py-6 min-w-[200px]">
              <Calendar className="w-4 h-4 mr-2" />
              Request Proposal
            </Button>
            <Button
              variant="outline"
              className="border-cream/30 text-gray-600  hover:bg-cream hover:text-olive-dark font-sans tracking-widest uppercase px-8 py-6 min-w-[200px]"
            >
              Schedule Visit
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-cream/10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-ochre/10 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-ochre" />
              </div>
              <span className="font-sans text-xs tracking-widest uppercase text-cream/60 mb-2">
                Events Desk
              </span>
              <a
                href={SITE_PHONE_HREF}
                className="font-serif text-lg text-cream hover:text-ochre transition-colors duration-300"
              >
                {SITE_PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-ochre/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-ochre" />
              </div>
              <span className="font-sans text-xs tracking-widest uppercase text-cream/60 mb-2">
                Email Us
              </span>
              <a
                href="mailto:info@hotelvictoriagrand.com"
                className="font-serif text-lg text-cream hover:text-ochre transition-colors duration-300"
              >
                info@hotelvictoriagrand.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-ochre/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-ochre" />
              </div>
              <span className="font-sans text-xs tracking-widest uppercase text-cream/60 mb-2">
                Visit Us
              </span>
              <span className="font-serif text-lg text-cream text-center">
                Near Jagannath Temple, Puri
              </span>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 inline-flex items-center gap-3 bg-cream/5 px-6 py-3 border border-cream/10">
            <svg
              className="w-5 h-5 text-ochre"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-sans text-sm text-cream/80">
              <span className="text-ochre font-medium">500+</span> successful
              events hosted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
