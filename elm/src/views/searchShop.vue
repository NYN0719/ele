<template>
  <div class="shop">
    <nav class="goback">
      <router-link to>&lt;</router-link>
    </nav>
    <header :style="{backgroundImage:'url(//elm.cangdu.org/img/'+shop_details.image_path+')'}">
      <router-link to>
        <div class="shop_detail">
          <div class="shop_cover">
            <img :src="'//elm.cangdu.org/img/'+shop_details.image_path" alt />
          </div>
          <div class="shop_detail_lists">
            <p>{{shop_details.name}}</p>
            <p>商家配送/分钟送达/{{shop_details.piecewise_agent_fee.tips}}</p>
            <p>公告：{{shop_details.promotion_info}}</p>
          </div>
          <div>&gt;</div>
        </div>
      </router-link>
      <router-link to>
        <div class="shop_active" v-for="(item,idx) in shop_details.activities" :key="idx">
          <i class="jian">{{item.icon_name}}</i>{{item.description}} (APP专享)
          <span>{{shop_details.activities.length}}个活动&gt;</span>
        </div>
      </router-link>
    </header>
    <shop-list></shop-list>
  </div>
</template>

<script>
import shopList from '../components/shopList'
export default {
  components:{shopList},
  data() {
    return {
      shop_details: ""
    };
  },
  created() {
    // https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1
    this.$axios
      .get("https://elm.cangdu.org/shopping/restaurant/3387")
      .then(data => {
        console.log(data.data);
        this.shop_details = data.data;
      });
  }
};
</script>

<style scoped>
.shop {
  width: 100%;
  height: 100%;
  position: relative;
}
.goback {
  width: 100%;
  line-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(200, 200, 200, .5)
}
.goback a{
  font-size: 0.5rem;
  font-weight: 600;
}
.shop a{
  color: white;
}
header {
  min-height: 200px;
  background-size: cover;
  color: white;
}
header .shop_detail,
header .shop_active {
  background-color: rgba(119, 103, 137, 0.43);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
.shop_detail {
  height: 200px;
  padding: 0.4rem 0.4rem 0 0.4rem;
}
.shop_detail > div {
  float: left;
}
.shop_detail > div:last-of-type {
  float: right;
  line-height: 200px;
  font-size: 0.6rem;
  font-weight: 600;
}
.shop_cover {
  width: 150px;
  height: 150px;
}
.shop_cover img {
  width: 100%;
  height: 100%;
}
.shop_active {
  line-height: 80px;
  padding: 0 0.4rem;
  font-weight: 400;
  font-size: 0.4rem;
}
.jian {
  font-style: normal;
  background-color: rgb(240, 115, 115);
  border-color: rgb(240, 115, 115);
}
.shop_active span{
    float: right;
}
</style>