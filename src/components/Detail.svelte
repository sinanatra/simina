<script>
    import { selectedBall } from "@stores";
</script>

<article>
    <h1>
        {$selectedBall?.title}
    </h1>

    <div>
        {#if $selectedBall?.media}
            <img src={$selectedBall?.media} alt=" {$selectedBall?.title}" />
        {/if}
    </div>
    <div>{$selectedBall?.descr}</div>
</article>

<style>
    article {
        background: white;
        width: 330px;
        height: calc(100vh - 100px);
        /* position: absolute;
        right: 30px;
        top: 100px; */
        padding: 10px;
        overflow: scroll;
    }

    img {
        width: 100%;
    }
</style>
