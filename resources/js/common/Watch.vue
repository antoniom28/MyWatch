<template>
    <div class="watch-box">
        <Face />
        <Strap />
    </div>
</template>

<script>
import Face from './Face.vue'
import Strap from './Strap.vue'
export default {
    name:"Watch",
    data(){
        return{}
    },
    props:{},
    components:{Face, Strap},
    methods:{},
}
</script>

<style lang="scss" scoped>
.watch-box{
    position: relative;
    min-width: 150px;
    min-height: 550px;
    //left: 100px; //da togliere 
}
</style>