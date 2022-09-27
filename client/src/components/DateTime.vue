<template>
  <div class="app-datetime">
    <span>{{ time }}</span>
    <span>{{ date }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      date: "",
      timer: null,
    };
  },

  mounted() {
    if (this.timer == null) {
      this.getTime();
      this.getDate();
      this.timer = setInterval(() => {
        this.getTime();
        this.getDate();
      }, 30000);
    }
  },

  beforeDestroy() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  methods: {
    getTime() {
      let date = new Date();
      let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
      let minute =
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      this.time = `${hour}:${minute}`;
    },

    getDate() {
      let weekFormat = {
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        0: "日",
      };
      let date = new Date();
      let month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
      let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      let week = weekFormat[date.getDay()];
      this.date = `${month}月${day}日 星期${week}`;
    },
  },
};
</script>

<style>
@media screen and (max-width: 1000px) {
  .app-datetime {
    width: 800px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
  }

  .app-datetime span {
    font-size: 100px;
    font-weight: bold;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.7);
  }

  .app-datetime span:nth-child(2) {
    font-size: 40px;
    letter-spacing: 0;
    font-weight: normal;
  }
}

@media screen and (min-width: 1000px) {
  .app-datetime {
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }

  .app-datetime span {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.7);
  }

  .app-datetime span:nth-child(2) {
    font-size: 12px;
    letter-spacing: 0;
    font-weight: normal;
  }
}
</style>