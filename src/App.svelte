<script lang="ts">
    import Router, {pop, push} from 'svelte-spa-router'
    import routes from './routes'
</script>

<main>
    <div class="main">
        <section>
                <button class="noborder" on:click={() => push("#/")}><h1>Schülerkolleg CTF</h1></button>
       </section>

        <Router {routes}/>

    </div>
</main>

<style>
    .noborder {
        border: none;
    }
</style>
