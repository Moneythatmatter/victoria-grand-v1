"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RoyalCornerOrnament } from "@/components/royal-corner-ornament";
import {
   DecorativeFrame,
   heroFrameSideClass,
   heroFrameTopClass,
} from "@/components/decorative-frame";

export function DiningHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
          alt="Fine dining restaurant interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-olive-dark/70" />
      </div>

      <DecorativeFrame clearHeader />

      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-left"
        color="#c1893e"
        size="lg"
        className={cn(heroFrameTopClass, heroFrameSideClass, "opacity-60")}
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#c1893e"
        size="lg"
        className="bottom-4 right-4 md:bottom-12 md:right-12 opacity-60"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-6">
          <Link
            href="/"
            className="font-sans text-sm tracking-wider text-cream/70 hover:text-ochre transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-ochre/50" />
          <span className="font-sans text-sm tracking-wider text-ochre">
            Dining
          </span>
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

        <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
          Culinary Excellence
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mt-4 text-balance">
          A Feast for <span className="text-ochre gold-shimmer">All Senses</span>
        </h1>
        <p className="font-sans text-cream/80 mt-6 max-w-2xl mx-auto leading-relaxed">
          Experience the finest flavors of Odisha and beyond at our exquisite
          dining venues, where every meal is crafted with passion and served
          with royal hospitality.
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-16 h-px bg-ochre/40" />
          <div className="w-2 h-2 rotate-45 border border-ochre" />
          <div className="w-16 h-px bg-ochre/40" />
        </div>
      </div>
    </section>
  );
}
