<template>
  <div class="conteudo-foto row">
    
    <div class="col-2">
        <img class="nav-foto" v-on:click="prev()" src="assets/images/backpreto.svg"/>
    </div>
    <div class="col-8">
        <div v-if="page==1">
            <div class="row">
              <div class="item active">
                <blockquote>
                  <div class="row">

                    <div class="col-sm-12 col-xl-12">
                      <img class="foto-cliente" src="assets/images/eulis.jpg">
                    </div>

                    <div class="col-sm-12 col-xl-12">
                      <blockquote class="blockquote text-center">
                          <p class="mb-0">Com a AccessCrédito pude investir no meu sonho. Crédito facilitado. Atendimento diferenciado.</p>
                          <footer class="blockquote-footer"><cite title="Source Title">EULIS SILVA DE LIMA</cite></footer>
                      </blockquote>
                    </div>

                  </div>
                </blockquote>
              </div>
            </div>
        </div>
         <div v-if="page==2">
          <div class="row">
                <div class="item active">
                  <blockquote class="blockquote text-center">
                    <div class="row">
                      <div class="col-sm-5 col-xl-12">
                        <img class="foto-cliente" src="assets/images/raimundo.jpg">
                      </div>
                      <div class="col-sm-7 col-xl-12">
                        <blockquote class="blockquote text-center">
                          <p class="mb-0">Por ser cliente há muito tempo. A taxa de juros é diferenciada. AccessCrédito me ajudou a investir no meu negócio.</p>
                          <footer class="blockquote-footer"><cite title="Source Title">RAIMUNDO BARROSO</cite></footer>
                        </blockquote>
                      </div>
                    </div>
                  </blockquote>
                </div>
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
                      <blockquote class="blockquote text-center">
                          <p class="mb-0">Trabalho com vários bancos. A AccessCrédito tem a facilidade de crédito disponível sem burocracia.</p>
                          <footer class="blockquote-footer"><cite title="Source Title">TELIANE AMARAL</cite></footer>
                      </blockquote>
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
                      <blockquote class="blockquote text-center">
                          <p class="mb-0">Todo negócio quando você começa precisa sempre de um suporte. E a AccessCrédito foi um pai pra mim. Abriu portas sem muitas burocracias me ajudando a crescer e desenvolver mais rápido.</p>
                          <footer class="blockquote-footer"><cite title="Source Title">MARCILENE ROCHA</cite></footer>
                      </blockquote>
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
                      <blockquote class="blockquote text-center">
                          <p class="mb-0">Comecei com conserto de relógio, a AccessCrédito ajudou a investir em outro negócio. Hoje eu trabalho com roupas esportivas.</p>
                          <footer class="blockquote-footer"><cite title="Source Title">SEBASTIÃO FERNANDES</cite></footer>
                      </blockquote>
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
                      <blockquote class="blockquote text-center">
                          <p class="mb-0">Tenho minha banca desde 2010. A AccessCrédito faz parte desse sonho.</p>
                          <footer class="blockquote-footer"><cite title="Source Title">RAIMUNDA ORENCIO</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </blockquote>
            </div>
        </div>
    </div>
    <div class="col-2">
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
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css);

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
   font-size: 1rem;
   font-style: normal;

  }
  .item blockquote p:before {
      content: '\f10d';
      left: -1rem;
      top: 0rem;
      font-family: 'FontAwesome';
      position: absolute;
      color: #999;
      font-size: 2rem;
      width: 4rem;
      height: 4rem;
  }

  blockquote small, blockquote .small {
      display: block;
      font-size: 80%;
      line-height: 1.42857143;
      color: #777;
      text-align: right;
  }

  .blockquote-footer{
       font-size: 1rem;
       font-size: 1rem;
       font-style: normal;
  }
</style>

