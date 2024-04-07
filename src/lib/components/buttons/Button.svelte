<script lang="ts">
    import ButtonDisplay from "$lib/enums/ButtonDisplay";
    import LoadingState from "$lib/enums/LoadingState";
    import Loader from "../loaders/Loader.svelte";

    export let isActive = false;
    export let label: string;
    export let name: string | null = null;
    export let value: string | null = null;
    export let href: string | null = null;
    export let loadingState: LoadingState = LoadingState.None;
    export let display: ButtonDisplay = ButtonDisplay.Button;
</script>

{#if href}
    <a class="button {isActive ? 'active' : ''} {display.is(ButtonDisplay.Ghost) ? 'ghost' : ''}" {href} on:click>
        {label}
    </a>
{:else if loadingState.is(LoadingState.Loading)}
    <button class="button" disabled>
        <Loader />
    </button>
{:else}
    <button {name} {value} class="button {isActive ? 'active' : ''} {display.is(ButtonDisplay.Ghost) ? 'ghost' : ''}" on:click>
        {label}
    </button>
{/if}

<style>
    .button {
        background-color: var(--brand-secondary);
        border: 1px solid color-mix(in srgb, var(--color-black) 10%, white);
        color: var(--color-black);
        font-weight: var(--weight-bold);
        padding: var(--size-2) var(--size-4);
        position: relative;
        text-align: center;
        transition: all 0.4s ease-out;
    }

    .ghost {
        background-color: transparent;
        border: 1px solid transparent;
        color: var(--color-white);
        padding: var(--size-2);
        width: auto;
    }
    .button.ghost:hover {
        color: var(--brand-quaternary);
    }

    .button:hover,
    .active {
        background-color: var(--brand-highlight);
        border: 1px solid var(--brand-highlight);
    }
</style>
