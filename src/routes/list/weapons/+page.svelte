<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import { browser } from '$app/environment';
	import axios from 'axios';
	import Navbar from '../../../components/Navbar.svelte';
	import Loading from '../../../components/Loading.svelte';
	let weapons: Array<any> = [],
		loading = true;

	if (browser) {
		const axi = axios.create({
			baseURL: 'http://localhost:8000',
			headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
		});
		axi.get('/weapons').then((res) => {weapons = res.data; loading=false});
	}

	function deleteItem(id: number) {
		if (browser) {
			loading = true;
			const axi = axios.create({
				baseURL: 'http://localhost:8000',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
			});
			axi.delete(`/weapons/${id}`).then(() => {
				weapons = weapons.filter((item) => item.id !== id);
				loading = false;
			});
		}
	}
</script>

<Navbar />
<div class="m-auto w-5/6 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5 font-ancient">Listagem de Armas</h1>
	{#if loading}
		<Loading/>
	{:else}
		<!-- else content here -->

		<div class="flex items-center">
			<a href="/forms/weapons"><button class="btn bg-red-500 mr-4 w-32"><Plus /></button></a>

			<p>Adicionar nova arma</p>
		</div>

		<div class="overflow-x-auto">
			<fieldset class="border border-solid border-red-500 p-3 mb-10 rounded-lg">
				<legend class="mx-3 px-2">Listagem</legend>

				<table class="table table-zebra rounded-lg text-neutral-300">
					<thead class="bg-zinc-900 py-3 font-extrabold">
						<tr>
							<th>ID</th>
							<th>nome</th>
							<th>Dado de dano</th>
							<th>tipo de dano</th>
							<th>descrição</th>
							<th>alcançe</th>
							<th>Custo</th>
							<th>Propriedades</th>
							<th>peso</th>
							<th>categoria</th>
							<th>Açoes</th>
						</tr>
					</thead>
					<tbody>
						{#each weapons as weapon}
							<tr class="border-b border-zinc-500 even:bg-zinc-900">
								<th>{weapon.id}</th>
								<td>{weapon.name}</td>
								<td>{weapon.level}</td>
								<td>{weapon.damage}</td>
								<td>{weapon.description}</td>
								<td>{weapon.casting_time}</td>
								<td>{weapon.components}</td>
								<td>{weapon.duration}</td>
								<td>{weapon.damage_type_id}</td>
								<td>{weapon.cantrip}</td>
								<td>{weapon.range}</td>
								<td>
									<button class="btn bg-red-500 my-2" on:click={deleteItem(weapon.id)}
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
