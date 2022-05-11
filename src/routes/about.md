<script>
    import Box from "./Box.svelte"
    let count = 10;
</script>

<h1 class="title">About</h1>

- Fat
- Smart
- Lazy


<Box />
{count}

<button on:click={() => count += 10}>Increment {count}</button>