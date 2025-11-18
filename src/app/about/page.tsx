"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Award, Target, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');

  const content = locale === 'en' ? {
    title: 'About Ashvik Construction',
    subtitle: 'Your Trusted Real Estate Partner Since 2008',
    mission: {
      title: 'Our Mission',
      description: 'To provide exceptional real estate services that exceed client expectations through integrity, innovation, and expertise.',
    },
    vision: {
      title: 'Our Vision',
      description: 'To be Mumbai\'s most trusted and preferred real estate company, known for quality, transparency, and customer satisfaction.',
    },
    story: {
      title: 'Our Story',
      content: 'Founded in 2008, Ashvik Construction began with a simple vision: to transform the real estate landscape in Mumbai through quality service and unwavering commitment to our clients. Over the past 15 years, we have grown from a small team to a leading real estate firm, specializing in government officer bungalow renovations, property sales, rentals, and comprehensive property management services. Our deep understanding of Mumbai\'s real estate market, combined with our technical expertise in civil engineering, allows us to deliver solutions that truly meet our clients\' needs.',
    },
    values: {
      title: 'Our Core Values',
      items: [
        {
          icon: Target,
          title: 'Client-Centric',
          description: 'We put our clients first in everything we do',
        },
        {
          icon: CheckCircle,
          title: 'Integrity',
          description: 'Transparent and honest in all our dealings',
        },
        {
          icon: Award,
          title: 'Excellence',
          description: 'Committed to delivering quality in every project',
        },
        {
          icon: Users,
          title: 'Teamwork',
          description: 'Collaborative approach with clients and partners',
        },
      ],
    },
    expertise: {
      title: 'Our Expertise',
      areas: [
        'Government Officer Bungalow Renovations',
        'Residential Property Sales',
        'Premium Property Rentals',
        'Property Management Services',
        'Real Estate Consulting',
        'Legal Documentation Support',
        'Interior Design & Architecture',
        'Property Valuation Services',
      ],
    },
    team: {
      title: 'Leadership Team',
      description: 'Led by experienced professionals with deep expertise in civil engineering, real estate, and property management.',
    },
  } : {
    title: 'अश्विक कन्स्ट्रक्शन बद्दल',
    subtitle: '२००८ पासून तुमचा विश्वासू रिअल इस्टेट भागीदार',
    mission: {
      title: 'आमचे ध्येय',
      description: 'प्रामाणिकपणा, नवीनता आणि कौशल्याद्वारे ग्राहकांच्या अपेक्षा ओलांडणाऱ्या अपवादात्मक रिअल इस्टेट सेवा प्रदान करणे.',
    },
    vision: {
      title: 'आमची दृष्टी',
      description: 'गुणवत्ता, पारदर्शकता आणि ग्राहक समाधानासाठी ओळखली जाणारी मुंबईची सर्वात विश्वासू आणि पसंतीची रिअल इस्टेट कंपनी बनणे.',
    },
    story: {
      title: 'आमची कहाणी',
      content: '२००८ मध्ये स्थापित, अश्विक कन्स्ट्रक्शनची सुरुवात एका साध्या दृष्टीकोनातून झाली: गुणवत्तापूर्ण सेवा आणि आमच्या ग्राहकांप्रती अटळ वचनबद्धतेद्वारे मुंबईतील रिअल इस्टेट परिदृश्य बदलणे. गेल्या १५ वर्षांमध्ये, आम्ही एका लहान टीमपासून आघाडीच्या रिअल इस्टेट फर्ममध्ये वाढलो आहोत, सरकारी अधिकारी बंगल्यांच्या नूतनीकरण, मालमत्ता विक्री, भाडे आणि सर्वसमावेशक मालमत्ता व्यवस्थापन सेवांमध्ये विशेषज्ञ आहोत.',
    },
    values: {
      title: 'आमची मूलभूत मूल्ये',
      items: [
        {
          icon: Target,
          title: 'ग्राहक-केंद्रित',
          description: 'आम्ही आमच्या सर्व कामात ग्राहकांना प्रथम ठेवतो',
        },
        {
          icon: CheckCircle,
          title: 'प्रामाणिकपणा',
          description: 'आमच्या सर्व व्यवहारांमध्ये पारदर्शक आणि प्रामाणिक',
        },
        {
          icon: Award,
          title: 'उत्कृष्टता',
          description: 'प्रत्येक प्रकल्पात गुणवत्ता देण्यासाठी वचनबद्ध',
        },
        {
          icon: Users,
          title: 'सांघिक कार्य',
          description: 'ग्राहक आणि भागीदारांसह सहयोगी दृष्टिकोन',
        },
      ],
    },
    expertise: {
      title: 'आमचे कौशल्य',
      areas: [
        'सरकारी अधिकारी बंगला नूतनीकरण',
        'निवासी मालमत्ता विक्री',
        'प्रीमियम मालमत्ता भाडे',
        'मालमत्ता व्यवस्थापन सेवा',
        'रिअल इस्टेट सल्लामसलत',
        'कायदेशीर दस्तऐवज समर्थन',
        'इंटीरियर डिझाइन आणि आर्किटेक्चर',
        'मालमत्ता मूल्यांकन सेवा',
      ],
    },
    team: {
      title: 'नेतृत्व टीम',
      description: 'सिव्हिल इंजिनीअरिंग, रिअल इस्टेट आणि मालमत्ता व्यवस्थापनातील सखोल कौशल्य असलेल्या अनुभवी व्यावसायिकांच्या नेतृत्वाखाली.',
    },
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

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="h-12 w-12 text-[var(--orange)]" />
              <h2 className="text-3xl font-bold text-[var(--navy)]">
                {content.story.title}
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-[var(--orange)] mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-[var(--navy)]">
                  {content.mission.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.mission.description}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-[var(--orange)] mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-[var(--navy)]">
                  {content.vision.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.vision.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--navy)]">
              {content.values.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {content.values.items.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[var(--orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-[var(--orange)]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--navy)]">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--navy)]">
                {content.expertise.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {content.expertise.areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
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
