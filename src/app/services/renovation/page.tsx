"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, CheckCircle, FileText, Users, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

export default function RenovationPage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');

  const content = locale === 'en' ? {
    title: 'Government Officer Bungalow Renovation',
    subtitle: 'Expert renovation services for government properties',
    description: 'Ashvik Construction specializes in the renovation of government officer bungalows across Mumbai. With over 15 years of experience and expertise in compliance with government regulations, we deliver high-quality renovations on time and within budget.',
    process: {
      title: 'Our Renovation Process',
      steps: [
        { title: 'Initial Consultation', description: 'Understanding requirements and property assessment' },
        { title: 'Design & Planning', description: 'Architectural plans and approval documentation' },
        { title: 'Approval Process', description: 'Handling all government approvals and clearances' },
        { title: 'Execution', description: 'Professional construction with quality materials' },
        { title: 'Quality Check', description: 'Thorough inspection and finishing touches' },
        { title: 'Handover', description: 'Complete documentation and property handover' },
      ],
    },
    features: {
      title: 'Why Choose Us for Renovations?',
      items: [
        { icon: Shield, title: 'Government Approved', description: 'Licensed contractor with government approvals' },
        { icon: Users, title: 'Expert Team', description: 'Experienced civil engineers and architects' },
        { icon: Clock, title: 'Timely Delivery', description: 'On-time project completion guarantee' },
        { icon: FileText, title: 'Complete Documentation', description: 'Handle all paperwork and approvals' },
      ],
    },
    services: [
      'Complete structural renovation',
      'Interior design and finishing',
      'Plumbing and electrical works',
      'Painting and waterproofing',
      'Flooring and tiling',
      'Kitchen and bathroom upgrades',
      'Compliance with building codes',
      'Post-renovation support',
    ],
    cta: 'Schedule a Consultation',
  } : {
    title: 'सरकारी अधिकारी बंगला नूतनीकरण',
    subtitle: 'सरकारी मालमत्तांसाठी तज्ञ नूतनीकरण सेवा',
    description: 'अश्विक कन्स्ट्रक्शन मुंबईभर सरकारी अधिकारी बंगल्यांच्या नूतनीकरणात विशेषज्ञ आहे. १५ वर्षांचा अनुभव आणि सरकारी नियमांच्या अनुपालनातील कौशल्यासह, आम्ही वेळेवर आणि बजेटमध्ये उच्च-गुणवत्तेचे नूतनीकरण प्रदान करतो.',
    process: {
      title: 'आमची नूतनीकरण प्रक्रिया',
      steps: [
        { title: 'प्रारंभिक सल्लामसलत', description: 'आवश्यकता समजून घेणे आणि मालमत्ता मूल्यांकन' },
        { title: 'डिझाइन आणि योजना', description: 'आर्किटेक्चरल योजना आणि मंजूरी दस्तऐवजीकरण' },
        { title: 'मंजूरी प्रक्रिया', description: 'सर्व सरकारी मंजूरी आणि परवानग्या हाताळणे' },
        { title: 'अंमलबजावणी', description: 'गुणवत्ता सामग्रीसह व्यावसायिक बांधकाम' },
        { title: 'गुणवत्ता तपासणी', description: 'संपूर्ण तपासणी आणि अंतिम स्पर्श' },
        { title: 'सुपुर्दगी', description: 'संपूर्ण दस्तऐवजीकरण आणि मालमत्ता सुपुर्दगी' },
      ],
    },
    features: {
      title: 'नूतनीकरणासाठी आम्हाला का निवडावे?',
      items: [
        { icon: Shield, title: 'सरकार मंजूर', description: 'सरकारी मंजूरींसह परवानाधारक कंत्राटदार' },
        { icon: Users, title: 'तज्ञ टीम', description: 'अनुभवी सिव्हिल इंजिनियर आणि आर्किटेक्ट' },
        { icon: Clock, title: 'वेळेवर सुपुर्दगी', description: 'वेळेवर प्रकल्प पूर्ण होण्याची हमी' },
        { icon: FileText, title: 'संपूर्ण दस्तऐवजीकरण', description: 'सर्व कागदपत्रे आणि मंजूरी हाताळा' },
      ],
    },
    services: [
      'संपूर्ण संरचनात्मक नूतनीकरण',
      'इंटीरियर डिझाइन आणि फिनिशिंग',
      'प्लंबिंग आणि इलेक्ट्रिकल कामे',
      'पेंटिंग आणि वॉटरप्रूफिंग',
      'फ्लोअरिंग आणि टायलिंग',
      'स्वयंपाकघर आणि स्नानगृह अपग्रेड',
      'इमारत कोडचे पालन',
      'नूतनीकरणानंतर समर्थन',
    ],
    cta: 'सल्लामसलत शेड्यूल करा',
  };

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--navy)] to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6 text-[var(--orange)]" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {content.subtitle}
            </p>
            <Button size="lg" asChild className="bg-[var(--orange)] hover:bg-[var(--orange)]/90">
              <Link href="/contact">{content.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--navy)]">
            {content.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {content.features.items.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[var(--orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-[var(--orange)]" />
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

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--navy)]">
            {content.process.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {content.process.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--orange)] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-[var(--navy)]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {content.services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
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
