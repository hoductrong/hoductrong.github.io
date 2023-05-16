<script lang="ts">
	import {
		ArrowDropDownFillSYSTEM,
		ArrowDropRightFillSYSTEM,
		ArrowRightSLineSYSTEM,
		ArrowDownSLineSYSTEM,
		MarkdownFillDOCUMENT,
		Folder3FillDOCUMENT
	} from 'svelte-remix';

	import type { SideBarItem } from '../types';

	let activeStatusList: boolean[] = [];
	let childActiveIdx: number = 0;
	const onClickDropdown = (idx: number) => {
		activeStatusList[idx] = !activeStatusList[idx];
	};

	export let items: SideBarItem[];
	// export let onClickDropdown: svelte.JSX.MouseEventHandler<HTMLDivElement>;
</script>

<div class="explorer-tree flex flex-1 flex-col">
	{#each items as item, idx}
		<div class="tree-item">
			<div
				on:click={() => {
					item.onItemClick(item);
					onClickDropdown(idx);
				}}
				class="parent-item p-2 flex flex-row text-white border border-solid border-[#1E2D3D]"
			>
				<ArrowDropRightFillSYSTEM
					class="transition-transform duration-300 {activeStatusList[idx] ? 'rotate-90' : ''}"
				/>
				<span class="ml-2 cursor-pointer">{item.name}</span>
			</div>
			{#if item.childs !== undefined}
				<div
					class="list-child flex py-2 flex-col transition-[max-height opacity] duration-300 {activeStatusList[
						idx
					]
						? 'max-h-[500px] opacity-100'
						: 'max-h-0 opacity-0'}"
				>
					{#each item.childs as itemsLevel2}
						<div class="item folder-tree flex flex-col">
							<div class="item-detail pt-2 px-2 flex flex-row gap-2">
								{#if itemsLevel2.childs !== undefined}
									<ArrowDownSLineSYSTEM />
								{:else}
									<ArrowRightSLineSYSTEM />
								{/if}
								<svelte:component this={itemsLevel2.icon} />
								<span class="">{itemsLevel2.name}</span>
							</div>
							{#if itemsLevel2.childs !== undefined}
								<div class="list-child-level-2 pb-2 flex flex-col">
									{#each itemsLevel2.childs as itemsLevel3}
										<div class="item pt-2 px-2 flex flex-row gap-2">
											{#if itemsLevel3.childs !== undefined}
												<ArrowRightSLineSYSTEM />
											{:else}
												<div class="w-6" />
											{/if}
											<MarkdownFillDOCUMENT />
											<span class="">{itemsLevel3.name}</span>
										</div>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
