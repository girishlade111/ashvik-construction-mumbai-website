import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, message } = body;
    
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In a real application, save to database
    const newLead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      message: message || '',
      propertyId: body.propertyId,
      serviceType: body.serviceType,
      source: 'website',
      status: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // TODO: Send email notification to admin
    // TODO: Send auto-reply email to user

    return NextResponse.json({
      success: true,
      data: newLead,
      message: 'Thank you for your inquiry! We will contact you soon.',
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');

    // Sample leads data - replace with database query
    const leads = [
      {
        id: '1',
        name: 'Rajesh Kumar',
        email: 'rajesh@example.com',
        phone: '+919876543210',
        message: 'Interested in 3BHK in Bandra',
        status: 'new',
        createdAt: new Date(),
      },
    ];

    let filteredLeads = [...leads];
    if (status && status !== 'all') {
      filteredLeads = filteredLeads.filter(l => l.status === status);
    }

    return NextResponse.json({
      success: true,
      data: filteredLeads,
      total: filteredLeads.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}
