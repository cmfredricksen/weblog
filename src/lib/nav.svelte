<script>
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Posts",
            path: "/blog"
        },
        {
            title: "About",
            path: "/about"
        }
    ]
</script>

<nav>
    <ul>
        {#each links as {title, path}}
            <li>
                <a href={path}>{title}</a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        margin: 1rem 0 2rem;
        padding: 1rem 0;
    }
    ul {
        display: flex;
        justify-content: space-evenly;
    }
</style>