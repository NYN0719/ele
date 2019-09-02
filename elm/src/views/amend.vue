<template>
    <div class="amend">
        <head-bar>
           
            <template v-slot:left>&lt</template>
           
            <slot class="mi">密码登录</slot>           
        </head-bar>
        <ul>
            <li>
                <input type="text" placeholder="账号" v-model="user">
            </li>
            <li></li>
            <li style="position:relative">
                <input :type="a" placeholder="密码" v-model="pass">
                
            </li>
            <li></li>
            <li>
                <input type="text" placeholder="验证码" v-model="yanmodel">
                <img :src="yanurl" alt="" style="width:200px;height:100px;">
                <span @click="random">换一张</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
*{
	margin:0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
.clearfix:before,.clearfix:after {
			content: '';
			display: table;
		}
		.clearfix:after {
			clear: both;
		}
		.clearfix {
			zoom: 1;
		}
.amend{
    width: 750px;
    background: #f5f5f5;
    height: auto;
   
}

ul{
    width: 750px;
     margin-top: 30px;
     height: auto;
}
li{
    width: 750px;
    height: 110px;
    border-bottom: 1px solid #ccc;
    background: #fff;
    line-height: 110px;
    font-size: 35px;
    color: #3d3d3d;
    padding-left: 30px;
    box-sizing: border-box;
}
li input{
    height: 35px;
    width: 400px;
    font-size: 35px;
    outline: none;
    border: none;
}
</style>
