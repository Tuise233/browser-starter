<template>
  <div class="app-setting">
    <el-drawer 
        title="设置"
        :visible.sync="$store.state.isShowSetting"
        direction="ltr"
        :size="270"
        :append-to-body="true">
        <div class="app-setting-container">
            <div class="app-setting-account">
                <span>帐号</span>
                <div style="margin-top: 5px; width: 230px; display: flex; flex-direction: column; align-items: center; background-color: rgba(0, 0, 0, 0.05); padding: 10px 10px; border: 5px;">
                    <el-button type="primary" style="width: 200px; height: 30px; line-height: 0;" @click="handleOpenLogin">登录</el-button>
                    <el-button style="width: 200px; height: 30px; line-height: 0; margin-left: 0; margin-top: 10px;" @click="handleOpenRegister">注册</el-button>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="app-setting-blur">
                <span>外观</span>
                <div style="margin-top: 5px; width: 230px; display: flex; flex-direction: column; align-items: center; background-color: rgba(0, 0, 0, 0.05); padding: 10px 10px; border: 5px;">
                    <span style="margin-left: 0; margin-right: auto;">壁纸毛玻璃效果</span>
                    <el-slider v-model="blurValue" style="width: 230px;" :min="0" :max="50" @input="handleBlurChange"></el-slider>
                </div>
            </div>
            <el-divider></el-divider>
        </div>
    </el-drawer>

    <el-dialog 
        title="登录帐号" 
        :visible.sync="$store.state.isShowLogin"
        :append-to-body="true"
        width="450px">
        <div class="app-setting-account-container">
            <span style="font-size: 13px;">登录后可使用个性化备份等功能</span>
            <el-input placeholder="请输入帐号" style="width: 300px; margin-top: 10px;" v-model="username"></el-input>
            <el-input placeholder="请输入密码" style="width: 300px; margin-top: 10px;" v-model="password" show-password></el-input>
            <el-button type="primary" style="width: 300px; margin-top: 10px;">登录</el-button>
        </div>
    </el-dialog>

    <el-dialog
        title="注册账号"
        :visible.sync="$store.state.isShowRegister"
        :append-to-body="true"
        width="450px">
        <div class="app-setting-account-container">
            <span style="font-size: 13px;">注册后可使用个性化备份等功能</span>
            <el-input placeholder="请输入帐号" style="width: 300px; margin-top: 10px;" v-model="username"></el-input>
            <el-input placeholder="请输入密码" style="width: 300px; margin-top: 10px;" v-model="password" show-password></el-input>
            <el-input placeholder="请确认密码" style="width: 300px; margin-top: 10px;" v-model="cpassword" show-password></el-input>
            <el-button type="primary" style="width: 300px; margin-top: 10px;">注册</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    created() {
        this.blurValue = this.$store.state.userData.backBlur;
    },

    data() {
        return {
            username: "",
            password: "",
            cpassword: "",

            blurValue: 0
        }
    },

    methods: {
        handleOpenLogin(){
            this.$store.state.isShowLogin = true;
        },

        handleOpenRegister(){
            this.$store.state.isShowRegister = true;
        },

        handleLogin(){

        },

        handleRegister(){

        },

        handleBlurChange(){
            this.$store.state.userData.backBlur = this.blurValue;
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

.app-setting-account-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>