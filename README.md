# Ashvik Construction — Real Estate Website

**Built by [Girish Lade](https://ladestack.in)**

A modern, SEO-optimized real estate website built with **Next.js 15** for Ashvik Construction, a Mumbai-based civil engineering and real estate company.

## Features

### Core
- 🏠 **Property Listings** — browse properties with advanced filters (type, BHK, price, location)
- 🔍 **SEO Optimized** — JSON-LD structured data, sitemap, robots.txt
- 🌐 **Bilingual Support** — English and Marathi (मराठी)
- 📱 **Responsive Design** — works on all devices
- 🎨 **Modern UI** — navy blue and orange theme with clean typography

### Property Features
- Image carousel with multiple photos
- Floor plan viewer
- Interactive map integration
- WhatsApp CTA for instant contact
- Schedule-visit calendar
- Enquiry form (POSTs to `/api/leads`)
- EMI calculator
- Save and share functionality

### Pages
- **Home** — hero, services, testimonials, locations
- **About** — company information and values
- **Services** — renovation, sale, rent, management
- **Listings** — property search with filters
- **Locations** — Mumbai localities (Bandra, Worli, Juhu, etc.)
- **Portfolio** — before/after project showcase
- **Blog** and **Contact**
- **Admin** (`/admin`) — listings management view

## 🛠️ Tech Stack

- **Framework:** Next.js 15.3 (App Router), React
- **Styling:** Tailwind CSS, Radix UI primitives, Headless UI, Heroicons
- **Forms:** React Hook Form + Zod
- **API routes:** `/api/leads` (enquiry capture), `/api/properties` (listings, sample data)
- **Language:** TypeScript

## 🚀 Quick Start

```bash
git clone https://github.com/girishlade111/ashvik-construction-mumbai-website.git
cd ashvik-construction-mumbai-website
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000.

### Environment Variables (optional)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO/sitemap |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Maps embed (optional) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics (optional) |

> The API routes currently serve sample data (`src/app/api/properties`) and echo leads (`src/app/api/leads`). To go production, wire these to a real database (Turso via `@libsql/client` is already a dependency) — see `DATABASE_SCHEMA.md`.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/leads/route.ts        # enquiry capture endpoint
│   ├── api/properties/           # listings endpoints (sample data)
│   ├── admin/                    # admin listings view
│   ├── about|blog|contact|listings|locations|portfolio|services/
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
├── lib/                          # seo.ts, i18n.ts, utils, hooks
public/                            # static assets, robots.txt, manifest
DATABASE_SCHEMA.md
DEPLOYMENT.md
PROJECT_SUMMARY.md
```

## 🚢 Deployment

Dynamic Next.js app (API routes) — deploy with a Node runtime. Deployed on **Netlify** (see repo homepage). Works equally on Vercel:

```bash
npm run build && npm start
```

## 🤝 Author

**Built by Girish Lade** — https://ladestack.in

Free to use and fork. Contributions welcome.
