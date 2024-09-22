'use client';

import { useState } from 'react'
import { Book, FileText, Video, Headphones, Grid, List } from 'lucide-react'
import { PageTitle } from '@/components/PageTitle'
import Link from 'next/link'

const resources = [
  { id: 1, type: 'book', title: 'Deep Work: Rules for Focused Success in a Distracted World', author: 'Cal Newport', rating: 4 },
  { id: 2, type: 'article', title: 'The Power of Habit', author: 'Charles Duhigg', rating: 5 },
  { id: 3, type: 'video', title: 'How to Speak so That People Want to Listen', author: 'Julian Treasure', rating: 4 },
  { id: 4, type: 'podcast', title: 'The Tim Ferriss Show', author: 'Tim Ferriss', rating: 5 },
  { id: 5, type: 'book', title: 'Atomic Habits', author: 'James Clear', rating: 5 },
  { id: 6, type: 'article', title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', rating: 4 },
  { id: 7, type: 'video', title: 'Inside the Mind of a Master Procrastinator', author: 'Tim Urban', rating: 5 },
  { id: 8, type: 'podcast', title: 'Hardcore History', author: 'Dan Carlin', rating: 5 },
]

export default function ResourcesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const ResourceCard = ({ resource }: { resource: typeof resources[0] }) => (
    <Link href={`/resources/${resource.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
        <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.author}</p>
        <div className="flex justify-between items-center">
          {resource.type === 'book' && <Book className="w-5 h-5" />}
          {resource.type === 'article' && <FileText className="w-5 h-5" />}
          {resource.type === 'video' && <Video className="w-5 h-5" />}
          {resource.type === 'podcast' && <Headphones className="w-5 h-5" />}
          <span className="text-yellow-400">{'★'.repeat(resource.rating)}</span>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
      <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">Resources</PageTitle>
      
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
          {resources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  )
}