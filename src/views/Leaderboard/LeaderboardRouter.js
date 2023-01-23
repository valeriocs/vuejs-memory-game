export default {
  name: 'Leaderboard',
  path: 'leaderboard',
  meta: {
    icon: 'sort',
    title: 'Confira se o seu nome está no ranking',
  },
  component: () => import('./index.vue'),
};
