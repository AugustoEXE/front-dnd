<script lang="ts">
	import '../../../app.css';
	import Input from '../../../components/form/input.svelte';
	import AttributesInput from '../../../components/form/AttributesInput.svelte';
	import SkillsListItem from '../../../components/form/SkillsListItem.svelte';
	import axios from 'axios';
	import { auth } from '../../../scripts/auth';
	import { browser } from '$app/environment';

	auth();

	if (browser) {
		const axi = axios.create({
			baseURL: 'http://localhost:8000',
			headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
		});
	}
	function handleSubmmit() {
		if (browser) {
			const formData = {
				// creator_id: JSON.parse(localStorage.getItem('user')??'').id
			};

			axios
				.post('http://localhost:8000/spells', formData, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('jwt')}`
					}
				})
				.then(() => {
					window.location.replace('/list/spells');
				});
		}
	}
</script>

<div class="m-auto w-5/6 text-center pb-20">
	<h1 class="text-5xl font-ancient mb-10 mt-5">Crie sua ficha</h1>
	<form on:submit|preventDefault={handleSubmmit}>
		<fieldset class="border border-solid border-red-500 p-3 rounded-lg">
			<legend class="mx-3 px-2">Atributos</legend>
			<div class="grid grid-cols-6">
				<AttributesInput name="Força" />
				<AttributesInput name="Destreza" />
				<AttributesInput name="Constituição" />
				<AttributesInput name="Inteligencia" />
				<AttributesInput name="Sabedoria" />
				<AttributesInput name="Carisma" />
			</div>
		</fieldset>
		<div class="grid grid-cols-3 gap-3">
			<fieldset class="border border-solid border-red-500 p-3 mt-4 rounded-lg">
				<legend class="mx-3 px-2">Perícias</legend>
				<ul class="">
					<SkillsListItem name="Acrobacia" />
					<SkillsListItem name="Arcanismo" />
					<SkillsListItem name="Atletismo" />
					<SkillsListItem name="Atuação" />
					<SkillsListItem name="Enganação" />
					<SkillsListItem name="Furtividade" />
					<SkillsListItem name="História" />
					<SkillsListItem name="Intimidação" />
					<SkillsListItem name="Intuição" />
					<SkillsListItem name="Investigação" />
					<SkillsListItem name="Lidar Com Animais" />
					<SkillsListItem name="Medicina" />
					<SkillsListItem name="Natureza" />
					<SkillsListItem name="Percepção" />
					<SkillsListItem name="Persuasão" />
					<SkillsListItem name="Presdigitação" />
					<SkillsListItem name="Religião" />
					<SkillsListItem name="Sobrevivencia" />
				</ul>
			</fieldset>
			<fieldset class="border border-solid border-red-500 grid grid-cols-3 p-3 mt-4 rounded-lg">
				<legend class="mx-3 px-2">Dados De jogo</legend>

				<div>
					<label for="" class="text-xl">CA:</label>
					<input
						class="  bg-neutral-700 text-center text-neutral-300 text-4xl rounded w-24 h-28 border-2 border-zinc-900"
					/>
				</div>
				<div>
					<label for="" class="text-xl">Iniciativa:</label>
					<input
						class="  bg-neutral-700 text-center text-neutral-300 text-4xl rounded w-24 h-28 border-2 border-zinc-900"
					/>
				</div>
				<div>
					<label for="" class="text-lg">Deslocamento:</label>
					<input
						class="  bg-neutral-700 text-center text-neutral-300 text-4xl rounded w-24 h-28 border-2 border-zinc-900"
					/>
				</div>

				<div class="col-span-3 grid grid-cols-3 gap-2 mb-5">
					<div class="text-[0.7rem] h-3 text-center">Pontos de vida Máximos</div>
					<input
						type="text"
						class="col-span-2 h-4 bg-zinc-800 border-b-red-600 border-b-2 text-center"
					/>
					<div class="text-lg h-3 text-center">Pontos de vida Atuais</div>
					<input
						type="text"
						class="col-span-2 rounded border-2 border-zinc-900 text-center text-4xl"
					/>
				</div>

				<div class="col-span-3 grid grid-cols-2 mt-5 gap-3">
					<div class=" grid grid-cols-3 gap-2">
						<div class="text-[0.7rem] h-3 text-center">Total</div>
						<input
							type="text"
							class="col-span-2 h-4 bg-zinc-800 border-b-red-600 border-b-2 text-center"
						/>
						<input
							type="text"
							class="col-span-3 rounded border-2 border-zinc-900 text-center text-4xl"
						/>
						<div class="text-lg h-3 text-center col-span-3">Dados de Vida</div>
					</div>
					<div class="grid grid-cols-1">
						<div class="grid grid-cols-4 gap-5">
                            <span class="mr-7">Sucessos</span>
                            <input type="checkbox" class="w-5">
                            <input type="checkbox" class="w-5">
                            <input type="checkbox" class="w-5">
                        </div>
						<div class="grid grid-cols-4 gap-5">
                            <span class="mr-7">falhas</span>
                            <input type="checkbox" class="w-5">
                            <input type="checkbox" class="w-5">
                            <input type="checkbox" class="w-5">
                        </div>
						<div>Salvaguardas contra morte</div>
					</div>
				</div>
			</fieldset>
		</div>
	</form>
</div>
