<script>
    import { base } from "$app/paths";
    import { selectedBall } from "@stores";
    export let info;
    let larger = false;
</script>

<article class:expand={larger}>
    <div class="larger" on:click={() => (larger = !larger)}>↔ Expand</div>
    {#if $selectedBall}
        <div>
            <h1>
                {$selectedBall?.meta?.title}
            </h1>
        </div>
        {#if $selectedBall?.meta?.video.length > 0}
            <div class="video">
                {#each $selectedBall?.meta?.video as video}
                    <iframe
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/{video}"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                {/each}
            </div>
        {/if}
        {#if $selectedBall?.meta?.media.length > 0}
            <div class="images">
                {#each $selectedBall?.meta?.media as media}
                    <img src={media} alt=" {$selectedBall?.meta?.title}" />
                {/each}
            </div>
        {/if}
        <div>{@html $selectedBall?.text}</div>
    {/if}
    <div>
        <a href="{base}/archive" target="_blank">Boring view?</a>
        <h1>Simina German</h1>
        <div>{@html info.text}</div>
    </div>
</article>

<style>
    .larger {
        cursor: pointer;
    }

    .expand {
        width: 80vw;
    }

    h1 {
        font-size: 36px;
        line-height: 32px;
    }

    article {
        border-left: 5px solid;
        width: 20vw;
        min-width: 240px;
        height: 100vh;
        overflow: scroll;
        display: flex;
        flex-wrap: wrap;
        /* flex-direction: column; */
        transition: all 1s;
        background: linear-gradient(
            180deg,
            #cfcfcf 0%,
            #cfcfcf 55%,
            #efff82 85%,
            #efff82 100%
        );
    }
    article > div {
        width: 100%;
        padding: 6px;
        background: linear-gradient(180deg, #cfcfcf 0%, #efff82 50%);
        background: #cfcfcf;
    }

    .images {
        display: flex;
        overflow: scroll;
    }

    img {
        width: 100%;
        padding-right: 8px;
    }

    article > div:nth-child(2n) {
        background: #efff82;
    }

    article > div:last-of-type {
        /* position: sticky;
        bottom: 0; */
    }

    article > div:not(:last-of-type) {
        border-bottom: 5px solid;
    }


    a {
        display: block;
        color: black;
        text-decoration: underline dashed;
        margin-bottom: 8px;
    }

    .video {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
    }

    .video iframe,
    .video object,
    .video embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
