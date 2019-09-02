<template>
	<div class="fixedhead">
		<!-- 城市主页面的头部 -->
		<header class="header">
			<slot></slot> 
			<div class="right">
				<slot name="right"></slot>
			</div>
			<div class="left">
				<slot name="left"></slot>
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
	.header,.searchheader{
		width: 720px;
		height: 70px;
		line-height: 70px;
		font-size: 30px;
		padding: 15px;
		background: #3190e8;
		text-align: center;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
</style>