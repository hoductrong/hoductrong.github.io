<script lang="ts">
  import SnakeGame from '../components/SnakeGame.svelte'
  import BackgroundBlur from "../components/BackgroundBlur.svelte";
  import Layout from './__layout.svelte'
</script>
<style >
</style>

<Layout>
  <div class="main-container mb-20 mt-44 flex flex-row justify-center">
    <div class="left-container mt-20 mr-32">
      <div class="developer-info mb-20">
        <p class="text-white font-[450] leading-6">Hi all. I am</p>
        <p class="text-white font-normal text-6xl leading-[5rem]">Trong Ho</p>
        <p class="text-[#4D5BCE] font-[450] text-3xl leading-10">&gt; Front-end developer</p>
      </div>
      <div class="awesome-link">
        <p class="text-[#607B96]">// complete the game to continue</p>
        <p class="text-[#607B96]">// you can also see it on my Github page</p>
        <p><span class="text-[#4D5BCE]">const</span> <span class="text-[#43D9AD]">githubLink</span> <span class="text-white">=</span> <span class="text-[#E99287]">“https://github.com/example/url”</span></p>
      </div>
    </div>
    <div class="right-container relative">
      <svelte:component this={SnakeGame} />
      <svelte:component classNames="absolute top-[-126px] left-[-50px]" this={BackgroundBlur} />
    </div>
  </div>
</Layout>
