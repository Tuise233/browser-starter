import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

export default new VueX.Store({
    state: {
        isShowSetting: false, //是否展示选项侧边栏
        isShowLogin: false, //是否显示登录账号界面
        isShowRegister: false, //是否显示注册账号界面
    }
});