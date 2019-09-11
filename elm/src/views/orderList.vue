// 订单
<template>
  <div class="order">
    <head-bar>
      <template v-slot:left>
        <router-link to="/myself" style="font-size:20px;color:#fff;">&lt;</router-link>
      </template>
      <template v-slot:center>订单列表</template>
    </head-bar>
    <div class="lists">
      <router-link :to="'/orderDetail/'+item.id"  v-for="(item,idx) in order_list" :key="idx">
        <div>
          <div class="cover">
            <img :src="'http://elm.cangdu.org/img/'+item.restaurant_image_url" alt srcset />
          </div>
          <div class="des_shop">
            <h4>
              <span class="order_name">{{item.restaurant_name}}</span>
              <span class="order_time_type">{{item.status_bar.title}}</span>
            </h4>
            <p class="order_time_detail">{{item.formatted_created_at}}</p>
            <div class="shops">
              <span class="shoplist">{{item.basket.group[0][0].name}}</span>
              <span class="price">
                <span>￥{{item.total_amount}}元</span>
              </span>
              <!-- <span class="num">{{item.basket.group[0][0].quantity}}个</span> -->
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <footer-bar :num="2"></footer-bar>
  </div>
</template>

<script>
import headBar from "@/components/headBar.vue";
import footerBar from "../components/footerBar";
export default {
  components: {
    footerBar,
    headBar
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
        this.order_list = data.data;
        console.log(data.data)
      });
  },
  methods: {}
};
</script>

<style scoped>
.lists >a{
  color: #000000;
}
.lists > a > div {
  width: 100%;
  height: 150px;
  padding: 0.2rem 0 0.2rem 0.4rem;
}
.lists > a > div > div {
  float: left;
}
.cover {
  width: 12%;
  height: 100px;
}
.cover img {
  width: 100%;
  height: 100%;
}
.des_shop {
  width: 88%;
  padding-left: 0.2rem;
}
.des_shop h4 {
  font-size: 0.5rem;
  font-weight: 400;
}
.des_shop h4 .order_time_type {
  font-size: 0.4rem;
  font-weight: 400;
  float: right;
  margin-right: 0.3rem;
}
.order_time_detail {
  font-weight: 300;
  font-size: 0.3rem;
}
.price {
  float: right;
  font-size: 0.4rem;
  color: #f60;
  margin-right: 0.3rem;
}
</style>