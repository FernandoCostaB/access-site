<template>
    <div class="footer">
        <section class="cid-rQcvYOMQLD" id="footer1-11">
                <div class="container">
                    <div class="media-container-row content text-white">
                        <div class="col-12 col-md-3">
                            <div class="media-wrap">
                                <a href=""><img class="img-footer" src="/assets/images/image.png" alt="AccessCrédito" title="AccessCrédito"> </a>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 mbr-fonts-style display-7">
                            <h5 class="pb-3">Endereço</h5>
                            <p class="mbr-text">ACCESSCRÉDITO – CNPJ 13.058.743/0001-64 – R. Curió Nº 71 – Cidade Nova, Manaus - AM | © AccessCrédito</p>
                            <router-link class="nav-link link text-whith display-4" to="/contact">OUVIDORIA</router-link>
                        </div>
                        <div class="col-12 col-md-3 mbr-fonts-style display-7">
                            <h5 class="pb-3">
                    Email</h5>
                            <p class="mbr-text"><a href="mailto:sac@accesscredito.com.br" target="blank">sac@accesscredito.com.br&nbsp;</a></p>
                            <h5 class="pb-3">
                    Acesse Nosso Blog</h5>
                          <button class="minhaconta"><a class="nav-link link text-black display-4" href="https://blog.accesscredito.com.br/" target="blank">Blog</a></button>
                            
                    </div>
                        
                        <div class="col-12 col-md-3 mbr-fonts-style display-7">
                            <h5 class="pb-3"></h5>
                            <p class="mbr-text">Oi! Leu até aqui? Você se preocupa com os mínimos detalhes, mesmo. A gente também. Por isso o time da AccessCrédito está sempre
                            trabalhando para trazer o melhor Crédito para seu negócio, vamos crescer Juntos ; )</p>
                        </div>
                        
                    </div>
                    <div class="footer-lower">
                        <div class="media-container-row mbr-white">
                            <div class="col-sm-12">
                                <hr>
                                <p class="text-left"><small>O uso desse site está sujeito às regras descritas na <router-link to="/politica">Política de Privacidade</router-link>.</small></p>
                                <hr>
                            </div>
                        </div>
                        <div class="media-container-row mbr-white">
                            <div class="col-sm-6 copyright">
                                <p class="text-left">{{ nota_rodape }}</p>
                            </div>
                            <div class="col-md-6">
                                <div class="social-list align-right">
                                    <div class="soc-item">
                                        <a href="https://www.facebook.com/accesscreditobrasil" target="_blank"> <span class="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span> </a>
                                    </div>
                                    <div class="soc-item">
                                        <a href="https://www.instagram.com/accesscredito/" target="_blank"><span class="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span> </a>
                                    </div>
                                    <div class="soc-item">
                                        <a href="https://www.youtube.com/channel/UChV1fMiMyuK17_wAGVABcVg" target="_blank"> <span class="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span> </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <br>
            </section>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data () {
        return { 
            url: process.env.VUE_APP_ROOT_API, 
            title: process.env.VUE_APP_TITLE,
            version: process.env.VUE_APP_VERSION,
            nota_rodape: process.env.VUE_APP_EMPRESA,
            ano: process.env.VUE_APP_ANO,
        }        
    }
}
</script>

<style lang="less" scoped>

</style>