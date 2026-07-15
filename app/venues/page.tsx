"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/scroll-progress";
import { VenuesHero } from "@/components/venues/venues-hero";
import { VenuesList } from "@/components/venues/venues-list";
import { VenuesGallery } from "@/components/venues/venues-gallery";
import { VenuesServices } from "@/components/venues/venues-services";
import { VenuesCTA } from "@/components/venues/venues-cta";

export default function VenuesPage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Header />
        <VenuesHero />
        <VenuesList />
        <VenuesGallery />
        <VenuesServices />
        <VenuesCTA />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
