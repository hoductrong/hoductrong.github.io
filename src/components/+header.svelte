<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { MenuLineSYSTEM, CloseLineSYSTEM } from 'svelte-remix';

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
	let isActive: boolean = false;

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

	const onOpenMenuClick = () => {
		console.log('click');
		isActive = !isActive;
	};

	onMount(() => {
		activeTabIdx = configs.findIndex((config) => config.href === $page.url.pathname);
	});
</script>

<div class="text-[#607B96] flex p-4 flex-row items-center border-solid border-b border-[#1E2D3D]">
	<span class="author-name w-80">trong-ho</span>
	<div class="menu-mobile relative">
		<div on:click={onOpenMenuClick} class="{isActive ? 'open' : ''} cursor-pointer" id="nav-icon3">
			<span />
			<span />
			<span />
			<span />
		</div>

		<div
			class="sub-menu {isActive
				? 'block'
				: 'hidden'} border-t shadow shadow-[rgba(100, 100, 111, 0.2) 0px 7px 29px 0px] border-[#1E2D3D] absolute w-[330px] bg-[#011627] top-10 right-[-16px] flex flex-col"
		>
			{#each configs as config, i (i)}
				<a
					bind:this={refs[i]}
					on:click={() => onClick(i)}
					class="{activeTabIdx === i
						? 'text-white'
						: ''} py-4 px-8 border-b border-l border-[#1E2D3D]"
					href={config.href}>{config.name}</a
				>
			{/each}
		</div>
	</div>
	<div class="flex hidden lg:block flex-row justify-between flex-1 items-center">
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

<style>
	#nav-icon3 {
		width: 60px;
		height: 45px;
		position: relative;
		margin: 50px auto;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s ease-in-out;
		-moz-transition: 0.5s ease-in-out;
		-o-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;
		cursor: pointer;
	}
	#nav-icon3 span:nth-child(1) {
		top: 0px;
	}

	#nav-icon3 span:nth-child(2),
	#nav-icon3 span:nth-child(3) {
		top: 18px;
	}

	#nav-icon3 span:nth-child(4) {
		top: 36px;
	}

	#nav-icon3.open span:nth-child(1) {
		top: 18px;
		width: 0%;
		left: 50%;
	}

	#nav-icon3.open span:nth-child(2) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	#nav-icon3.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}

	#nav-icon3.open span:nth-child(4) {
		top: 18px;
		width: 0%;
		left: 50%;
	}
</style>
