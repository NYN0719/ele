<template>
	<div>
	    <header>
		  	<p>{{this.$route.query.searchname}}
				  <router-link to="/register">
					  <span>登录|注册</span>
				  </router-link>
			  </p>
		</header>
		
		<div class="nav">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
			        	<div class="all" v-if="key<=7" v-for="i,key in alltype">
			        		<div class="icon"><img :src="typehttp + i.image_url"/></div>
			        		<div class="title">{{i.title}}</div>
			        	
			        	</div>
			        </div>
			        <div class="swiper-slide">
			        	<div class="all" v-if="key>=7&&key<=14" v-for="i,key in alltype">
			        		<div class="icon"><img :src="typehttp + i.image_url"/></div>
			        		<div>{{i.title}}</div>
			        	</div>
			        </div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div> 
			</div>
		</div>
		
		<div class="main">
			<div class="top">
				<i class="iconfont  icon-shangjia" style="font-size: 17px;margin-right: 4px;display:inline-block;width: 20px;height: 20px;"></i>
				附近商家
			</div>
			<div class="shops" v-for="i,key in allshop">
				<div class="shopimg"><img :src="shophttp + i.image_path"/></div>
				<div class="shoptext">
					<div class="name" style="font-weight: 600;"><span>品牌</span>
						<div class="shopname">{{i.name}}</div>
					</div>
					
					<div class="talk">
						评分
						<div class="song" style="float: right;"><span>蜂鸟专送</span> <span style="color: #3190e8;border: 1px #3190e8 solid;background: #fff;">准时送</span></div>
					</div>
					<div>
						￥{{i.float_minimum_order_amount}}起送 / 配送费约 ￥{{i.float_delivery_fee}}
						<div style="float: right;"><span class="time" >{{i.distance}}</span> / <span style="color: #3190e8;">{{i.order_lead_time}}</span></div>
					</div>
				</div>
			</div>
			
		</div>
		<footer-bar :num="0"></footer-bar>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import footerBar from '../components/footerBar'
	export default{
		components:{footerBar},
		data(){
			return {
				id:'',
				city:'',
				typehttp:'',
				alltype:{},
				allshop:{},
			}
		},
		  mounted(){
		    new Swiper ('.swiper-container', {
			    direction: 'horizontal', // 垂直切换选项
			    loop: false, // 循环模式选项
			    
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			    }
			  })            
		  },
		created(){
			console.log(this.$route.query)
			this.shophttp='//elm.cangdu.org/img/'
			this.typehttp = 'https://fuss10.elemecdn.com';
//			this.id=3
//			fetch('https://elm.cangdu.org/v1/cities/1')
//			.then(response=>response.json())
//			.then(response=>{
//				this.city = response;
//			})
//		分类
			fetch('https://elm.cangdu.org/v2/index_entry')
			.then(response=>response.json())
			.then(response=>{
				this.alltype = response;
			})
			
//		附近商家
			fetch('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762')
			.then(response=>response.json())
			.then(response=>{
				this.allshop = response;
			})
		}
		
	}
	
	
</script>
<style scoped>
*{padding: 0;margin: 0;}
header{
	width: 100%;
	height: 100px;
	background: #3190e8;
	text-align: center;
}
header p{
	height: 100px;
	color: #fff;
	font-size: 30px;
	line-height: 100px;
	padding: 5px 8px 0 8px;
	box-sizing: border-box;
}
header span{
	display: block;
	float: right;
}

 .swiper-container {
    width: 100%;
    height: 380px;
    margin: 20px auto;
}
.all{
	width: 25%;
	height: 160px;
	padding: 6px;
	box-sizing: border-box;
	margin-bottom: 14px;
	float: left;
	text-align: center;
}
.all>.icon{
	width: 100px;
	height: 100px;
	margin: 0 auto;
}
.all>.icon>img{
	width: 100%;
	height: 100%;
}
.main{
	width: 100%;
	height: auto;
	margin-top: 30px;
}
.main>.top{
	height: 80px;
	line-height: 80px;
	padding-left: 1em;
	text-align: left;
	border-top: 1px #ccc solid;
	border-bottom: 1px #ccc solid;
}
.main>.shops{
	width: 100%;
	height: 200px;
	padding:18px ;
	box-sizing: border-box;
	border-bottom: 1px #ccc solid;
}
.main>.shops>.shopimg{
	width: 150px;
	height: 150px;
	float: left;
}
.main>.shops>.shopimg>img{
	width: 100%;
	height: 100%;
}
.main>.shops>.shoptext{
	width: 76%;
	height: 150px;
	text-align: left;
	float: right;
}
.main>.shops>.shoptext>div{
	height: 50px;
}
.main>.shops>.shoptext>.name>.shopname{
	width: 50%;
	height: 30px;
	line-height: 30px;
	float: left;
	text-overflow: ellipsis;
	white-space: normal;
	overflow: hidden;
}
.main>.shops>.shoptext>.name span{
	display: inline-block;
	font-size: 16px;
	padding: 1px 4px;
	background: yellow;
	margin-right: 4px;
	border-radius: 4px;
}
.main>.shops>.shoptext>.talk>.song{
	float: right;
	
}
.main>.shops>.shoptext>.talk>.song>span{
	display: inline-block;
	font-size: 14px;
	padding: 1px 3px;
	color: #fff;
	margin-right: 2px;
	border-radius: 4px;
	background: #3190e8;
}
</style>
