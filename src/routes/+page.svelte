<script lang="ts">
	import SnakeGame from '../components/SnakeGameplay.svelte';
	import Layout from './__layout.svelte';
</script>

<Layout>
	<div
		class="main-container mb-20 xl:mt-44 flex flex-col xl:flex-row justify-center gap:8 lg:gap-32"
	>
		<div
			class="left-container mt-20 flex flex-col p-4 lg:flex-col md:flex md:flex-col md:justify-center md:items-center"
		>
			<div class="developer-info mb-72 md:mb-20">
				<p class="text-white font-[450] leading-6">Hi all. I am</p>
				<p class="text-white font-normal text-6xl leading-[5rem]">Trong Ho</p>
				<p class="text-[#4D5BCE] text-xl font-[450] lg:text-3xl leading-10">
					&gt; Front-end developer
				</p>
			</div>
			<div class="awesome-link">
				<p class="text-[#607B96] hidden sm:block">// try to play the game</p>
				<p class="text-[#607B96] sm:hidden">// find my profile on Github:</p>
				<p>
					<span class="text-[#4D5BCE]">const</span> <span class="text-[#43D9AD]">githubLink</span>
					<span class="text-white">=</span>
					<a href="https://github.com/hoductrong" class="text-[#E99287]"
						>“https://github.com/hoductrong”</a
					>
				</p>
			</div>
		</div>
		<div class="right-container relative">
			<p class="text-[#607B96] mt-4 pl-4 mb-8 block sm:hidden">// try to play the game</p>
			<svelte:component this={SnakeGame} />
		</div>
	</div>
</Layout>

<style>
</style>
