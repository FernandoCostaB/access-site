<template>
  <div class="conteudo-foto row">
    
    <div class="col-3">
        <img class="nav-foto" v-on:click="prev()" src="assets/images/backpreto.svg"/>
    </div>
    <div class="col-6">
        <div v-if="page==1">
            <div class="row">
              <div class="item active">
                <blockquote>
                  <div class="row">
                    <div class="col-sm-5 col-xl-12">
                      <img class="foto-cliente" src="assets/images/eulis.jpg">
                    </div>
                    <div class="col-sm-7 col-xl-12">
                      <p>Com a AccessCrédito pude investir no meu sonho. Crédito facilitado. Atendimento diferenciado.</p>
                      <small><span class="p-nome-cliente p-desc-cliente">EULIS SILVA DE LIMA</span>, GERENTE DE LOJA</small>
                      <small>NOME DA LOJA</small>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
        </div>
         <div v-if="page==2">
          <div class="row">
                <div class="item active">
                  <blockquote>
                    <div class="row">
                      <div class="col-sm-5 col-xl-12">
                        <img class="foto-cliente" src="assets/images/raimundo.jpg">
                      </div>
                      <div class="col-sm-7 col-xl-12">
                        <p>Por ser cliente há muito tempo. A taxa de juros é diferenciada. AccessCrédito me ajudou a investir no meu negócio.</p>
                        <small><span class="p-nome-cliente p-desc-cliente">RAIMUNDO BARROSO</span>, GERENTE DE LOJA</small>
                        <small>NOME DA LOJA</small>
                      </div>
                    </div>
                  </blockquote>
                </div>
              <!--img class="foto-cliente" src="assets/images/raimundo.jpg"/>
              <p class="mbr-content-text p-desc-cliente" >Por ser cliente há muito tempo. A taxa de juros é diferenciada. AccessCrédito me ajudou a investir no meu negócio.</p>
              <p class="p-nome-cliente p-desc-cliente" >RAIMUNDO BARROSO</p-->
          </div>
        </div>
         <div v-if="page==3">
            <div class="item active">
                <blockquote>
                  <div class="row">
                    <div class="col-sm-5 col-xl-12">
                      <img class="foto-cliente" src="assets/images/teliane.jpg">
                    </div>
                    <div class="col-sm-7 col-xl-12">
                      <p>Trabalho com vários bancos. A AccessCrédito tem a facilidade de crédito disponível sem burocracia.</p>
                      <small><span class="p-nome-cliente p-desc-cliente">TELIANE AMARAL</span>, GERENTE DE LOJA</small>
                      <small>NOME DA LOJA</small>
                    </div>
                  </div>
                </blockquote>
            </div>
        </div>
         <div v-if="page==4">
            <div class="item active">
                <blockquote>
                  <div class="row">
                    <div class="col-sm-5 col-xl-12">
                      <img class="foto-cliente" src="assets/images/marcilene.jpg">
                    </div>
                    <div class="col-sm-7 col-xl-12">
                      <p>Todo negócio quando você começa precisa sempre de um suporte. E a AccessCrédito foi um pai pra mim. Abriu portas sem muitas burocracias me ajudando a crescer e desenvolver mais rápido.</p>
                      <small><span class="p-nome-cliente p-desc-cliente">MARCILENE ROCHA</span>, GERENTE DE LOJA</small>
                      <small>NOME DA LOJA</small>
                    </div>
                  </div>
                </blockquote>
            </div>
        </div>
         <div v-if="page==5">
            <div class="item active">
                <blockquote>
                  <div class="row">
                    <div class="col-sm-5 col-xl-12">
                      <img class="foto-cliente" src="assets/images/sebastiao.jpg">
                    </div>
                    <div class="col-sm-7 col-xl-12">
                      <p>Comecei com conserto de relógio, a AccessCrédito ajudou a investir em outro negócio. Hoje eu trabalho com roupas esportivas.</p>
                      <small><span class="p-nome-cliente p-desc-cliente">SEBASTIÃO FERNANDES</span>, GERENTE DE LOJA</small>
                      <small>NOME DA LOJA</small>
                    </div>
                  </div>
                </blockquote>
            </div>
        </div>
         <div v-if="page==6">
            <div class="item active">
                <blockquote>
                  <div class="row">
                    <div class="col-sm-5 col-xl-12">
                      <img class="foto-cliente" src="assets/images/raimunda.jpg">
                    </div>
                    <div class="col-sm-7 col-xl-12">
                      <p>Tenho minha banca desde 2010. A AccessCrédito faz parte desse sonho.</p>
                      <small><span class="p-nome-cliente p-desc-cliente">RAIMUNDA ORENCIO</span>, GERENTE DE LOJA</small>
                      <small>NOME DA LOJA</small>
                    </div>
                  </div>
                </blockquote>
            </div>
        </div>
    </div>
    <div class="col-3">
       <img class="nav-foto" v-on:click="next()" src="assets/images/next.svg"/>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "SlideFotosSimples",
  data() {
    return {
      timer: null,
      page: 1,
    };
  },
  mounted: function() {
    //this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 20000);
    },
    next: function() {
      if(this.page == 6){
        this.page =1;
      }else{  
        this.page += 1;
      }
    },
    prev: function() {
      if(this.page == 1){
        this.page =6;
      }else{  
        this.page -= 1;
      }
    }
  }  
};
</script>

<style scoped>
   .conteudo-foto{
       margin: 20px 0;
   }
   .foto-cliente{
       width: 200px;
       height: 200px;
       margin:0 auto 25px auto;
       border-radius: 50%;
   }
   .p-desc-cliente{
       text-align:justify;
       margin: 0;
       padding:0;
   }
   .p-nome-cliente{
       color: #000;
       text-align:right;
   }

   .nav-foto{
       width: 35px;
       padding: 5px;
       border-radius: 5px;
       cursor:pointer;
   }
   .nav-foto:hover{
       background: #ccc;

   }

  .item blockquote {
    border-left: none; 
    margin: 0;
  }

  .item blockquote img {
      margin-bottom: 5px;
  }
  .item blockquote p{
    text-align: justify;

  }
  .item blockquote p:before {
      content: "\f10d";
      font-family: 'Fontawesome';
      float: left;
      margin-right: 10px;
  }

  blockquote small, blockquote .small {
      display: block;
      font-size: 80%;
      line-height: 1.42857143;
      color: #777;
      text-align: right;
  }
</style>

