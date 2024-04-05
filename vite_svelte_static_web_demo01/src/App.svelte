<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './components/body/Home.svelte';
  import Login from './components/body/Login.svelte';
  import About from './components/body/About.svelte';
  import Foot from './components/Foot.svelte';
  import Head from "./components/Head.svelte";
  import UserInfo from "./components/body/UserInfo.svelte";
  import Edit from "./components/body/Edit.svelte";

  const routes = [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '/edit',
      component: Edit,
      name: 'edit'
    },
    {
      path: '/user_info',
      component: UserInfo,
      name: 'user_info'
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    // 其他路由...
  ];

</script>
<Head {routes}/>

<Router>
  {#each routes as route (route.path)}
    <Route path={route.path} component={route.component}/>
  {/each}
</Router>

<Foot/>

