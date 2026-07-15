"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/scroll-progress";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Header />
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactMap />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
