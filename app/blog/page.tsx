"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/scroll-progress";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogListing } from "@/components/blog/blog-listing";

export default function BlogPage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Header />
        <BlogHero />
        <BlogListing />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
