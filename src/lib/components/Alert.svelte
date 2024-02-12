<script>
	import { alertMessage, alertIcon } from "$lib/stores/uiStore.js";
	import Icon from "$lib/components/Icon.svelte";
	import { fly } from "svelte/transition";
</script>

{#if $alertMessage}
	<div transition:fly={{ y: 20, duration: 200 }} class="alert surface">
		<Icon name={$alertIcon} />
		<p>{$alertMessage}</p>
	</div>
{/if}

<style>
	.alert {
		position: absolute;
		bottom: 2rem;
		right: 2rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: var(--clr-white);
		background-color: var(--clr-blue-1);
		padding: 1rem;
		border-radius: 0.25rem;
	}
</style>
