"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";
import {
  CHINGUDI_MALAI_CURRY_IMAGE,
  PAKHALA_BHATA_IMAGE,
  CHHENA_PODA_IMAGE,
  MACHHA_BESARA_IMAGE,
  DALMA_IMAGE,
  RASABALI_IMAGE,
} from "@/lib/dining-images";

const menuCategories = [
  { id: "appetizers", name: "Appetizers" },
  { id: "mains", name: "Main Course" },
  { id: "seafood", name: "Seafood" },
  { id: "desserts", name: "Desserts" },
];

const signatureDishes = [
  {
    name: "Chingudi Malai Curry",
    description: "Succulent prawns cooked in creamy coconut milk with aromatic spices, a coastal Odisha specialty",
    price: "Rs. 650",
    category: "seafood",
    image: CHINGUDI_MALAI_CURRY_IMAGE,
    isSignature: true,
    dietary: ["Gluten-Free"],
  },
  {
    name: "Pakhala Bhata",
    description: "Traditional fermented rice served with fried vegetables, dried fish, and curd - a refreshing Odia classic",
    price: "Rs. 350",
    category: "mains",
    image: PAKHALA_BHATA_IMAGE,
    isSignature: true,
    dietary: ["Vegetarian"],
  },
  {
    name: "Chhena Poda",
    description: "Iconic Odia dessert made from caramelized cottage cheese, cardamom, and cashews, baked to perfection",
    price: "Rs. 250",
    category: "desserts",
    image: CHHENA_PODA_IMAGE,
    isSignature: true,
    dietary: ["Vegetarian"],
  },
  {
    name: "Machha Besara",
    description: "Fresh river fish prepared in mustard paste gravy, a quintessential Odia preparation",
    price: "Rs. 550",
    category: "seafood",
    image: MACHHA_BESARA_IMAGE,
    isSignature: false,
    dietary: ["Gluten-Free"],
  },
  {
    name: "Dalma",
    description: "Wholesome lentil dish cooked with seasonal vegetables, tempered with panch phoron",
    price: "Rs. 280",
    category: "mains",
    image: DALMA_IMAGE,
    isSignature: false,
    dietary: ["Vegan", "Gluten-Free"],
  },
  {
    name: "Rasabali",
    description: "Flattened cheese patties soaked in thickened sweetened milk, flavored with cardamom",
    price: "Rs. 220",
    category: "desserts",
    image: RASABALI_IMAGE,
    isSignature: false,
    dietary: ["Vegetarian"],
  },
];

export function SignatureDishes() {
  return (
    <section className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c1893e 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-right"
        color="#c1893e"
        size="lg"
        className="top-2 right-2 md:top-8 md:right-8 opacity-40"
      />
      <RoyalCornerOrnament
        position="bottom-left"
        color="#c1893e"
        size="lg"
        className="bottom-2 left-2 md:bottom-8 md:left-8 opacity-40"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Culinary Delights
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mt-4 text-balance">
            Signature
            <span className="text-ochre block mt-2">Dishes</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-cream/80 leading-relaxed">
            Savor the authentic flavors of Odisha with our carefully curated
            selection of traditional and contemporary dishes.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className="px-6 py-2 border border-ochre/40 text-cream font-sans text-sm tracking-widest uppercase hover:bg-ochre hover:border-ochre transition-colors"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish) => (
            <div
              key={dish.name}
              className="group bg-cream/5 border border-cream/10 overflow-hidden hover:border-ochre/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/80 to-transparent" />
                
                {/* Signature Badge */}
                {dish.isSignature && (
                  <div className="absolute top-4 left-4 bg-ochre px-3 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 text-white fill-white" />
                    <span className="font-sans text-xs tracking-wider uppercase text-white">
                      Signature
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-olive-dark/90 px-3 py-1">
                  <span className="font-serif text-lg text-ochre">{dish.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-cream group-hover:text-ochre transition-colors">
                  {dish.name}
                </h3>
                <p className="font-sans text-cream/70 text-sm mt-3 leading-relaxed">
                  {dish.description}
                </p>
                
                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {dish.dietary.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-ochre/20 text-ochre font-sans text-xs tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 px-8 py-4 border border-ochre text-ochre font-sans tracking-widest uppercase hover:bg-ochre hover:text-white transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
