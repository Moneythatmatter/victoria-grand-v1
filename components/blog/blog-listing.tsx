"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowUpRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  RoyalCornerOrnament,
  RoyalDivider,
} from "@/components/royal-corner-ornament";

const blogPosts = [
  {
    id: 8,
    slug: "boutique-luxury-puri-ratha-yatra-stay",
    title: "Boutique Luxury Meets Sacred Puri: Where to Stay for Ratha Yatra",
    excerpt:
      "You don't have to choose between the sacred chaos of Ratha Yatra and a genuinely comfortable stay. Here's why a boutique hotel near the temple and beach changes the trip.",
    author: "Vikram Singh",
    date: "July 19, 2026",
    category: "Hospitality",
    image: "/assets/blog/boutique-luxury-puri-ratha-yatra-stay.webp",
    readTime: "7 min",
    featured: true,
  },
  {
    id: 7,
    slug: "rath-yatra-route-puri-explained",
    title: "Rath Yatra Route in Puri Explained: The Journey Along Bada Danda",
    excerpt:
      "Explore the 3-kilometre Bada Danda road, the sacred route of Puri's Rath Yatra connecting the Jagannath and Gundicha temples.",
    author: "Raj Kumar",
    date: "July 15, 2026",
    category: "Heritage",
    image: "/assets/images/spiritual-rath-yatra.png",
    readTime: "7 min",
    featured: true,
  },
  {
    id: 1,
    slug: "jagannath-temple-spiritual-journey",
    title: "The Spiritual Journey: Understanding Jagannath Temple",
    excerpt:
      "Explore the profound spiritual significance of one of India's most sacred pilgrimage sites and its cultural impact on Puri.",
    author: "Raj Kumar",
    date: "March 15, 2024",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    slug: "applique-art-odisha-craft",
    title: "The Art of Appliqué: Odisha's Living Heritage",
    excerpt:
      "Discover the intricate technique of appliqué art and how artisans preserve this traditional craft for generations.",
    author: "Priya Sharma",
    date: "March 10, 2024",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200",
    readTime: "6 min",
    featured: true,
  },
  {
    id: 3,
    slug: "mahaprasad-spiritual-food",
    title: "Mahaprasad: The Sacred Offering and Its Significance",
    excerpt:
      "Learn about the spiritual and cultural importance of Mahaprasad, the blessed food offering from the Jagannath Temple.",
    author: "Amit Patel",
    date: "March 5, 2024",
    category: "Cuisine",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 4,
    slug: "puri-beach-getaway",
    title: "Puri Beach: A Hidden Paradise Awaits",
    excerpt:
      "Experience the serene beauty of Puri Beach, where golden sands meet ancient traditions and modern luxury.",
    author: "Sarah Johnson",
    date: "February 28, 2024",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 5,
    slug: "luxury-hospitality-puri",
    title: "Redefining Luxury: The Victoria Grand Experience",
    excerpt:
      "Explore how Victoria Grand combines royal heritage with contemporary comfort to create unforgettable stays.",
    author: "Vikram Singh",
    date: "February 20, 2024",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    readTime: "9 min",
    featured: true,
  },
  {
    id: 6,
    slug: "chilika-lake-biodiversity",
    title: "Chilika Lake: Nature's Sanctuary",
    excerpt:
      "Discover the ecological significance and natural beauty of Asia's largest lagoon and its thriving wildlife.",
    author: "Dr. Anita Dey",
    date: "February 12, 2024",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200",
    readTime: "10 min",
    featured: false,
  },
];

export function BlogListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Heritage",
    "Culture",
    "Cuisine",
    "Travel",
    "Hospitality",
    "Nature",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <section className="relative py-16 md:py-24 bg-cream overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-left"
        color="#767545"
        size="lg"
        className="top-6 left-6 md:top-8 md:left-8 opacity-15 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#767545"
        size="lg"
        className="bottom-6 right-6 md:bottom-8 md:right-8 opacity-15 hidden md:block"
      />

      <div className="container mx-auto px-6">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-olive/40" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 bg-white border-2 border-olive/20 focus:border-ochre rounded-lg text-olive placeholder-olive/40"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-sans text-sm tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-ochre text-white"
                    : "bg-white border-2 border-olive/20 text-olive hover:border-ochre hover:text-ochre"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts Grid */}
        {featuredPosts.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-olive-dark tracking-tight">
                Featured Stories
              </h2>
              <RoyalDivider color="#c1893e" className="mt-4 mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredPosts.slice(0, 2).map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.id}
                  className="group"
                >
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
                    <div className="absolute top-4 left-4 bg-white/90 text-olive px-3 py-1 rounded-full font-sans text-xs font-semibold">
                      Featured
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-olive-dark mb-3 group-hover:text-ochre transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-olive/70 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-olive/60 font-sans">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-ochre opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-olive-dark tracking-tight">
                {featuredPosts.length > 0 ? "Latest Articles" : "All Articles"}
              </h2>
              <RoyalDivider color="#c1893e" className="mt-4 mb-8" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.id}
                  className="group"
                >
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

                  <h3 className="font-serif text-xl text-olive-dark mb-2 group-hover:text-ochre transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-olive/70 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-olive/60 font-sans">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <span className="text-xs text-olive/60">
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-sans text-xl text-olive/60">
              No articles found matching your search.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-6 bg-ochre text-white hover:bg-ochre-dark"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
