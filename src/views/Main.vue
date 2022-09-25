<template>
  <div class="app-background" :style="{ backgroundImage: `url('${backgroundUrl}')` }">
		<div class="app-container" :style="{ backdropFilter: `blur(${$store.state.userData.backBlur}px)` }">
			<!-- 导航栏 -->
			<NavBar />

			<!-- 时间 -->
			<DateTime />

			<!-- 搜索栏 -->
			<SearchBox />

			<!-- 选项侧边栏 -->
			<Setting />

			<!-- 一言 -->
			<OneWord />
		</div>
	</div>
</template>

<script>
//Components
import NavBar from "@/components/NavBar.vue";
import DateTime from "@/components/DateTime.vue";
import SearchBox from "@/components/SearchBox.vue";
import Setting from "@/components/Setting.vue";
import OneWord from "@/components/OneWord.vue";

export default {
  components: {
		NavBar,
		DateTime,
		SearchBox,
		Setting,
		OneWord
  },

  created() {
	document.title = "拉布拉页"
	this.backgroundUrl = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)];
  },

  data() {
	return {
		backgrounds:[
			"https://images.pexels.com/photos/9921401/pexels-photo-9921401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/9941707/pexels-photo-9941707.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "https://images.pexels.com/photos/9921341/pexels-photo-9921341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/11739438/pexels-photo-11739438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/9921356/pexels-photo-9921356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		],

		backgroundUrl: ""
	}
  },
};
</script>

<style>
html, body{
	margin: 0;
	padding: 0;
}

@font-face {
	font-family: "PingFang";
	src: url("@/assets/font/pingfang.ttf");
}

*{
	font-family: "PingFang";
	user-select: none;
}

.app-background {
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

.app-container{
	width: 100vw;
	height: 100vh;
  	/* backdrop-filter: blur(10px); */
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>