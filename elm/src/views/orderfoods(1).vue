<template>
    <div>
        <!-- <div>订单食物</div> -->
    <header class="header">
            <div class="orderfoodsleft">
               <router-link to="/Xiangqing">
                    &lt;
               </router-link>
            </div>
            <div class="orderfoodsname">{{this.$route.query.orderfoodes.title}}</div>
        </header>
        <!-- 分类容器 -->
        <div class="sort_contains">
            <!-- 分类框 -->
            <div class="clearfix">
                <div class="classification item_contains" v-for="(i,index) in sorts_arr">
                    <div @click="classes(index)">
                        <span>{{i}}</span>
                        
                         <!-- 图标 -->
                    </div>
                </div>
            </div>
            
            <!-- 分类详情框 -->
            <div class="sorts_box">
                <!-- 分类选项里面的内容 -->
                <div class="classes_detail clearfix" :class="{apper:sorst_index == 0}" v-show="type">
                    <!-- 左面 -->
                    <div class="classes_left">
                        <div class="classes_list clearfix"  v-for="(i,index) in sorts_list" :key="index" @click="classes_click(index)" :class="{gaoliang:sorts_list_index == index}">
                            <div class="classes_img">
                                <img src="i.image_url" alt="">
                            </div>
                            <div class="classes_numjt">
                                <span class="classes_nums">{{i.count}}</span>
                                <span class="classes_jt">
                                    >
                                </span>
                            </div>
                            <div class="classes_nav">{{i.name}}</div>
                        </div>
                    </div>
                    <!-- 右面 -->
                    <div class="classes_list_datas">
                        <!-- 跳转下个页面 -->
                       <router-link to="/part">
                            <div class="classes_datas_list" v-for="(j,jndex) in sorts_circle" :key="jndex">
                                <p class="classes_datas_text">{{j.name}}</p>
                                <p class="classes_datas_nums">{{j.count}}</p>
                            </div>
                       </router-link>
                    </div>
                </div>
                 <div class="sort_detail" :class="{apper:sorst_index == 1}" v-show="!type">
                    <div class="sort_contains_box" v-for="(i,index) in sorts_title">
                        <div class="sort_icon">
                            <!-- 图标 -->
                            <!-- <svg class="icon" aria-hidden="true">
                                <use xlink:href="&#xe695;"></use>
                            </svg> -->
                        </div>
                        <div class="sort_text" @click="sort_text_names(index)">
                            <p class="sort_text_name">{{i.name}}</p>
                            <p class="sort_text_fuhao">
                                <div :class="{sort_text_true:sort_text_name_index == index}"></div>
                            </p>
                        </div>
                    </div>
                </div>
                 <div class="screen_detail" :class="{apper:sorst_index == 2}" v-show="type">
                   <div class="screen_box">
                       <div class="distribution_mode">配送方式</div>
                       <div class="distribution_modlule clearfix">
                           <div class="distribution_methods" v-for="i in distribution_tips">
                               <span>
                                   <!-- 图标 -->
                                    <!-- <svg class="icon" aria-hidden="true">
                                        <use xlink:href="&#xe695;"></use>
                                    </svg> -->
                               </span>
                               <span>{{i.text}}</span>
                           </div>
                       </div>

                       <div class="distribution_mode">商品属性（可以多选）</div>
                       <div class="distribution_modlule">
                           <div class="distribution_querie" v-for="i in distribution_chooes">
                               <p class="product_words">{{i.icon_name}}</p>{{i.name}}
                               <p class="product_details"></p>
                           </div>
                       </div>
                   </div>

                   <div class="clearsure">
                       <button class="clearnull">清空</button>
                       <button class="sure">确定</button>
                   </div>
                </div>
            </div>
        </div>

        <!-- 下面的数据 -->
        <div class="products_contains">
            <div class="shops" v-for="(ipro,proindex) in product_intrduce" :key="proindex">
				<div class="shopimg"><img :src="shophttp + ipro.image_path"/></div>
				<div class="shoptext">
					<div class="name" style="font-weight: 600;">
                        <p>品牌</p>
						<div class="shopname">{{ipro.name}}</div>
					</div>
					
					<div class="talk">
						{{ipro.rating}}评分
						<div class="song" style="float: right;"><span>蜂鸟专送</span> <span style="color: #3190e8;border: 1px #3190e8 solid;background: #fff;">准时送</span></div>
					</div>
					<div class="deliver_foods">
						￥{{ipro.float_minimum_order_amount}}起送 / 配送费约￥{{ipro.float_delivery_fee}}
						<div style="float: right;"><span class="time" > {{ipro.distance}}</span> / <span style="color: #3190e8;">{{ipro.order_lead_time}} </span></div>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>




<script>
export default {
    data(){
        return{
            sorts_arr:[this.$route.query.orderfoodes.title,'排序','筛选'],
            sorst_index:0,
            type:false,
            sorts_list:'',
            distribution_tips:'',
            distribution_chooes:'',
            sorts_list_index:0,
            sorts_circle:'',
            sort_text_name_index:0,
            sorts_title:
                        [
                            {
                                name:'智能排序',
                                img:''
                            },
                            {
                                name:'距离最近',
                                img:''
                            },
                            {
                                name:'销量最高',
                                img:''
                            },
                            {
                                name:'起送价最低',
                                img:''
                            },
                            {
                                name:'配送速度最快',
                                img:''
                            },
                            {
                                name:'评分最高',
                                img:''
                            },
                        ],
            products_datas:'',
            product_intrduce:''
        }
    },
    created(){
        console.log(this.$route.query.orderfoodes.title)
        // this.$route.query.orderfoods
        this.foodsclasses()
        this.sorts_classes()
        this.distribution_modes()
        this.distribution_product()
        this.products_details()
        this.shophttp='//elm.cangdu.org/img/'
    },
    methods:{
        classes(index){
            this.sorst_index = index
             this.type = !(this.type)
        },
        foodsclasses(){
            // 所有食品分类列表
            this.axios.get('http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=39.73204&longitude=116.14265'
            ).then((response) => {
                console.log(response.data)
                // console.log(response.data[0].sub_categories)
                
                this.sorts_list = response.data
            }).catch((error) => {
                console.log(error)
            })
        },
         sorts_classes(){
            // 排序
            this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762'
            ).then((response) => {
                // console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
        },
        distribution_modes(){
            // 分选里面的配送方式
            this.axios.get('https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes')
            .then((response) => {
                // console.log(response.data)
                this.distribution_tips = response.data
            }).catch((error) => {
                console.log(error)
            })
        },
        distribution_product(){
            // 分选里面的商品属性多选
            this.axios.get('https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes')
            .then((response) => {
                // console.log(response.data)
                this.distribution_chooes = response.data
            }).catch((error) => {
                console.log(error)
            })
        },
        products_details(){
            // 下面的商品详细介绍
            this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762')
            .then((response) => {
                console.log(response.data)
                this.product_intrduce = response.data
            }).catch((error) => {
                console.log(error)
            })
        },
        classes_click(index){
            // console.log(index)
            this.sorts_list_index = index
            this.sorts_circle =  this.sorts_list[this.sorts_list_index].sub_categories
        },
        sort_text_names(index){
            // console.log(index)
            this.sort_text_name_index = index
        }
    }
}
</script> 

<style scoped>
    *{margin:0;padding:0;}
    .clearfix:after,.clearfix:before{
        display: table;
        content:'';
    }
    .sorts_box{
        width: 100%;
        height: auto;
        position: absolute;
        
    }
    .sorts_box .apper{
        display: block;
    }
    .clearfix:after{
        clear: both;
    }
   
    .header{
        width:100%;
        height: 70px;
        padding:0 1%;
        line-height: 70px;
        font-size: 30px;
        background-color: cornflowerblue;
    }
    .orderfoodsleft{
        width: 2%;
        height: 60px;
        line-height: 60px;
        float: left;
    }
    .orderfoodsname{
        width: 98%;
        height: 60px;
        float: right;
        text-align: center;
    }
    .sort_contains{
        width: 100%;
        z-index: 22;
    }
    .item_contains{
        width: 33.3%;
        height: 60px;
        line-height: 60px;
        float: left;
        text-align: center;
        background-color: bisque;
    }
    .classes_detail,.sort_detail,.screen_detail{
        width: 100%;
        /* background-color: aquamarine; */
        /* opacity: 0; */
        display: none;
    }
    .sort_detail {
        background-color: #fff;
    }
    .classes_left{
        width: 50%;
        float: left;
    }
    .classes_list{
        width: 100%;
        height: 80px;
        line-height: 80px;
        background-color: #f5f5f5;
        padding:0 1%;
    }
    
    .classes_img{
        width: 10%;
        height: 35px;
        float: left;
        margin-top: 4px;
        margin-right: 15px;
        margin-left: 10px;
    }
    .classes_img img{
        width: 100%;
        height: 100%;
    }
    .classes_nav{
        height:20%;
        line-height: 80px;
        font-size: 22px;
        /* border-bottom: 1px solid grey;/ */
    }
    .classes_numjt{
        width: 33%;
        height: 60px;
        float: right;
        padding: 0 10px;
    }
    .classes_nums{
        background-color: #ccc;
        border-radius: 20px;
        color: #ffffff;
        font-size: 20px;
        margin: 0 10px;
        padding:4px;
    }
    .classes_jt{
        display: inline-block;
        float: right;
    }
    .classes_list_datas{
        width: 50%;
        height:740px;
        overflow:auto;
        float: left;
        background-color: white;
    }
    .classes_datas_list{
        width:100%;
        height: 80px;
        line-height: 80px;
        padding: 0 10px;
        border: 1px solid #f5f5f5;
    }
    .classes_datas_text{
        width: 50%;
        height: 60px;
        float: left;
        color: black;
    }
    .gaoliang{
        background-color: bisque;
    }
    .classes_datas_nums{
         width: 50%;
        height: 60px;
        color: black;
        float: right;
        text-align: right;
        padding-right: 10px;    
        
    }
    .sort_contains_box{
        width: 100%;
        height: 100px;
        /* background-color: blueviolet; */
    }
    .sort_icon{
        width: 20%;
        height: 100px;
        float: left;
        background-color: pink;
    }
    .sort_text{
        width: 80%;
        height: 100px;
        padding:0 12px;
        float: right;
        font-size: 24px;
        line-height: 100px;
        border-bottom: 1px solid #e4e4e4;
    }
    .sort_text_name{
        width: 50%;
        height: 100px;
        float: left;
        
    }
    .sort_text_fuhao{
        width: 20px;
        height: 100px;
        float: right;
        text-align: right;
    }
    .sort_text_true{
        width: 16px;
        height: 30px;
         float: right;
        border-color: #009933;
        border-style: solid;
        margin-top: 30px;
        border-width: 0 3px 5px 0;
        transform: rotate(45deg);
        float: right;
    }
    .screen_box{
        width:100%;
        height: 450px;
        /* background-color: blueviolet; */
        padding:20px 14px;
        background-color: #fff;
    }
    .distribution_mode{
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        line-height: 50px;
        font-size: 20px;
        background-color: antiquewhite;
    }
    .distribution_modlule{
        width: 100%;
        padding: 14px;
        font-size: 24px;
    }
    .distribution_methods{
        width: 190px;
        height: 70px;
        line-height: 70px;
        margin-bottom: 10px;
        border:1px solid grey;
        border-radius: 20px;
        text-align: center;
    }
    .product_words{
        display: inline-block;
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin-top: 8px;
        margin-left: 14px;
        border: 1px solid black;
        border-radius:12px;
        float: left;
    }
    .product_details{
        float: left;
    }
    .distribution_querie{
        width: 210px;
        float: left;
        line-height: 70px;
        border:1px solid grey;
        margin-right: 20px;
        margin-bottom: 10px;
        border-radius: 2px;
        text-align: center;
    }
    .clearsure{
        width: 100%;
        height: 100px;
        padding:10px;
        background: #f1f1f1;
    }
    .clearnull,.sure{
        width: 49%;
        height: 80px;
        line-height: 80px;
        float: left;
        border-radius: 6px;
    }
    .clearnull{
        margin-right: 10px;
        background: #ffffff;
        color: black;
    }
    .sure{
        background: #56d176;
    }
    .products_contains{
        width: 100%;
    }
    .shops{
        width: 100%;
        height: 200px;
        padding:18px ;
        box-sizing: border-box;
        border-bottom: 1px #ccc solid;
    }
    .shopimg{
    width: 150px;
    height: 150px;
    float: left;
    }
    .shopimg>img{
    width: 100%;
    height: 100%;
    }
    .shops>.shoptext{
    width: 76%;
    height: 150px;
    text-align: left;
    float: right;
    }
    .shops>.shoptext>div{
    height: 50px;
    }
    .shops>.shoptext>.name>.shopname{
    width: 50%;
    height: 30px;
    line-height: 30px;
    /* float: left; */
    font-size: 22px;
    text-overflow: ellipsis;
    white-space: normal;
    overflow: hidden;
    }
    .shops>.shoptext>.name p{
    display: inline-block;
    font-size: 16px;
    padding: 1px 4px;
    background: yellow;
    margin-right: 4px;
    border-radius: 4px;
    float: left;
    }
    .talk{
        font-size: 22px;
    }
    .shops>.shoptext>.talk>.song{
    float: right;

    }
    .shops>.shoptext>.talk>.song>span{
    display: inline-block;
    font-size: 14px;
    padding: 1px 3px;
    font-size: 22px;
    color: #fff;
    margin-right: 2px;
    border-radius: 4px;
    background: #3190e8;
    }
    .deliver_foods{
        font-size: 22px;
    }
</style>

