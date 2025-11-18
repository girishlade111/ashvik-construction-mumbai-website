"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Home, Key, Settings, ArrowRight, CheckCircle, Star, Quote, Sparkles, Award, TrendingUp, Crown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');

  const content = locale === 'en' ? {
    hero: {
      badge: 'Mumbai\'s Premier Real Estate Partner',
      title: 'Discover Luxury Living in Mumbai',
      subtitle: 'Premium Flats, Apartments & Villas with Expert Renovation & Property Management',
      cta: 'Explore Properties',
      ctaSecondary: 'Schedule Consultation',
      stats: [
        { value: '500+', label: 'Properties Sold' },
        { value: '15+', label: 'Years Excellence' },
        { value: '1000+', label: 'Happy Clients' },
        { value: '₹500Cr+', label: 'Assets Managed' },
      ],
    },
    propertyTypes: {
      title: 'Exclusive Property Collection',
      subtitle: 'Curated selection of premium properties across Mumbai',
      types: [
        {
          icon: Building2,
          title: 'Luxury Apartments',
          description: '1, 2, 3 & 4 BHK apartments in prime locations',
          features: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
          price: 'From ₹1.5 Cr',
          link: '/listings?type=sale&category=apartment',
        },
        {
          icon: Home,
          title: 'Premium Flats',
          description: 'Modern 1, 2 & 3 BHK flats with world-class amenities',
          features: ['Ready to Move', 'Gated Community', 'Parking'],
          price: 'From ₹80 Lac',
          link: '/listings?type=sale&category=flat',
        },
        {
          icon: Crown,
          title: 'Exclusive Villas',
          description: 'Spacious 3, 4 & 5 BHK villas with private gardens',
          features: ['Independent', 'Luxury Interiors', 'Smart Home'],
          price: 'From ₹5 Cr',
          link: '/listings?type=sale&category=villa',
        },
      ],
    },
    rentalOptions: {
      title: 'Premium Rental Properties',
      subtitle: 'Furnished & unfurnished options available',
      cards: [
        {
          bhk: '1 BHK',
          flatPrice: '₹25,000 - ₹45,000/mo',
          apartmentPrice: '₹35,000 - ₹65,000/mo',
          features: ['Ideal for bachelors', 'Compact & cozy', '500-800 sq.ft'],
        },
        {
          bhk: '2 BHK',
          flatPrice: '₹45,000 - ₹75,000/mo',
          apartmentPrice: '₹60,000 - ₹1,20,000/mo',
          features: ['Perfect for small families', 'Spacious living', '900-1400 sq.ft'],
        },
        {
          bhk: '3 BHK',
          flatPrice: '₹75,000 - ₹1,50,000/mo',
          apartmentPrice: '₹1,20,000 - ₹2,50,000/mo',
          villaPrice: '₹2,00,000 - ₹4,00,000/mo',
          features: ['Ideal for families', 'Multiple bedrooms', '1500-2500 sq.ft'],
        },
      ],
    },
    services: {
      title: 'Comprehensive Real Estate Solutions',
      subtitle: 'End-to-end services for all your property needs',
      items: [
        {
          icon: Building2,
          title: 'Elite Renovation Services',
          description: 'Government officer bungalows & luxury residences with premium finishes',
          link: '/services/renovation',
        },
        {
          icon: Home,
          title: 'Property Sales',
          description: 'Buy your dream home - Flats, Apartments, Villas across Mumbai',
          link: '/services/sale',
        },
        {
          icon: Key,
          title: 'Premium Rentals',
          description: 'Furnished & unfurnished properties in Bandra, Worli, Juhu & more',
          link: '/services/rent',
        },
        {
          icon: Settings,
          title: 'Property Management',
          description: 'Complete management solutions with dedicated support',
          link: '/services/management',
        },
      ],
    },
    locations: {
      title: 'Prime Mumbai Locations',
      subtitle: 'Serving the most sought-after neighborhoods',
      areas: ['Bandra', 'Worli', 'Juhu', 'Andheri', 'Powai', 'Thane', 'Navi Mumbai', 'Borivali', 'Chembur'],
    },
    why: {
      title: 'Why Choose Ashvik Construction?',
      subtitle: 'Excellence in Every Transaction',
      points: [
        '15+ years of industry leadership',
        'Expert civil engineers & legal advisors',
        'Transparent pricing, zero hidden costs',
        'End-to-end property solutions',
        'Government-approved contractor',
        'Extensive Mumbai network',
        'Dedicated relationship managers',
        'Post-sale support & assistance',
      ],
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'Trusted by Mumbai\'s discerning property buyers',
      items: [
        {
          name: 'Rajesh Sharma',
          role: 'Purchased 3BHK Apartment, Bandra',
          content: 'Ashvik Construction helped me find a stunning 3BHK furnished apartment in Bandra. Their service was impeccable, and they handled everything from documentation to interior selection.',
          rating: 5,
        },
        {
          name: 'Priya Desai',
          role: 'Government Officer',
          content: 'The renovation of my official bungalow exceeded expectations. The team was professional, timely, and the quality of work was outstanding. Highly recommended!',
          rating: 5,
        },
        {
          name: 'Amit Patel',
          role: 'Villa Owner, Worli',
          content: 'Managing my 4BHK villa rental has been stress-free for 3 years. They handle tenant screening, maintenance, and rent collection flawlessly. Worth every penny!',
          rating: 5,
        },
      ],
    },
    cta: {
      title: 'Ready to Find Your Dream Property?',
      subtitle: 'Explore our exclusive collection of flats, apartments, and villas',
      button: 'Start Your Search',
      buttonSecondary: 'Schedule Site Visit',
    },
  } : {
    hero: {
      badge: 'मुंबईचा प्रीमियर रिअल इस्टेट भागीदार',
      title: 'मुंबईत लक्झरी राहणी शोधा',
      subtitle: 'तज्ञ नूतनीकरण आणि मालमत्ता व्यवस्थापनासह प्रीमियम फ्लॅट्स, अपार्टमेंट्स आणि व्हिला',
      cta: 'मालमत्ता एक्सप्लोर करा',
      ctaSecondary: 'सल्लामसलत शेड्यूल करा',
      stats: [
        { value: '५००+', label: 'मालमत्ता विकल्या' },
        { value: '१५+', label: 'वर्षे उत्कृष्टता' },
        { value: '१०००+', label: 'आनंदी ग्राहक' },
        { value: '₹५००Cr+', label: 'मालमत्ता व्यवस्थापित' },
      ],
    },
    propertyTypes: {
      title: 'विशेष मालमत्ता संग्रह',
      subtitle: 'मुंबईभरातील प्रीमियम मालमत्तांची क्युरेटेड निवड',
      types: [
        {
          icon: Building2,
          title: 'लक्झरी अपार्टमेंट्स',
          description: 'प्रमुख ठिकाणी १, २, ३ आणि ४ BHK अपार्टमेंट्स',
          features: ['सुसज्ज', 'अर्ध-सुसज्ज', 'असुसज्ज'],
          price: '₹१.५ Cr पासून',
          link: '/listings?type=sale&category=apartment',
        },
        {
          icon: Home,
          title: 'प्रीमियम फ्लॅट्स',
          description: 'जागतिक दर्जाच्या सुविधांसह आधुनिक १, २ आणि ३ BHK फ्लॅट्स',
          features: ['हलवण्यास तयार', 'गेटेड कम्युनिटी', 'पार्किंग'],
          price: '₹८० Lac पासून',
          link: '/listings?type=sale&category=flat',
        },
        {
          icon: Crown,
          title: 'विशेष व्हिला',
          description: 'खाजगी बागांसह प्रशस्त ३, ४ आणि ५ BHK व्हिला',
          features: ['स्वतंत्र', 'लक्झरी इंटीरियर्स', 'स्मार्ट होम'],
          price: '₹५ Cr पासून',
          link: '/listings?type=sale&category=villa',
        },
      ],
    },
    rentalOptions: {
      title: 'प्रीमियम भाड्याची मालमत्ता',
      subtitle: 'सुसज्ज आणि असुसज्ज पर्याय उपलब्ध',
      cards: [
        {
          bhk: '१ BHK',
          flatPrice: '₹२५,००० - ₹४५,०००/महिना',
          apartmentPrice: '₹३५,००० - ₹६५,०००/महिना',
          features: ['बॅचलर्ससाठी आदर्श', 'कॉम्पॅक्ट आणि आरामदायक', '५००-८०० चौ.फूट'],
        },
        {
          bhk: '२ BHK',
          flatPrice: '₹४५,००० - ₹७५,०००/महिना',
          apartmentPrice: '₹६०,००० - ₹१,२०,०००/महिना',
          features: ['लहान कुटुंबांसाठी परिपूर्ण', 'प्रशस्त राहणी', '९००-१४०० चौ.फूट'],
        },
        {
          bhk: '३ BHK',
          flatPrice: '₹७५,००० - ₹१,५०,०००/महिना',
          apartmentPrice: '₹१,२०,००० - ₹२,५०,०००/महिना',
          villaPrice: '₹२,००,००० - ₹४,००,०००/महिना',
          features: ['कुटुंबांसाठी आदर्श', 'अनेक शयनकक्ष', '१५००-२५०० चौ.फूट'],
        },
      ],
    },
    services: {
      title: 'सर्वसमावेशक रिअल इस्टेट उपाय',
      subtitle: 'तुमच्या सर्व मालमत्ता गरजांसाठी सुरवातीपासून शेवटपर्यंत सेवा',
      items: [
        {
          icon: Building2,
          title: 'उच्चदर्जाच्या नूतनीकरण सेवा',
          description: 'प्रीमियम फिनिशसह सरकारी अधिकारी बंगले आणि लक्झरी निवास',
          link: '/services/renovation',
        },
        {
          icon: Home,
          title: 'मालमत्ता विक्री',
          description: 'तुमचे स्वप्नातील घर खरेदी करा - मुंबईभरातील फ्लॅट्स, अपार्टमेंट्स, व्हिला',
          link: '/services/sale',
        },
        {
          icon: Key,
          title: 'प्रीमियम भाडे',
          description: 'बांद्रा, वरळी, जुहू आणि अधिकमध्ये सुसज्ज आणि असुसज्ज मालमत्ता',
          link: '/services/rent',
        },
        {
          icon: Settings,
          title: 'मालमत्ता व्यवस्थापन',
          description: 'समर्पित समर्थनासह संपूर्ण व्यवस्थापन उपाय',
          link: '/services/management',
        },
      ],
    },
    locations: {
      title: 'प्रमुख मुंबई स्थाने',
      subtitle: 'सर्वात मागणी असलेल्या परिसरांमध्ये सेवा देत आहोत',
      areas: ['बांद्रा', 'वरळी', 'जुहू', 'अंधेरी', 'पवई', 'ठाणे', 'नवी मुंबई', 'बोरीवली', 'चेंबूर'],
    },
    why: {
      title: 'अश्विक कन्स्ट्रक्शन का निवडावे?',
      subtitle: 'प्रत्येक व्यवहारात उत्कृष्टता',
      points: [
        '१५+ वर्षे उद्योग नेतृत्व',
        'तज्ञ सिव्हिल इंजिनियर आणि कायदेशीर सल्लागार',
        'पारदर्शक किंमत, शून्य लपलेले खर्च',
        'सुरवातीपासून शेवटपर्यंत मालमत्ता उपाय',
        'सरकार-मंजूर कंत्राटदार',
        'विस्तृत मुंबई नेटवर्क',
        'समर्पित संबंध व्यवस्थापक',
        'विक्रीनंतर समर्थन आणि सहाय्य',
      ],
    },
    testimonials: {
      title: 'ग्राहक प्रशंसापत्रे',
      subtitle: 'मुंबईच्या विवेकी मालमत्ता खरेदीदारांनी विश्वास',
      items: [
        {
          name: 'राजेश शर्मा',
          role: 'बांद्रा येथे ३BHK अपार्टमेंट खरेदी केले',
          content: 'अश्विक कन्स्ट्रक्शनने मला बांद्रा येथे एक आश्चर्यकारक ३BHK सुसज्ज अपार्टमेंट शोधण्यात मदत केली. त्यांची सेवा निष्कलंक होती.',
          rating: 5,
        },
        {
          name: 'प्रिया देसाई',
          role: 'सरकारी अधिकारी',
          content: 'माझ्या अधिकृत बंगल्याचे नूतनीकरण अपेक्षा ओलांडले. टीम व्यावसायिक, वेळेवर होती आणि कामाची गुणवत्ता उत्कृष्ट होती!',
          rating: 5,
        },
        {
          name: 'अमित पटेल',
          role: 'व्हिला मालक, वरळी',
          content: 'माझ्या ४BHK व्हिला भाड्याचे व्यवस्थापन ३ वर्षांपासून तणावमुक्त आहे. ते भाडेकरू स्क्रीनिंग, देखभाल, आणि भाडे संकलन निर्दोषपणे हाताळतात!',
          rating: 5,
        },
      ],
    },
    cta: {
      title: 'तुमची स्वप्नातील मालमत्ता शोधण्यास तयार आहात?',
      subtitle: 'फ्लॅट्स, अपार्टमेंट्स आणि व्हिलाचा आमचा विशेष संग्रह एक्सप्लोर करा',
      button: 'तुमचा शोध सुरू करा',
      buttonSecondary: 'साइट भेट शेड्यूल करा',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      <Header locale={locale} />
      
      {/* Hero Section - Enhanced with luxury gradient */}
      <section className="relative bg-gradient-to-br from-[var(--navy)] via-blue-900 to-[var(--navy)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/50 to-transparent" />
        <div className="container mx-auto px-4 py-24 lg:py-32 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/15 backdrop-blur-sm text-white border-white/20 px-6 py-2 text-sm">
              <Sparkles className="h-4 w-4 inline mr-2" />
              {content.hero.badge}
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" asChild className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 text-white shadow-2xl shadow-orange-500/20 px-8 py-6 text-lg">
                <Link href="/listings">{content.hero.cta}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-[var(--navy)] px-8 py-6 text-lg">
                <Link href="/contact">{content.hero.ctaSecondary}</Link>
              </Button>
            </div>
            
            {/* Stats - Enhanced */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {content.hero.stats.map((stat, index) => (
                <div key={index} className="text-center backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--orange)] mb-2 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section - New Luxurious Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-[var(--orange)] text-[var(--orange)]">
              <Award className="h-4 w-4 inline mr-2" />
              Premium Collection
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
              {content.propertyTypes.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.propertyTypes.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content.propertyTypes.types.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[var(--orange)] overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--orange)]/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
                  <CardHeader className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--orange)] to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {type.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[var(--orange)] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-[var(--navy)]">{type.price}</span>
                      <Button asChild variant="ghost" className="text-[var(--orange)] hover:text-[var(--orange)] hover:bg-orange-50">
                        <Link href={type.link}>
                          View All <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rental Options Section - New */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-[var(--navy)] text-[var(--navy)]">
              <Key className="h-4 w-4 inline mr-2" />
              Rental Properties
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
              {content.rentalOptions.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.rentalOptions.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.rentalOptions.cards.map((card, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-[var(--navy)]">
                <CardHeader className="bg-gradient-to-br from-[var(--navy)] to-blue-900 text-white rounded-t-lg">
                  <div className="text-center">
                    <CardTitle className="text-3xl mb-2">{card.bhk}</CardTitle>
                    <CardDescription className="text-blue-200">Starting from</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Flats</p>
                      <p className="text-lg font-bold text-[var(--navy)]">{card.flatPrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Apartments</p>
                      <p className="text-lg font-bold text-[var(--navy)]">{card.apartmentPrice}</p>
                    </div>
                    {card.villaPrice && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Villas</p>
                        <p className="text-lg font-bold text-[var(--navy)]">{card.villaPrice}</p>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2 pt-4 border-t">
                    {card.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[var(--orange)] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-6 bg-[var(--orange)] hover:bg-[var(--orange)]/90">
                    <Link href={`/listings?type=rent&bhk=${card.bhk.charAt(0)}`}>View Properties</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-[var(--orange)] text-[var(--orange)]">
              <Settings className="h-4 w-4 inline mr-2" />
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
              {content.services.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[var(--orange)]">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--navy)] to-blue-900 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-[var(--orange)] transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base">{service.description}</CardDescription>
                    <Link 
                      href={service.link}
                      className="text-[var(--orange)] hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      Explore <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
              {content.locations.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.locations.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {content.locations.areas.map((area, index) => (
              <Link key={index} href={`/locations/${area.toLowerCase().replace(' ', '-')}`}>
                <Badge 
                  variant="outline" 
                  className="text-base py-3 px-6 hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] transition-all cursor-pointer font-medium shadow-sm hover:shadow-lg"
                >
                  {area}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-[var(--orange)] text-[var(--orange)]">
                <TrendingUp className="h-4 w-4 inline mr-2" />
                Why Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
                {content.why.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {content.why.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {content.why.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-[var(--orange)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-[var(--navy)] via-blue-900 to-[var(--navy)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {content.testimonials.title}
            </h2>
            <p className="text-xl text-blue-100">
              {content.testimonials.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/95 border-white/20 hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <Quote className="h-10 w-10 text-[var(--orange)] opacity-60 mb-2" />
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[var(--orange)] text-[var(--orange)]" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 italic text-base leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <p className="font-bold text-[var(--navy)] text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-r from-[var(--orange)] via-orange-600 to-[var(--orange)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content.cta.title}
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            {content.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-[var(--orange)] hover:bg-gray-100 shadow-2xl px-8 py-6 text-lg font-semibold">
              <Link href="/listings">{content.cta.button}</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[var(--orange)] px-8 py-6 text-lg font-semibold">
              <Link href="/contact">{content.cta.buttonSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}