import "@/assets/css/global.css";
import Vue from "vue";
import AOS from "aos";
import App from "./App.vue";
import "./assets/sass/reset.scss";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
