<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
</script>

<div class="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
	<div class="bg-background p-16 rounded-lg w-full max-w-2xl">
		<PageTitle class="text-5xl md:text-7xl mb-8 text-center">System: You</PageTitle>
		<p class="mb-12 text-center max-w-md mx-auto text-xl">Build your best self.</p>
		
		<div class="mt-12 mb-6">
			<p class="text-lg text-center">
				Get a bite-sized topic in your inbox weekly through our newsletter
			</p>
		</div>

		<NewsletterForm />
	</div>
</div>
