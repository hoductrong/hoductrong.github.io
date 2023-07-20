<script lang="ts">
	import { FacebookBoxFillLOGOS, TelegramFillLOGOS, GithubFillLOGOS } from 'svelte-remix';
</script>

<div class="text-[#607B96] flex flex-row items-center border-solid border-t border-[#1E2D3D]">
	<div class=" w-80 flex flex-row justify-between flex-1 items-center">
		<div class="flex relative">
			<span class="py-4 px-5 border-solid border-[#1E2D3D]">Find me in: </span>
			<a
				class="p-4 border-solid border-l border-[#1E2D3D]"
				href="https://www.facebook.com/trong.hoduc96/"><FacebookBoxFillLOGOS /></a
			>
			<a class="p-4 border-solid border-l border-r border-[#1E2D3D]" href="https://t.me/trongho"
				><TelegramFillLOGOS /></a
			>
			<a class="p-4 lg:hidden border-solid border-[#1E2D3D]" href="https://t.me/trongho"
				><GithubFillLOGOS /></a
			>
		</div>
		<a
			class="lg:flex flex-row gap-1 py-4 px-6 hidden border-solid border-l border-[#1E2D3D]"
			href="https://github.com/hoductrong">@tronghoduc<GithubFillLOGOS /></a
		>
	</div>
</div>
