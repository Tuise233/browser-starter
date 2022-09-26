import Vue from "vue";
import VueX from "vuex";
import local from "@/utils/local";

Vue.use(VueX);

const defaultUserData = {
    isLogin: false, //是否登录账号
    backBlur: 10, //背景毛玻璃效果
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

        userInfo: defaultUserInfo
    },

    mutations: {
        saveUserData(){
            local.setLocal("userData", JSON.stringify(this.state.userData));
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