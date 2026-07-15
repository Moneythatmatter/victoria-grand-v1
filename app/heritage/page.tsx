import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeritageHero } from "@/components/heritage/heritage-hero";
import { HeritageIntro } from "@/components/heritage/heritage-intro";
import { HeritageAttractions } from "@/components/heritage/heritage-attractions";
import { HeritageFestivals } from "@/components/heritage/heritage-festivals";
import { HeritageCrafts } from "@/components/heritage/heritage-crafts";
import { HeritageGallery } from "@/components/heritage/heritage-gallery";
import { HeritageCTA } from "@/components/heritage/heritage-cta";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
   title: "Heritage & Culture | Victoria Grand - Discover Puri's Sacred Legacy",
   description:
      "Explore Puri's rich cultural heritage - from the sacred Jagannath Temple to Konark Sun Temple, traditional crafts, festivals, and natural wonders. Experience centuries of spiritual tradition.",
   keywords: [
      "Puri heritage",
      "Jagannath Temple",
      "Konark Sun Temple",
      "Odisha culture",
      "Rath Yatra",
      "Applique art",
      "Chilika Lake",
   ],
};

export default function HeritagePage() {
   return (
      <>
         <Header />
         <CustomCursor />
         <ScrollProgress />
         <main className="min-h-screen bg-background">
            <HeritageHero />
            <HeritageIntro />
            <HeritageAttractions />
            <HeritageFestivals />
            <HeritageCrafts />
            <HeritageGallery />
            <HeritageCTA />
         </main>
         <BackToTop />
         <Footer />
      </>
   );
}
