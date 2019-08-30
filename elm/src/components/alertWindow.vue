<template>
    <div class="alert_widow" v-show="true">
        <div>
            <div>
                <div class="alert_img">
                    <img src="" alt="">
                </div>
                <div class="alert_text">
                    {{alert_text}}
                </div>
            </div>
            <div class="alert_end">
                确认
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['alert_text','alert_type']
}
</script>

<style scoped>
    .alert_widow{
        width: 100%;
        min-height: 500px;
        position: absolute;
        top: 50%;
        margin-top: -150px;
        background-color: white;
    }
    .alert_widow>div{
        width: 80%;
        height: 100%;
        margin: 0 auto;
        background-color: white;
        border: 1px solid #000000;
    }
    .alert_img{
        width: 100%;
        height: 200px;
    }
    .alert_img>img{
        width: 80%;
        height: 100%;
        float: left;
        margin: 0 auto;
    }
</style>