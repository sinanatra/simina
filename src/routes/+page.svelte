<script>
    import Gravity from "@components/Gravity.svelte";
    import Detail from "@components/Detail.svelte";
    export let data;

    let projects = data.posts.filter((d) => d?.meta?.title);
    let info = data.posts.find((d) => d?.path == "/texts/about");
</script>

<article class="container">
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
</style>
