<script lang="ts">
	import '../../app.css';

	export let name: string;
	export let placeholder: string = `${name}...`;
	export let type: string = 'text';
</script>

<label for="" class=" text-left">{name}: </label>
<input
	type="{type}"
	class=" h-10 bg-stone-200 rounded p-2 border-2 border-zinc-900 text-zinc-950"
	name={name.split(' ')[0].toLowerCase()}
	{placeholder}
/>
