<template>
    <div class="watch-box">

        <div class="hook-box"></div>
        <div class="hook-center"></div>
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

.hook-box{
    width: 68px;
    height: 36px;
    z-index: 1;
    border-width: 10px 5px 4px 5px;
    border-style: solid;
    border-color: grey;
    //background-color: rgb(213, 241, 48);
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translate(-50% , 0%);
}

.hook-center{ 
        width: 5px;
        height: 36px;
        z-index: 4;
        background-color: rgb(187, 187, 187);
        //background-color: rgb(213, 241, 48);
        position: absolute;
        top: -5%;
        left: 50%;
        transform: translate(-50% , 0%);
    }
</style>