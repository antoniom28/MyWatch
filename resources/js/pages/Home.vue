<template>
    <div class="main-container">
        <div class="main-ui">
            <div class="ml-5 text">
                <h4 class="" >MyWatch</h4>
                <h1 v-if="selector == 0" class="" >Choose Face Color</h1>
                <h1 v-else-if="selector == 1" class="" >Choose Hands Color</h1>
                <h1 v-else-if="selector == 2" class="" >Choose Strap Color</h1>
                <h1 v-else-if="selector == 3" class="" >Choose Loop Color</h1>
                <div class="selected-color">
                    <div v-if="faceColor && selector > 0" class="mt-1" >
                        <h5>Face</h5>
                        <span :style="`color:${faceColor ? faceColor : 'black'}`">{{faceColor}}</span> 
                    </div>

                    <div v-if="handsColor && selector > 1" class="mt-3" >
                        <h5>Hands</h5>
                        <span :style="`color:${handsColor ? handsColor : 'black'}`">{{handsColor}}</span> 
                    </div>

                    <div v-if="strapColor && selector > 2" class="mt-3" >
                        <h5>Strap</h5>
                        <span :style="`color:${strapColor ? strapColor : 'black'}`">{{strapColor}}</span> 
                    </div>

                    <div v-if="loopColor && selector > 3" class="mt-3" > 
                        <h5>Loop</h5>
                        <span :style="`color:${loopColor ? loopColor : 'black'}`">{{loopColor}}</span>
                    </div>
                </div>
            </div>

            <div class="choose-box">
                <div class="choose-color">
                    <div 
                        v-for="(color,index) in colors" 
                        :key="index" 
                        class="color-box"
                        :style="`background-color:${color}`"
                        @click="selectColor(color , index)"
                    >

                    </div>

                    <div @click="goNext()" class="next">
                        <span>Next</span>
                    </div>
                </div>
            </div>
        </div>

        
        <Watch 
            :faceColor="faceColor" 
            :handsColor="handsColor"
            :strapColor="strapColor"
            :loopColor="loopColor" 
        />
    </div>
</template>

<script>
import Watch from '../common/Watch.vue'
export default {
    name:"Home",
    data(){
        return{
            colors: ['red','purple','yellow','green','blue','violet','pink'],
            //colorsContrast: ['orange','violet','red','blue','skyblue','green','fuchsia'],
            faceColor: null,
            handsColor: null,
            strapColor: null,
            loopColor: null,
            selector: 0,
        }
    },
    props:{},
    components:{Watch},
    methods:{
        goNext(){
            this.selector++;
        },
        selectColor(color,index){
            switch(this.selector){
                case 0:
                    this.faceColor = color;
                    break;
                case 1:
                    this.handsColor = color;
                    break;
                case 2:
                    this.strapColor = color;
                    break;
                case 3:
                    this.loopColor = color;
                    break;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
h1,h2,h3,h4,h5{
    margin: 0!important;
    padding: 0!important;
}

.main-container{
    position: relative;
    background-image: url("../../../public/img/bg_3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    /* width: 100vw; */
    overflow: hidden;
}

.main-ui{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 80px 0;

    .text{
        line-height: 0.2;
        color: white;
        .selected-color{
            span,h5{
                font-weight: bold;
            }
        }

        h4{
           // color: rgb(61, 16, 16);
        }

        h1{
            font-weight: bold;
        }
    }
}

.choose-box{
    width: 100%;
    height: 70px;
    background-color: white;
    position: relative;
    z-index: 999;

    .choose-color{
        display: flex;
        align-items: center;
        height: 100%;

        .next{
            margin: 0 5px;
            cursor: pointer;

            &:hover{
                span{
                    margin: 0 8px;
                }
            }
            span{
                font-size: 1.3em;
                font-weight: bold;
            }
        }

        .color-box{
            margin: 0 5px;
            height: 30px;
            width: 30px;
            cursor: pointer;
        }
    }

    
}
</style>