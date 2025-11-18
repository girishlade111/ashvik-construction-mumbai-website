import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ashvik Construction - Premium Real Estate in Mumbai",
  description: "Expert renovation, property sales, rentals and management services across Mumbai. Specializing in government officer bungalow renovations.",
  keywords: ["real estate Mumbai", "property sales", "property rentals", "construction", "renovation", "Bandra", "Worli", "Juhu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = generateLocalBusinessSchema({
    name: "Ashvik Construction",
    description: "Premium real estate services in Mumbai - Renovation, Sales, Rentals & Property Management",
    url: "https://ashvikconstruction.com",
    telephone: "+912212345678",
    email: "info@ashvikconstruction.com",
    address: {
      streetAddress: "Mumbai",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "IN",
    },
    geo: {
      latitude: 19.0760,
      longitude: 72.8777,
    },
    priceRange: "₹₹₹",
    openingHours: ["Mo-Sa 09:00-18:00"],
  });

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}