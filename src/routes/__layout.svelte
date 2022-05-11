<script>
	import '../global.css';
	import Nav from '$lib/nav.svelte';
</script>

<div class="wrapper">
	<Nav />
	<slot />
</div>

<style>
	.wrapper {
		max-width: 700px;
		margin: 0 auto;
	}
</style>
