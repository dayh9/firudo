import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Offer from "../views/Offer.vue";
import Formulage from "../views/Formulage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/offer",
    name: "Offer",
    component: Offer,
  },
  {
    path: "/form",
    name: "Formulage",
    component: Formulage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
