<script context="module">
    const allPosts = import.meta.glob("./blog/*.md")

    let body = [];
    for (let path in allPosts){
        body.push(
            allPosts[path]().then(({ metadata }) => {
                return { path, metadata }
            })
        )
    }

    export const load = async () => {
        const posts = await Promise.all(body)

        return {
            props: {
                posts,
            }
        }
    }
</script>
<script>
    export let posts;
</script>

<h1 class="title">Weblog</h1>

<ul>
{#each posts as { path, metadata: {title, tags, date}}}
    <div class="card">
        <li>
            <a href={`/${path.replace(".md", "")}`}>{title}</a>
            <p class="date">{ new Date(date).toDateString() }</p>
            <p>
                {#each tags as tag}
                <a class="tag" href={`/tags/${tag}`}>#{tag}</a>
                {/each}
            </p>
        </li>
    </div>
    {/each}
</ul>
    
<style>
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card {
        padding: 1rem 0;
        background-color: azure;
        border: 1px dashed red;
        border-radius: 1rem;
        margin: 2rem 1rem;
        width: 30%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

    }
    li {
        margin-bottom: 1rem;
        list-style:armenian;
        list-style-position: inside;
    }
    p {
        font-size: .9rem;
    }
    .tag {
        margin-right: 10px;
    }
    p.date {
        color:cornflowerblue;
        margin: .25rem 0 2.5rem;
        font-weight: bold;
    }
</style>