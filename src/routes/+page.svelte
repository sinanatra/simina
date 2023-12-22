<script>
    import Gravity from "@components/Gravity.svelte";
    import Detail from "@components/Detail.svelte";
    export let data;
</script>

<article>
    <Gravity data={data.posts} />
    <Detail />
</article>

<style>
    article {
        background: linear-gradient(
            180deg,
            #efff82 0%,
            #efff82 55%,
            #cfcfcf 85%,
            #cfcfcf 100%
        );
        display: flex;
        align-items: flex-end;
    }

    :global(body) {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    :global(h1, h2, h3, h4) {
        margin: 0;
        padding: 0;
    }
</style>
