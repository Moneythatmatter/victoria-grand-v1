"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
    alt: "Banquet Hall Main View",
    category: "banquet",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
    alt: "Wedding Setup",
    category: "banquet",
  },
  {
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062",
    alt: "Conference Setup",
    category: "banquet",
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070",
    alt: "Banquet Dining Setup",
    category: "banquet",
  },
  {
    src: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2070",
    alt: "Swimming Pool",
    category: "pool",
  },
  {
    src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070",
    alt: "Pool Area View",
    category: "pool",
  },
  {
    src: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=2070",
    alt: "Poolside Lounge",
    category: "pool",
  },
  {
    src: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=2070",
    alt: "Evening Pool View",
    category: "pool",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "banquet", label: "Banquet Hall" },
  { id: "pool", label: "Swimming Pool" },
];

export function VenuesGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

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

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ochre/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ochre/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Visual Tour
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 text-balance">
            Venue <span className="text-ochre">Gallery</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-cream/80 leading-relaxed">
            Take a visual tour of our stunning event spaces and imagine your
            special occasion in these elegant settings
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 font-sans text-sm tracking-widest uppercase transition-all duration-300",
                activeCategory === category.id
                  ? "bg-ochre text-white"
                  : "bg-cream/5 text-cream/70 hover:bg-cream/10 hover:text-cream border border-cream/20"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.src}
              className={cn(
                "relative group cursor-pointer overflow-hidden",
                index === 0 || index === 5 ? "col-span-2 row-span-2" : ""
              )}
              onClick={() => openLightbox(index)}
            >
              <div className={cn(
                "relative w-full",
                index === 0 || index === 5 ? "aspect-square" : "aspect-4/3"
              )}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-olive-dark/40 group-hover:bg-olive-dark/20 transition-colors duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-ochre/80 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-olive-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-sans text-sm text-cream">{image.alt}</p>
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
            className="absolute top-6 right-6 w-12 h-12 bg-cream/10 hover:bg-ochre text-cream flex items-center justify-center transition-colors duration-300 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 w-12 h-12 bg-cream/10 hover:bg-ochre text-cream flex items-center justify-center transition-colors duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 w-12 h-12 bg-cream/10 hover:bg-ochre text-cream flex items-center justify-center transition-colors duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4 md:mx-8">
            <Image
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="font-sans text-cream">
              {filteredImages[currentImageIndex].alt}
            </p>
            <p className="font-sans text-sm text-cream/60 mt-1">
              {currentImageIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
