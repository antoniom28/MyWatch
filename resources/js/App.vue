<template>
  <div class="main-container">
      <Header />
      <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
    name:"App",
    data(){
        return{}
    },
    props:{},
    components: { Main, Header },
    methods:{},
}
</script>

<style lang="scss" scoped>
* {
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */    
    font-family: plex-sans, "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", "Hiragino Sans GB", sans-serif;
}

</style>