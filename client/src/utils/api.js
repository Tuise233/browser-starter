import axios from "axios";

const apiUrl = "http://web.tuise233.cn:8081/";

const api = {
    //获取天气数据
    getWeatherWord(){
        return axios.get("https://restapi.amap.com/v3/weather/weatherInfo?key=ca4a7be3e42dba27788bd91b69de1307&city=350123");
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