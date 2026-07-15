"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
   const dotRef = useRef<HTMLDivElement>(null);
   const ringRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      // Don't initialize on touch devices (they already have display: none from initial state)
      if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
         return;
      }

      // Show on non-touch devices
      dot.style.display = "block";
      ring.style.display = "block";

      let mouseX = -100;
      let mouseY = -100;
      let ringX = -100;
      let ringY = -100;

      // Position off-screen initially
      dot.style.left = "-100px";
      dot.style.top = "-100px";
      ring.style.left = "-100px";
      ring.style.top = "-100px";

      const handleMouseMove = (e: MouseEvent) => {
         mouseX = e.clientX;
         mouseY = e.clientY;
         dot.style.left = `${mouseX}px`;
         dot.style.top = `${mouseY}px`;
      };

      // Smooth ring following
      let animationId: number;
      const animateRing = () => {
         ringX += (mouseX - ringX) * 0.15;
         ringY += (mouseY - ringY) * 0.15;
         ring.style.left = `${ringX}px`;
         ring.style.top = `${ringY}px`;
         animationId = requestAnimationFrame(animateRing);
      };

      const handleMouseOver = (e: MouseEvent) => {
         const target = e.target as HTMLElement;
         if (
            target.closest(
               "a, button, [role='button'], input, select, textarea, [data-hoverable]",
            )
         ) {
            dot.classList.add("hovering");
            ring.classList.add("hovering");
         }
      };

      const handleMouseOut = () => {
         dot.classList.remove("hovering");
         ring.classList.remove("hovering");
      };

      const handleMouseDown = () => {
         ring.classList.add("clicking");
      };

      const handleMouseUp = () => {
         ring.classList.remove("clicking");
      };

      const handleMouseLeave = () => {
         dot.style.opacity = "0";
         ring.style.opacity = "0";
      };

      const handleMouseEnter = () => {
         dot.style.opacity = "1";
         ring.style.opacity = "1";
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseout", handleMouseOut);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);
      document.documentElement.addEventListener("mouseenter", handleMouseEnter);

      // Hide default cursor globally
      document.body.style.cursor = "none";
      const style = document.createElement("style");
      style.id = "custom-cursor-style";
      style.textContent = `
         *, *::before, *::after { cursor: none !important; }
      `;
      document.head.appendChild(style);

      animationId = requestAnimationFrame(animateRing);

      return () => {
         cancelAnimationFrame(animationId);
         document.removeEventListener("mousemove", handleMouseMove);
         document.removeEventListener("mouseover", handleMouseOver);
         document.removeEventListener("mouseout", handleMouseOut);
         document.removeEventListener("mousedown", handleMouseDown);
         document.removeEventListener("mouseup", handleMouseUp);
         document.documentElement.removeEventListener(
            "mouseleave",
            handleMouseLeave,
         );
         document.documentElement.removeEventListener(
            "mouseenter",
            handleMouseEnter,
         );
         document.body.style.cursor = "";
         const cursorStyle = document.getElementById("custom-cursor-style");
         if (cursorStyle) cursorStyle.remove();
      };
   }, []);

   return (
      <>
         <div ref={dotRef} className="custom-cursor-dot" />
         <div ref={ringRef} className="custom-cursor-ring" />
      </>
   );
}
