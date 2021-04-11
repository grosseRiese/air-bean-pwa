<template>
  <section class="section-profile">
      <img src="../assets/img/graphics-header.svg" alt="" class="top-img-profile">

      <button class="btn-menu-profile" @click="$router.push('/Nav')">
        <img src="../assets/img/navicon.svg" /> 
      </button>

      <article class="login-profile">
        <img src="../assets/img/land-lgo.svg" alt="" class="logo">
        <section class="text-profile">
          <h1> Välkommen till AirBean-familjen!</h1>
          <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
        </section> <!--//.text-profile-->
        <label class="lbl-name" for="fullName">
            Namn
        </label>
        <input type="text" name="fullName" class="input-name" />
        
        <label class="lbl-email" for="email">
              Epost
        </label>
        <input type="email" name="email" class="input-email" />
        <label class="GDPR-lbl"> 
          <input type="radio" name="GDPRok" value="GDPR OK!" />
            <span for="GDPRok" >GDPR OK!</span>
        </label> 
        <button class="btn-profile" @click="$router.push('/orderhistory')">
          <span>Brew me a cup! </span> 
        </button>
      </article>
      <img src="../assets/img/graphics-footer.svg" class="foot-img-profile" alt="">
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@400;600&display=swap');

.section-profile{
    display: grid;
    grid-template-columns:  auto;
    grid-template-rows: auto;
    grid-template-areas:"header-profile"
                        "content-profile"
                        "footer-profile";
    align-content: center;
    margin: auto;                    
    background-color:var(--brown);
    min-height:100vh;
    width: auto;
    max-width: auto;
    min-width: 100%;
    height: auto; 

    .top-img-profile{
      grid-area: header-profile;
      width:100%;
      position: relative;
    }
    .btn-menu-profile{
      position: absolute;
      margin-top: 1rem;
      margin-left: 1rem;
      border: none;
      text-decoration: none;
      display: inline-block;
      font-size: 1.6vw;
      cursor: pointer;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: white;
    }
    .login-profile{
      grid-area: content-profile;
      max-width:90%;
      min-width:90%;
      width:auto;
      font-size: 2vw;
      background-color:var(--pink);
      margin:auto;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas:"logo-area"
                          "text-profile-area"
                          "lbl-name-area"
                          "input-name-area"
                          "lbl-email-area"
                          "input-email-area"
                          "GDPR-lbl-area"
                          "btn-profile-area";
      box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.6);
      border-radius: 3px;
    

      .logo{
        grid-area:logo-area;
        color:var(--brown);
        justify-self: center;
        text-align: center;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        margin-top:2rem;
        width:250px;
        height:80px;
      }
      .text-profile{
        grid-area: text-profile-area;
        justify-self: center;
      
        h1{
            font-family: PT Serif;
            font-style: normal;
            font-weight: bold;
            font-size: 1.4rem;
            align-items: center;
            text-align: center;
            color:var(--brown);
            width: auto;
            justify-content: center;
        }
        p{
          width: auto;
          font-family: Work Sans;
          font-size: 1rem;
          align-items: center;
          text-align: center;
          color:var(--brown);
        }
      }
      .lbl-name{
        grid-area:lbl-name-area;
      }
      .input-name{
        grid-area:input-name-area;
      }
      .lbl-email{
        grid-area:lbl-email-area;
      }
      .input-email{
        grid-area:input-email-area;
      }
      .lbl-email,.lbl-name{
        font-family: Work Sans;
        font-size: 1rem;
        align-items: center;
        color: var(--brown);
        justify-self:start;
        margin-left: 2rem;
        /*  margin-top: 1.2rem;*/
      }
      .input-name,.input-email{
        width: 70vw;
        height: 3rem;
        /*left: 33px;
        top: 339px;*/
        border: 1px solid var(--brown);
        box-sizing: border-box;
        border-radius: 6px;
        justify-self: center;
      }
      input[type="text"],input[type="email"]{
        background-color:var(--pink);
        font-family: Work Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 120%;
        align-items: center;
        color: var(--brown);
      }
      .GDPR-lbl{
        grid-area:GDPR-lbl-area;
        width:28vw;
        padding:1rem 2rem;

        font-size:4vw ;
        font-family: Work Sans;
        line-height: 120%;
        align-items: center;
        color: var(--brown);
        display: block;
        position: relative;
        cursor: pointer;

        @media only screen and (min-width: 600px) {
          font-size:1vw ;
        }
      
      }
      .btn-profile{
        grid-area:btn-profile-area;
        width: 248px;
        height: 55px;
        background: var(--brown);
        border-radius: 50px;
        color:var(--white);
        justify-self: center;
        margin:1.5rem;
        span{
          font-family: PT Serif;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 120%;
          align-items: center;
          text-align: center;
          color: #FFFFFF;
        }
      }
    }
    .foot-img-profile{
      grid-area:footer-profile;
      width: 100%;
    }

}

</style>