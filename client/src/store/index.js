import Vue from "vue";
import VueX from "vuex";
import local from "@/utils/local";
import { appList } from "@/utils/appList";
import api from "@/utils/api";

Vue.use(VueX);

const defaultUserData = {
    isLogin: false, //是否登录账号
    backBlur: 10, //背景毛玻璃效果,
    appList: appList, //默认App列表
};

const defaultUserInfo = {
    username: ""
};

export default new VueX.Store({
    state: {
        isShowSetting: false, //是否展示选项侧边栏
        isShowLogin: false, //是否显示登录账号界面
        isShowRegister: false, //是否显示注册账号界面

        userData: defaultUserData,
        userInfo: defaultUserInfo,
        formatAppList: []
    },

    mutations: {
        formatList(){
            let appList = this.state.userData.appList;
            let apps = [];
            for(let i = 0; i < parseInt(appList.length / 10); i++){
                let rowOne = [], rowTwo = [];
                
                for(let j = i * 10; j < i * 10 + 5; j++){
                    rowOne.push(appList[j]);
                }
                
                for(let j = i * 10 + 5; j < i * 10 + 10; j++){
                    rowTwo.push(appList[j]);
                }

                apps.push([rowOne, rowTwo]);
            }

            if(appList.length % 10 > 0 && appList.length % 10 <= 5){
                let row = [];
                for(let i = parseInt(appList.length / 10) * 10; i < appList.length; i++){
                    row.push(appList[i]);
                }
                apps.push([row]);
            } else if(appList.length % 10 > 0 && appList.length % 10 > 5){
                let rowOne = [], rowTwo = [];
                for(let i = parseInt(appList.length / 10) * 10; i < parseInt(appList.length / 10) + 5; i++){
                    rowOne.push(appList[i]);
                }

                for(let i = parseInt(appList.length / 10) * 10 + 5; i < appList.length; i++){
                    rowTwo.push(appList[i]);
                }
                apps.push([rowOne, rowTwo]);
            }
            this.state.formatAppList = apps;
        },

        saveUserData(){
            local.setLocal("userData", JSON.stringify(this.state.userData));

            //判断玩家是否登录
            if(this.state.userData.isLogin && this.state.userInfo.username != ""){
                api.saveUserData({
                    username: this.state.userInfo.username,
                    data: JSON.stringify(this.state.userData)
                });
            }
        },

        getUserData(){
            let userData = local.getLocal("userData");
            if(userData != null){
                this.state.userData = JSON.parse(userData);
            }
        },

        clearUserData(){
            this.state.userData = defaultUserData;
            local.clearLocal("userData");
        },

        saveUserInfo(){
            local.setLocal("userInfo", JSON.stringify(this.state.userInfo));
        },

        getUserInfo(){
            let userInfo = local.getLocal("userInfo");
            if(userInfo != null){
                this.state.userInfo = JSON.parse(userInfo);
            }
        },

        clearUserInfo(){
            this.state.userInfo = defaultUserInfo;
            local.clearLocal("userInfo");
        }
    }
});