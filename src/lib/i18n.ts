export type Locale = 'en' | 'mr';

export const locales: Locale[] = ['en', 'mr'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  mr: 'मराठी',
};

export interface Translations {
  [key: string]: string | Translations;
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      listings: 'Listings',
      locations: 'Locations',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'Premium Real Estate Solutions in Mumbai',
      subtitle: 'Expert Renovation, Sales & Property Management Services',
      cta: 'View Properties',
      ctaSecondary: 'Contact Us',
    },
    services: {
      title: 'Our Services',
      renovation: 'Government Officer Bungalow Renovation',
      renovationDesc: 'Specialized renovation services for government properties',
      sale: 'Property Sales',
      saleDesc: 'Buy your dream home across Mumbai',
      rent: 'Property Rentals',
      rentDesc: 'Premium rental properties in prime locations',
      management: 'Property Management',
      managementDesc: 'Complete property management solutions',
    },
    footer: {
      tagline: 'Your trusted partner in Mumbai real estate',
      quickLinks: 'Quick Links',
      locations: 'Locations',
      contact: 'Contact Us',
      rights: 'All rights reserved',
      developedBy: 'Developed by',
    },
  },
  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      services: 'सेवा',
      listings: 'मालमत्ता',
      locations: 'स्थाने',
      portfolio: 'पोर्टफोलिओ',
      blog: 'ब्लॉग',
      contact: 'संपर्क',
    },
    hero: {
      title: 'मुंबईतील प्रीमियम रिअल इस्टेट सोल्यूशन्स',
      subtitle: 'तज्ञ नूतनीकरण, विक्री आणि मालमत्ता व्यवस्थापन सेवा',
      cta: 'मालमत्ता पहा',
      ctaSecondary: 'आमच्याशी संपर्क साधा',
    },
    services: {
      title: 'आमच्या सेवा',
      renovation: 'सरकारी अधिकारी बंगला नूतनीकरण',
      renovationDesc: 'सरकारी मालमत्तांसाठी विशेष नूतनीकरण सेवा',
      sale: 'मालमत्ता विक्री',
      saleDesc: 'मुंबईभर तुमचे स्वप्नातील घर खरेदी करा',
      rent: 'मालमत्ता भाडे',
      rentDesc: 'प्रमुख ठिकाणी प्रीमियम भाड्याची मालमत्ता',
      management: 'मालमत्ता व्यवस्थापन',
      managementDesc: 'संपूर्ण मालमत्ता व्यवस्थापन उपाय',
    },
    footer: {
      tagline: 'मुंबई रिअल इस्टेटमधील तुमचा विश्वासू भागीदार',
      quickLinks: 'द्रुत दुवे',
      locations: 'स्थाने',
      contact: 'आमच्याशी संपर्क साधा',
      rights: 'सर्व हक्क राखीव',
      developedBy: 'विकसित केले',
    },
  },
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export function useTranslations(locale: Locale = defaultLocale) {
  return {
    t: (key: string) => getTranslation(locale, key),
    locale,
  };
}
