<script>
    import {api} from "../../common/api.js";
    let user_info
    function f_login() {
        api.demoLogin().then(user=>{
            //console.log("login clicked",user)
            if (user){
                user_info = user;
            }
        })
    }
</script>


about
<div>
    {JSON.stringify(user_info)}
</div>
<button on:click={f_login}>login</button>