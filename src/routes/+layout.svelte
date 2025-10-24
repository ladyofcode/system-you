<script lang="ts">
	import '../app.css';
	import Menu from '../lib/components/Menu.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>System: You</title>
	<meta name="description" content="Curated resources and profile-sharing for your self-development journey" />
</svelte:head>

<div class="min-h-screen bg-background text-foreground">
	<Menu />
	<main>
		<slot />
	</main>
	<Footer />
</div>
