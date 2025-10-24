import { json } from '@sveltejs/kit';

// Mock data matching the real Appwrite structure
const mockResources = [
  {
    $id: '1',
    title: 'Atomic Habits',
    category: 'book',
    createdBy: 'James Clear',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones. A comprehensive guide to building good habits and breaking bad ones through small, incremental changes.',
    url: 'https://jamesclear.com/atomic-habits',
    $createdAt: '2024-01-15T10:30:00.000Z',
    $updatedAt: '2024-01-15T10:30:00.000Z'
  }
];

export async function GET() {
  try {
    // TODO: Replace with actual Appwrite integration
    // const resources = await getResources();
    return json(mockResources);
  } catch (error) {
    console.error('Error in API route:', error);
    return json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    );
  }
}
