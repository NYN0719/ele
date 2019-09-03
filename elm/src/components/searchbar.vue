<template>
	<div>
		<!-- 城市搜索的头部 -->
		<header class="header">
			<div>
			  	<div class="changecity">
			  		<slot name="changecity"></slot>
			  	</div>
	          	<div class="searchjt">
	          		<slot name="searchjt"></slot>
	          	</div>
	          	<p class="jumpcity">
	          		<slot name="jumpcity"></slot>
	          	</p>
	        </div>
		</header>
	</div>
</template>

<script>
	export default{

	}
</script>

<style>
	a{text-decoration: none;}
	.header{
		width: 720px;
		height: 70px;
		line-height: 70px;
		font-size: 30px;
		padding: 15px;
		background: #3190e8;
		text-align: center;
	}
    .searchjt{
    	width: 20px;
    	height: 70px;
     	float: left;
      	/* font-size:26rem; */
    }
     .jumpcity{
    	/* font-size:26px; */
    	text-align: center;
    }
    .changecity{
      width: 120px;
      height: 70px;
      text-align: center;
      float: right;
      /* font-size:26px; */
    }
</style>