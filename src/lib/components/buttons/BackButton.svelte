<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Button from "./Button.svelte";

    let showBackButton = false;

    onMount(() => {
        showBackButton = $page.url.pathname != "/";
    });
    onNavigate((navigation) => {
        showBackButton = navigation.to?.url.pathname != "/";
    });
    const handler = () => {
        window.history.back();
    };
</script>

{#if showBackButton}
    <Button label="Back" on:click={handler} />
{/if}
