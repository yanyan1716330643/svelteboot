import { writable } from 'svelte/store';



const KEY = 'user_data'; // 用来在 localStorage 中存储数据的键

// 从 localStorage 获取用户数据，如果不存在则返回 null
function getUserDataFromLocalStorage() {
    const storedData = localStorage.getItem(KEY);
    return storedData ? JSON.parse(storedData) : null;
}

// 将用户数据保存到 localStorage
function setUserDataToLocalStorage(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
    throw new Error();
}

export function getLoginUser(){
    return getUserDataFromLocalStorage();
}
export const userStore = writable(null);

userStore.subscribe(u => {
    localStorage.setItem(KEY, JSON.stringify(u));
});
// 创建一个 writable store，并在设置新值时将其保存到 localStorage
// export const userStore = writable(getUserDataFromLocalStorage(), (set) => {
//     return {
//         set: (value) => {
//             setUserDataToLocalStorage(value); // 保存数据到 localStorage
//             set(value); // 更新 store 的值
//         },
//         update: (fn) => {
//             set((value) => {
//                 const newValue = fn(value);
//                 setUserDataToLocalStorage(newValue); // 保存更新后的数据到 localStorage
//                 return newValue;
//             });
//         }
//     };
// });