<template>
  <div class="app-searchbox-container">
    <div class="app-searchbox" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <div class="app-searchbox-type">
            <img src="@/assets/icon.png">
        </div>
        <input type="text" v-model="searchText" @keyup.13="handleSearch()">
        <div class="app-searchbox-icon" @click="handleTranslate()">
            <img src="@/assets/icon/translate.png">
        </div>
    </div>
  </div>
</template>

<script>
import dom from "@/utils/dom";

export default {

    data() {
        return {
            searchText: ""
        }
    },

    methods: {
        handleMouseEnter(){
            let type = dom.getEntity("app-searchbox-type", 0);
            let icon = dom.getEntity("app-searchbox-icon", 0);
            type.style.opacity = "1";
            icon.style.opacity = "1";
        },

        handleMouseLeave(){
            let type = dom.getEntity("app-searchbox-type", 0);
            let icon = dom.getEntity("app-searchbox-icon", 0);
            type.style.opacity = "0";
            icon.style.opacity = "0";
        },

        handleSearch(){
            /*
            let url = "http://www.baidu.com/s?wd=" + this.searchText;
            window.open(url, "_self");
            */
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
                        url = "https://github.com/search?q=test" + searchText;
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
        }
    },
}
</script>

<style>
.app-searchbox-container{
    width: 600px;
    height: 120px;
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
    width: 35px;
    height: 35px;
}

.app-searchbox input{
    height: 50px;
    width: 380px;
    margin-left: 0;
    margin-right: auto;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: transparent;
    padding: 0 10px;
    transition: 0.3s all;
}

.app-searchbox-icon{
    opacity: 0;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s all;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.app-searchbox-icon img{
    width: 25px;
    height: 25px;
}

.app-searchbox-icon:hover{
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
}
</style>