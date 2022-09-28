<template>
  <div class="app-applist">
    <el-carousel indicator-position="outsize" :autoplay="false" arrow="never">
        <el-carousel-item v-for="(page, pIndex) in $store.state.formatAppList" v-bind:key="pIndex">
            <div class="app-applist-container">
                <div class="app-applist-container-item-row" v-for="(row, rIndex) in page" v-bind:key="rIndex">
                    <div class="app-applist-container-item" v-for="(item, index) in row" v-bind:key="index" :style="item.color == '' ? 'rgba(155, 155, 155, 0.384)' : item.color">
                        <div class="app-applist-container-item-img">
                            <img v-if="item.iconType == 0 && item.icon != ''" :src="item.icon">
                            <span v-if="item.iconType == 1 && item.icon != ''" style="font-weight: bold; font-size: 20px; color:white;"></span>
                        </div>
                        <span>{{item.name}}</span>
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
        }
    },

    created() {
        this.$store.commit("formatList");
    },

    methods: {

    },
}
</script>

<style>
/* 当客户端为手机时不显示App列表 */
@media screen and (max-width: 1000px) {
    .app-appList{
        display: none;
    }
}

.app-applist{
    width: 700px;
    height: 190px;
}

.app-applist-container{
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.app-applist-container-item-row{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    margin: 30px 0;
}

.app-applist-container-item{
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

.app-applist-container-item-img{
    width: 50px;
    height: 50px;
    background-color: rgba(155, 155, 155, 0.384);
    /* background-color: rgba(255, 255, 255, 0.95); */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: 0.3s all;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
}

.app-applist-container-item-img:hover{
    cursor: pointer;
    background-color: white;
}

.app-applist-container-item span{
    font-size: 13px;
    margin-top: 5px;
}

.app-applist-container-item img{
    width: 30px;
    height: 30px;
}
</style>