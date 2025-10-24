<script lang="ts">
	interface Props {
		children: any;
		class?: string;
	}
	
	let { children, class: className = '' }: Props = $props();
</script>

<h1 class="font-serif font-light {className}">{@render children()}</h1>
