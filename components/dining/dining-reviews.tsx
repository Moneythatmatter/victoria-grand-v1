"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Ananya Sharma",
    location: "Mumbai",
    rating: 5,
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    review:
      "The Chingudi Malai Curry was absolutely divine! The flavors took me straight to the coast of Odisha. Chef Rajesh's attention to authentic preparation is evident in every bite. The ambiance of Sunshine Restaurant is perfect for a special evening.",
    dish: "Chingudi Malai Curry",
  },
  {
    name: "Vikram Patel",
    location: "Delhi",
    rating: 5,
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    review:
      "We celebrated our anniversary at Victoria Grand and the dining experience exceeded all expectations. The Pakhala Bhata was refreshingly authentic, and the staff made us feel like royalty. Highly recommend the tasting menu!",
    dish: "Pakhala Bhata",
  },
  {
    name: "Priyanka Das",
    location: "Kolkata",
    rating: 5,
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    review:
      "The Chhena Poda at The Verandah is the best I've ever had outside of a traditional Odia home. Chef Priya has truly mastered the art of Odia desserts. The high tea experience is a must-try!",
    dish: "Chhena Poda",
  },
  {
    name: "Rahul Mishra",
    location: "Bangalore",
    rating: 5,
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    review:
      "The Royal Lounge has an incredible cocktail menu. The mixologist created a custom drink for us inspired by local flavors. Perfect spot for a relaxed evening with live music. Will definitely return!",
    dish: "Signature Cocktails",
  },
];

export function DiningReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

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
            Guest Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mt-4 text-balance">
            What Our
            <span className="text-ochre block mt-2">Guests Say</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Review Card */}
            <div className="bg-cream/5 border border-cream/10 p-8 md:p-12">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-ochre/30 mb-6" />

              {/* Review Content */}
              <p className="font-serif text-xl md:text-2xl text-cream leading-relaxed mb-8">
                {reviews[currentIndex].review}
              </p>

              {/* Dish Tag */}
              <div className="inline-block px-4 py-2 bg-ochre/20 mb-8">
                <span className="font-sans text-sm text-ochre">
                  Ordered: {reviews[currentIndex].dish}
                </span>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ochre">
                  <Image
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-cream">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="font-sans text-cream/60 text-sm">
                    {reviews[currentIndex].location} | {reviews[currentIndex].date}
                  </p>
                  {/* Star Rating */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < reviews[currentIndex].rating
                            ? "text-ochre fill-ochre"
                            : "text-cream/30"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevReview}
                className="p-3 border border-ochre/40 text-ochre hover:bg-ochre hover:text-white transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-3 h-3 transition-all",
                      index === currentIndex
                        ? "bg-ochre scale-110"
                        : "bg-cream/30 hover:bg-cream/50"
                    )}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-3 border border-ochre/40 text-ochre hover:bg-ochre hover:text-white transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-cream/10">
          <div className="text-center">
            <div className="font-serif text-4xl text-ochre">4.9</div>
            <div className="flex justify-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-ochre fill-ochre" />
              ))}
            </div>
            <p className="font-sans text-cream/60 text-sm">Google Reviews</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl text-ochre">4.8</div>
            <div className="flex justify-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-ochre fill-ochre" />
              ))}
            </div>
            <p className="font-sans text-cream/60 text-sm">TripAdvisor</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl text-ochre">500+</div>
            <p className="font-sans text-cream/60 text-sm mt-4">Happy Diners Monthly</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl text-ochre">95%</div>
            <p className="font-sans text-cream/60 text-sm mt-4">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
