<script lang="ts">
	import '../../app.css';
	import sheet from '$lib/assets/icons/sheet.png';
	import player from '$lib/assets/player.svg';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { auth } from '../../scripts/auth';
	auth()
</script>

<div class="m-auto w-3/4 text-center h-screen overflow-hidden">
	<h1 class=" text-7xl font-ancient mb-10 mt-5">O que deseja fazer?</h1>

	<div class="w-full grid grid-cols-2 place-items-center">
		<div class="flex justify-evenly flex-row">
			<div class="inline hover:scale-105 hover:transition">
				<a href="/list/sheets" class="hover:scale-150 hover:transition inline">
					<div
						class="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-b from-neutral-900 via-neutral-800 to-blue-500 w-80 h-[28rem]"
					>
						<img class="w-full scale-75 invert" src={sheet} />
						<div class="px-6 py-4">
							<div class=" text-5xl mb-2 font-ancient">Ver suas fichas</div>
						</div>
					</div></a
				>
			</div>
		</div>
		<div class="flex justify-evenly flex-row">
			<div class="inline hover:scale-105 hover:transition">
				<a href="/" class="hover:scale-150 hover:transition inline">
					<div
						class="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-b from-neutral-900 via-neutral-800 to-red-500 w-80 h-[28rem]"
					>
						<img class="w-100 invert" src={player} />
						<div class="px-6 py-4">
							<div class=" text-5xl mb-2 font-ancient">WIP</div>
						</div>
					</div></a
				>
			</div>
		</div>
	</div>
</div>
