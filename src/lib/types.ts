// Database types for the application

export interface Property {
  id: string;
  title: string;
  titleMarathi?: string;
  description: string;
  descriptionMarathi?: string;
  type: 'sale' | 'rent';
  price: number;
  locality: string;
  city: string;
  address: string;
  latitude?: number;
  longitude?: number;
  bhk: number;
  bathrooms: number;
  area: number;
  areaUnit: 'sqft' | 'sqm';
  furnishing: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  floor?: string;
  totalFloors?: number;
  facing?: string;
  ageOfProperty?: string;
  images: string[];
  floorPlanUrl?: string;
  virtualTourUrl?: string;
  amenities: string[];
  nearbyPlaces?: NearbyPlace[];
  featured: boolean;
  status: 'active' | 'sold' | 'rented' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  type: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
  serviceType?: string;
  source: 'website' | 'whatsapp' | 'phone' | 'other';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'agent' | 'user';
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  titleMarathi?: string;
  slug: string;
  excerpt: string;
  content: string;
  contentMarathi?: string;
  category: string;
  author: string;
  image: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
