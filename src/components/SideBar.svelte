<script lang="ts">
	import type { SideBarItem } from '../types';
	import SideBarTreeItem from './SideBarTreeItem.svelte';
	import {
		TerminalBoxFillDEVELOPMENT,
		User4FillUSER,
		GamepadFillDEVICE,
	} from 'svelte-remix';

	export let items: SideBarItem[];
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
