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
                    <div style="width: 200px;" v-if="$store.state.userData.isLogin == false">
                        <el-button type="primary" style="width: 200px; height: 30px; line-height: 0;" @click="handleOpenLogin">登录</el-button>
                        <el-button style="width: 200px; height: 30px; line-height: 0; margin-left: 0; margin-top: 10px;" @click="handleOpenRegister">注册</el-button>
                    </div>

                    <div style="width: 200px;" v-if="$store.state.userData.isLogin == true">
                        <el-button type="primary" style="width: 200px; height: 30px; line-height: 0;" @click="handleSaveUserData">保存数据</el-button>
                        <el-button type="primary" style="width: 200px; height: 30px; line-height: 0; margin-left: 0; margin-top: 10px;" @click="handleSyncUserData">同步数据</el-button>
                        <el-button type="danger" style="width: 200px; height: 30px; line-height: 0; margin-left: 0; margin-top: 10px;" @click="handleLogout">退出登录</el-button>
                    </div>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="app-setting-blur">
                <span>外观</span>
                <div style="margin-top: 5px; width: 230px; display: flex; flex-direction: column; align-items: center; background-color: rgba(0, 0, 0, 0.05); padding: 10px 10px; border: 5px;">
                    <span style="margin-left: 0; margin-right: auto;">壁纸毛玻璃效果</span>
                    <el-slider v-model="blurValue" style="width: 230px;" :min="0" :max="50" @input="handleBlurChange" @change="handleBlurSave"></el-slider>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="app-setting-system">
                <span>系统</span>
                <div style="margin-top: 5px; width: 230px; display: flex; flex-direction: column; align-items: center; background-color: rgba(0, 0, 0, 0.05); padding: 10px 10px; border: 50px;">
                    <el-button type="danger" style="width: 200px; height: 30px; line-height: 0;" @click="handleClearCache">清空缓存</el-button>
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
            <el-button type="primary" style="width: 300px; margin-top: 10px;" @click="handleLogin">登录</el-button>
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
            <el-input placeholder="请输入邮箱" style="width: 300px; margin-top: 10px;" v-model="email"></el-input>
            <el-input placeholder="请输入密码" style="width: 300px; margin-top: 10px;" v-model="password" show-password></el-input>
            <el-input placeholder="请确认密码" style="width: 300px; margin-top: 10px;" v-model="cpassword" show-password></el-input>
            <el-button type="primary" style="width: 300px; margin-top: 10px;" @click="handleRegister">注册</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
    created() {
        this.blurValue = this.$store.state.userData.backBlur;
    },

    data() {
        return {
            username: "",
            password: "",
            cpassword: "",
            email: "",

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
            if(this.username == "" || this.password == ""){
                return this.$message.error({
                    message: "请输入登录应填入的字段"
                });
            }

            axios.post("http://web.tuise233.cn:8081/user/login", {
                username: this.username,
                password: this.password
            }).then((res) => {

                if(res.data.type == "fail"){
                    return this.$message.error({
                        message: res.data.message
                    });
                } else if(res.data.type == "success"){
                    this.$store.state.userData.isLogin = true;
                    this.$store.state.isShowLogin = false;
                    this.$store.state.userInfo.username = res.data.entity.username;
                    this.$store.commit("saveUserData");
                    this.$store.commit("saveUserInfo");
                    this.$message({
                        message: res.data.message,
                        type: "success"
                    });
                }
            });
        },

        handleLogout(){
            this.$store.state.userData.isLogin = false;
            this.$store.state.userInfo.username = "";
            this.$store.commit("saveUserData");
            this.$store.commit("saveUserInfo");
            this.$message({
                message: "退出成功",
                type: "success"
            });
        },

        handleRegister(){
            if(this.username == "" || this.password == "" || this.cpassword == "" || this.email == ""){
                return this.$message.error({
                    message: "请输入注册应填入的字段"
                });
            }

            if(this.password != this.cpassword){
                return this.$message.error({
                    message: "两次输入的密码不一致",
                });
            }

            axios.post("http://web.tuise233.cn:8081/user/register", {
                username: this.username,
                password: this.password,
                email: this.email
            }).then((res) => {
                if(res.data.type == "fail"){
                    return this.$message.error({
                        message: res.data.message
                    });
                } else if(res.data.type == "success"){
                    this.$store.state.userData.isLogin = true;
                    this.$store.state.isShowRegister = false;
                    this.$store.commit("saveUserData");
                    this.$store.commit("setUserInfo", res.data.entity.username);
                    this.$store.commit("saveUserInfo");
                    return this.$message({
                        message: res.data.message,
                        type: "success"
                    });
                }
            });
        },

        handleBlurChange(){
            this.$store.state.userData.backBlur = this.blurValue;
        },

        handleBlurSave(){
            this.$store.commit("saveUserData");
        },

        handleSaveUserData(){
            if(this.$store.state.userData.isLogin == false){
                return this.$message.error({
                    message: "未登录账号，无法保存数据"
                });
            }

            axios.post("http://web.tuise233.cn:8081/user/saveUserData", {
                username: this.$store.state.userInfo.username,
                data: JSON.stringify(this.$store.state.userData)
            }).then((res) => {
                if(res.data.type == "fail"){
                    return this.$message.error({
                        message: res.data.message
                    });
                }
                this.$message({
                    type: res.data.type,
                    message: res.data.message
                });
            });
        },

        handleSyncUserData(){
            if(this.$store.state.userData.isLogin == false){
                return this.$message.error({
                    message: "未登录账号，无法同步数据"
                });
            }

            axios.get(`http://web.tuise233.cn:8081/user/getUserData/${this.$store.state.userInfo.username}`).then((res) => {
                this.$message({
                    type: res.data.type,
                    message: res.data.message
                });

                this.$store.state.userData = JSON.parse(res.data.entity.userData);
                this.$store.commit("saveUserData");
            });
        },

        handleClearCache(){
            this.$store.commit("clearUserData");
            this.$store.commit("clearUserInfo");
            this.$message({
                type: "success",
                message: "清空缓存成功"
            });
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
    height: auto;
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