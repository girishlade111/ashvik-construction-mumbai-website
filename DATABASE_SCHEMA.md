# Database Schema for Ashvik Construction

## Overview
This document outlines the database schema for the Ashvik Construction real estate website. You can use either PostgreSQL (with Prisma) or Firebase Firestore.

## Option 1: PostgreSQL with Prisma

### Schema File: `prisma/schema.prisma`

```prisma
// This is your Prisma schema file

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Property {
  id                String    @id @default(cuid())
  title             String
  titleMarathi      String?
  description       String    @db.Text
  descriptionMarathi String?  @db.Text
  type              PropertyType
  price             Float
  locality          String
  city              String    @default("Mumbai")
  address           String
  latitude          Float?
  longitude         Float?
  bhk               Int
  bathrooms         Int
  area              Float
  areaUnit          AreaUnit  @default(SQFT)
  furnishing        Furnishing
  floor             String?
  totalFloors       Int?
  facing            String?
  ageOfProperty     String?
  images            String[]
  floorPlanUrl      String?
  virtualTourUrl    String?
  amenities         String[]
  nearbyPlaces      Json?
  featured          Boolean   @default(false)
  status            PropertyStatus @default(ACTIVE)
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  leads             Lead[]

  @@index([type, status])
  @@index([locality])
  @@index([bhk])
  @@index([price])
}

model Lead {
  id           String      @id @default(cuid())
  name         String
  email        String
  phone        String
  message      String?     @db.Text
  propertyId   String?
  property     Property?   @relation(fields: [propertyId], references: [id])
  serviceType  String?
  source       LeadSource  @default(WEBSITE)
  status       LeadStatus  @default(NEW)
  createdAt    DateTime    @default(now())
  updatedAt    DateTime    @updatedAt

  @@index([status])
  @@index([createdAt])
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  password  String
  role      UserRole @default(AGENT)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model BlogPost {
  id              String   @id @default(cuid())
  title           String
  titleMarathi    String?
  slug            String   @unique
  excerpt         String   @db.Text
  content         String   @db.Text
  contentMarathi  String?  @db.Text
  category        String
  author          String
  image           String
  published       Boolean  @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([slug])
  @@index([published])
}

enum PropertyType {
  SALE
  RENT
}

enum AreaUnit {
  SQFT
  SQM
}

enum Furnishing {
  FURNISHED
  SEMI_FURNISHED
  UNFURNISHED
}

enum PropertyStatus {
  ACTIVE
  SOLD
  RENTED
  INACTIVE
}

enum LeadSource {
  WEBSITE
  WHATSAPP
  PHONE
  OTHER
}

enum LeadStatus {
  NEW
  CONTACTED
  QUALIFIED
  CONVERTED
  CLOSED
}

enum UserRole {
  ADMIN
  AGENT
  USER
}
```

### Migrations

```bash
# Initialize Prisma
npx prisma init

# Create migration
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate

# Seed database (optional)
npx prisma db seed
```

### Seed File: `prisma/seed.ts`

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample properties
  await prisma.property.createMany({
    data: [
      {
        title: 'Luxurious 3BHK Sea View Apartment',
        type: 'SALE',
        price: 35000000,
        locality: 'Bandra West',
        city: 'Mumbai',
        address: 'Carter Road, Bandra West, Mumbai - 400050',
        bhk: 3,
        bathrooms: 3,
        area: 1850,
        areaUnit: 'SQFT',
        furnishing: 'FURNISHED',
        description: 'Experience luxury living with stunning sea views',
        images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
        amenities: ['Swimming Pool', 'Gym', 'Security', 'Parking'],
        featured: true,
        status: 'ACTIVE',
      },
      // Add more sample properties...
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

## Option 2: Firebase Firestore

### Collections Structure

#### Properties Collection
```
properties/
  {propertyId}/
    - id: string
    - title: string
    - titleMarathi: string (optional)
    - description: string
    - type: 'sale' | 'rent'
    - price: number
    - locality: string
    - city: string
    - address: string
    - bhk: number
    - bathrooms: number
    - area: number
    - areaUnit: 'sqft' | 'sqm'
    - furnishing: string
    - images: array
    - amenities: array
    - featured: boolean
    - status: string
    - createdAt: timestamp
    - updatedAt: timestamp
```

#### Leads Collection
```
leads/
  {leadId}/
    - id: string
    - name: string
    - email: string
    - phone: string
    - message: string
    - propertyId: string (optional)
    - serviceType: string (optional)
    - source: string
    - status: string
    - createdAt: timestamp
    - updatedAt: timestamp
```

#### Users Collection
```
users/
  {userId}/
    - id: string
    - email: string
    - name: string
    - role: 'admin' | 'agent' | 'user'
    - createdAt: timestamp
```

### Firestore Indexes

Create composite indexes in Firebase Console:
- `properties`: type (ASC), status (ASC), createdAt (DESC)
- `properties`: locality (ASC), type (ASC), price (ASC)
- `properties`: bhk (ASC), type (ASC), price (ASC)
- `leads`: status (ASC), createdAt (DESC)

### Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Properties - read public, write admin only
    match /properties/{propertyId} {
      allow read: if true;
      allow write: if request.auth != null && 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Leads - write public, read admin only
    match /leads/{leadId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null && 
                                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Users - admin only
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## API Endpoints

All API endpoints are already implemented in:
- `/api/properties` - GET (list), POST (create)
- `/api/properties/[id]` - GET (detail), PUT (update), DELETE (delete)
- `/api/leads` - GET (list), POST (create)

## CSV Import Format

For bulk property upload, use this CSV format:

```csv
title,type,price,locality,city,bhk,bathrooms,area,areaUnit,furnishing,description,images
"3BHK Apartment",sale,35000000,"Bandra West","Mumbai",3,3,1850,sqft,Furnished,"Luxury apartment with sea view","https://example.com/image1.jpg,https://example.com/image2.jpg"
```

## Environment Variables

Add these to your `.env.local`:

```env
# PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/ashvik"

# OR Firestore
FIREBASE_PROJECT_ID="your-project-id"
FIREBASE_CLIENT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## Notes

- All IDs use integer auto-increment or CUID for better performance
- Timestamps are in UTC
- Property images are stored as URLs (use cloud storage like Cloudinary/S3)
- Implement proper validation in API routes
- Use transactions for critical operations
- Regular backups recommended
