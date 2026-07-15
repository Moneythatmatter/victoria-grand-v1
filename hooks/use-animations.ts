"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// Hook for scroll-triggered reveal animations using Intersection Observer
export function useScrollReveal(threshold = 0.15) {
   const ref = useRef<HTMLElement>(null);
   const [isRevealed, setIsRevealed] = useState(false);

   useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsRevealed(true);
               observer.unobserve(el);
            }
         },
         { threshold, rootMargin: "0px 0px -60px 0px" },
      );

      observer.observe(el);
      return () => observer.disconnect();
   }, [threshold]);

   return { ref, isRevealed };
}

// Hook to auto-add 'revealed' class to children with .reveal class
export function useRevealChildren() {
   const containerRef = useRef<HTMLElement>(null);

   useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const revealElements = container.querySelectorAll(
         ".reveal, .reveal-left, .reveal-right, .reveal-scale, .image-reveal",
      );

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("revealed");
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
      );

      revealElements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
   }, []);

   return containerRef;
}

// Hook for animated counting numbers
export function useCountUp(end: number, duration = 2000, startOnReveal = true) {
   const [count, setCount] = useState(0);
   const [hasStarted, setHasStarted] = useState(false);
   const ref = useRef<HTMLElement>(null);

   const startCounting = useCallback(() => {
      if (hasStarted) return;
      setHasStarted(true);

      const startTime = performance.now();
      const animate = (currentTime: number) => {
         const elapsed = currentTime - startTime;
         const progress = Math.min(elapsed / duration, 1);
         // Ease out cubic
         const eased = 1 - Math.pow(1 - progress, 3);
         setCount(Math.floor(eased * end));

         if (progress < 1) {
            requestAnimationFrame(animate);
         } else {
            setCount(end);
         }
      };
      requestAnimationFrame(animate);
   }, [end, duration, hasStarted]);

   useEffect(() => {
      if (!startOnReveal) {
         startCounting();
         return;
      }

      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               startCounting();
               observer.unobserve(el);
            }
         },
         { threshold: 0.3 },
      );

      observer.observe(el);
      return () => observer.disconnect();
   }, [startOnReveal, startCounting]);

   return { count, ref };
}

// Hook for parallax scrolling effect
export function useParallax(speed = 0.3) {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const el = ref.current;
      if (!el) return;

      let ticking = false;
      const handleScroll = () => {
         if (!ticking) {
            requestAnimationFrame(() => {
               const rect = el.getBoundingClientRect();
               const scrolled = window.innerHeight - rect.top;
               if (rect.top < window.innerHeight && rect.bottom > 0) {
                  const offset = scrolled * speed;
                  el.style.transform = `translateY(${offset}px)`;
               }
               ticking = false;
            });
            ticking = true;
         }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
   }, [speed]);

   return ref;
}
