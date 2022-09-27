<template>
  <div class="app-searchbox-container">
    <div class="app-searchbox" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <div class="app-searchbox-type">
            <img :src="iconPath">
        </div>
        <input type="text" v-model="searchText" @keyup.13="handleSearch()" @input="handleInputChanged">
    </div>
  </div>
</template>

<script>
import dom from "@/utils/dom";

export default {

    data() {
        return {
            searchText: "",
            iconPath: require('../assets/icon/baidu.png')
        }
    },

    methods: {
        handleMouseEnter(){
            let type = dom.getEntity("app-searchbox-type", 0);
            type.style.opacity = "1";
        },

        handleMouseLeave(){
            let type = dom.getEntity("app-searchbox-type", 0);
            type.style.opacity = "0";
        },

        handleSearch(){
           //解析搜索
           let url = "";
           let splitResult = this.searchText.split(" ");
           if(splitResult.length >= 2){
                let searchText = "";
                for(let i = 1; i < splitResult.length; i++){
                    searchText += splitResult[i];
                    if(i != splitResult.length - 1){
                        searchText += " ";
                    }
                }
                switch(splitResult[0]){
                    case "github":{
                        url = "https://github.com/search?q=" + searchText;
                        break;
                    }

                    case "google":{
                        url = `https://www.google.com.hk/search?q=${searchText}&hl=zh-CN`;
                        break;
                    }

                    case "bilibili":{
                        url = `https://search.bilibili.com/all?keyword=${searchText}`;
                        break;
                    }

                    case "fanyi":{
                        url = "https://translate.google.cn/#view=home&op=translate&sl=en&tl=zh-CN&text=" + this.searchText;
                        break;
                    }

                    default:{
                        url = "http://www.baidu.com/s?wd=" + this.searchText;
                        break;
                    }
                }
           } else {
                url = "http://www.baidu.com/s?wd=" + this.searchText;
           }

           window.open(url, "_self");
        },

        handleTranslate(){
            let url = "https://translate.google.cn/#view=home&op=translate&sl=en&tl=zh-CN&text=" + this.searchText;
            window.open(url, "_self");
        },

        handleInputChanged(){
            if(this.searchText.length == 6){
                if(this.searchText == "fanyi "){
                    this.iconPath = require("../assets/icon/translate.png");
                }
            } else if(this.searchText.length == 7){
                if(this.searchText == "github "){
                    this.iconPath = require("../assets/icon/github.png");
                } else if(this.searchText == "google "){
                    this.iconPath = require("../assets/icon/google.png");
                }
            } else if(this.searchText.length == 9){
                if(this.searchText == "bilibili "){
                    this.iconPath = require("../assets/icon/bilibili.png");
                }
            } else if(this.searchText.length < 6){
                this.iconPath = require("../assets/icon/baidu.png");
            }
        }
    },
}
</script>

<style>

@media screen and (max-width: 1000px) {
    .app-searchbox-container{
        width: 900px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .app-searchbox{
        width: 500px;
        height: 80px;
        /* width: 500px; */
        /* height: 50px; */
        border-radius: 10px;
        transition: 0.3s all;
        background-color: rgba(255, 255, 255, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .app-searchbox:hover{
        width: 800px;
        height: 100px;
        background-color: rgba(255, 255, 255, 1);
    }

    .app-searchbox-type{
        opacity: 0;
        width: 90px;
        height: 90px;
        margin-left: 0;
        margin-right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s all;
    }

    .app-searchbox img{
        width: 50px;
        height: 50px;
    }

    .app-searchbox input{
        height: 50px;
        width: 430px;
        margin-left: 0;
        margin-right: auto;
        border: none;
        outline: none;
        font-size: 30px;
        background-color: transparent;
        padding: 0 10px;
        transition: 0.3s all;
    }
}

@media screen and (min-width: 1000px){
    .app-searchbox-container{
        width: 600px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* background-color: rgba(0, 0, 0, 0.13); */
    }

    .app-searchbox{
        width: 300px;
        height: 40px;
        /* width: 500px; */
        /* height: 50px; */
        border-radius: 10px;
        transition: 0.3s all;
        background-color: rgba(255, 255, 255, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .app-searchbox:hover{
        width: 500px;
        height: 50px;
        background-color: rgba(255, 255, 255, 1);
    }

    .app-searchbox-type{
        opacity: 0;
        width: 50px;
        height: 50px;
        margin-left: 0;
        margin-right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s all;
    }

    .app-searchbox img{
        width: 20px;
        height: 20px;
    }

    .app-searchbox input{
        height: 50px;
        width: 430px;
        margin-left: 0;
        margin-right: auto;
        border: none;
        outline: none;
        font-size: 14px;
        background-color: transparent;
        padding: 0 10px;
        transition: 0.3s all;
    }
}
</style>