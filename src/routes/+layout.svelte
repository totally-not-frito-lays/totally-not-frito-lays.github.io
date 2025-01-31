<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css" />
	<link rel="stylesheet" href="/node_modules/reveal.js/dist/theme/moon.css" />
</svelte:head>

{@render children()}

<Footer />