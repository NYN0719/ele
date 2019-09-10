<template>
    <div class="ly">
        <head-bar>
            <template v-slot:left>
               <router-link to="/myself">
                    &lt;
               </router-link>
            </template>
            <template v-slot:center>我的优惠</template>
        </head-bar>
    </div>
</template>
<script>
import headBar from '../components/headBar.vue'
export default {
    name:'ly',
    components:{headBar},
}
</script>