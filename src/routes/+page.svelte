<script>
    import Gravity from "@components/Gravity.svelte";
    import Detail from "@components/Detail.svelte";
    export let data;

    let projects = data.posts.filter((d) => d?.meta?.title);
    let info = data.posts.find((d) => d?.path == "/texts/about");
</script>

<article>
    <Gravity data={projects} />
    <Detail {info} />
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

    :global(h1, h2, h3, h4, p) {
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
</style>
