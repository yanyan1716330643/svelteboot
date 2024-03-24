<!-- ErrorDisplay.svelte -->
<script>
    export let error;
</script>

<style>
    .error {
        color: red;
        margin-top: 10px;
    }
</style>

{#if error}
    <p class="error">{error}</p>
{/if}