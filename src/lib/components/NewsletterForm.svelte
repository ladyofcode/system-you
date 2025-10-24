<script lang="ts">
	import Input from '$lib/components/ui/Input.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	
	let email = $state('');
	
	function handleSubmit(event: Event) {
		event.preventDefault();
		// TODO: Implement MailerLite integration here
		console.log("Form submitted with email:", email);
	}
</script>

<form onsubmit={handleSubmit} class="flex items-center justify-center">
	<Input
		type="email"
		placeholder="Enter your email"
		class="max-w-sm w-full mr-2"
		required
		bind:value={email}
	/>
	<Button type="submit" class="bg-primary text-primary-foreground hover:bg-primary-dark">
		Sign up
	</Button>
</form>