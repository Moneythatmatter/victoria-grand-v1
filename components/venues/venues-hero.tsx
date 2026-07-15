"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function VenuesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098"
          alt="Victoria Grand Venues"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-olive-dark/70" />
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-8 md:inset-16 border border-ochre/20 pointer-events-none" />

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 md:top-16 md:left-16 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-ochre/50" />
      <div className="absolute top-8 right-8 md:top-16 md:right-16 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-ochre/50" />
      <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-ochre/50" />
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-ochre/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-24">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm mb-8">
          <Link
            href="/"
            className="text-cream/60 hover:text-ochre transition-colors font-sans tracking-wide"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-cream/40" />
          <span className="text-ochre font-sans tracking-wide">Venues</span>
        </nav>

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

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
          Our <span className="text-ochre">Venues</span>
        </h1>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="w-16 h-px bg-ochre/40" />
          <div className="w-2 h-2 rotate-45 border border-ochre" />
          <div className="w-16 h-px bg-ochre/40" />
        </div>

        {/* Subtitle */}
        <p className="font-sans text-lg md:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
          Discover our exquisite event spaces designed to make your celebrations
          truly memorable
        </p>
      </div>
    </section>
  );
}
