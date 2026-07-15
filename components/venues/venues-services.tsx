"use client";

import { 
  UtensilsCrossed, 
  Music, 
  Camera, 
  Flower2, 
  Car, 
  Users,
  Sparkles,
  Gift
} from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const services = [
  {
    icon: UtensilsCrossed,
    title: "In-House Catering",
    description:
      "Exquisite culinary creations from our talented chefs, featuring both traditional Odia cuisine and international flavors.",
  },
  {
    icon: Music,
    title: "DJ & Entertainment",
    description:
      "Professional DJ services and live entertainment options to keep your guests engaged throughout the event.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capture every precious moment with our recommended professional photographers and videographers.",
  },
  {
    icon: Flower2,
    title: "Floral Arrangements",
    description:
      "Stunning floral decorations and arrangements tailored to your theme and preferences.",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description:
      "Complimentary valet parking services for your guests, ensuring a seamless arrival experience.",
  },
  {
    icon: Users,
    title: "Event Coordination",
    description:
      "Dedicated event managers to oversee every detail and ensure your event runs flawlessly.",
  },
  {
    icon: Sparkles,
    title: "Theme Decoration",
    description:
      "Custom theme decoration services to transform our venues according to your vision.",
  },
  {
    icon: Gift,
    title: "Guest Amenities",
    description:
      "Special amenities for your guests including welcome drinks, party favors, and more.",
  },
];

const packages = [
  {
    name: "Essential",
    description: "Perfect for intimate gatherings",
    features: [
      "Venue for 4 hours",
      "Basic decoration",
      "Sound system",
      "Standard catering",
      "Event coordinator",
    ],
    price: "Starting from Rs. 35,000",
  },
  {
    name: "Premium",
    description: "Ideal for special celebrations",
    features: [
      "Venue for 6 hours",
      "Theme decoration",
      "DJ & sound system",
      "Premium catering",
      "Photography (2 hrs)",
      "Valet parking",
      "Dedicated coordinator",
    ],
    price: "Starting from Rs. 65,000",
    popular: true,
  },
  {
    name: "Royal",
    description: "The ultimate luxury experience",
    features: [
      "Venue for 8 hours",
      "Luxury decoration",
      "Live entertainment",
      "Gourmet catering",
      "Full photography & video",
      "Valet parking",
      "Bridal suite access",
      "Guest accommodation discount",
      "Personal event manager",
    ],
    price: "Starting from Rs. 1,25,000",
  },
];

export function VenuesServices() {
  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-left"
        color="#767545"
        size="lg"
        className="top-6 left-6 md:top-8 md:left-8 opacity-15 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#767545"
        size="lg"
        className="bottom-6 right-6 md:bottom-8 md:right-8 opacity-15 hidden md:block"
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Complete Solutions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-olive-dark mt-4 text-balance">
            Event <span className="text-ochre">Services</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
          <p className="font-sans text-lg text-olive/80 leading-relaxed">
            We offer comprehensive event services to make your celebration truly
            memorable and stress-free
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-white border border-olive/10 hover:border-ochre/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-ochre/10 flex items-center justify-center mb-4 group-hover:bg-ochre/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-ochre" />
              </div>
              <h3 className="font-serif text-xl text-olive-dark mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-olive/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Value Packages
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-olive-dark mt-4">
            Event <span className="text-ochre">Packages</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative p-8 border transition-all duration-300 ${
                pkg.popular
                  ? "bg-olive-dark border-ochre scale-105 shadow-xl"
                  : "bg-white border-olive/10 hover:border-ochre/30 hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ochre px-4 py-1">
                  <span className="font-sans text-xs tracking-widest uppercase text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`font-serif text-2xl mb-2 ${
                    pkg.popular ? "text-ochre" : "text-olive-dark"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`font-sans text-sm ${
                    pkg.popular ? "text-cream/70" : "text-olive/70"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 font-sans text-sm ${
                      pkg.popular ? "text-cream/80" : "text-olive/70"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${
                        pkg.popular ? "text-ochre" : "text-ochre"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <p
                  className={`font-serif text-lg mb-4 ${
                    pkg.popular ? "text-ochre" : "text-ochre"
                  }`}
                >
                  {pkg.price}
                </p>
                <button
                  className={`w-full py-3 font-sans text-sm tracking-widest uppercase transition-all duration-300 ${
                    pkg.popular
                      ? "bg-ochre text-white hover:bg-ochre-light"
                      : "border border-ochre text-ochre hover:bg-ochre hover:text-white"
                  }`}
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
