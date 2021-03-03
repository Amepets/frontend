import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Adocao from "../modules/Adocao/pages/Adocao.vue";
import Home from "../modules/home/pages/Home.vue";
import SobreNos from "../modules/sobreNos/pages/SobreNos.vue";
import Ajuda from "../modules/Ajuda/pages/Ajuda.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sobrenos",
    name: "SobreNos",
    component: SobreNos
  },
  {
    path: "/adocao",
    name: "Adocao",
    component: Adocao
  },
  {
    path: "/Ajuda",
    name: "Ajuda",
    component: Ajuda
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
