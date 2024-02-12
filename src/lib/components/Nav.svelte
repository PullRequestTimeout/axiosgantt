<script>
	import Icon from "$lib/components/Icon.svelte";
</script>

<header>
	<div class="logo">
		<img src="/logo.png" alt="Axios Logo" />
		<h1>AxiosGantt</h1>
	</div>

	<div class="nav-btns">
		<button>
			<Icon name="list" />
		</button>
		<button>
			<Icon name="list" />
		</button>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: var(--clr-blue-1);
		background-color: #00a2ed8e;
		color: var(--clr-white);
	}

	header .logo {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	header .logo img {
		width: 2rem;
	}

	header .nav-btns {
		display: flex;
		gap: 1rem;
	}

	header .nav-btns button {
		background-color: var(--clr-primary);
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		border-radius: 50%;
		padding: 0.5rem;
	}

	header .nav-btns button:hover {
		background-color: var(--clr-primary-dark);
	}
</style>
