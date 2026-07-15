"use client";

import { Award, Medal, Trophy, Star, Shield, Leaf } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const awards = [
  {
    title: "Best Regional Cuisine",
    organization: "East India Hospitality Awards",
    year: "2023",
    icon: Trophy,
    description: "Recognized for authentic Odia cuisine excellence",
  },
  {
    title: "Certificate of Excellence",
    organization: "TripAdvisor",
    year: "2022-2024",
    icon: Medal,
    description: "Consistently high-rated by travelers worldwide",
  },
  {
    title: "Traveller's Choice",
    organization: "TripAdvisor",
    year: "2023",
    icon: Award,
    description: "Top 10% of restaurants worldwide",
  },
  {
    title: "Best Hotel Restaurant",
    organization: "Odisha Tourism Awards",
    year: "2023",
    icon: Star,
    description: "Premier dining destination in Puri",
  },
];

const certifications = [
  {
    title: "FSSAI Certified",
    description: "Food Safety and Standards Authority of India",
    icon: Shield,
  },
  {
    title: "Hygiene Excellence",
    description: "5-Star Health & Hygiene Rating",
    icon: Star,
  },
  {
    title: "Sustainable Practices",
    description: "Farm-to-table sourcing from local farmers",
    icon: Leaf,
  },
];

export function DiningAwards() {
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
            Recognition
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive-dark mt-4 text-balance">
            Awards &
            <span className="text-ochre block mt-2">Accolades</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-olive/80 leading-relaxed">
            Our commitment to culinary excellence has been recognized by
            prestigious organizations and satisfied guests alike.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {awards.map((award) => (
            <div
              key={award.title}
              className="group p-8 bg-white border border-olive/10 hover:border-ochre/40 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre/10 rounded-full mb-6 group-hover:bg-ochre/20 transition-colors">
                <award.icon className="w-8 h-8 text-ochre" />
              </div>

              {/* Year Badge */}
              <div className="inline-block px-3 py-1 bg-olive-dark/10 mb-4">
                <span className="font-sans text-xs tracking-wider text-olive-dark">
                  {award.year}
                </span>
              </div>

              <h3 className="font-serif text-xl text-olive-dark mb-2">
                {award.title}
              </h3>
              <p className="font-sans text-ochre-dark text-sm mb-3">
                {award.organization}
              </p>
              <p className="font-sans text-olive/70 text-sm">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-olive-dark p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-cream">
              Our Certifications
            </h3>
            <p className="font-sans text-cream/70 mt-2">
              Quality and safety standards we maintain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-start gap-4 p-6 bg-cream/5 border border-cream/10"
              >
                <div className="flex-shrink-0 p-3 bg-ochre/20 rounded-full">
                  <cert.icon className="w-6 h-6 text-ochre" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cream mb-1">
                    {cert.title}
                  </h4>
                  <p className="font-sans text-cream/70 text-sm">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
