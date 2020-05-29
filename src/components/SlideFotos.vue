<template>
  <div>
    <transition-group tag="div">
      <div class="conteudo-clientes row" v-for="i in [currentIndex]" :key="i">
        <!--img :src="currentImg" /-->
        <div class=" col-md-6" style="margin: 0 auto;">      
            <img class="foto-cliente" :src="currentImg" alt="" title="">
        </div>   

        <div class="col-12 row" style=" margin: 0 auto;">
            <div class="col-md-6" style="margin: 0 auto; text-align:center">
                <p>{{currentDescription}}</p>
                <h6 style="margin:0;padding:0; font-weigth: bold; color: #000;">{{currentName}}</h6>
            </div>
        </div>

      </div>
    </transition-group>

    <p class="prev" @click="prev" >&#10094;</p>
    <p class="next" @click="next" >&#10095;</p>
  </div>
</template>

<script>
export default {
  name: "SlideFotos",
  data() {
    return {
      clientes:[
          {
            foto: 'assets/images/eulis.jpg',
            descricao: 'Com a AccessCrédito pude investir no meu sonho. Crédito facilitado. Atendimento diferenciado.',
            nome: 'EULIS SILVA DE LIMA'
          },
          {
            foto: 'assets/images/raimundo.jpg',
            descricao: 'Por ser cliente há muito tempo. A taxa de juros é diferenciada. AccessCrédito me ajudou a investir no meu negócio.',
            nome: 'RAIMUNDO BARROSO'
          },
          {
            foto: 'assets/images/teliane.jpg',
            descricao: 'Trabalho com vários bancos. A AccessCrédito tem a facilidade de crédito disponível sem burocracia.',
            nome: 'TELIANE AMARAL'
          },
          {
            foto: 'assets/images/marcilene.jpg',
            descricao: 'Todo negócio quando você começa precisa sempre de um suporte. E a AccessCrédito foi um pai pra mim. Abriu portas sem muitas burocracias me ajudando a crescer e desenvolver mais rápido.',
            nome: 'MARCILENE ROCHA'
          },
          {
            foto: 'assets/images/sebastiao.jpg',
            descricao: 'Comecei com conserto de relógio, a AccessCrédito ajudou a investir em outro negócio. Hoje eu trabalho com roupas esportivas.',
            nome: 'SEBASTIÃO FERNANDES'
          },
          {
            foto: 'assets/images/raimunda.jpg',
            descricao: 'Tenho minha banca desde 2010. A AccessCrédito faz parte desse sonho.',
            nome: 'RAIMUNDA ORENCIO'
          }
      ],
      images: [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted: function() {
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.clientes[Math.abs(this.currentIndex) % this.clientes.length].foto;
    },
    currentDescription: function() {
      return this.clientes[Math.abs(this.currentIndex) % this.clientes.length].descricao;
    },
    currentName: function() {
      return this.clientes[Math.abs(this.currentIndex) % this.clientes.length].nome;
    },
  }
};
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
    transition: all 0.9s linear;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width:100%;
    height: 400px;
    opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
    visibility: hidden;
    width:100%;
    opacity: 0;
    }

    img {
    height:600px;
    width:100%
    }

    .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    color: #585858;;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
    }
    
    .next {
    right: 0;
    }

    .prev {
    left: 0;
    }

    .prev:hover, .next:hover {
    background-color: #585858;
    color: #fff;
    }

    .conteudo-clientes{
        width: 100%;
        height: 400px;
    }

    .foto-cliente{
        width: 200px;
        height:200px;
        border-radius: 50%;}

</style>

