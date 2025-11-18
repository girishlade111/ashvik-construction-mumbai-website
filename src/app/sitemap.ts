import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ashvikconstruction.com';
  
  const locations = [
    'bandra',
    'worli',
    'juhu',
    'andheri',
    'powai',
    'thane',
    'navi-mumbai',
    'borivali',
    'chembur',
  ];

  const services = ['renovation', 'sale', 'rent', 'management'];

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/listings',
    '/portfolio',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const locationRoutes = locations.map((location) => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...locationRoutes, ...serviceRoutes];
}
