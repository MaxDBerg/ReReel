<script lang="ts">
	import { Button } from '$lib/components/ui/button';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>


<div class="w-full">
	<div class="grid">
		<Button class="grid justify-start w-fit bg-primary " variant="outline" href="/"
			>Home</Button
		>
	</div>
    <div class="">
        {#each data.film_list as film}
            {#if film.film_name.toLowerCase().replaceAll(" ", "_") === data.which_film}
                <h1>{film.film_name}</h1>
                <h2>{film.film_length}</h2>
            {/if}
        {/each}
    </div>
</div>