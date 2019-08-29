<template>
  <footer>
    <router-link to="" @click.native="num=0">
      <i class="iconfont icon-SSS" :class="{active:num==0}"></i>
      <p>外卖</p>
    </router-link>
    <router-link @click.native="num=1" to="">
      <i class="iconfont icon-dingdan" :class="{active:num==1}"></i>
      <p>搜索</p>
    </router-link>
    <router-link to="" @click.native="num=2">
      <i class="iconfont icon-zhinanzhen" :class="{active:num==2}"></i>
      <p>订单</p>
    </router-link>
    <router-link to="" @click.native="num=3">
      <i class="iconfont icon-wode" :class="{active:num==3}"></i>
      <p>我的</p>
    </router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  }
};
</script>

<style scoped>
@import './../assets/css/icon_footer/iconfont.css';
footer {
  width: 100%;
  line-height: 0.8rem;
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  padding-top: 0.2rem;
  box-sizing: border-box;
}
.iconfont{
  font-size: 0.6rem;
}
.active {
  color: rgb(49, 144, 232);
}
footer a {
  text-decoration: none;
  display: inline-block;
  flex: 1;
  color: #666;
  font-size: 0.2rem;
  text-align: center;
}
footer a>p{
  line-height: 0.3rem;
}
</style>