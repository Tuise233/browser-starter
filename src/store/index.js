import Vue from "vue";
import VueX from "vuex";
import local from "@/utils/local";

Vue.use(VueX);

export default new VueX.Store({
    state: {
        isShowSetting: false, //是否展示选项侧边栏
        isShowLogin: false, //是否显示登录账号界面
        isShowRegister: false, //是否显示注册账号界面

        userData: {
            backBlur: 10, //背景毛玻璃效果
        }
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
        }
    }
});