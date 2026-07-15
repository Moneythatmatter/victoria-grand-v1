"use client";

import Image from "next/image";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Rajesh Kumar Patra",
    role: "Founder & Managing Director",
    image: "/placeholder.svg?height=400&width=400",
    description: "With over 25 years of experience in hospitality, Rajesh brings visionary leadership to Victoria Grand.",
  },
  {
    name: "Sunita Mohanty",
    role: "General Manager",
    image: "/placeholder.svg?height=400&width=400",
    description: "Sunita ensures every guest receives personalized attention and exceptional service throughout their stay.",
  },
  {
    name: "Amit Sharma",
    role: "Executive Chef",
    image: "/placeholder.svg?height=400&width=400",
    description: "A culinary master who brings authentic Odia flavors and international cuisine to our dining experiences.",
  },
  {
    name: "Priya Das",
    role: "Head of Guest Relations",
    image: "/placeholder.svg?height=400&width=400",
    description: "Priya's warm hospitality and attention to detail create memorable experiences for every guest.",
  },
];

export function TeamSection() {
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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre-dark">
            Our Commitment
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-olive-dark mt-4 mb-6 text-balance">
            Our People Make the
            <span className="text-ochre block mt-2">Difference</span>
          </h2>
          
          <RoyalDivider color="#c1893e" className="my-8 mx-auto justify-center" />
          
          <p className="font-sans text-lg text-olive/80 leading-relaxed text-balance">
            Behind every great stay is a dedicated team that cares. Our staff are trained to offer warm, attentive and personalised service, treating every guest as a cherished visitor rather than a booking number. From our front desk team to our restaurant staff and housekeeping crew, excellence is our shared standard.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={cn(
                "group relative text-center premium-card"
              )}
            >
              <div className="relative aspect-square overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-olive-dark/0 group-hover:bg-olive-dark/20 transition-colors duration-500" />
                <div className="absolute inset-3 border border-ochre/0 group-hover:border-ochre/40 transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl text-olive-dark mb-1">
                {member.name}
              </h3>
              <span className="font-sans text-sm tracking-wide text-ochre uppercase block mb-3">
                {member.role}
              </span>
              <p className="font-sans text-sm text-olive/60 leading-relaxed px-2">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
