import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Offer from "../views/Offer.vue";
import Form from "../views/Form.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Admin from "@/views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      guest: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      guest: true,
    },
  },
  {
    path: "/offer/:title",
    name: "Offer",
    component: Offer,
    meta: {
      guest: true,
    },
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      guest: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
