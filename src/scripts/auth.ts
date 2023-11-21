import { browser } from '$app/environment';
import axios from 'axios';

export function auth() {
	if (browser) {
		const teste = localStorage.getItem('jwt');
		if (teste == null) {
			window.location.replace('/login');
			return;
		}

		axios
			.post(
				'http://localhost:8000/ping',
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('jwt')}`
					}
				}
			)
			.then()
			.catch(() => {
				window.location.replace('/login')
			});
	}
}
