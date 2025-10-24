<script lang="ts">
	import { onMount } from 'svelte';
	import { Book, FileText, Video, Headphones, Grid, List } from 'lucide-svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	
	type AppwriteResource = {
		$id: string;
		title: string;
		category: 'book' | 'article' | 'video' | 'podcast';
		createdBy: string;
	};
	
	let viewMode: 'grid' | 'list' = $state('grid');
	let appwriteResources: AppwriteResource[] = $state([]);
	let error: string | null = $state(null);
	
	onMount(() => {
		const fetchResources = async () => {
			try {
				console.log('Fetching resources...');
				const response = await fetch('/api/resources');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const fetchedResources = await response.json();
				console.log('Fetched resources:', fetchedResources);
				appwriteResources = fetchedResources as AppwriteResource[];
				error = null;
			} catch (err) {
				console.error('Error in fetchResources:', err);
				if (err instanceof Error) {
					error = `Failed to fetch resources: ${err.message}`;
				} else {
					error = 'Failed to fetch resources. Please try again later.';
				}
			}
		};
		
		fetchResources();
	});
	
	function getCategoryIcon(category: string) {
		switch (category) {
			case 'book': return Book;
			case 'article': return FileText;
			case 'video': return Video;
			case 'podcast': return Headphones;
			default: return FileText;
		}
	}
</script>

<div class="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
	<PageTitle class="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">Resources</PageTitle>

	{#if error}
		<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
			<strong class="font-bold">Error: </strong>
			<span class="block sm:inline">{error}</span>
		</div>
	{/if}

	<div class="bg-background p-4 md:p-8 rounded-lg">
		<div class="flex justify-end mb-4">
			<button
				onclick={() => viewMode = 'grid'}
				class="mr-2 p-2 rounded {viewMode === 'grid' ? 'bg-gray-200 dark:bg-gray-700' : ''}"
				aria-label="Grid view"
			>
				<Grid class="w-5 h-5" />
			</button>
			<button
				onclick={() => viewMode = 'list'}
				class="p-2 rounded {viewMode === 'list' ? 'bg-gray-200 dark:bg-gray-700' : ''}"
				aria-label="List view"
			>
				<List class="w-5 h-5" />
			</button>
		</div>

		<div class="grid gap-6 {viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}">
			{#each appwriteResources as resource (resource.$id)}
				<a href="/resources/{resource.$id}" class="block">
					<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
						<h3 class="text-lg font-semibold mb-2">{resource.title}</h3>
						<p class="text-gray-600 dark:text-gray-400 mb-4">{resource.createdBy}</p>
						<div class="flex justify-between items-center">
							{#if resource.category === 'book'}
								<Book class="w-5 h-5" />
							{:else if resource.category === 'article'}
								<FileText class="w-5 h-5" />
							{:else if resource.category === 'video'}
								<Video class="w-5 h-5" />
							{:else if resource.category === 'podcast'}
								<Headphones class="w-5 h-5" />
							{:else}
								<FileText class="w-5 h-5" />
							{/if}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>