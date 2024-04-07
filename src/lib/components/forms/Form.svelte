<script lang="ts">
    import LoadingState from "$lib/enums/LoadingState";
    import Button from "../buttons/Button.svelte";

    export let label: string | null = null;
    export let submitHandler: ((formData: FormData) => void) | null = null;

    let loadingState: LoadingState = LoadingState.None;

    const submit = (event: EventTarget & HTMLFormElement) => {
        loadingState = LoadingState.Loading;

        if (submitHandler) {
            const form = event.currentTarget;
            const formData = new FormData(form);
            const submitButton: HTMLButtonElement = event.submitter;

            if (submitButton) {
                formData.append("submit_action", submitButton.value);
            }

            submitHandler.call(form, formData);
        }

        loadingState = LoadingState.Complete;
    };
</script>

<form class="form" on:submit|preventDefault={submit}>
    <slot />
    {#if label}
        <Button {label} {loadingState} />
    {/if}
</form>

<style>
    .form {
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
    }
    :global(.form label) {
        color: var(--brand-secondary);
    }
    :global(.form .button) {
        padding-block: var(--size-4) !important;
    }
    :global(.form input) {
        border: 1px solid color-mix(in srgb, var(--color-black) 10%, white);
        color: var(--color-black);
        font-size: 18px;
        line-height: 22px;
        padding: var(--size-4);
    }
    :global(.form input::placeholder) {
        color: var(--color-gray);
    }
</style>
