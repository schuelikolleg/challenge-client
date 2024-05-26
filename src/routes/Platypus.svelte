<script lang="ts">
import {pop} from "svelte-spa-router";
</script>

<main>
    <section>
        <img src="/platypus.jpg" />
    </section>
    <button on:click={() => pop()}>Zurück</button>

</main>

<style>


</style>
