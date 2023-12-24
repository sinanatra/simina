<script>
    export const prerender = true;
    export const ssr = true;
</script>

<slot />

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    :global(h1, h2, h3, h4, p) {
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
</style>
