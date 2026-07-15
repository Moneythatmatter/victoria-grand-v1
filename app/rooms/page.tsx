"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/scroll-progress";
import { RoomsHero } from "@/components/rooms/rooms-hero";
import { RoomsList } from "@/components/rooms/rooms-list";
import { RoomAmenities } from "@/components/rooms/room-amenities";
import { RoomPolicies } from "@/components/rooms/room-policies";
import { RoomsCTA } from "@/components/rooms/rooms-cta";

export default function RoomsPage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Header />
        <RoomsHero />
        <RoomsList />
        <RoomAmenities />
        <RoomPolicies />
        <RoomsCTA />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
