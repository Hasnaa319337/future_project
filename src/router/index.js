import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",

      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/packages",
      name: "packages",

      component: () => import("../views/PackagesView.vue"),
    },
    {
      path: "/contact",
      name: "contact",

      component: () => import("../views/ContactView.vue"),
    },

    // user links views
    {
      path: "/myaccount",
      name: "myaccount",

      component: () => import("@/views/UserLinks/MyAccount.vue"),
    },
    {
      path: "/myneeds",
      name: "myneeds",

      component: () => import("@/views/UserLinks/MyNeeds.vue"),
    },
    {
      path: "/mypocket",
      name: "mypocket",

      component: () => import("@/views/UserLinks/MyPocket.vue"),
    },
    {
      path: "/mywishes",
      name: "mywishes",

      component: () => import("@/views/UserLinks/MyWishes.vue"),
    },
    {
      path: "/mysubcription",
      name: "mysubcription",

      component: () => import("@/views/UserLinks/MySubscriptions.vue"),
    },
  ],
});

export default router;
