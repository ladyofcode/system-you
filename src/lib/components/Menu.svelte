<script lang="ts">
	import ModeToggle from './ModeToggle.svelte';
</script>

<nav class="w-full bg-background">
	<div class="max-w-[1200px] mx-auto px-4 md:px-8 flex justify-between items-center p-4">
		<a href="/" class="text-xl md:text-2xl font-serif font-light">
			System: You
		</a>
		<ul class="flex space-x-4 items-center">
			<li>
				<a href="/resources" class="hover:underline">
					Resources
				</a>
			</li>
			<li>
				<ModeToggle />
			</li>
		</ul>
	</div>
</nav>
