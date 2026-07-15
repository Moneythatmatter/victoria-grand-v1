"use client";

import { useEffect } from "react";

export function ScrollRevealInit() {
   useEffect(() => {
      const selectors =
         ".reveal, .reveal-left, .reveal-right, .reveal-scale, .image-reveal";

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("revealed");
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );

      // Observe all current reveal elements
      const observeAll = () => {
         document.querySelectorAll(selectors).forEach((el) => {
            if (!el.classList.contains("revealed")) {
               observer.observe(el);
            }
         });
      };

      // Initial observation (with small delay to ensure DOM is ready after hydration)
      const timeout = setTimeout(observeAll, 200);

      // Watch for dynamically added elements
      const mutationObserver = new MutationObserver(() => {
         observeAll();
      });
      mutationObserver.observe(document.body, {
         childList: true,
         subtree: true,
      });

      return () => {
         clearTimeout(timeout);
         observer.disconnect();
         mutationObserver.disconnect();
      };
   }, []);

   return null;
}
