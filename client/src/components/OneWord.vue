<template>
  <div class="app-oneword">
    <span>{{ text }}</span>
  </div>
</template>

<script>
import axios from "axios";
import dom from "@/utils/dom";

export default {
  data() {
    return {
      text: "",
    };
  },

  created() {
    this.getWord();

    setTimeout(() => {
      let word = dom.getEntity("app-oneword", 0);
      word.style.opacity = "1";
    }, 500);
  },

  methods: {
    getWord() {
      axios.get("https://v1.hitokoto.cn/?c=d&c=i&encode=json").then((res) => {
        this.text = ` 「 ${res.data.hitokoto} 」 `;
      });
    },
  },
};
</script>

<style>
@media screen and (max-width: 1000px) {
  .app-oneword {
    opacity: 0;
    margin-top: auto;
    margin-bottom: 50px;
    transition: 0.3s all;
  }

  .app-oneword span {
    font-size: 35px;
    color: rgba(255, 255, 255, 0.7);
  }
}

@media screen and (min-width: 1000px) {
  .app-oneword {
    opacity: 0;
    margin-top: auto;
    margin-bottom: 50px;
    transition: 0.3s all;
  }

  .app-oneword span {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>