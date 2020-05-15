<template>
  <div class="simulador">
    <div class="menu-simulador">
        <ul>
            <li><a href="#" v-on:click="onSelectPage(1)">1 - Valor</a></li>
            <li><a href="#" v-on:click="onSelectPage(2)">2 - Parcela</a></li>
            <li><a href="#" v-on:click="onSelectPage(3)">3 - Dia</a></li>
            <li><a href="#" v-on:click="onSelectPage(4)">4 - Motivo</a></li>
            <li><a href="#" v-on:click="onSelectPage(5)">5 - Proposta</a></li>
            
        </ul>
     </div>
     <h3 class="dwRrHP">De quanto voce precisa?</h3>
    <div class="sc-fYiAbW hfKksW" v-if="page === 1">
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

    <div class="sc-fYiAbW hfKksW" v-else-if="page === 2">
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

    <div class="sc-fYiAbW hfKksW" v-else-if="page === 3">
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

    <div class="sc-fYiAbW hfKksW" v-else-if="page === 4">
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

    <div class="sc-fYiAbW hfKksW" v-else-if="page === 6">
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

    <div class="sc-fYiAbW hfKksW" v-else-if="page === 7">
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

    <div class="sc-fYiAbW hfKksW" v-else-if="page === 8">
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

    <div class="sc-fYiAbW hfKksW" v-else-if="page === 9">
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
      page: 1,
      valorPersonalizado: 3000,
      valorParcPersonalizada: 6,
      ValorDiaPersonalizado: 5,
      ValorMotiPersonalizado: "",
      valorCredito:0,
      valorParcela:0,
      valorDia:0,
      valorMotivo: "",
    };
  },
  methods: {
      onSelectPage(valor){
          this.page = valor;
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

.menu-simulador ul {
    padding: 0px;
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
}
.menu-simulador ul li {display:inline; }
.menu-simulador ul li a {width: 103px; padding:2px; margin-right: 1px; float:left;}

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
}
</style>
