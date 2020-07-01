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
        <h1 class="dwRrHP" style="text-align:center; margin: 0 0 15px 0; padding-left:20px">De quanto você precisa?</h1>
        <div class="painel-valores animated pulse" id="btn-two"><!--painel-valores1-->
            <div class="row"><!--painel-valores-->
                <div class="botao-conteudo-azul" v-on:click="setValor(1,2000)"><!--botao-conteudo-azul-->
                    <h3>R$ 2.000</h3>
                </div>

                <div class="botao-conteudo-azul"  v-on:click="setValor(1,3000)">
                    <h3>R$ 3.000</h3>
                </div>

                <div class="botao-conteudo-azul"  v-on:click="setValor(1,5000)">
                    <h3>R$ 5.000</h3>
                </div>
            </div>

            <div class="row">
                <div class="botao-conteudo-azul"  v-on:click="setValor(1,10000)">
                    <h3>R$ 10.000</h3>
                </div>

                <div class="botao-conteudo-azul"  v-on:click="setValor(1,20000)">
                    <h3>R$ 20.000</h3>
                </div>

                <div class="botao-conteudo-azul"  v-on:click="onSelectPage(6)">
                    <h5>Outro Valor</h5>
                </div>
            </div>
        </div>
    </div>


    <div class="sc-fYiAbW hfKksW" v-else-if="page2">      
        <div class="row menu-seta" v-on:click="onSelectPage(1)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>

        <h1 class="dwRrHP" style="text-align:center; margin: 0 0 15px 35px;">Em quantas parcelas?</h1>

        <div class="painel-valores">
            <div class="row">
                <div class="botao-conteudo-azul" v-on:click="setValor(2,2)">
                    <h3>2x</h3>
                </div>

                <div class="botao-conteudo-azul"  v-on:click="setValor(2,6)">
                    <h3>6x</h3>
                </div>

                <div class="botao-conteudo-azul"  v-on:click="setValor(2,8)">
                    <h3>8x</h3>
                </div>
            </div>
        

            <div class="row">
                <div class="botao-conteudo-azul"  v-on:click="setValor(2,10)">
                    <h3>10x</h3>
                </div>

                <div class="botao-conteudo-azul"  v-on:click="setValor(2,12)">
                    <h3>12x</h3>
                </div>

                <div class="botao-conteudo-azul"  v-on:click="onSelectPage(7)">
                    <h5></h5><h5>Outro Prazo</h5>
                </div>
            </div>
        </div>
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page3"><!--sc-fYiAbW hfKksW-->
        <div class="menu-seta" v-on:click="onSelectPage(2)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>
        <h3 class="dwRrHP" style="text-align:center; margin: 0 0 5px 0;">Qual dia para pagar?</h3>
    <div><!--Incluir div-->    
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

    <div class="sc-fYiAbW hfKksW" v-else-if="page5">
        <div class="row menu-seta" v-on:click="onSelectPage(11)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>       

        <div class="painel-resumo">
            <h3 class="dwRrHP" style="text-align:left; margin: 0 0 5px 0;">
                {{valorNome.split(' ')[0]}}, o resumo da sua simulação ficou assim:</h3>

            <div class="row" style="margin-left: 0px;">            
                <div class="col-5 botao-resumo" style=" margin-top: 0;">
                    <p style="font-size: 15px; margin:0; padding:0;">Empréstimo</p>
                    <h4 style="font-weight:bold">R$ {{valorCredito}}</h4>
                </div>

                <div class="col-5 botao-resumo" >
                    <p style="font-size: 15px; margin:0; padding:0;">Qtd. de parcelas</p>
                    <h4 style="font-weight:bold">{{valorParcela}}x (vezes)</h4>
                </div>                         
            </div>

            <div class="row" style="margin: 10px 0px;">
                <div class="col-5 botao-resumo" >
                    <p style="font-size: 15px; margin:0; padding:0;">Valor estimado*</p>
                    <h4 style="font-weight:bold">{{valorParcelaFinal}}</h4>
                </div> 

                <div class="col-5 botao-resumo animated infinite pulse" style="background: #FFCD00;" v-on:click="onSelectPage(12)">
                    <div style="height:15px;"></div>
                    <h4 style="font-weight:bold">FINALIZAR</h4>
                     <div style="height:7px;"></div>
                </div> 

            </div>

            <div class="row" style="margin-top: 10px;">
                <div class="col-12 p-label" style="font-size: 11px; margin-left: 15px;">
                *Considerando uma carência tradicional
                </div> 
            </div>

            <div class="row"  style="margin-top: 10px;">
                <div class="col-12" >
                    <h4 style="color: #6E747F;">Pronto, agora é só finalizar e em seguida enviar sua solicitação!</h4>
                </div>                

            </div>
        </div> 
        
    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page6">
        <div class="row menu-seta" v-on:click="onSelectPage(1)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>
         <div class="row slidecontainer">

            <img class="bt-slide" v-on:click="setCreditoManual(true)" style="margin-right: 5px;" src="/assets/images/menos.svg"/>         
                    
            <label class="col-7 sc-kUaPvJ bJFiyk">R$ {{valorPersonalizado}}</label>

             <img class="bt-slide" v-on:click="setCreditoManual(false)" style="margin-left: 5px;" src="/assets/images/mais.svg"/>         
         </div>
         <br>
         <div class="conteudo-slide">            
            <input type="range" class="slider" step="500" min="500" v-model="valorPersonalizado" max="20000">          
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
            <img class="bt-slide" v-on:click="setParcelaManual(true)" style="margin-right: 5px;" src="/assets/images/menos.svg"/>                          
            <label class="col-7 sc-kUaPvJ bJFiyk">{{valorParcPersonalizada}} X</label> 
             <img class="bt-slide" v-on:click="setParcelaManual(false)" style="margin-left: 5px;" src="/assets/images/mais.svg"/>         
         </div>

         <br>
         <input type="RANGE"  class="slider"  min="1"  v-model="valorParcPersonalizada" max="24">
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
            <img class="bt-slide" v-on:click="setDiaManual(true)" style="margin-right: 5px;" src="/assets/images/menos.svg"/>                          
            <label class="col-7 sc-kUaPvJ bJFiyk">Dia {{ValorDiaPersonalizado}}</label> 
             <img class="bt-slide" v-on:click="setDiaManual(false)" style="margin-left: 5px;" src="/assets/images/mais.svg"/>         
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
        <div class="row menu-seta" v-on:click="onSelectPage(2)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>

        <h1 class="dwRrHP" style="text-align:left; margin: 0 0 15px 10px;">Preencha abaixo para simular sem compromisso</h1>
        <div class="painel-valores1">
            <form @submit.prevent>

                <div class="row"  style="margin-bottom:5px;">
                    <div class="col-md-8 col-xs-12">
                        <input style="width:100%;" v-bind:class="{ 'b-erro': (nomeValido == 3 ), '': false }"  type="text" name="nome_Completo"  
                        v-model="valorNome" placeholder="Nome Completo">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8 col-xs-12">                        
                        <input style="width:100%;" v-bind:class="{ 'b-erro': (emailValido == 3), '': false }" 
                        name="email" type="email" 
                        v-model="valorContato" placeholder="E-mail">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8 col-xs-12">
                        <p class="p-label p-erro" style="font-size: 11px;"
                            v-if="(nomeValido == 3) || (emailValido == 3)">
                            *Você precisa preencher os campos obrigatórios </p>
                        <p class="p-label p-erro" style="font-size: 11px;"
                            v-if="(emailValido == 3)">
                            *Você precisa preencher um e-mail válido</p>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-8 col-xs-12">
                    <button class="botao-azul" style="background: #FFCD00; width: 100%;" v-on:click="setValor(8,0)"> Simular </button> 
                    </div>                
                </div>
            </form>
        </div>

    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page12">
        <div class="row menu-seta" v-on:click="onSelectPage(5)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Voltar</p>
        </div>

        <h1 class="dwRrHP" style="text-align:left; margin: 0 0 15px 10px;">{{valorNome.split(' ')[0]}}, envie sua solicitação e garanta o seu crédito:</h1>
        <div class="painel-valores1">
            <div class="row" style="margin-bottom:10px;">
                <div class="col-md-8 col-xs-12">
                    <input style="width:100%;" type="text" v-model="valorNome" placeholder="Nome Completo" readonly>
                </div>
            </div> 
            <div class="row" style="margin-bottom:10px;">
                <div class="col-md-8 col-xs-12">
                    <input style="width:100%;" type="email" v-model="valorContato" placeholder="E-mail" readonly>
                </div>
            </div> 
            <div class="row" style="margin-bottom:10px;">
                <div class="col-md-8 col-xs-12">
                    <the-mask style="width:100%;"  type="tel"
                    v-bind:class="{ 'b-erro': (cpfCnpjValido == 3 ), '': false }"  
                    :mask="['###.###.###-##', '##.###.###/####-##']" :masked="true" 
                    v-model="valorCpfCnpj" placeholder="CPF ou CNPJ" />
                    
                </div>
            </div> 
            <div class="row" style="margin-bottom:10px;">
                <div class="col-md-8 col-xs-12">
                    <the-mask style="width:100%;" type="tel"
                    v-bind:class="{ 'b-erro': (telefoneValido == 3 ), '': false }"
                    v-model="valorTelefone" 
                    placeholder="Telefone" :mask="['(##) ####-####', '(##) #####-####']" />                   
                </div>
            </div>
            <div class="row" style="margin-bottom:10px;">
                <div class="col-md-8 col-xs-12">
                    <the-mask style="width:100%;" v-model="valorTelefone2"  type="tel"
                    placeholder="Telefone 2 (opcional)" :mask="['(##) ####-####', '(##) #####-####']" /> 
                </div>
            </div> 
            <div class="row" style="margin-bottom:10px;">
                <div class="col-md-8 col-xs-12">
                    <p class="p-label"
                    v-bind:class="{ 'p-erro': (negocioValido == 3 ), '': false }">*Qual a fase do seu negócio? </p>
                    <div class="row">
                        
                        <div class="col-12 " 
                         v-bind:class="[op1 ? 'bt-options-selected' : '', 'bt-options']" v-on:click="setNegocio(1)">
                            <h6>Pensando em começar um negócio</h6>                           
                        </div>

                        <div class="col-12 "
                         v-bind:class="[op2 ? 'bt-options-selected' : '', 'bt-options']" v-on:click="setNegocio(2)">
                            <h6>Iniciei há poucos dias</h6>                           
                        </div>

                        <div class="col-12"
                         v-bind:class="[op3 ? 'bt-options-selected' : '', 'bt-options']" v-on:click="setNegocio(3)">
                            <h6>Já tenho mais de 1 mês</h6>                           
                        </div>
                    </div>
                    
                </div>
            </div> 
            <div class="row" style="margin-bottom:10px;">
                <div class="col-md-8 col-xs-12">
                    <p class="p-label p-erro" style="font-size: 11px;"
                        v-if="(negocioValido == 3) || (telefoneValido == 3) || (cpfCnpjValido == 3) 
                        || (termoPrivacidade != true && termoPrivacidade != 'true')">
                        *Você precisa preencher os campos obrigatórios </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 col-xs-12">
                   <button class="botao-azul" style="background: #FFCD00; width:
                    100%; padding: 15px 10px; font-weight: bold; font-size: 1.5rem;" 
                    v-on:click="setValor(9,0)"> ENVIAR SOLICITAÇÃO</button> 
                </div>                
            </div>
            <br>
            <div class="row">
                <div class="col-md-8 col-xs-12">
                    <input  type="checkbox" v-model="termoPrivacidade" true-value=true false-value=false>
                    <label class="p-label" style="font-size: 11px;"
                     v-bind:class="{ 'p-erro': (termoPrivacidade == 'false' ||  termoPrivacidade == false), '': (termoPrivacidade == 'true' ||  termoPrivacidade == true) }">
                     Li, compreendi e concordo com a 
                     <router-link to="/politica" target="_blank">Política de Privacidade,</router-link>
                     bem como a consultar quaisquer informações a meu respeito nos sistemas dos serviços de informações e proteção ao 
                     crédito e no Sistema de Informações de Crédito - SCR - do Banco Central do Brasil. </label>                   
                </div>                
            </div>
                        
            <loading :active.sync="isLoadingACBS" 
            :can-cancel="false" 
            :color= "colorLoading"
            :is-full-page="true"></loading>

        </div>

    </div>

    <div class="sc-fYiAbW hfKksW" v-else-if="page13">
        <div class="row menu-seta" v-on:click="onSelectPage(1)">
            <img style="width: 25px;" src="/assets/images/back.svg"/>
            <p class="col-9 item-menu-p " style="padding-top:10px;">Início</p>
        </div>

        
        <div class="painel-valores1">
            <h1 class="dwRrHP"  style="text-align:center;  color: #000; font-weight:bold; margin: 0 0 15px 0;">{{valorNome.split(' ')[0].toUpperCase()}} Parabéns!</h1>
            <h4 class="dwRrHP" style="text-align:center; margin: 0 0 15px 0;">Seu pedido está em análise, em breve entraremos em contato.</h4>
            
        </div>
    </div>
    

  </div>
</template>

<script>
    import {TheMask} from 'vue-the-mask';
    import axios from 'axios';
    // Import component loading
    import Loading from 'vue-loading-overlay';
    // Import stylesheet loading
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
    components: {TheMask,Loading},
    name: "Simulador",
    data() {
        return {
        url: process.env.VUE_APP_ROOT_API,
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
        page11: false,
        page12: false,
        page13: false,
        valorPersonalizado: 3000,
        valorParcPersonalizada: 6,
        ValorDiaPersonalizado: 5,
        ValorMotiPersonalizado: "",
        valorCredito:0,
        valorParcela:0,
        valorDia:0,
        valorMotivo: "",
        valorParcelaFinal: "*Sujeito e análise crédito",
        valorNome: "",
        valorContato:"",
        valorTelefone: "",
        valorTelefone2: "",
        valorNegocio: "",
        valorCpfCnpj: "",
        op1: false,
        op2: false,
        op3: false,
        termoPrivacidade: true,
        emailValido: 1, //1-neutro 2-ok 3 erro
        nomeValido: 1,
        cpfCnpjValido:1,
        telefoneValido: 1,
        negocioValido: 1,
        isLoadingACBS:false,
        colorLoading: '#00B8D7'
        };
    },
    methods: {
        onSelectPage(valor){

            switch(valor){
                case 1: 
                this.page1= true; this.page2= false; this.page3= false; this.page4= false;
                this.page5= false; this.page6= false; this.page7= false; this.page8= false;
                this.page9= false; this.page10= false; this.page11= false; this.page12= false; this.page13= false;               
                this.limparValores(); break;
                case 2: 
                this.page1= false; this.page2= true; this.page3= false; this.page4= false;
                this.page5= false; this.page6= false; this.page7= false; this.page8= false;
                this.page9= false; this.page10= false; this.page11= false;this.page12= false; this.page13= false; break;
                case 3: 
                this.page1= false; this.page2= false; this.page3= true; this.page4= false;
                this.page5= false; this.page6= false; this.page7= false; this.page8= false;
                this.page9= false; this.page10= false; this.page11= false;this.page12= false; this.page13= false; break;
                case 4: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= true;
                this.page5= false; this.page6= false; this.page7= false; this.page8= false;
                this.page9= false; this.page10= false; this.page11= false;this.page12= false; this.page13= false; break;
                case 5: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= false;
                this.page5= true; this.page6= false; this.page7= false; this.page8= false;
                this.page9= false; this.page10= false; this.page11= false;this.page12= false; this.page13= false; break;
                case 6: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= false;
                this.page5= false; this.page6= true; this.page7= false; this.page8= false;
                this.page9= false; this.page10= false; this.page11= false;this.page12= false; this.page13= false; break;
                case 7: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= false;
                this.page5= false; this.page6= false; this.page7= true; this.page8= false;
                this.page9= false; this.page10= false; this.page11= false;this.page12= false; this.page13= false; break;
                case 8: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= false;
                this.page5= false; this.page6= false; this.page7= false; this.page8= true;
                this.page9= false; this.page10= false; this.page11= false;this.page12= false; this.page13= false; break;
                case 9: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= false;
                this.page5= false; this.page6= false; this.page7= false; this.page8= false;
                this.page9= true; this.page10= false; this.page11= false;this.page12= false; this.page13= false; break;
                case 10: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= false;
                this.page5= false; this.page6= false; this.page7= false; this.page8= false;
                this.page9= false; this.page10= true; this.page11= false;this.page12= false; this.page13= false; break;
                case 11: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= false;
                this.page5= false; this.page6= false; this.page7= false; this.page8= false;
                this.page9= false; this.page10= false; this.page11= true;this.page12= false; this.page13= false;  break;
                case 12: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= false;
                this.page5= false; this.page6= false; this.page7= false; this.page8= false;
                this.page9= false; this.page10= false; this.page11= false;this.page12= true; this.page13= false;  break;
                case 13: 
                this.page1= false; this.page2= false; this.page3= false; this.page4= false;
                this.page5= false; this.page6= false; this.page7= false; this.page8= false;
                this.page9= false; this.page10= false; this.page11= false;this.page12= false; this.page13= true;  break;
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
                        this.onSelectPage(11);break;
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
                        this.onSelectPage(11);break;
                    case 7:
                        this.valorDia = this.ValorDiaPersonalizado
                        console.log('valorDia: ', this.valorDia);
                        this.onSelectPage(4);break;
                    case 8: 
                         //setValor(8,0)
                        this.validarEmailNome();
                        if( this.nomeValido == 2 && this.emailValido == 2){
                            //this.valorMotivo = this.ValorMotiPersonalizado;
                            //console.log('valorMotivo: ', this.valorMotivo);
                            console.log('valorNome: ', this.valorNome);
                            console.log('valorContato: ', this.valorContato);  
                            //nao faz nada, esta usando o codigo de monitoramento do RD                      
                            //this.enviarSimulacaoRD();      
                            this.onSelectPage(5);                                        
                        }
                        break;
                    case 9: 
                        this.validarCpfCnpjTelefone();
                        console.log('termoPrivacidade ', this.termoPrivacidade);
                        if(this.telefoneValido == 2 && this.valorNegocio !== '' && this.cpfCnpjValido == 2 
                            && (this.termoPrivacidade == true || this.termoPrivacidade == 'true')){
                            console.log('valorCpfCnpj: ', this.valorCpfCnpj);
                            console.log('valorTelefone: ', this.valorTelefone);
                            console.log('valorTelefone2: ', this.valorTelefone2);
                            console.log('valorNegocio: ', this.valorNegocio);
                            console.log('finalizarSimulacao(): ');
                            this.finalizarSimulacao();
                        }break;
            }
        },
        setCreditoManual(tipo){
            if(tipo){
                if(this.valorPersonalizado >500){
                this.valorPersonalizado = Number(this.valorPersonalizado) - 500;
                }          
            }else{ 
                if(this.valorPersonalizado <20000){
                this.valorPersonalizado = Number(this.valorPersonalizado) + 500;
                }
            }
            
        },
        setParcelaManual(tipo){
            if(tipo){
                if(this.valorParcPersonalizada >1){
                this.valorParcPersonalizada = Number(this.valorParcPersonalizada) - 1;
                }          
            }else{ 
                if(this.valorParcPersonalizada <24){
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
            
        },
        setNegocio(op){

            switch(op){
                case 1: 
                this.valorNegocio = 'Pensando em começar um negócio'; this.op1=true; this.op2=false; this.op3=false; break;
                case 2: 
                this.valorNegocio = 'Iniciei há poucos dias'; this.op1=false; this.op2=true; this.op3=false;break;
                case 3: 
                this.valorNegocio = 'Iniciei há poucos dias'; this.op1=false;this.op2=false; this.op3=true;break;
            }
            //valida o campo como certo
            this.negocioValido = 2; 

            console.log("valorNegocio ", this.valorNegocio);
            console.log("op1, op2, op3 ", this.op1+", "+this.op2+", "+this.op3);
        },
        enviarSimulacaoRD(){
            let uri = this.url + "ping";
            let that = this;

            let data_array = [{
                    name: 'email',
                    value: this.valorContato
                    },
                    {
                    name: 'identificador',
                    value: 'lead1-site-vue'
                    },
                    {
                    name: 'token_rdstation',
                    value: 'f3b828f52805c8603ffd2ec578c7af1a'
                    },
                    {
                    name: 'nome_Completo',
                    value: this.valorNome
                    }
                ];

			axios.get(uri)
                    .then(function (response) {
                        // handle success
                        console.log("Enviou RM ", response, data_array);
                        that.onSelectPage(5);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log("ERRO Enviou RM ", error);
                    });  
        },
        finalizarSimulacao(){ 
            let uri = this.url + "leads";
            let that = this;
            this.isLoadingACBS = true;
            let json = {
                "Lead":{
                        "Cliente":{
                            "cpf": this.valorCpfCnpj,
                            "nome": this.valorNome,
                            "email": this.valorContato,
                            "telefone1": this.valorTelefone,
                            "telefone2": this.valorTelefone2,
                            "flag":"lead_site"
                        },
                        "Formulario":{
                            "valor_solicitado": this.valorCredito,
                            "prazo_solicitado": this.valorParcela,
                            "tempo_de_negocio": this.valorNegocio
                        }
                    }
            };

			axios.post(uri, json)
                    .then(function (response) {
                        // handle success
                        console.log("Enviou ACBS ", response, json);
                         that.isLoadingACBS = false
                         that.onSelectPage(13);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log("ERRO Enviou ACBS ", error, json);
                        that.isLoadingACBS = false
                        alert("Erro ao enviar Simulação");
                    });            
        },
        limparValores(){
            //volta tudo para o padrão
            this.valorPersonalizado= 3000;
            this.valorParcPersonalizada= 6;
            this.ValorDiaPersonalizado= 5;
            this.ValorMotiPersonalizado= "";
            this.valorCredito=0;
            this.valorParcela=0;
            this.valorDia=0;
            this.valorMotivo= "";
            this.valorParcelaFinal= "Sujeito análise de crédito";
            this.valorNome= "";
            this.valorContato="";
            this.valorTelefone= "";
            this.valorTelefone2= "";
            this.valorNegocio= "";
            this.valorCpfCnpj= "";
        },
        validarEmailNome(){
            //validador de email separado para o evento de input do form
             var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
           
            if(reg.test(this.valorContato)) {console.log("passou"); this.emailValido =  2;} 
            else {console.log("falhou");this.emailValido =  3;}

            if(this.valorNome != '' && this.valorNome.trim().length > 0){
                this.nomeValido = 2
            }else{
                this.nomeValido = 3
            }             
        },
        validarCpfCnpjTelefone(){
            if(this.valorTelefone.length == 11) {console.log("passou"); this.telefoneValido =  2;} 
            else {console.log("falhou");this.telefoneValido =  3;}

            if(this.valorCpfCnpj.length == 14 ||  this.valorCpfCnpj.length == 18){
                this.cpfCnpjValido = 2
            }else{
                this.cpfCnpjValido = 3
            }

            if(this.valorNegocio != ''){
                this.negocioValido = 2
            }else{
                this.negocioValido = 3
            }                        
        }
    }
    };
    
</script>

<style scoped>

    input{ padding: 8px; border-radius: 5px; border: 1px solid #ccc;}

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
        display: flex;

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

    .botao-azul:hover, .bt-slide:hover, .conteudo-valor-combo:hover {
        background:#009bb5;
    }

    .menu-seta {
        margin-left:10px;
        cursor:pointer;
        width:100px;
        
    }

    .menu-seta:hover {
        /*margin-left:0px;*/
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

    /******/

    .painel-valores{
        width: 100%;
        margin-left: 10px;
        padding: 0 0 0 5%;
        display: flex;
        position: relative;
        animation-duration: 2s;
        animation-delay: 8s;
        animation-iteration-count: infinite; 
    }

    .painel-valores1, .painel-resumo {
        width: 100%;
        margin-left: 10px;
        padding: 0 0 0 0px;
    }

    .botao-conteudo-azul{
        width: 200px;
        height: 65px;
        border-radius: 6px;
        background: #00B8D7;
        margin: 10px;
        padding: 10px;
        text-align: center;  
        cursor:pointer;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        user-select: none;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
        text-transform: uppercase;
        height: 4rem;
        cursor: pointer;
        text-align: center;
        -webkit-box-pack: center;
        justify-content: center;
        display: flex;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
        border-width: 2px;
        border-style: solid;
        border-image: initial;
        border-radius: 6px;
        padding: 0px;
        
    }

    .botao-conteudo-azul1{
        width: 80%;
        height: 65px;
        border-radius: 6px;
        background: #00B8D7;
        margin: 10px;
        padding: 10px;
        text-align: center;  
        cursor:pointer;
    }

    .botao-resumo{
        min-width: 48%;
        min-height: 65px;
        border-radius: 6px;
        background: #00B8D7;
        margin: 0 0 0 0;
        padding: 10px;
        text-align: center;  
        cursor:pointer;
    }

    .botao-conteudo-azul h3, .botao-conteudo-azul h4, .botao-conteudo-azul h5{
        font-weight: 600;
        font-size: 22px;
    }

    .botao-conteudo-azul:hover, .botao-conteudo-azul1:hover, .bt-options:hover, .bt-options-selected:hover{
        background:#009bb5;
    }
    .p-label{
        color: #6E747F;
        margin:0;
        padding: 0 0 0 0px;
    }

    .p-erro{
        color: red;
    }

    .bt-options, .bt-options-selected{
        width: 90%;
        background: #00B8D7;
        color: #fff;
        padding: 8px;
        border-radius: 5px;
        margin: 0 0 5px 15px;
        cursor:pointer;
    }

    .bt-options-selected{
        background:#4C516D;
    }

    .b-erro{
        border: 1px solid red;
    }


</style>
