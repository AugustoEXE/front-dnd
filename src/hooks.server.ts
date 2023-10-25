import { browser } from '$app/environment';
export const handle = async ({ event, resolve }) => {
	if (browser) {
		const reqPath = event.url.pathname;

		console.table({
			path: reqPath,
			jwt: localStorage.getItem('jwt')
		});

	}
    const response = await resolve(event);
    return response;
};
