<template>
  <div class="simulador">
    <div class="menu-simulador">
        <div class="item-menu">
            <p v-bind:class="[page1 || page6 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(1)">1-Valor</p> 
            <spam v-if="page1 || page6" class="seta-menu"></spam>
        </div>

        <div class="item-menu">
            <p v-bind:class="[page2 || page7 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(2)">2-Parcela</p>
            <spam v-if="page2 || page7" class="seta-menu"></spam>
        </div>

        <div class="item-menu">
            <p v-bind:class="[page3 || page8 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(3)">3-Dia</p>
            <spam v-if="page3 || page8" class="seta-menu"></spam>
        </div>

        <div class="item-menu">
           <p  v-bind:class="[page4 || page9 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(4)">4-Motivo</p>
            <spam v-if="page4 || page9" class="seta-menu"></spam>
        </div>

        <div class="item-menu">
            <spam v-if="page5" class="seta-menu2"></spam>
            <p v-bind:class="[page5 ? 'menu-ativo' : '', 'item-menu-p']" v-on:click="onSelectPage(5)">5-Proposta</p>            
        </div>
     </div>
     
    <div class="sc-fYiAbW hfKksW" v-if="page1">
        <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">De quanto voce precisa?</h3>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_5000" name="how_much" 
                value="2000" label="R$ 2.000" v-on:click="setCreditoPadrao(2000)"/>
                <label class="sc-kUaPvJ bJFiyk" for="how_much_5000">R$ 2.000</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_10000" name="how_much" value="3000"
                    label="R$ 3.000" v-on:click="setCreditoPadrao(3000)"/>
                    <label class="sc-kUaPvJ bJFiyk" for="how_much_10000">R$ 3.000</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_20000" name="how_much" value="5000"
                 label="R$ 5.000" v-on:click="setCreditoPadrao(5000)"/>
                 <label class="sc-kUaPvJ bJFiyk" for="how_much_20000">R$ 5.000</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_30000" name="how_much"
                value="10000" label="R$ 10.000" v-on:click="setCreditoPadrao(10000)"/>
                <label class="sc-kUaPvJ bJFiyk" for="how_much_30000">R$ 10.000</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_50000" name="how_much" value="20000"
                label="R$ 20.000" v-on:click="setCreditoPadrao(20000)"/>
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
        <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">Em quantas parcelas?</h3>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_5000" v-on:click="setParcelaPadrao(2)" name="how_much" value="2" label="2x" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_5000">2x</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_10000" v-on:click="setParcelaPadrao(6)" name="how_much" value="6"
                    label="6x" />
                    <label class="sc-kUaPvJ bJFiyk" for="how_much_10000">6x</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_20000" v-on:click="setParcelaPadrao(8)" name="how_much" value="8"
                 label="8x" />
                 <label class="sc-kUaPvJ bJFiyk" for="how_much_20000">8x</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" v-on:click="setParcelaPadrao(10)" id="how_much_30000" name="how_much"
                value="10" label="10x" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_30000">10x</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_50000" v-on:click="setParcelaPadrao(12)" name="how_much" value="12"
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
        <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">Qual dia para pagar?</h3>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_5000" v-on:click="setDiaPadrao(1)" name="how_much" value="1" label="Dia 1" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_5000">Dia 1</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_10000" v-on:click="setDiaPadrao(5)" name="how_much" value="5"
                    label="Dia 5" />
                    <label class="sc-kUaPvJ bJFiyk" for="how_much_10000">Dia 5</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_20000" v-on:click="setDiaPadrao(10)" name="how_much" value="10"
                 label="Dia 10" />
                 <label class="sc-kUaPvJ bJFiyk" for="how_much_20000">Dia 10</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_30000" v-on:click="setDiaPadrao(20)" name="how_much"
                value="20" label="Dia 20" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_30000">Dia 20</label>
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <input type="radio" class="sc-fONwsr hhfPLM" id="how_much_50000" name="how_much" v-on:click="setDiaPadrao(30)" value="30"
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
        <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">Qual o motivo  ?</h3>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi">
                <div class="p-bt-azul" v-on:click="setMotiPadrao('Capital de giro')"><p>Capital de giro</p></div>
                <!--input type="radio" class="sc-fONwsr hhfPLM" id="how_much_5000" 
                v-on:click="setMotiPadrao('Capital de giro')" name="how_much" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_5000">Capital de giro</label-->
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
                <p class="p-bt-azul" v-on:click="setMotiPadrao('Investimento e ampliação')">Investimento e ampliação</p>
                <!--input type="radio" class="sc-fONwsr hhfPLM" id="how_much_10000" 
                v-on:click="setMotiPadrao('Investimento e ampliação')" name="how_much"/>
                <label class="sc-kUaPvJ bJFiyk" for="how_much_10000">Investimento e ampliação</label-->
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
             <p class="p-bt-azul" v-on:click="setMotiPadrao('Compra de mercadorias')" >Compra de mercadorias</p>
                <!--input type="radio" class="sc-fONwsr hhfPLM" id="how_much_20000"  
                v-on:click="setMotiPadrao('Compra de mercadorias')" name="how_much"/>
                 <label class="sc-kUaPvJ bJFiyk" for="how_much_20000">Compra de mercadorias</label-->
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">
            <p class="p-bt-azul" v-on:click="setMotiPadrao('Pagamento de dívidas')" >Pagamento de dívidas</p>
                <!--input type="radio" class="sc-fONwsr hhfPLM" id="how_much_30000" 
                v-on:click="setMotiPadrao('Pagamento de dívidas')" name="how_much" />
                <label class="sc-kUaPvJ bJFiyk" for="how_much_30000">Pagamento de dívidas</label-->
            </div>
        </div>
        <div class="sc-eLExRp jQbyzN">
            <div class="sc-giadOv jOhdwi" width="100%">

            <p class="p-bt-azul"   v-on:click="setMotiPadrao('Reforma')">Reforma</p>
                <!--input type="radio" class="sc-fONwsr hhfPLM" id="how_much_50000" name="how_much" 
                v-on:click="setMotiPadrao('Reforma')"/>
                <label class="sc-kUaPvJ bJFiyk" for="how_much_50000">Reforma</label-->
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
         <div class="slidecontainer">
                <label class="sc-kUaPvJ bJFiyk">R$ {{valorPersonalizado}}</label>               
         </div>
         <br>
         <input type="RANGE"  class="slider"  min="1000" v-model="valorPersonalizado" max="5000"  value="4">
         <br>
         <br>
         <br>

         <div class="slidecontainer-bt">
              <button class="botao-azul" v-on:click="setCreditoPersonalizado()"> Continuar </button>             
         </div>       
            
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page7">
         <div class="slidecontainer">
                <label class="sc-kUaPvJ bJFiyk">{{valorParcPersonalizada}} X</label>               
         </div>
         <br>
         <input type="RANGE"  class="slider"  min="1"  v-model="valorParcPersonalizada" max="12" value="4">
         <br>
         <br>
         <br>

         <div class="slidecontainer-bt">
              <button class="botao-azul" v-on:click="setParcPersonalizada()"> Continuar </button>             
         </div>       
            
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page8">
         <div class="slidecontainer">
                <label class="sc-kUaPvJ bJFiyk">Dia {{ValorDiaPersonalizado}}</label>               
         </div>
         <br>
         <input type="RANGE"  class="slider"  min="1"  v-model="ValorDiaPersonalizado" max="30" >
         <br>
         <br>
         <br>

         <div class="slidecontainer-bt">
              <button class="botao-azul" v-on:click="setDiaPersonalizado()"> Continuar </button>             
         </div>       
            
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page9">
         <div class="slidecontainer" style="width: 80%;">
                <label class="sc-kUaPvJ bJFiyk">Motivo:
                <input type="text" v-model="ValorMotiPersonalizado">
                </label>               
         </div>
         <br>

         <div class="slidecontainer-bt">
              <button class="botao-azul" v-on:click="setMotiPersonalizado()"> Continuar </button>             
         </div>       
            
    </div>

  </div>
</template>

<script>
export default {
  name: "Simulador",
  data() {
    return {
      page1: true,
      page2: false,
      page3: false,
      page4: false,
      page5: false,
      page6: false,
      page7: false,
      page8: false,
      page9: false,
      page10: false,
      valorPersonalizado: 3000,
      valorParcPersonalizada: 6,
      ValorDiaPersonalizado: 5,
      ValorMotiPersonalizado: "",
      valorCredito:0,
      valorParcela:0,
      valorDia:0,
      valorMotivo: "",
      valorParcelaFinal: 215
    };
  },
  methods: {
      onSelectPage(valor){

          switch(valor){
              case 1: 
              this.page1= true; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false;break;
              case 2: 
              this.page1= false; this.page2= true; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false;break;
              case 3: 
              this.page1= false; this.page2= false; this.page3= true; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false;break;
              case 4: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= true;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false;break;
              case 5: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= true; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false;break;
              case 6: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= true; this.page7= false; this.page8= false;
              this.page9= false; this.page10= false;break;
              case 7: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= true; this.page8= false;
              this.page9= false; this.page10= false;break;
              case 8: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= true;
              this.page9= false; this.page10= false;break;
              case 9: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= true; this.page10= false;break;
              case 10: 
              this.page1= false; this.page2= false; this.page3= false; this.page4= false;
              this.page5= false; this.page6= false; this.page7= false; this.page8= false;
              this.page9= false; this.page10= true;break;
          }
      },
      setCreditoPadrao(valor){
          this.valorCredito = valor;
          console.log('valorCredito: ', this.valorCredito);
          this.onSelectPage(2);
      },
      setParcelaPadrao(valor){
          this.valorParcela = valor;
          console.log('valorParcela: ', this.valorParcela);
          this.onSelectPage(3);
      },
      setDiaPadrao(valor){
          this.valorDia = valor;
          console.log('valorDia: ', this.valorDia);
          this.onSelectPage(4);
      },
      setMotiPadrao(valor){
          this.valorMotivo = valor;
          console.log('valorMotivo: ', this.valorMotivo);
          this.onSelectPage(5);
      },
      setCreditoPersonalizado(){
          this.valorCredito = this.valorPersonalizado;
          console.log('valorCredito: ', this.valorCredito);
          this.onSelectPage(2);
      },
      setParcPersonalizada(){
          this.valorParcela = this.valorParcPersonalizada;
          console.log('valorParcela: ', this.valorParcela);
          this.onSelectPage(3);
      },
      setDiaPersonalizado(){
          this.valorDia = this.ValorDiaPersonalizado
          console.log('valorDia: ', this.valorDia);
          this.onSelectPage(4);
      },
      setMotiPersonalizado(){
          this.valorMotivo = this.ValorMotiPersonalizado;
          console.log('valorMotivo: ', this.valorMotivo);
          this.onSelectPage(5);
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
  width: 50%; margin: 0 auto;
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
.botao-azul:hover, .p-bt-azul:hover {
    background:#009bb5;
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

</style>
