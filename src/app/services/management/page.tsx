"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, CheckCircle, Users, Wrench, FileText, Shield, Home } from 'lucide-react';
import Link from 'next/link';

export default function ManagementPage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');

  const content = locale === 'en' ? {
    title: 'Property Management Services',
    subtitle: 'Complete property care and management solutions',
    description: 'Let us handle the complexities of property management while you enjoy peace of mind. Our comprehensive services cover everything from tenant management to maintenance, ensuring your property remains in excellent condition and generates optimal returns.',
    services: {
      title: 'Our Management Services',
      items: [
        { icon: Users, title: 'Tenant Management', description: 'Screening, onboarding, and relationship management' },
        { icon: Wrench, title: 'Maintenance & Repairs', description: '24/7 maintenance support and regular upkeep' },
        { icon: FileText, title: 'Legal & Documentation', description: 'Rental agreements, compliance, and legal support' },
        { icon: Shield, title: 'Security & Insurance', description: 'Property security and insurance coordination' },
      ],
    },
    features: {
      title: 'What We Handle',
      items: [
        'Tenant screening and verification',
        'Rent collection and financial reporting',
        'Regular property inspections',
        'Emergency maintenance response',
        'Legal compliance and documentation',
        'Utility bill management',
        'Annual maintenance contracts',
        'Property tax filing assistance',
      ],
    },
    benefits: {
      title: 'Benefits of Our Service',
      points: [
        'Save time and reduce stress',
        'Professional property maintenance',
        'Maximize rental income',
        'Minimize vacancy periods',
        'Expert legal compliance',
        'Transparent reporting',
      ],
    },
    cta: 'Get Started',
  } : {
    title: 'मालमत्ता व्यवस्थापन सेवा',
    subtitle: 'संपूर्ण मालमत्ता काळजी आणि व्यवस्थापन उपाय',
    description: 'तुम्ही मनःशांती अनुभवता तेव्हा आम्हाला मालमत्ता व्यवस्थापनाची गुंतागुंत हाताळू द्या. आमच्या सर्वसमावेशक सेवा भाडेकरू व्यवस्थापनापासून देखभालीपर्यंत सर्व काही समाविष्ट करतात.',
    services: {
      title: 'आमच्या व्यवस्थापन सेवा',
      items: [
        { icon: Users, title: 'भाडेकरू व्यवस्थापन', description: 'स्क्रीनिंग, ऑनबोर्डिंग आणि संबंध व्यवस्थापन' },
        { icon: Wrench, title: 'देखभाल आणि दुरुस्ती', description: '24/7 देखभाल समर्थन आणि नियमित देखभाल' },
        { icon: FileText, title: 'कायदेशीर आणि दस्तऐवजीकरण', description: 'भाडे करार, अनुपालन आणि कायदेशीर समर्थन' },
        { icon: Shield, title: 'सुरक्षा आणि विमा', description: 'मालमत्ता सुरक्षा आणि विमा समन्वय' },
      ],
    },
    features: {
      title: 'आम्ही काय हाताळतो',
      items: [
        'भाडेकरू स्क्रीनिंग आणि सत्यापन',
        'भाडे संकलन आणि आर्थिक अहवाल',
        'नियमित मालमत्ता तपासण्या',
        'आपत्कालीन देखभाल प्रतिसाद',
        'कायदेशीर अनुपालन आणि दस्तऐवजीकरण',
        'उपयोगिता बिल व्यवस्थापन',
        'वार्षिक देखभाल करार',
        'मालमत्ता कर दाखल सहाय्य',
      ],
    },
    benefits: {
      title: 'आमच्या सेवेचे फायदे',
      points: [
        'वेळ वाचवा आणि ताण कमी करा',
        'व्यावसायिक मालमत्ता देखभाल',
        'भाडे उत्पन्न वाढवा',
        'रिक्त कालावधी कमी करा',
        'तज्ञ कायदेशीर अनुपालन',
        'पारदर्शक अहवाल',
      ],
    },
    cta: 'सुरुवात करा',
  };

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--navy)] to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Settings className="h-16 w-16 mx-auto mb-6 text-[var(--orange)]" />
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

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--navy)]">
            {content.services.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {content.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[var(--orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-[var(--orange)]" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[var(--navy)]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--navy)]">
              {content.features.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.features.items.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--navy)]">
              {content.benefits.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.benefits.points.map((point, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
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
