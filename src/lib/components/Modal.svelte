<script lang="ts">
	import Button from './ui/Button.svelte';
	
	interface Props {
		isOpen: boolean;
		onClose: () => void;
		onConfirm: () => void;
		title: string;
		children: any;
	}
	
	let { isOpen, onClose, onConfirm, title, children }: Props = $props();
</script>

{#if isOpen}
	<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
		<div class="bg-background text-foreground p-6 rounded-lg shadow-lg max-w-md w-full">
			<h2 class="text-2xl mb-4">{title}</h2>
			<div class="mb-4">{children}</div>
			<div class="flex justify-end space-x-4">
				<Button variant="ghost" onclick={onClose}>No</Button>
				<Button class="bg-primary text-primary-foreground hover:bg-primary/90" onclick={onConfirm}>Yes, I want to delete this account</Button>
			</div>
		</div>
	</div>
{/if}