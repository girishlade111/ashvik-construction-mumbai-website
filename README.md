# Ashvik Construction - Real Estate Website

A modern, SEO-optimized real estate website built with Next.js 15 for Ashvik Construction, a Mumbai-based civil engineering and real estate company.

## Features

### Core Features
- 🏠 **Property Listings** - Browse properties with advanced filters (type, BHK, price, location)
- 🔍 **SEO Optimized** - JSON-LD structured data, sitemap, robots.txt
- 🌐 **Bilingual Support** - English and Marathi (मराठी)
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Navy blue and orange theme with clean typography

### Property Features
- Image carousel with multiple photos
- Floor plan viewer
- Interactive map integration
- WhatsApp CTA for instant contact
- Schedule visit calendar
- Enquiry form
- EMI calculator
- Save and share functionality

### Pages
- **Home** - Hero, services, testimonials, locations
- **About** - Company information and values
- **Services** - Renovation, Sale, Rent, Management
- **Listings** - Property search with filters
- **Locations** - Mumbai localities (Bandra, Worli, Juhu, etc.)
- **Portfolio** - Before/after project showcase
- **Blog** - Real estate insights and tips
- **Contact** - Enquiry form with map
- **Admin** - Dashboard for property and lead management

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/UI
- **Icons:** Lucide React
- **Fonts:** Inter (body), Poppins (headings)
- **Language:** TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Package manager (npm, yarn, pnpm, or bun)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ashvik-construction.git
cd ashvik-construction
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Configure environment variables
4. Deploy

### SEO Setup

#### Google Analytics
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy measurement ID (G-XXXXXXXXXX)
3. Add to environment variables

#### Google Search Console
1. Verify your domain at [search.google.com/search-console](https://search.google.com/search-console)
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`

## Credits

- **Development:** [Ladestack](https://ladestack.in)
- **Design:** Modern, minimal real estate theme
- **Images:** Unsplash (for demo purposes)

## License

© 2024 Ashvik Construction. All rights reserved.