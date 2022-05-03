<template>
    <div :style="`background-color: ${strapColor ? strapColor : '#342211'};`" class="strap">
        <div class="under-face"></div>

        <div class="loop-box">
            <div :style="`background-color: ${loopColor ? loopColor : 'grey'};`" class="loop"></div>
            <div :style="`background-color: ${loopColor ? loopColor : 'grey'};`" class="loop"></div>
        </div>

        <div class="point-box">
            <div class="point"></div>
            <div class="point"></div>
            <div class="point"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Strap",
    data(){
        return{}
    },
    props:{
        strapColor: String,
        loopColor: String,},
    components:{},
    methods:{},
}
</script>

<style lang="scss" scoped>

.strap{
    width: 55px;
    height: 600px;
    z-index: 2;
    //background-color: purple;
    position: absolute;
    top: calc(50% + 30px);
    left: 50%;
    transform: translate(-50% , -50%);
}

.under-face{
    width: 65px;
    height: 180px;
    z-index: 1;
    border-width: 10px 5px;
    border-style: solid;
    border-color: grey;
    //background-color: rgb(213, 241, 48);
    position: absolute;
    top: calc(50% - 30px);
    left: 50%;
    transform: translate(-50% , -50%);
}

.loop-box{
   // width: 65px;
   // height: 190px;
    z-index: 1;
   /* border-width: 10px 5px;
    border-style: solid;
    border-color: grey;*/
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50% , 0%);

    .loop{
        //background-color: rgb(175, 173, 173);
        margin: 5px 0;
        width: 65px;
        height: 12px;
    }
}

.point-box{
    width: 55px;
    height: 80px;
    z-index: 1;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50% , 0%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .point{
        background-color: white;
        height: 12px;
        width: 12px;
        border-radius: 50%;
    }
}
</style>