<script>
    import { selectedBall } from "@stores";
</script>

<article>
    {#if $selectedBall}
        <h1>
            {$selectedBall?.meta?.title}
        </h1>

        <div>
            {#if $selectedBall?.meta?.media}
                <img
                    src={$selectedBall?.meta?.media}
                    alt=" {$selectedBall?.meta?.title}"
                />
            {/if}
        </div>
        <div>{@html $selectedBall?.text}</div>
    {:else}
        <h1>Simina German</h1>
        <div>contact</div>
    {/if}
</article>

<style>
    article {
        background: linear-gradient(
            180deg,
            #cfcfcf 0%,
            #cfcfcf 55%,
            #efff82 85%,
            #efff82 100%
        );
        border-left: 5px solid;
        width: 20vw;
        height: calc(100vh);
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
