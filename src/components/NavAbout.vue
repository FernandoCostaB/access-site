<template> <!--Adicionando branch-->

  <div id="app">   
    

    <div id="">     

      <section class="menu cid-rQ6Q2NP9fh" once="menu" id="menu2-e" >          
          <nav class="navbar1 navbar-expand beta-menu navbar-dropdown 
          align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent" v-bind:class="{ 'correcao-top': showAlert, '': false }">
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <div class="hamburger">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </button>
              <div class="menu-logo">
                  <div class="navbar-brand">
                      <span class="navbar-logo">
                        <router-link to="/"><img src="assets/images/logo_branco.png" alt="AccessCrédito" title="" style="height: 3.8rem;"></router-link></span>
                  </div>
              </div>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                      <li class="nav-item">
                          <router-link class="nav-link link text-white display-4" to="/about">Sobre</router-link>                        
                      </li>
                      <li class="nav-item">
                          <a class="nav-link link text-white display-4" href="https://api.whatsapp.com/send?phone=5592994941733" target="blank"><span class="socicon-whatsapp socicon mbr-iconfont mbr-iconfont-social"></span></a>    
                      </li>
                      <li class="nav-item">
                          <a class="nav-link link text-white display-4" href="https://www.facebook.com/accesscreditobrasil" target="blank"><span class="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link link text-white display-4" href="https://www.instagram.com/accesscredito/" target="blank"><span class="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link link text-white display-4" href="https://www.youtube.com/channel/UChV1fMiMyuK17_wAGVABcVg" target="blank"><span class="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span></a>
                      </li>
                      <li class="nav-item">
                          <button class="minhaconta"><a class="nav-link link text-white display-4" href="https://blog.accesscredito.com.br/" target="blank">Blog</a></button>
                      </li>
                    
                  </ul>
              </div>
          </nav>
      </section>

    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
    data() { 
      return {
        showAlert: true
      }
    }
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#alerta{
  width: 100%;
  padding: 2px;
  position: fixed;
  top: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.color-negrito{
  color: #fff;
  font-weight: bold;
  padding: 0; margin: 0;
}

.color-normal{
  color: #fff;
  font-weight: normal;
  padding: 0; margin: 0;
  font-size: calc(3px + 1vw);
   line-height: 1;
}
.modal_x{
        position: absolute;
        margin-top: 0;
        cursor: pointer;        
        right: 15px;
    }
.correcao-top{
  margin-top: 10px;
}

.navbar1 {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .5rem 1rem;
    margin-top: 0%;
    height: 90px;
}

.cid-rQ6Q2NP9fh .navbar1.navbar-short {
    min-height: 60px;
    transition: all .2s;
}

.cid-rQ6Q2NP9fh .navbar1 {
    background-color:#353535;
    transition: none;
    min-height: 77px;
    padding: .5rem 0;
}
.text-white { 
    color: #ffffff;
}
 

</style>
