<template>
<div>
    <fab
    :position="position"
    :bg-color="bgColor"
    :actions="fabActions"
    @wts="wts"
    @chat="chat"
    @facebook="facebook"
    @tel="tel"
    @email="email"
    @numero="numero"
    ></fab>
</div>
</template>
<script>

import fab from 'vue-fab';

export default {
  name: "FloatButton",
  components: {
    fab
  },
  data() {
      return {
          bgColor: '#FFCD00',
          position: 'bottom-right',
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
      }
  }  
};
</script>


