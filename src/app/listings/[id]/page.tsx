"use client";

import { useState, use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MapPin, Bed, Bath, Square, Home, Calendar, Share2, Heart, Phone, Mail, MessageSquare, Download, Calculator } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [locale, setLocale] = useState<'en' | 'mr'>('en');
  const [isSaved, setIsSaved] = useState(false);

  // Sample property data - will be fetched from API
  const property = {
    id: resolvedParams.id,
    title: 'Luxurious 3BHK Sea View Apartment in Bandra West',
    type: 'sale',
    price: 35000000,
    locality: 'Bandra West',
    city: 'Mumbai',
    address: 'Carter Road, Bandra West, Mumbai - 400050',
    bhk: 3,
    bathrooms: 3,
    area: 1850,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    floor: '15th Floor',
    totalFloors: 25,
    facing: 'West',
    ageOfProperty: '2 years',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
    ],
    description: 'Experience luxury living in this stunning 3BHK apartment with breathtaking sea views. Located in the heart of Bandra West, this fully furnished apartment offers modern amenities, spacious rooms, and premium finishes throughout. Perfect for families looking for an upscale lifestyle.',
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Parking', 'Power Backup', 'Lift', 'Park', 'Club House'],
    nearbyPlaces: [
      { name: 'Bandra Station', distance: '1.2 km', type: 'Railway' },
      { name: 'Lilavati Hospital', distance: '2.5 km', type: 'Hospital' },
      { name: 'Dhirubhai Ambani International School', distance: '1.8 km', type: 'School' },
      { name: 'Linking Road', distance: '0.8 km', type: 'Shopping' },
    ],
    featured: true,
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} L`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const content = locale === 'en' ? {
    forSale: 'For Sale',
    forRent: 'For Rent',
    overview: 'Overview',
    amenities: 'Amenities',
    location: 'Location & Nearby',
    floorPlan: 'Floor Plan',
    emiCalculator: 'EMI Calculator',
    schedule: 'Schedule a Visit',
    enquire: 'Enquire Now',
    share: 'Share',
    whatsapp: 'WhatsApp',
    call: 'Call Now',
    description: 'Description',
    propertyDetails: 'Property Details',
    nearby: 'Nearby Places',
    loanAmount: 'Loan Amount',
    interestRate: 'Interest Rate (%)',
    tenure: 'Tenure (Years)',
    calculateEMI: 'Calculate EMI',
    monthlyEMI: 'Monthly EMI',
    totalAmount: 'Total Amount',
    totalInterest: 'Total Interest',
  } : {
    forSale: 'विक्रीसाठी',
    forRent: 'भाड्यासाठी',
    overview: 'विहंगावलोकन',
    amenities: 'सुविधा',
    location: 'स्थान आणि जवळपास',
    floorPlan: 'मजला योजना',
    emiCalculator: 'EMI कॅल्क्युलेटर',
    schedule: 'भेट शेड्यूल करा',
    enquire: 'आता चौकशी करा',
    share: 'शेअर करा',
    whatsapp: 'व्हाट्सअॅप',
    call: 'आता कॉल करा',
    description: 'वर्णन',
    propertyDetails: 'मालमत्ता तपशील',
    nearby: 'जवळपासची ठिकाणे',
    loanAmount: 'कर्ज रक्कम',
    interestRate: 'व्याज दर (%)',
    tenure: 'कालावधी (वर्षे)',
    calculateEMI: 'EMI मोजा',
    monthlyEMI: 'मासिक EMI',
    totalAmount: 'एकूण रक्कम',
    totalInterest: 'एकूण व्याज',
  };

  const whatsappMessage = `Hi, I'm interested in: ${property.title} - ${formatPrice(property.price)}`;
  const whatsappLink = `https://wa.me/912212345678?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      
      {/* Image Gallery */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={property.type === 'sale' ? 'bg-green-600' : 'bg-blue-600'}>
                        {property.type === 'sale' ? content.forSale : content.forRent}
                      </Badge>
                      {property.featured && (
                        <Badge variant="secondary" className="bg-[var(--orange)] text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h1 className="text-3xl font-bold text-[var(--navy)] mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.address}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => setIsSaved(!isSaved)}>
                      <Heart className={`h-5 w-5 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="text-4xl font-bold text-[var(--navy)] mb-6">
                  {formatPrice(property.price)}
                </div>

                <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-[var(--orange)]" />
                    <p className="text-sm text-gray-600">Bedrooms</p>
                    <p className="font-semibold">{property.bhk}</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-6 w-6 mx-auto mb-2 text-[var(--orange)]" />
                    <p className="text-sm text-gray-600">Bathrooms</p>
                    <p className="font-semibold">{property.bathrooms}</p>
                  </div>
                  <div className="text-center">
                    <Square className="h-6 w-6 mx-auto mb-2 text-[var(--orange)]" />
                    <p className="text-sm text-gray-600">Area</p>
                    <p className="font-semibold">{property.area} {property.areaUnit}</p>
                  </div>
                  <div className="text-center">
                    <Home className="h-6 w-6 mx-auto mb-2 text-[var(--orange)]" />
                    <p className="text-sm text-gray-600">Furnishing</p>
                    <p className="font-semibold">{property.furnishing}</p>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">{content.overview}</TabsTrigger>
                  <TabsTrigger value="amenities">{content.amenities}</TabsTrigger>
                  <TabsTrigger value="location">{content.location}</TabsTrigger>
                  <TabsTrigger value="emi">{content.emiCalculator}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-[var(--navy)]">
                        {content.description}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {property.description}
                      </p>
                      <h3 className="text-xl font-bold mb-4 text-[var(--navy)]">
                        {content.propertyDetails}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Floor</span>
                          <span className="font-semibold">{property.floor}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Total Floors</span>
                          <span className="font-semibold">{property.totalFloors}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Facing</span>
                          <span className="font-semibold">{property.facing}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Age</span>
                          <span className="font-semibold">{property.ageOfProperty}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="amenities">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        {property.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                            <div className="w-8 h-8 bg-[var(--orange)]/10 rounded-full flex items-center justify-center">
                              <Home className="h-4 w-4 text-[var(--orange)]" />
                            </div>
                            <span className="text-gray-700">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="location">
                  <Card>
                    <CardContent className="p-6">
                      <div className="h-64 bg-gray-200 rounded-lg mb-6">
                        <iframe
                          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8574891757834!2d72.82553!3d19.05392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzE0LjEiTiA3MsKwNDknMzEuOSJF!5e0!3m2!1sen!2sin!4v1234567890`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          className="rounded-lg"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-[var(--navy)]">
                        {content.nearby}
                      </h3>
                      <div className="space-y-3">
                        {property.nearbyPlaces.map((place, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-semibold text-gray-900">{place.name}</p>
                              <p className="text-sm text-gray-600">{place.type}</p>
                            </div>
                            <Badge variant="outline">{place.distance}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="emi">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Calculator className="h-6 w-6 text-[var(--orange)]" />
                        <h3 className="text-xl font-bold text-[var(--navy)]">
                          {content.emiCalculator}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label>{content.loanAmount}</Label>
                          <Input type="number" placeholder="30000000" />
                        </div>
                        <div>
                          <Label>{content.interestRate}</Label>
                          <Input type="number" placeholder="8.5" />
                        </div>
                        <div>
                          <Label>{content.tenure}</Label>
                          <Input type="number" placeholder="20" />
                        </div>
                        <Button className="w-full bg-[var(--orange)] hover:bg-[var(--orange)]/90">
                          {content.calculateEMI}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-6">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[var(--navy)]">
                    {content.enquire}
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="I'm interested in this property..." rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-[var(--navy)] hover:bg-[var(--navy)]/90">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Enquiry
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t space-y-3">
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {content.whatsapp}
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="tel:+912212345678">
                        <Phone className="h-4 w-4 mr-2" />
                        {content.call}
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">
                        <Calendar className="h-4 w-4 mr-2" />
                        {content.schedule}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
