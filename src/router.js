import Vue from 'vue';
import Router from 'vue-router';
import children from './app/Arch/routes';
import Layout from './components/Layout.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Layout',
      path: '/',
      component: Layout,
      children,
    },
  ],
});

export default router;
