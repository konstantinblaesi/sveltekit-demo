<script lang="ts">
    import {setContext} from "svelte";
    import {key} from "./context";
    import type {Data} from "./context"

    setContext<Data>(key, {city: "Amsterdam"})
</script>

<div>
    <p>Application Parent</p>
    <slot />
</div>


<style>
    div {
        background: cadetblue;
        padding: 6rem;
    }
</style>