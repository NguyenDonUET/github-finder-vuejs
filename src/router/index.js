import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/users/:username",
    component: () => import("@/views/UserDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
