<script>
    export let title;
    export let date;
    export let tags;
</script>

<h1 class="title-post">{title}</h1>
<p class="date">{new Date (date).toDateString()}</p>

<div class="container">
    <slot />
</div>

<p class="tags">
        {#each tags as tag}
            <a href={`../tags/${tag}`}>#{tag}</a>
        {/each}
    </p>

<style>
    .title-post {
        padding: 1rem 0 1rem;
        text-align: center;
        border-top: 1px dashed red;
    }
    .date {
        text-align: center;
    }
    .container {
        padding: 2rem 0;
    }
    .tags {
        font-size: .9rem;
        color: blue;
        font-weight: bold;
        padding: 1rem 0;
        border-top: 1px dashed red;
    }

    a {
        margin-right: 10px;

    }

</style>