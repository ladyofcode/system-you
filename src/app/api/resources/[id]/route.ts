import { NextResponse } from 'next/server';
import { getResourceById } from '@/lib/server/appwrite';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const resource = await getResourceById(params.id);
    return NextResponse.json(resource);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resource' },
      { status: 500 }
    );
  }
}