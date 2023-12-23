<script>
    import { selectedBall } from "@stores";
</script>

<article>
    {#if $selectedBall}
        <div>
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
        </div>
    {/if}
    <div>
        <h1>Simina German</h1>
        <div>contact</div>
    </div>
</article>

<style>
    article {
        border-left: 5px solid;
        width: 30vw;
        min-width: 160px;
        height: 100vh;
        overflow: scroll;
        display: flex;
        flex-wrap: wrap;
        background: linear-gradient(
            180deg,
            #cfcfcf 0%,
            #cfcfcf 55%,
            #efff82 85%,
            #efff82 100%
        );
    }
    article > div {
        min-width: 100%;
        position: sticky;
        bottom: 0;
        background: linear-gradient(
            180deg,
            #cfcfcf 0%,
            #cfcfcf 55%,
            #efff82 85%,
            #efff82 100%
        );
    }

    article > div:not(:first-of-type) {
        border-top: 5px solid;
    }

    article div > div,
    article div > h1 {
        padding: 10px;
    }

    img {
        width: 100%;
    }
</style>
