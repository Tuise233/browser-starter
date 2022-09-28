<template>
  <div class="app-applist">
    <el-carousel indicator-position="outsize" :autoplay="false" arrow="never">
      <el-carousel-item
        v-for="(page, pIndex) in $store.state.formatAppList"
        v-bind:key="pIndex"
      >
        <div class="app-applist-container">
          <div
            class="app-applist-container-item-row"
            v-for="(row, rIndex) in page"
            v-bind:key="rIndex"
          >
            <div
              class="app-applist-container-item"
              v-for="(item, index) in row"
              v-bind:key="index"
              :class="{ swing: isEdit }"
            >
              <div
                class="app-applist-container-item-img"
                :style="{
                  backgroundColor:
                    item.color == ''
                      ? 'rgba(155, 155, 155, 0.384)'
                      : item.color,
                }"
                @contextmenu.prevent="editApp()"
                @click="handleOpenApp(item.url)"
                style="position: relative"
              >
                <div
                  style="
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: rgba(77, 75, 75, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    top: -5px;
                    right: -5px;
                  "
                  v-if="isEdit == true"
                >
                  <i
                    class="el-icon-close"
                    style="font-size: 12px; margin-left: 1px"
                    @click="handleDeleteApp(item)"
                  ></i>
                </div>
                <img
                  v-if="item.iconType == 0 && item.icon != ''"
                  :src="item.icon"
                />
                <span
                  v-if="item.iconType == 1 && item.icon != ''"
                  style="font-weight: bold; font-size: 20px; color: white"
                  >{{ item.name[0] }}</span
                >
              </div>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageCount: 1, //页数
      isEdit: false,
    };
  },

  created() {
    this.$store.commit("formatList");

    document.addEventListener(
      "click",
      () => {
        this.isEdit = false;
      },
      false
    );
  },

  methods: {
    handleOpenApp(url) {
      if (!this.isEdit) {
        window.open(url, "_self");
      }
    },

    editApp() {
      this.isEdit = true;
    },

    handleDeleteApp(item) {
      this.$confirm(`确定要删除${item.name}?`, "提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.isEdit = true;

        let apps = this.$store.state.userData.appList;
        let newApp = [];
        for(let i = 0; i < apps.length; i++){
            if(apps[i] != item){
                newApp.push(apps[i]);
            }
        }

        this.$store.state.userData.appList = newApp;
        this.$store.commit("saveUserData");
        this.$store.commit("formatList");

      }).catch(() => {
        this.isEdit = true;
      });
    },
  },
};
</script>

<style>
/* 当客户端为手机时不显示App列表 */
@media screen and (max-width: 1000px) {
  .app-appList {
    display: none;
  }
}

.app-applist {
  width: 700px;
  height: 190px;
}

.app-applist-container {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-applist-container-item-row {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  margin: 30px 0;
}

.app-applist-container-item {
  margin-left: 35px;
  margin-right: 35px;
  width: 70px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
  color: white;
}

.app-applist-container-item-img {
  width: 50px;
  height: 50px;
  /* background-color: rgba(155, 155, 155, 0.384); */
  /* background-color: rgba(255, 255, 255, 0.95); */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 0.3s all;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
}

.app-applist-container-item-img:hover {
  cursor: pointer;
  background-color: white;
}

.app-applist-container-item span {
  font-size: 13px;
  margin-top: 5px;
}

.app-applist-container-item img {
  width: 30px;
  height: 30px;
}

.swing {
  animation: aswing ease 0.3s infinite;
  transform-origin: center 50px;
}

@keyframes aswing {
  0% {
    transform: rotate(0) translateX(-0.5px) scale(1);
  }

  20% {
    transform: rotate(-1deg) translateY(-0.5px) scale(1);
  }

  60% {
    transform: rotate(0) scale(1);
  }

  80% {
    transform: rotate(1deg) translateX(0.5px) scale(1);
  }

  100% {
    transform: rotate(0) translateY(0.5px) scale(1);
  }
}
</style>