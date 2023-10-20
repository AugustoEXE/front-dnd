<script lang="ts">
	import '../../app.css';
	import Account from 'svelte-material-icons/Account.svelte';
	import Lock from 'svelte-material-icons/Lock.svelte';
	import Login from 'svelte-material-icons/Login.svelte';
	import ErrorToast from '../../components/toasts/ErrorToast.svelte';
	import axios from 'axios';
	let login: string, password: string, accept: boolean, error: string, visible: boolean;

	async function handleSubmmit(): Promise<void> {
		if (accept) {
			const loginData = {
				email: login,
				password
			};

			try {
				const userData = await axios.post('http://localhost:8000/login', loginData);
				axios.defaults.headers.common['Authorization'] = `Bearer ${userData.data.authorization.token}`
				window.location.replace('/home');
			} catch (e) {
				error = 'erro no login';
				visible = true;
			}
		} else {
			error = 'É necessario aceitar os termos de serviço e privacidade';
			visible = true;
		}
	}
</script>

<div class="grid grid-cols-2">
	<div class="min-h-screen max-h-max">
		<h1 class="text-center font-extrabold text-5xl mt-12">Login</h1>
		<div class="">
			<ErrorToast message={error} {visible} />

			<form
				on:submit={handleSubmmit}
				class="grid place-items-center grid-cols-1 gap-1 mt-16 w-full"
			>
				<label for="" class="w-2/3 text-left m-0"
					><Account class="display: inline" size="30" />Username:</label
				>
				<input
					type="text"
					class="w-2/3 bg-stone-200 rounded p-2 border-2 border-zinc-900 text-zinc-950"
					bind:value={login}
				/>
				<label for="" class="w-2/3 mt-5 text-left m-0 text-"
					><Lock class="display: inline" size="30" />Password:</label
				>
				<input
					type="password"
					class="w-2/3 bg-stone-200 rounded p-2 border-2 border-zinc-900 text-zinc-950"
					bind:value={password}
				/>

				<div class="mt-5 w-2/3">
					<input type="checkbox" bind:checked={accept} /> Li e aceito os
					<a href="/termos" class="text-red-200 underline hover:text-red-300"
						>Termos de serviço e privacidade</a
					>
				</div>

				<button
					class="bg-red-900 transition duration-75 py-3 mt-5 w-2/3 shadow-2xl rounded hover:bg-red-950 hover:shadow-none"
					type="submit"><Login class="display: inline" size="30" /> Login</button
				>
			</form>
		</div>
		<div />
	</div>
	<div class="bg-gradient-to-l from-red-900 to-transparent min-h-screen max-h-max" />
	<iconify-icon icon="mdi:home" />
</div>
