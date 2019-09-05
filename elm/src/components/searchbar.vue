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
				<div class="abc">
					<slot name="abc">741</slot>
				</div>
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
		width: 90%;
		height: 30px;
		line-height: 30px;
		font-size: 30px;
		padding: 15px;
		background: #3190e8;
		text-align: center;
	}
    .searchjt{
    	width: 20px;
    	height: 30px;
     	float: left;
      	/* font-size:26rem; */
    }
    .changecity{
      width: 120px;
      height: 30px;
      text-align: center;
      float: right;
      /* font-size:26px; */
    }
	.abc{
		line-height: 55px;
		text-align: center;
	}
</style>