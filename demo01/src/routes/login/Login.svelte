<!-- LoginForm.svelte -->
<script>
    import Input from './Input.svelte';
    import LoginButton from './LoginButton.svelte';
    import ErrorDisplay from './ErrorDisplay.svelte';

    let username = '';
    let password = '';
    let error = '';

    function handleSubmit() {
        // 这里可以添加向后端发送登录请求的逻辑
        // 如果请求失败，更新error变量
        // error = '用户名或密码错误';
    }
</script>

<style>
    .form-container {
        max-width: 300px;
        padding: 16px;
        background-color: white;
    }
</style>

<div class="form-container">
    <h2>登录</h2>
    <Input label="用户名" bind:value={username} placeholder="请输入用户名" />
    <Input type="password" label="密码" bind:value={password} placeholder="请输入密码" />
    <ErrorDisplay bind:error={error} />
    <LoginButton on:click={handleSubmit} />
</div>