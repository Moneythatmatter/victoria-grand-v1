"use client";

import Image from "next/image";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament } from "@/components/royal-corner-ornament";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site-contact";

export function DiningCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070"
          alt="Fine dining table setting"
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
        className="top-4 left-4 md:top-12 md:left-12 opacity-50"
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#c1893e"
        size="lg"
        className="bottom-4 right-4 md:bottom-12 md:right-12 opacity-50"
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

          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Reserve Your Table
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mt-4 text-balance">
            Begin Your Culinary
            <span className="text-ochre block mt-2">Journey Today</span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-px bg-ochre/40" />
            <div className="w-2 h-2 rotate-45 border border-ochre" />
            <div className="w-16 h-px bg-ochre/40" />
          </div>

          <p className="font-sans text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether it is an intimate dinner, a celebration, or a business gathering,
            our culinary team is ready to create an unforgettable dining experience
            tailored to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-8 py-6 btn-shimmer group">
              Reserve a Table
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-cream/40 text-cream hover:bg-cream hover:text-olive-dark font-sans tracking-widest uppercase px-8 py-6"
            >
              View Full Menu
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-cream/10">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-ochre/20 rounded-full">
                <Phone className="w-5 h-5 text-ochre" />
              </div>
              <div className="text-center">
                <p className="font-sans text-cream/60 text-sm">Reservations</p>
                <a
                  href={SITE_PHONE_HREF}
                  className="font-sans text-cream hover:text-ochre transition-colors"
                >
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-ochre/20 rounded-full">
                <Mail className="w-5 h-5 text-ochre" />
              </div>
              <div className="text-center">
                <p className="font-sans text-cream/60 text-sm">Email Us</p>
                <a
                  href="mailto:dining@hotelvictoriagrand.com"
                  className="font-sans text-cream hover:text-ochre transition-colors"
                >
                  dining@hotelvictoriagrand.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-ochre/20 rounded-full">
                <Clock className="w-5 h-5 text-ochre" />
              </div>
              <div className="text-center">
                <p className="font-sans text-cream/60 text-sm">Hours</p>
                <p className="font-sans text-cream">7:30 AM - 11:00 PM</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-ochre/20 rounded-full">
                <MapPin className="w-5 h-5 text-ochre" />
              </div>
              <div className="text-center">
                <p className="font-sans text-cream/60 text-sm">Location</p>
                <p className="font-sans text-cream">Near Jagannath Temple, Puri</p>
              </div>
            </div>
          </div>

          {/* Special Note */}
          <div className="mt-12 p-6 bg-cream/5 border border-cream/10">
            <p className="font-sans text-cream/80 text-sm">
              <span className="text-ochre font-medium">Special Occasions?</span> We offer
              private dining arrangements, customized menus, and catering services.
              Contact us to discuss your requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
