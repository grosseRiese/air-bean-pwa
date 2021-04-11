<template>
  <section class="Landing-Page">
    <aside>
        <img class="left-img" src="../assets/img/intro-graphic-left.svg" alt="">
    </aside>
    <main>
        <img
          src="../assets/img/airbean-landing.svg"
          alt="landing"
          class="abl-img-btn-cntr"
          v-on:click="()=>$router.push('/menu')"/>
    </main>
    <aside>
        <img class="right-img" src="../assets/img/intro-graphic-right.svg" alt="">
    </aside>
  </section>
</template>

<script>
export default {
  name: 'Landing',
  components: {
    
  }

}
</script>
<style lang="scss" scoped>
  .Landing-Page {
    background-color: var(--landing-bgc);

    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-template-areas:"lft . rht"
                        "lft . rht"
                        "lft img-btn rht"
                        "lft . rht"
                        "lft . rht";
    align-content: center;
    height: 100vh;
    width: auto;

    .left-img{
      grid-area: lft; 
      height: 100%; 
      position: fixed; 
      left: 0px; 
      top: 0px; 
    }
    main{
      display: flex;
      grid-area: img-btn;
      justify-self: center;
      align-self: center;
        .abl-img-btn-cntr{
          min-width:auto;
          text-align: center;
          width:auto;
          &:hover{
            cursor: pointer;
            border: 0.1rem solid var(--pink);
          }
        }
    }    
    .right-img{
      grid-area: rht;
      height: 100%; 
      position: fixed; 
      right: 0px; 
      top: 0px; 
  
    }

}
</style>
