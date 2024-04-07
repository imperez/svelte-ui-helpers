<script lang="ts">
    export let list: Array<Message> = [];
</script>

{#if list.length}
    <ul>
        {#each list as message (message.description)}
            <li class={message.type}>{message.description}</li>
        {/each}
    </ul>
{/if}

<style>
    ul {
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
        padding: var(--size-2);
    }
    li {
        font-size: var(--size-3);
        font-weight: bold;
        padding: var(--size-2);
        width: 100%;
    }
    li.error {
        background-color: var(--color-red);
        color: var(--color-white);
    }
    li.info {
        background-color: var(--color-blue);
        color: var(--color-white);
    }
    li.warning {
        background-color: var(--color-yellow);
        color: var(--color-white);
    }
</style>
