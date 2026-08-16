"use client";

import Link from "next/link";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site-contact";
import {
   Facebook,
   Instagram,
   Twitter,
   Youtube,
   Mail,
   Phone,
   MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
   RoyalCornerOrnament,
   RoyalDivider,
} from "@/components/royal-corner-ornament";
import Logo from "./Logo";

const footerLinks = {
   explore: [
      { label: "Accommodations", href: "#accommodations" },
      { label: "Dining", href: "#dining" },
      { label: "Events & Venues", href: "#venues" },
      { label: "Offers & Packages", href: "#" },
   ],
   experience: [
      { label: "Heritage Tours", href: "#heritage" },
      { label: "Spa & Wellness", href: "#" },
      { label: "Cultural Programs", href: "#" },
      { label: "Temple Darshan", href: "#" },
   ],
   information: [
      { label: "About Victoria Grand", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "Contact Us", href: "#contact" },
   ],
};

const socialLinks = [
   { icon: Facebook, href: "#", label: "Facebook" },
   { icon: Instagram, href: "#", label: "Instagram" },
   { icon: Twitter, href: "#", label: "Twitter" },
   { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
   return (
      <footer className="bg-olive-dark pt-20 pb-8 relative">
         <div className="container mx-auto px-6">
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
               {/* Brand Column */}
               <div className="lg:col-span-4 space-y-6">
                  {/* Logo */}
                  <Logo />

                  <p className="font-sans text-cream/70 leading-relaxed max-w-sm">
                     A heritage sanctuary in the sacred city of Puri, where
                     British elegance meets Indian royal hospitality. Experience
                     timeless luxury by the Bay of Bengal.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3">
                     <a
                        href={SITE_PHONE_HREF}
                        className="flex items-center gap-3 text-cream/70 hover:text-ochre transition-colors"
                     >
                        <Phone className="w-4 h-4 text-ochre" />
                        <span className="font-sans text-sm">
                           {SITE_PHONE_DISPLAY}
                        </span>
                     </a>
                     <a
                        href="mailto:info@hotelvictoriagrand.com"
                        className="flex items-center gap-3 text-cream/70 hover:text-ochre transition-colors"
                     >
                        <Mail className="w-4 h-4 text-ochre" />
                        <span className="font-sans text-sm">
                           info@hotelvictoriagrand.com
                        </span>  
                     </a>
                     <div className="flex items-start gap-3 text-cream/70">
                        <MapPin className="w-4 h-4 text-ochre mt-1 shrink-0" />
                        <span className="font-sans text-sm">
                           Hotel Victoria Grand, Chandan Hazuri Road, Near
                           Sanskrit University, In front of Ramakrishnan Mission
                           Ashram, Puri - 752001, Odisha
                        </span>
                     </div>
                  </div>

                  {/* Policies & Transit Info (Added from Content) */}
                  <div className="space-y-3 mt-6 pt-6 border-t border-cream/10">
                     <p className="font-sans text-sm text-cream/70">
                        <span className="text-ochre block mb-1 font-serif">
                           Transit Distances:
                        </span>
                        Airport: 60 Kms | Railway Station: 1.5 Kms | Bus Stand:
                        2.5 Kms
                     </p>
                     <p className="font-sans text-sm text-cream/70">
                        <span className="text-ochre block mb-1 font-serif">
                           Timings:
                        </span>
                        Check-in: 10:00 Hrs | Check-out: 08:00 Hrs
                     </p>
                  </div>
               </div>

               {/* Links Columns */}
               <div className="lg:col-span-5 grid grid-cols-3 gap-8">
                  <div>
                     <h4 className="font-serif text-lg text-cream mb-6">
                        Explore
                     </h4>
                     <ul className="space-y-3">
                        {footerLinks.explore.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className="font-sans text-sm text-cream/70 hover:text-ochre transition-colors"
                              >
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h4 className="font-serif text-lg text-cream mb-6">
                        Experience
                     </h4>
                     <ul className="space-y-3">
                        {footerLinks.experience.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className="font-sans text-sm text-cream/70 hover:text-ochre transition-colors"
                              >
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h4 className="font-serif text-lg text-cream mb-6">
                        Information
                     </h4>
                     <ul className="space-y-3">
                        {footerLinks.information.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className="font-sans text-sm text-cream/70 hover:text-ochre transition-colors"
                              >
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Newsletter Column */}
               <div className="lg:col-span-3">
                  <h4 className="font-serif text-lg text-cream mb-6">
                     Stay Connected
                  </h4>
                  <p className="font-sans text-sm text-cream/70 mb-4">
                     Subscribe for exclusive offers, cultural insights, and
                     updates from Victoria Grand.
                  </p>
                  <div className="space-y-3">
                     <Input
                        type="email"
                        placeholder="Your email address"
                        className="bg-transparent border-cream/20 text-cream placeholder:text-cream/50 focus:border-ochre h-12 font-sans"
                     />
                     <Button className="w-full bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase text-xs py-5">
                        Subscribe
                     </Button>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-8">
                     {socialLinks.map((social) => (
                        <a
                           key={social.label}
                           href={social.href}
                           aria-label={social.label}
                           className="w-10 h-10 border border-cream/20 hover:border-ochre hover:bg-ochre flex items-center justify-center text-cream/70 hover:text-white transition-all duration-300"
                        >
                           <social.icon className="w-4 h-4" />
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
               <p className="font-sans text-xs text-cream/50">
                  2026 Victoria Grand. All rights reserved.
               </p>
               <div className="flex gap-6">
                  <Link
                     href="#"
                     className="font-sans text-xs text-cream/50 hover:text-ochre transition-colors"
                  >
                     Privacy Policy
                  </Link>
                  <Link
                     href="#"
                     className="font-sans text-xs text-cream/50 hover:text-ochre transition-colors"
                  >
                     Terms of Service
                  </Link>
                  <Link
                     href="#"
                     className="font-sans text-xs text-cream/50 hover:text-ochre transition-colors"
                  >
                     Cookie Policy
                  </Link>
               </div>
            </div>

            {/* Decorative Element */}
            <RoyalDivider color="#c1893e" className="mt-12 opacity-60" />
         </div>
      </footer>
   );
}
