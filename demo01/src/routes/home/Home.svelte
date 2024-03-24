<!-- home.svelte -->
<script>
    import Banner from './Banner.svelte';
</script>

<style>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .home-intro {
        text-align: center;
        margin-top: 2rem;
    }

    .home-cta {
        margin-top: 2rem;
    }
</style>

<div class="home">
    <Banner />

    <div class="home-intro">
        <h1>欢迎来到畅聊圈</h1>
        <p>与好友畅聊，分享生活点滴，发现更多有趣的人和事。</p>
        <p>Chat with your friends, share your life and find out more interesting things and people.</p>
    </div>

    <div class="home-cta">
        <button on:click={() => alert('感谢你的分享！')}>分享</button>
    </div>
</div>