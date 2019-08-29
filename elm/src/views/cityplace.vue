<template>
  <div class="home">
    <head-bar :title="'个人中心'"></head-bar>
    <br>
    <head-bar>
      <template v-slot:left>ele.m</template>
      <template v-slot:right>登录|注册</template>
    </head-bar>

    <!-- <div class="box">
    	<div class="t_head_left">
    		ele.me
    	</div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import headBar from '@/components/headBar.vue'

export default {
  name: 'home',
  components: {
    headBar
  }
}
</script>

<style>
*{margin:0;padding:0;}
.box{
  width: 750px;
  height:60px;
  line-height: 60px;
  padding: 10px;
  font-size: 26px;
  background: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  /* z-index: 100px; */
}
.t_head_left{
	width: 50%;
	height: 60px;

}
</style>