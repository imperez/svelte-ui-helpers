<script lang="ts">
    import Table from "$lib/components/tables/Table.svelte";
    import Pagination from "$lib/components/layout/Pagination.svelte";
    import { onMount } from "svelte";
    import LoadingState from "$lib/enums/LoadingState";
    import Loader from "$lib/components/loaders/Loader.svelte";

    export let columns: Array<Column> = [];
    export let loaderData: LoaderData;

    let page = 1;
    let totalPages = 1;
    let rowGroups: Array<Row> = [];
    let loadingState: LoadingState = LoadingState.None;

    const loadData = async () => {
        loadingState = LoadingState.Loading;
        const response = await fetch(`${loaderData.endpoint}?page=${page}`);
        const json = await response.json()

        // transform the data into rows
        rowGroups = json.data.map((item: Object) => {
            return loaderData.rowTransformer(item);
        });

        page = json.meta.current_page;
        totalPages = json.meta.last_page;

        loadingState = LoadingState.Complete;
    };
    onMount(() => {
        loadData();
    });

    const nextHandler = () => {
        page++;
        if (page > totalPages) {
            return;
        }

        loadData();
    }
    const previousHandler = () => {
        page--;
        if (page < 0) {
            return;
        }
        loadData();
    }
</script>

<div class="table-shell">
    <Table {columns} {rowGroups} />
    <Pagination {page} {totalPages} on:nextPage={nextHandler} on:previousPage={previousHandler} />
    {#if loadingState.is(LoadingState.Loading)}
        <div class="loader-shell">
            <Loader />
        </div>
    {/if}
</div>

<style>
    .table-shell {
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
        position: relative;
    }
    .loader-shell {
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;
        height: 100%;
        justify-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
    }
</style>
