"use client";

import Image from "next/image";
import { Quote, Award, ChefHat } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const chefs = [
  {
    name: "Chef Rajesh Mohapatra",
    title: "Executive Chef",
    specialty: "Odia Cuisine & Regional Specialties",
    experience: "25+ Years",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977",
    bio: "Born and raised in Puri, Chef Rajesh brings authentic Odia flavors to every dish. His mastery of traditional recipes passed down through generations, combined with modern techniques, creates an unforgettable dining experience.",
    quote: "Food is the language of love, and every dish I create tells the story of our rich Odia heritage.",
    achievements: ["Culinary Institute of India Gold Medalist", "Featured in India Today", "25+ Years of Excellence"],
  },
  {
    name: "Chef Priya Patnaik",
    title: "Pastry Chef",
    specialty: "Desserts & Confectionery",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=1974",
    bio: "Chef Priya transforms traditional Odia sweets into edible art. Her innovative approach to classics like Chhena Poda and Rasabali has earned her recognition across the hospitality industry.",
    quote: "Desserts should be a celebration - every bite should bring joy and evoke cherished memories.",
    achievements: ["Best Pastry Chef - East India 2022", "Author of 'Sweet Odisha'", "TV Show Appearances"],
  },
];

export function ChefSection() {
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
            Meet Our Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mt-4 text-balance">
            The Masters
            <span className="text-ochre block mt-2">Behind the Magic</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-olive/80 leading-relaxed">
            Our talented culinary team brings passion, creativity, and decades of
            experience to craft exceptional dining experiences.
          </p>
        </div>

        {/* Chefs */}
        <div className="space-y-24">
          {chefs.map((chef, index) => (
            <div
              key={chef.name}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-3/4 max-w-md mx-auto">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover"
                  />
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 border border-ochre/30 -z-10" />
                  <div className="absolute -inset-8 border border-olive/10 -z-20 hidden md:block" />
                  
                  {/* Chef Icon */}
                  <div className="absolute -bottom-6 -right-6 bg-ochre p-4 rounded-full">
                    <ChefHat className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <span className="font-sans text-sm tracking-[0.2em] uppercase text-ochre-dark">
                    {chef.title}
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl text-olive-dark mt-2">
                    {chef.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-olive-dark/10">
                    <span className="font-sans text-sm text-olive-dark">
                      {chef.specialty}
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-ochre/20">
                    <span className="font-sans text-sm text-ochre-dark">
                      {chef.experience}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-olive/80 leading-relaxed text-lg">
                  {chef.bio}
                </p>

                {/* Quote */}
                <div className="relative pl-6 border-l-2 border-ochre">
                  <Quote className="absolute -left-4 -top-2 w-8 h-8 text-ochre/30" />
                  <p className="font-serif text-xl text-olive-dark italic">
                    {chef.quote}
                  </p>
                </div>

                {/* Achievements */}
                <div className="pt-4">
                  <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-ochre-dark mb-4">
                    Achievements
                  </h4>
                  <div className="space-y-2">
                    {chef.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-ochre flex-shrink-0" />
                        <span className="font-sans text-olive/80 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
