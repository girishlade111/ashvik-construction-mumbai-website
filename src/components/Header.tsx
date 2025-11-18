"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  locale?: 'en' | 'mr';
}

export default function Header({ locale = 'en' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = locale === 'en' ? [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Renovation', href: '/services/renovation' },
        { name: 'Sale', href: '/services/sale' },
        { name: 'Rent', href: '/services/rent' },
        { name: 'Management', href: '/services/management' },
      ]
    },
    { name: 'Listings', href: '/listings' },
    { name: 'Locations', href: '/locations' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ] : [
    { name: 'मुख्यपृष्ठ', href: '/' },
    { name: 'आमच्याबद्दल', href: '/about' },
    { 
      name: 'सेवा', 
      href: '/services',
      submenu: [
        { name: 'नूतनीकरण', href: '/services/renovation' },
        { name: 'विक्री', href: '/services/sale' },
        { name: 'भाडे', href: '/services/rent' },
        { name: 'व्यवस्थापन', href: '/services/management' },
      ]
    },
    { name: 'मालमत्ता', href: '/listings' },
    { name: 'स्थाने', href: '/locations' },
    { name: 'पोर्टफोलिओ', href: '/portfolio' },
    { name: 'ब्लॉग', href: '/blog' },
    { name: 'संपर्क', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Top Bar */}
      <div className="bg-[var(--navy)] text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+912212345678" className="flex items-center gap-1 hover:text-[var(--orange)] transition-colors">
              <Phone className="h-3 w-3" />
              <span>+91 22 1234 5678</span>
            </a>
            <a href="mailto:info@ashvikconstruction.com" className="flex items-center gap-1 hover:text-[var(--orange)] transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">info@ashvikconstruction.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Link 
              href="?lang=en" 
              className={`hover:text-[var(--orange)] transition-colors ${locale === 'en' ? 'text-[var(--orange)]' : ''}`}
            >
              English
            </Link>
            <span>|</span>
            <Link 
              href="?lang=mr" 
              className={`hover:text-[var(--orange)] transition-colors ${locale === 'mr' ? 'text-[var(--orange)]' : ''}`}
            >
              मराठी
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-[var(--navy)] text-white px-4 py-2 rounded font-bold text-xl">
            Ashvik
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-[var(--navy)] text-lg leading-tight">
              Construction
            </div>
            <div className="text-xs text-muted-foreground">
              {locale === 'en' ? 'Building Dreams' : 'स्वप्ने साकार'}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            item.submenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.submenu.map((subitem) => (
                    <DropdownMenuItem key={subitem.name} asChild>
                      <Link href={subitem.href}>{subitem.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button key={item.name} variant="ghost" asChild>
                <Link href={item.href}>{item.name}</Link>
              </Button>
            )
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex bg-[var(--orange)] hover:bg-[var(--orange)]/90">
            <Link href="/contact">
              {locale === 'en' ? 'Get Quote' : 'कोटेशन मिळवा'}
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-lg font-medium hover:text-[var(--orange)] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-1 text-sm text-muted-foreground hover:text-[var(--orange)] transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
