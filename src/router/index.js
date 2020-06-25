import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hello from "../views/Hello.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  { path: "/hello", name: "Hello", component: Hello },
  {
    path: "/about", 
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("../views/Contact.vue")
  },
  {
    path: "/politica",
    name: "Politica",
    component: () =>
      import("../views/Politica.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
