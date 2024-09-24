'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { PageTitle } from '@/components/PageTitle';
import { Book, FileText, Video, Headphones } from 'lucide-react';
import { getResourceById } from '@/lib/server/appwrite';

type AppwriteResource = {
  $id: string;
  title: string;
  category: 'book' | 'article' | 'video' | 'podcast';
  createdBy: string;
  description: string;
};

export default function ResourcePage() {
  const params = useParams();
  const [resource, setResource] = useState<AppwriteResource | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const resourceId = Array.isArray(params.id) ? params.id[0] : params.id;
        console.log('Fetching resource with ID:', resourceId);
        const fetchedResource = await getResourceById(resourceId);
        console.log('Resource from Appwrite:', fetchedResource);
        const appwriteResource: AppwriteResource = {
          $id: fetchedResource.$id,
          title: fetchedResource.title,
          category: fetchedResource.category,
          createdBy: fetchedResource.createdBy,
          description: fetchedResource.description,
        };
        setResource(appwriteResource);
        setError(null);
      } catch (error) {
        console.error('Error fetching resource:', error);
        if (error instanceof Error) {
          setError(`Failed to fetch resource: ${error.message}`);
        } else {
          setError('Failed to fetch resource. Please try again later.');
        }
      }
    };

    fetchResource();
  }, [params.id]);

  const TypeIcon = () => {
    if (!resource) return null;
    switch (resource.category) {
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

  if (error) {
    return (
      <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
        <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">
          Error
        </PageTitle>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
        <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">
          Loading...
        </PageTitle>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
      <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">
        {resource.title}
      </PageTitle>
      <div className="bg-background p-4 md:p-8 rounded-lg">
        <div className="flex items-center mb-4">
          <TypeIcon />
          <span className="text-xl font-semibold">{resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}</span>
        </div>
        <p className="text-lg mb-4">By {resource.createdBy}</p>
        <p className="text-lg">{resource.description}</p>
      </div>
    </div>
  );
}