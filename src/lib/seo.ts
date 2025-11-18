import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  locale?: string;
  alternateLocales?: { locale: string; url: string }[];
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ashvikconstruction.com';
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords?.join(', '),
    alternates: {
      canonical: config.canonicalUrl || baseUrl,
      languages: config.alternateLocales?.reduce((acc, { locale, url }) => {
        acc[locale] = url;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.canonicalUrl || baseUrl,
      siteName: 'Ashvik Construction',
      images: config.ogImage ? [{ url: config.ogImage }] : [],
      locale: config.locale || 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  priceRange?: string;
  openingHours?: string[];
}

export function generateLocalBusinessSchema(business: LocalBusinessSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    ...(business.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
    }),
    ...(business.priceRange && { priceRange: business.priceRange }),
    ...(business.openingHours && { openingHours: business.openingHours }),
  };
}

export interface PropertySchema {
  name: string;
  description: string;
  url: string;
  image: string[];
  price: number;
  priceCurrency: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  numberOfRooms?: number;
  floorSize?: {
    value: number;
    unitCode: string;
  };
}

export function generatePropertySchema(property: PropertySchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: property.name,
    description: property.description,
    url: property.url,
    image: property.image,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: property.priceCurrency,
      availability: 'https://schema.org/InStock',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address.streetAddress,
      addressLocality: property.address.addressLocality,
      addressRegion: property.address.addressRegion,
      postalCode: property.address.postalCode,
      addressCountry: property.address.addressCountry,
    },
    ...(property.numberOfRooms && { numberOfRooms: property.numberOfRooms }),
    ...(property.floorSize && {
      floorSize: {
        '@type': 'QuantitativeValue',
        value: property.floorSize.value,
        unitCode: property.floorSize.unitCode,
      },
    }),
  };
}
