<template>
  <div class="orderDetail">
    <head-bar>
      <template v-slot:left>
        <router-link to :back="123">&lt;</router-link>
      </template>
      <template v-slot:center>订单详情</template>
    </head-bar>
    <div class="orderShow">
      <img :src="'//elm.cangdu.org/img/'+order_detail_lists.restaurant_image_url" />
      <p>{{order_detail_lists.status_bar.title}}</p>
      <router-link to>再来一单</router-link>
      <!-- 再来一单和下面的链接 都调到商品页面  有评价 http://elm.cangdu.org/shopping/v2/menu?restaurant_id=1-->
    </div>
    <div class="shopShow">
      <router-link to>
        <h3>
          <img :src="'//elm.cangdu.org/img/'+order_detail_lists.restaurant_image_url" />
          <span>{{order_detail_lists.restaurant_name}}</span>
          <i>&gt;</i>
        </h3>
      </router-link>
      <div class="food_mssg" v-for="(item,idx) in order_detail_lists.basket.group[0]" :key="idx">
        <span class="foods_names">{{item.name}}</span>
        <span class="foods_counts">X{{item.quantity}}</span>
        <span class="foods_prices">￥{{item.price}}</span>
      </div>
      <div class="address_money">
        <span>{{order_detail_lists.basket.deliver_fee.name}}</span>
        <span>{{order_detail_lists.basket.deliver_fee.price}}</span>
      </div>
      <div class="rel_price">实付{{order_detail_lists.basket.packing_fee.price}}</div>
      <div class="distribution_msg">
        <h3>配送信息</h3>
        <p>送达时间：{{addressDetail_msg.deliver_time}}</p>
        <p>送货地址：{{addressDetail_msg.addressDetail}}</p>
      </div>
      <div class="order_msgs">
        <h3>订单信息</h3>
        <div>订单号：{{$route.params.orderIdx}}</div>
        <div>支付方式：{{addressDetail_msg.pay_method}}</div>
        <div>下单时间：{{order_detail_lists.formatted_created_at}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import headBar from "@/components/headBar.vue";
export default {
  components: {
    headBar
  },
  data() {
    return {
      order_detail_lists: [],
      addressDetail_msg: ""
    };
  },
  created() {
    //   http://elm.cangdu.org/bos/v1/users/12/orders/11765/snapshot
    this.$axios
      .get(
        "http://elm.cangdu.org/bos/v1/users/1/orders/" +
          this.$route.params.orderIdx +
          "/snapshot"
      )
      .then(data => {
        this.order_detail_lists = data.data._doc;
        this.addressDetail_msg = data.data;
        console.log(data.data);
      });
  },
  methods: {
    goback(){
      window.history.back()
      alert(1)
    }
  }
};
</script>

<style scoped>
.orderDetail {
  width: 100%;
  height: 100%;
}
.orderShow {
  min-height: 400px;
  text-align: center;
}
.orderShow > img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 0.3rem;
}
.orderShow p {
  font-size: 0.5rem;
  font-weight: 600;
  margin: 0.2rem 0;
}
.orderShow a {
  padding: 0.1rem 0.4rem;
  border: 1px solid #3190e8;
  font-size: 0.38rem;
  color: #3190e8;
}
.shopShow {
  min-height: 300px;
  color: #666666;
}
.shopShow a {
  color: #000;
}
.shopShow h3 {
  line-height: 100px;
}
.shopShow h3 img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
  margin-right: 0.2rem;
}
.shopShow h3 i {
  float: right;
  font-style: normal;
  margin-right: 0.3rem;
}
.food_mssg,
.address_money {
  display: flex;
  line-height: 80px;
  font-size: 0.4rem;
}
.food_mssg > span {
  flex: 5;
}
.food_mssg .foods_counts {
  color: #bbbbbb;
}
.food_mssg .foods_counts,
.food_mssg .foods_prices {
  flex: 2;
  text-align: center;
}
.address_money {
  display: flex;
}
.address_money span {
  flex: 5;
}
.address_money span:last-of-type {
  text-align: right;
  padding-right: 0.4rem;
}
.rel_price {
  text-align: right;
  font-size: 0.45rem;
  color: #fb6b23;
  border-top: 1px solid #f5f5f5;
  font-weight: 700;
  line-height: 1.6rem;
  padding-right: 0.5rem;
}
.distribution_msg , .order_msgs{
  padding-left: 0.2rem;
}
.distribution_msg p ,.order_msgs div{
  font-size: 0.4rem;
  line-height: 80px;
}
.distribution_msg h3 ,.order_msgs h3{
  font-size: 0.6rem;
  color: black;
}
</style>