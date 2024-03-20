<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	type watchedFilm = {
		film_name: string;
		film_length: string;
		imdb_rating: string;
		release_year: string;
		is_rewatchable: boolean;
		film_hero_img: string;
	};

	const watchedFilms: watchedFilm[] = [
		{
			film_name: 'Dune part one',
			film_length: '2h 35m',
			imdb_rating: '8.0/10',
			release_year: '2021',
			is_rewatchable: false,
			film_hero_img: 'dune_part_one_hero.jpg'
		},
		{
			film_name: 'Dune part two',
			film_length: '2h 46m',
			imdb_rating: '8.9/10',
			release_year: '2024',
			is_rewatchable: false,
			film_hero_img: 'dune_part_two_hero.jpg'
		},
		{
			film_name: 'The Last Samurai',
			film_length: '2h 34m',
			imdb_rating: '7.8/10',
			release_year: '2003',
			is_rewatchable: true,
			film_hero_img: 'the_last_samurai_hero.jpg'
		},
		{
			film_name: 'My Neighbor Totoro',
			film_length: '1h 26m',
			imdb_rating: '8.1/10',
			release_year: '1988',
			is_rewatchable: false,
			film_hero_img: 'my_neighbor_totoro_hero.jpg'
		},
		{
			film_name: 'The Last Samurai',
			film_length: '2h 34m',
			imdb_rating: '7.8/10',
			release_year: '2003',
			is_rewatchable: true,
			film_hero_img: 'the_last_samurai_hero.jpg'
		},
		{
			film_name: 'My Neighbor Totoro',
			film_length: '1h 26m',
			imdb_rating: '8.1/10',
			release_year: '1988',
			is_rewatchable: false,
			film_hero_img: 'my_neighbor_totoro_hero.jpg'
		},
		{
			film_name: 'Dune part one',
			film_length: '2h 35m',
			imdb_rating: '8.0/10',
			release_year: '2021',
			is_rewatchable: false,
			film_hero_img: 'dune_part_one_hero.jpg'
		},
		{
			film_name: 'Dune part two',
			film_length: '2h 46m',
			imdb_rating: '8.9/10',
			release_year: '2024',
			is_rewatchable: false,
			film_hero_img: 'dune_part_two_hero.jpg'
		},
		{
			film_name: 'The Last Samurai',
			film_length: '2h 34m',
			imdb_rating: '7.8/10',
			release_year: '2003',
			is_rewatchable: true,
			film_hero_img: 'the_last_samurai_hero.jpg'
		},
		{
			film_name: 'My Neighbor Totoro',
			film_length: '1h 26m',
			imdb_rating: '8.1/10',
			release_year: '1988',
			is_rewatchable: false,
			film_hero_img: 'my_neighbor_totoro_hero.jpg'
		},
		{
			film_name: 'The Last Samurai',
			film_length: '2h 34m',
			imdb_rating: '7.8/10',
			release_year: '2003',
			is_rewatchable: true,
			film_hero_img: 'the_last_samurai_hero.jpg'
		},
		{
			film_name: 'My Neighbor Totoro',
			film_length: '1h 26m',
			imdb_rating: '8.1/10',
			release_year: '1988',
			is_rewatchable: false,
			film_hero_img: 'my_neighbor_totoro_hero.jpg'
		}
	];
</script>

<div class="grid">
	<div class="grid">
		<Button class="grid justify-start w-fit bg-primary " variant="outline" href="/dashboard"
			>Dashboard</Button
		>
	</div>
	<div class="bg-primary grid">
		<h1 class="grid text-left py-4 text-2xl">Rewatch</h1>
		<Carousel.Root
			class="w-full max-w-[100rem] m-auto"
			opts={{
				align: 'start',
				axis: 'x'
			}}
		>
			<Carousel.Content class="grid grid-flow-col auto-cols-max ">
				{#each watchedFilms as film, i}
					{#if true}
						{#if i === 0}
							<Carousel.Item class="h-[25rem] w-[16rem] hover:scale-110">
								<div class="px-2 py-10 size-full">
									<Button class="size-full p-0" href="/">
										<img
											class="rounded-lg size-full"
											src="/images/film_hero/{film.film_hero_img}"
											alt="hero"
										/>
									</Button>
								</div>
							</Carousel.Item>
						{:else}
							<Carousel.Item class="h-[25rem] w-[16rem] hover:scale-110">
								<div class="px-2 py-10 size-full">
									<Button class="size-full p-0" href="/">
										<img
											class="rounded-lg size-full"
											src="/images/film_hero/{film.film_hero_img}"
											alt="hero"
										/>
									</Button>
								</div>
							</Carousel.Item>
						{/if}
					{/if}
				{/each}
			</Carousel.Content>
			<Carousel.Previous class="bg-primary" />
			<Carousel.Next class="bg-primary" />
		</Carousel.Root>
	</div>
</div>
