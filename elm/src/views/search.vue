<template>
  <div class="search">
    <div class="content">
      <div class="header" style="width:100%;height:50px;line-height:50px;">
       <p style="text-align:center;color:#fff;">
         <router-link to="/Xiangqing">
           <span style="font-size:22px;color:#fff;text-align:left;display:inline-block;float:left;"><</span>
         </router-link>
         搜索</p>
        
      </div>
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
              console.log(data)
            })
        }
    },
    created(){
      this.search()
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
}
.sraech_input {
  width: 100%;
  height: 120px;
  padding:20px 20px;
}
.sraech_input > input {
  float: left;
  width: 80%;
  margin-right: 10px;
  height: 100%;
  font-size:40px;
  font-weight: 500;
  background: #f2f2f2;
  outline: none;
  border-radius:5px;
  border: 1px solid #e4e4e4;
}
.sraech_input > button {
  float: left;
  width: 18%;
  height: 100%;
}
</style>