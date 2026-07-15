"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface RoyalCornerOrnamentProps {
   position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
   className?: string;
   color?: string;
   size?: "sm" | "md" | "lg" | "xl";
}

export function RoyalCornerOrnament({
   position,
   className,
   color,
   size = "md",
}: RoyalCornerOrnamentProps) {
   // Responsive sizes: smaller on mobile, larger on desktop
   const sizeClasses = {
      sm: "w-10 h-10 md:w-16 md:h-16",
      md: "w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24",
      lg: "w-14 h-14 md:w-24 md:h-24 lg:w-32 lg:h-32",
      xl: "w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40",
   };

   const positionClasses = {
      "top-left": "top-0 left-0",
      "top-right": "top-0 right-0 -scale-x-100",
      "bottom-left": "bottom-0 left-0 -scale-y-100",
      "bottom-right": "bottom-0 right-0 -scale-x-100 -scale-y-100",
   };

   return (
      <div
         className={cn(
            "absolute pointer-events-none gold-glow",
            sizeClasses[size],
            positionClasses[position],
            className,
         )}
      >
         <Image
            src="/assets/images/royal-corner.png"
            alt=""
            fill
            sizes="(max-width: 768px) 64px, 128px"
            className="object-contain"
            draggable={false}
         />
      </div>
   );
}

// Wrapper component that adds all four corners
interface RoyalFrameProps {
   children: React.ReactNode;
   className?: string;
   cornerColor?: string;
   cornerSize?: "sm" | "md" | "lg" | "xl";
   showBorder?: boolean;
}

export function RoyalFrame({
   children,
   className,
   cornerColor = "currentColor",
   cornerSize = "md",
   showBorder = false,
}: RoyalFrameProps) {
   return (
      <div className={cn("relative", className)}>
         {showBorder && (
            <div className="absolute inset-4 border border-current opacity-20 pointer-events-none" />
         )}
         <RoyalCornerOrnament
            position="top-left"
            color={cornerColor}
            size={cornerSize}
         />
         <RoyalCornerOrnament
            position="top-right"
            color={cornerColor}
            size={cornerSize}
         />
         <RoyalCornerOrnament
            position="bottom-left"
            color={cornerColor}
            size={cornerSize}
         />
         <RoyalCornerOrnament
            position="bottom-right"
            color={cornerColor}
            size={cornerSize}
         />
         {children}
      </div>
   );
}

// Simpler decorative divider for section breaks
export function RoyalDivider({
   className,
   color = "currentColor",
}: {
   className?: string;
   color?: string;
}) {
   return (
      <div
         className={cn(
            "flex items-center justify-center gap-4 py-4",
            className,
         )}
      >
         <div
            className="h-px flex-1 max-w-32 bg-current opacity-30"
            style={{ backgroundColor: color }}
         />
         <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-60"
         >
            <path
               d="M12 4 L14 10 L12 8 L10 10 Z M12 20 L10 14 L12 16 L14 14 Z M4 12 L10 10 L8 12 L10 14 Z M20 12 L14 14 L16 12 L14 10 Z"
               fill={color}
            />
            <circle cx="12" cy="12" r="2" fill={color} />
         </svg>
         <div
            className="h-px flex-1 max-w-32 bg-current opacity-30"
            style={{ backgroundColor: color }}
         />
      </div>
   );
}
