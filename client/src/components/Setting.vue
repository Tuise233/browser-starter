<template>
  <div class="app-setting">
    <el-drawer
      title="设置"
      :visible.sync="$store.state.isShowSetting"
      direction="ltr"
      :size="270"
      :append-to-body="true"
    >
      <div class="app-setting-container">
        <div class="app-setting-account">
          <span>帐号</span>
          <div
            style="
              margin-top: 5px;
              width: 230px;
              display: flex;
              flex-direction: column;
              align-items: center;
              background-color: rgba(0, 0, 0, 0.05);
              padding: 10px 10px;
              border: 5px;
            "
          >
            <div
              style="width: 200px"
              v-if="$store.state.userData.isLogin == false"
            >
              <el-button
                type="primary"
                style="width: 200px; height: 30px; line-height: 0"
                @click="handleOpenLogin"
                >登录</el-button
              >
              <el-button
                style="
                  width: 200px;
                  height: 30px;
                  line-height: 0;
                  margin-left: 0;
                  margin-top: 10px;
                "
                @click="handleOpenRegister"
                >注册</el-button
              >
            </div>

            <div
              style="width: 200px"
              v-if="$store.state.userData.isLogin == true"
            >
              <el-button
                type="primary"
                style="width: 200px; height: 30px; line-height: 0"
                @click="handleSaveUserData"
                >保存数据</el-button
              >
              <el-button
                type="primary"
                style="
                  width: 200px;
                  height: 30px;
                  line-height: 0;
                  margin-left: 0;
                  margin-top: 10px;
                "
                @click="handleSyncUserData"
                >同步数据</el-button
              >
              <el-button
                type="danger"
                style="
                  width: 200px;
                  height: 30px;
                  line-height: 0;
                  margin-left: 0;
                  margin-top: 10px;
                "
                @click="handleLogout"
                >退出登录</el-button
              >
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="app-setting-blur">
          <span>外观</span>
          <div
            style="
              margin-top: 5px;
              width: 230px;
              display: flex;
              flex-direction: column;
              align-items: center;
              background-color: rgba(0, 0, 0, 0.05);
              padding: 10px 10px;
              border: 5px;
            "
          >
            <span style="margin-left: 0; margin-right: auto"
              >壁纸毛玻璃效果</span
            >
            <el-slider
              v-model="blurValue"
              style="width: 230px"
              :min="0"
              :max="50"
              @input="handleBlurChange"
              @change="handleBlurSave"
            ></el-slider>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="app-setting-system">
          <span>系统</span>
          <div
            style="
              margin-top: 5px;
              width: 230px;
              display: flex;
              flex-direction: column;
              align-items: center;
              background-color: rgba(0, 0, 0, 0.05);
              padding: 10px 10px;
              border: 50px;
            "
          >
            <el-button
              type="primary"
              style="width: 200px; height: 30px; line-height: 0"
              @click="handleAddApp"
              >新增快捷访问</el-button
            >
            <el-button
              type="danger"
              style="
                width: 200px;
                height: 30px;
                line-height: 0;
                margin-left: 0;
                margin-top: 10px;
              "
              @click="handleClearCache"
              >清空缓存</el-button
            >
          </div>
        </div>
        <el-divider></el-divider>
      </div>
    </el-drawer>

    <el-dialog
      title="登录帐号"
      :visible.sync="$store.state.isShowLogin"
      :append-to-body="true"
      width="450px"
    >
      <div class="app-setting-account-container">
        <span style="font-size: 13px">登录后可使用个性化备份等功能</span>
        <el-input
          placeholder="请输入帐号"
          style="width: 300px; margin-top: 10px"
          v-model="username"
        ></el-input>
        <el-input
          placeholder="请输入密码"
          style="width: 300px; margin-top: 10px"
          v-model="password"
          show-password
        ></el-input>
        <el-button
          type="primary"
          style="width: 300px; margin-top: 10px"
          @click="handleLogin"
          >登录</el-button
        >
      </div>
    </el-dialog>

    <el-dialog
      title="注册账号"
      :visible.sync="$store.state.isShowRegister"
      :append-to-body="true"
      width="450px"
    >
      <div class="app-setting-account-container">
        <span style="font-size: 13px">注册后可使用个性化备份等功能</span>
        <el-input
          placeholder="请输入帐号"
          style="width: 300px; margin-top: 10px"
          v-model="username"
        ></el-input>
        <el-input
          placeholder="请输入邮箱"
          style="width: 300px; margin-top: 10px"
          v-model="email"
        ></el-input>
        <el-input
          placeholder="请输入密码"
          style="width: 300px; margin-top: 10px"
          v-model="password"
          show-password
        ></el-input>
        <el-input
          placeholder="请确认密码"
          style="width: 300px; margin-top: 10px"
          v-model="cpassword"
          show-password
        ></el-input>
        <el-button
          type="primary"
          style="width: 300px; margin-top: 10px"
          @click="handleRegister"
          >注册</el-button
        >
      </div>
    </el-dialog>

    <el-dialog
      title="添加快捷访问"
      :visible.sync="isShowAddApp"
      :append-to-body="true"
      width="450px"
    >
      <div class="app-setting-appadd-container">
        <div style="display: flex; margin-bottom: 10px">
          <div
            style="
              width: 70px;
              height: 70px;
              border-radius: 5px;
              background-color: black;
              margin-left: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
            :style="{ backgroundColor: appColor }"
          >
            <img
              v-if="appIconType == 0 && appIcon != ''"
              style="width: 40px; height: 40px"
              :src="appIcon"
            />
            <span
              v-if="appIconType == 1 && appIcon != ''"
              style="color: white; font-size: 25px; font-weight: bold"
              >{{ appIcon }}</span
            >
          </div>
          <div style="display: flex; flex-direction: column; margin-left: 10px">
            <span style="font-size: 15px; margin-bottom: 10px"
              >输入正确网址后会自动解析网站图标</span
            >
            <el-color-picker v-model="appColor"></el-color-picker>
          </div>
        </div>
        <el-input
          style="margin-bottom: 10px"
          placeholder="请输入名称"
          v-model="appName"
        ></el-input>
        <el-input
          style="margin-bottom: 10px"
          placeholder="请输入网址"
          v-model="appUrl"
          @change="handleAppUrlInput"
        ></el-input>
        <el-button
          style="margin-left: auto; margin-right: 0"
          type="primary"
          @click="handleSaveNewApp"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/utils/api";

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

      blurValue: 0,

      isShowAddApp: false,
      appColor: "#8796A6",
      appIcon: "",
      appIconType: 0,
      appUrl: "",
      appName: "",
    };
  },

  methods: {
    handleOpenLogin() {
      this.$store.state.isShowLogin = true;
    },

    handleOpenRegister() {
      this.$store.state.isShowRegister = true;
    },

    handleLogin() {
      if (this.username == "" || this.password == "") {
        return this.$message.error({
          message: "请输入登录应填入的字段",
        });
      }

      api
        .loginUser({
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.data.type == "fail") {
            return this.$message.error({
              message: res.data.message,
            });
          } else if (res.data.type == "success") {
            this.$store.state.userData.isLogin = true;
            this.$store.state.isShowLogin = false;
            this.$store.state.userInfo.username = res.data.entity.username;
            this.$store.commit("saveUserData");
            this.$store.commit("saveUserInfo");
            this.$message({
              message: res.data.message,
              type: "success",
            });
          }
        });
    },

    handleLogout() {
      this.$store.state.userData.isLogin = false;
      this.$store.state.userInfo.username = "";
      this.$store.commit("saveUserData");
      this.$store.commit("saveUserInfo");
      this.$message({
        message: "退出成功",
        type: "success",
      });
    },

    handleRegister() {
      if (
        this.username == "" ||
        this.password == "" ||
        this.cpassword == "" ||
        this.email == ""
      ) {
        return this.$message.error({
          message: "请输入注册应填入的字段",
        });
      }

      if (this.password != this.cpassword) {
        return this.$message.error({
          message: "两次输入的密码不一致",
        });
      }

      api
        .registerUser({
          username: this.username,
          password: this.password,
          email: this.email,
        })
        .then((res) => {
          if (res.data.type == "fail") {
            return this.$message.error({
              message: res.data.message,
            });
          } else if (res.data.type == "success") {
            this.$store.state.userData.isLogin = true;
            this.$store.state.isShowRegister = false;
            this.$store.commit("saveUserData");
            this.$store.commit("setUserInfo", res.data.entity.username);
            this.$store.commit("saveUserInfo");
            return this.$message({
              message: res.data.message,
              type: "success",
            });
          }
        });
    },

    handleBlurChange() {
      this.$store.state.userData.backBlur = this.blurValue;
    },

    handleBlurSave() {
      this.$store.commit("saveUserData");
    },

    handleSaveUserData() {
      if (this.$store.state.userData.isLogin == false) {
        return this.$message.error({
          message: "未登录账号，无法保存数据",
        });
      }

      api
        .saveUserData({
          username: this.$store.state.userInfo.username,
          data: JSON.stringify(this.$store.state.userData),
        })
        .then((res) => {
          if (res.data.type == "fail") {
            return this.$message.error({
              message: res.data.message,
            });
          }
          this.$message({
            type: res.data.type,
            message: res.data.message,
          });
        });
    },

    handleSyncUserData() {
      if (this.$store.state.userData.isLogin == false) {
        return this.$message.error({
          message: "未登录账号，无法同步数据",
        });
      }

      api.getUserData(this.$store.state.userInfo.username).then((res) => {
        this.$message({
          type: res.data.type,
          message: res.data.message,
        });

        this.$store.state.userData = JSON.parse(res.data.entity.userData);
        this.$store.commit("saveUserData");
      });
    },

    handleClearCache() {
      this.$store.commit("clearUserData");
      this.$store.commit("clearUserInfo");
      this.$message({
        type: "success",
        message: "清空缓存成功",
      });
    },

    //格式化Url
    formatUrl(url) {
      if (
        url.substr(0, 7).toLowerCase() == "http://" ||
        url.substr(0, 8).toLowerCase() == "https://" ||
        url.substr(0, 2).toLowerCase() == "http://"
      ) {
        return url;
      } else {
        return "http://" + url;
      }
    },

    //解析合法Url
    isUrl(url) {
      var name =
        /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
      if (!name.test(url)) {
        return false;
      } else return true;
    },

    handleAddApp() {
      this.isShowAddApp = true;
    },

    handleAppUrlInput() {
      this.appUrl = this.formatUrl(this.appUrl);
      if (this.isUrl(this.appUrl)) {
        this.appIcon = this.appUrl + "/favicon.ico";
      } else {
        this.appIcon = this.appUrl.substr(7, 1);
        this.appIconType = 1;
      }
    },

    handleSaveNewApp() {
      if (this.appName == "") {
        return this.$message.error({
          message: "请输入快捷访问名称",
        });
      }

      if (this.appUrl == "") {
        return this.$message.error({
          message: "请输入快捷访问网址",
        });
      }

      this.$store.state.userData.appList.push({
        url: this.appUrl,
        name: this.appName,
        icon: this.appIcon,
        iconType: this.appIconType,
        color: this.appColor,
      });
      this.$store.commit("formatList");
      this.$store.commit("saveUserData");
      this.$message({
        message: "新增快捷访问成功",
        type: "success",
      });
      this.isShowAddApp = false;
    },
  },
};
</script>

<style>
.app-setting-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.app-setting-account {
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.app-setting-account-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-setting-appadd-container {
  display: flex;
  flex-direction: column;
}
</style>