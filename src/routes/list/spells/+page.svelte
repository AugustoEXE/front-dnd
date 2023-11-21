<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import { browser } from '$app/environment';
	import axios from 'axios';
	import Navbar from '../../../components/Navbar.svelte';
	import Loading from '../../../components/Loading.svelte';

	let spells: Array<any> = [],
		loading = true;

	if (browser) {
		const axi = axios.create({
			baseURL: 'http://localhost:8000',
			headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
		});
		axi.get('/spells').then((res) => {
			spells = res.data;
			loading = false;
		});
	}

	function deleteItem(id: number) {
		if (browser) {
			loading = true;
			const axi = axios.create({
				baseURL: 'http://localhost:8000',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
			});
			axi.delete(`/spells/${id}`).then(() => {
				spells = spells.filter((item) => item.id !== id);
				loading = false;
			});
		}
	}
</script>

<Navbar />
<div class="m-auto w-5/6 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5 font-ancient">Listagem de Feitiços</h1>

	{#if loading}
		<Loading />
	{:else}
		<div class="flex items-center">
			<a href="/forms/spells"><button class="btn bg-red-500 mr-4 w-32"><Plus /></button></a>

			<p>Adicionar novo Feitiço</p>
		</div>

		<div class="overflow-x-auto">
			<fieldset class="border border-solid border-red-500 p-3 mb-10 rounded-lg">
				<legend class="mx-3 px-2">Listagem</legend>

				<table class="table table-zebra rounded-lg text-neutral-300">
					<!-- head -->
					<thead class="bg-zinc-900 py-3 font-extrabold">
						<tr>
							<th>ID</th>
							<th>nome</th>
							<th>Nível</th>
							<th>Dano</th>
							<th>descrição</th>
							<th>alcançe</th>
							<th>tempo de conjuração</th>
							<th>Componentes</th>
							<th>duração</th>
							<th>Tipo de dano</th>
							<th>truque</th>
							<th>Açoes</th>
						</tr>
					</thead>
					<tbody>
						{#each spells as spell}
							<tr class="border-b border-zinc-500 even:bg-zinc-900">
								<th>{spell.id}</th>
								<td>{spell.name}</td>
								<td>{spell.level}</td>
								<td>{spell.damage}</td>
								<td>{spell.description}</td>
								<td>{spell.casting_time}</td>
								<td>{spell.components}</td>
								<td>{spell.duration}</td>
								<td>{spell.damage_type_id}</td>
								<td>{spell.cantrip}</td>
								<td>{spell.range}</td>
								<td>
									<button class="btn bg-red-500 my-2" on:click={deleteItem(spell.id)}
										><TrashCan /></button
									>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</fieldset>
		</div>
	{/if}
</div>
