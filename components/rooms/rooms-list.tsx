"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Bed,
  Maximize,
  Users,
  Wifi,
  Wind,
  Coffee,
  Tv,
  Bath,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const rooms = [
  {
    id: "grand-deluxe",
    name: "Grand Deluxe Room",
    tagline: "Comfort Meets Elegance",
    description:
      "Our Grand Deluxe Room offers a perfect sanctuary for travelers seeking comfort and style. Featuring elegant interiors with warm wood accents, plush furnishings, and modern amenities, this room provides everything you need for a relaxing stay.",
    longDescription:
      "Step into a world of refined comfort with our Grand Deluxe Room. The space features elegant flooring, a luxurious King Size bed with premium linens, and a wall-mounted LCD screen TV for entertainment. The well-appointed bathroom boasts high-quality fittings and complimentary toiletries. A large wooden wardrobe provides ample storage, while the sleek work desk with chair and task lamp ensures productivity. High-speed WiFi connectivity keeps you connected throughout your stay.",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070",
    ],
    price: "4,000",
    extraPerson: "1,000",
    size: "292 sq ft",
    bedType: "King Size Bed",
    maxOccupancy: 3,
    view: "City View",
    features: [
      "King Size Bed",
      "Work Desk",
      "Task Lamp",
      "LCD TV",
      "Large Wardrobe",
      "Premium Linens",
    ],
    included: [
      "Complimentary breakfast",
      "High-speed WiFi",
      "Daily housekeeping",
      "Welcome drink",
      "Newspaper on request",
    ],
    notIncluded: ["Airport transfer", "Spa services", "Laundry"],
  },
  {
    id: "grand-premium",
    name: "Grand Premium Room",
    tagline: "Elevated Luxury Experience",
    description:
      "The Grand Premium Room offers an elevated experience with enhanced space and premium amenities. Ideal for guests who appreciate extra room to relax, this accommodation combines sophisticated design with ultimate comfort.",
    longDescription:
      "Experience elevated luxury in our Grand Premium Room. This spacious retreat features premium flooring, an expansive King Size bed with luxury linens, and state-of-the-art entertainment with a large LCD screen TV. The bathroom showcases premium fittings and rain shower. Additional touches include a larger wardrobe, an ergonomic work station, and enhanced room service options. The room's thoughtful design creates a perfect balance of work and relaxation.",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070",
    ],
    price: "5,000",
    extraPerson: "1,000",
    size: "310 sq ft",
    bedType: "King Size Bed",
    maxOccupancy: 3,
    view: "Garden View",
    features: [
      "King Size Bed",
      "Premium Fittings",
      "Rain Shower",
      "Work Desk",
      "Mini Fridge",
      "Premium Linens",
    ],
    included: [
      "Complimentary breakfast",
      "High-speed WiFi",
      "Daily housekeeping",
      "Welcome drink",
      "Newspaper on request",
      "Evening turndown service",
    ],
    notIncluded: ["Airport transfer", "Spa services"],
  },
  {
    id: "royal-suite",
    name: "Royal Suite",
    tagline: "The Ultimate Indulgence",
    description:
      "Our signature Royal Suite represents the pinnacle of luxury accommodation. With a separate living area, premium furnishings, and exclusive amenities, this suite is designed for guests who demand nothing but the finest.",
    longDescription:
      "The Royal Suite is our crowning jewel, offering an unparalleled experience of luxury and sophistication. This expansive suite features a separate living room with plush seating, a master bedroom with a premium King Size bed, and a lavish bathroom with both soaking tub and rain shower. Floor-to-ceiling windows frame stunning views, while the private balcony provides a personal outdoor retreat. Exclusive amenities include a Nespresso machine, premium minibar, and dedicated butler service.",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974",
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=2021",
    ],
    price: "8,500",
    extraPerson: "1,500",
    size: "485 sq ft",
    bedType: "Premium King Bed",
    maxOccupancy: 4,
    view: "Sea View",
    features: [
      "Separate Living Room",
      "Private Balcony",
      "Soaking Tub",
      "Rain Shower",
      "Nespresso Machine",
      "Butler Service",
    ],
    included: [
      "Complimentary breakfast",
      "High-speed WiFi",
      "Daily housekeeping",
      "Welcome champagne",
      "Newspaper daily",
      "Evening turndown service",
      "Priority restaurant reservations",
      "Late checkout (subject to availability)",
    ],
    notIncluded: ["Airport transfer"],
  },
];

export function RoomsList() {
  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({});

  const setActiveImage = (roomId: string, index: number) => {
    setActiveImages((prev) => ({ ...prev, [roomId]: index }));
  };

  return (
    <section className="relative py-20 md:py-28 bg-cream overflow-hidden heritage-pattern">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-left"
        color="#767545"
        size="lg"
        className="top-4 left-4 md:top-8 md:left-8 opacity-15 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#767545"
        size="lg"
        className="bottom-4 right-4 md:bottom-8 md:right-8 opacity-15 hidden md:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre">
            Choose Your Haven
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-olive-dark mt-4 text-balance">
            Explore Our <span className="text-ochre">Accommodations</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-6" />
          <p className="font-sans text-olive-dark/70 leading-relaxed">
            Each room at Victoria Grand is a masterpiece of design and comfort,
            offering you a truly regal experience during your stay.
          </p>
        </div>

        {/* Rooms List */}
        <div className="space-y-24">
          {rooms.map((room, roomIndex) => (
            <div
              key={room.id}
              id={room.id}
              className={cn(
                "grid lg:grid-cols-2 gap-8 lg:gap-16 items-start",
                roomIndex % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Room Images */}
              <div
                className={cn(
                  "relative",
                  roomIndex % 2 === 1 && "lg:order-2"
                )}
              >
                {/* Main Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <div className="absolute -inset-3 border border-ochre/20" />
                  {room.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={cn(
                        "absolute inset-0 transition-opacity duration-500",
                        (activeImages[room.id] || 0) === imgIndex
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    >
                      <Image
                        src={img}
                        alt={`${room.name} - View ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4 bg-ochre px-6 py-3">
                    <span className="font-sans text-xs tracking-wider uppercase text-white/80 block">
                      From
                    </span>
                    <span className="font-serif text-2xl text-white">
                      INR {room.price}
                    </span>
                    <span className="font-sans text-xs text-white/80 block">
                      per night
                    </span>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-3 mt-4">
                  {room.images.map((img, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => setActiveImage(room.id, imgIndex)}
                      className={cn(
                        "relative w-20 h-16 overflow-hidden transition-all duration-300",
                        (activeImages[room.id] || 0) === imgIndex
                          ? "ring-2 ring-ochre"
                          : "opacity-60 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={img}
                        alt={`${room.name} thumbnail ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Details */}
              <div className={cn(roomIndex % 2 === 1 && "lg:order-1")}>
                <span className="font-sans text-sm tracking-[0.2em] uppercase text-ochre">
                  {room.tagline}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-olive-dark mt-2">
                  {room.name}
                </h3>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mt-6 pb-6 border-b border-olive/20">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-ochre" />
                    <span className="font-sans text-sm text-olive-dark/80">
                      {room.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-ochre" />
                    <span className="font-sans text-sm text-olive-dark/80">
                      {room.bedType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-ochre" />
                    <span className="font-sans text-sm text-olive-dark/80">
                      Up to {room.maxOccupancy} Guests
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-olive-dark/70 leading-relaxed mt-6">
                  {room.longDescription}
                </p>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="font-sans text-sm tracking-wider uppercase text-olive-dark mb-3">
                    Room Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 bg-olive/10 text-olive-dark font-sans text-sm border border-olive/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Included / Not Included */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="font-sans text-sm tracking-wider uppercase text-olive-dark mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Included
                    </h4>
                    <ul className="space-y-2">
                      {room.included.map((item) => (
                        <li
                          key={item}
                          className="font-sans text-sm text-olive-dark/70 flex items-start gap-2"
                        >
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm tracking-wider uppercase text-olive-dark mb-3 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      Not Included
                    </h4>
                    <ul className="space-y-2">
                      {room.notIncluded.map((item) => (
                        <li
                          key={item}
                          className="font-sans text-sm text-olive-dark/70 flex items-start gap-2"
                        >
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Extra Person Note */}
                <p className="font-sans text-sm text-olive-dark/60 mt-6">
                  Extra person charge: INR {room.extraPerson} per night
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button className="bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-8 py-6 btn-shimmer">
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-olive/30 text-olive-dark hover:bg-olive/10 hover:border-olive font-sans tracking-widest uppercase px-8 py-6"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
