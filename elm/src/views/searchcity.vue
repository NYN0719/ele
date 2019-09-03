<template>
	<div class="search">
		<!-- 搜索的头部 -->
		<search-bar>
			<template v-slot:changecity>
				<router-link to="/">
					切换城市
				</router-link>
			</template>
			<template v-slot:searchjt>
				<router-link to="/">
					&lt;
				</router-link>
			</template>
		</search-bar>
		<!-- 搜索盒子 -->
		<div class="searchbox">
			<input class="input" type="text" name="" placeholder="输入学校、商务楼、地址" v-model="searchtext" @change="searchajax">
			<p class="nulls">{{nulls}}</p>
			<input class="submit" type="button" name="" value="提交" @click="searchajax">
		</div>
		<!-- 搜索的内容 -->
		<div>
			<router-link to="/Xiangqing" v-for="(i,index) in searchlist">
				<div class="allplace" @click="history(i)">
		    		<p class="placename">{{i.name}}</p>
		    		<p class="location">{{i.address}}</p>
		    	</div>
			</router-link>
		</div>
		<!-- 搜索的历史 -->
		<router-link to="/Xiangqing">
			<div class="searchhistory">搜索历史</div>
			<div class="allplace" v-for="(j,jindex) in hisrecords">
			<p>{{j.name}}</p>
			<p>{{j.address}}</p>
			
		</div>
		</router-link>
		<div @click="clearhistory" class="clearhistory" v-show="cleartype">清空历史</div>
	</div>
</template>

<script>
	import searchBar from '../components/searchbar.vue' 
	export default{
		name:'search',
		data(){
			return{
				cityname:'',
				cityid:'',
				searchtext:'',
				searchlist:'',
				nulls:'',
				hisrecords:[],
				cleartype:true
			}
		},
		components:{
			searchBar
		},
		methods:{
			// 搜索后的内容接口
			searchajax(){
				if(this.searchtext == ''){
					this.nulls = '输入为空!!'
					this.searchlist = ''
				}else{
					this.$http.get('https://elm.cangdu.org/v1/pois',{
						params:{
							city_id:this.cityid,
							keyword:this.searchtext,
						}
					}).then((res)=>{
						console.log(res)
						this.searchlist = res.data
					})
				}
				
			},
			history(i){
				this.cleartype = true
				this.hisrecords.push(i)
				// console.log()
				// console.log(JSON.stringify(this.hisrecords))
				localStorage.hisrecords =JSON.stringify(this.hisrecords)
			},
			clearhistory(){
				this.cleartype = false
				localStorage.clear()
				this.hisrecords=[]
			}
		},
		// 获取前页面的数据
		created(){
			console.log(this.$route.query)
			this.cityname = this.$route.query.cityname
			this.cityid = this.$route.query.cityname.id
			console.log(this.$route.query)
			
			if(localStorage.hisrecords){
 				// console.log(localStorage.hisrecords)  自动转换成字符串
				// console.log(JSON.parse(localStorage.hisrecords))   把localStorage转换成对象
			  this.hisrecords=JSON.parse(localStorage.hisrecords)
			}else{
			  this.hisrecords=[]
			}
			
		},
		
	}

</script>

<style>
	*{margin:0;oadding:0;}
	.searchbox,.searchhistory{
		width: 90%;
		font-size:26px;
		border-bottom: 1px solid #e4e4e4;
	}
	.searchhistory{
		padding: 10px 60px;
		font-size: 22px;
	}
	.input{
		width: 90%;
		height: 60px;
		border: 1px solid grey;
		margin-bottom: 10px;
		outline: none;
	}
	.submit{
		width: 95%;
		height:60px;
		margin-top: 10px;
	}
	.allplace{
		width: 90%;
		background:  #ccc;
		font-size:26px;
		padding: 20px 90px;
		height: 120px;
		border-bottom: 1px solid grey;
	}
	.allplace p{
		line-height: 60px;
	}
	.placename{
		font-size:26px;
		line-height:50px;
		width:560px;
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.location{
		font-size:20px;
		width: 560px;
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.nulls{
		font-size: 20px;
		color: red;
	}
	.list li{
		width:640px;
		height: 100px;
		border-bottom:0.01rem solid #ccc;
	}
	.clearhistory{
		width: 720px;
		background:  #ccc;
		font-size:26px;
		text-align: center;
		padding: 15px;
	}
	.router-link-active{
		font-size: 22px;
	}
</style>