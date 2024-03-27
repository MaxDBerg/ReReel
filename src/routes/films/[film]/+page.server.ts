import { watchedFilms } from '$lib/server/get_films';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		film_list: watchedFilms,
		which_film: params.film.toString()
	};
}) satisfies PageServerLoad;
