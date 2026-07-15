"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoyalCornerOrnament, RoyalDivider } from "@/components/royal-corner-ornament";

const blogPostsData: Record<string, any> = {
  "jagannath-temple-spiritual-journey": {
    title: "The Spiritual Journey: Understanding Jagannath Temple",
    author: "Raj Kumar",
    authorRole: "Heritage Expert",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    date: "March 15, 2024",
    readTime: "8 min",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200",
    excerpt: "Explore the profound spiritual significance of one of India's most sacred pilgrimage sites and its cultural impact on Puri.",
    content: `
      <h2>The Sacred Journey Begins</h2>
      <p>The Jagannath Temple stands as one of the four most important pilgrimage sites in Hindu tradition. Located in the coastal city of Puri, Odisha, this ancient temple has captivated devotees and travelers for centuries with its spiritual energy and architectural magnificence.</p>
      
      <h2>Historical Significance</h2>
      <p>Dating back to the 12th century, the temple was constructed under the reign of King Anantavarman Chodaganga. The main temple tower, known as the Jagamohana, stands approximately 65 meters tall and is decorated with intricate carvings and sculptures that tell stories from Hindu scriptures.</p>
      
      <h2>The Divine Deities</h2>
      <p>The temple houses three main deities: Lord Jagannath (a form of Lord Krishna), his brother Balabhadra, and their sister Subhadra. These are not traditional idols but wooden representations carved and replaced every 12 to 19 years in a ritual known as the Nabakalebara.</p>
      
      <h2>The Grand Rath Yatra</h2>
      <p>Every summer, millions of devotees witness the spectacular Rath Yatra (Car Festival), where the deities are pulled in massive wooden chariots through the streets of Puri. This ancient ritual, believed to date back over 2,000 years, remains one of the world's largest religious processions.</p>
      
      <h2>Mahaprasad: The Sacred Offering</h2>
      <p>One of the temple's most significant traditions is the preparation and distribution of Mahaprasad - sanctified food prepared in the temple kitchens. This blessed offering is believed to be a part of the divine itself and is accepted by devotees regardless of caste or creed.</p>
      
      <h2>Spiritual Experience</h2>
      <p>Visiting the Jagannath Temple is not merely a sightseeing experience but a transformative spiritual journey. Pilgrims come seeking blessings, peace, and a deeper connection with the divine. The temple's atmosphere, filled with devotion and ancient traditions, creates a unique spiritual ambiance.</p>
    `,
  },
  "applique-art-odisha-craft": {
    title: "The Art of Appliqué: Odisha's Living Heritage",
    author: "Priya Sharma",
    authorRole: "Cultural Historian",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    date: "March 10, 2024",
    readTime: "6 min",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200",
    excerpt: "Discover the intricate technique of appliqué art and how artisans preserve this traditional craft for generations.",
    content: `
      <h2>Ancient Art Form</h2>
      <p>Appliqué is a traditional form of textile art that has been practiced in Odisha for centuries. This intricate craft involves cutting out designs from fabric and applying them onto a base fabric, creating layered, multicolored patterns that are visually stunning and culturally significant.</p>
      
      <h2>The Technique</h2>
      <p>The process begins with selecting high-quality fabrics in vibrant colors. Artisans carefully hand-cut designs depicting religious motifs, natural elements, and geometric patterns. These cutouts are then meticulously stitched onto a base fabric using traditional techniques passed down through generations.</p>
      
      <h2>Materials and Colors</h2>
      <p>Traditional appliqué uses natural dyes and cotton fabrics, though modern adaptations have introduced synthetic materials. The color palette typically features bold, contrasting hues - reds, yellows, blues, and greens - creating visually striking compositions that tell stories of cultural heritage.</p>
      
      <h2>Applications</h2>
      <p>Appliqué work adorns traditional garments, temple hangings, wall decorations, and festival banners. Each piece represents hours of meticulous handwork, with master artisans creating bespoke designs that reflect the wearer's taste and social status.</p>
      
      <h2>Preserving Tradition</h2>
      <p>Today, organizations and artisan cooperatives work tirelessly to keep this ancient art form alive. Victoria Grand celebrates this heritage by showcasing appliqué art throughout its premises and supporting local artisans through direct partnerships and fair-trade practices.</p>
      
      <h2>The Future</h2>
      <p>As younger generations embrace modern technology, the future of appliqué art lies in balancing tradition with innovation. Contemporary designers are reinterpreting classical patterns for modern audiences, ensuring that this beautiful heritage craft continues to thrive.</p>
    `,
  },
  "mahaprasad-spiritual-food": {
    title: "Mahaprasad: The Sacred Offering and Its Significance",
    author: "Amit Patel",
    authorRole: "Cuisine Specialist",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    date: "March 5, 2024",
    readTime: "5 min",
    category: "Cuisine",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200",
    excerpt: "Learn about the spiritual and cultural importance of Mahaprasad, the blessed food offering from the Jagannath Temple.",
    content: `
      <h2>The Divine Blessing</h2>
      <p>Mahaprasad represents more than food - it embodies divine grace. Prepared daily in the temple kitchens of Jagannath, this sanctified food is offered first to the deities before being distributed to devotees. The act of consuming Mahaprasad is believed to purify the soul and grant blessings.</p>
      
      <h2>Preparation Process</h2>
      <p>The preparation of Mahaprasad follows strict rituals and guidelines established centuries ago. Cooked in massive earthen pots over open fires, the menu typically includes rice, lentils, vegetables, and ghee. Each element is chosen with spiritual intention and prepared with utmost reverence.</p>
      
      <h2>Universal Acceptance</h2>
      <p>One remarkable aspect of Mahaprasad is its universal acceptance. Regardless of caste, creed, or social status, all devotees receive the same blessed offering. This principle has made the temple a beacon of social equality and spiritual democracy.</p>
      
      <h2>Historical Significance</h2>
      <p>The tradition of Mahaprasad dates back over a thousand years. Historical records mention the temple's massive kitchen operations that could feed thousands daily - a remarkable feat of organization and devotion.</p>
    `,
  },
};

export function BlogPostDetail({ slug }: { slug: string }) {
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <section className="relative py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-olive-dark mb-4">Article Not Found</h1>
            <p className="text-olive/70 mb-8">Sorry, the article you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="bg-ochre text-white hover:bg-ochre-dark">Back to Blog</Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article className="relative py-16 md:py-24 bg-cream overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament position="top-left" color="#767545" size="lg" className="top-6 left-6 md:top-8 md:left-8 opacity-15 hidden md:block" />
      <RoyalCornerOrnament position="bottom-right" color="#767545" size="lg" className="bottom-6 right-6 md:bottom-8 md:right-8 opacity-15 hidden md:block" />

      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-olive hover:text-ochre transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans font-semibold tracking-wide">Back to Articles</span>
        </Link>

        <div className="max-w-3xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 border border-ochre/20 rounded-full">
              <span className="font-sans text-sm font-semibold text-ochre tracking-widest uppercase">{post.category}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-olive-dark mb-6 leading-tight">{post.title}</h1>

            <p className="text-lg text-olive/70 mb-8 leading-relaxed">{post.excerpt}</p>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm text-olive/60 font-sans">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {post.author}</span>
              </div>
            </div>

            <RoyalDivider color="#c1893e" className="my-8" />
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-olive-dark/5" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 font-sans text-olive/80">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="space-y-6"
              style={{
                "--tw-prose-headings": "#2a2a1a",
                "--tw-prose-body": "#3d3d2e",
                "--tw-prose-bold": "#2a2a1a",
                "--tw-prose-links": "#c1893e",
              } as any}
            />
          </div>

          {/* Author Section */}
          <div className="border-t-2 border-b-2 border-olive/10 py-8 my-12">
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-olive-dark mb-1">{post.author}</h3>
                <p className="text-olive/60 font-sans text-sm mb-3">{post.authorRole}</p>
                <p className="text-olive/70 text-sm">Expert in cultural heritage and traditional arts with over 10 years of experience in documenting and preserving Odisha's rich traditions.</p>
              </div>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4">
            <span className="font-sans text-sm font-semibold text-olive tracking-widest uppercase">Share:</span>
            <div className="flex gap-3">
              {[
                { icon: "f", label: "Facebook" },
                { icon: "t", label: "Twitter" },
                { icon: "l", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="p-3 bg-olive/5 hover:bg-ochre text-olive hover:text-white transition-all duration-300 rounded-full"
                  aria-label={social.label}
                >
                  <Share2 className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
