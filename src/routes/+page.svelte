<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="grid my-8">
	<div class="grid">
		<Button class="grid justify-start w-fit bg-primary " variant="outline" href="/dashboard"
			>Dashboard</Button
		>
	</div>
	<div class="bg-primary grid">
		<h1 class="grid text-left py-4 text-2xl">All Rewatchable Films</h1>
		<Carousel.Root
			class="w-full max-w-[100rem] m-auto"
			opts={{
				align: 'start',
				axis: 'x'
			}}
		>
			<Carousel.Content class="grid grid-flow-col auto-cols-max ">
				{#each data.film_list as film, i}
					{#if film.is_rewatchable}
						{#if i === 0}
							<Carousel.Item class="h-[25rem] w-[16rem] hover:scale-110">
								<div class="px-2 py-10 size-full">
									<Button class="size-full p-0" href="/films/{film.film_name.toLowerCase().replaceAll(" ", "_")}">
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
									<Button class="size-full p-0" href="/films/{film.film_name.toLowerCase().replaceAll(" ", "_")}">
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
	<div class="bg-primary grid">
		<h1 class="grid text-left py-4 text-2xl">Animated Films</h1>
		<Carousel.Root
			class="w-full max-w-[100rem] m-auto"
			opts={{
				align: 'start',
				axis: 'x'
			}}
		>
			<Carousel.Content class="grid grid-flow-col auto-cols-max ">
				{#each data.film_list as film, i}
					{#if film.is_rewatchable}
					{#if film.film_category.includes("Animation")}
					{#if i === 0}
						<Carousel.Item class="h-[25rem] w-[16rem] hover:scale-110">
							<div class="px-2 py-10 size-full">
								<Button class="size-full p-0" href="/films/{film.film_name.toLowerCase().replaceAll(" ", "_")}">
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
								<Button class="size-full p-0" href="/films/{film.film_name.toLowerCase().replaceAll(" ", "_")}">
									<img
										class="rounded-lg size-full"
										src="/images/film_hero/{film.film_hero_img}"
										alt="hero"
									/>
								</Button>
							</div>
						</Carousel.Item>
					{/if}
						 <!-- content here -->
					{/if}
					{/if}
				{/each}
			</Carousel.Content>
			<Carousel.Previous class="bg-primary" />
			<Carousel.Next class="bg-primary" />
		</Carousel.Root>
	</div>
	<div class="bg-primary grid">
		<h1 class="grid text-left py-4 text-2xl">Adventure Films</h1>
		<Carousel.Root
			class="w-full max-w-[100rem] m-auto"
			opts={{
				align: 'start',
				axis: 'x'
			}}
		>
			<Carousel.Content class="grid grid-flow-col auto-cols-max ">
				{#each data.film_list as film, i}
					{#if film.is_rewatchable}
					{#if film.film_category.includes("Adventure")}
					{#if i === 0}
						<Carousel.Item class="h-[25rem] w-[16rem] hover:scale-110">
							<div class="px-2 py-10 size-full">
								<Button class="size-full p-0" href="/films/{film.film_name.toLowerCase().replaceAll(" ", "_")}">
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
								<Button class="size-full p-0" href="/films/{film.film_name.toLowerCase().replaceAll(" ", "_")}">
									<img
										class="rounded-lg size-full"
										src="/images/film_hero/{film.film_hero_img}"
										alt="hero"
									/>
								</Button>
							</div>
						</Carousel.Item>
					{/if}
						 <!-- content here -->
					{/if}
					{/if}
				{/each}
			</Carousel.Content>
			<Carousel.Previous class="bg-primary" />
			<Carousel.Next class="bg-primary" />
		</Carousel.Root>
	</div>
</div>
