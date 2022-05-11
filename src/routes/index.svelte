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

<ul>
    {#each posts as { path, metadata: {title, tags, date}}}
        <li>
            <a href={`/${path.replace(".md", "")}`}>{title}</a>
            <p class="date">{ new Date(date).toDateString() }</p>
            <p>
                {#each tags as tag}
                    <a class="tag" href={`/tags/${tag}`}>#{tag}</a>
                {/each}
            </p>
        </li>
    {/each}
</ul>

<style>
    li {
        margin-bottom: 1rem;
        list-style:armenian;
    }
    p {
        font-size: .9rem;
    }
    .tag {
        margin-right: 10px;
    }
    p.date {
        color:cornflowerblue;
        margin: .25rem 0;
    }
</style>