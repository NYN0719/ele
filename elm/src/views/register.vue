
<template>
    <div class="register clearfix">
        <!-- <head-bar> -->
            <!-- <router-link to="/cityplace.vue">
            <template v-slot:left>&lt;</template>
            </router-link> -->
            <slot class="mi">密码登录</slot>           
        <!-- </head-bar> -->
       
        <ul>
            <li>
                <input type="text" placeholder="账号" v-model="user">
            </li>
            <li style="position:relative">
                <input :type="a" placeholder="密码" v-model="pass">
                <div class="xian" :style="{background:swit?'red':'blue'}" @click="xian()">
                    <!-- <span>abc</span> -->
                    <span class="yuan" :class="swit?'red':'blue'" ></span>
                </div>
            </li>
            <li>
                <input  class="inputli" type="text" placeholder="验证码" v-model="yanmodel">
                <img class="yanzhengimg" :src="yanurl" alt="">
                <span @click="random">换一张</span>
            </li>
        </ul>
        <div class="wen">
            <p>温馨提示：未注册的账号，登录时将自动注册</p>
            <p>注册过的账户可凭账号密码登录</p>
        </div>
        <button @click="handin" class="btn">确定</button>
        <router-link to="/amend">
            <p class="chong" @click="reset()">重置密码？</p>
        </router-link>
        
    </div>
</template>

<script>

// import headBar from '../components/headbar.vue'
export default {
    name:'register',
    components:{
        // headBar
    },
    data(){
        return {
            user:'',
            pass:'',
            yanurl:'',
            yanmodel:'',
            swit:false,
            a:'password'
            
        }
    },
    created() {
        this.random()
    },
    methods: {
        random(){
            this.axios.post('https://elm.cangdu.org/v1/captchas')
            .then(data=>{
                console.log(data);
                this.yanurl = data.data.code
            })
        },
        handin(){
            this.axios.post('https://elm.cangdu.org/v2/login',
            {
                username:this.user,
                password:this.pass,
                captcha_code:this.yanmodel
            }
            )
            .then(data=>{
                if(!this.user){
                    alert('请输入账号')
                } else if(!this.pass){
                    alert('请输入密码')
                }else if(!this.yanmodel){
                    alert('请输入验证码')
                }
                if(this.user == data.data.username && this.pass == data.data.password){
                    alert('登录成功')
                }else if(this.pass == data.data.password){
                    alert('登录失败')

                }
                
            })
        },
        reset(){
            this.pass= ''
        },
        xian(){
            this.swit=!this.swit
            if(this.swit){
                this.a='text'
            }else{
                this.a='password'
            }
        }

    },
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
.register{
    width: 750px;
    background: #f5f5f5;
    height: auto;
   
}
.red{
    left: 0px;
    
}
.blue{
    left: 40px;
    
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
.btn{
    width: 700px;
    height: 100px;
    background: rgb(14, 196, 75);
    font-size: 30px;
    box-sizing: border-box;
    margin-left:25px;
    border-radius: 10px;
    color:#fff;
}
.wen{
    width: 720px;
    height: 150px;
    box-sizing: border-box;
    margin-left:25px;
}
.wen p{
    color:red;
    font-size: 25px;
    line-height: 60px;
}
.chong{
    width: 400px;
    height: 50px;
    box-sizing: border-box;
    float: right;
    margin: 50px;
    text-align: right;
    color:blue;
}
.xian{
    width:80px;
    height:30px;
    background:red;
    position:absolute;
    right:50px;
    top:35px;
    border-radius: 20px;
}
.yuan{
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background:#000;
    position:absolute;
    top:-5px;
}
.inputli{
    float: left;
    margin-right: 20px;
    margin-top: 30px;
}
.yanzhengimg{
    float: left;
    width: 130px;
    height: 110px;
    display: inline-block;
    margin-right: 20px;
}
</style>
