<template>
  <div class="simulador">
    <!--div class="menu-simulador">
        <div class="item-menu">
            <p v-bind:class="[page1 || page6 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(1)">1-Valor</p> 
            <span v-if="page1 || page6" class="seta-menu"></span>
        </div>

        <div class="item-menu">
            <p v-bind:class="[page2 || page7 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(2)">2-Parcela</p>
            <span v-if="page2 || page7" class="seta-menu"></span>
        </div>

        <div class="item-menu">
            <p v-bind:class="[page3 || page8 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(3)">3-Dia</p>
            <span v-if="page3 || page8" class="seta-menu"></span>
        </div>

        <div class="item-menu">
           <p  v-bind:class="[page4 || page9 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(4)">4-Motivo</p>
            <span v-if="page4 || page9" class="seta-menu"></span>
        </div>

        <div class="item-menu">
            <span v-if="page5" class="seta-menu2"></span>
            <p v-bind:class="[page5 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(5)">5-Proposta</p>            
        </div>
    </div-->
     
    <div class="sc-fYiAbW hfKksW" v-if="page1">
        <div class="row menu-seta" v-on:click="onSelectPage(10)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>
        <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">De quanto voce precisa?</h3>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_5000" name="how_much" 
                value="2000" label="R$ 2.000" v-on:click="setValor(1,2000)"/>
                <label class="sc-kUaPvJ bJFiyk" for="how_much_5000">R$ 2.000</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_10000" name="how_much" value="3000"
                    label="R$ 3.000" v-on:click="setValor(1,3000)"/>
                    <label class="sc-kUaPvJ bJFiyk" for="how_much_10000">R$ 3.000</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_20000" name="how_much" value="5000"
                 label="R$ 5.000" v-on:click="setValor(1,5000)"/>
                 <label class="sc-kUaPvJ bJFiyk" for="how_much_20000">R$ 5.000</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_30000" name="how_much"
                value="10000" label="R$ 10.000" v-on:click="setValor(1,10000)"/>
                <label class="sc-kUaPvJ bJFiyk" for="how_much_30000">R$ 10.000</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_50000" name="how_much" value="20000"
                label="R$ 20.000" v-on:click="setValor(1,20000)"/>
                <label class="sc-kUaPvJ bJFiyk" for="how_much_50000">R$ 20.000</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hkIXCy" id="how_much_other_value" name="how_much" 
                value="other_value" label="Outro valor" v-on:click="onSelectPage(6)"/>
                <label class="sc-kUaPvJ iVeJis" for="how_much_other_value">Outro Valor</label>
            </div>
        </div>
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page2">
        <div class="row menu-seta" v-on:click="onSelectPage(1)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>
        <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">Em quantas parcelas?</h3>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_5000" v-on:click="setValor(2,2)" name="how_much" value="2" label="2x" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_5000">2x</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_10000" v-on:click="setValor(2,6)" name="how_much" value="6"
                    label="6x" />
                    <label class="sc-kUaPvJ bJFiyk" for="how_much_10000">6x</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_20000" v-on:click="setValor(2,8)" name="how_much" value="8"
                 label="8x" />
                 <label class="sc-kUaPvJ bJFiyk" for="how_much_20000">8x</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" v-on:click="setValor(2,10)" id="how_much_30000" name="how_much"
                value="10" label="10x" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_30000">10x</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_50000" v-on:click="setValor(2,12)" name="how_much" value="12"
                label="12x" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_50000">12x</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hkIXCy" id="how_much_other_value" name="how_much" 
                value="other_value" label="Outro Prazo" v-on:click="onSelectPage(7)" />
                <label class="sc-kUaPvJ iVeJis" for="how_much_other_value">Outro Prazo</label>
            </div>
        </div>
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page3">
        <div class="row menu-seta" v-on:click="onSelectPage(2)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>
        <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">Qual dia para pagar?</h3>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_5000" v-on:click="setValor(3,1)" name="how_much" value="1" label="Dia 1" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_5000">Dia 1</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_10000" v-on:click="setValor(3,5)" name="how_much" value="5"
                    label="Dia 5" />
                    <label class="sc-kUaPvJ bJFiyk" for="how_much_10000">Dia 5</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_20000" v-on:click="setValor(3,10)" name="how_much" value="10"
                 label="Dia 10" />
                 <label class="sc-kUaPvJ bJFiyk" for="how_much_20000">Dia 10</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_30000" v-on:click="setValor(3,20)" name="how_much"
                value="20" label="Dia 20" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_30000">Dia 20</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_50000" name="how_much" v-on:click="setValor(3,30)" value="30"
                label="Dia 30" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_50000">Dia 30</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hkIXCy" id="how_much_other_value" name="how_much" 
                value="other_value" label="Outro Dia" v-on:click="onSelectPage(8)" />
                <label class="sc-kUaPvJ iVeJis" for="how_much_other_value">Outro Dia</label>
            </div>
        </div>
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page4">
        <div class="row menu-seta" v-on:click="onSelectPage(3)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>
        <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">Qual o motivo  ?</h3>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi">
                <div class="p-bt-azul" v-on:click="setValor(4,'Capital de giro')"><p>Capital de giro</p></div>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <p class="p-bt-azul" v-on:click="setValor(4,'Investimento e ampliação')">Investimento e ampliação</p>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
             <p class="p-bt-azul" v-on:click="setValor(4,'Compra de mercadorias')" >Compra de mercadorias</p>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
            <p class="p-bt-azul" v-on:click="setValor(4,'Pagamento de dívidas')" >Pagamento de dívidas</p>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">

            <p class="p-bt-azul"   v-on:click="setValor(4,'Reforma')">Reforma</p>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <p class="p-bt-azul" v-on:click="onSelectPage(9)">Outro Motivo </p>
                <!--input type="radio" class="sc-fONwsr hkIXCy" id="how_much_other_value" name="how_much" 
                value="other_value" label="Outro Dia" v-on:click="onSelectPage(9)" />
                <label class="sc-kUaPvJ iVeJis" for="how_much_other_value">Outro Motivo</label-->
            </div>
        </div>
    </div>

    <div v-else-if="page5">
        <div>
            <div class="row menu-seta" v-on:click="onSelectPage(10)">
                <img style="width: 25px;" src="/assets/images/back.svg"/>
                <p class="col-9 item-menu-p " style="padding-top:10px;">Início</p>
            </div>
            <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">O resumo da sua proposta ficou assim:</h3>
            <div class="sc-eLExRp jQbyzN" style="padding: 0 0 1rem 1rem;">
                <div class="sc-giadOv jOhdwi">
                    <p class="p-label">Você Solicitou: </p>
                    <div class="p-bt-azul-result"><p>R$ {{valorCredito}}</p></div>
                </div>
            </div>
            <div class="sc-eLExRp jQbyzN" style="padding: 0 0 1rem 1rem;">
                <div class="sc-giadOv jOhdwi" width="100%">
                    <p class="p-label">Parcelado em: </p>
                    <div class="p-bt-azul-result"><p>{{valorParcela}}x(vezes)</p></div>
                </div>
            </div>
            <div class="sc-eLExRp jQbyzN" style="padding: 0 0 1rem 1rem;">
                <div class="sc-giadOv jOhdwi" width="100%">
                <p class="p-label">Para pagar no: </p>
                    <div class="p-bt-azul-result"><p>{{valorDia}}º dia do mês</p></div>
                </div>
            </div>
            <div class="sc-eLExRp jQbyzN" style="padding: 0 0 1rem 1rem;">
                <div class="sc-giadOv jOhdwi" width="100%">
                <p class="p-label">Motivo foi: </p>
                    <div class="p-bt-azul-result"><p>{{valorMotivo}}</p></div>
                </div>
            </div>
        </div>

        <div class="valor-parcela">
            <p class="p-label">Você pagaria aproximadamente: (*sujeito a análise) </p>
            <div class="p-bt-azul-result" style="width:50%"><h2>R$ {{valorParcelaFinal}}</h2></div>
        </div>
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page6">
        <div class="row menu-seta" v-on:click="onSelectPage(1)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>
         <div class="row slidecontainer">

            <img class="bt-slide" v-on:click="setCreditoManual(true)" style="margin-right: 15px;" src="/assets/images/menos.svg"/>         
                    
            <label class="col-8 sc-kUaPvJ bJFiyk">R$ {{valorPersonalizado}}</label>

             <img class="bt-slide" v-on:click="setCreditoManual(false)" style="margin-left: 15px;" src="/assets/images/mais.svg"/>         
         </div>
         <br>
         <div class="conteudo-slide">            
            <input type="range" class="slider" step="50" min="1000" v-model="valorPersonalizado" max="5000">          
         </div>
         <br>
         <br>
         <br>

         <div class="slidecontainer-bt">
              <button class="botao-azul" v-on:click="setValor(5,0)"> Continuar </button>             
         </div>       
            
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page7">
        <div class="row menu-seta" v-on:click="onSelectPage(2)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>

         <div class="row slidecontainer">
            <img class="bt-slide" v-on:click="setParcelaManual(true)" style="margin-right: 15px;" src="/assets/images/menos.svg"/>                          
            <label class="col-8 sc-kUaPvJ bJFiyk">{{valorParcPersonalizada}} X</label> 
             <img class="bt-slide" v-on:click="setParcelaManual(false)" style="margin-left: 15px;" src="/assets/images/mais.svg"/>         
         </div>

         <br>
         <input type="RANGE"  class="slider"  min="1"  v-model="valorParcPersonalizada" max="12">
         <br>
         <br>
         <br>

         <div class="slidecontainer-bt">
              <button class="botao-azul" v-on:click="setValor(6,0)"> Continuar </button>             
         </div>       
            
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page8">
        <div class="row menu-seta" v-on:click="onSelectPage(3)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>
         <div class="row slidecontainer">
            <img class="bt-slide" v-on:click="setDiaManual(true)" style="margin-right: 15px;" src="/assets/images/menos.svg"/>                          
            <label class="col-8 sc-kUaPvJ bJFiyk">Dia {{ValorDiaPersonalizado}}</label> 
             <img class="bt-slide" v-on:click="setDiaManual(false)" style="margin-left: 15px;" src="/assets/images/mais.svg"/>         
         </div>

         <br>
         <input type="RANGE"  class="slider"  min="1"  v-model="ValorDiaPersonalizado" max="30" >
         <br>
         <br>
         <br>

         <div class="slidecontainer-bt">
              <button class="botao-azul" v-on:click="setValor(7,0)"> Continuar </button>             
         </div>       
            
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page9">
        <div class="row menu-seta" v-on:click="onSelectPage(4)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>

         <div class="slidecontainer" style="width: 80%;">
                <label class="sc-kUaPvJ bJFiyk">Motivo:
                <input type="text" v-model="ValorMotiPersonalizado">
                </label>               
         </div>
         <br>

         <div class="slidecontainer-bt">
              <button class="botao-azul" v-on:click="setValor(8,0)"> Continuar </button>             
         </div>       
            
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page10">

        <div class="row" style="margin: 0 0 10px 10px">
            <div class="col-6">
                <p class="p-descricao-combo">Micro A (7,90%)</p>
                <div class="conteudo-valor-combo" v-on:click="setComboCredito(1000,6,228.52)">
                    <h3>R$ 1.000</h3>
                    <p class="p-parcela-combo"> *6 parcelas de R$ 228,52</p>
                </div>
            </div>

            <div class="col-6">
                <p class="p-descricao-combo">Micro B (7,40%)</p>
                <div class="conteudo-valor-combo" v-on:click="setComboCredito(3000,6, 674.91)">
                    <h3>R$ 3.000</h3>
                    <p class="p-parcela-combo"> *6 parcelas de R$ 674,91</p>
                </div>
            </div>
        </div>

        <div class="row" style="margin: 0 0 10px 10px">
            <div class="col-6">
                <p class="p-descricao-combo">Micro C (6,90%)</p>
                <div class="conteudo-valor-combo" v-on:click="setComboCredito(5000,10, 751.96)">
                    <h3>R$ 5.000</h3>
                    <p class="p-parcela-combo"> *10 parcelas de R$ 751,96</p>
                </div>
            </div>

            <div class="col-6">
                <p class="p-descricao-combo">Micro D (6,40%)</p>
                <div class="conteudo-valor-combo" v-on:click="setComboCredito(7000,12,905.36)">
                    <h3>R$ 7.000</h3>
                    <p class="p-parcela-combo"> *12 parcelas de R$ 905,36</p>
                </div>
            </div>
        </div>

        <div class="row" style="margin: 0 0 10px 10px">
            <div class="col-6">
                <p class="p-descricao-combo">EPP (3,99%)</p>
                <div class="conteudo-valor-combo" v-on:click="setComboCredito(10000,24,712.73)">
                    <h3>R$ 10.000</h3>
                    <p class="p-parcela-combo"> *24 parcelas de R$ 712,73</p>
                </div>
            </div>

            <div class="col-6">
                 <br>
                <div class="conteudo-valor-combo" v-on:click="onSelectPage(1)">
                    <h3>Mais Opções</h3>
                    <br>
                </div>
            </div>
            
        </div>


    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page11">
        <div class="row menu-seta" v-on:click="onSelectPage(10)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>

        <div class="row" style="margin: 0 0 10px 10px">
            <div class="col-8">
                <p class="p-descricao-combo">*Nome Completo </p>
                <input style="width:100%;" type="text" v-model="valorNome" placeholder="Informe seu nome">
            </div>
        </div>

        <div class="row" style="margin: 0 0 10px 10px">
            <div class="col-8">
                <p class="p-descricao-combo">*Telefone </p>
                <input style="width:100%;" type="text" v-model="valorContato" placeholder="Informe seu contato">
            </div>
        </div>

        <div class="row" style="margin: 0 0 10px 25px">
            <button class="botao-azul2" v-on:click="setValor(8,0)"> Continuar </button> 
        </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Simulador",
  data() {
    return {
      page1: false,
      page2: false,
      page3: false,
      page4: false,
      page5: false,
      page6: false,
      page7: false,
      page8: false,
      page9: false,
      page10: true,
      page11: false,
      valorPersonalizado: 3000,
      valorParcPersonalizada: 6,
      ValorDiaPersonalizado: 5,
      ValorMotiPersonalizado: "",
      valorCredito:0,
      valorParcela:0,
      valorDia:0,
      valorMotivo: "",
      valorParcelaFinal: 215,
      valorNome: "",
      valorContato:"",
    };
  },
  methods: {
      onSelectPage(valor){

          switch(valor){
              case 1: 
              this.page1= true; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false; this.page11= false; break;
              case 2: 
              this.page1= false; this.page2= true; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false; this.page11= false; break;
              case 3: 
              this.page1= false; this.page2= false; this.page3= true; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false; this.page11= false; break;
              case 4: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= true;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false; this.page11= false; break;
              case 5: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= true; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false; this.page11= false; break;
              case 6: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= true; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false; this.page11= false; break;
              case 7: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= true; this.page8= false;
              this.page9= false; this.page10= false; this.page11= false; break;
              case 8: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= true;
              this.page9= false; this.page10= false; this.page11= false; break;
              case 9: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= true; this.page10= false; this.page11= false; break;
              case 10: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= true; this.page11= false; break;
              case 11: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false; this.page11= true;  break;
          }
      },
      setComboCredito(valor,qtd, parcela){
        this.valorCredito = valor;
        this.valorParcela = qtd; //quantidade de parcela
        this.valorParcelaFinal = parcela; //valor de cada parcela do mes
        console.log('valorCredito: ', this.valorCredito);
        console.log('valorParcela: ', this.valorParcela);

        //mostra o form de usuário email    
        this.onSelectPage(11);
      },
      setValor(tipo, valor){
           switch(tipo){
                case 1: 
                    this.valorCredito = valor;
                    console.log('valorCredito: ', this.valorCredito);
                    this.onSelectPage(2);break;
                case 2:
                    this.valorParcela = valor;
                    console.log('valorParcela: ', this.valorParcela);
                    this.onSelectPage(3);break;
                case 3:
                    this.valorDia = valor;
                    console.log('valorDia: ', this.valorDia);
                    this.onSelectPage(4);break;
                case 4:
                    this.valorMotivo = valor;
                    console.log('valorMotivo: ', this.valorMotivo);
                    this.onSelectPage(5);break;
                case 5:
                    //setValor(5,0) aqui nao pega a varivel valor
                    this.valorCredito = this.valorPersonalizado;
                    console.log('valorCredito: ', this.valorCredito);
                    this.onSelectPage(2);break;
                case 6:
                    //setValor(6,0) aqui na pega a variavel valor
                    this.valorParcela = this.valorParcPersonalizada;
                    console.log('valorParcela: ', this.valorParcela);
                    this.onSelectPage(3);break;
                case 7:
                    this.valorDia = this.ValorDiaPersonalizado
                    console.log('valorDia: ', this.valorDia);
                    this.onSelectPage(4);break;
                case 8: 
                    this.valorMotivo = this.ValorMotiPersonalizado;
                    console.log('valorMotivo: ', this.valorMotivo);
                    this.onSelectPage(5);break;
           }
      },
      setCreditoManual(tipo){
          if(tipo){
              if(this.valorPersonalizado >1000){
              this.valorPersonalizado = Number(this.valorPersonalizado) - 50;
              }          
          }else{ 
              if(this.valorPersonalizado <5000){
              this.valorPersonalizado = Number(this.valorPersonalizado) + 50;
              }
          }
          
      },
      setParcelaManual(tipo){
          if(tipo){
              if(this.valorParcPersonalizada >1){
              this.valorParcPersonalizada = Number(this.valorParcPersonalizada) - 1;
              }          
          }else{ 
              if(this.valorParcPersonalizada <12){
              this.valorParcPersonalizada = Number(this.valorParcPersonalizada) + 1;
              }
          }
          
      },
      setDiaManual(tipo){
          if(tipo){
              if(this.ValorDiaPersonalizado >1){
              this.ValorDiaPersonalizado = Number(this.ValorDiaPersonalizado) - 1;
              }          
          }else{ 
              if(this.ValorDiaPersonalizado <30){
              this.ValorDiaPersonalizado = Number(this.ValorDiaPersonalizado) + 1;
              }
          }
          
      }
  }
};
</script>

<style scoped>

.menu-simulador{
    width: 100%;
    height: 30px;   
    display: flex;
    border: 1px solid  #00B8D7;
    text-align: center;
}

.item-menu{
    color: #fff;
    width: 120px;
    display: flex;
    padding: 0 0 0 0;   
    margin:0;
    cursor:pointer;
}
.item-menu-p {
    width: 100px;
    height: 30px; 
    color: #00B8D7; padding: 3px 5px 1px 5px;
    /*background: #007bff;*/
}

.menu-ativo{
    width: 100px;
    height: 28px; 
    padding: 3px 5px 0px 5px;
    color: #fff;
    background: #00B8D7;
}

.seta-menu{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 14px 15px;
    border-color: transparent transparent transparent #00B8D7;
}

.seta-menu3{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 14px 15px;
    border-color: transparent transparent transparent red;
}

.seta-menu2{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 15px 14px 0;
    border-color: transparent #00B8D7 transparent transparent;

}

.slidecontainer {
  width: 70%; margin: 0 auto;
}

.slidecontainer-bt {
  width: 120px; margin: 0 auto;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #00B8D7;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #00B8D7;
  cursor: pointer;
}

.botao-azul{
    padding: 10px 20px 10px 20px;
    border: none;
    color: #fff;
    background: #00B8D7;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
}
.botao-azul:hover, .botao-azul2:hover, .p-bt-azul:hover, .bt-slide:hover, .conteudo-valor-combo:hover {
    background:#009bb5;
}

.botao-azul2{
    padding: 10px 20px 10px 20px;
    border: none;
    color: #fff;
    background: #00B8D7;
    border-radius: 5px;
    cursor: pointer;
}

.p-bt-azul{
  width: 150px;  
  height: 65px;
  color: #fff;
  background: #00B8D7;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  padding-top:15px;
  line-height:20px;
  cursor:pointer;
}

.p-bt-azul-result{
  width: 110px;  
  height: 60px;
  color: #fff;
  background: #00B8D7 ;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  font-weight: 700;
  padding: 10px 3px 0 3px;
  line-height:20px;
  cursor:pointer;
}
.p-label{
    color: #6E747F;
    margin:0;
    padding:0;
}
.valor-parcela{
    margin-left: 15px
}
.valor-parcela > .p-bt-azul-result{
    margin:0;
}

.p-descricao-combo{
    color: #6E747F;
    margin:0;
    padding:0;
    font-size: 15px;
    font-weight: 600 ;
}

.p-parcela-combo{
    margin:0;
    padding:0;
    font-size: 15px;
}

.conteudo-valor-combo{
    background: #00B8D7;
    color: #fff;
    border-radius: 5px;
    padding: 8px;
    text-align:center;
    cursor:pointer;
}

.menu-seta {
    margin-left:20px;
    cursor:pointer;
}

.menu-seta:hover {
    margin-left:20px;
    color:#009bb5;
    text-decoration:underline;
}

.bt-slide{
    width: 40px;
    height: 40px;   
    background: #00B8D7;
    border-radius: 5px;
    padding: 10px;
    margin-top: 12px;
    cursor:pointer;
}

</style>
