import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Adocao from "../modules/Adocao/pages/Adocao.vue";
import Home from "../modules/home/pages/Home.vue";
import SobreNos from "../modules/sobreNos/pages/SobreNos.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobrenos",
    name: "SobreNos",
    component: SobreNos,
  },
  {
    path: "/adocao",
    name: "Adocao",
    component: Adocao,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
