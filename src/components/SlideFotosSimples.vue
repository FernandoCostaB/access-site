<template>
  <div class="conteudo-foto row">
    
    <div class="col-2">
        <img class="nav-foto" v-on:click="prev()" src="assets/images/backpreto.svg"/>
    </div>
    <div class="col-8">
        <div v-if="page==1">
            <img class="foto-cliente" src="assets/images/eulis.jpg"/>
            <p class="mbr-content-text p-desc-cliente" >Com a AccessCrédito pude investir no meu sonho. Crédito facilitado. Atendimento diferenciado.</p>
            <p class="p-nome-cliente p-desc-cliente" >EULIS SILVA DE LIMA</p>
        </div>
         <div v-if="page==2">
            <img class="foto-cliente" src="assets/images/raimundo.jpg"/>
            <p class="mbr-content-text p-desc-cliente" >Por ser cliente há muito tempo. A taxa de juros é diferenciada. AccessCrédito me ajudou a investir no meu negócio.</p>
            <p class="p-nome-cliente p-desc-cliente" >RAIMUNDO BARROSO</p>
        </div>
         <div v-if="page==3">
            <img class="foto-cliente" src="assets/images/teliane.jpg"/>
            <p class="mbr-content-text p-desc-cliente" >Trabalho com vários bancos. A AccessCrédito tem a facilidade de crédito disponível sem burocracia.</p>
            <p class="p-nome-cliente p-desc-cliente" >TELIANE AMARAL</p>
        </div>
         <div v-if="page==4">
            <img class="foto-cliente" src="assets/images/marcilene.jpg"/>
            <p class="mbr-content-text p-desc-cliente" >Todo negócio quando você começa precisa sempre de um suporte. E a AccessCrédito foi um pai pra mim. Abriu portas sem muitas burocracias me ajudando a crescer e desenvolver mais rápido.</p>
            <p class="p-nome-cliente p-desc-cliente" >MARCILENE ROCHA</p>
        </div>
         <div v-if="page==5">
            <img class="foto-cliente" src="assets/images/sebastiao.jpg"/>
            <p class="mbr-content-text p-desc-cliente" >Comecei com conserto de relógio, a AccessCrédito ajudou a investir em outro negócio. Hoje eu trabalho com roupas esportivas.</p>
            <p class="p-nome-cliente p-desc-cliente" >SEBASTIÃO FERNANDES</p>
        </div>
         <div v-if="page==6">
            <img class="foto-cliente" src="assets/images/raimunda.jpg"/>
            <p class="mbr-content-text p-desc-cliente" >Tenho minha banca desde 2010. A AccessCrédito faz parte desse sonho.</p>
            <p class="p-nome-cliente p-desc-cliente" >RAIMUNDA ORENCIO</p>
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
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 2000);
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
       text-align:center;
       margin: 0;
       padding:0;
   }
   .p-nome-cliente{
       color: #000;
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

</style>

