<!-- LoginButton.svelte -->
<script>
    export let onSubmit;
</script>

<style>
    button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #45a049;
    }
</style>

<button on:click={onSubmit}>登录</button>