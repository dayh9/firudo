import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Offer from "../views/Offer.vue";
import Form from "../views/Form.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/offer/:title/:id",
    name: "Offer",
    component: Offer,
  },
  {
    path: "/form/:id?",
    name: "Form",
    component: Form,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
