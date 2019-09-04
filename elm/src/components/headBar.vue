<template>
    <div>
        <header>
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="center">
                <slot name="center"></slot>
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </header>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    header{
        height: 1rem;
        background: blue;
        color: #fff;
        text-align: center;
        line-height: 1rem;
        font-size: .4rem;
        display: flex;
    }
    header>div{
        text-align: center;
        flex: 2;
    }
    header >div:nth-of-type(2){
        flex: 6;
    }
</style>