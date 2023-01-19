<script lang="ts">
    import {getContext} from "svelte";
    import type {Data} from "./context";
    import {key} from "./context";

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