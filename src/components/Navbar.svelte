<script lang="ts">
	import { browser } from '$app/environment';
import exit from '$lib/assets/icons/exit.png'

function logOut():void
{
	if(browser){
		localStorage.removeItem('jwt');
		window.location.replace('/')
	}
}

</script>

<div class="navbar bg-zinc-900 py-2">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/master">Mestre</a>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost" on:click={logOut}>
			<img src={exit} class="invert scale-75" alt="">
		</button>
	</div>
</div>
