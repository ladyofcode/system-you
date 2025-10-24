<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { Book, FileText, Video, Headphones } from 'lucide-svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	
	type AppwriteResource = {
		$id: string;
		title: string;
		category: 'book' | 'article' | 'video' | 'podcast';
		createdBy: string;
		description: string;
	};
	
	let resource: AppwriteResource | null = $state(null);
	let error: string | null = $state(null);
	let loading = $state(true);
	
	onMount(() => {
		const fetchResource = async () => {
			try {
				const resourceId = $page.params.id;
				if (!resourceId) {
					throw new Error('Resource ID is missing');
				}
				console.log('Fetching resource with ID:', resourceId);
				const response = await fetch(`/api/resources/${resourceId}`);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const fetchedResource = await response.json();
				console.log('Fetched resource:', fetchedResource);
				resource = fetchedResource;
				error = null;
			} catch (err) {
				console.error('Error fetching resource:', err);
				if (err instanceof Error) {
					error = `Failed to fetch resource: ${err.message}`;
				} else {
					error = 'Failed to fetch resource. Please try again later.';
				}
			} finally {
				loading = false;
			}
		};
		
		fetchResource();
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

{#if loading}
	<div class="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
		<PageTitle class="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">
			Loading...
		</PageTitle>
	</div>
{:else if error}
	<div class="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
		<PageTitle class="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">
			Error
		</PageTitle>
		<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
			<strong class="font-bold">Error: </strong>
			<span class="block sm:inline">{error}</span>
		</div>
	</div>
{:else if resource}
	<div class="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
		<PageTitle class="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">
			{resource.title}
		</PageTitle>
		<div class="bg-background p-4 md:p-8 rounded-lg">
			{#if resource}
				{@const IconComponent = getCategoryIcon(resource.category)}
				<div class="flex items-center mb-4">
					<IconComponent class="w-6 h-6 mr-2" />
					<span class="text-xl font-semibold">{resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}</span>
				</div>
			{/if}
			<p class="text-lg mb-4">By {resource.createdBy}</p>
			<p class="text-lg">{resource.description}</p>
		</div>
	</div>
{/if}
