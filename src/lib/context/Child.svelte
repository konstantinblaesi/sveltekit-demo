<script lang="ts">
    import {getContext} from "svelte";
    import type {Data} from "$lib/context/context";
    import {key} from "$lib/context/context";

    const data = getContext<Data>(key)
</script>

<div>
    Application child

    <h2>Welcome to {data.city}</h2>
</div>

<style>
    div {
        background: dimgrey;
        padding: 2rem;
    }
</style>