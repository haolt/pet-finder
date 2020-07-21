import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import store from '../store';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/warning',
    name: 'Warning',
    component: () => import('../views/Warning.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {

//   if (to.path === '/search') {
//     if (!store.state.isLogin) {
//       next('/warning');
//     }
//   }

//   next();
// });

export default router;
