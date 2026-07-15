"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
   variant?: "light" | "dark";
   className?: string;
}

export function SectionDivider({
   variant = "light",
   className,
}: SectionDividerProps) {
   const bgColor = variant === "dark" ? "bg-olive-dark" : "bg-cream";
   const lineColor =
      variant === "dark" ? "rgba(193,137,62,0.3)" : "rgba(118,117,69,0.2)";
   const accentColor = variant === "dark" ? "#c1893e" : "#767545";

   return (
      <div className={cn("section-divider-ornament", bgColor, className)}>
         <svg
            viewBox="0 0 1200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
         >
            {/* Center diamond ornament */}
            <path
               d="M600 8 L612 30 L600 52 L588 30 Z"
               fill={accentColor}
               opacity="0.3"
            />
            <path
               d="M600 14 L608 30 L600 46 L592 30 Z"
               fill={accentColor}
               opacity="0.5"
            />
            <circle cx="600" cy="30" r="3" fill={accentColor} opacity="0.8" />

            {/* Left ornamental line */}
            <line
               x1="200"
               y1="30"
               x2="580"
               y2="30"
               stroke={lineColor}
               strokeWidth="1"
            />
            {/* Left small diamonds */}
            <path
               d="M280 26 L284 30 L280 34 L276 30 Z"
               fill={accentColor}
               opacity="0.3"
            />
            <path
               d="M400 26 L404 30 L400 34 L396 30 Z"
               fill={accentColor}
               opacity="0.3"
            />
            <path
               d="M500 26 L504 30 L500 34 L496 30 Z"
               fill={accentColor}
               opacity="0.4"
            />

            {/* Right ornamental line */}
            <line
               x1="620"
               y1="30"
               x2="1000"
               y2="30"
               stroke={lineColor}
               strokeWidth="1"
            />
            {/* Right small diamonds */}
            <path
               d="M700 26 L704 30 L700 34 L696 30 Z"
               fill={accentColor}
               opacity="0.4"
            />
            <path
               d="M800 26 L804 30 L800 34 L796 30 Z"
               fill={accentColor}
               opacity="0.3"
            />
            <path
               d="M920 26 L924 30 L920 34 L916 30 Z"
               fill={accentColor}
               opacity="0.3"
            />

            {/* Outer flourish curves - left */}
            <path
               d="M200 30 Q210 20, 220 30 Q210 40, 200 30"
               stroke={accentColor}
               fill="none"
               opacity="0.3"
               strokeWidth="1"
            />

            {/* Outer flourish curves - right */}
            <path
               d="M1000 30 Q990 20, 980 30 Q990 40, 1000 30"
               stroke={accentColor}
               fill="none"
               opacity="0.3"
               strokeWidth="1"
            />
         </svg>
      </div>
   );
}
