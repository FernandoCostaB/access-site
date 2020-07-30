<template>
  <div class="about">
      <NavAbout />
<section class="img-one cid-s5B7ZyQvOU mbr-parallax-background " id="header2-1">
    <div class="mbr-overlay" style="opacity: 1; background-color: rgb(35, 35, 35);">
    <div id="fundo-externo">
        <div id="fundo">
                <img class="img-one" src="/assets/images/imgsobre2.png" alt="">
            </div>
        </div>
    </div>
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
    <div class="mbr-overlay" style="opacity: 0.9; background-color: rgb(255, 255, 255);"></div>
        <div class="container">
            <h2 class="header-t text-left mbr-section-title pb-3 align-center mbr-fonts-style display-2 text-font">AccessCrédito em Manaus</h2>
            <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                <p class="text-left text-font">
                A AccessCrédito é uma Instituição de Microfinanças que tem como objetivo de fomentar o crédito para micro e pequenos empreendedores
                em Manaus, capital do estado do Amazonas. <br><br>
                Está consolidada em Manaus desde 2011. Durante todo esse tempo vem concedendo crédito a milhares de pessoas que já
                se beneficiaram com a oportunidade. <br><br>
                O microcrédito é uma forma rápida, simples e sem burocracia de conseguir um empréstimo para desenvolver seu própio negócio e 
                com isso promover também o desenvolvimento da economia local.
                
                </p>
            </h3>
            </div>
      </section>
      <section class=" counters1 counters cid-rQ8iTALhmD" id="counters1-w">
          <img class="img-t" src="/assets/images/access-manaus.png" alt="">
          </section>
          <section class="img-two counters1 counters cid-rQ8iTALhmD" id="counters1-w">
    <div class="mbr-overlay" style="opacity: 0.9; background-color: rgb(255, 255, 255);"></div>
        <div class="container">
            <h2 class="header-t text-left mbr-section-title pb-3 align-center mbr-fonts-style display-2 text-font">AccessCrédito no Mundo</h2>
            <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                <p class="text-left text-font">
                A rede da Access opera em vários paisés da Ásia central e da África, com sua sede administrativa na Alemanha,
                tem o foco voltado para as micro, pequenas e médias empresas.<br>
                Atualmente, compreende dez Instituições de Microfinanças e está presente em 4 continentes.
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
import NavAbout from "@/components/NavAbout.vue";

export default {
  name: "About",
  components: {
    FloatActionButton,
    Footer,
    NavAbout
   },
  mounted() {
        document.body.scrollTop = document.documentElement.scrollTop = 0; // Levar a pagina ao topo
    },
};
</script>
<style>
.img-one {
    width: 100%;
    background-image: url(); 
    }
.text-about { 
    margin-top: 63%;
    font-size: 50px; 
    font-weight: 400;
    text-align: left;
}
.p-text { 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffffff;
    margin-top: 45%;
    text-align: center;
    font-size: 48px;
    font-weight: 600;
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
.text-font { 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 350;
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

    text-align: center;
}
.img-t {
    width: 100%; 
    
    }
    .header-t { 
        margin-top: 60px;
    }
.img-4 {
    background-image: url(); 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    background-image: url(/assets/images/icone-conheca.png); /*Icone do header*/
    display: flex;
    align-items: center; /*Alinhando na horizontal*/
    justify-content: center; /*Alinhando na vertical*/
}

@media (max-width: 767px) { 
  .span-icon { 
    display: none;
  }
} 
@media (max-width: 767px) { 
  .p-text { 
    padding-left: 10%;
    padding-top: 10%;
  }
}
@media (max-width: 1024px) { 
  .p-text { 
    margin-top: 30%;
    font-size: 20px;
  }
} 

#fundo-externo { 
    overflow: hidden; /* para que não tenha rolagem se a imagem de fundo for maior que a tela */
    width: 100%;
    height: 100%;
    position: relative;
}
#fundo {
    position: fixed; /* posição fixa para que a possível rolagem da tela não revele espaços em branco */
    width: 100%;
    height: 100%;
}

</style>