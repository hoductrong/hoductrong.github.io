<script lang="ts">
  import Layout from '../__layout.svelte';
  import {TerminalBoxFillDEVELOPMENT, User4FillUSER, GamepadFillDEVICE} from 'svelte-remix'
</script>
<style >
</style>

<Layout>
  <div class="">
    <div class="left-sidebar flex flex-row text-[#607B96]">
      <div class="tabs-list flex flex-col pl-6 pr-5 border border-solid border-[#1E2D3D]">
        <div class="py-4">
          <TerminalBoxFillDEVELOPMENT size='24px'/>
        </div>
        <div class="py-4">
          <User4FillUSER size='24px'/>
        </div>
        <div class="py-4">
          <GamepadFillDEVICE size='24px'/>
        </div>
      </div>

    </div>
  </div>
</Layout>5