<script lang="ts">
	import Layout from '../__layout.svelte';
	import SideBar from '../../components/SideBar.svelte';
	import { Folder3FillDOCUMENT, TelegramFillLOGOS, MailLineBUSINESS } from 'svelte-remix';
	import EditorWindow from '../../components/EditorWindow.svelte';
	import type { SideBarItem, SideBarItemClickProps } from '../../types';
	import type { ComponentType } from 'svelte';
	import { tbuInfo, noop } from './configs';

	const onClose = () => {
		component = null;
	};

	let component: ComponentType | null = EditorWindow;
	let props: Record<string, any> = {
		value: tbuInfo,
		title: 'tbu',
		onClose
	};

	const items: SideBarItem[] = [
		{
			name: 'projects',
			onItemClick: noop,
			type: 'folder',
			childs: [
				{
					name: 'tbu',
					icon: Folder3FillDOCUMENT,
					onItemClick: () => {
						props = {
							value: tbuInfo,
							title: 'tbu',
							onClose
						};
						component = EditorWindow;
					},
					type: 'file'
				}
			]
		}
	];
	$: renderedComponent = component;
</script>

<Layout>
	<div class="flex flex-row">
		<div class="left-sidebar flex flex-row text-[#607B96]">
			<SideBar {items} />
		</div>
		<div
			class="window-side border-l border-solid border-[#1E2D3D] w-full min-h-[750px] text-[#607B96]"
		>
			<svelte:component this={renderedComponent} {...props} />
		</div>
	</div>
</Layout>
