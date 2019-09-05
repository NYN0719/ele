<template>
    <div class="download">
        <header-bar> 
            <template v-slot:left>
            <router-link to="myself">&lt;</router-link>
            </template>
            <template v-slot:center>下载</template>
        </header-bar>
        <div class="content">
            <div class="tu">
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1567587644&di=fbe99306811fcdbd9c962cf8bc5fcda9&src=http://img.25pp.com/uploadfile/app/icon/20180612/1528809203496035.jpg">
                <p>下载饿了么app</p>
            </div>
        </div>
        <div class="btn">
            <a href="http://xc.mieseng.com/xiaz/%B6%F6%C1%CB%C3%B4+for+Android@1580_26208.exe">下载</a>
        </div>
    </div>
</template>

<script>
import headerBar from '../components/headBar.vue'
export default {
     components:{headerBar},
}
</script>

<style>
    .content{
        width: 100%;
        height: 500px;
        
    }
    .tu{
        width: 40%;
        margin: 40px auto;
        text-align: center;
        font-size: 30px;
        line-height: 50px;
    }
    .tu img{
        width: 100%;
        height: 100%;
        border-radius: 40px;    
    }
    .btn{
        text-align: center;
        line-height: 100px;
    }
</style>
