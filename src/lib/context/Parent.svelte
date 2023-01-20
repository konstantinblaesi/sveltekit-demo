<script lang="ts">
    import {setContext} from "svelte";
    
    import {key, type Data} from "$lib/context/context"

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