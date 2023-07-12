<script lang="ts">
  import { CloseLineSYSTEM } from 'svelte-remix'

  export let value: string;
  export let title: string;
  export let onClose: () => void;
  $: lines = value.split(/\r\n|\r|\n/).length;
  $: rows = Array(lines).fill(0).map((_, index) => index + 1);
</script>

<style >
  .line-counter {
    direction: rtl;
  }
</style>

<div class="window-tab-bar border border-solid border-[#1E2D3D]">
  <div class="window-tab-container border border-solid border-[#1E2D3D]">
    <div class="window-tab flex flex-row p-2 border border-solid border-[#1E2D3D] whitespace-nowrap w-fit mr-12"><span>{title}</span><div  on:click={onClose}><CloseLineSYSTEM class="cursor-pointer ml-4 hover:text-white" /></div></div>
  </div>

  <div class="window-container flex flex-row">
    <div class="line-counter flex flex-col p-2 pr-10">
      {#each rows as row}
        <span>{row}</span>
      {/each}
    </div>
    <textarea bind:value id="editor" rows="30" cols="50" class="editor p-2 bg-transparent border-none overflow-scroll outline-none shadow-none resize-none"></textarea>
  </div>
</div>