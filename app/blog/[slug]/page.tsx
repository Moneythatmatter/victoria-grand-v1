"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { ScrollProgress } from "@/components/scroll-progress";
import { BlogPostDetail } from "@/components/blog/blog-post-detail";
import { RelatedPosts } from "@/components/blog/related-posts";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Header />
        <BlogPostDetail slug={slug} />
        <RelatedPosts slug={slug} />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
