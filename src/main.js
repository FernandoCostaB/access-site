import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
/*import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/assets/popper/popper.min.js';
import './../node_modules/assets/touchswipe/jquery.touch-swipe.min.js';
import './../node_modules/assets/viewportchecker/jquery.viewportchecker.js';
import './../node_modules/assets/dropdown/js/nav-dropdown.js';
import './../node_modules/assets/dropdown/js/navbar-dropdown.js';
import './../node_modules/assets/smoothscroll/smooth-scroll.js';
import './../node_modules/assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js';
import './../node_modules/assets/mbr-testimonials-slider/mbr-testimonials-slider.js';
import './../node_modules/assets/tether/tether.min.js';
import './../node_modules/assets/theme/js/script.js';*/


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
