<script>
    import Card from "$lib/components/Card.svelte";
    import Button from "$lib/components/buttons/Button.svelte";
    import ButtonDisplay from "$lib/enums/ButtonDisplay.ts";
</script>

<Card>
    <svelte:fragment slot="title">Card Title</svelte:fragment>
    <svelte:fragment slot="body">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </svelte:fragment>
    <svelte:fragment slot="actions">
        <Button label="Cancel" display={ButtonDisplay.Ghost}></Button>
        <Button label="Save"></Button>
    </svelte:fragment>
</Card>