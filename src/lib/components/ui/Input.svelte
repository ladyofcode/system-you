<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		type?: string;
		class?: string;
		placeholder?: string;
		value?: string;
		disabled?: boolean;
		required?: boolean;
		oninput?: (event: Event) => void;
		onchange?: (event: Event) => void;
		onblur?: (event: Event) => void;
		onfocus?: (event: Event) => void;
	}
	
	let { 
		type = 'text', 
		class: className = '', 
		value = $bindable(),
		...restProps 
	}: Props = $props();
	
	const baseClasses = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
</script>

<input
	type={type}
	class={cn(baseClasses, className)}
	bind:value={value}
	{...restProps}
/>