<script lang="ts">
	import { onMount } from "svelte";
  import gsap from 'gsap'

  const configs: HeaderConfig[] = [{
    name: '_hello',
    href: '/',
  }, {
    name: '_about-me',
    href: '/about',
  }, {
    name: '_projects',
    // href: '/projects',
    href: '#'
  }];

  type HeaderConfig = {
    name: string,
    href: string
  };

  const refs: HTMLAnchorElement[] = [];
  let activeTabIdx: number = 0;
  let lastActiveTabIdx: number = 0;
  let x:number = 0;
  let refLineBar: HTMLDivElement;
  let isAnimating: boolean = false;

  $: refs;
  $: x;

  const onClick = (index: number) => {
    lastActiveTabIdx = activeTabIdx;
    activeTabIdx = index;

    if (refs[activeTabIdx]) {
      x = refs[activeTabIdx].offsetWidth;
    }

    if (refLineBar) {
      const tl = gsap.timeline();
      const lastLineBarWidth = refs[lastActiveTabIdx].offsetWidth;
      const refLineBarWidth = refs[activeTabIdx].offsetWidth;
 
      gsap.set(refLineBar, {
        transformOrigin: lastActiveTabIdx > activeTabIdx ? 'right' : 'left',
      })
      tl.to(refLineBar, {
        scaleX: calculateWidth(activeTabIdx) / lastLineBarWidth,
        duration: 0.3,
        cssFloat: lastActiveTabIdx > activeTabIdx ? 'right' : 'left',
      })
      .to(refLineBar, {
        scaleX: refLineBarWidth/lastLineBarWidth,
        translateX: calculateMovePosition(activeTabIdx) - (Math.max(refs[lastActiveTabIdx].offsetWidth - refs[activeTabIdx].offsetWidth, 0)),
        duration: 0.3,
        transformOrigin: lastActiveTabIdx > activeTabIdx ? 'right' : 'left',
      })
      .to(refLineBar, {
        duration: 0.3,
        width: refLineBarWidth,
        translateX: calculateMovePosition(activeTabIdx),
        scaleX: 1
      })
    }
  }

  const calculateMovePosition = (currentIdx: number) => {
    let totalWidth = 0
    for (let index = 0; index < currentIdx; index++) {
      const element = refs[index];
      totalWidth += element.offsetWidth;
    }

    return totalWidth;
  }

  const calculateWidth = (currentIdx: number) => {
    let totalWidth = 0;
    const beginIdx = currentIdx > lastActiveTabIdx ? lastActiveTabIdx : currentIdx;
    const endIdx = currentIdx > lastActiveTabIdx ? currentIdx : lastActiveTabIdx;
    for (let index = beginIdx; index <= endIdx; index++) {
      const element = refs[index];
      totalWidth += element.offsetWidth;
    }

    return totalWidth;
  }

  onMount(() => {
    x = refs[activeTabIdx].offsetWidth;
    gsap.set(refLineBar, {
      width: x,
    })
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
      <div bind:this={refLineBar} class='line-bar absolute bottom-0 left-0 right-0 h-[3px] bg-[#FEA55F]'></div>
    </div>
    <a class="py-4 px-4 border-solid border-l border-[#1E2D3D]" href="#">_contact-me</a>
  </div>
</div>