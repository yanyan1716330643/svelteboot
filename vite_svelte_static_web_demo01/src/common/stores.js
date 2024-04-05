import { writable } from 'svelte/store';

const KEY = 'user_data';
const store = writable(null);
// store.subscribe(u => {
//     debugger
//     localStorage.setItem(KEY, JSON.stringify(u));
//     console.log("store 登录了")
// });

function getLoginUser() {
    const storedData = localStorage.getItem(KEY);
    return storedData ? JSON.parse(storedData) : null;
}

function setLoginUser(user) {
    store.set(user)
    localStorage.setItem(KEY, JSON.stringify(user));
}

function checkLogin() {
    if(getLoginUser()){
        console.log("已经登录")
        return true;
    }else {
        console.log("尚未登录")
        window.location.href = '/login';
        return false;
    }
}

export const userStore = {
    checkLogin : checkLogin,
    getLoginUser : getLoginUser,
    setLoginUser : setLoginUser,
    store : store
}