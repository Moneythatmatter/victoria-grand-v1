"use client";

import {
   Phone,
   Mail,
   MapPin,
   Clock,
   Facebook,
   Instagram,
   Twitter,
   Youtube,
} from "lucide-react";
import {
   RoyalCornerOrnament,
   RoyalDivider,
} from "@/components/royal-corner-ornament";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site-contact";

const contactDetails = [
   {
      icon: Phone,
      title: "Phone",
      details: [SITE_PHONE_DISPLAY],
      action: SITE_PHONE_HREF,
      actionLabel: "Call Now",
   },
   {
      icon: Mail,
      title: "Email",
      details: ["info@hotelvictoriagrand.com", "info@hotelvictoriagrand.com"],
      action: "mailto:info@hotelvictoriagrand.com",
      actionLabel: "Send Email",
   },
   {
      icon: MapPin,
      title: "Address",
      details: [
         "Hotel Victoria Grand, Chandan Hazuri Road, Near Sanskrit University, In front of Ramakrishnan Mission Ashram, Puri - 752001, Odisha",
      ],
      action: "https://maps.google.com/?q=Victoria+Grand+Puri",
      actionLabel: "Get Directions",
   },
   {
      icon: Clock,
      title: "Business Hours",
      details: [
         "Front Desk: 24/7",
         "Check-in: 10:00 AM",
         "Check-out: 8:00 AM",
         "Restaurant: 7:00 AM - 10:30 PM",
      ],
      action: null,
      actionLabel: null,
   },
];

const socialLinks = [
   { icon: Facebook, href: "#", label: "Facebook" },
   { icon: Instagram, href: "#", label: "Instagram" },
   { icon: Twitter, href: "#", label: "Twitter" },
   { icon: Youtube, href: "#", label: "YouTube" },
];

export function ContactInfo() {
   return (
      <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
         {/* Royal Corner Ornaments - Diagonal */}
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
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="font-sans text-sm tracking-[0.3em] uppercase text-ochre block mb-4">
                  Reach Out
               </span>
               <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-olive-dark mb-6 text-balance">
                  We Are Here For You
               </h2>
               <RoyalDivider color="#c1893e" className="my-8" />
               <p className="font-sans text-olive-dark/70 leading-relaxed">
                  Whether you have questions about our accommodations, need
                  assistance with reservations, or want to plan a special event,
                  our dedicated team is ready to assist you.
               </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
               {contactDetails.map((item, index) => (
                  <div
                     key={item.title}
                     className="relative bg-white border border-olive/10 p-8 text-center hover:border-ochre/30 transition-all duration-300 group"
                  >
                     {/* Icon */}
                     <div className="w-16 h-16 mx-auto mb-6 border border-ochre/30 flex items-center justify-center group-hover:bg-ochre group-hover:border-ochre transition-all duration-300">
                        <item.icon className="w-7 h-7 text-ochre group-hover:text-white transition-colors duration-300" />
                     </div>

                     {/* Title */}
                     <h3 className="font-serif text-xl text-olive-dark mb-4">
                        {item.title}
                     </h3>

                     {/* Details */}
                     <div className="space-y-1 mb-6">
                        {item.details.map((detail, i) => (
                           <p
                              key={i}
                              className="font-sans text-sm text-olive-dark/70"
                           >
                              {detail}
                           </p>
                        ))}
                     </div>

                     {/* Action Link */}
                     {item.action && (
                        <a
                           href={item.action}
                           target={
                              item.action.startsWith("http")
                                 ? "_blank"
                                 : undefined
                           }
                           rel={
                              item.action.startsWith("http")
                                 ? "noopener noreferrer"
                                 : undefined
                           }
                           className="inline-block font-sans text-sm tracking-wider uppercase text-ochre hover:text-ochre-dark transition-colors border-b border-ochre/30 hover:border-ochre pb-1"
                        >
                           {item.actionLabel}
                        </a>
                     )}
                  </div>
               ))}
            </div>

            {/* Social Media Section */}
            <div className="text-center">
               <h3 className="font-serif text-xl text-olive-dark mb-6">
                  Connect With Us
               </h3>
               <p className="font-sans text-sm text-olive-dark/70 mb-6 max-w-md mx-auto">
                  Follow us on social media for the latest updates, exclusive
                  offers, and a glimpse into life at Victoria Grand.
               </p>
               <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => (
                     <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 border border-olive/20 hover:border-ochre hover:bg-ochre flex items-center justify-center text-olive-dark/70 hover:text-white transition-all duration-300"
                     >
                        <social.icon className="w-5 h-5" />
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
