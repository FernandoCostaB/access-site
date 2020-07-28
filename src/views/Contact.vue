<template>
  <div class="contact">
      <NavMenu />      
    <section class="engine"><a href="https://accesscredito.com.br">AccessCrédito</a></section><section class="mbr-section form1 cid-rQY8hBKryH" id="form1-2s">
      <div class="container">
        <div class="row justify-content-center">
            <div class="title col-12 col-lg-8">
                <h2 class="mbr-section-title align-center pb-3 mbr-fonts-style display-2">OUVIDORIA</h2>
                <h3 class="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-5">Em caso de seus problemas não terem sido resolvidos através de nosso atendimento, envie-nos uma mensagem pelo formulário abaixo ou ligue.</h3>
                <p style="text-align: center; font-size: 32px;"> 0800 591 4108 </p>
            </div>
        </div>
      </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="media-container-column col-lg-8 form-contact" data-form-type="formoid">
                    <!---Formbuilder Form-->
                    <form action="http://acbs.homologacao.accesscredito.com.br:8989/" method="POST" class="mbr-form form-with-styler" data-form-title="Mobirise Form"><input type="hidden" name="email" data-form-email="true" value="YLChrIK9CgCy149VlR1OZ9jQOpS1NId7TgSUpm7tVFvArZJvSZ0rbRWoZzyDuFbeOrSQk6bJNwLceddlScRxL6rBT9S+V9sQlNqLFAkoJBRvutnIib2BreGweosaOGoa">
                        <div class="row">
                            <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Obrigado! Sua mensagem foi enviada, em breve entraremos em contato.</div>
                            <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                            </div>
                        </div>
                        <div class="dragArea row">
                            <div class="col-md-4  form-group" data-for="name">
                                <label for="name-form1-2s" class="form-control-label mbr-fonts-style display-7">Name</label>
                                <input type="text" name="name" data-form-field="Name" required="required" class="form-control display-7" id="name-form1-2s">
                            </div>
                            <div class="col-md-4  form-group" data-for="email">
                                <label for="email-form1-2s" class="form-control-label mbr-fonts-style display-7">Email</label>
                                <input type="email" name="email" data-form-field="Email" required="required" class="form-control display-7" id="email-form1-2s">
                            </div>
                            <div data-for="phone" class="col-md-4  form-group">
                                <label for="phone-form1-2s" class="form-control-label mbr-fonts-style display-7">Telefone</label>
                                <input type="tel" name="phone" data-form-field="Phone" class="form-control display-7" id="phone-form1-2s">
                            </div>
                            <div data-for="message" class="col-md-12 form-group">
                                <label for="message-form1-2s" class="form-control-label mbr-fonts-style display-7">Mensagem</label>
                                <textarea name="message" data-form-field="Message" class="form-control display-7" id="message-form1-2s"></textarea>
                            </div>
                            <div class="col-md-12 input-group-btn align-center"><button type="submit" class="btn btn-primary btn-form display-4">Enviar</button></div>
                            
                        </div>
                    </form><!---Formbuilder Form-->
                </div>
            </div>
        </div>
        <div id="ScrollContact" class="scrollToTop mbr-arrow-up contactScroll">

        <a class="Scrolldecoration" style="text-align: center;" href="/">solicite aqui<i class="button-solicite"></i></a>
    </div>
    </section>
    
    <FloatActionButton/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import FloatActionButton from "@/components/FloatActionButton.vue";
import NavMenu from "@/components/NavMenu.vue";

export default {
  name: "Contact",
  components: {
    FloatActionButton,
    NavMenu
  },
    mounted() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
};
</script>
