"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "Delhi, India",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Our stay at Victoria Grand was absolutely magical. The staff went above and beyond to make our anniversary celebration special. The proximity to Jagannath Temple was a blessing, and the rooftop dining experience was unforgettable. We'll definitely be back!",
    date: "February 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As a frequent traveler, I've stayed at many hotels, but Victoria Grand stands out for its perfect blend of traditional charm and modern comfort. The team's attention to detail and genuine hospitality made me feel like royalty. Highly recommended!",
    date: "January 2024",
  },
  {
    id: 3,
    name: "Priya & Vikram Reddy",
    location: "Hyderabad, India",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "We hosted our daughter's wedding reception at Victoria Grand, and it was beyond perfect. The banquet hall was beautifully decorated, the food was exceptional, and the coordination by the events team was flawless. Our guests are still talking about it!",
    date: "December 2023",
  },
  {
    id: 4,
    name: "Sarah Williams",
    location: "London, UK",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "A spiritual journey to Puri became even more meaningful with our stay at Victoria Grand. The staff helped arrange our temple visits and provided insights into local culture. The rooms were immaculate, and the food was delicious. A truly enriching experience.",
    date: "November 2023",
  },
];

export function TestimonialsAbout() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden heritage-pattern">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-left"
        color="#767545"
        size="lg"
        className="top-2 left-2 md:top-8 md:left-8 gold-glow"
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#767545"
        size="lg"
        className="bottom-2 right-2 md:bottom-8 md:right-8 gold-glow"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
            Guest Experiences
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-olive-dark mt-4 mb-6 text-balance">
            What Our Guests
            <span className="text-ochre block mt-2">Say About Us</span>
          </h2>
          
          <RoyalDivider color="#c1893e" className="my-8" />
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 bg-white border border-olive/10 shadow-sm">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-ochre flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-ochre text-ochre" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="font-serif text-lg md:text-xl text-olive-dark/80 text-center leading-relaxed italic mb-8">
              "{currentTestimonial.text}"
            </p>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-ochre/30 mb-4">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-olive-dark">
                {currentTestimonial.name}
              </h4>
              <p className="font-sans text-sm text-olive/60">
                {currentTestimonial.location}
              </p>
              <p className="font-sans text-xs text-ochre mt-1">
                {currentTestimonial.date}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-olive/20 flex items-center justify-center hover:border-ochre hover:text-ochre transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "bg-ochre w-6"
                        : "bg-olive/20 hover:bg-olive/40"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-olive/20 flex items-center justify-center hover:border-ochre hover:text-ochre transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-ochre/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-ochre/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-ochre/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-ochre/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
