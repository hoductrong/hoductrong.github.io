<script lang="ts">
	import { FacebookBoxFillLOGOS, TwitterFillLOGOS, GithubFillLOGOS } from "svelte-remix";
</script>

<style>
</style>

<div class="text-[#607B96] flex flex-row items-center border-solid border-t border-[#1E2D3D]">
  <div class=" w-80 flex flex-row justify-between flex-1 items-center">
    <div class="flex relative">
      <span class="py-4 px-5 border-solid border-l border-r border-[#1E2D3D]">Find me in: </span>
      <a class="p-4 border-solid border-l border-r border-[#1E2D3D]" href="#"><FacebookBoxFillLOGOS /></a>
      <a class="p-4 border-solid border-l border-r border-[#1E2D3D]" href="#"><TwitterFillLOGOS /></a>
    </div>
    <a class="flex flex-row gap-1 py-4 px-6 border-solid border-l border-[#1E2D3D]" href="#">@tronghoduc<GithubFillLOGOS/></a>
  </div>
</div>