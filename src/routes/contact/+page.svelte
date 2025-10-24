<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
</script>

<PageTitle>Contact</PageTitle>

<div class="container mx-auto px-4 max-w-[1200px] py-8">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
			<p class="text-muted-foreground mb-6">
				Have questions or suggestions? We'd love to hear from you!
			</p>
			
			<div class="space-y-4">
				<div>
					<h3 class="font-semibold mb-2">Email</h3>
					<a href="mailto:contact@systemyou.com" class="text-primary hover:underline">
						contact@systemyou.com
					</a>
				</div>
				
				<div>
					<h3 class="font-semibold mb-2">Social Media</h3>
					<div class="flex space-x-4">
						<a href="https://x.com/ladyofcode" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
							Twitter
						</a>
						<a href="https://linkedin.com/in/ladyofcode" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</div>
		
		<div>
			<h2 class="text-2xl font-semibold mb-4">Stay Updated</h2>
			<p class="text-muted-foreground mb-4">
				Subscribe to our newsletter for the latest resources and updates.
			</p>
			<NewsletterForm />
		</div>
	</div>
</div>
