<template>
  <div class="home">
    <head-bar>
      <template v-slot:left>ele.m</template>
      <template v-slot:center>我的</template>
      <template v-slot:right>登录|注册</template>
    </head-bar>

    <div>
      <shop-list :list="item"> </shop-list>
      <img :src="yanUrl" />
      
    </div>
    <alert-window></alert-window>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import headBar from "@/components/headBar.vue";
import footerBar from "@/components/footerBar.vue";
import shopList from "@/components/shopList.vue";
import alertWindow from "@/components/alertWindow.vue";

export default {
  name: "home",
  components: {
    headBar,
    footerBar,
    shopList,
    alertWindow,
  },
  data() {
    return {
      item: 6,
      yanUrl: ""
    }
  },
  created() {
    this.$axios.post("http://elm.cangdu.org/v1/captchas").then(data => {
      this.yanUrl = data.data.code
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 730px;
  height: 60px;
  line-height: 60px;
  padding: 10px;
  font-size: 26px;
  background: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  /* z-index: 100px; */
}
.t_head_left {
  width: 50%;
  height: 60px;
  float: left;
}
.t_head_right {
  width: 50%;
  height: 60px;
  float: right;
}
</style>