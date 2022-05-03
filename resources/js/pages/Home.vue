<template>
    <div class="main-container">
        <div class="main-ui">
            <div class="ml-5 text">
                <h4 class="g-0 m-0 p-0" >MyWatch</h4>
                <h1 class="g-0 m-0 p-0" >Choose Face Color</h1>
            </div>

            <div class="choose-box"></div>
        </div>

        
        <!-- <Watch /> -->
    </div>
</template>

<script>
import Watch from '../common/Watch.vue'
export default {
    name:"Home",
    data(){
        return{}
    },
    props:{},
    components:{Watch},
    methods:{},
}
</script>

<style lang="scss" scoped>
.main-container{
    position: relative;
    background-image: url("../../../public/img/bg_2.jpg");
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
        h4{
            color: rgb(61, 16, 16);
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
}
</style>