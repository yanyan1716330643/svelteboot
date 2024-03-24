<!-- banner.svelte -->
<script>
    import { onMount, tick } from 'svelte';
    import { fade } from 'svelte/transition';

    let images = [
        { id: 1, src: '/1.png', alt: 'Image 1' },
        { id: 2, src: '/2.png', alt: 'Image 2' },
        { id: 3, src: '/3.png', alt: 'Image 3' },
        { id: 4, src: '/4.png', alt: 'Image 4' },
    ];
    let currentIndex = 0;
    let intervalId;

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
    };

    onMount(async () => {
        await tick();
        intervalId = setInterval(nextImage, 3000); // 每3秒更换图片

        return () => clearInterval(intervalId); // 组件卸载时清除定时器
    });
</script>

<style>
    .banner {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 400px; /* 你可以根据设计调整高度 */
    }

    .banner img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transition: opacity 1s ease-in-out;
        opacity: 0;
    }

    .banner img.active {
        opacity: 1;
    }
</style>

<div class="banner">
    {#each images as image (image.id)}
        <img src={image.src} alt={image.alt}
             class:active={currentIndex === images.findIndex(img => img.id === image.id)}
             in:fade={{ duration: 1000 }}
             out:fade={{ duration: 1000 }}>
    {/each}
</div>