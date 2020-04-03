<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  mounted(){
    localStorage.getItem('path')?this.$store.dispatch('routerWatch',localStorage.getItem('path')):''
    // console.log(this.$route)
    // this.$store.dispatch('routerWatch',val.path)
  },
  watch:{
    $route: {
    handler: function(val, oldVal){
      if(val==oldVal){
        return;
      }
      this.$store.dispatch('routerWatch',val.path)
    },
    // 深度观察监听
    deep: true
  }
  }
}
</script>
<style lang="scss">

</style>
