"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowUpRight } from "lucide-react";
import { RoyalDivider } from "@/components/royal-corner-ornament";

const allPosts = [
  {
    id: 10,
    slug: "blue-flag-beach-vs-golden-beach-puri",
    title: "Blue Flag Beach vs Golden Beach: Which One Should You Visit in Puri?",
    date: "August 8, 2026",
    category: "Travel",
    image: "/assets/blog/blue-flag-beach-vs-golden-beach-puri.png",
  },
  {
    id: 9,
    slug: "post-ratha-yatra-travel-guide-puri",
    title: "Your Post-Ratha Yatra Travel Guide: Boutique Stays, Beaches & Temple Experiences",
    date: "July 28, 2026",
    category: "Travel",
    image: "/assets/blog/post-ratha-yatra-travel-guide-puri.png",
  },
  {
    id: 8,
    slug: "boutique-luxury-puri-ratha-yatra-stay",
    title: "Boutique Luxury Meets Sacred Puri: Where to Stay for Ratha Yatra",
    date: "July 19, 2026",
    category: "Hospitality",
    image: "/assets/blog/boutique-luxury-puri-ratha-yatra-stay.webp",
  },
  {
    id: 7,
    slug: "rath-yatra-route-puri-explained",
    title: "Rath Yatra Route in Puri Explained: The Journey Along Bada Danda",
    date: "July 15, 2026",
    category: "Heritage",
    image: "/assets/images/spiritual-rath-yatra.png",
  },
  {
    id: 1,
    slug: "jagannath-temple-spiritual-journey",
    title: "The Spiritual Journey: Understanding Jagannath Temple",
    date: "March 15, 2024",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600",
  },
  {
    id: 2,
    slug: "applique-art-odisha-craft",
    title: "The Art of Appliqué: Odisha's Living Heritage",
    date: "March 10, 2024",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=600",
  },
  {
    id: 3,
    slug: "mahaprasad-spiritual-food",
    title: "Mahaprasad: The Sacred Offering and Its Significance",
    date: "March 5, 2024",
    category: "Cuisine",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600",
  },
  {
    id: 4,
    slug: "puri-beach-getaway",
    title: "Puri Beach: A Hidden Paradise Awaits",
    date: "February 28, 2024",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
  },
  {
    id: 5,
    slug: "luxury-hospitality-puri",
    title: "Redefining Luxury: The Victoria Grand Experience",
    date: "February 20, 2024",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600",
  },
  {
    id: 6,
    slug: "chilika-lake-biodiversity",
    title: "Chilika Lake: Nature's Sanctuary",
    date: "February 12, 2024",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=600",
  },
];

export function RelatedPosts({ slug }: { slug: string }) {
  const currentPost = allPosts.find((post) => post.slug === slug);
  const related = allPosts
    .filter((post) => post.slug !== slug && post.category === currentPost?.category)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="relative py-16 md:py-24 bg-olive-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="font-serif text-4xl text-cream mb-4">Related Articles</h2>
            <RoyalDivider color="#c1893e" className="mt-6" />
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-olive-dark/10 group-hover:bg-olive-dark/20 transition-colors duration-300" />
                  </div>
                  <div className="absolute top-4 right-4 bg-ochre text-white px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-widest">
                    {post.category}
                  </div>
                </div>

                <h3 className="font-serif text-lg text-cream mb-2 group-hover:text-ochre transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-cream/60 font-sans">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ochre opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-ochre text-white hover:bg-ochre-dark transition-colors font-sans tracking-widest uppercase text-sm font-semibold rounded-lg">
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
