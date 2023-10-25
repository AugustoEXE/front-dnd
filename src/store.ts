import { writable } from 'svelte/store';
import { browser } from '$app/environment';
export let jwt;

if (browser) {
	const storedJWT = localStorage.getItem('jwt');
	jwt = writable(storedJWT);
	jwt.subscribe((value) => {
		localStorage.setItem('jwt', value ?? '');
	});
}
