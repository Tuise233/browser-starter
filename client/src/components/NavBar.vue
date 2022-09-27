<template>
  <div class="app-navbar">
    <span class="app-weather-span">
        上海市 {{ weather.state }} {{ weather.temp }} ℃
    </span>

    <div class="app-navbar-options">
        <i class="el-icon-setting app-navbar-options-setting" v-on:click="handleOpenSetting"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            weather: {
                temp: "",
                state: ""
            }
        }
    },

    created() {
        //天气查询
        axios.get("https://restapi.amap.com/v3/weather/weatherInfo?key=ca4a7be3e42dba27788bd91b69de1307&city=350123").then((res) => {
            this.weather.temp = res.data.lives[0].temperature;
            this.weather.state = res.data.lives[0].weather;
        });
    },

    methods: {
        handleOpenSetting(){
            this.$store.state.isShowSetting = true;
        }
    },
}
</script>

<style>
@media screen and (max-width: 1000px) {
    .app-navbar{
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
    }

    .app-weather-span{
        font-size: 35px;
        color: rgba(255, 255, 255, 0.8);
        letter-spacing: 1px;
        margin-left: 40px;
    }

    .app-navbar-options{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: 20px;
        height: 50px;
    }

    .app-navbar-options-setting{
        color: rgba(255, 255, 255, 0.5);
        font-size: 50px;
        margin-right: 20px;
        transition: 0.5s all;
    }

    .app-navbar-options-setting:hover{
        transform: rotate(90deg);
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
    }
}

@media screen and (min-width: 1000px) {
    .app-navbar{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
    }

    .app-weather-span{
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
        letter-spacing: 1px;
        margin-left: 20px;
    }

    .app-navbar-options{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: 20px;
        height: 50px;
    }

    .app-navbar-options-setting{
        color: rgba(255, 255, 255, 0.5);
        font-size: 23px;
        margin-top: 5px;
        margin-right: 20px;
        transition: 0.5s all;
    }

    .app-navbar-options-setting:hover{
        transform: rotate(90deg);
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
    }
}
</style>