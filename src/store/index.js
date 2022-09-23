import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

export default new VueX.Store({
    state: {
        isShowSetting: true, //是否展示选项侧边栏
    }
});