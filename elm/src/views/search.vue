<template>
  <div class="search">
    <div class="content">
      <div class="sraech_input">
        <input type="text"  v-model="search_keyword" placeholder="请输入商家或美食名称"/>
        <button @click="search()">提交</button>
      </div>
    </div>
    <footer-bar :num="1"></footer-bar>
  </div>
</template>

<script>
// import headBar from "../components/headbar.vue";
import footerBar from "../components/footerBar";
export default {
  components: {
    footerBar,
    // headBar
  },
  data(){
      return {
          search_keyword:'',
      }
  },
    methods:{
        search(){
            this.axios.get(`https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=${this.search_keyword}`)
            .then(data=>{
              
            })
        }
    }
};
</script>

<style scoped>
.sraech {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
</style>