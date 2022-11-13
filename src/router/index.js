import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("../views/index/Index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/Home.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   next();
// });

export default router;
