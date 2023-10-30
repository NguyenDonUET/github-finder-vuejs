import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "/search",
        name: "search",
        component: () => import("@/views/SearchResult.vue"),
        beforeEnter: (to, from) => {
          // console.log(Object.keys(to.query).length === 0);
          if (
            Object.keys(to.query).length === 0 ||
            !to.query.q ||
            !to.query.page
          ) {
            return { name: "Home" };
          }
        },
      },
    ],
  },
  {
    path: "/users/:username",
    component: () => import("@/views/UserDetail.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
