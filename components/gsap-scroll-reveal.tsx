"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GSAPScrollReveal() {
   useEffect(() => {
      // Small delay to ensure all components have mounted after hydration
      const timeout = setTimeout(() => {
         // --- Reveal Up ---
         // Handle stagger-children containers first
         document.querySelectorAll(".stagger-children").forEach((container) => {
            const children = container.querySelectorAll(".reveal");
            if (children.length === 0) return;

            gsap.fromTo(
               children,
               { autoAlpha: 0, y: 40 },
               {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                  stagger: 0.15,
                  scrollTrigger: {
                     trigger: container,
                     start: "top 85%",
                  },
               },
            );
         });

         // Individual .reveal elements NOT inside stagger-children
         document
            .querySelectorAll(".reveal:not(.stagger-children .reveal)")
            .forEach((el) => {
               gsap.fromTo(
                  el,
                  { autoAlpha: 0, y: 40 },
                  {
                     autoAlpha: 1,
                     y: 0,
                     duration: 0.8,
                     ease: "power3.out",
                     scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                     },
                  },
               );
            });

         // --- Reveal Left ---
         document.querySelectorAll(".reveal-left").forEach((el) => {
            gsap.fromTo(
               el,
               { autoAlpha: 0, x: -60 },
               {
                  autoAlpha: 1,
                  x: 0,
                  duration: 0.9,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: el,
                     start: "top 85%",
                  },
               },
            );
         });

         // --- Reveal Right ---
         document.querySelectorAll(".reveal-right").forEach((el) => {
            gsap.fromTo(
               el,
               { autoAlpha: 0, x: 60 },
               {
                  autoAlpha: 1,
                  x: 0,
                  duration: 0.9,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: el,
                     start: "top 85%",
                  },
               },
            );
         });

         // --- Reveal Scale ---
         document.querySelectorAll(".reveal-scale").forEach((el) => {
            gsap.fromTo(
               el,
               { autoAlpha: 0, scale: 0.9 },
               {
                  autoAlpha: 1,
                  scale: 1,
                  duration: 0.8,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: el,
                     start: "top 85%",
                  },
               },
            );
         });

         // --- Image Reveal (clip-path wipe) ---
         document.querySelectorAll(".image-reveal").forEach((el) => {
            gsap.fromTo(
               el,
               { clipPath: "inset(0 100% 0 0)" },
               {
                  clipPath: "inset(0 0% 0 0)",
                  duration: 1.2,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: el,
                     start: "top 85%",
                  },
               },
            );
         });
      }, 300);

      return () => {
         clearTimeout(timeout);
         ScrollTrigger.getAll().forEach((t) => t.kill());
      };
   }, []);

   return null;
}
