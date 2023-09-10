<script lang="ts">
	import type { SideBarItem } from '../types';
	import SideBarTreeItem from './SideBarTreeItem.svelte';
	import { TerminalBoxFillDEVELOPMENT, User4FillUSER, GamepadFillDEVICE } from 'svelte-remix';

	export let items: SideBarItem[];
</script>

<div class="left-sidebar border-solid border-[#1E2D3D] w-full lg:w-80 flex flex-row text-[#607B96]">
	<div class="tabs-list hidden lg:flex flex-col pl-6 pr-5 border-r border-solid border-[#1E2D3D]">
		<a href="/" title="Play game" class="py-4 transition-all hover:text-white">
			<TerminalBoxFillDEVELOPMENT size="24px" />
		</a>
		<a href="/about" title="About me" class="py-4 transition-all hover:text-white">
			<User4FillUSER size="24px" />
		</a>
		<a href="/projects" title="My projects" class="py-4 transition-all hover:text-white">
			<GamepadFillDEVICE size="24px" />
		</a>
	</div>
	<SideBarTreeItem {items} />
</div>
