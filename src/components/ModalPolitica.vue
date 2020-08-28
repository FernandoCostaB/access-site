<template>
  <div class="modalPolitica">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header color-titulo">
                <slot name="header">
                  Política de Privacidade
                </slot>
                <div class="modal_x"  @click="$emit('close')">&times;</div>
              </div>

              <div class="modal-body color-texto">
                <slot name="body">
                  A AccessCrédito zela pela confidencialidade, privacidade e 
                    proteção dos dados pessoais de seus clientes e visitantes, protegendo 
                    essas informações de perdas, uso impróprio, acesso não autorizado, 
                    alteração e destruição, mantendo assim a relação de confiança, respeito e 
                    transparência construída junto a seu público, em hipotese alguma não podendo 
                    ser vendidos, trocados ou divulgados a terceiros.
                    A presente política abrange o tratamento que a AccessCrédito 
                    dá às informações capazes de identificar os usuários, sejam as coletadas 
                    diretamente em seu Site (www.accesscredito.com.br), sejam as armazenadas 
                    em suas bases de dados eletrônicos por outros meios de coleta, tais como 
                    cadastros preenchidos em meio físico ou consultas ao serviço de atendimento 
                    telefônico ao cliente.
                    Todas as transações através do nosso site são executadas com a 
                    tecnologia SSL (Secure Socket Layer – tecnologia de criptografia que garante 
                    a segurança do site; também reconhecida pelo desenho de um pequeno cadeado), 
                    garantindo que todos os seus dados pessoais não possam ser interceptados por 
                    terceiros. Esta é a mesma tecnologia utilizada pelos grandes bancos para 
                    transações on-line com seus clientes.
                    A AccessCrédito nunca solicita informações sobre o seu empréstimo 
                    por e-mail ou telefone. Caso alguém entre em contato com você solicitando 
                    informações pessoais, mesmo que se identifique como alguém de 
                    nossa equipe ou de um de nossos parceiros, por favor, desligue o 
                    telefone e entre em contato com nossa central de atendimento (92)99494-1733, 
                    pois pode tratar-se de uma tentativa de fraude.
                    Alertamos também que nunca enviamos e-mails com arquivos anexos que possam
                    ser executados (tais como .exe, .com, .dmg, etc.) e com isso causar algum dano ao seu 
                    computador ou dispositivo móvel. Nossas mensagens também não contém link para eventuais 
                    downloads em seu computador. Caso você clique numa mensagem que você achou que fosse 
                    da AccessCrédito e foi feito o download de um arquivo em seu computador, apague-o 
                    imediatamente e entre em contato com nossa central de atendimento.
                    A entrada de dados pessoais do usuário no Site da AccessCrédito - Sociedade de 
                    Crédito ao Microempreendedor e a Empresa de Pequeno Porte SA e a aceitação de 
                    cookies de navegação não constituem requisito para navegar pelo portal, sendo 
                    facultativas. Porém, alguns ambientes estarão limitados sem estes requisitos. 
                    O usuário que decidir fornecer seus dados pessoais declara conhecer e aceitar 
                    os termos desta Política. Para fins desta Política, devem ser observadas as 
                    seguintes considerações:
                    1. Proteção e privacidade dos dados
                    1.1. As informações solicitadas aos usuários são as mínimas necessárias 
                    para o desenvolvimento dos negócios a serem analisados pela AccessCrédito, 
                    e ficam armazenadas em nossa base de dados, em ambiente seguro.
                    1.2. Os colaboradores da AccessCrédito envolvidos nos processos 
                    têm conhecimento dessa política e apenas o pessoal qualificado e autorizado 
                    tem permissão para acessar os dados pessoais coletados, sob pena de sofrer 
                    sanção disciplinar em caso de violação das normas previstas pela política.
                    1.3. A apresentação de informações só ocorrerá através de requisição do 
                    próprio cliente ou ordem judicial. A AccessCrédito se compromete a usar as 
                    informações dos usuários apenas para as finalidades as quais foram coletadas 
                    reservando-nos o direito de destruí-las após sua utilização se necessário. 
                    A AccessCrédito exige de suas empresas parceiras e prestadores de serviços
                    à garantia de proteção e privacidade de dados assegurados em nossa política 
                    quando há necessidade de compartilhamento dos mesmos.
                    1.4. O usuário tem ciência e concorda que os dados pessoais coletados serão utilizados pela AccessCrédito.                                 
                    2. Obtenção e Uso das Informações Navegacionais
                    2.1. A AccessCrédito também recebe e armazena automaticamente, informações em seus servidores 
                    sobre as atividades advindas do navegador, incluindo o endereço IP e a página acessada.
                    3. Obtenção e Uso das Informações Pessoais
                    3.1. A AccessCrédito coleta informações pessoais, capazes de identificar os usuários, 
                    quando estes: a) se cadastram em nosso Site; b) entram em contato conosco pelos 
                    canais de atendimento ao usuário.
                    3.2. A AccessCrédito só coleta informações pessoais de usuários maiores de 21 anos.
                    4. Proteção das Informações Pessoais
                    4.1. O acesso às informações coletadas é restrito aos colaboradores e pessoas autorizadas 
                    e envolvidas na prestação de serviços. Colaboradores e/ou pessoas autorizadas que se utilizarem 
                    indevidamente dessas informações estarão infringindo nossa Política de Proteção e Privacidade 
                    dos Dados, estarão sujeitos às penalidades previstas em nosso processo disciplinar, 
                    sem exclusão das demais medidas legais cabíveis.
                    4.2. Todos os dados pessoais coletados serão incorporados ao banco de dados da 
                    AccessCrédito, sendo seu responsável o mesmo, com sede na Rua Curió nº71, Cidade Nova, Manaus/AM, CEP:69095-060.
                    4.3. O usuário garante a veracidade e exatidão dos dados pessoais que fornecer 
                    neste Site, assumindo a correspondente responsabilidade caso não sejam estes verdadeiros. 
                    A AccessCrédito não assume qualquer responsabilidade em caso de inexatidão dos 
                    dados pessoais introduzidos pelo usuário neste Site.
                    4.4. A AccessCrédito utiliza as informações coletadas para os seguintes propósitos 
                    gerais: (i) consultar o CPF do cliente nas Centrais de Risco para fins de obter um 
                    empréstimo (ii) informar a respeito de novos produtos da empresa; 
                    (ii) manter atualizados os cadastros dos usuários para fins de contato telefônico, 
                    por correio eletrônico, mala direta, SMS ou outros meios de comunicação; 
                    (iii) aperfeiçoar a usabilidade e a experiência interativa durante a navegação 
                    do usuário no Site; (iv) elaborar estatísticas gerais, sem que haja identificação 
                    dos usuários; (v) responder às dúvidas e solicitações de seus usuários; (vi) 
                    realizar campanhas de comunicação e marketing de relacionamento, bem como 
                    divulgar ofertas especiais de parceiros; e (vii) comunicar-se com os usuários, 
                    a fim de lhes dar informações sobre a Empresa.
                    5. Alterações da nossa Política de Privacidade
                    5.1. Esta Política de Privacidade está sujeita a constantes melhorias e aprimoramentos. 
                    Assim, recomendamos sua leitura periódica.
                    5.2. Contudo, caso da AccessCrédito Sociedade de Crédito ao Microempreendedor SA,
                    em algum momento, promova mudança substancial na maneira de usar as informações 
                    pessoais coletadas, as novas condições de privacidade e segurança da informação 
                    serão informadas: a) ao público em geral, mediante anúncio em destaque em nossa 
                    página principal; e b) aos usuários cadastrados, mediante comunicação eletrônica.
                    Ao utilizar o site da AccessCrédito, será automaticamente manifestada a concordância do 
                    usuário com os termos e condições constantes da presente Política de Proteção e Privacidade.
                    Em caso de perguntas ou sugestões, solicitamos o envio de mensagem através do Fale Conosco 
                    no site www.accesscredito.com.br.
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <!--button class="modal-default-button" @click="$emit('close')">
                    Fechar
                  </button-->
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>    
  </div>
</template>

<script>
export default {
  name: "ModalPolitica",
  data() { 
    return {
    }
  }
};
</script>

<style scoped>
    .color-titulo{
        color: #2c3e50;
    } 
    .color-texto{
        color: #767676;
        text-align: justify;
    }
    .modal_x{
        margin-top: -10px;
        cursor: pointer;
        font-size: 30px;
        top:50;
        right: 0;
    }
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {  
        max-width: 600px;
        height: 400px;
        min-width: 200px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        overflow: scroll;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
    margin-top: 0;
    }

    .modal-body {  
    margin: 20px 0;
    
    }

    .modal-default-button {
    float: right;
    }

    .modal-enter{
    opacity: 0;
    }
    .modal-leave-active {
    opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }

</style>
