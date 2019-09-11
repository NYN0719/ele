<template>
    <div class="account">
        <header-bar> 
            <template v-slot:left>
            <router-link to="/myself">&lt;</router-link>
            </template>
            <template v-slot:center>账户信息</template>
        </header-bar>
        <ul style="margin-top:0;">
            <li>
                头像
                <div class="tu">
                    <img src="http://b-ssl.duitang.com/uploads/item/201711/10/20171110225150_ym2jw.jpeg" style="width:80px;height:80px;border-radius:50%;vertical-align:middle;margin-right:20px;">
                </div>
            </li>
            <li>
                用户名
                <span><span style="margin-right:10px;">22222</span>></span>
            </li>
            <li>
                收货地址
                <span>></span>
                
            </li>
        </ul>
        <div class="bang">
            账号绑定
        </div>
        <div class="shou">
            手机
            <span>></span>
        </div>
        <div class="bang">
            安全设置
        </div>
        <div class="shou">
            密码登录
            <span>修改 ></span>
        </div>
        <button class="tui">退出登录</button>
    </div>
</template>

<script>
import headerBar from '../components/headBar.vue'
export default {
    components:{headerBar},
}
</script>

<style>
    *{
        margin:0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
    ul{
        width: 100%;
        height: 100%;
    }

    ul li:nth-of-type(1){
        width: 100%;
        height: 160px;
        line-height: 160px;
        /* background: pink; */
        position: relative;
        font-size: 36px;
    }
    .tu{
        width: 200px;
        height: 160px;
        float: right;
        margin:0px;
        font-size: 42px;
    }
    ul li{
        position: relative;
    }
    ul li span{
        position:absolute;
        right: 20px;
        top:0px;
    }
    .bang{
        width: 100%;
        height: 80px;
        background: rgb(175, 173, 173);
        line-height: 80px;
        box-sizing: border-box;
        padding-left:20px;
    }
    .shou{
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #ccc;
        font-size: 32px;
        box-sizing: border-box;
        padding-left:20px;
        /* background: pink; */
        line-height: 100px;
        position: relative;
    }
    .shou span{
        position:absolute;
        right: 20px;
    }
    .tui{
        width: 90%;
        margin: 0 auto;
        background: rgb(201, 56, 56);
        border-radius: 10px;
        height: 80px;
        box-sizing: border-box;
        margin-top:50px;
        margin-left: 40px;
    }
</style>
