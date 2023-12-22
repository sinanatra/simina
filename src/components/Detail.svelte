<script>
    import { selectedBall } from "@stores";
</script>

<article>
    <div>
        <h1>Simina German</h1>
        <div>contact</div>
    </div>
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
</article>

<style>
    article {
        border-left: 5px solid;
        width: 20vw;
        height: 100vh;
        overflow: scroll;
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }
    article > div {
        min-width: 100%;
        border-top: 5px solid;
        background: linear-gradient(
            180deg,
            #cfcfcf 0%,
            #cfcfcf 55%,
            #efff82 85%,
            #efff82 100%
        );
        background: #efff82;
    }

    article div > div,
    article div > h1 {
        padding: 10px;
    }

    img {
        width: 100%;
    }
</style>
