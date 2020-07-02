<template> <!--Adicionando branch-->
  <div id="app">
    <div id="nav">
      <!--router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link-->
    
      <section class="menu cid-rQ6Q2NP9fh" once="menu" id="menu2-e">
          <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
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
                        <a href="/"><img src="assets/images/logo.png" alt="AccessCrédito" title="" style="height: 3.8rem;"></a></span>
                  </div>
              </div>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                      <li class="nav-item">
                          <router-link class="nav-link link text-black display-4" to="/about">Sobre</router-link>                        
                      </li>
                      <li class="nav-item">
                          <a class="nav-link link text-black display-4" href="https://api.whatsapp.com/send?phone=5592994941733" target="blank"><span class="socicon-whatsapp socicon mbr-iconfont mbr-iconfont-social"></span></a>    
                      </li>
                      <li class="nav-item">
                          <a class="nav-link link text-black display-4" href="https://www.facebook.com/accesscreditobrasil" target="blank"><span class="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link link text-black display-4" href="https://www.instagram.com/accesscredito/" target="blank"><span class="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link link text-black display-4" href="https://www.youtube.com/channel/UChV1fMiMyuK17_wAGVABcVg" target="blank"><span class="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span></a>
                      </li>
                      <li class="nav-item">
                          <button class="minhaconta"><a class="nav-link link text-black display-4" href="https://blog.accesscredito.com.br/" target="blank">Blog</a></button>
                      </li>
                    
                  </ul>
              </div>
          </nav>
      </section>

    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
