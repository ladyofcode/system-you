<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './ui/Button.svelte';
	import { Sun, Moon } from 'lucide-svelte';
	
	let theme = $state('light');
	
	onMount(() => {
		// Get theme from localStorage or default to light
		theme = localStorage.getItem('theme') || 'light';
		updateTheme();
	});
	
	function updateTheme() {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}
	
	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		updateTheme();
	}
</script>

<Button variant="ghost" size="icon" onclick={toggleTheme}>
	<Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
	<Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
	<span class="sr-only">Toggle theme</span>
</Button>