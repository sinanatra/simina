<script>
    export let data;

    let projects = data.posts.filter((d) => d?.meta?.title);
</script>

<article>
    {#each projects as project}
        <div>
            <h1>
                {project?.meta?.title}
            </h1>

            <div class="images">
                {#each project?.meta?.media as media}
                    <img src={media} alt=" {project?.meta?.title}" />
                {/each}
            </div>
            <div class="text">
                {@html project?.text}
            </div>
        </div>
    {/each}
</article>

<style>
    article {
        min-width: 240px;
        height: 100vh;
        overflow: scroll;
        display: flex;
        flex-wrap: wrap;
        background: #cfcfcf;
    }
    article > div {
        max-width: 1440px;
        width: 100%;
        padding: 6px;
        padding-bottom: 24px;
        border-bottom: 2px solid;
    }

    .images {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .text {
        max-width: 800px;
    }

    img {
        width: 100%;
        max-width: 260px;
        padding-bottom: 4px;
    }
</style>
