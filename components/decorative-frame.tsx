import { cn } from "@/lib/utils";

type DecorativeFrameProps = {
   className?: string;
   /** Adds top offset so the frame sits below the fixed site header */
   clearHeader?: boolean;
};

const cornerSize = "w-12 h-12 md:w-16 md:h-16";

/** Top offset for hero decorative elements that must clear the fixed header */
export const heroFrameTopClass = "top-28 md:top-32";
export const heroFrameSideClass = "left-8 md:left-16";
export const heroFrameRightClass = "right-8 md:right-16";

export function DecorativeFrame({
   className,
   clearHeader = false,
}: DecorativeFrameProps) {
   const frameClass = clearHeader
      ? "top-28 left-8 right-8 bottom-8 md:top-32 md:left-16 md:right-16 md:bottom-16"
      : "inset-8 md:inset-16";

   const topClass = clearHeader ? heroFrameTopClass : "top-8 md:top-16";

   return (
      <>
         <div
            className={cn(
               "absolute border border-ochre/20 pointer-events-none",
               frameClass,
               className,
            )}
         />
         <div
            className={cn(
               "absolute border-t-2 border-l-2 border-ochre/50",
               cornerSize,
               topClass,
               "left-8 md:left-16",
            )}
         />
         <div
            className={cn(
               "absolute border-t-2 border-r-2 border-ochre/50",
               cornerSize,
               topClass,
               "right-8 md:right-16",
            )}
         />
         <div
            className={cn(
               "absolute border-b-2 border-l-2 border-ochre/50",
               cornerSize,
               "bottom-8 left-8 md:bottom-16 md:left-16",
            )}
         />
         <div
            className={cn(
               "absolute border-b-2 border-r-2 border-ochre/50",
               cornerSize,
               "bottom-8 right-8 md:bottom-16 md:right-16",
            )}
         />
      </>
   );
}
