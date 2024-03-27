import { watchedFilms } from '$lib/server/get_films';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		film_list: watchedFilms
	};
}) satisfies PageServerLoad;
