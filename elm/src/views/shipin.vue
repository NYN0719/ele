<template>
  <div class="box">
    <shop-list></shop-list>
  </div>
</template>
 
 
<script>
import shopList from "../components/shopList"
export default {
  components: { shopList },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  watch: {}
}; 
</script>
<style scoped>
.box {
  overflow: hidden;
  background: white;
}
.box a {
  color: dodgerblue;
}

</style>