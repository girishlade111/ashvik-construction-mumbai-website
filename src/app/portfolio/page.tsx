"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: '1',
    title: 'Government Officer Bungalow - Bandra',
    category: 'renovation',
    location: 'Bandra West',
    duration: '6 months',
    year: '2023',
    beforeImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    description: 'Complete renovation of a 3500 sqft government officer bungalow with modern amenities and compliance with all regulations.',
  },
  {
    id: '2',
    title: 'Luxury Apartment - Worli',
    category: 'renovation',
    location: 'Worli',
    duration: '4 months',
    year: '2023',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    description: 'Interior renovation of a 2200 sqft luxury apartment with premium finishes and modern design.',
  },
  {
    id: '3',
    title: 'Villa Renovation - Juhu',
    category: 'renovation',
    location: 'Juhu',
    duration: '8 months',
    year: '2022',
    beforeImage: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    description: 'Complete transformation of a 4000 sqft villa with landscaping and modern architecture.',
  },
  {
    id: '4',
    title: 'Commercial Complex - Andheri',
    category: 'construction',
    location: 'Andheri West',
    duration: '12 months',
    year: '2022',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    description: 'New construction of a 5-story commercial complex with modern amenities.',
  },
];

export default function PortfolioPage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const content = locale === 'en' ? {
    title: 'Our Portfolio',
    subtitle: 'Showcasing our completed projects across Mumbai',
    all: 'All Projects',
    renovation: 'Renovations',
    construction: 'New Construction',
    location: 'Location',
    duration: 'Duration',
    completed: 'Completed',
    before: 'Before',
    after: 'After',
  } : {
    title: 'आमचा पोर्टफोलिओ',
    subtitle: 'मुंबईभरातील आमचे पूर्ण झालेले प्रकल्प दाखवत आहोत',
    all: 'सर्व प्रकल्प',
    renovation: 'नूतनीकरण',
    construction: 'नवीन बांधकाम',
    location: 'स्थान',
    duration: 'कालावधी',
    completed: 'पूर्ण',
    before: 'आधी',
    after: 'नंतर',
  };

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
            <p className="text-xl text-blue-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">{content.all}</TabsTrigger>
              <TabsTrigger value="renovation">{content.renovation}</TabsTrigger>
              <TabsTrigger value="construction">{content.construction}</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <Badge className="mb-4">{project.category === 'renovation' ? content.renovation : content.construction}</Badge>
                      <h2 className="text-2xl font-bold mb-4 text-[var(--navy)]">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {project.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin className="h-5 w-5 text-[var(--orange)]" />
                          <span><strong>{content.location}:</strong> {project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="h-5 w-5 text-[var(--orange)]" />
                          <span><strong>{content.duration}:</strong> {project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Building2 className="h-5 w-5 text-[var(--orange)]" />
                          <span><strong>{content.completed}:</strong> {project.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold mb-2 text-gray-600">{content.before}</p>
                        <div className="relative h-64 rounded-lg overflow-hidden">
                          <Image
                            src={project.beforeImage}
                            alt={`${project.title} - Before`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2 text-gray-600">{content.after}</p>
                        <div className="relative h-64 rounded-lg overflow-hidden">
                          <Image
                            src={project.afterImage}
                            alt={`${project.title} - After`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
