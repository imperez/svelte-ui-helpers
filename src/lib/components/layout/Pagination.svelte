<script lang="ts">
    import Button from "$lib/components/buttons/Button.svelte";
    import {createEventDispatcher} from "svelte";

    export let page: number = 1;
    export let totalPages: number = 1;

    const dispatch = createEventDispatcher();
    const nextHandler = () => {
        dispatch('nextPage');
    }
    const previousHandler = () => {
        dispatch('previousPage');
    }
</script>

<nav class="pagination">
    {#if page > 1}
        <Button label="Previous" on:click={previousHandler} />
    {:else}
        <div>&nbsp;</div>
    {/if}
    <span>Page {page}</span>
    {#if page < totalPages}
        <Button label="Next" on:click={nextHandler} />
    {:else}
        <div>&nbsp;</div>
    {/if}
</nav>

<style>
    .pagination {
        background: var(--color-white);
        border: 1px solid var(--color-gray);
        border-radius: var(--radius-sm);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--size-2);
    }
</style>