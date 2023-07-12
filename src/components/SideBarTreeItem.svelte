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
	const onClickDropdown = (idx: number) => {
		activeStatusList[idx] = !activeStatusList[idx];
	};

	export let items: SideBarItem[];
</script>

<div class="explorer-tree flex flex-1 flex-col">
	{#each items as item, idx}
		{@const currentIdx = idx + 1}
		<div class="tree-item">
			<div
				on:click={() => {
					item.onItemClick(item);
					onClickDropdown(currentIdx);
				}}
				class="parent-item p-2 flex flex-row text-white border border-solid border-[#1E2D3D]"
			>
				<ArrowDropRightFillSYSTEM
					class="transition-transform duration-300 {activeStatusList[currentIdx] ? 'rotate-90' : ''}"
				/>
				<span class="ml-2 cursor-pointer">{item.name}</span>
			</div>
			{#if item.childs !== undefined}
				<div
					class="list-child flex flex-col transition-[max-height opacity] duration-300 {activeStatusList[
						currentIdx
					]
						? 'max-h-[500px] opacity-100 py-2'
						: 'max-h-0 opacity-0 py-0 -z-10 relative'}"
				>
					{#each item.childs as itemsLevel2, idxl2}
						<div  class="item folder-tree flex flex-col">
							<div class="item-detail pt-2 px-2 flex flex-row gap-2 cursor-pointer hover:text-white">
								{#if itemsLevel2.type === 'folder'}
									<ArrowRightSLineSYSTEM class="transition-transform duration-300 {activeStatusList[currentIdx * 10 + idxl2] ? 'rotate-90' : ''}"/>
								{:else}
									<div class="p-2 w-6 h-6" />
								{/if}
								<svelte:component this={itemsLevel2.icon} />
								<span on:click={() => {
									itemsLevel2.onItemClick(itemsLevel2);
									onClickDropdown(currentIdx * 10 + idxl2);
								}} class="{itemsLevel2.type === 'folder' ? 'cursor-pointer' : ''} hover:text-white">{itemsLevel2.name}</span>
							</div>
							{#if itemsLevel2.childs !== undefined}
								<div  class="list-child-level-2 pb-2 flex transition-[max-height opacity] duration-300 flex-col {activeStatusList[currentIdx * 10 + idxl2]
								? 'max-h-[500px] opacity-100'
								: 'max-h-0 opacity-0 py-0 -z-10 relative'}">
									{#each itemsLevel2.childs as itemsLevel3}
										<div class="item  ml-2 pt-2 px-2 flex flex-row gap-2">
											{#if itemsLevel3.childs !== undefined}
												<ArrowRightSLineSYSTEM />
											{:else}
												<div class="w-6" />
											{/if}
											<MarkdownFillDOCUMENT />
											<span on:click={() => {
												itemsLevel3.onItemClick(itemsLevel3);
											}} class="cursor-pointer hover:text-white">{itemsLevel3.name}</span>
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
