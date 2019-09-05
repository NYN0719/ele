<template>
    
    <div class="explain1">
        <header-bar> 
            <template v-slot:left>
            <router-link to="myself">&lt;</router-link>
            </template>
            <template v-slot:center>说明</template>
        </header-bar>
        <div class="explain">
            Q1:怎么获得积分？ 在线支付的订单将获得订单积分奖励：*积分将在用户评价后获得，会根据订单实际支付金额和评价的质量评价发放。*每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。### Q2：积分用来做什么？ 可以在积分商城兑换各种商品。 ### Q3：礼品兑换好多天了 还没收到，该怎么办？礼品从兑换日起，3个工作日（周六日不算）内处理发货，发货后，通常会在3个工作日左右到达。 ###4：礼品兑换中的手机充值卡兑换，怎么样进行充值，充值前回和我电话确认吗?不会，手机充值卡兑换，是直接充值到您添加的手机号上的，充值之前不会和你电话确认，所以在填写电话的时候，请确认电话是否正确。
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
    .explain{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
        font-size: 40px;
    }
</style>
