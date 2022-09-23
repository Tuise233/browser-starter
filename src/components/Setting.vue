<template>
  <div class="app-setting">
    <el-drawer 
        title="设置"
        :visible.sync="$store.state.isShowSetting"
        direction="ltr"
        size="15%"
        :append-to-body="true"
        :before-close="handleCloseSetting"
        >
        <div class="app-setting-container">
            <div class="app-setting-account">
                <span style="margin-bottom: 5px;">帐号</span>
                <div style="width: 230px; display: flex; flex-direction: column; align-items: center; background-color: rgba(0, 0, 0, 0.05); padding: 10px 10px;">
                    <el-button type="primary" style="width: 200px; height: 30px; line-height: 0;">登录</el-button>
                    <el-button style="width: 200px; height: 30px; line-height: 0; margin-left: 0; margin-top: 10px;">注册</el-button>
                </div>
            </div>
        </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
        handleCloseSetting(){
            this.$store.state.isShowSetting = false;
        },

        handleLogin(){

        },

        handleRegister(){
            
        }
    },
}
</script>

<style>
.app-setting-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}

.app-setting-account{
    width: 250px;
    height: 110px;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
}
</style>