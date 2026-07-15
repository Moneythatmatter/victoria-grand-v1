"use client";

import { Award, Star, ThumbsUp, Trophy, Medal, BadgeCheck } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";
import { cn } from "@/lib/utils";

const awards = [
  {
    icon: Trophy,
    title: "Best Heritage Hotel",
    year: "2023",
    organization: "Odisha Tourism Awards",
  },
  {
    icon: Star,
    title: "Excellence in Hospitality",
    year: "2022",
    organization: "East India Hotel Association",
  },
  {
    icon: Award,
    title: "Top Rated on TripAdvisor",
    year: "2023",
    organization: "Travelers' Choice Award",
  },
  {
    icon: Medal,
    title: "Best Banquet Services",
    year: "2022",
    organization: "Wedding Sutra Awards",
  },
];

const certifications = [
  {
    icon: BadgeCheck,
    title: "FSSAI Certified",
    description: "Food safety standards compliance",
  },
  {
    icon: ThumbsUp,
    title: "Google 4.5+ Rating",
    description: "Consistently high guest reviews",
  },
  {
    icon: Star,
    title: "3-Star Hotel Classification",
    description: "Government of India certified",
  },
];

export function AwardsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-olive-dark overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-right"
        color="#c1893e"
        size="lg"
        className="top-2 right-2 md:top-8 md:right-8 gold-glow"
      />
      <RoyalCornerOrnament
        position="bottom-left"
        color="#c1893e"
        size="lg"
        className="bottom-2 left-2 md:bottom-8 md:left-8 gold-glow"
      />

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

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Recognition & Trust
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mt-4 mb-6 text-balance">
            Awards &
            <span className="text-ochre block mt-2">Certifications</span>
          </h2>
          
          <RoyalDivider color="#c1893e" className="my-8" />
          
          <p className="font-sans text-lg text-cream/70 leading-relaxed">
            Our commitment to excellence has been recognized by industry leaders and satisfied guests alike.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className={cn(
                "group relative p-6 bg-cream/5 border border-cream/10 text-center transition-all duration-500",
                "hover:bg-cream/10 hover:border-ochre/30"
              )}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ochre/10 mb-4 group-hover:bg-ochre/20 transition-colors duration-500">
                <award.icon
                  className="w-8 h-8 text-ochre"
                  strokeWidth={1.5}
                />
              </div>

              <span className="font-sans text-xs tracking-wider text-ochre-light uppercase block mb-2">
                {award.year}
              </span>

              <h4 className="font-serif text-lg text-cream mb-2">
                {award.title}
              </h4>

              <p className="font-sans text-xs text-cream/50">
                {award.organization}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-cream/10 pt-16">
          <h3 className="font-serif text-2xl text-cream text-center mb-10">
            Our Certifications
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="flex items-center gap-4 px-6 py-4 bg-cream/5 border border-cream/10"
              >
                <cert.icon className="w-8 h-8 text-ochre" strokeWidth={1.5} />
                <div>
                  <h5 className="font-serif text-cream">{cert.title}</h5>
                  <p className="font-sans text-xs text-cream/50">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
