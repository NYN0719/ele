<template>
  <div class="myself">
    <head-bar>
      <template v-slot:left>
        <router-link to>&lt;</router-link>
      </template>
      <template v-slot:center>我的</template>
    </head-bar>

    <footer-bar :num="3"></footer-bar>
  </div>
</template>

<script>
import headBar from "@/components/headBar.vue";
import footerBar from "../components/footerBar";
export default {
  components: {
    footerBar,
    headBar,
  }
};
</script>

<style scoped>
</style>