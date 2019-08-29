<template>
  <div class="home">
    <div class="box">
    	我是
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style>
*{margin:0;padding:0;}
.box{
  width: 750px;
  height:60px;
  line-height: 60px;
  padding: 6px;
  font-size: 26px;
  background: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  /* z-index: 100px; */
}
</style>