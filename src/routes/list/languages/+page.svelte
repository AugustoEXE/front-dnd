<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import { browser } from '$app/environment';
	import axios from 'axios';
	import Input from '../../../components/form/input.svelte';
	import { auth } from '../../../scripts/auth';
	import { onMount } from 'svelte';
	import Navbar from '../../../components/Navbar.svelte';
	import Loading from '../../../components/Loading.svelte';
	let languages: Array<any> = [],
		loading = true;
	onMount(() => {
		getData();
	});
	auth();

	//states para form
	let name: string;

	function getData() {
		if (browser) {
			const axi = axios.create({
				baseURL: 'http://localhost:8000',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
			});
			axi.get('/languages').then((res) => {
				languages = res.data;
				loading = false;
			});
		}
	}
	function deleteItem(id: number) {
		if (browser) {
			loading = true;
			const axi = axios.create({
				baseURL: 'http://localhost:8000',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
			});
			axi.delete(`/languages/${id}`).then(() => {
				languages = languages.filter((item) => item.id !== id);
				loading = false;
			});
		}
	}

	function handleSubmmit() {
		if (browser) {
			loading = true
			const formData = {
				name
				// creator_id: JSON.parse(localStorage.getItem('user')??'').id
			};
			console.table(formData);
			axios
				.post('http://localhost:8000/languages', formData, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('jwt')}`
					}
				})
				.then(() => getData());
		}
	}
</script>

<Navbar />

<div class="m-auto w-5/6 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5 font-ancient">Listagem de Línguas</h1>
	{#if loading}
		<Loading/>
	{:else}
		<!-- else content here -->
		<div class="flex items-center">
			<button class="btn bg-red-500 mr-4 w-32" onclick="my_modal_4.showModal()"><Plus /></button>
			<dialog id="my_modal_4" class="modal bg-transparent backdrop-blur transition duration-150">
				<div class="modal-box w-11/12 max-w-5xl bg-zinc-900 rounded-xl">
					<h3 class="font-bold text-lg">Cadastre uma Língua!</h3>

					<div class="">
						<form method="dialog" on:submit={handleSubmmit} class="grid grid-cols-4 gap-2 w-11/12">
							<div class="col-span-4 grid m-5 w-full">
								<Input name="name" bind:value={name} />
							</div>

							<div class="col-span-1 grid m-5 w-full">
								<button class="btn bg-red-500">Cancelar</button>
							</div>
							<div class="col-span-1 col-start-4 1 grid m-5 w-full">
								<input class="btn bg-blue-500" type="submit" value="Salvar" />
							</div>
						</form>
					</div>
				</div>
			</dialog>
			<p>Adicionar nova Língua</p>
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
						{#each languages as type}
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
