"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [locale, setLocale] = useState<'en' | 'mr'>('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const content = locale === 'en' ? {
    title: 'Contact Us',
    subtitle: 'Get in touch with our team',
    form: {
      name: 'Full Name',
      namePlaceholder: 'Enter your name',
      email: 'Email Address',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone Number',
      phonePlaceholder: '+91 98765 43210',
      service: 'Service Interest',
      servicePlaceholder: 'Select a service',
      services: [
        { value: 'renovation', label: 'Renovation' },
        { value: 'sale', label: 'Buy Property' },
        { value: 'rent', label: 'Rent Property' },
        { value: 'management', label: 'Property Management' },
        { value: 'other', label: 'Other' },
      ],
      message: 'Message',
      messagePlaceholder: 'Tell us about your requirements...',
      submit: 'Send Message',
    },
    info: {
      title: 'Contact Information',
      address: 'Mumbai, Maharashtra, India',
      hours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
      hoursNote: 'Sunday: By Appointment Only',
    },
  } : {
    title: 'आमच्याशी संपर्क साधा',
    subtitle: 'आमच्या टीमशी संपर्क साधा',
    form: {
      name: 'पूर्ण नाव',
      namePlaceholder: 'तुमचे नाव प्रविष्ट करा',
      email: 'ईमेल पत्ता',
      emailPlaceholder: 'तुमचा@ईमेल.com',
      phone: 'फोन नंबर',
      phonePlaceholder: '+91 98765 43210',
      service: 'सेवा स्वारस्य',
      servicePlaceholder: 'एक सेवा निवडा',
      services: [
        { value: 'renovation', label: 'नूतनीकरण' },
        { value: 'sale', label: 'मालमत्ता खरेदी' },
        { value: 'rent', label: 'मालमत्ता भाडे' },
        { value: 'management', label: 'मालमत्ता व्यवस्थापन' },
        { value: 'other', label: 'इतर' },
      ],
      message: 'संदेश',
      messagePlaceholder: 'तुमच्या आवश्यकतांबद्दल आम्हाला सांगा...',
      submit: 'संदेश पाठवा',
    },
    info: {
      title: 'संपर्क माहिती',
      address: 'मुंबई, महाराष्ट्र, भारत',
      hours: 'सोमवार - शनिवार: सकाळी ९:०० - संध्याकाळी ६:००',
      hoursNote: 'रविवार: केवळ भेटीद्वारे',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(locale === 'en' ? 'Thank you for your message! We will get back to you soon.' : 'तुमच्या संदेशाबद्दल धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.');
  };

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--navy)] to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-blue-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">{content.form.name}</Label>
                        <Input
                          id="name"
                          placeholder={content.form.namePlaceholder}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{content.form.phone}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder={content.form.phonePlaceholder}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">{content.form.email}</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={content.form.emailPlaceholder}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">{content.form.service}</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder={content.form.servicePlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {content.form.services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">{content.form.message}</Label>
                      <Textarea
                        id="message"
                        placeholder={content.form.messagePlaceholder}
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[var(--orange)] hover:bg-[var(--orange)]/90"
                    >
                      {content.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-[var(--navy)]">
                    {content.info.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[var(--orange)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-sm text-gray-600">{content.info.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-[var(--orange)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a href="tel:+912212345678" className="text-sm text-gray-600 hover:text-[var(--orange)]">
                          +91 22 1234 5678
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-[var(--orange)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:info@ashvikconstruction.com" className="text-sm text-gray-600 hover:text-[var(--orange)]">
                          info@ashvikconstruction.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[var(--orange)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Hours</p>
                        <p className="text-sm text-gray-600">{content.info.hours}</p>
                        <p className="text-sm text-gray-600">{content.info.hoursNote}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
