<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  import Login from './routes/Login.svelte';
  import Error from './routes/Error.svelte';
  import { setContext } from 'svelte';

  // 创建路由上下文
  const key = {};
  setContext(key, null);
</script>

<Router {key}>
  <nav>
    <a href="/">主页</a>
    <a href="/login">登录</a>
  </nav>

  <Route path="/" component={Home} />
  <Route path="/login" component={Login} />
  <Route path="*" component={Error} />
</Router>