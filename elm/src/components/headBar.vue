<template>
    <div>
        <header>
            <span>&lt;</span>
            <!-- <slot></slot> -->
            {{title}}

            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
            
            


        </header>
    </div>
</template>
<script>
export default {
    props:['title']
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
    }
    header>span{
        float: left;
        margin-left: .2rem;
        line-height: 1rem;
    }
    header>.left{
        float: left;
    }
    header>.right{
        float: right;
    }
</style>