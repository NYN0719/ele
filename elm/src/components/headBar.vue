<template>
    <div>
        <header>
            <span>&lt;</span>
            <slot></slot>
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
    }
    header>span{
        float: left;
        margin-left: .2rem;
        line-height: 1rem;
    }
</style>