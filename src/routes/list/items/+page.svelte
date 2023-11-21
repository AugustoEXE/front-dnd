<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import { browser } from '$app/environment';
	import axios from 'axios';
	import Navbar from '../../../components/Navbar.svelte';
	import Loading from '../../../components/Loading.svelte';
	let loading: boolean = true
	let items: Array<any> = [];
	let rarities: Array<any> = [];

	if (browser) {
		const axi = axios.create({
			baseURL: 'http://localhost:8000',
			headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
		});
		axi.get('/items').then((res) => (items = res.data));
		axi.get('/rarities').then((res) => {rarities = res.data; loading = false});
	}

	function deleteItem(id: number) {
		if (browser) {
			loading = true;
			const axi = axios.create({
				baseURL: 'http://localhost:8000',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
			});
			axi.delete(`/items/${id}`).then(() => {items = items.filter((item) => item.id !== id);loading = false})
		}
	}
</script>

<Navbar />
<div class="m-auto w-5/6 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5 font-ancient">Listagem de Itens</h1>

	{#if loading}
	<Loading/>
	{:else}
	<div class="flex items-center">
		<a href="/forms/items"><button class="btn bg-red-500 mr-4 w-32"><Plus /></button></a>
		
		<p>Adicionar novo Item</p>
	</div>
	
	<div class="overflow-x-auto">
		
			<fieldset class="border border-solid border-red-500 p-3 mb-10 rounded-lg">
				<legend class="mx-3 px-2">Listagem</legend>

				<table class="table table-zebra rounded-lg text-neutral-300">
					<thead class="bg-zinc-900 py-3 font-extrabold">
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Descrição</th>
							<th>Preço</th>
							<th>Peso</th>
							<th>Tipo</th>
							<th>Propriedades</th>
							<th>Raridade</th>
							<th>Açoes</th>
						</tr>
					</thead>
					<tbody>
						{#each items as item}
							<tr class="border-b border-zinc-500 even:bg-zinc-900">
								<th>{item.id}</th>
								<td>{item.name}</td>
								<td>{item.description}</td>
								<td>{item.price}</td>
								<td>{item.weight}Kg</td>
								<td>{item.type == 'item' ? 'Item' : 'Item mágico'}</td>
								<td>{item.property}</td>
								<td>{rarities.filter((element) => element.id === item.rarity_id)[0].name}</td>
								<td>
									<button class="btn bg-red-500 my-2" on:click={deleteItem(item.id)}
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
