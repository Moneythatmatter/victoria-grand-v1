"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament } from "@/components/royal-corner-ornament";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site-contact";

export function AboutCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1600')`,
        }}
      />
      
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
          
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre block mb-4">
            Begin Your Journey
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-6 text-balance">
            Come, Experience It
            <span className="text-ochre block mt-2">for Yourself</span>
          </h2>
          
          <p className="font-sans text-lg text-cream/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're planning a spiritual pilgrimage, a family vacation, or a grand celebration, we're here to make your stay unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              className="bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-12 py-7 text-sm shadow-xl btn-shimmer group"
            >
              <Link href="/#contact">
                Book a Room
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-2 border-cream/50 text-cream hover:bg-white hover:text-olive-dark font-sans tracking-widest uppercase px-12 py-7 text-sm shadow-xl transition-all"
            >
              <Link href="/#contact">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 pt-10 border-t border-cream/10">
            <a
              href={SITE_PHONE_HREF}
              className="flex items-center justify-center gap-3 text-cream/70 hover:text-ochre transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-sans">{SITE_PHONE_DISPLAY}</span>
            </a>
            
            <a
              href="mailto:info@hotelvictoriagrand.com"
              className="flex items-center justify-center gap-3 text-cream/70 hover:text-ochre transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-sans">info@hotelvictoriagrand.com</span>
            </a>
            
            <div className="flex items-center justify-center gap-3 text-cream/70">
              <MapPin className="w-5 h-5" />
              <span className="font-sans">Near Jagannath Temple, Puri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
