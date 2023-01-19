<script lang="ts">
    import {setContext} from "svelte";
    import {key} from "$lib/context/context";
    import type {Data} from "$lib/context/context"

    setContext<Data>(key, {city: "Paris"})
</script>

<p>Application Parent</p>

<slot />