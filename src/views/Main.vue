<template>
  <div class="app-background">
		<div class="app-container">
			<!-- 导航栏 -->
			<NavBar />

			<!-- 时间 -->
			<DateTime />

			<!-- 搜索栏 -->
			<SearchBox />
		</div>
	</div>
</template>

<script>
//Components
import NavBar from "@/components/NavBar.vue";
import DateTime from "@/components/DateTime.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  components: {
		NavBar,
		DateTime,
		SearchBox
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
	background-image: url("https://tvax1.sinaimg.cn/large/bfe05ea9ly1fxgv3f6vjyj21hc0u07df.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

.app-container{
	width: 100vw;
	height: 100vh;
  backdrop-filter: blur(10px);
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>