"use client";

import { Clock, Calendar, CreditCard, Users, AlertCircle, Baby } from "lucide-react";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const policies = [
  {
    icon: Clock,
    title: "Check-in & Check-out",
    details: [
      "Check-in time: 2:00 PM onwards",
      "Check-out time: 11:00 AM",
      "Early check-in subject to availability",
      "Late check-out may incur additional charges",
    ],
  },
  {
    icon: Calendar,
    title: "Reservation Policy",
    details: [
      "Valid ID required at check-in",
      "Credit card guarantee for incidentals",
      "Confirmation sent via email",
      "Modification subject to availability",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment & Cancellation",
    details: [
      "All major credit cards accepted",
      "UPI & net banking available",
      "Free cancellation up to 24 hours",
      "No-show charged full night rate",
    ],
  },
  {
    icon: Users,
    title: "Occupancy",
    details: [
      "Maximum occupancy varies by room",
      "Extra person charges apply",
      "Extra bed/mattress on request",
      "Charges: INR 1,000-1,500 per night",
    ],
  },
  {
    icon: Baby,
    title: "Children Policy",
    details: [
      "Children welcome",
      "Kids under 5 stay free",
      "Extra bed for kids available",
      "Baby crib on request (complimentary)",
    ],
  },
  {
    icon: AlertCircle,
    title: "House Rules",
    details: [
      "No smoking in rooms",
      "Pets not allowed",
      "Quiet hours: 10 PM - 7 AM",
      "Visitors must register at reception",
    ],
  },
];

export function RoomPolicies() {
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
            Good to Know
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-olive-dark mt-4 text-balance">
            Hotel <span className="text-ochre">Policies</span>
          </h2>
          <RoyalDivider color="#c1893e" className="my-6" />
          <p className="font-sans text-olive-dark/70 leading-relaxed">
            To ensure a pleasant stay for all our guests, please familiarize yourself
            with our hotel policies and guidelines.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="bg-white border border-olive/10 p-6 hover:border-ochre/30 transition-colors duration-300 premium-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-ochre/10">
                  <policy.icon className="w-5 h-5 text-ochre" />
                </div>
                <h3 className="font-serif text-lg text-olive-dark">
                  {policy.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {policy.details.map((detail, index) => (
                  <li
                    key={index}
                    className="font-sans text-sm text-olive-dark/70 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-ochre/60 rounded-full mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Note */}
        <div className="mt-12 text-center p-6 bg-ochre/10 border border-ochre/20">
          <p className="font-sans text-olive-dark/80">
            Have questions about our policies?{" "}
            <a href="tel:+919876543210" className="text-ochre hover:underline font-medium">
              Call us at +91 98765 43210
            </a>{" "}
            or{" "}
            <a href="mailto:reservations@victoriagrand.com" className="text-ochre hover:underline font-medium">
              email our reservations team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
