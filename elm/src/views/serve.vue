<template>
    <div class="clearfix">
        <header-bar> 
            <template v-slot:left>
            <router-link to="myself">&lt;</router-link>
            </template>
            <template v-slot:center>服务中心</template>
        </header-bar>
        <div class="ke">
            <div class="ke-l">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-kefu"></use>
                </svg>
                <p>在线客服</p>
            </div>
            <div class="ke-r">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-dianhua"></use>
                </svg>
                <p>在线客服</p>
            </div>
        </div>
        <div class="title"> 
            <h4>热门问题</h4>
        </div>
        <ul class="content clearfix" style="color:#000;">
           
                <!-- <li v-for="(i,index) in arr" :key='index'>
                     {{i.activityCaption}}
                    
                   
                </li> -->
                 <li><router-link to="explain" style="font-size:20px;">超级会员权益说明 <span>></span></router-link></li>
                <li><router-link to="explain" style="font-size:20px;">签到规则 <span>></span></router-link></li>
            
            
                <li><router-link to="explain" style="font-size:20px;">用户等级说明 <span>></span></router-link></li>
           
                <li><router-link to="explain" style="font-size:20px;">积分问题 <span>></span></router-link></li>
           
                <li><router-link to="explain" style="font-size:20px;">教我拍大片 <span>></span></router-link></li>
            
                <li><router-link to="explain" style="font-size:20px;">支付问题 <span>></span></router-link></li>
           
                <li><router-link to="explain" style="font-size:20px;">其他问题 <span>></span></router-link></li>
            
                <li><router-link to="explain" style="font-size:20px;">准时达问题 <span>></span></router-link></li>
            
                <li><router-link to="explain" style="font-size:20px;">会员说明 <span>></span></router-link></li>
           
                <li><router-link to="explain" style="font-size:20px;">会员问题 <span>></span></router-link></li>
           
                <li><router-link to="explain" style="font-size:20px;">红包问题 <span>></span></router-link></li>
            
                <li><router-link to="explain" style="font-size:20px;">活动细则<span>></span></router-link></li>
           
                <li><router-link to="explain" style="font-size:20px;">不签规则 <span>></span></router-link></li>
            
                <li><router-link to="explain" style="font-size:20px;">优惠说明 <span>></span></router-link></li>
            
                <li><router-link to="explain" style="font-size:20px;">免责声明 <span>></span></router-link></li>
            
                <li><router-link to="explain" style="font-size:20px;">代金券说明 <span>></span></router-link></li>
            
                <li><router-link to="explain" style="font-size:20px;">商务合作 <span>></span></router-link></li>
            
                <li><router-link to="explain" style="font-size:20px;">金额问题 <span>></span></router-link></li>
            
            
        </ul>
    </div>
    
</template>

<script>
import headerBar from '../components/headBar.vue'
export default {
    components:{headerBar},
    // data(){
    //     return{
    //         arr:[],
    //     }
    // },
    // created() {
    //     this.axios.get('https://elm.cangdu.org/v3/profile/explain').then(data=>{
            
    //         this.arr = data.data
    //         console.log(this.arr)
    //     })
    // },

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
    .ke{
        width: 100%;
        height: 156px;
        border-bottom: 1px solid #ccc;
        display: flex;
        box-sizing:border-box;
        font-size: 34px;
    }
    .icon{
        width: 100%;
        height: 70px;
        padding-top: 30px;
        color: green;
    }
    .ke-l{
        flex:1;
        border-right: 1px solid #ccc;
        text-align: center;
    }
    .ke-r{
        flex:1;
        text-align: center;
    }
    .title{
        width: 100%;
        height: 120px;
        border-bottom: 1px solid #ccc;
    }
    .title h4{
        width: 100%;
        height: 120px;
        line-height: 120px;
        font-size: 38px;
        padding-left: 20px;
    }
    .content{
        width: 100%;
        height: auto;
        margin-top: 0px;
        box-sizing:border-box;
    }
    .content li{
        width: 100%;
        height: 100px;  
        border-bottom: 1px solid #ccc;
        box-sizing:border-box;
        position: relative;
        
    }
    .content li span{
        position:absolute;
        right:30px;
        font-size: 40px;
        box-sizing:border-box;
    }
    a{
        color:#000;
        
    }
  
</style>
