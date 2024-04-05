<script>
    export let routes;
</script>

{#each routes as route (route.path)}
        <a href={route.path}>{route.name}</a>
        <span> </span>
{/each}
<hr/>

