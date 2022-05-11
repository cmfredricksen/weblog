<script>
	import '../global.css';
	import Nav from '$lib/nav.svelte';
	import Footer from "$lib/footer.svelte";

</script>

<div class="wrapper">
	<Nav />
	<slot />
	<Footer />
</div>

<style>
	.wrapper {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
