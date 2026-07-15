"use client";

export function HeritageHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-olive-dark/60" />

      {/* Decorative Frame */}
      <div className="absolute inset-8 md:inset-16 border border-ochre/20 pointer-events-none" />

      {/* Simple Corner Accents */}
      <div className="absolute top-8 left-8 md:top-16 md:left-16 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-ochre/50" />
      <div className="absolute top-8 right-8 md:top-16 md:right-16 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-ochre/50" />
      <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-ochre/50" />
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-ochre/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-32">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center justify-center gap-2 text-cream/60 font-sans text-sm tracking-wide">
            <li>
              <a href="/" className="hover:text-ochre transition-colors">
                Home
              </a>
            </li>
            <li className="text-ochre">/</li>
            <li className="text-cream">Heritage</li>
          </ol>
        </nav>

        {/* Temple Icon */}
        <div className="flex justify-center mb-6">
          <svg viewBox="0 0 64 64" className="w-14 h-14 text-ochre">
            <g fill="currentColor">
              {/* Temple Base */}
              <rect x="8" y="52" width="48" height="6" opacity="0.9" />
              <rect x="12" y="46" width="40" height="6" opacity="0.8" />
              {/* Temple Body */}
              <rect x="16" y="28" width="32" height="18" opacity="0.7" />
              {/* Temple Pillars */}
              <rect x="20" y="32" width="4" height="14" />
              <rect x="30" y="32" width="4" height="14" />
              <rect x="40" y="32" width="4" height="14" />
              {/* Temple Dome */}
              <path d="M32 8 L48 28 L16 28 Z" />
              {/* Kalash (Top) */}
              <circle cx="32" cy="6" r="3" />
            </g>
          </svg>
        </div>

        <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-light block mb-4">
          Discover Puri
        </span>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6 text-balance">
          Sacred Journeys &
          <span className="block text-ochre mt-2">Cultural Treasures</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
          Puri is more than a destination—it{"'"}s a spiritual experience
          spanning millennia. Explore ancient temples, traditional crafts, and
          natural wonders that have drawn pilgrims and travelers for centuries.
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="w-16 h-px bg-ochre/40" />
          <div className="w-2 h-2 rotate-45 border border-ochre" />
          <div className="w-16 h-px bg-ochre/40" />
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-ochre/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
