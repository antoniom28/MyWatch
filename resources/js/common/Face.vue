<template>
    <div :style="`border: 2px solid ${faceColor ? faceColor : 'silver'};`" class="base-face standard-circle">
        <div :style="`background-color:${faceColor ? faceColor : 'silver'}`" class="face standard-circle">
            <div :style="`transform: translate(-50% , -50%) rotate(${hour * 15}deg);`" id="hour" class="base-hands hour standard-circle">
                <div :style="`background-color:${handsColor ? handsColor : 'white'}`" class="standard-hands hour"></div>
            </div>

            <div :style="`transform: translate(-50% , -50%) rotate(${minute * 6}deg);`" id="minute" class="base-hands minute standard-circle">
                <div :style="`background-color:${handsColor ? handsColor : 'white'}`" class="standard-hands minute"></div>
            </div>

            <div :style="`transform: translate(-50% , -50%) rotate(${second * 6}deg); background-color:${handsColor ? handsColor : 'white'};`" id="second" class="base-hands second standard-circle">
                <div :style="`background-color:${handsColor ? handsColor : 'white'}`" class="standard-hands second"></div>
            </div>

            <div class="hands standard-circle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Face",
    data(){
        return{
            hour: 0,
            minute: 0,
            second: 0,
            timeInterval: null,
        }
    },
    created(){
        this.timeInterval = setInterval(() => {
            this.takeTime();
        }, 1000);
    },
    props:{
        faceColor: String,
        handsColor: String,
    },
    components:{},
    methods:{
        takeTime(){
            var today = new Date();
            //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            //console.log(time);
            this.hour = today.getHours();
            this.minute = today.getMinutes();
            this.second = today.getSeconds();
            //console.log(this.hour,this.minute,this.second);
        },
    },
}
</script>

<style lang="scss" scoped>
.standard-circle{
    width: 160px;
    height: 160px;
    background-color: #dcdcdc;
    position: absolute;
    border-radius: 50%;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
}

.standard-hands{
    width: 2px;
    height: 100px;
    position: absolute;
    z-index: 3;
    background-color: white;
    bottom: 50%;
    left: 50%;
    transform: translate(-50% , 8%);
    transition: transform 1s linear;

    &.hour{
        height: 25px;
    }

    &.minute{
        height: 45px;
    }

    &.second{
        height: 55px;
    }
}

.base-face{
    .face{
        width: 140px;
        height: 140px;

        .base-hands{
            width: 10px;
            height: 10px;
            background-color: white;
        }

        .hands{
            width: 5px;
            height: 5px;
            background-color: inherit;
        }
    }
}
</style>