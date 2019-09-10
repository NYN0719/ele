<template>
    <div class="ly">
        <head-bar>
            <template v-slot:left>
                <router-link to="myself">
                        &lt;
                </router-link>
            </template>
            <template v-slot:center>会员中心</template>
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