<template>
  <div class="mssg_shop">
    <div class="shop_evaluate">
      <div
        class="shop_list_mssg"
        @click="color_s = true"
        :class="color_s==true?'active_clo_bor':''"
      >商品</div>
      <div
        class="shop_list_evaluate"
        @click="color_s = false"
        :class="color_s==false?'active_clo_bor':''"
      >评价</div>
    </div>
    <div class="shop_menu_details">
      <div class="shop_menu_types">
        <div
          v-for="(item,idx) in shop_details_msgs"
          :key="idx"
          @click="change_bor(idx,item.id)"
          :class="menu_idx == idx ? 'active_bor_left':''"
        >{{item.name}}</div>
      </div>
      <div class="shop_menu_all_mssg">
        <!-- <div>{{shop_list_name}}{{shop_description}}</div> -->
        <div v-for="(food_s,foodidx) in shop_details_msgs[menu_idx].foods" :key="foodidx">
          <div class="shop_img_url">
            <img :src="'//elm.cangdu.org/img/'+food_s.image_path" alt srcset />
          </div>
          <div class="shop_description_details">
            <h3>{{food_s.name}}</h3>
            <div>{{food_s.description}}</div>
            <div>月售{{food_s.month_sales}}份 好评率{{food_s.satisfy_rate}}%</div>
            <div class="shop_activity" v-if="food_s.activity!=null">{{food_s.activity.image_text}}</div>
            <div>
              <span>{{food_s.specfoods[0].price}}起</span>
              <span v-if="food_s.specfoods.length>1">选规格</span>
              <span v-else>+</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      menu_idx: 0,
      color_s: true,
      shop_details_msgs: "",
      shop_id: "",
      shop_list_name: "",
      shop_description: ""
    };
  },
  created() {
    this.shopLists();
  },
  methods: {
    change_bor(idx, id) {
      this.menu_idx = idx;
      this.shop_id = id;
    },
    shopLists() {
      this.$axios
        // id = 1   1 为路由传的id  3387  等  this.$roote.params.shopID  可以取到
        .get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1`)
        .then(data => {
          this.shop_details_msgs = data.data;
        });
    }
  }
};
</script>

<style scoped>
.mssg_shop {
  height: 13rem;
}
.shop_evaluate {
  line-height: 120px;
  display: flex;
}
.shop_evaluate > div {
  flex: 1;
  text-align: center;
  font-size: 0.4rem;
}
.active_clo_bor {
  color: #3190e8;
  border-bottom: 1px solid #3190e8;
}
.active_bor_left {
  border-left: 5px solid #3190e8;
}
.shop_menu_details {
  height: 100%;
  display: flex;
}
.shop_menu_details > div {
  float: left;
}
.shop_menu_details .shop_menu_types {
  flex: 2;
  height: 100%;
  line-height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-indent: 0.2rem;
  overflow-y: scroll;
}
.shop_menu_details .shop_menu_all_mssg {
  flex: 8;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
.shop_menu_all_mssg > div {
  height: 150px;
}
.shop_menu_all_mssg > div > div {
  float: left;
}
.shop_activity {
  color: rgb(241, 136, 79);
  border-color: rgb(240, 115, 115);
}
</style>