import { json } from '@sveltejs/kit';

// Mock data - same as in the main resources API
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
  },
  {
    $id: '2', 
    title: 'The Power of Now',
    category: 'book',
    createdBy: 'Eckhart Tolle',
    description: 'A Guide to Spiritual Enlightenment. Learn to live in the present moment and find inner peace through mindfulness and awareness.',
    url: 'https://eckharttolle.com/the-power-of-now/',
    $createdAt: '2024-01-20T14:15:00.000Z',
    $updatedAt: '2024-01-20T14:15:00.000Z'
  },
  {
    $id: '3',
    title: 'How to Build Better Habits',
    category: 'article', 
    createdBy: 'Medium',
    description: 'A practical guide to understanding habit formation and implementing systems that stick. Covers the science behind habits and actionable strategies.',
    url: 'https://medium.com/@example/habit-building-guide',
    $createdAt: '2024-02-01T09:45:00.000Z',
    $updatedAt: '2024-02-01T09:45:00.000Z'
  },
  {
    $id: '4',
    title: 'Mindfulness Meditation Guide',
    category: 'video',
    createdBy: 'YouTube',
    description: 'A comprehensive 20-minute guided meditation for beginners. Learn the basics of mindfulness and how to start a daily practice.',
    url: 'https://youtube.com/watch?v=example',
    $createdAt: '2024-02-05T16:20:00.000Z',
    $updatedAt: '2024-02-05T16:20:00.000Z'
  },
  {
    $id: '5',
    title: 'The Tim Ferriss Show',
    category: 'podcast',
    createdBy: 'Tim Ferriss',
    description: 'Interviews with world-class performers to extract tactics, tools, and routines you can use. Features entrepreneurs, athletes, and thought leaders.',
    url: 'https://tim.blog/podcast/',
    $createdAt: '2024-02-10T11:30:00.000Z',
    $updatedAt: '2024-02-10T11:30:00.000Z'
  },
  {
    $id: '6',
    title: 'Deep Work',
    category: 'book',
    createdBy: 'Cal Newport',
    description: 'Rules for Focused Success in a Distracted World. Learn how to cultivate deep focus and produce high-quality work in our hyper-connected age.',
    url: 'https://calnewport.com/books/deep-work/',
    $createdAt: '2024-02-12T13:15:00.000Z',
    $updatedAt: '2024-02-12T13:15:00.000Z'
  },
  {
    $id: '7',
    title: 'The Science of Sleep',
    category: 'article',
    createdBy: 'Healthline',
    description: 'Understanding the importance of sleep for mental and physical health. Includes practical tips for improving sleep quality and duration.',
    url: 'https://healthline.com/sleep-science',
    $createdAt: '2024-02-15T08:00:00.000Z',
    $updatedAt: '2024-02-15T08:00:00.000Z'
  },
  {
    $id: '8',
    title: 'Morning Routine Masterclass',
    category: 'video',
    createdBy: 'Skillshare',
    description: 'Design a morning routine that sets you up for success. Learn from productivity experts and implement systems that work for your lifestyle.',
    url: 'https://skillshare.com/morning-routine',
    $createdAt: '2024-02-18T12:45:00.000Z',
    $updatedAt: '2024-02-18T12:45:00.000Z'
  }
];

export async function GET({ params }) {
  try {
    // TODO: Replace with actual Appwrite integration
    // const resource = await getResourceById(params.id);
    
    // Find resource in mock data
    const resource = mockResources.find(r => r.$id === params.id);
    
    if (!resource) {
      return json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }
    
    return json(resource);
  } catch (error) {
    console.error('Error in API route:', error);
    return json(
      { error: 'Failed to fetch resource' },
      { status: 500 }
    );
  }
}
