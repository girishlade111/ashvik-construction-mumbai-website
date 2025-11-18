"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, CheckCircle, Shield, Users, FileText, Building2, Crown, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';

export default function SalePage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');

  const content = locale === 'en' ? {
    title: 'Premium Property Sales',
    subtitle: 'Find your dream home across Mumbai - Flats, Apartments & Villas',
    description: 'Ashvik Construction offers an exclusive portfolio of residential properties across Mumbai. From luxury apartments to spacious villas, we help you find the perfect property with comprehensive support from selection to possession.',
    features: [
      { icon: Home, title: 'Extensive Portfolio', description: 'Wide selection across all Mumbai locations' },
      { icon: Shield, title: 'Verified Properties', description: 'Legally verified and clear title properties' },
      { icon: Users, title: 'Expert Guidance', description: 'Dedicated relationship managers' },
      { icon: FileText, title: 'Complete Documentation', description: 'End-to-end paperwork & registration support' },
    ],
    propertyCategories: {
      title: 'Property Categories Available',
      apartments: {
        title: 'Luxury Apartments',
        configurations: ['1 BHK', '2 BHK', '3 BHK', '4 BHK'],
        furnishing: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
        priceRange: '₹1.2 Cr - ₹8 Cr',
        features: ['Premium amenities', 'Modern architecture', 'Gated communities', '24/7 security'],
      },
      flats: {
        title: 'Premium Flats',
        configurations: ['1 BHK', '2 BHK', '3 BHK'],
        furnishing: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
        priceRange: '₹80 Lac - ₹3.5 Cr',
        features: ['Ready to move', 'Parking included', 'Power backup', 'Community facilities'],
      },
      villas: {
        title: 'Exclusive Villas',
        configurations: ['3 BHK', '4 BHK', '5 BHK'],
        furnishing: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
        priceRange: '₹5 Cr - ₹20 Cr+',
        features: ['Private gardens', 'Independent houses', 'Luxury interiors', 'Smart home systems'],
      },
    },
    bhkDetails: {
      title: 'BHK Configuration Details',
      items: [
        { bhk: '1 BHK', area: '500-800 sq.ft', ideal: 'Bachelors & Young Professionals', price: '₹80L - ₹2Cr' },
        { bhk: '2 BHK', area: '900-1400 sq.ft', ideal: 'Small Families & Couples', price: '₹1.5Cr - ₹4Cr' },
        { bhk: '3 BHK', area: '1500-2500 sq.ft', ideal: 'Growing Families', price: '₹2.5Cr - ₹7Cr' },
        { bhk: '4 BHK', area: '2500-3500 sq.ft', ideal: 'Large Families', price: '₹5Cr - ₹12Cr' },
        { bhk: '5 BHK', area: '3500+ sq.ft', ideal: 'Premium Luxury Living', price: '₹10Cr - ₹20Cr+' },
      ],
    },
    process: {
      title: 'Our Sales Process',
      steps: [
        { title: 'Requirement Analysis', description: 'Understanding your budget, location preference, and requirements' },
        { title: 'Property Shortlisting', description: 'Curated list of properties matching your criteria' },
        { title: 'Site Visits', description: 'Organized visits to shortlisted properties' },
        { title: 'Negotiation', description: 'Best price negotiation on your behalf' },
        { title: 'Legal Verification', description: 'Complete legal due diligence and documentation' },
        { title: 'Registration & Handover', description: 'Property registration and key handover' },
      ],
    },
    cta: 'Browse Properties',
  } : {
    title: 'प्रीमियम मालमत्ता विक्री',
    subtitle: 'मुंबईभर तुमचे स्वप्नातील घर शोधा - फ्लॅट्स, अपार्टमेंट्स आणि व्हिला',
    description: 'अश्विक कन्स्ट्रक्शन मुंबईभर निवासी मालमत्तांचा विशेष पोर्टफोलिओ देतो. लक्झरी अपार्टमेंट्सपासून प्रशस्त व्हिलापर्यंत, आम्ही तुम्हाला निवडीपासून ताब्यापर्यंत सर्वसमावेशक समर्थनासह परिपूर्ण मालमत्ता शोधण्यात मदत करतो.',
    features: [
      { icon: Home, title: 'विस्तृत पोर्टफोलिओ', description: 'सर्व मुंबई स्थानांवर विस्तृत निवड' },
      { icon: Shield, title: 'सत्यापित मालमत्ता', description: 'कायदेशीररित्या सत्यापित आणि स्पष्ट शीर्षक मालमत्ता' },
      { icon: Users, title: 'तज्ञ मार्गदर्शन', description: 'समर्पित संबंध व्यवस्थापक' },
      { icon: FileText, title: 'संपूर्ण दस्तऐवजीकरण', description: 'सुरवातीपासून शेवटपर्यंत कागदपत्रे आणि नोंदणी समर्थन' },
    ],
    propertyCategories: {
      title: 'उपलब्ध मालमत्ता श्रेणी',
      apartments: {
        title: 'लक्झरी अपार्टमेंट्स',
        configurations: ['१ BHK', '२ BHK', '३ BHK', '४ BHK'],
        furnishing: ['सुसज्ज', 'अर्ध-सुसज्ज', 'असुसज्ज'],
        priceRange: '₹१.२ Cr - ₹८ Cr',
        features: ['प्रीमियम सुविधा', 'आधुनिक आर्किटेक्चर', 'गेटेड कम्युनिटी', '२४/७ सुरक्षा'],
      },
      flats: {
        title: 'प्रीमियम फ्लॅट्स',
        configurations: ['१ BHK', '२ BHK', '३ BHK'],
        furnishing: ['सुसज्ज', 'अर्ध-सुसज्ज', 'असुसज्ज'],
        priceRange: '₹८० Lac - ₹३.५ Cr',
        features: ['हलवण्यास तयार', 'पार्किंग समाविष्ट', 'पॉवर बॅकअप', 'समुदाय सुविधा'],
      },
      villas: {
        title: 'विशेष व्हिला',
        configurations: ['३ BHK', '४ BHK', '५ BHK'],
        furnishing: ['सुसज्ज', 'अर्ध-सुसज्ज', 'असुसज्ज'],
        priceRange: '₹५ Cr - ₹२० Cr+',
        features: ['खाजगी बागा', 'स्वतंत्र घरे', 'लक्झरी इंटीरियर्स', 'स्मार्ट होम सिस्टम'],
      },
    },
    bhkDetails: {
      title: 'BHK कॉन्फिगरेशन तपशील',
      items: [
        { bhk: '१ BHK', area: '५००-८०० चौ.फूट', ideal: 'बॅचलर आणि तरुण व्यावसायिक', price: '₹८०L - ₹२Cr' },
        { bhk: '२ BHK', area: '९००-१४०० चौ.फूट', ideal: 'लहान कुटुंबे आणि जोडपे', price: '₹१.५Cr - ₹४Cr' },
        { bhk: '३ BHK', area: '१५००-२५०० चौ.फूट', ideal: 'वाढती कुटुंबे', price: '₹२.५Cr - ₹७Cr' },
        { bhk: '४ BHK', area: '२५००-३५०० चौ.फूट', ideal: 'मोठी कुटुंबे', price: '₹५Cr - ₹१२Cr' },
        { bhk: '५ BHK', area: '३५००+ चौ.फूट', ideal: 'प्रीमियम लक्झरी राहणी', price: '₹१०Cr - ₹२०Cr+' },
      ],
    },
    process: {
      title: 'आमची विक्री प्रक्रिया',
      steps: [
        { title: 'आवश्यकता विश्लेषण', description: 'तुमचे बजेट, स्थान प्राधान्य आणि आवश्यकता समजून घेणे' },
        { title: 'मालमत्ता शॉर्टलिस्टिंग', description: 'तुमच्या निकषांशी जुळणाऱ्या मालमत्तांची क्युरेटेड यादी' },
        { title: 'साइट भेटी', description: 'शॉर्टलिस्ट केलेल्या मालमत्तांच्या संघटित भेटी' },
        { title: 'वाटाघाटी', description: 'तुमच्या वतीने सर्वोत्तम किंमत वाटाघाटी' },
        { title: 'कायदेशीर सत्यापन', description: 'संपूर्ण कायदेशीर योग्य परिश्रम आणि दस्तऐवजीकरण' },
        { title: 'नोंदणी आणि सुपुर्दगी', description: 'मालमत्ता नोंदणी आणि की सुपुर्दगी' },
      ],
    },
    cta: 'मालमत्ता ब्राउझ करा',
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
              Premium Property Sales
            </Badge>
            <Home className="h-20 w-20 mx-auto mb-6 text-[var(--orange)]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {content.subtitle}
            </p>
            <Button size="lg" asChild className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 shadow-2xl shadow-orange-500/20 px-8 py-6 text-lg">
              <Link href="/listings?type=sale">{content.cta}</Link>
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

      {/* Property Categories - New Enhanced Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-[var(--orange)] text-[var(--orange)]">
              <Building2 className="h-4 w-4 inline mr-2" />
              Property Categories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
              {content.propertyCategories.title}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Apartments */}
            <Card className="border-2 hover:border-[var(--orange)] transition-all hover:shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-[var(--orange)] to-orange-600 text-white">
                <div className="flex items-center justify-center mb-4">
                  <Building2 className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl text-center">{content.propertyCategories.apartments.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Configurations</p>
                    <div className="flex flex-wrap gap-2">
                      {content.propertyCategories.apartments.configurations.map((config, i) => (
                        <Badge key={i} variant="outline" className="border-[var(--orange)]">{config}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Furnishing Options</p>
                    <div className="flex flex-wrap gap-2">
                      {content.propertyCategories.apartments.furnishing.map((furn, i) => (
                        <Badge key={i} variant="secondary">{furn}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-1">Price Range</p>
                    <p className="text-2xl font-bold text-[var(--navy)]">{content.propertyCategories.apartments.priceRange}</p>
                  </div>
                  <div className="space-y-2">
                    {content.propertyCategories.apartments.features.map((feat, i) => (
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
                <CardTitle className="text-2xl text-center">{content.propertyCategories.flats.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Configurations</p>
                    <div className="flex flex-wrap gap-2">
                      {content.propertyCategories.flats.configurations.map((config, i) => (
                        <Badge key={i} variant="outline" className="border-[var(--navy)]">{config}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Furnishing Options</p>
                    <div className="flex flex-wrap gap-2">
                      {content.propertyCategories.flats.furnishing.map((furn, i) => (
                        <Badge key={i} variant="secondary">{furn}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-1">Price Range</p>
                    <p className="text-2xl font-bold text-[var(--navy)]">{content.propertyCategories.flats.priceRange}</p>
                  </div>
                  <div className="space-y-2">
                    {content.propertyCategories.flats.features.map((feat, i) => (
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
                <CardTitle className="text-2xl text-center">{content.propertyCategories.villas.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Configurations</p>
                    <div className="flex flex-wrap gap-2">
                      {content.propertyCategories.villas.configurations.map((config, i) => (
                        <Badge key={i} variant="outline" className="border-orange-600">{config}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Furnishing Options</p>
                    <div className="flex flex-wrap gap-2">
                      {content.propertyCategories.villas.furnishing.map((furn, i) => (
                        <Badge key={i} variant="secondary">{furn}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-1">Price Range</p>
                    <p className="text-2xl font-bold text-[var(--navy)]">{content.propertyCategories.villas.priceRange}</p>
                  </div>
                  <div className="space-y-2">
                    {content.propertyCategories.villas.features.map((feat, i) => (
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

      {/* BHK Details - New Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-[var(--navy)] text-[var(--navy)]">
              <TrendingUp className="h-4 w-4 inline mr-2" />
              BHK Guide
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
              {content.bhkDetails.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {content.bhkDetails.items.map((item, index) => (
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
                    <div className="pt-3 border-t">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Price Range</p>
                      <p className="text-lg font-bold text-[var(--navy)]">{item.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--navy)]">
            {content.process.title}
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.process.steps.map((step, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--orange)] to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--navy)]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 pl-16">
                    {step.description}
                  </p>
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