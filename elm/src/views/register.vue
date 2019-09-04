
<template>
    <div class="register clearfix">
       <header style="height:50px;text-align:center;line-height:50px;font-size: 18px;background:blue;">
        密码登录
       </header>
        <ul style="margin-top:0;">
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
        <router-link to="/rest">
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
                this.yanurl = data.data.code
            })
        },
        handin(){
            if(this.user == '') {
					alert('请输入账号');
					return;
				} else if (this.pass == ''){
					alert('请输入密码')
					return;
				} else if (this.yanmodel == ''){
					alert('请输入验证码')
					return;
				}else {
					this.axios.post('https://elm.cangdu.org/v2/login', {
						user: this.user,
						pass: this.pass,
						captcha_code: this.verifyNumber
					}).then((data) => {
						console.log(data);
						if(data.data.message == '密码错误') {
							alert('登录失败');
						} else if (data.data.message == '验证码不正确'){
							alert('验证码错误');
						} else {
							alert('登录成功');
                            this.$router.push({path:'/Xiangqing'})
						}
					})

				}
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
    width: 100%;
    height:auto ;
   
}
.red{
    left: 0px;
    
}
.blue{
    left: 40px;
    
}
ul{
    width: 80%;
}
li{
    width: 80%;
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
    width: 80%;
    font-size: 35px;
    outline: none;
    border: none;
}
.btn{
    width: 95%;
    height: 100px;
    background: rgb(14, 196, 75);
    font-size: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 2.5%;
    color:#fff;
}
.wen{
    width: 80%;
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
    line-height: 50px;
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
    transition:.35s;
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
