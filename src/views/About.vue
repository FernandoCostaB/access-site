<template>
  <div class="about">
      
<section class="engine"><a href="https://accesscredito.com.br">AccessCrédito</a></section>
<section class="cid-s5B7ZyQvOU img-one mbr-fullscreen mbr-parallax-background" id="header2-1">
    <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(35, 35, 35);"></div>
    <div class="container align-center">
        <div class="row justify-content-md-left">
            <div class="box-text mbr-white col-md-10">
                
                </div>
                <h2 class="p-text mbr-section-title pb-3 align-center mbr-fonts-style display-2"><span class="span-icon mbr-section-title pb-3 align-center mbr-fonts-style display-2"></span>
                Conheça nossa Instituição</h2>
        </div>
    </div>
</section>
<section class="img-two counters1 counters cid-rQ8iTALhmD" id="counters1-w">
    <div class="mbr-overlay" style="opacity: 0.8; background-color: rgb(255, 255, 255);"></div>
        <div class="container">
            <h2 class="header-t text-left mbr-section-title pb-3 align-center mbr-fonts-style display-2">AccessCrédito em Manaus</h2>
            <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                <p class="text-left">
                Nos encontre através dos contatos abaixo, ou nos vários canais disponíveis<br>
                no botão azul que fica no canto direito abaixo.
                </p>
            </h3>
            </div>
      </section>
      <section class=" counters1 counters cid-rQ8iTALhmD" id="counters1-w">
          <img class="img-t" src="/assets/images/access-manaus.png" alt="">
          </section>
          <section class="img-two counters1 counters cid-rQ8iTALhmD" id="counters1-w">
    <div class="mbr-overlay" style="opacity: 0.8; background-color: rgb(255, 255, 255);"></div>
        <div class="container">
            <h2 class="header-t text-left mbr-section-title pb-3 align-center mbr-fonts-style display-2">AccessCrédito no Mundo</h2>
            <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                <p class="text-left">
                Nos encontre através dos contatos abaixo, ou nos vários canais disponíveis<br>
                no botão azul que fica no canto direito abaixo.
                </p>
            </h3>
            </div>
            
      </section>
      <section class="img-4 counters1 counters cid-rQ8iTALhmD" id="counters1-w">
        <img class="img-t" src="/assets/images/access-mundo.png" alt="">
          </section>
          <section class="counters1 counters cid-rQ8iTALhmD section-4" id="counters1-w">
        <div class="container">
            <h2 class="text-4 mbr-section-title pb-3 align-center mbr-fonts-style display-2">Transformando a Realidade do Empreendedor!</h2>
      </div>
      </section>
          <Footer />
      

      
    <!--Botao solicite aqui-->
    <div id="scrollToTop" class="scrollToTop mbr-arrow-up animated infinite pulse">

        <a class="Scrolldecoration" style="text-align: center;" href="/">solicite aqui<i class="button-solicite"></i></a>
    </div>
    <FloatActionButton/>
  </div>
</template>

<script>
// @ is an alias to /src
import FloatActionButton from "@/components/FloatActionButton.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    FloatActionButton,
    Footer
   },
  mounted() {
        document.body.scrollTop = document.documentElement.scrollTop = 0; // Levar a pagina ao topo
    },
};
</script>
<style>
.img-one {
    width: 100%;
    background-image: url(/assets/images/imgsobre.png); 
    
    }
.text-about { 
    margin-top: 63%;
    font-size: 50px; 
    font-weight: 400;
    text-align: left;
}
.p-text { 
    color: #ffffff;
    margin-top: 40%;
    text-align: center;
    font-size: 48px;
    font-weight: 400;
}
.box-text { 
    align-items: left;
}   
.img-icon {
    padding-left: 22px;

}
.img-two {
    background-image: url(/assets/images/mundibg.jpg); 
    
    }
.cid-s5BFixW7a8 { 
    background: url(/assets/images/mundibg.jpg);
}
.text-about-one { 
    font-size: 50px; 
    font-weight: 400;
    color: #353535;
    margin-bottom: 60%;
}
.p-text-one { 
    color: #353535;

    text-align: left;
}
.img-t {
    width: 100%; 
    
    }
    .header-t { 
        margin-top: 60px;
    }
.img-4 {
    background-image: url(); 
    
    }
.section-4 {
    height: 150px; 
    align-items: center;
    font-weight: 700;
    display: flex;
    }
.text-4 {
    font-weight: 400;
    }
.text-white {
    color: #ffffff
    }
.span-icon { 
    width: 64px;
    height: 64px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-image: url(/assets/images/line-chart.png); /*Colocando cor com transparencia*/
    display: flex;
    align-items: center; /*Alinhando na horizontal*/
    justify-content: center; /*Alinhando na vertical*/
}

@media (max-width: 767px) { 
  .span-icon { 
    display: none;
  }
} 


</style>