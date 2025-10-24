<script lang="ts">
	let viewMode = $state<'grid' | 'list'>('grid');
</script>

<div class="flex justify-end mb-4">
	<button
		onclick={() => viewMode = 'grid'}
		class="mr-2 p-2 rounded {viewMode === 'grid' ? 'bg-gray-200 dark:bg-gray-700' : ''}"
		aria-label="Grid view"
		type="button"
	>
		<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<rect width="7" height="7" x="3" y="3" rx="1"/>
			<rect width="7" height="7" x="14" y="3" rx="1"/>
			<rect width="7" height="7" x="14" y="14" rx="1"/>
			<rect width="7" height="7" x="3" y="14" rx="1"/>
		</svg>
	</button>
	<button
		onclick={() => viewMode = 'list'}
		class="p-2 rounded {viewMode === 'list' ? 'bg-gray-200 dark:bg-gray-700' : ''}"
		aria-label="List view"
		type="button"
	>
		<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<line x1="8" x2="21" y1="6" y2="6"/>
			<line x1="8" x2="21" y1="12" y2="12"/>
			<line x1="8" x2="21" y1="18" y2="18"/>
			<line x1="3" x2="3.01" y1="6" y2="6"/>
			<line x1="3" x2="3.01" y1="12" y2="12"/>
			<line x1="3" x2="3.01" y1="18" y2="18"/>
		</svg>
	</button>
</div>