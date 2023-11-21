<script lang="ts">
	import '../../../app.css';
	import Input from '../../../components/form/input.svelte';
	import axios from 'axios';
	import { auth } from '../../../scripts/auth';
	import { browser } from '$app/environment';

	auth();

	let rarities: Array<any> = [],
		name: string,
		weight: number,
		price: number,
		description: string,
		type: string,
		rarity_id: number,
		property: string;

	if (browser) {
		const axi = axios.create({
			baseURL: 'http://localhost:8000',
			headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
		});

		axi.get('/rarities').then((res) => (rarities = res.data));
	}
	function handleSubmmit() {
		if (browser) {
			const formData = {
				name,
				weight,
				price,
				description,
				type,
				rarity_id,
				property

				// creator_id: JSON.parse(localStorage.getItem('user')??'').id
			};

			axios
				.post('http://localhost:8000/items', formData, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('jwt')}`
					}
				})
				.then(() => {
					window.location.replace('/list/items');
				});
		}
	}
</script>

<div class="m-auto w-3/4 text-center h-screen overflow-hidden">
	<h1 class="text-5xl font-ancient mb-10 mt-5">Cadastro de Ítens</h1>

	<form on:submit|preventDefault={handleSubmmit}>
		<fieldset class="border border-solid border-red-500 p-3 rounded-lg grid grid-cols-4 gap-2">
			<legend class="mx-3 px-2">Dados Basicos</legend>

			<div class="col-span-2 grid">
				<Input name="Nome" bind:value={name} />
			</div>

			<div class="col-span-2 grid">
				<Input name="Preço" placeholder="Ex.: 10PO, 3PP" bind:value={price} />
			</div>

			<div class="col-span-1 grid">
				<label for="" class=" text-left">Peso: </label>
				<input
				type="number"	
				class=" h-10 bg-neutral-700 text-neutral-300 rounded p-2 border-2 border-zinc-900 "
				step=".01"
					bind:value={weight}
					placeholder="Peso em Kg"
				
				/>			</div>

			<div class="col-span-3 grid">
				<Input name="Descrição" bind:value={description} />
			</div>

			<div class="col-span-2 grid">
				<label for="" class=" text-left">Tipo: </label>
				<select
					class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
					name="tipo"
					id=""
					bind:value={type}
				>
					<select />
					<option value="-1">Selecione...</option>
					<option value="item">Item</option>
					<option value="magic_item">Item mágico</option>
				</select>
			</div>

			<div class="col-span-2 grid">
				<label for="" class=" text-left">Raridade: </label>
				<select
					class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
					name="tipo"
					id=""
					bind:value={rarity_id}
				>
					<select />
					<option value="-1">Selecione...</option>
					{#each rarities as rarity}
						<option value={rarity.id}>{rarity.name}</option>
					{/each}
				</select>
			</div>

			<div class="col-span-4 grid">
				<Input name="Propriedades" bind:value={property} />
			</div>

			<button class="col-start-2 col-end-4 text-center bg-red-500 p-2 rounded mt-1">Enviar</button>
		</fieldset>
	</form>
</div>
