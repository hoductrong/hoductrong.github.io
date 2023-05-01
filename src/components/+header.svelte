<script lang="ts">
	import { onMount } from "svelte";

  const configs: HeaderConfig[] = [{
    name: '_hello',
    href: '/'
  }, {
    name: '_about-me',
    href: '/about'
  }, {
    name: '_projects',
    href: '/projects'
  }];

  type HeaderConfig = {
    name: string,
    href: string
  };

  const refs: HTMLAnchorElement[] = [];
  let activeTabIdx: number = 0;
  let x:number = 0;
  let preX: number = 0;

  $: refs;
  $: x;
  $: preX;

  const onClick = (index: number) => {
    activeTabIdx = index;

    if (refs[activeTabIdx]) {
      x = refs[activeTabIdx].offsetWidth;
      preX = refs[activeTabIdx > 0 ? activeTabIdx - 1 : activeTabIdx].offsetWidth;
    }
  }
onMount(() => {
  x = refs[activeTabIdx].offsetWidth;
})

</script>

<style>
</style>

<div class="text-[#607B96] flex flex-row items-center border-solid border-b border-[#1E2D3D]">
  <span class="author-name w-80 pl-4">trong-ho</span>
  <div class="flex flex-row justify-between flex-1 items-center">
    <div class="flex relative">
      {#each configs as config, i (i)}
      <a bind:this={refs[i]} on:click={() => onClick(i)} class="{activeTabIdx === i ? "text-white" : ""} py-4 px-8 border-solid border-l border-r border-[#1E2D3D]" href="{config.href}">{config.name}</a>
      {/each}
      <div style={`width:${x}px`} class={`transition-all translate-x-[${activeTabIdx * 100}%] absolute bottom-0 left-0 h-[3px] bg-[#FEA55F]`}></div>
    </div>
    <a class="py-4 px-4 border-solid border-l border-[#1E2D3D]" href="#">_contact-me</a>
  </div>
</div>