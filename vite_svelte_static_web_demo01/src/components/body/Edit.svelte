<script>
    import { userStore } from '../../common/stores.js';

    userStore.checkLogin();
    let content = 'this string contains some <strong>HTML!!!</strong>';
</script>

edit
<div>
    <textarea bind:value={content}></textarea>
    <p>{@html content}</p>
</div>