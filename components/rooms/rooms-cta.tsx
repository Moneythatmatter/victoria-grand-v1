"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament } from "@/components/royal-corner-ornament";

export function RoomsCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
          alt="Victoria Grand Hotel"
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Crown Icon */}
            <div className="flex justify-center lg:justify-start mb-6">
              <svg viewBox="0 0 64 64" className="w-10 h-10 text-ochre">
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
              Reserve Your Stay
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mt-4 text-balance">
              Ready for a{" "}
              <span className="text-ochre gold-shimmer">Royal Experience?</span>
            </h2>
            <p className="font-sans text-cream/70 mt-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Book your stay at Victoria Grand and immerse yourself in the perfect
              blend of heritage charm and modern luxury. Our team is ready to create
              an unforgettable experience for you.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <Button className="bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-8 py-6 btn-shimmer">
                Book Direct
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  className="border-cream/30 text-cream hover:bg-cream/10 hover:border-cream font-sans tracking-widest uppercase px-8 py-6"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Best Rate Guarantee */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-ochre/20 border border-ochre/30">
              <svg
                className="w-5 h-5 text-ochre"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-sans text-sm text-cream">
                Best Rate Guarantee when you book direct
              </span>
            </div>
          </div>

          {/* Right - Contact Card */}
          <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 p-8 md:p-10">
            <h3 className="font-serif text-2xl text-cream mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-ochre/20 group-hover:bg-ochre/30 transition-colors">
                  <Phone className="w-5 h-5 text-ochre" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-wider uppercase text-cream/60">
                    Reservations
                  </p>
                  <p className="font-sans text-cream group-hover:text-ochre transition-colors">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              <a
                href="mailto:reservations@victoriagrand.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-ochre/20 group-hover:bg-ochre/30 transition-colors">
                  <Mail className="w-5 h-5 text-ochre" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-wider uppercase text-cream/60">
                    Email
                  </p>
                  <p className="font-sans text-cream group-hover:text-ochre transition-colors">
                    reservations@victoriagrand.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-ochre/20">
                  <MapPin className="w-5 h-5 text-ochre" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-wider uppercase text-cream/60">
                    Location
                  </p>
                  <p className="font-sans text-cream">
                    Grand Road, Near Jagannath Temple
                    <br />
                    Puri, Odisha 752001
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-8">
              <div className="flex-1 h-px bg-cream/20" />
              <div className="w-1.5 h-1.5 rotate-45 bg-ochre/60" />
              <div className="flex-1 h-px bg-cream/20" />
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="font-sans text-sm text-cream/70 hover:text-ochre transition-colors"
              >
                About Us
              </Link>
              <span className="text-cream/30">|</span>
              <Link
                href="/#dining"
                className="font-sans text-sm text-cream/70 hover:text-ochre transition-colors"
              >
                Dining
              </Link>
              <span className="text-cream/30">|</span>
              <Link
                href="/#venues"
                className="font-sans text-sm text-cream/70 hover:text-ochre transition-colors"
              >
                Events
              </Link>
              <span className="text-cream/30">|</span>
              <Link
                href="/#heritage"
                className="font-sans text-sm text-cream/70 hover:text-ochre transition-colors"
              >
                Heritage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
