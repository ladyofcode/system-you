'use client';

import { useState, useEffect } from 'react'
import { Book, FileText, Video, Headphones, Grid, List } from 'lucide-react'
import { PageTitle } from '@/components/PageTitle'
import Link from 'next/link'
import { getResources } from '@/lib/server/appwrite'
import { Models } from 'appwrite';

type AppwriteResource = Models.Document & {
  title: string;
  category: 'book' | 'article' | 'video' | 'podcast';
  createdBy: string;
};

export default function ResourcesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [appwriteResources, setAppwriteResources] = useState<AppwriteResource[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchResources = async () => {
      try {
        console.log("Fetching resources...");
        const fetchedResources = await getResources();
        console.log('Resources from Appwrite: ', fetchedResources);
        setAppwriteResources(fetchedResources as AppwriteResource[]);
        setError(null);
      } catch (error) {
        console.error('Error fetching Resources:', error);
        if (error instanceof Error) {
          setError(`Failed to fetch resources: ${error.message}`);
        } else {
          setError('Failed to fetch resources. Please try again later.');
        }
      }
    };

    fetchResources();
  }, []);

  const ResourceCard = ({ resource }: { resource: AppwriteResource }) => (
    <Link href={`/resources/${resource.$id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.createdBy}</p>
        <div className="flex justify-between items-center">
          {resource.category === 'book' && <Book className="w-5 h-5" />}
          {resource.category === 'article' && <FileText className="w-5 h-5" />}
          {resource.category === 'video' && <Video className="w-5 h-5" />}
          {resource.category === 'podcast' && <Headphones className="w-5 h-5" />}
        </div>
      </div>
    </Link>
  )

  return (
    <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
      <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">Resources</PageTitle>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div className="bg-background p-4 md:p-8 rounded-lg">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`mr-2 p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
            aria-label="Grid view"
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
            aria-label="List view"
          >
            <List className="w-5 h-5" />
          </button>
        </div>

        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {appwriteResources.map(resource => (
            <ResourceCard key={resource.$id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  )
}