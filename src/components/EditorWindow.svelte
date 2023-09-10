<script lang="ts">
	import { CloseLineSYSTEM } from 'svelte-remix';

	export let value: string;
	export let title: string;
	export let onClose: () => void;
	$: lines = value.split(/\r\n|\r|\n/).length;
	$: rows = Array(lines)
		.fill(0)
		.map((_, index) => index + 1);
</script>

<div class="window-tab-bar">
	<div class="window-tab-container border-b border-solid border-[#1E2D3D]">
		<div
			class="window-tab flex flex-row p-2 border-r border-solid border-[#1E2D3D] whitespace-nowrap w-fit mr-12"
		>
			<span>{title}</span>
			<div on:click={onClose}><CloseLineSYSTEM class="cursor-pointer ml-4 hover:text-white" /></div>
		</div>
	</div>

	<div class="window-container flex flex-row">
		<div class="line-counter flex flex-col p-2 pr-10">
			{#each rows as row}
				<span>{row}</span>
			{/each}
		</div>
		<pre
			id="editor"
			class="editor w-full p-2 bg-transparent border-none overflow-scroll outline-none shadow-none resize-none">{value}
	</pre>
	</div>
</div>

<style>
	.line-counter {
		direction: rtl;
	}

	*::-webkit-scrollbar-track,
	::-webkit-scrollbar-corner {
		/* -webkit-box-shadow: inset 0 0 6px red; */
		/* border-radius: 10px; */
		background-color: #011627;
	}

	*::-webkit-scrollbar {
		width: 12px;
		background-color: green;
	}

	*::-webkit-scrollbar-thumb {
		/* border-radius: 10px; */
		/* -webkit-box-shadow: inset 0 0 6px yellow; */
		background-color: #607b96;
	}
</style>
