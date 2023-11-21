<script lang="ts">
	import '../../../app.css';
	import Input from '../../../components/form/input.svelte';
	import axios from 'axios';
	import { auth } from '../../../scripts/auth';
	import { browser } from '$app/environment';

	auth();

	let damage_type_ids: Array<any> = [];
	let magicSchools: Array<any> = [];
	let name: string,
		components: string,
		level: number,
		range: string,
		description: string,
		casting_time: string,
		damage_type_id: number,
		damage: string,
		cantrip: number,
		schools: number,
		duration: string;

	if (browser) {
		const axi = axios.create({
			baseURL: 'http://localhost:8000',
			headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
		});

		axi.get('/damage-types').then((res) => (damage_type_ids = res.data));
		axi.get('/magic-schools').then((res) => (magicSchools = res.data));
	}
	function handleSubmmit() {
		if (browser) {
		const formData = {
			name,
			components,
			level,
			range,
			description,
			casting_time,
			damage_type_id,
			damage,
			cantrip: cantrip == 1 ? true : false,
			schools,
			duration
			// creator_id: JSON.parse(localStorage.getItem('user')??'').id
		};

			axios.post('http://localhost:8000/spells',formData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('jwt')}`
				}
			}).then(() =>{
				window.location.replace('/list/spells')
			})
		}
	}
</script>

<div class="m-auto w-3/4 text-center h-screen overflow-hidden">
	<h1 class="text-5xl font-ancient mb-10 mt-5">Cadastro de Feitiços, magias e truques</h1>

	<form on:submit|preventDefault={handleSubmmit}>
		<fieldset class="border border-solid border-red-500 p-3 rounded-lg grid grid-cols-4 gap-2">
			<legend class="mx-3 px-2">Dados Basicos</legend>

			<div class="col-span-2 grid">
				<Input name="Nome" bind:value={name} />
			</div>

			<div class="col-span-2 grid">
				<Input
					name="Componentes"
					placeholder="Ex.: Verbal, Somático, Galho de arvore "
					bind:value={components}
				/>
			</div>

			<div class="col-span-1 grid">
				<Input name="Nível" type="number" bind:value={level} />
			</div>

			<div class="col-span-3 grid">
				<Input name="Descrição" bind:value={description} />
			</div>

			<div class="col-span-2 grid">
				<Input name="Alcance" bind:value={range} />
			</div>

			<div class="col-span-2 grid">
				<Input name="Tempo de conjuração" bind:value={casting_time} />
			</div>

			<div class="col-span-2 grid">
				<label for="" class=" text-left">Tipo de dano </label>
				<select
					class="h-10 bg-neutral-700 rounded p-2 border-2 border-zinc-900 text-stone-200"
					name="tipo"
					id=""
					bind:value={damage_type_id}
				>
					<select />
					<option value="-1">Selecione...</option>
					{#each damage_type_ids as type}
						<option value={type.id}>{type.name}</option>
					{/each}
				</select>
			</div>

			<div class="col-span-2 grid">
				<Input name="Dano" placeholder="Ex.: 1D6, 2D8" bind:value={damage} />
			</div>

			<div class=" grid">
				<label for="" class=" text-left">Truque: </label>
				<select
					class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
					name="tipo"
					id=""
					bind:value={cantrip}
				>
					<select />
					<option value="-1">Selecione...</option>
					<option value="1">Sim</option>
					<option value="2">Não</option>
				</select>
			</div>

			<div class="col-span-2 grid">
				<label for="" class=" text-left">Escola De Magia: </label>
				<select
					class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
					name="tipo"
					id=""
					bind:value={schools}
				>
					<select />
					<option value="-1">Selecione...</option>
					{#each magicSchools as school}
						<option value={school.id}>{school.name}</option>
					{/each}
				</select>
			</div>

			<div class=" grid">
				<Input name="Duração" bind:value={duration} />
			</div>

			<button class="col-start-2 col-end-4 text-center bg-red-500 p-2 rounded mt-1">Enviar</button>
		</fieldset>
	</form>
</div>
