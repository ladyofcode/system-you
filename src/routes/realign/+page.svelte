<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	
	let showCaptcha = $state(false);
</script>

<svelte:head>
	<title>Realign program</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800;400&family=Roboto:wght@500&display=swap"
	/>
	<script>
		(function (w, d, e, u, f, l, n) {
			(w[f] =
				w[f] ||
				function () {
					(w[f].q = w[f].q || []).push(arguments);
				}),
				(l = d.createElement(e)),
				(l.async = 1),
				(l.src = u),
				(n = d.getElementsByTagName(e)[0]),
				n.parentNode.insertBefore(l, n);
		})(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
		ml('account', '748268');
	</script>
</svelte:head>

<div class="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
	<PageTitle class="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg">Realign 2024</PageTitle>

	<div class="sketchy-box bg-background p-4 md:p-8 mb-6">
		<p>
			Yeah, yeah, New Year's Resolutions. With potential peer pressure and committing to a scheduled
			time, you're far more likely to get these done.
		</p>

		<div
			id="mlb2-10557610"
			class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-10557610 mt-6"
		>
			<div class="ml-form-align-left ">
				<div class="ml-form-embedWrapper embedForm">
					<div class="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
							<h2 class="text-xl font-semibold mb-4">Get everything in your inbox</h2>

						<form
							class="ml-block-form flex flex-col sm:flex-row items-center gap-2"
							action="https://assets.mailerlite.com/jsonp/748268/forms/109113070829176700/subscribe"
							data-code=""
							method="post"
							target="_blank"
						>
							<div class="ml-field-group ml-field-email ml-validate-email ml-validate-required w-full sm:max-w-sm">
								<input
									type="email"
									class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
									data-inputmask=""
									name="fields[email]"
									placeholder="Enter your email"
									autocomplete="email"
									onfocus={() => showCaptcha = true}
								/>
							</div>

							<button 
								type="submit" 
								class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
							>
								Sign up
							</button>

							<button
								disabled
								style="display: none;"
								type="button"
								class="loading"
							>
								<div class="ml-form-embedSubmitLoad"></div>
								<span class="sr-only">Loading...</span>
							</button>

							<div class="ml-form-recaptcha ml-validate-required mt-4 sm:mt-0" class:hidden={!showCaptcha}>
								<script src="https://www.google.com/recaptcha/api.js"></script>
								<div class="g-recaptcha" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
							</div>

							<input type="hidden" name="ml-submit" value="1" />
							<input type="hidden" name="anticsrf" value="true" />
						</form>
					</div>

					<div class="ml-form-successBody row-success" style="display: none">
						<div class="ml-form-successContent">
							<h4>Thank you!</h4>

							<p>You have successfully joined our subscriber list.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script>
			function ml_webform_success_10557610() {
				var $ = ml_jQuery || jQuery;
				$('.ml-subscribe-form-10557610 .row-success').show();
				$('.ml-subscribe-form-10557610 .row-form').hide();
			}
		</script>

		<script
			src="https://groot.mailerlite.com/js/w/webforms.min.js?v1f25ee4b05f240a833e02c19975434a4"
			type="text/javascript"></script>
		<script>
			fetch('https://assets.mailerlite.com/jsonp/748268/forms/109113070829176700/takel');
		</script>
	</div>

	<div class="sketchy-box bg-background p-4 md:p-8 mb-6">
		<h2 class="text-xl font-semibold mb-4">This is for you if...</h2>

		<p class="mb-4">
			This is for you if you plan to majorly upskill, change jobs, start new ventures, create
			content, and have an idea of your career direction.
		</p>
		<p>
			Realign helps you to keep your online presence updated yearly through small reminders and hopefully
			manageable weekly task loads.
		</p>
	</div>

	<div class="sketchy-box bg-background p-4 md:p-8 mb-6">
		<h2 class="text-xl font-semibold mb-4">Time commitment</h2>
		<p>
			The amount of time spent weekly is variable depending on the task - an evening, maybe a day of
			your weekend. Alternatively, spread the tasks throughout the week. Having said that, if you're doing something like building an entire portfolio from scratch, allocate more time accordingly.
		</p>
	</div>

	<div class="sketchy-box bg-background p-4 md:p-8 mb-6">
		<h2 class="text-xl font-semibold mb-4">Weekly task list</h2>
		<p class="mb-4">Summaries will be replaced with the full prompts on Mondays.</p>

		<p class="mb-4">
			If you're new and don't have any existing content, we'll link to templates and tutorials to
			get you start quickly if you're in our <a href="https://ladyofcode.com/community" class="underline"
				>community Discord</a
			>. This shouldn't be overwhelming!
		</p>

		<p>
			Full instructions, shortcuts, and tips, will be posted each week in our <a
				href="https://ladyofcode.com/community" class="underline">community Discord</a
			>
			announcements channel in addition to the prompts here. Add yourself to the Realign role to get
			notifications!
		</p>
	</div>
</div>

<footer class="bg-black text-white w-full py-3">
	<p class="max-w-[1200px] mx-auto text-center px-4">
		Made with far too much love by <a href="https://ladyofcode.com" class="underline">Tabs</a>. All rights reserved.
		Yes, all of them.
	</p>
</footer>

<style>
	.sketchy-box {
		border: solid 3px hsl(0, 0%, 20%);
		border-radius: 255px 16px 225px 16px/16px 225px 16px 255px;
        margin-bottom: 4rem;
	}
</style>

