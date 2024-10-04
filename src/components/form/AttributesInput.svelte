<script lang="ts">
	import '../../app.css';

	export let name: string = '';
	export let type: string = 'text';
	export let value: any = '';

	function typeAction(node: any) {
		node.type = type;
	}
</script>

<div class="flex flex-col justify-end items-center">
    <label for="" class="text-xl">{name}:</label>
	<input
		use:typeAction
		class="  bg-neutral-700 text-center text-neutral-300 text-5xl rounded w-28 h-32 border-2 border-zinc-900"
		name={name.split(' ')[0].toLowerCase()}
		bind:value
	/>
	<input
		type="text"
		class="absolute text-center z-10 font-extrabold text-zinc-800 bg-zinc-400 w-11 h-9 rounded-3xl border-2 border-zinc-700"
	/>
</div>
