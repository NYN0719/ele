<template>
	<div class="box">

		<header>
			<p @click="type=true" :class='type?"a":""'>
				商品
				<span :class='type?"span":""'></span>
			</p>
			<p @click="type=false" :class='type?"":"a"'>
				<router-link to="/Xiangqing" style="color:dodgerblue;">
					评价
				</router-link>
				<span :class='type?"":"span"'></span>
			</p>
		</header>
 		<div class="content clearfix">
			<!-- 左侧菜单 -->
			<div class='product'>
				<div @click='xianshi(index)' v-for='(item,index) in arr' :class='{"active":i==index}' :key="index">
					{{item.name}}
				</div>

				<div @click='xianshi(index)' v-for='(item,index) in arr' :class="{'active':i==index}" :key="index">
					{{item.type}}
				</div>
			</div>
			<!-- 右侧具体信息 -->
			<div class='information'>
				<!-- 右侧商品列表 -->
				<div class='item-box clearfix' v-for='(item,index) in arr[idx].foods' :key="index">
					<div class="img">
						<img :src="'//elm.cangdu.org/img/'+item.image_path" alt="">
					</div>
					<div class="text">
						<p style="font-size: 14px;">{{item.specfoods[0].name}}</p>
						<div class='bt'>
							<span class='price' style="font-size: 12px;">￥ {{item.specfoods[0].price}}</span>
							<p>
								<span class='jian' @click='del(item.specfoods[0])'>-</span> {{item.specfoods[0].num || 0}}
								<span class='jia' @click='add(item.specfoods[0])'>+</span>
							</p>
						</div>
					</div>
				</div>

			</div>
			<footer class='footer'>
				总价:{{total}}元
				<router-link :to="{name:'/',params:{selectList}}">
					去结算
				</router-link>
			</footer>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				type: true,
				stype:true,
				currentCategory: 0,
				arr: [],
				list: [],
				i: 0,
				idx: 0,
				addArr: []
			}
		},
		created() {
			this.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1').then((res) => {
				// console.log(res.data)
				this.arr = res.data
				// console.log(res.data[0].foods)
				console.log(this.arr[this.idx])
			})

		},
		methods: {
			xianshi(index) {
				// this.list = this.arr[index].code;
				this.idx = index;
			},
			del(item) {
				if(item.num) {
					if(item.num == 0) return;
					item.num--;
				}
			},
			add(item) {
				if(item.num) {
					this.addArr.forEach(it => {
						if(it.food_id == item.food_id) {
							it.num++
						}
					})
				} else {
					item.num = 1;
					this.addArr.push(item)
					// Vue.set(item, 'num', 1);
				}
				console.log(this.addArr)
			}
		},
		computed: {
			selectList() {
				var array = [];
				this.arr.forEach(element => {
					element.foods.forEach(el => {
						if(el.specfoods[0].num) {
							array.push(el.specfoods[0]);
						}
					});
				});
				console.log(array)
				return array;
			},
			total() { //计算商品总价
				var n = 0;
				// console.log(this.selectList)
				if(this.addArr.length) {
					this.addArr.forEach(element => {
						// console.log((element.price).split('￥')[1]);
						n += element.price * element.num;
					});
				}
				this.selectList.forEach(element => {
					n += (element.price).split('￥')[1] * element.num;
				});
				return n.toFixed(2);
			}
		},
		watch: {
			selectList(old, newVal) {
				console.log(v1),
					console.log(old, newVal),
					selectList(v1, v2)
			}
		}
	}
	// 第二个组件
	var shoppingCart = {
		template: '#shoppingCart',
		data() {
			return {
				goodlist: this.$route.params.selectList || []
			}
		},
		computed: {
			total() { //计算商品总价
				var n = 0;
				this.goodlist.forEach(element => {
					n += (element.price).split('￥')[1] * element.num;
				});
				return n.toFixed(2);
			},
			selectList(old, newVal) {

			}
		}
	}
</script>
<style scoped>
	.box{
		overflow-x: hidden;
		background: white;
	}
	.a {
		color: dodgerblue;
	}
	.s{
		background: #fff;
	}
	header {
		height: 120px;
		overflow: hidden;
		line-height: 120px;
		border-bottom: 1px #E4E4E4 solid;
	}
	
	header p {
		width: 50%;
		font-size: 34px;
		position: relative;
		text-align: center;
		float: left;
	}
	
	.span {
		position: relative;
		width: 24%;
		left: 38%;
		bottom: 28px;
		display: block;
		border-bottom: 4px dodgerblue solid;
	}
	
	.box {
		width: 100%;
		height: auto;
		margin: 0 auto;
		font-size: 0.18rem;
	}
	
	.nav {
		width: 100%;
		height: 0.7rem;
		line-height: 0.7rem;
		text-align: center;
		border-bottom: 1px solid #ccc;
	}
	
	.list {
		display: flex;
		justify-content: space-between;
	}
	
	.list li {
		width: 25%;
		float: left;
	}
	
	.hot {
		border-right: 1px #ccc solid;
	}
	
	.active {
		background-size: 0.05rem 0.25rem;
	}
	
	.content {
		width: 100%;
		height: auto;
	}
	
	.product {
		width: 25%;
		border: 1px #ccc solid;
		text-align: center;
		float: left;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.product div {
		width: 100%;
		height: 120px;
		background: #F5F5F5;
		font-size: 26px;
		line-height: 120px;
		box-sizing: border-box;
		border-bottom: 1px #ccc solid;
		overflow: hidden;
	}
	
	.information {
		width: 75%;
		height: auto;
		float: left;
		background: #fff;
	}
	
	.item-box,
	.jiesuan {
		width: 100%;
		height: 140px;
		padding: 20px 12px;
		border-bottom: 1px #ccc solid;
		box-sizing: border-box;
	}
	
	.img {
		width: 100px;
		height: 100px;
		margin-right: 10px;
		float: left;
	}
	
	.img img {
		width: 100%;
		height: 100%;
	}
	
	.text {
		width: 70%;
		margin-left: 10px;
		float: left;
		position: relative;
	}
	
	
	.price {
		color: orange;
	}
	
	.text .bt p {
		float: right;
	}
	
	.jian,
	.jia {
		width: 25px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 50%;
		margin: 0 10px;
	}
	
	.footer {
		width: 100%;
		height: 120px;
		background: cornflowerblue;
		opacity: .9;
		position: fixed;
		bottom: 0;
		line-height: 120px;
		padding-left: 20px;
		font-size: 28px;
		box-sizing: border-box;
	}
	
	.footer a {
		text-align: center;
		text-decoration: none;
		float: right;
		color: #fff;
		width: 20%;
		height: 120px;
		background-color: #535356;
	}
</style>