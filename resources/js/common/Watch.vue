<template>
    <div class="watch-box">

        <div class="hook-box"></div>
        <div class="hook-center"></div>
        <Face :faceColor="faceColor" :handsColor="handsColor" />
        <Strap :strapColor="strapColor" :loopColor="loopColor"/>
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
    props:{
        faceColor: String,
        handsColor: String,
        strapColor: String,
        loopColor: String,
    },
    components:{Face, Strap},
    methods:{},
}
</script>

<style lang="scss" scoped>
.watch-box{
    height: 100%;
    position: absolute;
    right: 250px;
    //top: -20px;
    top: 0;
    width: 170px;
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
    top: calc(50% - 280px);
    left: 50%;
    transform: translate(-50%, -50%);
}

.hook-center{ 
        width: 5px;
        height: 36px;
        z-index: 4;
        background-color: rgb(187, 187, 187);
        //background-color: rgb(213, 241, 48);
        position: absolute;
        top: calc(50% - 280px);
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>