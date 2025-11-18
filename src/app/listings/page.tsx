"use client";

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard, { Listing } from '@/components/ListingCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, SlidersHorizontal, Building2, Home, Crown } from 'lucide-react';

// Enhanced sample listings with more variety
const sampleListings: Listing[] = [
  // Luxury Apartments
  {
    id: '1',
    title: 'Luxurious 3BHK Sea View Apartment',
    type: 'sale',
    price: 35000000,
    locality: 'Bandra West',
    city: 'Mumbai',
    bhk: 3,
    bathrooms: 3,
    area: 1850,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    featured: true,
  },
  {
    id: '2',
    title: 'Premium 4BHK Apartment with Garden',
    type: 'sale',
    price: 55000000,
    locality: 'Worli',
    city: 'Mumbai',
    bhk: 4,
    bathrooms: 4,
    area: 2800,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
    featured: true,
  },
  {
    id: '3',
    title: 'Modern 2BHK Apartment in Prime Location',
    type: 'sale',
    price: 28000000,
    locality: 'Andheri West',
    city: 'Mumbai',
    bhk: 2,
    bathrooms: 2,
    area: 1400,
    areaUnit: 'sqft',
    furnishing: 'Semi-Furnished',
    images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'],
  },
  {
    id: '4',
    title: 'Spacious 1BHK Apartment',
    type: 'sale',
    price: 12000000,
    locality: 'Powai',
    city: 'Mumbai',
    bhk: 1,
    bathrooms: 1,
    area: 750,
    areaUnit: 'sqft',
    furnishing: 'Unfurnished',
    images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'],
  },
  // Premium Flats
  {
    id: '5',
    title: 'Elegant 3BHK Flat with Modern Amenities',
    type: 'sale',
    price: 22000000,
    locality: 'Thane',
    city: 'Mumbai',
    bhk: 3,
    bathrooms: 2,
    area: 1650,
    areaUnit: 'sqft',
    furnishing: 'Semi-Furnished',
    images: ['https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'],
  },
  {
    id: '6',
    title: 'Cozy 2BHK Flat in Gated Community',
    type: 'sale',
    price: 15000000,
    locality: 'Borivali',
    city: 'Mumbai',
    bhk: 2,
    bathrooms: 2,
    area: 1200,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
  },
  // Exclusive Villas
  {
    id: '7',
    title: 'Opulent 5BHK Villa with Private Pool',
    type: 'sale',
    price: 120000000,
    locality: 'Juhu',
    city: 'Mumbai',
    bhk: 5,
    bathrooms: 6,
    area: 5500,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    featured: true,
  },
  {
    id: '8',
    title: 'Luxury 4BHK Villa with Garden',
    type: 'sale',
    price: 85000000,
    locality: 'Bandra West',
    city: 'Mumbai',
    bhk: 4,
    bathrooms: 5,
    area: 4200,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'],
  },
  // Rental Apartments
  {
    id: '9',
    title: 'Furnished 3BHK Apartment for Rent',
    type: 'rent',
    price: 150000,
    locality: 'Bandra West',
    city: 'Mumbai',
    bhk: 3,
    bathrooms: 3,
    area: 1800,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
  },
  {
    id: '10',
    title: 'Semi-Furnished 2BHK Apartment',
    type: 'rent',
    price: 75000,
    locality: 'Worli',
    city: 'Mumbai',
    bhk: 2,
    bathrooms: 2,
    area: 1200,
    areaUnit: 'sqft',
    furnishing: 'Semi-Furnished',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
  },
  {
    id: '11',
    title: 'Modern 1BHK Apartment for Bachelors',
    type: 'rent',
    price: 35000,
    locality: 'Andheri West',
    city: 'Mumbai',
    bhk: 1,
    bathrooms: 1,
    area: 650,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'],
  },
  // Rental Flats
  {
    id: '12',
    title: 'Spacious 2BHK Flat for Family',
    type: 'rent',
    price: 55000,
    locality: 'Thane',
    city: 'Mumbai',
    bhk: 2,
    bathrooms: 2,
    area: 1100,
    areaUnit: 'sqft',
    furnishing: 'Unfurnished',
    images: ['https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'],
  },
  {
    id: '13',
    title: 'Cozy 1BHK Flat Ready to Move',
    type: 'rent',
    price: 28000,
    locality: 'Powai',
    city: 'Mumbai',
    bhk: 1,
    bathrooms: 1,
    area: 580,
    areaUnit: 'sqft',
    furnishing: 'Semi-Furnished',
    images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'],
  },
  // Rental Villas
  {
    id: '14',
    title: 'Luxury 4BHK Villa with Private Garden',
    type: 'rent',
    price: 350000,
    locality: 'Juhu',
    city: 'Mumbai',
    bhk: 4,
    bathrooms: 5,
    area: 4000,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    featured: true,
  },
  {
    id: '15',
    title: 'Elegant 3BHK Villa in Peaceful Location',
    type: 'rent',
    price: 200000,
    locality: 'Chembur',
    city: 'Mumbai',
    bhk: 3,
    bathrooms: 3,
    area: 2800,
    areaUnit: 'sqft',
    furnishing: 'Semi-Furnished',
    images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'],
  },
];

export default function ListingsPage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');
  const [filters, setFilters] = useState({
    type: 'all',
    bhk: 'all',
    priceMin: '',
    priceMax: '',
    locality: 'all',
    furnishing: 'all',
    search: '',
  });

  const content = locale === 'en' ? {
    title: 'Premium Property Listings',
    subtitle: 'Discover your dream property in Mumbai\'s finest locations',
    filters: {
      type: 'Property Type',
      all: 'All',
      sale: 'For Sale',
      rent: 'For Rent',
      bhk: 'BHK Configuration',
      priceRange: 'Price Range',
      priceMin: 'Min Price',
      priceMax: 'Max Price',
      locality: 'Location',
      furnishing: 'Furnishing Status',
      furnished: 'Furnished',
      semiFurnished: 'Semi-Furnished',
      unfurnished: 'Unfurnished',
      search: 'Search properties...',
      apply: 'Apply Filters',
      clear: 'Clear Filters',
    },
    results: {
      showing: 'Showing',
      properties: 'properties',
      of: 'of',
      total: 'total',
      noResults: 'No properties found matching your criteria. Try adjusting your filters.',
    },
    propertyTypes: {
      apartments: 'Luxury Apartments',
      flats: 'Premium Flats',
      villas: 'Exclusive Villas',
    },
  } : {
    title: 'प्रीमियम मालमत्ता यादी',
    subtitle: 'मुंबईच्या उत्कृष्ट ठिकाणांमध्ये तुमची स्वप्नातील मालमत्ता शोधा',
    filters: {
      type: 'मालमत्ता प्रकार',
      all: 'सर्व',
      sale: 'विक्रीसाठी',
      rent: 'भाड्यासाठी',
      bhk: 'BHK कॉन्फिगरेशन',
      priceRange: 'किंमत श्रेणी',
      priceMin: 'किमान किंमत',
      priceMax: 'कमाल किंमत',
      locality: 'स्थान',
      furnishing: 'फर्निशिंग स्थिती',
      furnished: 'सुसज्ज',
      semiFurnished: 'अर्ध-सुसज्ज',
      unfurnished: 'असुसज्ज',
      search: 'मालमत्ता शोधा...',
      apply: 'फिल्टर लागू करा',
      clear: 'फिल्टर साफ करा',
    },
    results: {
      showing: 'दर्शवत आहे',
      properties: 'मालमत्ता',
      of: 'पैकी',
      total: 'एकूण',
      noResults: 'तुमच्या निकषाशी जुळणाऱ्या मालमत्ता सापडल्या नाहीत. तुमचे फिल्टर समायोजित करण्याचा प्रयत्न करा.',
    },
    propertyTypes: {
      apartments: 'लक्झरी अपार्टमेंट्स',
      flats: 'प्रीमियम फ्लॅट्स',
      villas: 'विशेष व्हिला',
    },
  };

  const localities = ['Bandra West', 'Worli', 'Juhu', 'Andheri West', 'Powai', 'Thane', 'Navi Mumbai', 'Borivali', 'Chembur'];

  const filteredListings = useMemo(() => {
    return sampleListings.filter((listing) => {
      if (filters.type !== 'all' && listing.type !== filters.type) return false;
      if (filters.bhk !== 'all' && listing.bhk.toString() !== filters.bhk) return false;
      if (filters.locality !== 'all' && listing.locality !== filters.locality) return false;
      if (filters.furnishing !== 'all' && listing.furnishing !== filters.furnishing) return false;
      if (filters.priceMin && listing.price < parseInt(filters.priceMin)) return false;
      if (filters.priceMax && listing.price > parseInt(filters.priceMax)) return false;
      if (filters.search && !listing.title.toLowerCase().includes(filters.search.toLowerCase()) &&
          !listing.locality.toLowerCase().includes(filters.search.toLowerCase())) return false;
      return true;
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      type: 'all',
      bhk: 'all',
      priceMin: '',
      priceMax: '',
      locality: 'all',
      furnishing: 'all',
      search: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      <Header locale={locale} />
      
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[var(--navy)] via-blue-900 to-[var(--navy)] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/15 backdrop-blur-sm text-white border-white/20">
              <Building2 className="h-4 w-4 inline mr-2" />
              {sampleListings.length}+ Properties Available
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="text-xl text-blue-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar - Enhanced */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20 border-2 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <SlidersHorizontal className="h-5 w-5 text-[var(--orange)]" />
                    <h2 className="text-lg font-bold text-[var(--navy)]">Filters</h2>
                  </div>

                  <div className="space-y-5">
                    {/* Search */}
                    <div>
                      <Label className="text-sm font-semibold mb-2 block">{content.filters.search}</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder={content.filters.search}
                          className="pl-9 border-2 focus:border-[var(--orange)]"
                          value={filters.search}
                          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Type */}
                    <div>
                      <Label className="text-sm font-semibold mb-2 block">{content.filters.type}</Label>
                      <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
                        <SelectTrigger className="border-2 focus:border-[var(--orange)]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{content.filters.all}</SelectItem>
                          <SelectItem value="sale">{content.filters.sale}</SelectItem>
                          <SelectItem value="rent">{content.filters.rent}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* BHK */}
                    <div>
                      <Label className="text-sm font-semibold mb-2 block">{content.filters.bhk}</Label>
                      <Select value={filters.bhk} onValueChange={(value) => setFilters({ ...filters, bhk: value })}>
                        <SelectTrigger className="border-2 focus:border-[var(--orange)]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{content.filters.all}</SelectItem>
                          <SelectItem value="1">1 BHK</SelectItem>
                          <SelectItem value="2">2 BHK</SelectItem>
                          <SelectItem value="3">3 BHK</SelectItem>
                          <SelectItem value="4">4 BHK</SelectItem>
                          <SelectItem value="5">5 BHK</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Locality */}
                    <div>
                      <Label className="text-sm font-semibold mb-2 block">{content.filters.locality}</Label>
                      <Select value={filters.locality} onValueChange={(value) => setFilters({ ...filters, locality: value })}>
                        <SelectTrigger className="border-2 focus:border-[var(--orange)]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{content.filters.all}</SelectItem>
                          {localities.map((loc) => (
                            <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Furnishing */}
                    <div>
                      <Label className="text-sm font-semibold mb-2 block">{content.filters.furnishing}</Label>
                      <Select value={filters.furnishing} onValueChange={(value) => setFilters({ ...filters, furnishing: value })}>
                        <SelectTrigger className="border-2 focus:border-[var(--orange)]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{content.filters.all}</SelectItem>
                          <SelectItem value="Furnished">{content.filters.furnished}</SelectItem>
                          <SelectItem value="Semi-Furnished">{content.filters.semiFurnished}</SelectItem>
                          <SelectItem value="Unfurnished">{content.filters.unfurnished}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Range */}
                    <div>
                      <Label className="text-sm font-semibold mb-2 block">{content.filters.priceRange}</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          type="number"
                          placeholder={content.filters.priceMin}
                          className="border-2 focus:border-[var(--orange)]"
                          value={filters.priceMin}
                          onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                        />
                        <Input
                          type="number"
                          placeholder={content.filters.priceMax}
                          className="border-2 focus:border-[var(--orange)]"
                          value={filters.priceMax}
                          onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                        />
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-[var(--orange)] text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white"
                      onClick={clearFilters}
                    >
                      {content.filters.clear}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Listings Grid - Enhanced */}
            <div className="lg:col-span-3">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-lg">
                    <span className="font-semibold text-[var(--navy)]">{filteredListings.length}</span> {content.results.properties} {content.results.of} {sampleListings.length} {content.results.total}
                  </p>
                </div>
                <Badge variant="outline" className="border-[var(--orange)] text-[var(--orange)] px-4 py-2">
                  Updated Daily
                </Badge>
              </div>

              {filteredListings.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} locale={locale} />
                  ))}
                </div>
              ) : (
                <Card className="border-2 border-dashed">
                  <CardContent className="p-16 text-center">
                    <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg mb-4">{content.results.noResults}</p>
                    <Button onClick={clearFilters} className="bg-[var(--orange)] hover:bg-[var(--orange)]/90">
                      {content.filters.clear}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Info Section - New */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-[var(--orange)] transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--orange)] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--navy)]">{content.propertyTypes.apartments}</h3>
                <p className="text-gray-600 text-sm">1, 2, 3 & 4 BHK options with premium amenities and modern living spaces</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-[var(--orange)] transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--navy)] to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--navy)]">{content.propertyTypes.flats}</h3>
                <p className="text-gray-600 text-sm">1, 2 & 3 BHK flats in gated communities with world-class facilities</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-[var(--orange)] transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-[var(--orange)] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--navy)]">{content.propertyTypes.villas}</h3>
                <p className="text-gray-600 text-sm">3, 4 & 5 BHK independent villas with private gardens and luxury interiors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}