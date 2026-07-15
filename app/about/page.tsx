"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/scroll-progress";
import { AboutHero } from "@/components/about/about-hero";
import { OurStory } from "@/components/about/our-story";
import { HotelAtAGlance } from "@/components/about/hotel-at-a-glance";
import { MissionValues } from "@/components/about/mission-values";
import { LocationSection } from "@/components/location-section";
import { TeamSection } from "@/components/about/team-section";
import { AwardsSection } from "@/components/about/awards-section";
import { TestimonialsAbout } from "@/components/about/testimonials-about";
import { AboutCTA } from "@/components/about/about-cta";

export default function AboutPage() {
   return (
      <>
         <CustomCursor />
         <ScrollProgress />
         <main className="min-h-screen bg-background">
            <Header />
            <AboutHero />
            <OurStory />
            <HotelAtAGlance />
            <MissionValues />
            <LocationSection
               badge="Location"
               headline="Find Us in the Heart of Puri"
               body={
                  <div className="font-sans text-lg text-cream/80 leading-relaxed text-balance space-y-2">
                     <p className="font-serif text-2xl text-ochre mb-4">
                        Hotel Victoria Grand
                     </p>
                     <p>
                        Hotel Victoria Grand, Chandan Hazuri Road, Near Sanskrit
                        University, In front of Ramakrishnan Mission Ashram,
                        Puri - 752001, Odisha
                     </p>
                  </div>
               }
               customDistances={[
                  { label: "Lord Jagannath Temple", distance: "1 km" },
                  { label: "Sea Beach", distance: "0.5 km" },
                  { label: "Railway Station", distance: "1.5 km" },
                  { label: "Bus Stand", distance: "2.5 km" },
                  { label: "Airport", distance: "60 km" },
               ]}
            />
            <TeamSection />
            <AwardsSection />
            <TestimonialsAbout />
            <AboutCTA />
            <Footer />
         </main>
         <BackToTop />
      </>
   );
}
