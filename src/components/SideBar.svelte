<script lang="ts">
	import type { SideBarItem, SideBarItemClickProps } from '../types';
	import SideBarTreeItem from './SideBarTreeItem.svelte';
	import {
		TerminalBoxFillDEVELOPMENT,
		User4FillUSER,
		GamepadFillDEVICE,
		Folder3FillDOCUMENT,
		MarkdownFillDOCUMENT
	} from 'svelte-remix';

	const onItemClick = (item: SideBarItemClickProps) => {
		console.log(item);
	};

	const items: SideBarItem[] = [
		{
			name: 'personal-info',
			onItemClick,
			type: 'folder',
			childs: [
				{
					name: 'bio',
					icon: Folder3FillDOCUMENT,
					onItemClick,
					type: 'file'
				},
				{
					name: 'interests',
					icon: Folder3FillDOCUMENT,
					onItemClick,
					type: 'file'
				},
				{
					name: 'education',
					icon: Folder3FillDOCUMENT,
					onItemClick,
					type: 'folder',
					childs: [
						{
							name: 'high-school',
							icon: MarkdownFillDOCUMENT,
							onItemClick,
							type: 'file'
						},
						{
							name: 'university',
							icon: MarkdownFillDOCUMENT,
							onItemClick,
							type: 'file'
						}
					]
				}
			]
		},
		{
			name: 'contacts',
			onItemClick,
			type: 'folder',
			childs: [
				{
					name: 'user@gmail.com',
					icon: MarkdownFillDOCUMENT,
					onItemClick,
					type: 'file'
				},
				{
					name: '+396790841',
					icon: MarkdownFillDOCUMENT,
					onItemClick,
					type: 'file'
				}
			]
		}
	];
</script>

<div class="left-sidebar border border-solid border-[#1E2D3D] w-80 flex flex-row text-[#607B96]">
	<div class="tabs-list flex flex-col pl-6 pr-5 border border-solid border-[#1E2D3D]">
		<div class="py-4">
			<TerminalBoxFillDEVELOPMENT size="24px" />
		</div>
		<div class="py-4">
			<User4FillUSER size="24px" />
		</div>
		<div class="py-4">
			<GamepadFillDEVICE size="24px" />
		</div>
	</div>
	<SideBarTreeItem {items} />
</div>
