"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Key, CheckCircle, Shield, FileText, Users, Building2, Home, Crown, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';

export default function RentPage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');

  const content = locale === 'en' ? {
    title: 'Premium Property Rentals',
    subtitle: 'Furnished & Unfurnished Properties in Mumbai\'s Best Locations',
    description: 'Find your perfect rental home with Ashvik Construction. We offer a curated selection of furnished and semi-furnished properties across Mumbai\'s most sought-after neighborhoods. Whether you need a cozy 1BHK or a spacious villa, we have options to suit every lifestyle and budget.',
    features: [
      { icon: Key, title: 'Ready to Move', description: 'Immediate possession available' },
      { icon: Shield, title: 'Verified Properties', description: 'All properties thoroughly verified' },
      { icon: FileText, title: 'Hassle-Free Documentation', description: 'We handle all rental agreements' },
      { icon: Users, title: 'Tenant Support', description: 'Dedicated support throughout tenancy' },
    ],
    rentalCategories: {
      title: 'Rental Property Categories',
      apartments: {
        title: 'Luxury Apartments',
        configurations: ['1 BHK', '2 BHK', '3 BHK', '4 BHK'],
        furnishing: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
        priceRange: '₹35,000 - ₹2,50,000/mo',
        features: ['Premium amenities', 'Gym & pool access', '24/7 security', 'Power backup'],
      },
      flats: {
        title: 'Premium Flats',
        configurations: ['1 BHK', '2 BHK', '3 BHK'],
        furnishing: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
        priceRange: '₹25,000 - ₹1,50,000/mo',
        features: ['Gated communities', 'Parking included', 'Maintenance support', 'Pet-friendly options'],
      },
      villas: {
        title: 'Exclusive Villas',
        configurations: ['3 BHK', '4 BHK', '5 BHK'],
        furnishing: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
        priceRange: '₹2,00,000 - ₹5,00,000/mo',
        features: ['Private gardens', 'Independent living', 'Luxury interiors', 'Multiple parking'],
      },
    },
    bhkRentals: {
      title: 'BHK-wise Rental Options',
      items: [
        { bhk: '1 BHK', area: '500-800 sq.ft', ideal: 'Bachelors & Working Professionals', flats: '₹25K-45K', apartments: '₹35K-65K' },
        { bhk: '2 BHK', area: '900-1400 sq.ft', ideal: 'Small Families & Couples', flats: '₹45K-75K', apartments: '₹60K-1.2L' },
        { bhk: '3 BHK', area: '1500-2500 sq.ft', ideal: 'Families', flats: '₹75K-1.5L', apartments: '₹1.2L-2.5L', villas: '₹2L-4L' },
        { bhk: '4 BHK', area: '2500-3500 sq.ft', ideal: 'Large Families', apartments: '₹2L-3.5L', villas: '₹3L-5L' },
      ],
    },
    furnishingGuide: {
      title: 'Furnishing Options Explained',
      items: [
        {
          type: 'Furnished',
          description: 'Move-in ready with all essential furniture',
          includes: ['Beds & wardrobes', 'Sofa & dining table', 'Kitchen appliances', 'Curtains & lights', 'AC & TV'],
          premium: '+20-30% rent',
        },
        {
          type: 'Semi-Furnished',
          description: 'Basic fixtures with flexibility to add',
          includes: ['Kitchen cabinets', 'Lights & fans', 'Geysers', 'Some wardrobes', 'Basic fixtures'],
          premium: '+10-15% rent',
        },
        {
          type: 'Unfurnished',
          description: 'Blank canvas for your personal touch',
          includes: ['Basic structure', 'Electrical fittings', 'Plumbing ready', 'Clean interiors'],
          premium: 'Base rent',
        },
      ],
    },
    benefits: {
      title: 'Why Rent Through Ashvik Construction?',
      items: [
        'Transparent pricing with no hidden charges',
        'Flexible rental terms and negotiations',
        'Quick approval process (24-48 hours)',
        'Regular property maintenance support',
        'Legal rental agreement assistance',
        'Security deposit management',
        'Relocation support services',
        '24/7 emergency helpline',
      ],
    },
    cta: 'Browse Rental Properties',
  } : {
    title: 'प्रीमियम मालमत्ता भाडे',
    subtitle: 'मुंबईच्या सर्वोत्तम ठिकाणांमध्ये सुसज्ज आणि असुसज्ज मालमत्ता',
    description: 'अश्विक कन्स्ट्रक्शनसह तुमचे परिपूर्ण भाड्याचे घर शोधा. आम्ही मुंबईच्या सर्वात मागणी असलेल्या परिसरांमध्ये सुसज्ज आणि अर्ध-सुसज्ज मालमत्तांची क्युरेटेड निवड देतो.',
    features: [
      { icon: Key, title: 'हलवण्यासाठी तयार', description: 'त्वरित ताबा उपलब्ध' },
      { icon: Shield, title: 'सत्यापित मालमत्ता', description: 'सर्व मालमत्ता पूर्णपणे सत्यापित' },
      { icon: FileText, title: 'त्रासमुक्त दस्तऐवजीकरण', description: 'आम्ही सर्व भाडे करार हाताळतो' },
      { icon: Users, title: 'भाडेकरू समर्थन', description: 'भाडेपट्टा दरम्यान समर्पित समर्थन' },
    ],
    rentalCategories: {
      title: 'भाड्याच्या मालमत्ता श्रेणी',
      apartments: {
        title: 'लक्झरी अपार्टमेंट्स',
        configurations: ['१ BHK', '२ BHK', '३ BHK', '४ BHK'],
        furnishing: ['सुसज्ज', 'अर्ध-सुसज्ज', 'असुसज्ज'],
        priceRange: '₹३५,००० - ₹२,५०,०००/महिना',
        features: ['प्रीमियम सुविधा', 'जिम आणि पूल प्रवेश', '२४/७ सुरक्षा', 'पॉवर बॅकअप'],
      },
      flats: {
        title: 'प्रीमियम फ्लॅट्स',
        configurations: ['१ BHK', '२ BHK', '३ BHK'],
        furnishing: ['सुसज्ज', 'अर्ध-सुसज्ज', 'असुसज्ज'],
        priceRange: '₹२५,००० - ₹१,५०,०००/महिना',
        features: ['गेटेड कम्युनिटी', 'पार्किंग समाविष्ट', 'देखभाल समर्थन', 'पाळीव प्राणी-अनुकूल पर्याय'],
      },
      villas: {
        title: 'विशेष व्हिला',
        configurations: ['३ BHK', '४ BHK', '५ BHK'],
        furnishing: ['सुसज्ज', 'अर्ध-सुसज्ज', 'असुसज्ज'],
        priceRange: '₹२,००,००० - ₹५,००,०००/महिना',
        features: ['खाजगी बागा', 'स्वतंत्र राहणी', 'लक्झरी इंटीरियर्स', 'अनेक पार्किंग'],
      },
    },
    bhkRentals: {
      title: 'BHK-नुसार भाड्याचे पर्याय',
      items: [
        { bhk: '१ BHK', area: '५००-८०० चौ.फूट', ideal: 'बॅचलर आणि कामकाजी व्यावसायिक', flats: '₹२५K-४५K', apartments: '₹३५K-६५K' },
        { bhk: '२ BHK', area: '९००-१४०० चौ.फूट', ideal: 'लहान कुटुंबे आणि जोडपे', flats: '₹४५K-७५K', apartments: '₹६०K-१.२L' },
        { bhk: '३ BHK', area: '१५००-२५०० चौ.फूट', ideal: 'कुटुंबे', flats: '₹७५K-१.५L', apartments: '₹१.२L-२.५L', villas: '₹२L-४L' },
        { bhk: '४ BHK', area: '२५००-३५०० चौ.फूट', ideal: 'मोठी कुटुंबे', apartments: '₹२L-३.५L', villas: '₹३L-५L' },
      ],
    },
    furnishingGuide: {
      title: 'फर्निशिंग पर्याय स्पष्टीकरण',
      items: [
        {
          type: 'सुसज्ज',
          description: 'सर्व आवश्यक फर्निचरसह राहण्यास तयार',
          includes: ['बेड आणि वॉर्डरोब', 'सोफा आणि जेवणाचे टेबल', 'स्वयंपाकघर उपकरणे', 'पडदे आणि दिवे', 'AC आणि TV'],
          premium: '+२०-३०% भाडे',
        },
        {
          type: 'अर्ध-सुसज्ज',
          description: 'जोडण्याच्या लवचिकतेसह मूलभूत फिक्स्चर',
          includes: ['स्वयंपाकघर कॅबिनेट', 'दिवे आणि पंखे', 'गीझर', 'काही वॉर्डरोब', 'मूलभूत फिक्स्चर'],
          premium: '+१०-१५% भाडे',
        },
        {
          type: 'असुसज्ज',
          description: 'तुमच्या वैयक्तिक स्पर्शासाठी रिक्त कॅनव्हास',
          includes: ['मूलभूत संरचना', 'इलेक्ट्रिकल फिटिंग', 'प्लंबिंग तयार', 'स्वच्छ इंटीरियर'],
          premium: 'मूळ भाडे',
        },
      ],
    },
    benefits: {
      title: 'अश्विक कन्स्ट्रक्शनद्वारे भाड्याने का घ्यावे?',
      items: [
        'कोणत्याही लपविलेल्या शुल्काशिवाय पारदर्शक किंमत',
        'लवचिक भाडे अटी आणि वाटाघाटी',
        'जलद मंजूरी प्रक्रिया (२४-४८ तास)',
        'नियमित मालमत्ता देखभाल समर्थन',
        'कायदेशीर भाडे करार सहाय्य',
        'सुरक्षा ठेव व्यवस्थापन',
        'स्थलांतर समर्थन सेवा',
        '२४/७ आपत्कालीन हेल्पलाइन',
      ],
    },
    cta: 'भाड्याची मालमत्ता ब्राउझ करा',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      <Header locale={locale} />
      
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[var(--navy)] via-blue-900 to-[var(--navy)] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/15 backdrop-blur-sm text-white border-white/20 px-6 py-2">
              <Award className="h-4 w-4 inline mr-2" />
              Premium Rentals
            </Badge>
            <Key className="h-20 w-20 mx-auto mb-6 text-[var(--orange)]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {content.subtitle}
            </p>
            <Button size="lg" asChild className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 shadow-2xl shadow-orange-500/20 px-8 py-6 text-lg">
              <Link href="/listings?type=rent">{content.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {content.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-[var(--orange)] transition-all hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--orange)] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[var(--navy)]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rental Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-[var(--orange)] text-[var(--orange)]">
              <Building2 className="h-4 w-4 inline mr-2" />
              Rental Categories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
              {content.rentalCategories.title}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Apartments */}
            <Card className="border-2 hover:border-[var(--orange)] transition-all hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-[var(--orange)] to-orange-600 text-white">
                <div className="flex items-center justify-center mb-4">
                  <Building2 className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl text-center">{content.rentalCategories.apartments.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Configurations</p>
                    <div className="flex flex-wrap gap-2">
                      {content.rentalCategories.apartments.configurations.map((config, i) => (
                        <Badge key={i} variant="outline" className="border-[var(--orange)]">{config}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Furnishing Options</p>
                    <div className="flex flex-wrap gap-2">
                      {content.rentalCategories.apartments.furnishing.map((furn, i) => (
                        <Badge key={i} variant="secondary">{furn}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-1">Monthly Rent</p>
                    <p className="text-2xl font-bold text-[var(--navy)]">{content.rentalCategories.apartments.priceRange}</p>
                  </div>
                  <div className="space-y-2">
                    {content.rentalCategories.apartments.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[var(--orange)] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flats */}
            <Card className="border-2 hover:border-[var(--navy)] transition-all hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-[var(--navy)] to-blue-900 text-white">
                <div className="flex items-center justify-center mb-4">
                  <Home className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl text-center">{content.rentalCategories.flats.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Configurations</p>
                    <div className="flex flex-wrap gap-2">
                      {content.rentalCategories.flats.configurations.map((config, i) => (
                        <Badge key={i} variant="outline" className="border-[var(--navy)]">{config}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Furnishing Options</p>
                    <div className="flex flex-wrap gap-2">
                      {content.rentalCategories.flats.furnishing.map((furn, i) => (
                        <Badge key={i} variant="secondary">{furn}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-1">Monthly Rent</p>
                    <p className="text-2xl font-bold text-[var(--navy)]">{content.rentalCategories.flats.priceRange}</p>
                  </div>
                  <div className="space-y-2">
                    {content.rentalCategories.flats.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[var(--orange)] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Villas */}
            <Card className="border-2 hover:border-orange-600 transition-all hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-orange-600 to-[var(--orange)] text-white">
                <div className="flex items-center justify-center mb-4">
                  <Crown className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl text-center">{content.rentalCategories.villas.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Configurations</p>
                    <div className="flex flex-wrap gap-2">
                      {content.rentalCategories.villas.configurations.map((config, i) => (
                        <Badge key={i} variant="outline" className="border-orange-600">{config}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Furnishing Options</p>
                    <div className="flex flex-wrap gap-2">
                      {content.rentalCategories.villas.furnishing.map((furn, i) => (
                        <Badge key={i} variant="secondary">{furn}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-1">Monthly Rent</p>
                    <p className="text-2xl font-bold text-[var(--navy)]">{content.rentalCategories.villas.priceRange}</p>
                  </div>
                  <div className="space-y-2">
                    {content.rentalCategories.villas.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[var(--orange)] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BHK Rentals Guide */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-[var(--navy)] text-[var(--navy)]">
              <TrendingUp className="h-4 w-4 inline mr-2" />
              Rental Guide
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
              {content.bhkRentals.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {content.bhkRentals.items.map((item, index) => (
              <Card key={index} className="border-2 hover:border-[var(--orange)] transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-[var(--orange)] mb-2">{item.bhk}</div>
                    <p className="text-sm text-gray-500">{item.area}</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-1">Ideal For</p>
                      <p className="text-sm text-gray-700">{item.ideal}</p>
                    </div>
                    <div className="pt-3 border-t space-y-2">
                      <div>
                        <p className="text-xs text-gray-500">Flats</p>
                        <p className="text-sm font-bold text-[var(--navy)]">{item.flats}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Apartments</p>
                        <p className="text-sm font-bold text-[var(--navy)]">{item.apartments}</p>
                      </div>
                      {item.villas && (
                        <div>
                          <p className="text-xs text-gray-500">Villas</p>
                          <p className="text-sm font-bold text-[var(--navy)]">{item.villas}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Furnishing Guide */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
              {content.furnishingGuide.title}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content.furnishingGuide.items.map((item, index) => (
              <Card key={index} className="border-2 hover:border-[var(--orange)] transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-[var(--navy)]">{item.type}</CardTitle>
                  <p className="text-center text-sm text-gray-600">{item.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-3">What's Included:</p>
                      <div className="space-y-2">
                        {item.includes.map((inc, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-[var(--orange)] flex-shrink-0" />
                            <span className="text-sm text-gray-600">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <Badge variant="outline" className="border-[var(--orange)] text-[var(--orange)]">
                        {item.premium}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--navy)]">
              {content.benefits.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.benefits.items.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-[var(--orange)] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}