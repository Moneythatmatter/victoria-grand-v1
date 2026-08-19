"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";
import { cn } from "@/lib/utils";
import {
  CHINGUDI_MALAI_CURRY_IMAGE,
  PAKHALA_BHATA_IMAGE,
  CHHENA_PODA_IMAGE,
  RASABALI_IMAGE,
  MACHHA_BESARA_IMAGE,
  DALMA_IMAGE,
} from "@/lib/dining-images";

const galleryImages = [
  {
    id: "dining-hall",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
    alt: "Restaurant main dining hall",
    category: "interior",
    caption: "The Grand Dining Hall",
  },
  {
    id: "table-settings",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    alt: "Fine dining table setup",
    category: "interior",
    caption: "Elegant Table Settings",
  },
  {
    id: "beverage-corner",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074",
    alt: "Restaurant bar area",
    category: "interior",
    caption: "The Beverage Corner",
  },
  {
    id: "chingudi-malai-curry",
    src: CHINGUDI_MALAI_CURRY_IMAGE,
    alt: "Chingudi Malai Curry — prawns in coconut milk",
    category: "food",
    caption: "Chingudi Malai Curry",
  },
  {
    id: "machha-besara",
    src: MACHHA_BESARA_IMAGE,
    alt: "Machha Besara — fish in mustard paste gravy",
    category: "food",
    caption: "Machha Besara",
  },
  {
    id: "dalma",
    src: DALMA_IMAGE,
    alt: "Dalma — lentil and vegetable stew, Odia cuisine",
    category: "food",
    caption: "Authentic Odia Dalma",
  },
  {
    id: "chhena-poda",
    src: CHHENA_PODA_IMAGE,
    alt: "Chhena Poda — caramelized cottage cheese dessert from Puri",
    category: "food",
    caption: "Sweet Delicacies",
  },
  {
    id: "private-dining",
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2074",
    alt: "Private dining area",
    category: "interior",
    caption: "Private Dining Space",
  },
  {
    id: "rooftop",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070",
    alt: "Rooftop dining view",
    category: "interior",
    caption: "Rooftop Ambiance",
  },
  {
    id: "pakhala-bhata",
    src: PAKHALA_BHATA_IMAGE,
    alt: "Pakhala Bhata served with aloo bhaja",
    category: "food",
    caption: "Pakhala Bhata",
  },
  {
    id: "rasabali",
    src: RASABALI_IMAGE,
    alt: "Rasabali — flattened cheese patties in sweetened milk",
    category: "food",
    caption: "Rasabali",
  },
  {
    id: "open-kitchen",
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070",
    alt: "Kitchen glimpse",
    category: "interior",
    caption: "Open Kitchen View",
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "interior", name: "Interior" },
  { id: "food", name: "Food" },
];

export function RestaurantGallery() {
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
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-left"
        color="#767545"
        size="lg"
        className="top-2 left-2 md:top-8 md:left-8 opacity-20"
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#767545"
        size="lg"
        className="bottom-2 right-2 md:bottom-8 md:right-8 opacity-20"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mt-4 text-balance">
            Our
            <span className="text-ochre block mt-2">Gallery</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-olive/80 leading-relaxed">
            Take a visual tour of Sunshine Restaurant - from our elegant interiors
            to our exquisite culinary creations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2 border font-sans text-sm tracking-widest uppercase transition-colors",
                activeCategory === category.id
                  ? "bg-ochre border-ochre text-white"
                  : "border-olive-dark/30 text-olive-dark hover:border-ochre hover:text-ochre"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group relative overflow-hidden cursor-pointer",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 5 && "md:col-span-2"
              )}
              onClick={() => openLightbox(index)}
            >
              <div
                className={cn(
                  "relative w-full",
                  index === 0 ? "aspect-square" : "aspect-4/3"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-olive-dark/0 group-hover:bg-olive-dark/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <ZoomIn className="w-8 h-8 text-ochre mx-auto mb-2" />
                    <p className="font-serif text-cream text-lg">{image.caption}</p>
                  </div>
                </div>
              </div>
              {/* Decorative Corner */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-ochre/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-ochre/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-olive-dark/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-cream/70 hover:text-cream transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 p-2 text-cream/70 hover:text-cream transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 p-2 text-cream/70 hover:text-cream transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-5xl mx-4 md:mx-8">
            <div className="relative aspect-video">
              <Image
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            {/* Caption */}
            <div className="text-center mt-6">
              <p className="font-serif text-2xl text-cream">
                {filteredImages[currentImageIndex].caption}
              </p>
              <p className="font-sans text-cream/60 mt-2">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
