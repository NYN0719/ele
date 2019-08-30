<template>
  <dir>
    <div v-for="(item,idx) in list" :key="idx">
      <router-link to="/about">
        <div class="img-box">
          {{item}}
        </div>
      </router-link>
    </div>
  </dir>
</template>

<script>
export default {
    props:['list'],
    data(){
      return {

      }
    },
    created(){

    },
    methods:{

    },
};
</script>

<style scoped>
</style>