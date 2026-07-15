"use client";

import { Crown } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-olive-dark/20 to-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              #767545 10px,
              #767545 20px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 md:mb-12">
          <a href="/" className="text-olive hover:text-ochre transition-colors text-sm">
            Home
          </a>
          <span className="text-olive/40">/</span>
          <span className="text-olive font-sans font-semibold text-sm">Blog</span>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Crown Icon */}
          <div className="flex justify-center mb-6">
            <Crown className="w-12 h-12 md:w-16 md:h-16 text-ochre" strokeWidth={1.5} />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-olive-dark mb-4 md:mb-6">
            <span className="text-balance">
              Stories from the
              <br />
              <span className="text-ochre">Heart of Puri</span>
            </span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-olive/80 max-w-2xl mx-auto text-balance leading-relaxed">
            Discover insights, stories, and experiences that celebrate the culture, heritage, and luxury of Victoria Grand
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8 md:mt-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-ochre/40" />
            <div className="w-2 h-2 rotate-45 border border-ochre/60" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-ochre/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
