"use client";

import { useState, use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard, { Listing } from '@/components/ListingCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, Building, School, Hospital, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const locationData: Record<string, any> = {
  bandra: {
    name: 'Bandra',
    nameMarathi: 'बांद्रा',
    description: 'Bandra is one of Mumbai\'s most affluent neighborhoods, known for its cosmopolitan culture, upscale restaurants, and celebrity residences. The area offers excellent connectivity via both Western Railway and the Bandra-Worli Sea Link.',
    descriptionMarathi: 'बांद्रा हा मुंबईतील सर्वात श्रीमंत परिसरांपैकी एक आहे, जो त्याच्या कॉस्मोपॉलिटन संस्कृती, उच्च दर्जाची रेस्टॉरंट्स आणि सेलिब्रिटी निवासस्थानांसाठी प्रसिद्ध आहे.',
    highlights: ['Bandra-Worli Sea Link', 'Bandstand Promenade', 'Mount Mary Church', 'Linking Road Shopping', 'Fine Dining & Nightlife'],
    highlightsMarathi: ['बांद्रा-वरळी सी लिंक', 'बँडस्टँड प्रोमेनाड', 'माऊंट मेरी चर्च', 'लिंकिंग रोड शॉपिंग', 'फाइन डायनिंग आणि नाईटलाइफ'],
    avgPrice: '₹35,000 - ₹80,000 per sqft',
    connectivity: 'Excellent - Western Railway, Sea Link, Metro connectivity',
    connectivityMarathi: 'उत्कृष्ट - वेस्टर्न रेल्वे, सी लिंक, मेट्रो कनेक्टिव्हिटी',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200',
  },
  worli: {
    name: 'Worli',
    nameMarathi: 'वरळी',
    description: 'Worli is an upscale neighborhood offering stunning sea views and modern high-rise apartments. Known for the iconic Worli Sea Face and excellent connectivity to South Mumbai and suburbs.',
    descriptionMarathi: 'वरळी हा एक उच्च दर्जाचा परिसर आहे जो आश्चर्यकारक समुद्र दृश्ये आणि आधुनिक उंच इमारती देतो.',
    highlights: ['Worli Sea Face', 'Nehru Planetarium', 'Haji Ali Dargah nearby', 'Premium residential towers', 'Close to BKC'],
    highlightsMarathi: ['वरळी सी फेस', 'नेहरू तारांगण', 'हाजी अली दर्गाह जवळ', 'प्रीमियम निवासी टॉवर्स', 'BKC जवळ'],
    avgPrice: '₹40,000 - ₹90,000 per sqft',
    connectivity: 'Excellent - Sea Link, close to BKC and Prabhadevi',
    connectivityMarathi: 'उत्कृष्ट - सी लिंक, BKC आणि प्रभादेवी जवळ',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200',
  },
  juhu: {
    name: 'Juhu',
    nameMarathi: 'जुहू',
    description: 'Famous for its beach and celebrity homes, Juhu offers a perfect blend of coastal living and urban convenience. The area is well-connected and known for its vibrant atmosphere.',
    descriptionMarathi: 'समुद्रकिनारा आणि सेलिब्रिटी घरांसाठी प्रसिद्ध, जुहू किनारी जीवन आणि शहरी सोयीचे परिपूर्ण मिश्रण देतो.',
    highlights: ['Juhu Beach', 'ISKCON Temple', 'Prithvi Theatre', 'Upscale residential area', 'Good schools and restaurants'],
    highlightsMarathi: ['जुहू बीच', 'इस्कॉन मंदिर', 'पृथ्वी थिएटर', 'उच्च दर्जाचा निवासी परिसर', 'चांगल्या शाळा आणि रेस्टॉरंट्स'],
    avgPrice: '₹30,000 - ₹75,000 per sqft',
    connectivity: 'Good - Western Express Highway, close to airport',
    connectivityMarathi: 'चांगले - वेस्टर्न एक्सप्रेस हायवे, विमानतळ जवळ',
    image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=1200',
  },
};

export default function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [locale, setLocale] = useState<'en' | 'mr'>('en');
  
  const location = locationData[resolvedParams.slug] || locationData.bandra;

  const content = locale === 'en' ? {
    overview: 'Overview',
    highlights: 'Key Highlights',
    priceRange: 'Price Range',
    connectivity: 'Connectivity',
    properties: 'Available Properties in',
    viewAll: 'View All Properties',
    noProperties: 'No properties currently available in this location',
  } : {
    overview: 'विहंगावलोकन',
    highlights: 'मुख्य वैशिष्ट्ये',
    priceRange: 'किंमत श्रेणी',
    connectivity: 'कनेक्टिव्हिटी',
    properties: 'येथे उपलब्ध मालमत्ता',
    viewAll: 'सर्व मालमत्ता पहा',
    noProperties: 'या ठिकाणी सध्या कोणत्याही मालमत्ता उपलब्ध नाहीत',
  };

  // Sample properties for this location
  const sampleProperties: Listing[] = [
    {
      id: '1',
      title: `Luxurious 3BHK in ${location.name}`,
      type: 'sale',
      price: 35000000,
      locality: location.name,
      city: 'Mumbai',
      bhk: 3,
      bathrooms: 3,
      area: 1850,
      areaUnit: 'sqft',
      furnishing: 'Furnished',
      images: [location.image],
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${location.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {locale === 'en' ? location.name : location.nameMarathi}
            </h1>
            <p className="text-xl flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Mumbai, Maharashtra
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-[var(--navy)]">
                    {content.overview}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {locale === 'en' ? location.description : location.descriptionMarathi}
                  </p>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-[var(--navy)]">
                    {content.highlights}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {(locale === 'en' ? location.highlights : location.highlightsMarathi).map((highlight: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[var(--orange)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Building className="h-4 w-4 text-[var(--orange)]" />
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-[var(--orange)] mt-1" />
                      <div>
                        <p className="font-semibold text-[var(--navy)]">{content.priceRange}</p>
                        <p className="text-sm text-gray-600">{location.avgPrice}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[var(--orange)] mt-1" />
                      <div>
                        <p className="font-semibold text-[var(--navy)]">{content.connectivity}</p>
                        <p className="text-sm text-gray-600">
                          {locale === 'en' ? location.connectivity : location.connectivityMarathi}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[var(--navy)] to-blue-900 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    Interested in {location.name}?
                  </h3>
                  <Button asChild className="w-full bg-[var(--orange)] hover:bg-[var(--orange)]/90">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Properties Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-[var(--navy)]">
              {content.properties} {location.name}
            </h2>
            {sampleProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleProperties.map((property) => (
                  <ListingCard key={property.id} listing={property} locale={locale} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-gray-500">{content.noProperties}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
