<script lang="ts">
	import '../app.css';
	import Header from '../components/+header.svelte';
	import Footer from '../components/+footer.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<title>Ho Duc Trong - Portfolio</title>
	<meta name="description" content="Welcome to my portfolio website." />
</svelte:head>

<div
	class="shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] max-w-7xl my-4 mx-auto lg:rounded-lg lg:my-20 bg-[#011627] rounded border border-solid border-[#1E2D3D]"
>
	<Header />
	<slot />
	<Footer />
</div>
