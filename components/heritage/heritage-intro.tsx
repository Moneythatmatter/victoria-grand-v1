"use client";

import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

export function HeritageIntro() {
  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-left"
        color="#767545"
        size="lg"
        className="top-6 left-6 md:top-8 md:left-8 opacity-15 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#767545"
        size="lg"
        className="bottom-6 right-6 md:bottom-8 md:right-8 opacity-15 hidden md:block"
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
              The Soul of Odisha
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-olive-dark mt-4 mb-6">
              A Land of Divine
              <span className="text-ochre block mt-2">Blessings</span>
            </h2>

            <RoyalDivider color="#c1893e" className="my-8 justify-start" />

            <div className="space-y-6 font-sans text-olive/80 leading-relaxed">
              <p>
                Puri, one of the four sacred Char Dham pilgrimage sites, has
                been a beacon of spirituality for over a thousand years. The
                city{"'"}s soul resides in the magnificent Jagannath Temple, where
                Lord Jagannath, along with his siblings Balabhadra and Subhadra,
                are worshipped with devotion that transcends all boundaries.
              </p>
              <p>
                Beyond its spiritual significance, Puri is a treasure trove of
                art, architecture, and natural beauty. From the golden beaches
                kissed by the Bay of Bengal to the architectural marvel of
                Konark{"'"}s Sun Temple, every corner tells a story of devotion,
                creativity, and timeless tradition.
              </p>
              <p>
                At Victoria Grand, we are privileged to be your gateway to this
                sacred land. Our concierge services ensure you experience the
                authentic essence of Puri—from arranging special darshan at
                temples to guiding you through artisan villages where centuries-old
                crafts come alive.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-olive-dark p-8 text-center">
              <span className="font-serif text-5xl md:text-6xl text-ochre block">
                12th
              </span>
              <span className="font-sans text-sm tracking-wider uppercase text-cream/80 mt-2 block">
                Century Temple
              </span>
            </div>
            <div className="bg-ochre p-8 text-center">
              <span className="font-serif text-5xl md:text-6xl text-white block">
                4
              </span>
              <span className="font-sans text-sm tracking-wider uppercase text-white/80 mt-2 block">
                Char Dham Site
              </span>
            </div>
            <div className="bg-ochre-light/20 border border-ochre/30 p-8 text-center">
              <span className="font-serif text-5xl md:text-6xl text-olive-dark block">
                3
              </span>
              <span className="font-sans text-sm tracking-wider uppercase text-olive/80 mt-2 block">
                UNESCO Sites Nearby
              </span>
            </div>
            <div className="bg-olive/10 border border-olive/20 p-8 text-center">
              <span className="font-serif text-5xl md:text-6xl text-olive-dark block">
                900+
              </span>
              <span className="font-sans text-sm tracking-wider uppercase text-olive/80 mt-2 block">
                Years of Craft Heritage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
