<template>
    <div>
        <div class="ly-content">
                <router-link to="/myself">
            <h3>请重新进入</h3>
        </router-link>
            <p>
               
                        请返回后重新进入积分商城~
                
            </p>
            <img src="//yun.duiba.com.cn/webapp/img/retrylogin.png" alt="">
        </div>
    </div>
</template>
<style scoped>
    .ly-content{
            text-align: center;
            overflow: hidden;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
    }
    h3{
            font-size: 50px;
            color: #0d7fd5;
            margin-bottom: 15px;
    }
    p{
        font-size: 29px;
        color: #666;
        margin-bottom: 19px;
    }
    img{
        width: 360px;
        height: 360px;
        vertical-align: middle;
    }
</style>
