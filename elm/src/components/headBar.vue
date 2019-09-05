<template>
  <div>
    <header>
      <div class="left">
        <slot name="left">{{back}}</slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  props: { back: { type: String } },
  created() {
    console.log(this.back);
  }
};
</script>
<style scoped>
header {
  height: 1rem;
  background: #3190e8;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.4rem;
  display: flex;
}
header > div {
  text-align: center;
  flex: 2;
}
header > div:nth-of-type(2) {
  flex: 6;
}
</style>