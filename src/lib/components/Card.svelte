<div class="card">
    <div class="body">
        <h2 class="title"><slot name="title" /></h2>
        <slot name="body" />
    </div>
    <div class="actions">
        <slot name="actions" />
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: var(--size-2);
    }
    :global(.card ul) {
        display: flex;
        gap: var(--size-2);
    }
    .title {
        color: var(--color-black);
        padding: var(--size-2) 0;
    }
    .body {
        background-color: var(--color-white);
        border-radius: var(--radius-sm);
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
        padding: var(--size-2);
    }
    .actions {
        display: flex;
        gap: var(--size-2);
    }
    :global(.actions .button) {
        flex-grow: 1;
    }
</style>
