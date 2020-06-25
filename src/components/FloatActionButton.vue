<template>
<div class="fab-container">
    <div class="fab1 fab-icon-holder">
        <i class="fas fa-comments" @click="abrirMenu()"></i>

        <ul class="fab-options"  v-bind:class="{ 'mostrar': expandir, '': false }">
            <li @click="wts()" >
                <span class="fab-label"> Whatsapp</span>
                <div class="fab-icon-holder">          
                    <i class="fab fa-whatsapp"></i>
                </div>
            </li>
            <li @click="chat()">
                <span class="fab-label"> Fale Conosco</span>
                <div class="fab-icon-holder">
                    <i class="far fa-comments"></i>
                </div>
            </li>
            <li @click="facebook()">
                <span class="fab-label"> Facebook</span>
                <div class="fab-icon-holder">
                    <i class="fab fa-facebook-square"></i>
                </div>
            </li>
            <li @click="tel()">
                <span class="fab-label"> Ligar</span>
                <div class="fab-icon-holder">
                    <i class="fas fa-phone-alt"></i>
                </div>
            </li>
            <li @click="email()">
                <span class="fab-label"> E-mail</span>
                <div class="fab-icon-holder">
                    <i class="fas fa-envelope"></i>
                </div>
            </li>

            <li @click="numero()">
                <span class="fab-label"> Deixe seu Número</span>
                <div class="fab-icon-holder">
                    <i class="fas fa-mobile-alt"></i>
                </div>
            </li>
        </ul>
    </div>    
</div>
</template>
<script>

export default {
  name: "FloatActionButton",
  data() {
      return {
          bgColor: '#FFCD00',
          position: 'bottom-right',
          expandir: false,
          fabActions: [
              {
                  name: 'wts',
                  icon: 'chat_bubble_outline',
                  color: '#00B8D7'
              },
              {
                  name: 'chat',
                  icon: 'forum',
                  color: '#00B8D7'
              },{
                  name: 'facebook',
                  icon: 'thumb_up_alt',
                  color: '#00B8D7'
              },
              {
                  name: 'tel',
                  icon: 'phone',
                  color: '#00B8D7'
              },{
                  name: 'email',
                  icon: 'email',
                  color: '#00B8D7'
              },
              {
                  name: 'numero',
                  icon: 'stay_current_portrait',
                  color: '#00B8D7'
              }
          ]
      }
  },
  methods: {
      wts(){
           window.open('https://nwdsk.co/zap/xDBxO', '_blank');
      },
      chat(){
           window.open('https://nwdsk.co/chat-form/xDBxO', '_blank');
      },
      facebook(){
         window.open('http://m.me/1752860938350240', '_blank');
      },
      tel(){
         window.location.href = 'tel:994941733';
      },
      email(){
           window.location.href = 'mailto:sac@accesscredito.com.br';
      },
      numero(){
         window.open('https://nwdsk.co/call-me/xDBxO', '_blank');
      },
      abrirMenu(){
          if(this.expandir){
              this.expandir = false;
          }else{
              this.expandir = true;
          }

          console.log("Expandir", this.expandir);
      }
  }  
};
</script>

<style scoped>
  .fab-container{
      position:  fixed;
      bottom: 70px;
      right: 15px;
      z-index: 9999;
      cursor: pointer;
  }
  .fab-icon-holder{
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background: rgb(255, 205, 0);
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
     cursor: pointer;
  }

  .fab-icon-holder:hover{
      /*background: #149DCC;*/

  }

  .fab-icon-holder i{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-style: 25px;
      color: #ffffff;
      cursor: pointer;
  }

  .fab1{
      width: 60px;
      height: 60px;
      background: rgb(255, 205, 0);
  }

  .fab-options{
      list-style: none;
      margin: 0;
      position: absolute;
      bottom: 70px;
      right: 0;
      opacity: 0;
  }

  /*.fab:hover + .fab-options, .fab-options:hover,*/ .mostrar{
      opacity: 1;
  }

  .fab-options li{
      display: flex;
      justify-content: flex-end;
      padding: 5px;
  }

  .fab-label{
      padding: 2px 5px;
      align-self: center;
      user-select: none;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 16px;
      background: #666;
      color: #fff;
      box-shadow: 0 6px 20px rgba(0,0,0, 0.2);
      margin-right: 10px;

  }

</style>


