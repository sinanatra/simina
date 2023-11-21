<script>
    import Gravity from "@components/Gravity.svelte";
    import Detail from "@components/Detail.svelte";
</script>

<article>
    <Gravity />
    <Detail />
</article>

<style>
    article {
        background: linear-gradient(180deg, #efff82 0%, #efff82 55%, #cfcfcf 85%, #cfcfcf 100%);
        display: flex;
        align-items: flex-end;
    }
</style>
