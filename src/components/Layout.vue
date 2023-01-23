<template lang="pug">
  div
    toolbar(@change-drawer="changeDrawer")
      template(slot="tab-bar")
        navigation-bar(:drawer="drawerVisibility")
    v-content
      v-container(fluid)
        v-slide-y-transition(mode="out-in")
          router-view
</template>

<script>
import NavigationBar from './NavigationBar.vue';
import Toolbar from './Toolbar.vue';

export default {
  components: {
    NavigationBar,
    Toolbar,
  },
  data: () => ({
    drawerVisibility: true,
  }),
  methods: {
    changeDrawer() {
      this.drawerVisibility = !this.drawerVisibility;
    },
  },
};
</script>
