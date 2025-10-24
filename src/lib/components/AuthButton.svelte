<script lang="ts">
	import Button from './ui/Button.svelte';
	
	let isLoggedIn = $state(false);
	
	function handleLogout() {
		// TODO: Implement logout logic with Appwrite
		console.log("Logout clicked");
		isLoggedIn = false;
	}
</script>

{#if isLoggedIn}
	<Button onclick={handleLogout} variant="ghost">
		Log out
	</Button>
{:else}
	<a href="/login">
		<Button variant="ghost">Log in</Button>
	</a>
{/if}