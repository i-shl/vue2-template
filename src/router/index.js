import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/error/404.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("../views/index/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title; //动态改变浏览器标题
//   if (to.path === "/login") {
//     next();
//   } else {
//     if (cookies.get("token")) {
//       next();
//     } else {
//       next("/login");
//     }
//   }
// });

export default router;
