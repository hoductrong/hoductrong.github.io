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
	class="shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] m-4 lg:rounded-lg lg:m-20 bg-[#011627] rounded border border-solid border-[#1E2D3D]"
>
	<Header />
	<slot />
	<Footer />
</div>
