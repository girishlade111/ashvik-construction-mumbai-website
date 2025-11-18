"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: '1',
    title: 'Top 10 Localities to Buy Property in Mumbai 2024',
    slug: 'top-10-localities-mumbai-2024',
    excerpt: 'Discover the best neighborhoods in Mumbai for property investment in 2024. From Bandra to Worli, we analyze price trends and growth potential.',
    category: 'Market Insights',
    author: 'Ashvik Team',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Government Bungalow Renovation: Complete Guide',
    slug: 'government-bungalow-renovation-guide',
    excerpt: 'Everything you need to know about renovating government officer bungalows - from permissions to execution.',
    category: 'Renovation',
    author: 'Ashvik Team',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    readTime: '8 min read',
  },
  {
    id: '3',
    title: 'Real Estate Tax Benefits in India: 2024 Update',
    slug: 'real-estate-tax-benefits-2024',
    excerpt: 'Learn about the latest tax benefits and deductions available for home buyers and property investors in India.',
    category: 'Finance',
    author: 'Ashvik Team',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'Bandra West vs Worli: Where Should You Invest?',
    slug: 'bandra-vs-worli-investment',
    excerpt: 'A detailed comparison of two premium Mumbai localities to help you make an informed investment decision.',
    category: 'Location Guide',
    author: 'Ashvik Team',
    date: '2023-12-28',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
    readTime: '7 min read',
  },
  {
    id: '5',
    title: 'Home Loan Interest Rates: Complete Comparison 2024',
    slug: 'home-loan-rates-comparison-2024',
    excerpt: 'Compare home loan interest rates from all major banks and NBFCs. Find the best deal for your property purchase.',
    category: 'Finance',
    author: 'Ashvik Team',
    date: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    readTime: '5 min read',
  },
  {
    id: '6',
    title: 'Rental Property Management: Best Practices',
    slug: 'rental-property-management-tips',
    excerpt: 'Essential tips for landlords on managing rental properties effectively and maintaining good tenant relationships.',
    category: 'Property Management',
    author: 'Ashvik Team',
    date: '2023-12-15',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');

  const content = locale === 'en' ? {
    title: 'Blog & Insights',
    subtitle: 'Latest updates, tips and trends in Mumbai real estate',
    readMore: 'Read More',
    by: 'By',
    on: 'on',
  } : {
    title: 'ब्लॉग आणि अंतर्दृष्टी',
    subtitle: 'मुंबई रिअल इस्टेटमधील नवीनतम अपडेट्स, टिप्स आणि ट्रेंड्स',
    readMore: 'अधिक वाचा',
    by: 'द्वारे',
    on: 'रोजी',
  };

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--navy)] to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-blue-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[var(--orange)]">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl hover:text-[var(--orange)] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button asChild variant="ghost" className="text-[var(--orange)] hover:text-[var(--orange)] hover:bg-[var(--orange)]/10 p-0">
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1">
                      {content.readMore}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
