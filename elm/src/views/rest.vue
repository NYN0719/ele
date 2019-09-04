<template>
    <div class="ly" style="background:#f5f5f5">
        <!-- {{am}} -->
        <head-bar>
           
                <slot>重置密码</slot>
			<div class="right">
				<slot name="right"></slot>
			</div>
			<div class="left">
				<slot name="left">&lt;</slot>
			</div>
            
        </head-bar>
        <div class="ly_center" >
            <div class="account_and_pass"><input class="ac_pa" type="text" v-model="am.us_name" placeholder="账号"></div>
            <div class="account_and_pass"><input class="ac_pa" type="text" v-model="am.old_pass" placeholder="旧密码"></div>
            <div class="account_and_pass"><input class="new_pass" type="text" v-model="am.new_pass" placeholder="请输入新密码"></div>
            <div class="account_and_pass"><input class="confirm" type="text" v-model="am.con" placeholder="请确定密码"></div>
            <div class="account_and_pass">
                <div class="ly_left">
                    <input class="auth" type="text" v-model="am.cap" placeholder="验证码">
                </div>
                <div class="ly_right">
                    <span style="float:left">
                        <img :src="cap_img" alt="">
                    </span>
                    <button style="float:right" @click='cap_exch'>看不清<br><span>换一张</span></button>
                </div>
            </div>
        </div>
        <button class="yes" @click='amend'>确认修改</button>
    </div>
</template>

<script>
import headBar from '../components/headBar'
export default{
    name:'ly',
    components:{headBar},
    data(){
        return {
            arr:[],
            cap_img:'',
            am:{
                us_name:'',
                old_pass:'',
                new_pass:'',
                con:'',
                cap:''
            }
        }
    },
    mounted(){
        this.cap()
    },
    methods: {
        //获取验证码
        cap(){
            this.axios.post('https://elm.cangdu.org/v1/captchas').then((data)=>{
                 console.log(data);
                this.cap_img = data.data.code
            })
        },
        //更新验证码
        cap_exch(){
            this.cap()
        },
        amend(){
           console.log(this.am)
           types = true
            for(let key  in this.am){
                    if(this.am[key] == ''){
                        var types = false;
                    }
                }
                if(types){
                    this.axios.post('https://elm.cangdu.org/v2/changepassword',{
                username:this.am.us_name,
                oldpassWord:this.am.old_pass,
                newpassword:this.am.new_pass,
                confirmpassword:this.am.con,
                captcha_code:this.am.cap
            },{emulateJSON:true}).then((data)=>{
                console.log(data)
            })
                }else{
                    alert('缺失')
                }
            
        }
    },
}
</script>

<style scoped>
    .ly_center{
        /* width: 720px; */
        margin-top:40px; 
    }
    .account_and_pass{
        width: 720px;
		height: 70px;
        line-height: 70px;
		font-size: 30px;
		padding: 15px;
        border-bottom: 1px solid #ccc;
        background: #fff;
        /* padding: 0px 5px; */
    }
    .account_and_pass>.ac_pa{
        width: 600px;
		height: 70px;
        line-height: 70px;
		font-size: 30px;
		padding:0 15px;
        border: none; 
        outline: none;
         background: #fff;
    }
    .new_pass{
        width: 500px;
		height: 70px;
        line-height: 70px;
		font-size: 30px;
		padding:0 15px;
        border: none;
        outline: none;
         background: #fff;
    }
    .confirm{
        width: 500px;
		height: 70px;
        line-height: 70px;
		font-size: 30px;
		padding:0 15px;
        border: none;
        outline: none;
         background: #fff;
    }
    .auth{
        width: 300px;
		height: 70px;
        line-height: 70px;
		font-size: 30px;
		padding:0 15px;
        border: none;
        outline: none;
         background: #fff;
    }
    .yes{
        width: 720px;
		height: 90px;
        line-height: 90px;
		font-size: 30px;
		margin: 40px 15px;
        background: green;
        border-radius: 6px;
        color: #fff;
        border: none;
        cursor: pointer;
    }
    .ly_right{
        width: 220px;
        float: right;
    }

    .ly_right>span{
        width: 130px;
        height: 70px;
        display: inline-block;
    }
    .ly_right>span>img{
        width: 100%;
        height: 100%;
    }
    .ly_right>button{
        width: 80px;
        height: 70px;
        background:none;
        border: none;
        outline: none;
        font-size: 26px;
    }
    .ly_left{
        width: 500px;
        float: left;
    }
</style>