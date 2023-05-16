<script lang="ts">
  import Layout from '../__layout.svelte';
	import SideBar from '../../components/SideBar.svelte';
  import {CloseLineSYSTEM} from 'svelte-remix'

  let value: string = `/**
 * About me
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */`;
  $: lines = value.split(/\r\n|\r|\n/).length;
  $: rows = Array(lines).fill(0).map((_, index) => index + 1);
</script>
<style >
  .line-counter {
    direction: rtl;
  }
</style>

<Layout>
  <div class="flex flex-row">
    <div class="left-sidebar flex flex-row text-[#607B96]">
      <SideBar />
    </div>
    <div class="window-side w-full text-[#607B96]">
      <div class="window-tab-bar border border-solid border-[#1E2D3D]">
        <div class="window-tab-container border border-solid border-[#1E2D3D]">
          <div class="window-tab flex flex-row p-2 border border-solid border-[#1E2D3D] whitespace-nowrap w-fit mr-12"><span>personal-info</span><CloseLineSYSTEM /></div>
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
    </div>
  </div>
</Layout>
