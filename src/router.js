import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

const routes = [
  { path: "/marketplace/companies", component: Home },
  {
    path: "/marketplace/companies/:company",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
