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
        <div>
            {#each $selectedBall?.meta?.media as media}
                <img src={media} alt=" {$selectedBall?.meta?.title}" />
            {/each}
        </div>
        <div>{@html $selectedBall?.text}</div>
    {/if}
    <div>
        <a href="{(base = '' ? base + '/archive' : base + '/archive.html')}/"
            >Boring view?</a
        >
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

    img {
        width: 100%;
        padding-bottom: 4px;
    }

    a {
        display: block;
        color: black;
        text-decoration: underline dashed;
        margin-bottom: 8px;
    }
</style>
