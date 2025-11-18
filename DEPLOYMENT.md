# Deployment Guide - Ashvik Construction Website

## Quick Deployment to Vercel

### Step 1: Prepare Your Repository

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - Ashvik Construction website"
git branch -M main
git remote add origin https://github.com/yourusername/ashvik-construction.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `ashvik-construction` repository
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

### Step 3: Environment Variables

Add these environment variables in Vercel dashboard:

```env
NEXT_PUBLIC_SITE_URL=https://ashvikconstruction.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Step 4: Custom Domain Setup

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain: `ashvikconstruction.com`
4. Follow DNS configuration instructions:
   - Add A record pointing to Vercel's IP
   - Add CNAME record for `www` subdomain

### Step 5: SEO Configuration

#### Google Analytics Setup

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to Vercel environment variables
4. Redeploy the site

#### Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (use domain property for better coverage)
3. Verify ownership:
   - **Option 1:** DNS verification (recommended)
   - **Option 2:** HTML file upload
4. Submit sitemap: `https://ashvikconstruction.com/sitemap.xml`

#### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap: `https://ashvikconstruction.com/sitemap.xml`

### Step 6: Social Media & Local SEO

#### Google Business Profile

1. Create/claim your Google Business Profile
2. Add:
   - Business name: Ashvik Construction
   - Category: Real Estate Agency, Civil Engineering Company
   - Address: Mumbai, Maharashtra
   - Phone: +91 22 1234 5678
   - Website: https://ashvikconstruction.com
   - Business hours
   - Photos of projects
   - Services offered

#### Social Media Setup

Create profiles on:
- Facebook Business Page
- Instagram Business Account
- LinkedIn Company Page
- Twitter/X

Add social media links in Footer component.

### Step 7: Performance Optimization

#### Image Optimization

All images are already optimized with Next.js Image component. For production:

1. **Use a CDN for images:**
   - Cloudinary (recommended)
   - AWS S3 + CloudFront
   - Vercel Image Optimization (included)

2. **Configure in `next.config.ts`:**
```typescript
images: {
  domains: ['images.unsplash.com', 'your-cdn-domain.com'],
  formats: ['image/avif', 'image/webp'],
},
```

#### Enable Compression

Vercel automatically enables:
- Brotli compression
- Gzip fallback
- HTTP/2
- Edge caching

### Step 8: Security Headers

Add to `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
      ],
    },
  ]
},
```

### Step 9: Set Up Database (Choose One)

#### Option A: PostgreSQL (Recommended for Production)

1. **Use Vercel Postgres:**
   - Go to Vercel project → Storage → Create Database
   - Select Postgres
   - Copy connection string to environment variables

2. **Or use external provider:**
   - [Supabase](https://supabase.com) (free tier available)
   - [Neon](https://neon.tech) (serverless Postgres)
   - [Railway](https://railway.app)

3. **Run migrations:**
```bash
npx prisma migrate deploy
```

#### Option B: Firebase Firestore

1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Download service account JSON
4. Add credentials to Vercel environment variables
5. Set up Firestore security rules (see DATABASE_SCHEMA.md)

### Step 10: Email Configuration (Optional)

For contact form notifications:

1. **Use Resend (Recommended):**
   - Sign up at [resend.com](https://resend.com)
   - Get API key
   - Add to environment variables: `RESEND_API_KEY`

2. **Or use SendGrid:**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Get API key
   - Add to environment variables: `SENDGRID_API_KEY`

### Step 11: Monitoring & Analytics

#### Error Tracking

Set up Sentry:
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

#### Performance Monitoring

Vercel provides built-in analytics. Enable:
1. Go to project settings
2. Navigate to Analytics
3. Enable Web Analytics
4. Enable Speed Insights

### Step 12: Backup & Maintenance

1. **Database Backups:**
   - Set up automated daily backups
   - Test restore process

2. **Content Backups:**
   - Export property data weekly
   - Keep CSV backups

3. **Regular Updates:**
   - Update dependencies monthly: `npm update`
   - Review security advisories
   - Test thoroughly after updates

## Post-Deployment Checklist

- [ ] Site loads on custom domain
- [ ] All pages are accessible
- [ ] Forms submit successfully
- [ ] Google Analytics tracking works
- [ ] Sitemap is submitted and indexed
- [ ] SSL certificate is active (https)
- [ ] Mobile responsiveness verified
- [ ] Page speed score > 90 (Lighthouse)
- [ ] All links work correctly
- [ ] SEO meta tags are present
- [ ] Social sharing works (Open Graph)
- [ ] Contact forms send emails
- [ ] Database connections work
- [ ] Admin dashboard is secure
- [ ] Backups are configured

## Support Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Issues:** Contact [Ladestack](https://ladestack.in)

## Performance Targets

- **Lighthouse Score:** 90+ for all metrics
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Core Web Vitals:** All metrics in "Good" range

## Maintenance Schedule

- **Daily:** Monitor error logs, check uptime
- **Weekly:** Review analytics, check lead submissions
- **Monthly:** Update dependencies, review SEO performance
- **Quarterly:** Full security audit, performance review

---

**Need Help?** Contact the development team at [Ladestack](https://ladestack.in) for deployment assistance.
