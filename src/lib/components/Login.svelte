<script>
	let email = "";
	let password = "";

	const handleSubmit = () => {
		console.log(email, password);
	};
</script>

<form class="surface" on:submit|preventDefault={handleSubmit}>
	<h2>Login</h2>
	<input
		type="email"
		id="email"
		name="email"
		class="text-input"
		placeholder="Email"
		bind:value={email}
		required
	/>
	<input
		type="password"
		id="password"
		name="password"
		class="text-input"
		placeholder="Password"
		bind:value={password}
		required
	/>
	<button type="submit" class="btn">Submit</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		color: var(--clr-white);
		background-color: var(--clr-blue-1);
		padding: 2rem;
		border-radius: 0.5rem;
	}
</style>
