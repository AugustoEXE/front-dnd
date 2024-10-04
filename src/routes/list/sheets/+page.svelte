<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import { browser } from '$app/environment';
	import axios from 'axios';
	import Input from '../../../components/form/input.svelte';
	import { auth } from '../../../scripts/auth';
	import { onMount } from 'svelte';
	import Navbar from '../../../components/Navbar.svelte'
	import Loading from '../../../components/Loading.svelte';

    let rarities: Array<any> = [], loading=true;
    onMount(()=>{
        getData()
    })
    auth()
    

	//states para form
	let name: string

	function getData() {
		if (browser) {
			const axi = axios.create({
				baseURL: 'http://localhost:8000',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
			});
			axi.get('/rarities').then((res) => {rarities = res.data; loading=false});
            
		}
	}
	function deleteItem(id: number) {
		if (browser) {
			loading=true
			const axi = axios.create({
				baseURL: 'http://localhost:8000',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
			});
			axi
				.delete(`/rarities/${id}`)
				.then(() => {rarities = rarities.filter((item) => item.id !== id); loading=false});
		}
	}

	function handleSubmmit() {
		if (browser) {
			loading=true
			const formData = {
				name,
				// creator_id: JSON.parse(localStorage.getItem('user')??'').id
			};
            console.table(formData)
			axios
				.post('http://localhost:8000/rarities', formData, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('jwt')}`
					}
				})
				.then(() => getData());
		}
	}
</script>
<Navbar/>
<div class="m-auto w-5/6 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5 font-ancient">Listagem de Raridades</h1>
{#if loading}
	<Loading/>
{:else}
	<div class="flex items-center">
		
		<a href="/forms/sheet"><button class="btn bg-red-500 mr-4 w-32" onclick="my_modal_4.showModal()"><Plus /></button></a>
		<p>Adicionar nova Raridade</p>
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
						<th>Açoes</th>
					</tr>
				</thead>
				<tbody>
					{#each rarities as type}
						<tr class="border-b border-zinc-500 even:bg-zinc-900">
							<th>{type.id}</th>
							<td>{type.name}</td>
							<td>
								<button class="btn bg-red-500 my-2" on:click={deleteItem(type.id)}
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
