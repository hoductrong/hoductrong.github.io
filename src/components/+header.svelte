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
	let headerContainerWidth: number = 0;
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
		isActive = !isActive;
	};

	onMount(() => {
		activeTabIdx = configs.findIndex((config) => config.href === $page.url.pathname);
	});
</script>

<div
	bind:clientWidth={headerContainerWidth}
	class="text-[#607B96] flex py-4 lg:py-0 justify-between flex-row items-center border-solid border-b border-[#1E2D3D]"
>
	<span class="author-name w-80 pl-4">trong-ho</span>
	<div class="menu-mobile lg:hidden relative pr-4">
		<div on:click={onOpenMenuClick} class="{isActive ? 'open' : ''} cursor-pointer" id="nav-icon3">
			<span />
			<span />
			<span />
			<span />
		</div>

		<div
			style="width: {headerContainerWidth}px;"
			class="sub-menu {isActive
				? 'max-h-[500px] opacity-100'
				: 'max-h-0 opacity-0 -z-10'} transition-[max-height opacity] duration-300 shadow shadow-[rgba(100, 100, 111, 0.2) 0px 7px 29px 0px] border-[#1E2D3D] absolute bg-[#011627] top-10 right-[-16px] flex flex-col"
		>
			{#each configs as config, i (i)}
				<a
					bind:this={refs[i]}
					on:click={() => onClick(i)}
					class="{activeTabIdx === i
						? 'text-white'
						: ''} py-4 px-8 border-b border-l transition-all hover:text-white border-[#1E2D3D]"
					href={config.href}>{config.name}</a
				>
			{/each}
		</div>
	</div>
	<div class="hidden lg:flex flex-row justify-between flex-1 items-center">
		<div class="flex relative">
			{#each configs as config, i (i)}
				<a
					bind:this={refs[i]}
					on:click={() => onClick(i)}
					class="{activeTabIdx === i
						? 'text-white'
						: ''} py-4 whitespace-nowrap px-8 border-solid transition-all hover:text-white border-l border-[#1E2D3D]"
					href={config.href}>{config.name}</a
				>
			{/each}
			<div
				style="width: {x}px; transform: translateX({totalWidth}px);"
				class="line-bar absolute bottom-0 left-0 right-0 h-[3px] bg-[#FEA55F]"
			/>
		</div>
		<a
			class="py-4 px-4 whitespace-nowrap border-solid border-l border-[#1E2D3D]"
			href="mailto:trong.hoduc@gmail.com">_contact-me</a
		>
	</div>
</div>

<style>
	#nav-icon3 {
		width: 20px;
		height: 20px;
		position: relative;
		margin: auto;
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
		top: 8px;
	}

	#nav-icon3 span:nth-child(4) {
		top: 16px;
	}

	#nav-icon3.open span:nth-child(1) {
		top: 8px;
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
		top: 8px;
		width: 0%;
		left: 50%;
	}

	#nav-icon3 span {
		display: block;
		position: absolute;
		height: 2px;
		width: 100%;
		background: #607b96;
		border-radius: 4px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}
</style>
