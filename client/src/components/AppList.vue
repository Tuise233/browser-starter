<template>
  <div class="app-applist">
    <el-carousel indicator-position="outsize" :autoplay="false" arrow="never">
        <el-carousel-item v-for="(page, pIndex) in appList" v-bind:key="pIndex">
            <div class="app-applist-container">
                <div class="app-applist-container-item-row" v-for="(row, rIndex) in page" v-bind:key="rIndex">
                    <div class="app-applist-container-item" v-for="(item, index) in row" v-bind:key="index">
                        <div class="app-applist-container-item-img">
                            <img :src="item.icon">
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
            appList: [], //应用列表
            pageCount: 1, //页数
        }
    },

    created() {
        this.initAppList();
    },

    methods: {
        initAppList(){
            let appList = this.$store.state.userData.appList;
            let apps = [];
            for(let i = 0; i < parseInt(appList.length / 10); i++){
                let rowOne = [], rowTwo = [];
                
                for(let j = i * 10; j < i * 10 + 5; j++){
                    rowOne.push(appList[j]);
                }
                
                for(let j = i * 10 + 5; j < i * 10 + 10; j++){
                    rowTwo.push(appList[j]);
                }

                apps.push([rowOne, rowTwo]);
            }

            if(appList.length % 10 > 0 && appList.length % 10 <= 5){
                let row = [];
                for(let i = parseInt(appList.length / 10) * 10; i < appList.length; i++){
                    row.push(appList[i]);
                }
                apps.push([row]);
            } else if(appList.length % 10 > 0 && appList.length % 10 > 5){
                let rowOne = [], rowTwo = [];
                for(let i = parseInt(appList.length / 10) * 10; i < parseInt(appList.length / 10) + 5; i++){
                    rowOne.push(appList[i]);
                }

                for(let i = parseInt(appList.length / 10) * 10 + 5; i < appList.length; i++){
                    rowTwo.push(appList[i]);
                }
                apps.push([rowOne, rowTwo]);
            }

            this.appList = apps;
        }
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
    /* background-color: rgba(155, 155, 155, 0.384); */
    background-color: rgba(255, 255, 255, 0.95);
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