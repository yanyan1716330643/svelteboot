<!-- Input.svelte -->
<script>
    export let label;
    export let type = 'text';
    export let value = '';
    export let placeholder = '';

    function handleInput(event) {
        value = event.target.value;
    }
</script>

<style>
    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
</style>

<label>{label}</label>
<input type="text" bind:value={value} placeholder={placeholder} on:input={handleInput}>
