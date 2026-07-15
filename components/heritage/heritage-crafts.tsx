"use client";

import Image from "next/image";
import { MapPin, Palette, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const crafts = [
  {
    name: "Applique Art of Pipili",
    origin: "Pipili, 25km from Puri",
    description:
      "This 900-year-old craft tradition involves creating vibrant fabric art using colorful cloth pieces stitched together to form intricate patterns. Originally used to decorate temple chariots and canopies, today it adorns everything from lampshades to wall hangings.",
    speciality: "Temple chariot decorations, garden umbrellas, wall hangings",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032",
    tag: "GI Tagged",
  },
  {
    name: "Pattachitra Paintings",
    origin: "Raghurajpur, 12km from Puri",
    description:
      "Ancient scroll paintings depicting mythological narratives, particularly stories of Lord Jagannath. Artists use natural colors and intricate detailing on specially treated cloth or dried palm leaves, following techniques passed down through generations.",
    speciality: "Mythological paintings, palm leaf engravings, playing cards",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2045",
    tag: "Heritage Craft",
  },
  {
    name: "Silver Filigree",
    origin: "Cuttack, 80km from Puri",
    description:
      "Delicate silver threads are twisted and woven into intricate jewelry and decorative items. This painstaking craft, known locally as 'Tarakasi', creates stunning pieces that resemble fine lacework in silver, a specialty of Odisha for centuries.",
    speciality: "Jewelry, decorative items, temple ornaments",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070",
    tag: "Royal Craft",
  },
  {
    name: "Stone Carving",
    origin: "Puri & Konark region",
    description:
      "The same tradition that created the magnificent Konark Sun Temple continues today. Skilled artisans carve intricate sculptures, deities, and decorative pieces from locally sourced stone, keeping alive an ancient art form.",
    speciality: "Temple sculptures, deity idols, decorative items",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2069",
    tag: "Temple Art",
  },
];

export function HeritageCrafts() {
  return (
    <section className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-right"
        color="#c1893e"
        size="lg"
        className="top-6 right-6 md:top-8 md:right-8 opacity-30 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-left"
        color="#c1893e"
        size="lg"
        className="bottom-6 left-6 md:bottom-8 md:left-8 opacity-30 hidden md:block"
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Artisan Heritage
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mt-4">
            Living Crafts &
            <span className="text-ochre block mt-2">Timeless Traditions</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-cream/70 leading-relaxed">
            Discover the exquisite handicrafts of Odisha, where skilled artisans
            continue traditions that have flourished for centuries.
          </p>
        </div>

        {/* Crafts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {crafts.map((craft, index) => (
            <div
              key={craft.name}
              className="group flex flex-col md:flex-row bg-cream/5 border border-cream/10 overflow-hidden hover:border-ochre/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden flex-shrink-0">
                <Image
                  src={craft.image}
                  alt={craft.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-olive-dark/30 group-hover:bg-olive-dark/10 transition-colors duration-500" />

                {/* Tag Badge */}
                <div className="absolute top-4 left-4 bg-ochre px-3 py-1">
                  <span className="font-sans text-xs tracking-wider uppercase text-white">
                    {craft.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="font-serif text-xl md:text-2xl text-cream group-hover:text-ochre transition-colors mb-2">
                  {craft.name}
                </h3>

                <div className="flex items-center gap-2 text-cream/50 mb-4">
                  <MapPin className="w-4 h-4 text-ochre" />
                  <span className="font-sans text-sm">{craft.origin}</span>
                </div>

                <p className="font-sans text-sm text-cream/60 leading-relaxed mb-4">
                  {craft.description}
                </p>

                <div className="flex items-start gap-2 text-cream/50">
                  <Palette className="w-4 h-4 text-ochre mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-xs">
                    <span className="text-ochre">Speciality:</span> {craft.speciality}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Artisan Tours CTA */}
        <div className="mt-20 relative overflow-hidden">
          <div className="absolute inset-0 border border-ochre/20" />
          <div className="relative p-8 md:p-12 text-center bg-cream/5">
            <ShoppingBag className="w-10 h-10 text-ochre mx-auto mb-4" />
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              Artisan Village Tours
            </h3>
            <p className="font-sans text-cream/70 max-w-2xl mx-auto mb-8">
              Let our concierge arrange exclusive visits to artisan villages like
              Raghurajpur and Pipili. Meet master craftsmen, watch demonstrations,
              and take home authentic handcrafted souvenirs.
            </p>
            <Button className="bg-ochre hover:bg-ochre-light text-white font-sans tracking-wider uppercase px-8 py-6">
              Arrange a Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
