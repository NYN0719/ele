<template>
  <div class="myself">
    <head-bar>
      <template v-slot:left>
        <router-link to>&lt;</router-link>
      </template>
      <template v-slot:center>我的</template>
    </head-bar>

    <div class="detail_my">
      <!-- 头像 -->
      <div class="my_header">
        <div class="header_img">
          <img :src="'http://elm.cangdu.org/img/'+user_details.avatar" />
        </div>
        <div class="my_name">
          <h3>{{user_details.username}}</h3>
          <div v-if="user_details.mobile"></div>
          <div v-else><i class="iconfont icon-phone"></i>暂无绑定手机号</div>
        </div>
        <div class="my_link">
          <router-link to>&gt;</router-link>
        </div>
      </div>
      <!-- 余额 优惠 积分 -->
      <div class="my_msg">
        <router-link to>
          <div class="my_balance">
            <div>
              <span>
                <i>0.00</i> 元
              </span>
            </div>
            <div>我的余额</div>
          </div>
        </router-link>
        <router-link to>
          <div class="my_discounts">
            <div>
              <span>
                <i>3</i> 个
              </span>
            </div>
            <div>我的优惠</div>
          </div>
        </router-link>
        <router-link to>
          <div class="my_integral">
            <div>
              <span>
                <i>0</i> 分
              </span>
            </div>
            <div>我的积分</div>
          </div>
        </router-link>
      </div>
      <!-- 列表跳转 -->
      <div class="my_list">
        <ul class="my_list_msgs">
          <router-link :to="'/orderList'">
            <li>
              <i class="iconfont icon-dingdan1"></i>我的订单<span class="right_go">&gt;</span>
            </li>
          </router-link>
          <router-link to>
            <li><i class="iconfont icon-shangcheng"></i>积分商城<span class="right_go">&gt;</span></li>
          </router-link>
          <router-link to>
            <li><i class="iconfont icon-huangguan"></i>饿了么会员卡<span class="right_go">&gt;</span></li>
          </router-link>
        </ul>

        <ul class="public_serve">
          <router-link to="/serve">
            <li class="my_serve"><i class="iconfont icon-fwzx"></i>服务中心<span class="right_go">&gt;</span></li>
          </router-link>
          <router-link to="/download">
            <li class="my_app"><i class="iconfont icon-elem"></i>下载饿了么app<span class="right_go">&gt;</span></li>
          </router-link>
        </ul>
      </div>
    </div>

    <footer-bar :num="3"></footer-bar>
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
      user_details:'',
    };
  },
  created() {
    this.my_detail()
  },
  methods: {
    my_detail(){
      this.$axios.get('https://elm.cangdu.org/v1/user')
      .then(data=>{
        this.user_details = data.data
        console.log(data.data)
      })
    }
  }
};
</script>

<style scoped>
.right_go{
  float: right;
  margin-right: 0.3rem;
  color: #c1c1c1;
}
.myself a {
  color: #000000;
}
.detail_my {
  width: 100%;
  height: auto;
  position: relative;
}
.my_header {
  min-height: 180px;
  padding: 0.2rem 0.3rem;
  background-color: #3190e8;
}
.my_header > div {
  float: left;
  color: white;
}
.my_header a {
  color: white;
}
.header_img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.header_img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.my_name{
  width: 500px;
  height: 120px;
  overflow: hidden;
  font-size: 0.5rem;
  padding-left: 0.3rem;
}
.my_name h3{
  margin-bottom: 0.1rem;
}
.my_header .my_link {
  float: right;
  margin-right: 0.2rem;
  line-height: 120px;
}
.my_link a{
  font-size: 0.4rem;
}
.my_msg {
  width: 100%;
  display: flex;
  min-height: 180px;
  font-size: 0.5rem;
  padding: 0.4rem 0 0 0;
}
.my_msg > a {
  flex: 1;
  height: 100%;
  text-align: center;
  font-size: 0.5rem;
}
.my_msg i{
  font-size: 0.8rem;
  font-weight: 500;
  color: #f90;
}
.my_msg .my_discounts i{
  color: #ff5f3e;
}
.my_msg .my_integral i{
  color: #6ac20b;
}
.my_list{
  width: 100%;
  height: auto;
  font-size: 0.5rem;
}
.my_list .iconfont{
  font-size: 0.58rem;
}
.my_list_msgs>a,.public_serve>a{
  line-height: 80px;
}
.my_list_msgs{
  margin-bottom: 0.3rem;
}
i{
  font-style: normal;
}
</style>