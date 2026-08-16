"use client";

import { DecorativeFrame } from "@/components/decorative-frame";

export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-olive-dark/70" />
      
      <DecorativeFrame clearHeader />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 py-32">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center justify-center gap-2 text-cream/60 font-sans text-sm tracking-wide">
            <li>
              <a href="/" className="hover:text-ochre transition-colors">Home</a>
            </li>
            <li className="text-ochre">/</li>
            <li className="text-cream">Contact Us</li>
          </ol>
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
        
        <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-light block mb-4">
          Get In Touch
        </span>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-balance">
          Contact Us
        </h1>
        
        <p className="font-sans text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
          We would love to hear from you. Reach out for reservations, inquiries, or to plan your perfect stay.
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
