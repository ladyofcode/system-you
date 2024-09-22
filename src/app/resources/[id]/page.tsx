'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { PageTitle } from '@/components/PageTitle';
import { Book, FileText, Video, Headphones } from 'lucide-react';

// This is a dummy resource for now. In the future, you'll fetch this from your backend.
const dummyResource = {
  id: 1,
  type: 'book',
  title: 'Deep Work: Rules for Focused Success in a Distracted World',
  author: 'Cal Newport',
  rating: 4,
  description: 'This is a placeholder description for the resource. In a real application, this would be fetched from a database or API based on the resource ID.',
};

export default function ResourcePage() {
  const params = useParams();
  const [resource, setResource] = useState(dummyResource);

  useEffect(() => {
    // In the future, you'll fetch the resource data here based on the ID
    console.log('Resource ID:', params.id);
  }, [params.id]);

  const TypeIcon = () => {
    switch (resource.type) {
      case 'book':
        return <Book className="w-6 h-6 mr-2" />;
      case 'article':
        return <FileText className="w-6 h-6 mr-2" />;
      case 'video':
        return <Video className="w-6 h-6 mr-2" />;
      case 'podcast':
        return <Headphones className="w-6 h-6 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
      <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">
        {resource.title}
      </PageTitle>
      
      <div className="bg-background p-4 md:p-8 rounded-lg">
        <div className="flex items-center mb-4">
          <TypeIcon />
          <span className="text-xl font-semibold">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
        </div>
        <p className="text-lg mb-4">By {resource.author}</p>
        <div className="mb-6">
          <span className="text-yellow-400 text-xl">{'★'.repeat(resource.rating)}</span>
          <span className="text-gray-400 text-xl">{'★'.repeat(5 - resource.rating)}</span>
        </div>
        <p className="text-lg">{resource.description}</p>
      </div>
    </div>
  );
}