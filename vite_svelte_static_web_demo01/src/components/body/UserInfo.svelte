<script>
    import { userStore } from '../../common/stores.js';
    import { api } from '../../common/api.js';

    userStore.checkLogin();

    let promise;

    async function f_getUserInfo() {
        const text = await api.demoUserInfo()
        if (text) {
            return text;
        } else {
            throw new Error("xxxx");
        }
    }

    function handleClick() {
        promise = f_getUserInfo();
    }
</script>

<button on:click={handleClick}>
    handleClick
</button>

{#await promise}
    <p>...waiting</p>
{:then user}
    {#if user}
        <p>user_info: {JSON.stringify(user)}</p>
    {:else}
        <p>点击获取用户信息</p>
    {/if }
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}