import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  locale?: 'en' | 'mr';
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const content = locale === 'en' ? {
    tagline: 'Your trusted partner in Mumbai real estate',
    quickLinks: 'Quick Links',
    locations: 'Locations',
    contact: 'Contact Us',
    rights: 'All rights reserved',
    developedBy: 'Developed by',
    address: 'Mumbai, Maharashtra, India',
    newsletter: 'Subscribe to Newsletter',
    newsletterPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
  } : {
    tagline: 'मुंबई रिअल इस्टेटमधील तुमचा विश्वासू भागीदार',
    quickLinks: 'द्रुत दुवे',
    locations: 'स्थाने',
    contact: 'आमच्याशी संपर्क साधा',
    rights: 'सर्व हक्क राखीव',
    developedBy: 'विकसित केले',
    address: 'मुंबई, महाराष्ट्र, भारत',
    newsletter: 'वृत्तपत्र सदस्यता घ्या',
    newsletterPlaceholder: 'तुमचा ईमेल प्रविष्ट करा',
    subscribe: 'सदस्यता घ्या',
  };

  const locations = [
    'Bandra',
    'Worli',
    'Juhu',
    'Andheri',
    'Powai',
    'Thane',
    'Navi Mumbai',
    'Borivali',
  ];

  const quickLinks = locale === 'en' ? [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Listings', href: '/listings' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ] : [
    { name: 'मुख्यपृष्ठ', href: '/' },
    { name: 'आमच्याबद्दल', href: '/about' },
    { name: 'सेवा', href: '/services' },
    { name: 'मालमत्ता', href: '/listings' },
    { name: 'पोर्टफोलिओ', href: '/portfolio' },
    { name: 'ब्लॉग', href: '/blog' },
    { name: 'संपर्क', href: '/contact' },
  ];

  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-[var(--navy)] px-3 py-1 rounded font-bold text-lg">
                Ashvik
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              {content.tagline}
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-[var(--orange)] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[var(--orange)] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[var(--orange)] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[var(--orange)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[var(--orange)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content.locations}</h3>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location}>
                  <Link 
                    href={`/locations/${location.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-gray-300 hover:text-[var(--orange)] transition-colors"
                  >
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>{content.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+912212345678" className="hover:text-[var(--orange)] transition-colors">
                  +91 22 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@ashvikconstruction.com" className="hover:text-[var(--orange)] transition-colors">
                  info@ashvikconstruction.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} Ashvik Construction. {content.rights}.
          </p>
          <p>
            {content.developedBy}{' '}
            <a 
              href="https://ladestack.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--orange)] hover:underline font-medium"
            >
              Ladestack
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
