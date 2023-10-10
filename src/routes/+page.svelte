<script lang="ts">
	import '../app.css';
	import d20 from '$lib/assets/d20.png'
</script>

<div class="grid grid-cols-2">
	<div class="bg-gradient-to-r from-red-900 to-transparent min-h-screen max-h-max">
		<div>
			<h1 class="text-center text-5xl my-auto font-extrabold pt-56">LOREM IPSUM</h1>
			<p class="text-center text-2xl mt-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptatem esse animi et
			</p>

			<p class="text-center text-4xl mt-6">Clique no Dado para começar</p>
		</div>
	</div>

	<div class="grid place-items-center">
		<div
			class="transition bg-red-900 to-transparent grid place-content-center rounded-full h-96 w-96 mb-20 hover:scale-105"
		>
			<a href="/login" class="grid place-items-center">
				<img src={d20} alt="" class="scale-100 hover:invert transition p-" />
			</a>
		</div>
	</div>
</div>
