<script lang="ts">
  import "../app.css";
  import Header from "../components/+header.svelte";
  import Footer from "../components/+footer.svelte";

  export const prerender = true;
</script>
<style >
</style>

<div class="shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] bg-[#011627] m-20 rounded-lg border border-solid border-[#1E2D3D]">
  <Header />
  <slot></slot>
  <Footer />
</div>