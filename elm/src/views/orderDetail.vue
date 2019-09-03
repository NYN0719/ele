<template>
  <div class="orderDetail">
    <head-bar>
      <template v-slot:left>
        <router-link to>&lt;</router-link>
      </template>
      <template v-slot:center>订单详情</template>
    </head-bar>
    <div class="orderShow">
      <img :src="'//elm.cangdu.org/img/'+order_detail_lists.restaurant_image_url" />
      <p>{{order_detail_lists.status_bar.title}}</p>
      <router-link to>再来一单</router-link>
    </div>
    <div class="shopShow">
      <h3>
        <img :src="'//elm.cangdu.org/img/'+order_detail_lists.restaurant_image_url" />
        <span>{{order_detail_lists.restaurant_name}}</span>
      </h3>
      <div class="food_count" v-for="(item,idx) in order_detail_lists.basket.group[0]" :key="idx">{{item.name}}</div>
      <div>
        <span>{{order_detail_lists.basket.deliver_fee.name}}</span>
        <span>{{order_detail_lists.basket.deliver_fee.price}}</span>
      </div>
      <div class="rel_price">
            实付{{order_detail_lists.basket.packing_fee.price}}
      </div>
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
      addressDetail_msg:'',
    };
  },
  created() {
    //   http://elm.cangdu.org/bos/v1/users/12/orders/11765/snapshot
    this.$axios
      .get('http://elm.cangdu.org/bos/v1/users/1/orders/'+this.$route.params.orderIdx+'/snapshot')
      .then(data => {
        this.order_detail_lists = data.data._doc;
        this.addressDetail_msg = data.data
        console.log(data.data);
      });
  },
  methods: {}
};
</script>