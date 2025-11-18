"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface Listing {
  id: string;
  title: string;
  type: 'sale' | 'rent';
  price: number;
  locality: string;
  city: string;
  bhk: number;
  bathrooms: number;
  area: number;
  areaUnit: 'sqft' | 'sqm';
  furnishing: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  images: string[];
  featured?: boolean;
}

interface ListingCardProps {
  listing: Listing;
  locale?: 'en' | 'mr';
}

export default function ListingCard({ listing, locale = 'en' }: ListingCardProps) {
  const [isSaved, setIsSaved] = useState(false);

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
    perMonth: '/month',
    viewDetails: 'View Details',
  } : {
    forSale: 'विक्रीसाठी',
    forRent: 'भाड्यासाठी',
    perMonth: '/महिना',
    viewDetails: 'तपशील पहा',
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={listing.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={listing.type === 'sale' ? 'bg-green-600' : 'bg-blue-600'}>
            {listing.type === 'sale' ? content.forSale : content.forRent}
          </Badge>
          {listing.featured && (
            <Badge variant="secondary" className="bg-[var(--orange)] text-white">
              Featured
            </Badge>
          )}
        </div>
        <button
          onClick={() => setIsSaved(!isSaved)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart className={`h-5 w-5 ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>
      
      <CardContent className="p-5">
        <div className="mb-3">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-bold text-[var(--navy)]">
              {formatPrice(listing.price)}
            </span>
            {listing.type === 'rent' && (
              <span className="text-sm text-muted-foreground">{content.perMonth}</span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {listing.title}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{listing.locality}, {listing.city}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 py-3 border-t border-gray-100 mb-3">
          <div className="flex items-center gap-1 text-sm">
            <Bed className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700">{listing.bhk} BHK</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Bath className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700">{listing.bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Square className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700">{listing.area} {listing.areaUnit}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {listing.furnishing}
          </Badge>
          <Button asChild variant="ghost" size="sm" className="text-[var(--orange)] hover:text-[var(--orange)] hover:bg-[var(--orange)]/10">
            <Link href={`/listings/${listing.id}`} className="inline-flex items-center gap-1">
              {content.viewDetails}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
