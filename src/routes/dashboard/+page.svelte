<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';

    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="grid">
	<div class="grid grid-cols-2 mb-8">
		<div class="grid justify-start">
			<Button class="w-fit bg-primary " variant="outline" href="/">Home</Button>
		</div>
		<div class="grid justify-end">
			<Button
				class="w-fit bg-primary border-emerald-500 hover:bg-primary hover:text-emerald-500 hover:scale-110"
				variant="outline">+ Add Film</Button
			>
		</div>
	</div>
	<div class="grid grid-cols-3 gap-12 place-content-center m-auto">
		<div class="bg-primary">
			<h1 class="grid justify-center mb-4">Watched</h1>
			<div class=" max-h-[70vh] overflow-y-scroll overflow-x-hidden">
				<Table.Root>
					<Table.Caption>A list of your watched films.</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head class="w-[100px]">Film name</Table.Head>
							<Table.Head>Length</Table.Head>
							<Table.Head>IMDb rating</Table.Head>
							<Table.Head>Release year</Table.Head>
							<Table.Head class="text-right">Delete</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each data.film_list as film}
							<Table.Row>
								<Table.Cell class="font-medium">{film.film_name}</Table.Cell>
								<Table.Cell>{film.film_length}</Table.Cell>
								<Table.Cell>{film.imdb_rating}</Table.Cell>
								<Table.Cell>{film.release_year}</Table.Cell>
								<Table.Cell class="text-right">
									<Button
										class="border-red-600 bg-primary hover:bg-red-700 hover:text-white hover:scale-110"
										variant="outline">Delete Film</Button
									>
								</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		</div>
		<div class="bg-primary">
			<h1 class="grid justify-center mb-4">Can Rewatch</h1>

			<div class="max-h-[70vh] overflow-y-scroll overflow-x-hidden">
				<Table.Root>
					<Table.Caption>A list of your rewatchable films.</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head class="w-[100px]">Film name</Table.Head>
							<Table.Head>Length</Table.Head>
							<Table.Head>IMDb rating</Table.Head>
							<Table.Head class="text-right">Release year</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each data.film_list as film}
							{#if film.is_rewatchable}
								<Table.Row>
									<Table.Cell class="font-medium">{film.film_name}</Table.Cell>
									<Table.Cell>{film.film_length}</Table.Cell>
									<Table.Cell>{film.imdb_rating}</Table.Cell>
									<Table.Cell class="text-right">{film.release_year}</Table.Cell>
								</Table.Row>
							{/if}
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		</div>
		<div class="bg-primary">
			<h1 class="grid justify-center mb-4">Cannot Rewatch</h1>

			<div class="max-h-[70vh] overflow-y-scroll overflow-x-hidden">
				<Table.Root>
					<Table.Caption>A list of films you watched recently.</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head class="w-[100px]">Film name</Table.Head>
							<Table.Head>Length</Table.Head>
							<Table.Head>IMDb rating</Table.Head>
							<Table.Head class="text-right">Release year</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each data.film_list as film}
							{#if !film.is_rewatchable}
								<Table.Row>
									<Table.Cell class="font-medium">{film.film_name}</Table.Cell>
									<Table.Cell>{film.film_length}</Table.Cell>
									<Table.Cell>{film.imdb_rating}</Table.Cell>
									<Table.Cell class="text-right">{film.release_year}</Table.Cell>
								</Table.Row>
							{/if}
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		</div>
	</div>
</div>
