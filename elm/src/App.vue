<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'app'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
a{
  color: white;
}
button{
  color: white;
  background-color: rgb(0, 153, 255);
  border: none;
  outline: none;
}
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
</style>
