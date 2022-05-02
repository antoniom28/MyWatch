<template>
    <div class="strap">
        <div class="under-face-top"></div>
    </div>
</template>

<script>
export default {
    name:"Strap",
    data(){
        return{}
    },
    props:{},
    components:{},
    methods:{},
}
</script>

<style lang="scss" scoped>
.strap{
    width: 55px;
    height: 550px;
    z-index: 1;
    background-color: purple;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
}

.under-face-top{
    width: 65px;
    height: 190px;
    z-index: 1;
    border-width: 10px 5px;
    border-style: solid;
    border-color: grey;
    //background-color: rgb(213, 241, 48);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
}

</style>