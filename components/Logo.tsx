import Link from "next/link";
import Image from "next/image";

const Logo = ({
   compact = false,
   size = "md",
}: {
   compact?: boolean;
   size?: "sm" | "md" | "lg";
}) => {
   return (
      <div>
         <Link href="/">
            <Image
               src={`${compact ? "/assets/logos/victoria-grand-logo-compact.png" : "/assets/logos/victoria-grand-logo.png"}`}
               alt="Logo"
               width={300}
               height={300}
               className={`${size === "sm" ? "w-[60px]" : size === "md" ? "w-[150px]" : "w-[200px]"} object-contain`}
            />
         </Link>
      </div>
   );
};

export default Logo;
