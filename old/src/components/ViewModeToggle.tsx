'use client';

import { useState } from 'react';
import { Grid, List } from 'lucide-react';

export function ViewModeToggle() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
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
    );
}