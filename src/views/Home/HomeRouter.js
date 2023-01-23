export default {
  name: 'Home',
  path: '/',
  meta: {
    icon: 'home',
    title: 'Seja bem vindo ao Vuejs - Memory Game',
  },
  component: () => import('./index.vue'),
};
