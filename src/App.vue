<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'App',
  beforeMount(){
    this.$store.dispatch('getCoffeeList');
  },
  
}
</script>

<style lang="scss">

  :root {
    --boxShadow: 0 0 3rem rgba(0,0,0,.1);
    --reset-margin: 0;
    --reset-padding: 0;
    --brown: #2F2926;
    --dark-green: #0E927D;
    --light-green: #58BF94;
    --pink: #F3E4E1;
    --orange: #E5674E;
    --white: #FFFFFF;
    --landing-bgc:#38846D;
    --gray-rgba: rgba(255, 255, 255, 0.8);
    --gray-rgba2:rgba(255, 255, 255, 0.08);
    --gray-rgba3:rgba(255, 255, 255, 0.7);
    --gray-rgba4:rgba(255, 255, 255, 0.5);
  }

</style>
