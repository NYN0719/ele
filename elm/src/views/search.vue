<template>
  <div class="search">
    <head-bar>
      <template v-slot:left>
        <router-link to="/Xiangqing" style="font-size:20px;color:#fff;">&lt;</router-link>
      </template>
      <template v-slot:center>搜索</template>
    </head-bar>
    <div class="content">
      <div class="sraech_input">
        <input type="text" v-model="search_keyword" placeholder="请输入商家或美食名称" />
        <button @click="search()">提交</button>
      </div>
      <router-link
        :to="'/searchShop/'+item.id"
        v-for="(item,idx) in search_show"
        :key="idx"
        v-if="search_show.status!=0"
      >
        <div class="shop_lists">
          <div class="cover_shop">
            <img :src="'//elm.cangdu.org/img/'+item.image_path" alt="图片加载失败" />
          </div>
          <div class="msgs_shop">
            <div class="shop_name">
              {{item.name}}
              <i>支付</i>
            </div> 
            <div class="month_count">月售 {{item.recent_order_num}} 单</div>
            <div class="lilter_mi">
              <span>{{item.float_minimum_order_amount}}元起送 /</span>
              <span>距离{{item.distance}}</span>
            </div>
          </div>
        </div>
      </router-link>
      <div v-if="search_show.status==0">{{search_show.message}}</div>
    </div>
    <footer-bar :num="1"></footer-bar>
  </div>
</template>

<script>
import headBar from "@/components/headBar.vue";
import footerBar from "../components/footerBar";
export default {
  components: {
    footerBar,
    headBar,
  },
  data() {
    return {
      search_keyword: "",
      search_show: ""
    };
  },
  methods: {
    search() {
      // http://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=31.22299,121.36025&keyword=%E6%88%91&type=search
      this.$axios
        .get(
          `https://elm.cangdu.org/v4/restaurants?geohash=31.22299,121.36025&keyword=${this.search_keyword}`
          ,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        )
        .then(data => {
          console.log(data.data);
          this.search_show = data.data;
        });
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.search a {
  color: #000000;
}
.content {
  width: 100%;
  height: auto;
  padding: 0 0.2rem;
}
.sraech_input {
  width: 100%;
  height: 80px;
  margin-top: 0.2rem;
}
.sraech_input > input {
  float: left;
  width: 80%;
  height: 80%;
  font-size: 0.5rem;
  border: 1px solid #000000;
}
.sraech_input > button {
  float: left;
  width: 15%;
  height: 80%;
}
.shop_lists {
  min-height: 150px;
}
.shop_lists > div {
  float: left;
}
.cover_shop {
  width: 120px;
  height: 120px;
}
.cover_shop img {
  width: 100%;
  height: 100%;
}
.msgs_shop {
  padding-left: 0.2rem;
}
.msgs_shop > div {
  margin: 0.1rem 0;
}
.shop_name i {
  padding: 0.03rem;
  border-radius: 10px 0;
  color: #f60;
  fill: rgb(255, 96, 0);
  font-size: 9px;
  font-weight: bold;
  border: 1px solid #f60;
}
</style>