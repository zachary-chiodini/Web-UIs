import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "SearchShow",
    component: () => import(
      /*webpackChunkName: "search-view"*/ "@/views/SearchShow.vue"
      ),
  },
  {
    path: "/post",
    name: "PostShow",
    component: () => import(
      /*webpackChunkName: "post-view"*/ "@/views/PostShow.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
