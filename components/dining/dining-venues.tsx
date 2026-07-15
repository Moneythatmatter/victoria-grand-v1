"use client";

import Image from "next/image";
import { Clock, MapPin, Users, ArrowUpRight, Utensils, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const restaurantFeatures = [
  "Breakfast Buffet",
  "A La Carte Menu",
  "Live Cooking Stations",
  "Private Dining",
  "Outdoor Seating",
  "Air Conditioned",
];

const cuisineTypes = [
  "Authentic Odia",
  "North Indian",
  "South Indian",
  "Chinese",
  "Continental",
  "Seafood Specialties",
];

export function DiningVenues() {
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
            Our Restaurant
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mt-4 text-balance">
            Sunshine
            <span className="text-ochre block mt-2">Restaurant</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-olive/80 leading-relaxed">
            Our signature multi-cuisine restaurant where every meal is a celebration
            of flavors, crafted with passion and served with royal hospitality.
          </p>
        </div>

        {/* Main Restaurant Feature */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden" style={{ position: 'relative' }}>
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
              alt="Sunshine Restaurant"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-olive-dark/10 pointer-events-none" />
            {/* Icon Badge */}
            <div className="absolute top-6 left-6 bg-ochre p-4 rounded-full">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            {/* Rating Badge */}
            <div className="absolute top-6 right-6 bg-olive-dark/90 px-4 py-2 flex items-center gap-2">
              <Star className="w-4 h-4 text-ochre fill-ochre" />
              <span className="font-sans text-cream text-sm">4.8 Rating</span>
            </div>
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-ochre/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="font-sans text-sm tracking-[0.2em] uppercase text-ochre-dark">
                Multi-Cuisine Restaurant
              </span>
              <h3 className="font-serif text-4xl md:text-5xl text-olive-dark mt-2">
                A Culinary Haven
              </h3>
            </div>

            <p className="font-sans text-olive/80 leading-relaxed">
              Park yourself at Sunshine Restaurant for a leisurely breakfast, lunch, 
              and dinner as the riveting aromas fill the air. Our signature multi-cuisine 
              restaurant offers an exquisite culinary journey through flavors from around 
              the world. From traditional Odia delicacies to international favorites, 
              every dish is crafted with the finest ingredients and presented with artistic flair.
            </p>

            <p className="font-sans text-olive/80 leading-relaxed">
              Whether you crave the authentic taste of coastal Odisha seafood, aromatic 
              North Indian curries, or continental classics, our expert chefs bring 
              passion and precision to every plate. The restaurant features elegant 
              interiors with warm lighting, creating the perfect ambiance for memorable 
              dining experiences.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-olive/70">
                <Clock className="w-5 h-5 text-ochre flex-shrink-0" />
                <span className="font-sans text-sm">07:30 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-olive/70">
                <MapPin className="w-5 h-5 text-ochre flex-shrink-0" />
                <span className="font-sans text-sm">5th Floor</span>
              </div>
              <div className="flex items-center gap-3 text-olive/70">
                <Users className="w-5 h-5 text-ochre flex-shrink-0" />
                <span className="font-sans text-sm">50 Covers</span>
              </div>
              <div className="flex items-center gap-3 text-olive/70">
                <Utensils className="w-5 h-5 text-ochre flex-shrink-0" />
                <span className="font-sans text-sm">Multi-Cuisine</span>
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="outline"
              className="mt-4 border-olive-dark text-olive-dark hover:bg-olive-dark hover:text-cream font-sans tracking-widest uppercase group btn-shimmer"
            >
              Reserve a Table
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Features and Cuisine Types */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {/* Features */}
          <div className="bg-olive-dark/5 p-8 border border-olive-dark/10">
            <h4 className="font-serif text-2xl text-olive-dark mb-6">
              Restaurant Features
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {restaurantFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-ochre/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-ochre" />
                  </div>
                  <span className="font-sans text-olive/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cuisine Types */}
          <div className="bg-olive-dark/5 p-8 border border-olive-dark/10">
            <h4 className="font-serif text-2xl text-olive-dark mb-6">
              Cuisines We Serve
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {cuisineTypes.map((cuisine) => (
                <div key={cuisine} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-ochre/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-3 h-3 text-ochre" />
                  </div>
                  <span className="font-sans text-olive/80 text-sm">{cuisine}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meal Timings */}
        <div className="mt-16 text-center">
          <h4 className="font-serif text-2xl text-olive-dark mb-8">Meal Timings</h4>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 border border-ochre/20 bg-white">
              <span className="font-sans text-sm tracking-[0.2em] uppercase text-ochre-dark block mb-2">
                Breakfast
              </span>
              <p className="font-serif text-xl text-olive-dark">7:30 AM - 10:30 AM</p>
              <p className="font-sans text-olive/60 text-sm mt-2">Buffet & A La Carte</p>
            </div>
            <div className="p-6 border border-ochre/20 bg-white">
              <span className="font-sans text-sm tracking-[0.2em] uppercase text-ochre-dark block mb-2">
                Lunch
              </span>
              <p className="font-serif text-xl text-olive-dark">12:30 PM - 3:00 PM</p>
              <p className="font-sans text-olive/60 text-sm mt-2">Buffet & A La Carte</p>
            </div>
            <div className="p-6 border border-ochre/20 bg-white">
              <span className="font-sans text-sm tracking-[0.2em] uppercase text-ochre-dark block mb-2">
                Dinner
              </span>
              <p className="font-serif text-xl text-olive-dark">7:00 PM - 11:00 PM</p>
              <p className="font-sans text-olive/60 text-sm mt-2">A La Carte Only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
