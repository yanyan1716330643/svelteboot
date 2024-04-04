export async function demo_login() {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "userEmail": "18326000767@163.com",
            "loginType": 0
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        const response = await fetch("http://localhost:45888/oca/v1/user/base/login/yanyan1", requestOptions);
        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`);
        }else {
            const result = await response.json();
            console.log("data:",result)
            if (result.code===0){
                return result.data
            }else {
                console.log("login err");
            }
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        // throw error; // 可以选择抛出错误或返回 null/其他默认值
    }
}