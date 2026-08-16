"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site-contact";
import Logo from "./Logo";

const navItems = [
   { label: "About", href: "/about" },
   { label: "Rooms", href: "/rooms" },
   { label: "Dining", href: "/dining" },
   { label: "Venues", href: "/venues" },
   { label: "Heritage", href: "/heritage" },
   { label: "Blog", href: "/blog" },
   { label: "Contact", href: "/contact" },
];

export function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [activeSection, setActiveSection] = useState("");

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);

         // Detect active section for the header label
         const sections = [
            "accommodations",
            "dining",
            "venues",
            "heritage",
            "contact",
         ];
         for (const id of sections.reverse()) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top < 200) {
               setActiveSection(id);
               return;
            }
         }
         setActiveSection("");
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <>
         <header
            className={cn(
               "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
               isScrolled
                  ? "bg-olive-dark/95 backdrop-blur-md py-3 shadow-lg"
                  : "bg-transparent py-6",
            )}
         >
            <div className="container mx-auto px-6">
               <nav className="flex items-center justify-between">
                  {/* Logo */}
                  {/* <Link href="/" className="relative z-10"> */}
                  {/* <div className="flex flex-col items-center">
                        <span
                           className={cn(
                              "font-serif text-2xl md:text-3xl tracking-[0.2em] font-semibold transition-colors duration-300",
                              isScrolled ? "text-ochre" : "text-white",
                           )}
                        >
                           VICTORIA
                        </span>
                        <span
                           className={cn(
                              "font-serif text-xs md:text-sm tracking-[0.4em] -mt-1 transition-colors duration-300",
                              isScrolled ? "text-ochre-light" : "text-white/80",
                           )}
                        >
                           GRAND
                        </span>
                     </div> */}
                  <Logo compact={true} size="sm" />
                  {/* </Link> */}

                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex items-center gap-8">
                     {navItems.map((item) => (
                        <Link
                           key={item.label}
                           href={item.href}
                           className={cn(
                              "font-sans text-sm tracking-widest uppercase transition-colors duration-300 hover:text-ochre relative",
                              isScrolled ? "text-cream" : "text-white/90",
                              (item.href.includes("#") && activeSection === item.href.split("#")[1]) &&
                                 "text-ochre",
                           )}
                        >
                           {item.label}
                           {/* Active indicator underline */}
                           <span
                              className={cn(
                                 "absolute -bottom-1 left-0 h-px bg-ochre transition-all duration-300",
                                 (item.href.includes("#") && activeSection === item.href.split("#")[1])
                                    ? "w-full"
                                    : "w-0",
                              )}
                           />
                        </Link>
                     ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="hidden lg:flex items-center gap-4">
                     <a
                        href={SITE_PHONE_HREF}
                        className={cn(
                           "flex items-center gap-2 text-sm tracking-wide transition-colors duration-300",
                           isScrolled ? "text-cream/80" : "text-white/80",
                        )}
                     >
                        <Phone className="w-4 h-4" />
                        <span className="font-sans">{SITE_PHONE_DISPLAY}</span>
                     </a>
                     <Button
                        className={cn(
                           "font-sans tracking-widest uppercase text-xs px-6 py-5 transition-all duration-300 btn-shimmer",
                           isScrolled
                              ? "bg-ochre text-white hover:bg-ochre-light"
                              : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-olive-dark",
                        )}
                     >
                        Book Now
                     </Button>
                  </div>

                  {/* Mobile Menu Button */}
                  <button
                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                     className="lg:hidden relative z-10"
                  >
                     {isMobileMenuOpen ? (
                        <X
                           className={cn(
                              "w-6 h-6",
                              isScrolled ? "text-cream" : "text-white",
                           )}
                        />
                     ) : (
                        <Menu
                           className={cn(
                              "w-6 h-6",
                              isScrolled ? "text-cream" : "text-white",
                           )}
                        />
                     )}
                  </button>
               </nav>
            </div>
         </header>

         {/* Enhanced Mobile Menu */}
         <div
            className={cn(
               "fixed inset-0 z-40 bg-olive-dark transition-all duration-500 lg:hidden",
               isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
            )}
         >
            {/* Decorative Frame */}
            <div className="absolute inset-6 border border-ochre/20 pointer-events-none" />

            {/* Corner Accents */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-ochre/50" />
            <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-ochre/50" />
            <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-ochre/50" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-ochre/50" />

            <div className="flex flex-col items-center justify-center h-full gap-6">
               {/* Crown/Logo */}
               <div className="mb-4">
                  <svg viewBox="0 0 64 64" className="w-10 h-10 text-ochre">
                     <g fill="currentColor">
                        <path d="M12 44h40v6H12z" opacity="0.9" />
                        <path d="M8 24l8 16h32l8-16-10 8-6-12-8 10-8-10-6 12-10-8z" />
                        <circle cx="32" cy="20" r="3" />
                        <circle cx="20" cy="28" r="2" />
                        <circle cx="44" cy="28" r="2" />
                     </g>
                  </svg>
               </div>

               {navItems.map((item, index) => (
                  <Link
                     key={item.label}
                     href={item.href}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className={cn(
                        "font-serif text-2xl text-cream hover:text-ochre transition-all duration-300",
                        isMobileMenuOpen
                           ? "opacity-100 translate-y-0"
                           : "opacity-0 translate-y-4",
                     )}
                     style={{
                        transitionDelay: isMobileMenuOpen
                           ? `${index * 80 + 200}ms`
                           : "0ms",
                     }}
                  >
                     {item.label}
                  </Link>
               ))}

               {/* Divider */}
               <div className="flex items-center gap-3 my-2">
                  <div className="w-8 h-px bg-ochre/40" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-ochre/60" />
                  <div className="w-8 h-px bg-ochre/40" />
               </div>

               <Button
                  className={cn(
                     "bg-ochre text-white hover:bg-ochre-light font-sans tracking-widest uppercase px-8 py-6 btn-shimmer transition-all duration-300",
                     isMobileMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4",
                  )}
                  style={{
                     transitionDelay: isMobileMenuOpen
                        ? `${navItems.length * 80 + 300}ms`
                        : "0ms",
                  }}
               >
                  Book Now
               </Button>
            </div>
         </div>
      </>
   );
}
