<template>
    <div class="alert_widow" v-show="alert_type">
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
        min-height: 300px;
        position: absolute;
        top: 50%;
        margin-top: -150px;
    }
    .alert_widow>div{
        width: 80%;
        height: 100%;
        margin: 0 auto;
        background-color: white;
    }
</style>