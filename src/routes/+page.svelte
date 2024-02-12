<script>
	import { authStore } from "$lib/stores/authStore.js";
	import Dashboard from "$lib/components/Dashboard.svelte";
	import Login from "$lib/components/Login.svelte";
	import Nav from "$lib/components/Nav.svelte";
	import Alert from "$lib/components/Alert.svelte";
	import { setAlertMessage } from "$lib/stores/uiStore.js";

	let dev = true;
</script>

<Nav />
<main>
	{#if $authStore.uid || dev}
		<Dashboard />
	{:else}
		<Login />
	{/if}
	<Alert />
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100%;
		background-color: var(--clr-blue-4);
	}
</style>
