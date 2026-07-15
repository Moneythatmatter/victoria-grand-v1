"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/scroll-progress";
import { DiningHero } from "@/components/dining/dining-hero";
import { DiningVenues } from "@/components/dining/dining-venues";
import { RestaurantGallery } from "@/components/dining/restaurant-gallery";
import { SignatureDishes } from "@/components/dining/signature-dishes";
import { ChefSection } from "@/components/dining/chef-section";
import { DiningReviews } from "@/components/dining/dining-reviews";
import { DiningAwards } from "@/components/dining/dining-awards";
import { DiningCTA } from "@/components/dining/dining-cta";

export default function DiningPage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Header />
        <DiningHero />
        <DiningVenues />
        <RestaurantGallery />
        <SignatureDishes />
        <ChefSection />
        <DiningReviews />
        <DiningAwards />
        <DiningCTA />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
