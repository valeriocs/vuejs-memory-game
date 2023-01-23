export default {
  name: 'Game',
  path: 'memory-game',
  meta: {
    icon: 'videogame_asset',
    title: 'Vuejs - Memory Game',
  },
  component: () => import('./index.vue'),
};
