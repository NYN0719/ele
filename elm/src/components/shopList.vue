<template>
  <div class="mssg_shop">
    <div class="shop_evaluate">
      <div
        class="shop_list_mssg"
        @click="color_s = true,shop=true,Tag=false"
        :class="color_s==true?'active_clo_bor':''"
      >商品</div>
      <div
        class="shop_list_evaluate"
        @click="color_s = false,Tag=true,shop=false"
        :class="color_s==false?'active_clo_bor':''"
      >评价</div>
    </div>
    <!-- 商品 -->
    <div class="shop_menu_details" v-show="shop">
      <div class="shop_menu_types">
        <div
          v-for="(item,idx) in shop_details_msgs"
          :key="idx"
          @click="change_bor(idx,item.id)"
          :class="menu_idx == idx ? 'active_bor_left':''"
        >{{item.name}}</div>
      </div>
      <div class="shop_menu_all_mssg">
        <!-- <div>{{shop_details_msgs[0]}}</div> -->
        <div v-for="(food_all,foodidx) in shop_details_msgs[menu_idx].foods" :key="foodidx">
          <div class="shop_img_url">
            <img :src="'//elm.cangdu.org/img/'+food_all.image_path" alt srcset />
          </div>
          <div class="shop_description_details">
            <h3>{{food_all.name}}</h3>
            <div>{{food_all.description}}</div>
            <div>月售{{food_all.month_sales}}份 好评率{{food_all.satisfy_rate}}%</div>
            <div
              class="shop_activity"
              v-if="food_all.activity!=null"
            >{{food_all.activity.image_text}}</div>
            <div class="add_shop">
              <span>
                <i>￥{{food_all.specfoods[0].price}}</i>起
              </span>
              <span v-if="food_all.specfoods.length>1">
                <button>选规格</button>
              </span>
              <span v-else>
                <button>+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 评价 -->
    <div class="shop_tags" v-show="Tag">
      <div class="users_scores">
        <div class="overall_score">
          <div>{{scores.overall_score.toFixed(1)}}</div>
          <div>综合评价</div>
          <div>
            高于周边商家
            <span>{{(scores.compare_rating*100).toFixed(1)}}</span> %
          </div>
        </div>
        <div class="service_score">
          <div>
            服务态度
            <i
              v-for="(item,idx) in Math.ceil(scores.service_score)"
              :key="idx"
              class="iconfont icon-star"
            ></i>
            <span>{{scores.service_score.toFixed(1)}}</span>
          </div>
          <div>
            菜品评价
            <i
              v-for="(item,idx) in Math.ceil(scores.service_score)"
              :key="idx"
              class="iconfont icon-star"
            ></i>
            <span>{{scores.food_score.toFixed(1)}}</span>
          </div>
          <div>
            送达时间
            <span>{{scores.deliver_time}}</span> 分钟
          </div>
        </div>
      </div>
      <div class="user_tags">
        <span
          v-for="(item,idx) in user_tags_type"
          :key="idx"
          @click="tags_idx=idx"
          :class="tags_idx==idx?'active_bkdAndColor_tags':''"
        >{{item.name}}({{item.count}})</span>
      </div>
      <div class="user_tags_scores">
        <div v-for="(item,idx) in user_tag" :key="idx" class="clearfix">
          <div class="user_path_url">
            <img
                  v-show="item.avatar.length>0"
                  :src="'https://fuss10.elemecdn.com/'+ item.avatar.charAt(0)+'/'+item.avatar.charAt(1)+item.avatar.charAt(2)+'/'+item.avatar.substring(3)+'.jpeg'"
                />
            <img v-show="item.avatar.length<=0" src="//elm.cangdu.org/img/default.jpg" />
          </div>
          <div class="users_scores_text">
            <div>
              {{item.username}}
              <span style="float:right;">{{item.rated_at}}</span>
              
            </div>
            <div>
              <i
                v-for="(star,star_idx) in item.rating_star"
                :key="star_idx"
                class="iconfont icon-star"
              ></i>
              {{item.time_spent_desc}}
            </div>
            <div class="users_scores_img">
              <div
                v-if="item.item_ratings.length!=0"
                v-for="(food_users,foodCount) in item.item_ratings"
                :key="foodCount"
              >
                <img
                  v-if="food_users.image_hash!=''"
                  :src="'https://fuss10.elemecdn.com/'+ food_users.image_hash.charAt(0)+'/'+food_users.image_hash.charAt(1)+food_users.image_hash.charAt(2)+'/'+food_users.image_hash.substring(3)+'.jpeg'"
                />
                <p v-if="food_users.food_name!=''">{{food_users.food_name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="loading_more" @click="user_tags()">更多评论</div>
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
      shop_description: "",
      user_tag: [],
      shop: true,
      Tag: false,
      scores: {},
      user_tags_type: [],
      tags_idx: 0,
      user_limit:40,
    };
  },
  created() {
    this.shopLists();
    this.user_tags();
    this.scores_counts();
    this.tags_type();
  },
  methods: {
    change_bor(idx, id) {
      this.menu_idx = idx;
      this.shop_id = id;
    },
    //商品
    shopLists() {
      // https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings
      // https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10
      this.$axios
        // id = 1   1 为路由传的id  3387  等  this.$roote.params.shopID  可以取到
        .get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1")
        .then(data => {
          // console.log(data);
          this.shop_details_msgs = data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //评价
    user_tags() {
      // https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings
      // http://elm.cangdu.org/ugc/v2/restaurants/1/ratings?has_content=true&offset=0&limit=10&tag_name=
      // https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10
      this.$axios
        // id = 1   1 为路由传的id  3387  等  this.$roote.params.shopID  可以取到
        .get(
          'https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10'
        )
        .then(data => {
          console.log(data.data);
          data.data.map((item)=>{
            this.user_tag.push(item)
          })
          // this.user_tag = data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //评价分数
    scores_counts() {
      this.$axios
        // id = 1   1 为路由传的id  3387  等  this.$roote.params.shopID  可以取到
        .get("https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores")
        .then(data => {
          this.scores = data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 示例：评价分类
    tags_type() {
      this.$axios
        // id = 1   1 为路由传的id  3387  等  this.$roote.params.shopID  可以取到

        .get("https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags")
        .then(data => {
          this.user_tags_type = data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
// https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings/scores
// 示例：评价分数   scores:{},

// https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores

// https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings/tags
// 示例：评价分类// user_tags_type:[]
// https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags
</script>

<style scoped>
.mssg_shop {
  height: 16rem;
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
  min-height: 150px;
  overflow: hidden;
  margin: 0.3rem 0;
}
.shop_menu_all_mssg > div > div {
  float: left;
}
.shop_activity {
  color: rgb(241, 136, 79);
  border-color: rgb(240, 115, 115);
}
.shop_img_url {
  width: 150px;
  height: 150px;
}
.shop_img_url img {
  width: 100%;
  height: 100%;
}
.shop_menu_all_mssg .shop_description_details {
  width: 400px;
  overflow: hidden;
  padding-left: 0.2rem;
}
.add_shop button {
  padding: 0.1rem 0.2rem;
  border-radius: 0.4rem;
  background-color: #3190e8;
  color: white;
  font-size: 0.2rem;
}
.add_shop span:first-of-type i {
  font-size: 0.5rem;
  color: #f60;
  font-style: normal;
  font-weight: 600;
}
.add_shop span:last-of-type {
  float: right;
}
.shop_tags {
  height: 14rem;
  overflow-y: scroll;
}
.users_scores > div {
  float: left;
}
.overall_score {
  width: 40%;
  padding: 20px;
}
.overall_score > div {
  text-align: center;
}
.overall_score > div:first-of-type {
  font-size: 50px;
  color: #f60;
}
.overall_score > div:last-of-type {
  font-size: 20px;
  color: grey;
}
.service_score {
  width: 60%;
  padding: 20px;
}
.service_score > div {
  line-height: 46px;
  font-size: 28px;
  color: #666666;
}
.service_score > div span {
  color: #f60;
}
.active_bkdAndColor_tags {
  background-color: #3190e8;
  color: white;
}
.user_tags {
  width: 100%;
  height: auto;
  padding: 20px;
}
.user_tags > span {
  padding: 10px 8px;
  margin: 14px 10px;
  display: inline-block;
  border-radius: 6px;
}
.user_tags_scores {
  width: 100%;
  height: auto;
  padding: 10px 20px;
}
.user_tags_scores > div {
  margin-bottom: 50px;
  height: auto;
}
.user_tags_scores > div > div{
  float: left;
}
.user_tags_scores > div .user_path_url {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  margin-right: 30px;
}
.user_tags_scores > div .user_path_url img {
  width: 100%;
  border-radius: 50%;
  height: 100%;
}
.users_scores_text {
  width: 80%;
}
.users_scores_img>div{
  width: 150px;
  height: 150px;
  float: left;
  margin: 4px 10px;
}
.users_scores_img>div img{
  width: 100%;
  height: 100%;
}
.users_scores_img>div p{
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>