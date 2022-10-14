import axios from "axios";

const apiUrl = "http://web.tuise233.cn:8081/";

const api = {
    //获取天气数据
    getWeatherWord(){
        return axios.get("https://devapi.qweather.com/v7/weather/now?location=101020100&key=86deb9fac0674e0e80c7cfe997b7a12f");
    },

    //获取一言
    getOneWord(){
        return axios.get("https://v1.hitokoto.cn/?c=d&c=i&encode=json");
    },

    //用户登录
    loginUser(data){
        return axios.post(apiUrl + "user/login", data);
    },

    //注册用户
    registerUser(data){
        return axios.post(apiUrl + "user/register", data);
    },

    //保存用户数据
    saveUserData(data){
        return axios.post(apiUrl + "user/saveUserData", data);
    },
    
    //获取用户数据
    getUserData(data){
        return axios.get(apiUrl + "user/getUserData/" + data);
    }
}

export default api;