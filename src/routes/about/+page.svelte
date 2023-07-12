<script lang="ts">
  import Layout from '../__layout.svelte';
	import SideBar from '../../components/SideBar.svelte';
  import {Folder3FillDOCUMENT, MarkdownFillDOCUMENT} from 'svelte-remix'
  import EditorWindow from '../../components/EditorWindow.svelte';
	import type { SideBarItem, SideBarItemClickProps } from '../../types';
	import type { ComponentType } from 'svelte';
	import { bioInfo, interestsInfo, noop } from './configs';

  let component: ComponentType | null = null;
  let props: Record<string, any> = {};

	const onItemClick = (item: SideBarItemClickProps) => {
		console.log(item);
	};
  const onClose = () => {
    component = null;
  };
  
  const items: SideBarItem[] = [
		{
			name: 'personal-info',
			onItemClick: noop,
			type: 'folder',
			childs: [
				{
					name: 'bio',
					icon: Folder3FillDOCUMENT,
					onItemClick: () => {
            props = {
              value: bioInfo,
              title: 'bio',
              onClose
            }
            component = EditorWindow;
          },
					type: 'file'
				},
				{
					name: 'interests',
					icon: Folder3FillDOCUMENT,
					onItemClick: () => {
            props = {
              value: interestsInfo,
              title: 'interests',
              onClose
            }
            component = EditorWindow;
          },
					type: 'file'
				},
				{
					name: 'education',
					icon: Folder3FillDOCUMENT,
					onItemClick: noop,
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
			onItemClick: noop,
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
  $: renderedComponent = component;
	
  export const prerender = true;
</script>

<Layout>
  <div class="flex flex-row">
    <div class="left-sidebar flex flex-row text-[#607B96]">
      <SideBar items={items} />
    </div>
    <div class="window-side w-full min-h-[750px] text-[#607B96]">
      <svelte:component this={renderedComponent} {...props} />
    </div>
  </div>
</Layout>
