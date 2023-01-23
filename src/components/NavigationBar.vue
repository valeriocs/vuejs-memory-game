<template lang="pug">
  v-tabs(fixed-tabs color="orange-peel")
    v-tab(
      :key="index"
      :to="route.path"
      v-for="(route, index) in sidebarRoutes"
      )
      .route-title {{ route.name }}
</template>

<script>
import Routes from '@/app/Arch/routes';

export default {
  name: 'Sidebar',
  props: {
    drawer: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    sidebarRoutes() {
      return Routes;
    },
  },
};
</script>
