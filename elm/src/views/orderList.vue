// 订单
<template>
  <div class="order">
    <head-bar>
      <template v-slot:left>
        <router-link to>&lt;</router-link>
      </template>
      <template v-slot:center>订单列表</template>
    </head-bar>
    <div class="lists">
      <div v-for="(item,idx) in order_list" :key="idx">
        <div class="cover">
          <img :src="'http://elm.cangdu.org/img/'+item.restaurant_image_url" alt srcset />
        </div>
        <div class="des_shop">
          <h4>
            <span>{{item.restaurant_name}}</span>
            <span>{{item.status_bar.title}}</span>
            <span>{{item.status_bar.sub_title}}</span>
          </h4>
          <p class="time">{{item.formatted_created_at}}</p>
          <div class="shops">
            <span class="shoplist">{{item.basket.group[0][0].name}}</span>
            <span class="price">{{item.basket.group[0][0].price}}元</span>
            <span class="num">{{item.basket.group[0][0].quantity}}个</span>
          </div>
        </div>
      </div>
    </div>
    <footer-bar :num="2"></footer-bar>
  </div>
</template>

<script>
// import headBar from "../components/headbar.vue";
import footerBar from "../components/footerBar";
export default {
  components: {
    footerBar,
    // headBar
  },
  data() {
    return {
      order_list: []
    };
  },
  created() {
    this.$axios
      .get("https://elm.cangdu.org/bos/v2/users/1/orders?limit=10&offset=0")
      .then(data => {
        console.log(data.data);
        this.order_list = data.data;
      });
  },
  methods: {}
};
</script>

<style scoped>
.lists > div {
  width: 100%;
  height: 150px;
  padding: 0.2rem 0 0.2rem 0.4rem;
}
.lists > div > div {
  float: left;
}
.cover {
  width: 10%;
  height: 80px;
}
.cover img {
  width: 100%;
  height: 100%;
}
.des_shop{
    width: 90%;
}
</style>