<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const configs: HeaderConfig[] = [
		{
			name: '_hello',
			href: '/'
		},
		{
			name: '_about-me',
			href: '/about'
		},
		{
			name: '_projects',
			href: '/projects'
		}
	];

	type HeaderConfig = {
		name: string;
		href: string;
	};

	const refs: HTMLAnchorElement[] = [];
	let activeTabIdx: number;
	let x: number;
	let totalWidth: number;

	$: refs;
	$: x = refs[activeTabIdx]?.offsetWidth ?? 0;
	$: {
		totalWidth = 0;
		for (let index = 0; index < activeTabIdx; index++) {
			const element = refs[index];
			totalWidth += element.offsetWidth;
		}
	}

	const onClick = (index: number) => {
		activeTabIdx = index;
	};

	onMount(() => {
		activeTabIdx = configs.findIndex((config) => config.href === $page.url.pathname);
	});
</script>

<div class="text-[#607B96] flex flex-row items-center border-solid border-b border-[#1E2D3D]">
	<span class="author-name w-80 pl-4">trong-ho</span>
	<div class="flex flex-row justify-between flex-1 items-center">
		<div class="flex relative">
			{#each configs as config, i (i)}
				<a
					bind:this={refs[i]}
					on:click={() => onClick(i)}
					class="{activeTabIdx === i
						? 'text-white'
						: ''} py-4 px-8 border-solid border-l border-[#1E2D3D]"
					href={config.href}>{config.name}</a
				>
			{/each}
			<div
				style="width: {x}px; transform: translateX({totalWidth}px);"
				class="line-bar absolute bottom-0 left-0 right-0 h-[3px] bg-[#FEA55F]"
			/>
		</div>
		<a class="py-4 px-4 border-solid border-l border-[#1E2D3D]" href="mailto:trong.hoduc@gmail.com"
			>_contact-me</a
		>
	</div>
</div>
