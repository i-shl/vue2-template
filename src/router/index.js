import Vue from "vue";
import VueRouter from "vue-router";
import { RouterMap } from "./router.config";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: RouterMap,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  // console.log('全局导航守卫：from',from,'to',to);
  document.title = to.matched[0].meta.title;
  next();
});

export default router;
