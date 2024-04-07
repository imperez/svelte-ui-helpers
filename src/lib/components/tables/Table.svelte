<script lang="ts">
    export let width: number | string = '100%';
    export let columns: Array<Column> = [];
    export let rowGroups: Array<Row> = [];
</script>

<table class="table" width={width}>
    <thead>
        {#each columns as column}
            <th>{column.label}</th>
        {/each}
    </thead>
    <tbody>
        {#each rowGroups as row}
            <tr>
                {#each row as cell}
                    <td>{cell.label}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    .table {
        background: var(--brand-primary);
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-black);
        color: var(--color-white);
        text-align: left;
    }
    .table thead {
        background: var(--brand-primary-darker);
    }
    .table th {
        font-weight: bold;
        padding: var(--size-2);
    }
    .table td {
        font-weight: normal;
        padding: var(--size-2);
    }
    .table tr:nth-child(2n) {
        background: rgba(255, 255, 255, 0.1);
    }
    .table tr:hover {
        background: var(--brand-highlight);
        color: var(--color-black);
    }
</style>
