<script lang="ts">
	import { onMount } from 'svelte';
	import '../../../app.css';
	import Input from '../../../components/form/input.svelte';
	import axios from 'axios';

	
	const damageTypes = axios.get('http://localhost:8000/damage-types');
	
	console.info("ta aqui");
	console.log(damageTypes);


</script>

<div class="m-auto w-3/4 text-center h-screen overflow-hidden">
	<h1 class="text-5xl font-ancient mb-10 mt-5">Cadastro de Feitiços, magias e truques</h1>

	<form action="">
		<fieldset class="border border-solid border-red-500 p-3 rounded-lg grid grid-cols-4 gap-2">
			<legend class="mx-3 px-2">Dados Basicos</legend>

			<div class="col-span-2 grid">
				<Input name="Nome" />
			</div>

			<div class="col-span-2 grid">
				<Input name="Componentes" placeholder="Ex.: Verbal, Somático, Galho de arvore " />
			</div>

			<div class="col-span-1 grid">
				<Input name="Nível" type="number" />
			</div>

			<div class="col-span-3 grid">
				<Input name="Descrição" />
			</div>

			<div class="col-span-2 grid">
				<Input name="Alcance" />
			</div>

			<div class="col-span-2 grid">
				<Input name="Tempo de conjuração" />
			</div>

			<div class="col-span-2 grid">
				<label for="" class=" text-left">Tipo de dano </label>
				<select
					class="h-10 bg-neutral-700 rounded p-2 border-2 border-zinc-900 text-stone-200"
					name="tipo"
					id=""
				>
					<select />
					<option value="-1">Selecione...</option>
				</select>
			</div>

			<div class="col-span-2 grid">
				<Input name="Dano" placeholder="Ex.: 1D6, 2D8" />
			</div>

			<div class=" grid">
				<label for="" class=" text-left">Truque: </label>
				<select
					class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900 "
					name="tipo"
					id=""
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
					class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900 "
					name="tipo"
					id=""
				>
					<select />
					<option value="-1">Selecione...</option>
					<option value="1">Sim</option>
					<option value="2">Não</option>
				</select>
			</div>

			<div class=" grid">
				<Input name="Duração" />
			</div>

			<button class="col-start-2 col-end-4 text-center bg-red-500 p-2 rounded mt-1">Enviar</button>
		</fieldset>
	</form>
</div>
