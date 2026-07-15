"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076",
    alt: "Jagannath Temple at sunset",
    category: "Temples",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071",
    alt: "Konark Sun Temple wheel",
    category: "Temples",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
    alt: "Puri Beach sunrise",
    category: "Nature",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032",
    alt: "Applique art workshop",
    category: "Crafts",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    alt: "Chilika Lake with birds",
    category: "Nature",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070",
    alt: "Rath Yatra festival",
    category: "Festivals",
    span: "col-span-2 row-span-1",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2045",
    alt: "Pattachitra painting",
    category: "Crafts",
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021",
    alt: "Traditional boat on lake",
    category: "Nature",
    span: "col-span-1 row-span-1",
  },
];

const categories = ["All", "Temples", "Nature", "Crafts", "Festivals"];

export function HeritageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mt-4">
            Heritage
            <span className="text-ochre block mt-2">Gallery</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-olive/70 leading-relaxed">
            Immerse yourself in the visual splendor of Puri{"'"}s cultural treasures
            through our curated collection.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-3 font-sans text-sm tracking-wider uppercase transition-all duration-300",
                selectedCategory === category
                  ? "bg-ochre text-white"
                  : "bg-white border border-olive/20 text-olive hover:border-ochre hover:text-ochre"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "relative overflow-hidden cursor-pointer group",
                item.span
              )}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-olive-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                  <span className="font-sans text-sm text-white tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-olive-dark/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-ochre text-white flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-ochre text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-ochre text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="relative w-full max-w-5xl h-[80vh] mx-6">
            <Image
              src={filteredItems[currentImage].src}
              alt={filteredItems[currentImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="font-sans text-cream/80 tracking-wider">
              {filteredItems[currentImage].alt}
            </p>
            <p className="font-sans text-sm text-cream/50 mt-1">
              {currentImage + 1} / {filteredItems.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
