import { NextRequest, NextResponse } from 'next/server';

// Sample data - replace with actual database queries
const sampleProperties = [
  {
    id: '1',
    title: 'Luxurious 3BHK Sea View Apartment',
    type: 'sale',
    price: 35000000,
    locality: 'Bandra West',
    city: 'Mumbai',
    bhk: 3,
    bathrooms: 3,
    area: 1850,
    areaUnit: 'sqft',
    furnishing: 'Furnished',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    featured: true,
    status: 'active',
  },
  {
    id: '2',
    title: 'Spacious 2BHK in Prime Location',
    type: 'rent',
    price: 75000,
    locality: 'Worli',
    city: 'Mumbai',
    bhk: 2,
    bathrooms: 2,
    area: 1200,
    areaUnit: 'sqft',
    furnishing: 'Semi-Furnished',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
    featured: false,
    status: 'active',
  },
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const locality = searchParams.get('locality');
    const bhk = searchParams.get('bhk');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    // Filter properties based on query parameters
    let filteredProperties = [...sampleProperties];

    if (type && type !== 'all') {
      filteredProperties = filteredProperties.filter(p => p.type === type);
    }

    if (locality && locality !== 'all') {
      filteredProperties = filteredProperties.filter(p => p.locality === locality);
    }

    if (bhk && bhk !== 'all') {
      filteredProperties = filteredProperties.filter(p => p.bhk.toString() === bhk);
    }

    if (minPrice) {
      filteredProperties = filteredProperties.filter(p => p.price >= parseInt(minPrice));
    }

    if (maxPrice) {
      filteredProperties = filteredProperties.filter(p => p.price <= parseInt(maxPrice));
    }

    return NextResponse.json({
      success: true,
      data: filteredProperties,
      total: filteredProperties.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'type', 'price', 'locality', 'city', 'bhk', 'bathrooms', 'area'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // In a real application, save to database
    const newProperty = {
      id: Date.now().toString(),
      ...body,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json({
      success: true,
      data: newProperty,
      message: 'Property created successfully',
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create property' },
      { status: 500 }
    );
  }
}
