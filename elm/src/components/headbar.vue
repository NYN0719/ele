<template>
	<div class="fixedhead">
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
	.header{
		width: 720px;
		height: 70px;
		line-height: 70px;
		font-size: 40px;
		padding: 15px;
		color: #fff;
		background: #3190e8;
		text-align: center;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
		background: red;
	}
</style>