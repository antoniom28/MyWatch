<template>
    <main>
        <router-view :key="$route.path"></router-view>
        <!--
            <router-link class="nav-link" :to="{name : 'Payment' , params:{cart:cart,tot:tot,user:user} }">
                Vai al pagamento
            </router-link>
        -->
    </main>
</template>

<script>
export default {
    name:"Main",
    data(){
        return{}
    },
    props:{},
    components:{},
    methods:{},
}
</script>

<style lang="scss" scoped>

</style>