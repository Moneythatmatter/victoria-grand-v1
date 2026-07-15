"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { WelcomeStrip } from "@/components/welcome-strip";
import { ExperienceSection } from "@/components/experience-section";
import { AccommodationsSection } from "@/components/accommodations-section";
import { DiningSection } from "@/components/dining-section";
import { VenuesSection } from "@/components/venues-section";
import { LocationSection } from "@/components/location-section";
import { UspStrip } from "@/components/usp-strip";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BookingSection } from "@/components/booking-section";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/preloader";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/scroll-progress";
import { GSAPScrollReveal } from "@/components/gsap-scroll-reveal";
import { CulturalSection } from "@/components/cultural-section";

export default function HomePage() {
   return (
      <>
         <Preloader />
         <CustomCursor />
         <ScrollProgress />
         <GSAPScrollReveal />
         <main className="min-h-screen bg-background">
            <Header />
            <HeroSection />
            <WelcomeStrip />
            <ExperienceSection />
            <AccommodationsSection />
            <DiningSection />
            <VenuesSection />
            <LocationSection />
            <UspStrip />
            <CulturalSection />
            <TestimonialsSection />
            <BookingSection />
            <Footer />
         </main>
         <BackToTop />
      </>
   );
}
