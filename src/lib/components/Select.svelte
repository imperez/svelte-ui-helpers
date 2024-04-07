<script lang="ts">
    import Select from "svelte-select";

    export let name: string;
    export let value: string | number | null = null;
    export let type: string;
    export let group: string;

    const load = async (filterText: string) => {
    };
</script>

<Select
    {value}
    {name}
    --placeholder-color="black"
    --input-color="black"
    --item-color="black"
    --item-hover-color="black"
    loadOptions={load}
></Select>
